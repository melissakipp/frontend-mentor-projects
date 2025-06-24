import { render, screen, waitFor, act } from '@testing-library/react';
import Countdown from '../components/Countdown';
import '@testing-library/jest-dom';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('Countdown', () => {
  it('displays the "Coming" message with the launch date', () => {
    render(<Countdown />);
    expect(screen.getByText(/Coming/i)).toBeInTheDocument();
    expect(screen.getByText(/4 Nov 2025/i)).toBeInTheDocument();
  });

  it('displays countdown units', () => {
    render(<Countdown />);

    // Unit labels
    expect(screen.getByText(/^days$/i)).toBeInTheDocument();
    expect(screen.getByText(/^hours$/i)).toBeInTheDocument();
    expect(screen.getByText(/^min$/i)).toBeInTheDocument();
    expect(screen.getByText(/^sec$/i)).toBeInTheDocument();

    // Test numerical values (basic check)
    expect(screen.getByTestId('days')).toBeInTheDocument();
    expect(screen.getByTestId('hours')).toBeInTheDocument();
    expect(screen.getByTestId('minutes')).toBeInTheDocument();
    expect(screen.getByTestId('seconds')).toBeInTheDocument();
  });

  it('displays the "Coming" message with the launch date', () => {
    render(<Countdown />);
    expect(screen.getByText(/Coming/i)).toBeInTheDocument();
    expect(screen.getByText(/4 Nov 2025/i)).toBeInTheDocument();
  });

  it('updates countdown after 1 second', async () => {
    render(<Countdown />);

    const initialSeconds = screen.getByTestId('seconds').textContent;

    // Use act to advance timers
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Wait for the DOM to update
    await waitFor(() => {
      expect(screen.getByTestId('seconds').textContent).not.toEqual(initialSeconds);
    });
  });
});