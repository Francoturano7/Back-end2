const fs = require(`fs`);

class ProductManager {
    constructor() {
        this.path = "./products.json";
        this.products = [];
    }

    static id = 0;


    async addProduct(product) {
        try {
            let products = await this.getProducts()
            if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
                console.log("Error: Todos los campos son obligatorios.");
                return;
            }

            if (products.some(p => p.code === product.code)) {
                console.log("Error: El código debe ser único.");
                return;
            }

            const newProduct = { ...product, id: ++ProductManager.id };
            products.push(newProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
            console.log(`Producto agregado con id ${newProduct.id}.`);
        } catch (error) {
            console.log(error)
        }

    }

    getProducts = async () => {
        try {
            let respuesta = await fs.promises.readFile(this.path, `utf-8`);
            return JSON.parse(respuesta);
        } catch (error) {
            if (error.code === "ENOENT") { // En caso de que el archivo este vacio entra al catch  y retorna un array vacio
                return []
            } else {
                throw err;
            }
        }

    };

    getProductsById = async (id) => {
        let respuesta3 = await this.getProducts();
        if (!respuesta3.find((product) => product.id === id)) {
            console.log('Product Not Found')
        } else {
            return respuesta3.find((product) => product.id === id)
        }
    }

    deleteProductsById = async (id) => {
        let respuesta3 = await this.getProducts();
        let productFilter = respuesta3.filter(products => products.id != id);
        await fs.promises.writeFile(this.path, JSON.stringify(productFilter, null, 2));
        console.log('Producto Eliminado')
    }

    updateProducts = async ({ id, ...product }) => {
        await this.deleteProductsById(id);
        let productOld = await this.getProducts();
        let productsModif = [{ ...product, id }, ...productOld];
        await fs.promises.writeFile(this.path, JSON.stringify(productsModif, null, 2))
    }
}

module.exports = ProductManager;