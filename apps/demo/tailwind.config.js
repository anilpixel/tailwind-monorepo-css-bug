const path = require('path');

// Assuming `@xx` is an alias for: <root>/packages
function resolvePackages(...packages) {
  return packages.map(
    (pkg) =>
      path.resolve(__dirname, pkg.replace('@demo', '../../packages')) +
      '/src/**/*.{js,ts,jsx,tsx}',
  );
}

console.log(resolvePackages('@demo/components'));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    ...resolvePackages('@demo/components'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
