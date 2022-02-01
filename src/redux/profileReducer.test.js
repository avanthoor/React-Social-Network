import profileReducer, {addPost, deletePost, updatePostText} from "./profileReducer";

let state = {    // начальный, дефолтный state
    posts: [
        {id: 1, message: 'Всем привет!', likes: 1},
        {id: 2, message: 'Как жизнь молодая?', likes: 2},
        {id: 3, message: 'Пытаюсь вкатиться в Реакт', likes: 3},
        {id: 4, message: 'Пока выходит говнокод, но я стараюсь', likes: 4},
        {id: 5, message: 'Ещё одно сообщение', likes: 5},
    ],
    newPostText: ''
}

it('new post should be added', () => {
    let actionUpdatePostText = updatePostText('new post text')

    let newStateWithUpdatePostText = profileReducer(state, actionUpdatePostText)

    let actionAddPost = addPost()

    let newStateWithAddedPost = profileReducer(newStateWithUpdatePostText, actionAddPost)

    expect(newStateWithAddedPost.posts[5].id).toBe(6)
})

it('state length decremented after deleted post', () => {
    let action = deletePost(3)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

