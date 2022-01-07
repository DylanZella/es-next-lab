module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['.'],
        alias: {
          '#': './docs/.vuepress',
        },
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.vue'],
      },
    ],
  ],
};
