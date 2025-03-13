const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

export const login = async (name: string, email: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // Successful login, auth cookie handled by browser
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const logout = async (): Promise<void> => {
  try {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

  } catch (error) {
    throw new Error('Logout failed');
  }
};
