module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // ajuste isso para a pasta raiz de todos os seus módulos
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  };
};
