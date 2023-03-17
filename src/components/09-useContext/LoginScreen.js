import React from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const {setUser} = React.useContext(UserContext);

    const data = {
        id: 123,
        name: 'Engelber'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button onClick={() => setUser(data)} className='btn btn-primary'>Login</button>
        </div>
    )
}

export default LoginScreen
