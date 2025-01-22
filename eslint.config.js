// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  rules: {
    'react-dom/no-unsafe-target-blank': 'off',
    'react-dom/no-missing-button-type': 'off',
    'style/semi': ['error', 'always'],
  },
});
