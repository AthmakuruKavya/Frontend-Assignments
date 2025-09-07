import * as React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Box, Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CardComponent({ isDarkMode, handleToggle }) {
  const [likes, setLikes] = React.useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Container sx={{ textAlign: 'center', marginTop: '20px' }}>
      
      {/* Toggle Button + Text on Top */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '15px', 
          marginBottom: '15px' 
        }}
      >
        <Typography variant="h6">Toggle Theme</Typography>
        <Button variant="contained" onClick={handleToggle}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Box>

      {/* The Card */}
      <Card 
        sx={{ 
          maxWidth: 300, 
          margin: '0 auto', 
          padding: '15px',
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#000'
        }}
      >
        <CardMedia
          component="img"
          alt="Cute Cat"
          image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"
          sx={{ 
            width: '100%',   
            height: '200px',   
            objectFit: 'cover'  
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Cute Cat
          </Typography>
          <Typography variant="body2" sx={{ color: isDarkMode ? '#ddd' : '#555' }}>
            Lovely cat displayed in a small card with padding and light/dark mode support.
          </Typography>
        </CardContent>

        {/* ❤️ Icon + Hit Like Button only */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px', 
            paddingBottom: '10px' 
          }}
        >
          <FavoriteIcon color="error" />  
          <Button variant="contained" onClick={handleLike}>
            Hit Like
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
