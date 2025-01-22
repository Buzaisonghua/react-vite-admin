import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    ['flex-x', 'flex items-center justify-center'],
    ['flex-b', 'flex items-center justify-between'],
  ],
  theme: {
    // 测试
    veryCool: 'red', // class="text-very-cool"
    breakpoints: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1860px',
    },
  },
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
