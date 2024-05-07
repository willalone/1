const App = {
    data(){
        return {
            a: 'SimpleWine',
            message: 'SimpleWine является прямым поставщиком и гарантирует <br> качество, подлинность, хранение и перевозку в <br> соответствии с мировыми стандартами',
            view: true
        }

    }
}

Vue.createApp(App).mount('#app')
