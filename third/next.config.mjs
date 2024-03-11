/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
          fullUrl: true,
        },
      },
    images: {
        remotePatterns: [{
            hostname: 'd2norla3tyc4cn.cloudfront.net',
            pathname: '/i/s3/**',
        }]
    }
};

export default nextConfig;
