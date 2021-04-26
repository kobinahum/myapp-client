import React from 'react';
import { MessageItemContainer, UserAndDateContainer } from './style';
import moment from 'moment';

const MessageItem = (props) => {
	return (
		<MessageItemContainer>
			<UserAndDateContainer>
				<h5>{props.user}</h5>
				<h6> {moment(props.date).format('dddd, MMMM Do YYYY, HH:mm:ss ')}</h6>
			</UserAndDateContainer>
			{props.message}
		</MessageItemContainer>
	);
};

export default MessageItem;
