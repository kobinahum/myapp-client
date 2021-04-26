import styled from 'styled-components';

export const TextAreaContainer = styled.div`
	display: flex;

	position: absolute;
	bottom: 10px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 40px;
	background: white;
	outline: none;
	overflow: auto;
	padding: 10px;
	resize: none;
	border-radius: 8px;
`;

export const SendButton = styled.div`
	padding: 10px 20px;
	border: 1px solid grey;
	border-radius: 10px;
	margin-right: 5px;
	background: white;
	cursor: pointer;
`;

export const MessagesAreaContainer = styled.div`

	height: 85%;
	width: 100%;
	overflow:auto;
`;

export const MessageItemContainer = styled.div`
	border-radius: 10px;
	margin-bottom: 5px;
	padding: 5px 10px;
	border: 1px solid gray;
	background: white;
`;

export const UserAndDateContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
