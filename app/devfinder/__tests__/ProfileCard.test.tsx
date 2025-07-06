import { render, screen } from '@testing-library/react';
import ProfileCard from '../components/ProfileCard';
import mockGitHubUser from '../__mocks__/mockGitHubUser';

describe('ProfileCard', () => {
  it('renders user profile data correctly', () => {
    render(<ProfileCard user={mockGitHubUser} />);

    // Check avatar image alt text
    expect(screen.getByAltText(/octocat's avatar/i)).toBeInTheDocument();

    // Check name
    expect(screen.getByText(/Monalisa Octocat/i)).toBeInTheDocument();

    // Check join date
    expect(screen.getByText(/Joined/i)).toBeInTheDocument();

    // Check bio
    expect(screen.getByText(/There once was a cat/i)).toBeInTheDocument();

    // Check public repos
    expect(screen.getByText(mockGitHubUser.public_repos.toString())).toBeInTheDocument();
    expect(screen.getByText(/Repos/i)).toBeInTheDocument();

    // Check followers
    expect(screen.getByText(mockGitHubUser.followers.toString())).toBeInTheDocument();
    expect(screen.getByText(/Followers/i)).toBeInTheDocument();

    // Check following
    expect(screen.getByText(mockGitHubUser.following.toString())).toBeInTheDocument();
    expect(screen.getByText(/Following/i)).toBeInTheDocument();
  });

  it('renders fallback message when user is null', () => {
    // @ts-expect-error testing null fallback
    render(<ProfileCard user={null} />);
    expect(screen.getByText(/No user data available/i)).toBeInTheDocument();
  });
});
