import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

export let store = {
    _state: {
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
    },

    _callSubscriber() {
        console.log("state was changed");
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
}


window.store = store;

export default store;