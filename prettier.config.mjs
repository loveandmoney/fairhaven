import config from 'lam-prettier-config';

const prettierConfig = {
  ...config,
  overrides: [
    {
      files: ['**/*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfig;
