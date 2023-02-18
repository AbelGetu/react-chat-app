import React, { useEffect, useState } from 'react';

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('test-channel:App\\Events\\UserSignedUp', (data) => {
          setUsers(data)
        });
    }, [socket]);


  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
            {users.map((user, index) => 
              <p key={index}>{user.username} | {user.email}</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;