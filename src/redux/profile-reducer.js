const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: state.newPostText,
                likes: 5
            };
            state.postsData.push(post);
            state.newPostText = '';

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
}

export default profileReducer;