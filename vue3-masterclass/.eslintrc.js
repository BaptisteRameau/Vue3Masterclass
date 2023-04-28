module.exports = {
    root: true,

    env: {
        node: true,
        "vue/setup-compiler-macros": true
    },

    extends: [
        "plugin:vue/vue3-essential",
    ],

    parserOptions: {
        parser: '@babel/eslint-parser'
    },

    rules: {
        'no-unused-vars': process.env.NODE_ENV === "production" ? "error" : "warn",
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
