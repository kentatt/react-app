import {Login, Header, List} from './components'
import { useState } from 'react';

import Box from '@material-ui/core/Box';

function App() {
  const [userName, setUserName] = useState('ゲスト')
  const [userTotalPrice, setUserTotalPrice] = useState(0)
  
  return (
    <Box className="App" width="75%" mx="auto" >
      <Login 
          setUserName = {setUserName}
       />
      <Header 
          userTotalPrice = {userTotalPrice}
          userName = {userName}
      />
      <List
          setUserTotalPrice = {setUserTotalPrice}
       />
    </Box>
  );
}

export default App;
