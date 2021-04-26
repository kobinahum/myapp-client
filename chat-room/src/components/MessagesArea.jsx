import React, { useState, useEffect } from 'react';
import { MessagesAreaContainer } from './style';
import MessageItem from './MessageItem';
import axios from 'axios';




const MessagesArea = () => {
	const [messages, setMessage] = useState();
	useEffect(() => {


		const interval = setInterval(() => {
			axios.get('http://localhost:8080/message').then(res => {
				setMessage(res.data)
			});
		}, 1000);
		return () => clearInterval(interval);


	}, []);
	return (
		<MessagesAreaContainer>
			{messages &&
				messages.length > 0 &&
				messages.map((message, index) => {
					return (
						<MessageItem
							message={message.message}
							user={message.user}
							date={message.timestamp}
							key={index}
						/>
					);
				})}
		</MessagesAreaContainer>
	);
};

export default MessagesArea;
