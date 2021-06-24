import { useState } from "react";

import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = (props) => {

    const theme = createMuiTheme({
        typography: {
          subtitle1: {
            fontSize: 12,

          }
        },
    });

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(true)
    const [nameTextError, setNameTextError] = useState('')

    const handleName = (event) => {
        const inputValue = event.target.value
        setName(inputValue)
        if (inputValue.length > 8) {
            setNameError(false)
        } else {
            setNameError(true)
        }
    }

    const changeName = () => {
        if (nameError) {
            setNameTextError('アカウント名は9文字以上必要です。')
            props.setUserName('ゲスト')
        } else {
            setNameTextError('')
            props.setUserName(name)
            setName('')
        }
    }
  
    return (
        <>
            <h1>名前を決める</h1>
            <Box width="75%" >
                <p>アカウント名(9文字以上)</p>
                <Box mt={2} display="flex" alignItems="center">
                    <Box mr={4}><TextField variant="outlined" label="アカウント名" onChange={(event) => handleName(event)} value={name} /></Box>
                    <Button variant="contained" color="primary" mx={4} onClick={changeName}>アカウント名を登録</Button>
                </Box>
                <ThemeProvider theme={theme}>
                    <Typography variant="subtitle1">{nameTextError}</Typography>            
                </ThemeProvider>
            </Box>
            
        </>
    )
}

export default Login;