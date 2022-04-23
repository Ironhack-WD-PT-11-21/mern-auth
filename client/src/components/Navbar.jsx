import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const Navbar = (props) => {

    const handleLogout = () => {
        axios.get('http://localhost:5005/api/logout')
            .then(() => props.setLoggedInUser(null))
            .catch(err => console.log(err))
    }

    return <header>
        <h1 id="logo">MERN-Auth</h1>
        <nav>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            {
                !props.loggedInUser ?
                    <>
                        <NavLink to="/signup" activeclassname="active">Signup</NavLink>
                        <NavLink to="/login" activeclassname="active">Login</NavLink>
                    </>
                    :
                    <>
                        <NavLink to="/profile" activeclassname="active">Profile</NavLink>
                        <button onClick={handleLogout} className="danger">Logout</button>
                    </>
            }
        </nav>
    </header>
};