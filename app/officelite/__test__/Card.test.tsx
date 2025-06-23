import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('renders Basic card with correct sign-up link', () => {
  render(<Card type="free" />);
  const link = screen.getByRole('link', { name: /Try for Free/i });
  expect(link).toHaveAttribute('href', '/officelite/sign-up/free');
});

test('renders Pro card with correct sign-up link', () => {
  render(<Card type="basic" />);
  const link = screen.getByRole('link', { name: /Try for Free/i });
  expect(link).toHaveAttribute('href', '/officelite/sign-up/basic');
});

test('renders Ultimate card with correct sign-up link', () => {
  render(<Card type="ultimate" />);
  const link = screen.getByRole('link', { name: /Try for Free/i });
  expect(link).toHaveAttribute('href', '/officelite/sign-up/ultimate');
});