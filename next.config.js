/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.pixabay.com']
//   }
// };
const nextConfig = {};

module.exports =   {
  nextConfig: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
}