const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'ts', 'tsx', 'md', 'mdx']
});
