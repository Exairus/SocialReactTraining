import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    // local state
    let state = props.store.getState().dialogsPage;
    
    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = state.messagesData
        .map(message => <Message className={classes.message} message={message.message}/>);

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return(
        <div className={classes.dialogs}>
            <div>
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
                <div>
                    <textarea onChange={ onMessageChange } value={ state.newMessageText }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;