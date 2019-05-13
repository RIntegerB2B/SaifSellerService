var mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    productId: String,
    productTitle: String,
    productName: String,
    productDescription: String,
    overview: String,
    price: Number,
    color: String, 
    productImageName: [String],
    subCategory: String,
<<<<<<< HEAD
    superCategory: String,
    mainCategory: String,
=======
>>>>>>> db9b3bdbabd07e392f8fe13589009c3366969db4
    // details
    styleCode: String, 
    skuCode: String, 
    material: String,
    brand: String,
    dimensions: String,
    weight: String,
    assembly: String,
    packageDetails: String,
});


const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
