import React, { useState } from 'react';
import CardComponent from './components/CardComponent';
import { Typography } from '@mui/material';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Cat Theme Toggle App
      </Typography>

      <CardComponent isDarkMode={isDarkMode} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
