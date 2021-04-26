import React, { useState } from 'react';
import axios from 'axios';
import { TextAreaContainer, TextArea, SendButton } from './style';

const InputText = (props) => {
	const [message, setMessage] = useState()
	const [error, setError] = useState()

	const validation = () => {
		if (!message) {
			setError('Please Insert Message')
			return true

		}
		if (!props.user) {
			setError('Please Select user')
			return true

		}
		return false
	}

	const sendMessage = () => {
		const isError = validation()
		if (isError) {
			return
		}
		setError(null)
		axios.post('http://localhost:8080/message', { message, user: props.user }).then(res => {
			setMessage('')
		});
	}

	return (
		<TextAreaContainer>
			<SendButton onClick={sendMessage}>Send</SendButton>
			<TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
			{error &&
				<h5 style={{ color: 'red', position: 'absolute', top: '60px', left: '90px' }}>{error}</h5>
			}
		</TextAreaContainer>
	);
};

export default InputText;
