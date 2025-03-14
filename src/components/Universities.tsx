import { Avatar, Box, List, ListItem, ListItemAvatar, styled, Typography } from '@mui/material';
import * as React from 'react';

// Sample university data (update with actual URLs)
const universities = [
  {
    id: 1,
    title: "Harvard University",
    url: "https://www.harvard.edu/",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    title: "Stanford University",
    url: "https://www.stanford.edu/",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    title: "MIT",
    url: "https://web.mit.edu/",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 4,
    title: "University of Oxford",
    url: "https://www.ox.ac.uk/",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 5,
    title: "University of Cambridge",
    url: "https://www.cam.ac.uk/",
    image: "https://via.placeholder.com/60"
  }
];

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#3f6fbf',
    color: 'white',
    '& *': { color: 'white' },
  },
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
    '& *': { color: '#000000' }
  },
  cursor: 'pointer'
}));

const avatarStyle = (index) => {
  const c1 = '#ffffff';
  const c2 = '#0a4eb2';
  return index % 2 === 0 ? `radial-gradient(circle,${c1} 0%, ${c2} 100%)` : `radial-gradient(circle, ${c2} 0%, ${c1} 100%)`;
};

export default function Universities() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', py: 0, pb: 0 }}>
      {universities.map((uni, index) => (
        <StyledListItem
          key={uni.id}
          onClick={() => handleClick(uni.url)}
          sx={{
            mb: 1,
            px: 2,
            m: 0,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box flex={1}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {uni.id}. {uni.title}
            </Typography>
          </Box>

          {/* Right: University Logo */}
          <ListItemAvatar>
            <Avatar
              src={uni.image}
              sx={{
                width: 60,
                height: 60,
                background: avatarStyle(index),
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              }}
            />
          </ListItemAvatar>
        </StyledListItem>
      ))}
    </List>
  );
}
