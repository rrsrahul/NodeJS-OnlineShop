const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );



module.exports = class Cart {
    static addProduct(id, productPrice) {
      // Fetch the previous cart
      fs.readFile(p, (err, fileContent) => {
        let cart = { products: [], totalPrice: 0 };
        if (!err) {
          cart = JSON.parse(fileContent);
        }
        // Analyze the cart => Find existing product
        const existingProductIndex = cart.products.findIndex(
          prod => prod.id === id
        );
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        // Add new product/ increase quantity
        if (existingProduct) {
          updatedProduct = { ...existingProduct };
          updatedProduct.qty = updatedProduct.qty + 1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
        } else {
          updatedProduct = { id: id, qty: 1 };
          cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p, JSON.stringify(cart), err => {
          console.log(err);
        });
      });
    }
  };







module.exports = class Cart
{
    static addProduct(id,productPrice)
    {
        
        fs.readFile(p,(err,content)=>
        {
          let cart = {products:[],totalPrice:0};
            if(!err)
            {
                   cart = JSON.parse(content);     
            }

            //Fetch Previous Cart
        //Analyse the cart, add new product or increase the quantity
        const existingProductIndex = cart.products.findIndex(prod=>prod.id===id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct
        //if product already exists increase the quantity
         if(existingProduct)
         {
             console.log(existingProduct);
             updatedProduct = {...existingProduct};
             updatedProduct.qty = updatedProduct.qty + 1;
             cart.products[existingProductIndex] = updatedProduct;

         }
         else
         {
             console.log('Product does not exist');
             updatedProduct = {
                 id:id,
                 qty:1
             }
             cart.products = [...cart.products,updatedProduct];
         }

         cart.totalPrice = cart.totalPrice + +productPrice;
         fs.writeFile(p,JSON.stringify(cart),(err)=>
         {
             console.log(err);
         })

                
        });
        
    }


};