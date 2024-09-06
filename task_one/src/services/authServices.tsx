export interface LoginResponse {
  token: string;
  refreshToken: string;
  id: number;
  username: string;
  password: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('./users.json');

  if (!response.ok) {
    throw new Error('Failed to load user data');
  }

  const users: LoginResponse[] = await response.json();

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  return {
    ...user,
    token: 'dummyToken',
    refreshToken: 'dummyRefreshToken'
  };
};
