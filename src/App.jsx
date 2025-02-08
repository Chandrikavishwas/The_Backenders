import Home from './Components/home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import About from './Components/about'
import Blog from './Components/blog'
import Raise from './Components/raise'
import Contact from './Components/contact'
import Login from './Components/login'
import SignIn from './Components/signin'
import DummyHome from './Components/DummyHome'
import RaiseContainer1 from './Components/raiseContainer1'
import TermsAndConditions from './Components/termCondition'
import Gaurd from './gaurd'

function App() {

  return (
   <>
   <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<DummyHome/>}/>

        <Route path='/home' element={<Gaurd><Home/></Gaurd>}/>
        <Route path='/about' element={<Gaurd><About/></Gaurd>}/>
        <Route path='/blog' element={<Gaurd><Blog/></Gaurd>}/>
        <Route path='/raise' element={<Gaurd><Raise/></Gaurd>}/>
        <Route path='/contact' element={<Gaurd><Contact/></Gaurd>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/donate' element={<Gaurd><RaiseContainer1/></Gaurd>}/>
        <Route path='/term&condition' element={<Gaurd><TermsAndConditions/></Gaurd>}/>
        
      </Routes>
    </Router>
   </AuthProvider> 
   </>
  )
}

export default App
