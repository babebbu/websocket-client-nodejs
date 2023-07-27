const WebSocket = require('ws');

// Replace 'ws://your-websocket-server-url' with the actual WebSocket server URL
const webSocketUrl = 'ws://172.16.10.188:8080/ws/app/status-announcement';

const ws = new WebSocket(webSocketUrl);

// WebSocket 'open' event: when the connection is established
ws.on('open', () => {
  console.log('WebSocket client connected.');

  // Send a message to the WebSocket server
  // ws.send('Hello, WebSocket server!');
});

// WebSocket 'message' event: when a message is received from the server
ws.on('message', (message) => {
  console.log(`Received message from server: ${message}`);
});

// WebSocket 'error' event: when an error occurs
ws.on('error', (error) => {
  console.error(`WebSocket error: ${error.message}`);
});

// WebSocket 'close' event: when the connection is closed
ws.on('close', (code, reason) => {
  console.log(`WebSocket connection closed: code=${code}, reason=${reason}`);
});

// Gracefully close the WebSocket connection when the process is terminated
process.on('SIGINT', () => {
  console.log('Closing WebSocket connection...');
  ws.close();
  process.exit();
});
