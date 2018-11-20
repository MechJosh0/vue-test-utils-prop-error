module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
	setupFiles: [
		'<rootDir>/testConfig/vueSetup.js'
	],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.spec.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!(vue-spinner)/)'
	]
};
