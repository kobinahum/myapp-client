import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
`;
export const ChatRoomContainer = styled.div`
	flex-direction: column;
	background-color: rgba(50, 115, 220, 0.3);
	width: 30%;
	height: 80%;
	border: 1px solid grey;
	border-radius: 15px;
	margin: auto;
	position: relative;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ChooseUser = styled.select`
	position: absolute;
	top: 10px;
	width: 100px;
`;
