import React, { useState, useEffect } from 'react';
import PollCreation from './components/PollCreation';
import PollListing from './components/PollListing';
import io from 'socket.io-client';
import './App.css';
import Form from './Form';

const App = () => {
  const [polls, setPolls] = useState([]);

  const addPoll = (newPoll) => {
    setPolls([...polls, { ...newPoll, id: Date.now(), votes: new Array(newPoll.options.length).fill(0) }]);
  };

  const handleVote = (pollId, optionIndex) => {
    // Simulate real-time voting update (Replace this with actual WebSocket implementation)
    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        const updatedVotes = [...poll.votes];
        updatedVotes[optionIndex]++;
        return { ...poll, votes: updatedVotes };
      }
      return poll;
    });
    setPolls(updatedPolls);
  };

  useEffect(() => {
    // Replace 'your-backend-socket-server-url' with your actual WebSocket server URL
    const socket = io('your-backend-socket-server-url');

    // Listen for incoming vote updates from the server and update the state accordingly
    socket.on('voteUpdate', (updatedPolls) => {
      setPolls(updatedPolls);
    });

    return () => {
      socket.disconnect(); // Clean up the WebSocket connection when the component is unmounted
    };
  }, [polls]);

  return (
    <div className="app-container">
    <PollCreation addPoll={addPoll} />
    <div className="poll-separator" />
    <PollListing polls={polls} handleVote={handleVote} />
  </div>
  );
};

export default App;
