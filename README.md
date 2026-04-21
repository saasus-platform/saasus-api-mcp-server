# SaaSus API MCP Server

SaaSus API MCP Serverは、Model Context Protocol (MCP) サーバーとして動作し、SaaSus Platform APIをClaude DesktopやCursorなどのMCP互換クライアントから利用できるようにします。

## 前提条件

- Node.js（v16以上必須、v20以上推奨）
- npm（Nodeに含まれています）

## インストール

### 1. リポジトリのクローン

以下のコマンドでプロジェクトをクローンしてください。

```sh
git clone https://github.com/saasus-platform/saasus-api-mcp-server.git
cd saasus-api-mcp-server
```

### 2. 依存関係のインストール

プロジェクトのルートディレクトリで以下のコマンドを実行してください。

```sh
npm install
```

## 利用可能なツールの確認

生成されたツールの説明とパラメータを確認するには、以下のコマンドを実行してください。

```sh
node index.js tools
```

実行例：

```
Available Tools:
Workspace: saasus-auth-api-schema
  Collection: get-basic-configurations.js
    get_basic_configurations
      Description: Get basic configurations including domain name and CNAME records.
      Parameters:
    [...]
```

### 読み取り専用モードでのツール確認

安全な読み取り専用モードでツールを確認する場合：

```sh
SAASUS_PLATFORM_API_READ_ONLY_MODE=true node index.js tools
```

実行例：

```
Available Tools:
（GETメソッドのみのツールが表示されます）
```

## Claude Desktopでの設定

### 1. パスの確認

nodeのパスを確認してください。

```sh
which node
```

`mcpServer.js`のパスを確認してください。

```sh
realpath mcpServer.js
```

### 2. Claude Desktopの設定

Claude Desktopを開き、「設定」→「開発者」→「構成を編集」からサーバー設定を追加してください。

```json
{
    "mcpServers": {
        "saasusapis": {
            "command": "/path/to/node",
            "args": [
                "/path/to/mcpServer.js"
            ],
            "env": {
                "SAASUS_PLATFORM_SAASID": "3bCJatwxxx4xxxx",
                "SAASUS_PLATFORM_APIKEY": "wRita7kxxx9N6cqUwxxxx",
                "SAASUS_PLATFORM_SECRETKEY": "BLIxxxrgvTQnSxxxx",
                "SAASUS_PLATFORM_API_URL_BASE": "https://api.saasus.io"
            }
        }
    }
}
```

設定後、Claude Desktopを再起動してください。

### 3. 読み取り専用モードでの設定（推奨）

セキュリティを重視する場合は、読み取り専用モードを有効にしてください：

```json
{
    "mcpServers": {
        "saasusapis": {
            "command": "/path/to/node",
            "args": [
                "/path/to/mcpServer.js"
            ],
            "env": {
                "SAASUS_PLATFORM_SAASID": "3bCJatwxxx4xxxx",
                "SAASUS_PLATFORM_APIKEY": "wRita7kxxx9N6cqUwxxxx",
                "SAASUS_PLATFORM_SECRETKEY": "BLIxxxrgvTQnSxxxx",
                "SAASUS_PLATFORM_API_URL_BASE": "https://api.saasus.io",
                "SAASUS_PLATFORM_API_READ_ONLY_MODE": "true"
            }
        }
    }
}
```

読み取り専用モードの特徴：
- **安全性**: GETメソッドのみ利用可能（データ変更操作を防止）
- **用途**: データ分析、監視、レポート生成に最適
- **セキュリティ**: 攻撃面を削減し、誤操作を防止

## Cursorでの設定

### 1. 設定画面の表示

Cursorの設定を開き、「MCP」セクションに移動してください。

### 2. サーバー設定の追加（読み取り専用モード推奨）

安全な読み取り専用モードでの設定を推奨します：

```json
{
    "mcpServers": {
        "saasusapis": {
            "command": "/path/to/node",
            "args": [
                "/path/to/mcpServer.js"
            ],
            "env": {
                "SAASUS_PLATFORM_SAASID": "3bCJatwxxx4xxxx",
                "SAASUS_PLATFORM_APIKEY": "wRita7kxxx9N6cqUwxxxx",
                "SAASUS_PLATFORM_SECRETKEY": "BLIxxxrgvTQnSxxxx",
                "SAASUS_PLATFORM_API_URL_BASE": "https://api.saasus.io",
                "SAASUS_PLATFORM_API_READ_ONLY_MODE": "true"
            }
        }
    }
}
```

フルアクセスモードが必要な場合のみ、`SAASUS_PLATFORM_API_READ_ONLY_MODE` を削除してください。

## API認証情報の取得

以下の認証情報をSaaSus Platformから取得してください。

- `SAASUS_PLATFORM_APIKEY` - APIキー
- `SAASUS_PLATFORM_SAASID` - SaaS ID
- `SAASUS_PLATFORM_SECRETKEY` - シークレットキー

これらの情報は、SaaSus PlatformのSaaS開発コンソール > 基本設定 > APIキーから取得できます。

## 環境変数の設定オプション

### 必須設定
- `SAASUS_PLATFORM_APIKEY` - APIキー
- `SAASUS_PLATFORM_SAASID` - SaaS ID
- `SAASUS_PLATFORM_SECRETKEY` - シークレットキー

### オプション設定
- `SAASUS_PLATFORM_API_URL_BASE` - API Base URL（デフォルト: https://api.saasus.io）
- `SAASUS_PLATFORM_API_READ_ONLY_MODE` - 読み取り専用モード（`"true"`で有効、セキュリティ向上のため推奨）

## セキュリティ推奨事項

### 読み取り専用モードの利用
本番環境やセキュリティが重要な環境では、読み取り専用モードの利用を強く推奨します：

```bash
# 読み取り専用モードでのサーバー起動
SAASUS_PLATFORM_API_READ_ONLY_MODE=true node mcpServer.js
```

### 読み取り専用モードのメリット
- データの誤変更・削除を防止
- セキュリティリスクの軽減
- 監査・分析用途に最適
- 学習・検証環境での安全な利用

### 適用場面
- データ分析・レポート生成
- システム監視・ヘルスチェック
- 学習・トレーニング環境
- 検証・テスト環境
