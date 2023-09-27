/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            //ドメイン名のDNS情報を事前に取得することを許可
            //ページの読み込み速度が向上する
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            //ブラウザがMIMEタイプを自動的に推測するのを防ぐ
            //例：XSS攻撃を防ぐ
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            //他のウェブページ内のフレームに埋め込むことを制御する
            //sameoriginは同じオリジンからのみを許可
            key: 'X-Frame-Options',
            value: 'sameorigin',
          },
          {
            //クロスサイトスクリプティング（XSS）フィルターを有効にする
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            //リファラの漏洩を制御する
            //strict-origin-when-cross-originは同じオリジンからのみリファラを送信
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // カメラ、マイクへのアクセスを許可しない
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=()',
          },
          {
            // スクリプトを許可するドメインを制限する
            key: 'Content-Security-Policy',
            value: "script-src 'self' www.googletagmanager.com",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
