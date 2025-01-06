module.exports = {
  process() {
    return {
      code: `const React = require('react'); module.exports = () => <></>;`,
    };
  },
  getCacheKey() {
    return "svgMock.js";
  },
};

