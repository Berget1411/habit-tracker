/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    // This ensures compatibility with older Next.js versions
    outputStandalone: true,
  },
};

module.exports = nextConfig;
