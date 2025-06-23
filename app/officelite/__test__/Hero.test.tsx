import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the SVG import directly 
jest.mock('@/public/images/officelite/home/illustration-charts.svg', () => 'test-file-stub');

import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders the Get Started link to the signup page', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /get started/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/officelite/sign-up');
  });
});
