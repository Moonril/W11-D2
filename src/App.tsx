import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './components/MainPage'
import Details from './components/Details'


function App() {


  return (
    <BrowserRouter>
      <main className='d-flex flex-column min-vh-100 bg-dark text-light'>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="details/:myId" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App


// https://github.com/irvelervel/FS0125-space-news