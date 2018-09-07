import React, {Component} from 'react';
import './chat.css'; 
import {Link} from 'react-router-dom';
import {db} from '../../firebase'; 
import {connect} from 'react-redux';
import {updateChat} from '../../actions';
import './chat.css'

class Chat extends Component {
    dbRef = db.ref('/');

    componentDidMount() { 
        this.dbRef.on('value', this.props.updateChat);


    }
    componentWillUnMount() { 
        this.dbRef.off();
    }
    render() {
        const {log} = this.props;

        const chatElements = Object.keys(log).map(k=> {
            const {name, message} = log[k];
            return (
                <li key={k}className="collection-item">
                    <b>{name}:</b> {message}
                 </li>
            )
        })
        return (
        <div>
            <h4 className="center">Chat Room</h4>
            <Link to="/" className ="btn red darken-2"> Home</Link>
            <ul className="collection">
            {chatElements}
            </ul>
            <div className="row right-align"> 
            
            </div>
        </div>
           
       
        )
    }
}
function mapStateToProps(state) {
    return {
        log: state.chat.log
    }
}

export default connect(mapStateToProps, {updateChat})(Chat); 