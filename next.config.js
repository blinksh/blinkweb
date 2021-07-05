module.exports ={
  webpack5: true,
  pageExtensions: ["js", "ts", "tsx", "md", "mdx"],
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // we're in build mode so enable shared caching for the GitHub API
      process.env.USE_CACHE = "true";

      // const originalEntry = config.entry;

      // config.entry = async () => {
      //   const entries = { ...(await originalEntry()) };

      //   // These scripts can import components from the app and use ES modules
      //   // entries['./scripts/build-rss.js'] = './scripts/build-rss.js';
      //   // entries["./scripts/index-docs.js"] = "./scripts/index-docs.js";

      //   return entries;
      // };
    }

    return config;
  },
};
