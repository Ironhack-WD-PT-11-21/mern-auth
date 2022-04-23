import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Signup = (props) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5005/api/signup', { username, password }, { withCredentials: true })
            .then(response => props.setLoggedInUser(response.data))
            .catch(error => console.log(error))
    };

    return <>
        <h2>Create your account!</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button type="submit" className="primary">Create my account</button>
            <Link to="/login">Already have an account ?</Link>
        </form>
    </>
}