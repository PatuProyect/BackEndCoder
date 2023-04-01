class ProductManager {
    constructor() {
        this.products= [];
    }

    static id = 0
    addProduct (title, descripcion, precio, image, code, stock) {
        for(let i = 0; i< this.products.length; i++) {
            if(this.products[i].code === code){
                console.log('el codigo esta repetido');
                break;
            }
        }

        const newProduct={ title, descripcion, precio, image, code, stock, };

        if(!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++;
            this.products.push({ 
            ...newProduct,
            id: ProductManager.id,
        });
        } else{
            console.log("todos los campos son requeridos")
        }

        } 
        

    

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }
    getProductById(id) {
    !this.existe(id)? console.log("no se encontro") : console.log(this.existe(id));
    }
    };


const productos = new ProductManager();
// primera llamada = arreglo vacio 
console.log(productos.getProduct());
// agregamos producto
productos.addProduct('titulo1', 'descripcion1', 1000, 'imagen1', 'abc122',3);
productos.addProduct('titulo2', 'descripcion2', 2000, 'imagen2', 'abc123',4);
productos.addProduct('titulo3', 'descripcion3', 1000, 'imagen3', 'abc124',);
// segunda llamada = arreglo con producto 
console.log(productos.getProduct());
// validacion de si el codigo esta repetido
productos.addProduct('titulo5', 'descripcion5', 5000, 'imagen5', 'abc123',5);
// busqueda de producto por id
productos.getProductById(3)
// busqueda de producto por id no encontrado
productos.getProductById(7)