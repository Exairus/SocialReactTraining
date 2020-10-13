import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData
        .map(message => <Message className={classes.message} message={message.message}/>)

    return(
        <div className={classes.dialogs}>
            <div>
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;