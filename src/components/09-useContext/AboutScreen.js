import React from 'react'
import { UserContext } from './UserContext';

const AboutScreen = () => {

    const {user, setUser} = React.useContext(UserContext);

    const handleClick = () => {
        setUser({})
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button onClick={handleClick} className="btn btn-primary">LogOut</button>
        </div>
    )
}

export default AboutScreen
