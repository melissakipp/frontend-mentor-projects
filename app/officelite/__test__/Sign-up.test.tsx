import { render, screen } from '@testing-library/react';

import SignUp from '../sign-up/page';

describe('SignUp Component', () => {
  it('renders SignUp component', () => {
    render(<SignUp />);
    expect(screen.getByText('Work smarter. Save time.')).toBeInTheDocument();
  });
});
