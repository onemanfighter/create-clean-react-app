module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.js'],
  roots: ['./'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    // exclude files from coverage
    '!src/**/index.ts',
    '!src/**/index.tsx',
    '!src/**/App.tsx',
    '!src/**/react-app-env.d.ts',
    '!src/**/reportWebVitals.ts',
    '!src/**/setupTests.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@components': '<rootDir>/src/components',
    '@providers': '<rootDir>/src/providers',
    // '@router': '<rootDir>/src/router',
    '@localization': '<rootDir>/src/localization',
    // '@screens': '<rootDir>/src/screens',
    '@uiStore': '<rootDir>/src/store/ui',
    '@appStore': '<rootDir>/src/store/app',
    '@selectors': '<rootDir>/src/store/selectors',
  },
  transform: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: -10,
  //   },
  // },
};
