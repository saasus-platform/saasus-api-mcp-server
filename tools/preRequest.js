import crypto from 'crypto';

// 「yyyymmddhhmm」形式の日付時刻文字列に変換する関数
function formatDateInYyyymmddhhmi(date = new Date()) {
    const yyyy = date.getUTCFullYear().toString();
    const mm = ("00" + (date.getUTCMonth() + 1)).slice(-2);
    const dd = ("00" + (date.getUTCDate())).slice(-2);
    const hh = ("00" + (date.getUTCHours())).slice(-2);
    const mi = ("00" + (date.getUTCMinutes())).slice(-2);

    return yyyy + mm + dd + hh + mi;
}

// 署名を作成する
function getSignature(url, method, apiKey, secret, body, targetTime) {
    // 日時情報
    const timestr = formatDateInYyyymmddhhmi(targetTime);

    // URLを解析してHost+URIを取得
    const urlObj = new URL(url);
    const hostUri = urlObj.host + urlObj.pathname + urlObj.search;

    // HMAC-SHA256で署名を作成
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(timestr);
    hmac.update(apiKey);
    hmac.update(method.toUpperCase());
    hmac.update(hostUri);

    if (body) {
        hmac.update(body);
    }

    return hmac.digest('hex');
}

export async function makeSigHeader(url, APIKey, SaaSID, SecretKey, body, method = 'GET') {
    const now = new Date();
    const signature = getSignature(url, method, APIKey, SecretKey, body, now);

    const header = `SAASUSSIGV1 Sig=${signature}, SaaSID=${SaaSID}, APIKey=${APIKey}`;
    console.error("Authorization Header:", header);
    return header;
}
