import { useState } from 'react';
import { getCurrentUser, login } from '../../services/authServices';
import '../LoginForm/LoginForm.css';
import FormButtons from './Buttons/Buttons';
import InputField from './Inputs/Inputs';

interface LoginFormProps {
  setIsLoggedIn: (value: boolean) => void;
  setUserData: (data: { image: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsLoggedIn, setUserData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!username) {
      setError('Please write your username.');
      return;
    }
    if (!password) {
      setError('Please write your password.');
      return;
    }

    try {
      const data = await login(username, password);
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      const user = await getCurrentUser(data.token);
      setUserData({ image: user.image });
      setIsLoggedIn(true);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError(null);
  };

  return (
    <div className='wrapper'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h1 style={{ marginBottom: error ? '5px' : '50px' }}>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <InputField
          type='text'
          id='email'
          value={username}
          label='Email'
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type='password'
          id='password'
          value={password}
          label='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButtons onCancel={handleCancel} onSubmit={handleLogin} />
      </form>
    </div>
  )
}

export default LoginForm
