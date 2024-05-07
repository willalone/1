const App = {
    data(){
        return {
            a: 'SimpleWine',
            message: 'SimpleWine является прямым поставщиком и гарантирует\nкачество, подлинность, хранение и перевозку в\nсоответствии с мировыми стандартами',
            view: true
        }

    }
}

Vue.createApp(App).mount('#app')