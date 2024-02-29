const handleLogin = async () => {
    // Assuming you have username and password state variables
    // defined using useState in your component
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Handle successful login (e.g., store token, redirect)
        // You may want to handle the response here based on your requirements
        const data = await response.json();
        console.log('Login successful', data);
  
        // Example: Redirect to another page after successful login
        // history.push('/dashboard');
      } else {
        // Handle login error
        // You may want to handle the response here based on your requirements
        const errorData = await response.json();
        console.error('Login failed', errorData);
  
        // Example: Display an error message to the user
        // setError('Invalid username or password');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Login error', error);
      // Example: Display a generic error message to the user
      // setError('An error occurred during login');
    }
  };
  
  