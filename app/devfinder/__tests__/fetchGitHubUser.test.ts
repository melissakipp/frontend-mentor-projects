import { fetchGitHubUser } from '../lib/fetchGitHubUser';

describe('fetchGitHubUser', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('throws an error when user does not exist', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({}),
    });

    await expect(fetchGitHubUser('thisuserdoesnotexist12345'))
      .rejects
      .toThrow('User not found: thisuserdoesnotexist12345');
  });

  it('fetches user data for a valid user', async () => {
    const mockUser = { login: 'octocat' };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    const user = await fetchGitHubUser('octocat');
    expect(user).toEqual(mockUser);
  });
});
