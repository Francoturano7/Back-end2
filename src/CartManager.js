const fs = require(`fs`);
const uuid4 = require("uuid4");
const ProductManager = require('./ProductManager')

let allProducts = new ProductManager()

class CartManager {
    constructor() {
        this.path = "./routes/carrito.json";
        this.cart = []
    }

    static id = uuid4()

    async addCart() {
        try {
            let cartsOld = await this.getCarts()
            let id = uuid4()
            const cartsConcat = [{ id: id, products: [] }, ...cartsOld]
            let carritoAgregado = await fs.promises.writeFile(this.path, JSON.stringify(cartsConcat, null, 2));
            return carritoAgregado;
        } catch (error) {
            return error
        }
    }

    getCarts = async () => {
        try {
            let respuesta = await fs.promises.readFile(this.path, `utf-8`);
            let allCart = JSON.parse(respuesta);
            return allCart
        } catch (error) {
            if (error.code === "ENOENT") {
                return []
            } else {
                throw err;
            }
        }
    };

    getCartsById = async (id) => {
        let respuesta3 = await this.getCarts();
        if (!respuesta3.find((cart) => cart.id === id)) {
            return 'Cart Not Found'
        } else {
            return respuesta3.find((cart) => cart.id === id)
        }
    }

    addProductInCart = async (cartId, productId) => {
        let cartById = await this.getCartsById(cartId)
        let productById = await allProducts.getProductsById(productId)

        let allCarts = await this.getCarts()
        let cartFilter = await allCarts.filter(cart => cart.id != cartId)

        if (cartById.products.some(prod => prod.id === productId)) {
            let moreProductInCart = cartById.products.find(prod => prod.id === productId)
            moreProductInCart.cantidad ++
            let cartsConcat = [moreProductInCart, ...cartFilter]
            await this.addCart(cartsConcat)
            return `producto sumado al carrito`
        }

        cartById.products.push({ id: productById.id, cantidad: 1 })

        let cartsConcat = [cartById, ...cartFilter]
        console.log(cartsConcat)
     return cartsConcat
        
       
    }
}







module.exports = CartManager;