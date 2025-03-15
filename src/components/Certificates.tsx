import { Avatar, Box, List, ListItem, ListItemAvatar, styled, Typography } from '@mui/material';
import * as React from 'react';
import certificates from '../data/certificates';

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
}));

const avatarStyle = (index) => {
  const c1 = '#ffffff'
  const c2 = '#0a4eb2'
  return index % 2 === 0 ? `radial-gradient(circle,${c1} 0%, ${c2} 100%)` : `radial-gradient(circle, ${c2} 0%, ${c1} 100%)`
}

export default function Certificates() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', py: 0, pb: 0 }}>
      {certificates.map((cert, index) => (
        <StyledListItem
          key={cert.id}
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
              {cert.id}. {cert.title}
            </Typography>
            <Typography variant="body2">
              {cert.description}
            </Typography>
          </Box>

          {/* Right: Certificate Image */}
          <ListItemAvatar>
            <Avatar
              src={cert.image}
              sx={{
                width: 60,
                height: 60,
                background: avatarStyle(index),
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                // border: '2px solid white'
              }}
            />
          </ListItemAvatar>
        </StyledListItem>
      ))}
    </List>
  );
}