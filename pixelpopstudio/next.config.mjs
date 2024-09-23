/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match SVG files
        issuer: /\.[jt]sx?$/, // Apply the rule to JS and TS files
        use: ['@svgr/webpack'], // Use SVGR for SVG files
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  