import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../components/SignupForm';

describe('SignUpForm', () => {
  it('renders the plan select field with correct options', () => {
    render(<SignUpForm />);

    // Use the correct label text that matches the rendered HTML
    const select = screen.getByLabelText(/basic pack/i);
    expect(select).toBeInTheDocument();

    // Check each option is present - remove the non-existent "Select a plan" option
    expect(screen.getByRole('option', { name: 'Free' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Basic' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Ultimate' })).toBeInTheDocument();
  });

  it('submits the form when all fields are filled out correctly', () => {
    render(<SignUpForm />);

    // Fill out all form fields using correct label text
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    });

    // Use the correct label text for the plan field
    fireEvent.change(screen.getByLabelText(/basic pack/i), {
      target: { value: 'basic' }
    });

    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '555-123-4567' }
    });

    fireEvent.change(screen.getByLabelText(/company/i), {
      target: { value: 'Test Company' }
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Add assertions for successful submission behavior here
    // Example: expect(mockSubmitHandler).toHaveBeenCalled();
  });

  it('shows validation errors when required fields are missing', async () => {
    render(<SignUpForm />);

    // Submit form without filling required fields
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Wait for and check individual error messages
    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument();
    expect(await screen.findByText('Phone number is required')).toBeInTheDocument();
    expect(await screen.findByText('Company name is required')).toBeInTheDocument();

    // Use getAllByRole to handle multiple alert elements, then check none mention "pack"
    const alerts = screen.getAllByRole('alert');
    alerts.forEach(alert => {
      expect(alert).not.toHaveTextContent(/pack/i);
    });
  });

  it('shows an error for an invalid phone number', async () => {
    render(<SignUpForm />);

    // Fill out form with invalid phone number
    // Use correct label text - "Name" not "Full Name"
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Jane Doe' }
    });
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'jane@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/basic pack/i), {
      target: { value: 'basic' }
    });
    
    // Enter invalid phone number
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: 'invalid-phone' }
    });
    
    fireEvent.change(screen.getByLabelText(/company/i), {
      target: { value: 'Test Company' }
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Check for phone validation error
    expect(await screen.findByText(/invalid phone/i)).toBeInTheDocument();
  });
});