import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

function ContextSection() {
  return (
    <Card className="context-section" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          Context
        </Typography>
        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 4" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default ContextSection;