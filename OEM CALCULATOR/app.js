// Storage Controller &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const StorageController = (function(){






})();

// Product Controller &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const ProductController = (function(){

    // private 
    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products : [],
        selectedProduct: null,
        totalPrice: 0
    }


    // public
    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        },
        getProductById: function(id){
            let product = null;

            data.products.forEach(function(prd){
                if(prd.id == id){
                    product = prd; 
                }
            })

            return product;
        },
        setCurrentProduct: function(product){
            data.selectedProduct = product;
        },
        getCurrentProduct: function(){
            return data.selectedProduct;
        },
        addProduct: function(name,price){
            let id;

            if(data.products.length > 0){
                id = data.products[data.products.length - 1].id + 1;
            }else{
                id = 0;
            }

            const newProduct = new Product(id,name,parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        updateProduct: function(name, price){
            let product = null;

            data.products.forEach(function(prd){
                if(prd.id == data.selectedProduct.id){
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            });

            return product;
        },
        deleteProduct: function(product){
            data.products.forEach(function(prd,index){
                if(prd.id == product.id){
                    data.products.splice(index,1);
                }
            });
        },
        getTotal: function(){
            let total = 0;

            data.products.forEach(function(item){
                total += item.price;
            });

            data.totalPrice = total;
            return data.totalPrice;
        }
    }


})();

// UI Controller &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const UIController = (function(){

    const Selectors = {
        productList : "#item-list",
        productListItems : "#item-list tr",
        addButton : ".addBtn",
        updateButton : ".updateBtn",
        cancelButton : ".cancelBtn",
        deleteButton : ".deleteBtn",
        productName : "#productName",
        productPrice : "#productPrice",
        productCard : "#productCard",
        totalTL : "#total-tl",
        totalDolar : "#total-dolar"
    }


    return {
        createProductList: function(products){
            let html="";

            products.forEach(prd => {
                html += `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}$</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>                      
                    </td>
                </tr>
                `;
            });
            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelector: function(){
            return Selectors;
        },
        addProduct: function(prd){
            
            document.querySelector(Selectors.productCard).style.display = "block";

            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}$</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>                      
                    </td>
                </tr>
            `;
            
            document.querySelector(Selectors.productList).innerHTML += item;
        },
        updateProduct: function(prd){
            
            let updateItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains("bg-warning")){
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + " $";
                    updateItem = item;
                }
            });

            return updateItem; 

        },
        clearInputs: function(){
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        clearWarnings: function(){
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains("bg-warning")){
                    item.classList.remove("bg-warning");
                }
            });
        },
        hideCard: function(){
            document.querySelector(Selectors.productCard).style.display = "none";
        },
        showTotal: function(total){
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total*18; 
        },
        addProductToForm: function(){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        deleteProduct: function(){
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains("bg-warning")){
                    item.remove();
                }
            });
        },
        addingState: function(item){

            UIController.clearWarnings();

            UIController.clearInputs();
            
            document.querySelector(Selectors.addButton).style.display = "inline";
            document.querySelector(Selectors.updateButton).style.display = "none";
            document.querySelector(Selectors.deleteButton).style.display = "none";
            document.querySelector(Selectors.cancelButton).style.display = "none";
        },
        editState: function(tr){

            tr.classList.add("bg-warning");
            document.querySelector(Selectors.addButton).style.display = "none";
            document.querySelector(Selectors.updateButton).style.display = "inline";
            document.querySelector(Selectors.deleteButton).style.display = "inline";
            document.querySelector(Selectors.cancelButton).style.display = "inline";
        }
    }



})();

//App &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const App = (function(ProductCtrl,UICtrl){

    const UISelectors = UICtrl.getSelector();
    // load Event Listeners
    const loadEventListeners = function(){       
        // Add Product Event 
        document.querySelector(UISelectors.addButton).addEventListener("click",productAddSubmit);

        // Edit Product Click
        document.querySelector(UISelectors.productList).addEventListener("click",productEditClick); 

        // Edit Product Submit
        document.querySelector(UISelectors.updateButton).addEventListener("click",editProductSubmit);

        // Cancel Button Click
        document.querySelector(UISelectors.cancelButton).addEventListener("click",cancelUpdate);

        // Delete Product
        document.querySelector(UISelectors.deleteButton).addEventListener("click",deleteProductSubmit);
    }

    const productAddSubmit = function(e){
        
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== "" && productPrice !== ""){
            // Add Product 
            const newProduct =  ProductCtrl.addProduct(productName,productPrice);
            
            // Add item to list 
            UIController.addProduct(newProduct);

            // Get total
            const total = ProductCtrl.getTotal();
            
            // Show total
            UICtrl.showTotal(total);

            // Clear inputs 
            UIController.clearInputs();
        }

        e.preventDefault();
    }

    const productEditClick = function(e){
        
        if(e.target.classList.contains("edit-product")){
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        
            // Get selected product
            const product = ProductCtrl.getProductById(id);
            
            // Set Current Product
            ProductCtrl.setCurrentProduct(product);

            // Add Product To UI
            UICtrl.addProductToForm();

            UICtrl.clearWarnings();

            UICtrl.editState(e.target.parentNode.parentNode);
        }

        e.preventDefault(); 
    }

    const editProductSubmit = function(e){
        
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !=="" && productPrice !==""){
            
            // Update Product
            const updatedProduct = ProductCtrl.updateProduct(productName,productPrice);

            // Update UI
            let item = UICtrl.updateProduct(updatedProduct);

            // Get total
            const total = ProductCtrl.getTotal();
            
            // Show total
            UICtrl.showTotal(total);

            UICtrl.addingState();

        }
        
        e.preventDefault();
    }

    const cancelUpdate = function(e){
        
        UICtrl.addingState();
        UICtrl.clearWarnings();

        e.preventDefault();
    }
    
    const deleteProductSubmit = function(e){
        
        // Get Selected Product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // Delete Product 
        ProductCtrl.deleteProduct(selectedProduct);

        // Delete UI
        UICtrl.deleteProduct();

        // Get total
        const total = ProductCtrl.getTotal();
            
        // Show total
        UICtrl.showTotal(total);

        UICtrl.addingState();

        if(total==0){
            UICtrl.hideCard();
        }


        e.preventDefault();
    }

    return {
        init: function(){
            
            UICtrl.addingState();

            const  products = ProductCtrl.getProducts();
            
            if(products.length == 0){
                UICtrl.hideCard();
            }else{
                UICtrl.createProductList(products);
            }

            loadEventListeners(); 
        }
    }


})(ProductController,UIController);

App.init();