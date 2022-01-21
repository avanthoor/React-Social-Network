let initialState = {
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

const sidebarReducer =  (state = initialState, action) =>  {
   return state
}

export default sidebarReducer