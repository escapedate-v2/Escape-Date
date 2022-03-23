import React from 'react'; 
import { useNavigate } from 'react-router-dom'

const ErrorPage = props => {
    const navigate = useNavigate();
return (
    <div className = 'error'>
        <p className = 'error-page'>Oopsies! This ultimate little axolotl doesn't recognize you.</p>
        <button onClick = {() => navigate('/')}>Maybe try again?</button>
        <button onClick = {() => navigate('/newUser-Contacts')}>Create an account</button>
    </div>
)

}; 

export default ErrorPage;