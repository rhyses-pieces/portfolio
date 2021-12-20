export default {
  mount: {
    'src/_site': { url: '/', static: true },
    'src/_assets/images': { url: '/images' },
    'src/_assets/scripts': { url: '/scripts' },
    'src/_assets/styles': { url: '/styles' },
  },
  plugins: ['@snowpack/plugin-postcss'],
  packageOptions: {
    NODE_ENV: true,
  },
  buildOptions: {
    clean: true,
    out: 'dist',
  },
  devOptions: {
    open: 'none',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
};
