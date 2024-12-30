module.exports = {
  process() {
    return {
      code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    return "svgMock.js";
  },
};

