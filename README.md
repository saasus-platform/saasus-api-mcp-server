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

## Cursorでの設定

### 1. 設定画面の表示

Cursorの設定を開き、「MCP」セクションに移動してください。

### 2. サーバー設定の追加

以下の設定を追加してください。

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

## API認証情報の取得

以下の認証情報をSaaSus Platformから取得してください。

- `SAASUS_PLATFORM_APIKEY` - APIキー
- `SAASUS_PLATFORM_SAASID` - SaaS ID
- `SAASUS_PLATFORM_SECRETKEY` - シークレットキー

これらの情報は、SaaSus PlatformのSaaS開発コンソール > 基本設定 > APIキーから取得できます。
