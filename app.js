const app = {
    data (){
        return{
            title: 'Carrinho de frutas',
            name: 'Franciane',
            lastName: 'Lark',
            products:[
                {
                    title: 'Trufa',
                    description: 'Trufa de morango 1',
                    image: './assets/images/trufa-1.jpg',
                    preco1: 1.23,
                    preco2: 1.11,
                },
                {
                    title: 'Trufa',
                    description: 'Trufa de morango 2',
                    image: './assets/images/trufa-2.jpg',
                    preco1: 1.23,
                    preco2: 1.11,
                },
                {
                    title: 'Trufa',
                    description: 'Trufa de morango 3',
                    image: './assets/images/trufa-3.jpg',
                    preco1: 1.23,
                    preco2: 1.11,
                },
                {
                    title: 'Trufa',
                    description: 'Trufa de morango 4',
                    image: './assets/images/trufa-3.jpg',
                    preco1: 1.23,
                    preco2: 1.11,
                }
            ],
            cart: [],
        }
    },
    methods: {
        addCart(product){
            this.cart.push(product)
        },

        inCart(product){
            return this.cart.indexOf(product) != -1
        },

        removeCart(product){
           this.cart = this.cart.filter((prod, index) => product != prod)
        }
    },
}
Vue.createApp(app).mount('#app')