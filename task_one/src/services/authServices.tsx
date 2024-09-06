export interface LoginResponse {
  // id: number;
  // username: string;
  // email: string;
  // firstName: string;
  // lastName: string;
  // gender: string;
  // image: string;
  token: string;
  refreshToken: string;
  id: number;
  username: string;
  password: string;
}

// export const login = async (username: string, password: string): Promise<LoginResponse> => {
//   // const response = await fetch('https://dummyjson.com/auth/login', {
//   const response = await fetch('http://localhost:5000/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // body: JSON.stringify({
//     //   username,
//     //   password,
//     //   expiresInMins: 30,
//     // }),
//     body: JSON.stringify({ username, password }),
//   });

//   if (!response.ok) {
//     throw new Error('Login failed');
//   }

//   return response.json();
// };
export const login = async (username: string, password: string): Promise<LoginResponse> => {
  // Fetch the users.json file from the public directory
  const response = await fetch('./users.json');

  if (!response.ok) {
    throw new Error('Failed to load user data');
  }

  const users: LoginResponse[] = await response.json();

  // Find the user with the matching username and password
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Simulate token and refreshToken generation (you can remove this if unnecessary)
  return {
    ...user,
    token: 'dummyToken',
    refreshToken: 'dummyRefreshToken'
  };
};

// export const getCurrentUser = async (token: string): Promise<LoginResponse> => {
//   const response = await fetch('https://dummyjson.com/auth/me', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch user');
//   }

//   return response.json();
// };

// export const refreshSession = async (refreshToken: string): Promise<{ token: string; refreshToken: string }> => {
//   const response = await fetch('https://dummyjson.com/auth/refresh', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       refreshToken,
//       expiresInMins: 30,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error('Session refresh failed');
//   }

//   return response.json();
// };
