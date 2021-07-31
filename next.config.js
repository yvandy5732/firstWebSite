
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['pPWm8FoypfDGcycQPjoUuR'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  