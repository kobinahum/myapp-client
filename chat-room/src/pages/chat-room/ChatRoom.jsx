import React from 'react';
import { ChatRoomContainer } from './style';
import InputText from '../../components/InputText';
import MessagesArea from '../../components/MessagesArea';

const ChatRoom = (props) => {
	return (
		<ChatRoomContainer>
			<MessagesArea />
			<InputText user={props.user}/>
		</ChatRoomContainer>
	);
};

export default ChatRoom;
