/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
