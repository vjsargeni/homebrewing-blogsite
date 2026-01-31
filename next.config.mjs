import { withPayload } from '@payloadcms/next/withPayload'

const cspHeader = `default-src 'self';
    connect-src 'self' pbvqaaqeuqdmjtkzzlqy.storage.supabase.co cdn.jsdelivr.net;
    script-src 'self' 'unsafe-inline' cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline' cdn.jsdelivr.net;
    img-src 'self' blob: data: www.gravatar.com;
    worker-src 'self' blob:;
    font-src 'self' cdn.jsdelivr.net;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors localhost;
    upgrade-insecure-requests;`

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'Cache-Control',
            value: 'no-cache must-revalidate max-age=1800',
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig)
