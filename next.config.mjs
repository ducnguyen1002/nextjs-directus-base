/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    reactStrictMode: false,
    images: {
        // dangerouslyAllowSVG: true,
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'example.com',
        //         port: '',
        //         pathname: ''
        //     }
        // ]
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_ASSETS_URL: process.env.NEXT_PUBLIC_ASSETS_URL,
        NEXT_PUBLIC_FILES_URL: process.env.NEXT_PUBLIC_FILES_URL,
        NEXT_PUBLIC_PLACEHOLDER_IMAGE_URL: process.env.NEXT_PUBLIC_PLACEHOLDER_IMAGE_URL,
    }
};

export default nextConfig;
