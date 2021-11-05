module.exports = {
  plugins: [
    '@typescript-eslint',
    'arca',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx','.ts', '.tsx',  '.d.ts'],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    // default rules
    'arrow-body-style'                                : 0,
    'class-methods-use-this'                          : 0,
    'consistent-return'                               : 0,
    'func-names'                                      : 0,
    'guard-for-in'                                    : 0,
    'key-spacing'                                     : [2, { singleLine: { beforeColon: false, afterColon: true }, multiLine: { beforeColon: false, afterColon: true, align: 'colon' } }],
    'object-curly-newline'                            : [2, { ObjectExpression: { consistent: true }, ObjectPattern: { consistent: true }, ImportDeclaration: { consistent: true }, ExportDeclaration: { consistent: true } }],
    'no-multiple-empty-lines'                         : [2, { max: 1, maxBOF: 0, maxEOF: 1 }],
    'max-len'                                         : 0,
    'no-await-in-loop'                                : 0,
    'no-case-declarations'                            : 0,
    'no-console'                                      : 0,
    'no-mixed-operators'                              : 0,
    'no-multi-spaces'                                 : 0,
    'no-nested-ternary'                               : 0,
    'no-param-reassign'                               : 0,
    'no-plusplus'                                     : 0,
    'no-process-exit'                                 : 0,
    'no-restricted-syntax'                            : 0,
    'no-undef'                                        : 0,
    'no-underscore-dangle'                            : 0,
    'prefer-arrow-callback'                           : 0,
    'prefer-destructuring'                            : 0,
    // plugins
    'arca/import-align'                               : 2,
    'arca/import-ordering'                            : 2,
    'import/extensions'                               : 0,
    'import/order'                                    : 0,
    'import/prefer-default-export'                    : 0,
    'import/no-extraneous-dependencies'               : 0,
    '@typescript-eslint/ban-types'                    : 0,
    '@typescript-eslint/ban-ts-comment'               : 0,
    '@typescript-eslint/no-unused-vars'               : 0,
    '@typescript-eslint/no-explicit-any'              : 0,
    '@typescript-eslint/no-var-requires'              : 0,
    '@typescript-eslint/no-empty-interface'           : 0,
    '@typescript-eslint/no-non-null-assertion'        : 0,
    '@typescript-eslint/no-unused-expressions'        : 0,
    '@typescript-eslint/type-annotation-spacing'      : 0,
    '@typescript-eslint/lines-between-class-members'  : 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
};