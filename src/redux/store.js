import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Всем привет!', likes: 1},
                {id: 2, message: 'Как жизнь молодая?', likes: 2},
                {id: 3, message: 'Пытаюсь вкатиться в Реакт', likes: 3},
                {id: 4, message: 'Пока выходит говнокод, но я стараюсь', likes: 4},
                {id: 5, message: 'Ещё одно сообщение', likes: 5},
            ],
            newPostText: '',
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Джотаро', avaSrc: "https://memepedia.ru/wp-content/uploads/2018/08/2.png"},
                {id: 2, name: 'Джозеф', avaSrc: "https://i.ytimg.com/vi/azQJzj_R4QI/maxresdefault.jpg"},
                {
                    id: 3,
                    name: 'Джорно',
                    avaSrc: " https://relaza.com/sites/default/files/styles/medium/public/pictures/picture-29847-1615029977.png?itok=xZa8SwhI"
                },
                {id: 4, name: 'Спидвагон', avaSrc: "https://shikimori.one/system/characters/original/21938.jpg"},
                {
                    id: 5,
                    name: 'Дио',
                    avaSrc: "data:image/jpeg;base64,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"
                },
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Что делаешь?'},
                {id: 4, message: 'Гена, я в Египте'},
                {id: 5, message: 'Го в доту'},
            ],
            newMessage: '',
        },
        sidebar: {
            friends: [
                {id: 2, name: 'Джозеф', avaSrc: "https://i.ytimg.com/vi/azQJzj_R4QI/maxresdefault.jpg"},
                {
                    id: 3,
                    name: 'Джорно',
                    avaSrc: " https://relaza.com/sites/default/files/styles/medium/public/pictures/picture-29847-1615029977.png?itok=xZa8SwhI"
                },
                {id: 4, name: 'Спидвагон', avaSrc: "https://shikimori.one/system/characters/original/21938.jpg"},
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._callSubscriber(this.getState())
    },
}

export default store


