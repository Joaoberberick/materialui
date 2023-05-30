import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Todo } from './pages/Todo'
import { Home } from './pages/Home'
import PhotoAlbum from './pages/PhotoAlbum'
import NavBar from './components/NavBar'
import { Container, CssBaseline, } from '@mui/material'
import ToggleColorMode from './pages/ToggleColorMode'

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg" style={{marginTop: "1em", alignContent: "center", justifyContent: "center"}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/album' element={<PhotoAlbum />} />
        </Routes>
      </Container>
      <Routes>
        <Route path='/togglecolormode' element={<ToggleColorMode />} />
      </Routes>
    </>
  )
}

export default App
