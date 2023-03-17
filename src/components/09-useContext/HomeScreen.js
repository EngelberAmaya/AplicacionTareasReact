import React from 'react'
import { UserContext } from './UserContext';

const HomeScreen = () => {

    const userContext = React.useContext(UserContext);
    console.log(userContext);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>
        </div>
    )
}

export default HomeScreen
