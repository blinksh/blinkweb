const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
});

const withSass = require('@zeit/next-sass');

module.exports = withMDX({
  pageExtensions: ['js', 'ts', 'tsx', 'md', 'mdx'],
  ...withSass(),
});
