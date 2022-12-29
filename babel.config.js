module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [ "babel-plugin-styled-components",
      ["module:react-native-dotenv",  {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }],
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
          },
        },
      ],
    ]
  };
};
