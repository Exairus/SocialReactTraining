import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <Message className={classes.message} message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return(
        <div className={classes.dialogs}>
            <div>
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
                <div>
                    <textarea ref={ newMessageElement } onChange={ onMessageChange } value={ props.dialogsPage.newMessageText }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;