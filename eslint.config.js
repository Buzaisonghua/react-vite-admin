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
    'eslint-disable-next-line': 'off',
    'react-refresh/only-export-components': 'off',
    'style/semi': ['error', 'always'],
  },
});
