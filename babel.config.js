module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    //Ajouter ceci
    plugins: ["nativewind/babel"],
  };
};
