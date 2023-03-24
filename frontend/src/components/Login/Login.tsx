import React, { useState, useEffect } from 'react';
import { Box, Card, Input, Button } from "@mui/material";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginClick = () => {
    const token = btoa(`${username}:${password}`);
    localStorage.setItem('authorization_token', token);
    setIsLogged(true);
    clear();
  }

  const handleLogoutClick = () => {
    localStorage.removeItem('authorization_token');
    setIsLogged(false);
    clear();
  }

  const clear = () => {
    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    const token = localStorage.getItem('authorization_token');
    if (token) {
      setIsLogged(true);
    }
  }, [])

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Login</h1>
      <Card raised={true} style={{ maxWidth: '500px', margin: "2rem auto", padding: "2rem"}}>
      {!isLogged ? <>
        <Box m={1}>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          />
        </Box>
        <Box m={1}>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </Box>
        <Button onClick={handleLoginClick} variant="contained">Login</Button>
        </>
        : <Button onClick={handleLogoutClick} variant="contained">Logout</Button>
        }
      </Card>
    </div>
  )
};