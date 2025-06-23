import '@testing-library/jest-dom';

// Add this line to mock the Next.js Image component
jest.mock('next/image', () => require('./jest/__mocks__/nextImageMock'));

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