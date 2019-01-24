import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav style={{padding:'0 8px'}} className="purple lighten-2">
                <div className="nav-wrapper">
                    <Link className="brand-logo green-text text-accent-4" to="/">Chatty App</Link>

                    <ul className="right">
                    <li>
                        <Link to="/">Home</Link>    
                    </li>
                    <li>
                        <Link to="/chat">Chat</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav;