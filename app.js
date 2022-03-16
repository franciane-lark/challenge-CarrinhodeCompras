const app = {
    data (){
        return{
            name: 'Franciane',
            lastName: 'Lark',
            product1:{
                title: 'Trufa',
                description: 'Trufa de morango 1',
                image: './assets/images/trufa-1.jpg',
                stars: 1,
            },
            product2:{
                title: 'Trufa',
                description: 'Trufa de morango 2',
                image: './assets/images/trufa-2.jpg',
                stars: 2,
            },
            product3:{
                title: 'Trufa',
                description: 'Trufa de morango 3',
                image: './assets/images/trufa-3.jpg',
                stars: 3,
            },
            product4:{
                title: 'Trufa',
                description: 'Trufa de morango 4',
                image: './assets/images/trufa-3.jpg',
                stars: 4,
            }
        }
    }
}
Vue.createApp(app).mount('#app')