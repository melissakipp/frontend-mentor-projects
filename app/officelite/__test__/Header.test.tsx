import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the logo link', () => {
    render(<Header />);
    const logo = screen.getByAltText(/snap logo/i);
    expect(logo).toBeInTheDocument();
  });
});