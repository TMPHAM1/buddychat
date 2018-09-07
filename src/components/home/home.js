import React from 'react';
import {Link} from 'react-router-dom';



export default props => {
return <div> 
    <h1 className="center">Buddy Chat</h1>
    <div className = " center home-container">
     <Link to="/chat" className=" btn red darken-2"> Start Chat</Link>
    </div>
</div>}