const fs=require(`fs`);

class ProductManager{
    constructor(){
        this.path="./products.json";
        this.products=[];
    }

    static id= 0;

    addProduct= async (title, description, price, thumbnail, code, stock)=>{
        ProductManager.id++;
        let newProduct={
            title,
             description,
              price,
               thumbnail,
                code,
                 stock,
                id:ProductManager.id
            };
            this.products.push(newProduct);
        await fs.promises.writeFile(this.path,JSON.stringify(this.products,null,2));
    };

    readProducts= async()=>{
        let respuesta = await fs.promises.readFile(this.path,`utf-8`);
        return JSON.parse(respuesta);
    };

    getProducts = async()=>{
        return await this.readProducts()
    }

    getProductsById= async(id)=>{
        let respuesta3=await this.readProducts();
        if(!respuesta3.find((product)=>product.id===id)){
            return 'Product Not Found'
        }else{
        return   respuesta3.find((product)=>product.id===id)
        }
    }

    deleteProductsById= async(id)=>{
        let respuesta3=await this.readProducts();
        let productFilter=respuesta3.filter(products =>products.id!=id);
        await fs.promises.writeFile(this.path,JSON.stringify(productFilter,null,2));
        console.log('Producto Eliminado')
    }

    updateProducts= async({id,...product})=>{
        await this.deleteProductsById(id);
        let productOld=await this.readProducts();
        let productsModif= [{...product,id}, ...productOld];
        await fs.promises.writeFile(this.path,JSON.stringify(productsModif,null,2))
    }
}




 module.exports=ProductManager;



















































// class ProductManager {
//     constructor(products = []) {
//       this.products = products;
//       this.lastId = 0;
//     }
  
//     addProduct(product) {
//       if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
//         console.log("Error: Todos los campos son obligatorios.");
//         return;
//       }
      
//       if (this.products.some(p => p.code === product.code)) {
//         console.log("Error: El código debe ser único.");
//         return;
//       }
      
//       const newProduct = { ...product, id: ++this.lastId };
//       this.products.push(newProduct);
//       console.log(`Producto agregado con id ${newProduct.id}.`);
//     }
  
//     getProducts() {
//       return this.products;
//     }
  
//     getProductById(id) {
//       const product = this.products.find(p => p.id === id);
//       if (product) {
//         return product;
//       } else {
//         console.log("Error: Not found.");
//       }
//     }
//   }
  
//   // Ejemplo de uso:
//   const pm = new ProductManager();
//   pm.addProduct({ title: "Martillo", description: "Martillo Galponero con mango de fibra", price: 1200, thumbnail: "martillo.jpg", code: "EVOL1250", stock: 5 });
//   pm.addProduct({ title: "Pinza", description: "Pinza universal de 8 pulgadas con mango aislado", price: 2200, thumbnail: "pinza.jpg", code: "EVOL4312", stock: 3 });
//   console.log(pm.getProducts());
//   console.log(pm.getProductById(1));
//   console.log(pm.getProductById(3));
  
  