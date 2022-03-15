const app = {
    data (){
        return{
            name: 'Franciane',
            lastName: 'Lark',
            product1:{
                title: 'Laranja 1',
                description: 'Nutritiva',
                image: './assets/images/maçã-1.jpg',
                stars: 3,
            },
            product2:{
                title: 'Maçã 2',
                description: 'Nutritiva (2)',
                image: './assets/images/maçã-2.jpg',
                stars: 0,
            }
        }
    }
}
Vue.createApp(app).mount('#app')