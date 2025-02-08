import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

const Gaurd = ({children}) => {
    const {currentUser} = useAuth()
   
       return currentUser ?  children : <Navigate to='/login'/>
    
    
}

export default Gaurd