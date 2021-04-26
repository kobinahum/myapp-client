import React, { useEffect, useState } from 'react';
import ChatRoom from './pages/chat-room/ChatRoom';
import { AppContainer, ChooseUser } from './pages/chat-room/style';
import axios from 'axios';

const App = () => {
	const [users, setUsers] = useState([]);
	const [selectUser,setSelectUser] = useState()
	useEffect(() => {
		axios.get('http://localhost:8080/user').then(res=>{
		setUsers(res.data)
		})
	}, []);
	
	return (
		<AppContainer>
			<ChooseUser value={selectUser} onChange={(e)=>setSelectUser(e.target.value)}>
				<option selected value="0" disabled>
					Select User
				</option>

				{users &&
					users.length > 0 &&
					users.map((user, index) => {
						return (
							<option key={index} value={user.id}>
								{user.name}
							</option>
						);
					})}
			</ChooseUser>
			<ChatRoom user={selectUser} />
		</AppContainer>
	);
};

export default App;
