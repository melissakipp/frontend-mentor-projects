
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  // Use babel-jest for everything (it can handle TypeScript too)
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { 
      configFile: './babel-jest.config.js'
    }],
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
    '\\.(svg)$': '<rootDir>/jest/__mocks__/svgMock.js',
    '\\.(png|jpg|jpeg|gif|webp|avif)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '^next/image$': '<rootDir>/jest/__mocks__/nextImageMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
};