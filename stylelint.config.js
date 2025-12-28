export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-vue',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [
    'dist/**',
    'src/uni_modules/**',
    'node_modules/**',
    'src/static/styles/theme.scss', // 忽略主题文件，因为包含 CSS 自定义属性
  ],
  rules: {
    // 禁止空代码
    'no-empty-source': null,
    // 禁止在覆盖高特异性选择器之后出现低特异性选择器
    'no-descending-specificity': null,
    // 不允许未知单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 禁止空注释
    'comment-no-empty': true,
    // @import 规则必须始终使用字符串表示法。
    'import-notation': 'string',
    // 未知的 @ 规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'plugin',
          'apply',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
          'content',
          'use',
        ],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'selector-type-no-unknown': [true, { ignoreTypes: ['page', 'radio', 'checkbox', 'scroll-view'] }],
    'at-rule-no-deprecated': null,
    'selector-class-pattern': [
          // 正则表达式：仅允许小写字母、数字、下划线、短横线，且以字母开头（可选）
          // 如果你想强制必须是 snake_case（仅下划线），可改为 ^[a-z0-9_]+$
          '^[a-z0-9_-]+$',
          {
            // 可选：自定义报错提示
            message: 'Expected class selector to be snake_case (下划线) or kebab-case (短横线)',
            // 可选：是否忽略伪类/伪元素中的类名（默认 false）
            // ignorePseudoClasses: true,
          },
        ],
  },
};
