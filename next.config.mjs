/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enforce best practices and highlight potential issues
    experimental: {
      appDir: true, // Ensures the app directory is used
    },
    typescript: {
      // Fail the build if type errors are present
      ignoreBuildErrors: false,
    },
  };
  
  export default nextConfig;
  