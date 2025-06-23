import '@testing-library/jest-dom';

// Mock the Next.js Image component
jest.mock('next/image', () => require('./jest/__mocks__/nextImageMock'));

// Mock for the specific SVG file
jest.mock('@/public/images/officelite/home/illustration-charts.svg', () => 'test-file-stub');

// Add any global test setup you need here
// For example, if you need to mock Next.js router:
// jest.mock('next/router', () => ({
//   useRouter: () => ({
//     push: jest.fn(),
//     pathname: '',
//     route: '',
//     asPath: '',
//     query: {}
//   })
// }));