import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [userSentMessage, setUserSentMessage] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '' || isLoading) return;

    setIsLoading(true);
    setError(null);
    setUserSentMessage(true);

    const messageId = Date.now();
    const newMessages = [...messages, { id: messageId, text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages([...newMessages, { id: Date.now(), text: data.response, sender: 'ai' }]);
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    const shouldScroll = userSentMessage || isNearBottom;

    if (shouldScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (userSentMessage) {
      setUserSentMessage(false);
    }
  }, [messages, isLoading, userSentMessage]);

  return (
    <Card className="chat-window" sx={{ height: '100%' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          Chat
        </Typography>
        {error && (
          <Typography color="error" role="alert" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Box
          ref={messagesContainerRef}
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            mb: 2,
            minHeight: 0, // Crucial for flex overflow
          }}
        >
          <List className="message-list">
            {messages.map((message) => (
              <ListItem
                key={message.id}
                className={`message ${message.sender}`}
                sx={{
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  bgcolor: message.sender === 'user' ? '#e6f2ff' : '#f0f0f0',
                  borderRadius: 1,
                  mb: 1,
                  p: 1,
                }}
              >
                <ListItemText primary={message.text} />
              </ListItem>
            ))}
            {isLoading && (
              <ListItem>
                <CircularProgress size={24} />
                <ListItemText primary="AI is typing..." sx={{ ml: 1 }} />
              </ListItem>
            )}
            <div ref={messagesEndRef} />
          </List>
        </Box>
        <Box className="input-area" sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            fullWidth
            variant="outlined"
            size="small"
            aria-label="Chat message"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ChatWindow;