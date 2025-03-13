import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function Universities() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem 
       secondaryAction={
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      }>
        <ListItemText primary="1.Photos"/>
      </ListItem>
      <ListItem 
       secondaryAction={
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      }>
        <ListItemText primary="2.Photos"  />
      </ListItem>
      <ListItem 
       secondaryAction={
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      }>
        <ListItemText primary="3.Photos" />
      </ListItem>
    </List>
  );
}
