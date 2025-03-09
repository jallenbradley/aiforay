import React, { useState } from 'react';
import { Card, CardContent, TextField, Typography, Box } from '@mui/material';

function TextEditor() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Card className="text-editor" sx={{ height: '100%' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          Text Editor
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            minHeight: 0, // Ensures flex constraints work
            mb: 2,
          }}
        >
          <TextField
            value={text}
            onChange={handleChange}
            placeholder="Type something here please..."
            multiline
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiInputBase-root': {
                minHeight: '100%', // Fills Box height
                display: 'flex', // Aligns textarea
              },
              '& .MuiInputBase-input': {
                minHeight: '100%', // Matches Box height
                boxSizing: 'border-box',
                padding: '8px',
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TextEditor;