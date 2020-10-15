import { rerenderEntireTree } from '../render';

let state = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dimych'}, 
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Valera'}
        ],
          
        messagesData: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'Hi, how are u?'},
            {id: 3, message: 'Hi, what is your name?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Omg'}
        ],

        newMessageText: ''
    },

    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likes: 15},
            {id: 2, message: "It's my first post, lol", likes: 25}
        ],
        newPostText: ''
    },
    
    friendsPage: {
        friendsData: [
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Viktor'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let post = {
        id: 3,
        message: state.profilePage.newPostText,
        likes: 5
    };
    state.profilePage.postsData.push(post);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerenderEntireTree(state);
};

export let addMessage = () => {
    debugger;
    let message = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(message);
    state.dialogsPage.newMessageText = '';

    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;

    rerenderEntireTree(state);
}

export default state;