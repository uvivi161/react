import { RouterProvider } from 'react-router-dom'
import './App.css'
import { myRouter } from './Router'
import { useReducer } from 'react'
import { UserReducer, initialUserState } from './components/login/UserReducer'
import { UserContext } from './components/login/UserReducer'
import { Box } from '@mui/material'
import backgroundImg from "./assets/images/backgroundImg.jpg"


function App() {
  const [user, dispatch] = useReducer(UserReducer, initialUserState)

  return (
    <>
      <Box sx={{
        height: "100vh",
        overflowY:'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        backgroundAttachment: "fixed",
        position: "relative",
        color: "white",
      }}>
        <UserContext value={[user, dispatch]}>
          <RouterProvider router={myRouter} />
        </UserContext>
      </Box>
    </>
  )
}

export default App
