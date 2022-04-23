import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = (props) => {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5005/api/login', { username, password }, { withCredentials: true })
            .then(response => {
                props.setLoggedInUser(response.data);
                navigate('/profile');
            })
            .catch(error => console.log(error))
    };

    return <>
        <h2>Welcome back!</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button type="submit" className="primary">Get me in!</button>
            <Link to="/signup">Don't have your account yet?</Link>
        </form>
    </>
}