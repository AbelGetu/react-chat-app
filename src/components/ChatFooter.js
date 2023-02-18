import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeMessage } from '../actions/messageActions';

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(message === '') {
      alert('Please fill out something')
    } else {
      dispatch(storeMessage(message));
      setMessage('');
    }
    // if (message.trim() && localStorage.getItem('userInfo')) {
    //     const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    //     socket.emit('message', {
    //       text: message,
    //       name: userInfo.user.name,
    //       id: `${Math.random()}`,
    //     });
    //   }
    
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;