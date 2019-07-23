'use strict';

var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var Product=new Schema({
    productId:
    {
        type: String,
        required: 'Enter the product id'
    },
    productName:
    {
        type: String,
        required: "kindly enter name of the product"
    },
    productAuthor:
    {
        type: String,
        required: "kindly enter author name of the product"
    },
    productCategory:
    {
        type: String,
        required: "kindly enter category of the product"
    },
    productDescription:
    {
        type: String,
        required: "kindly enter description of the product"
    },
    productPrice:
    {
        type: Number,
        required: "kindly enter price of the product"
    },
    productDiscount:
    {
        type: Number,
        
    },
    productQuantity:
    {
        type: Number,
        required: "kindly enter quantity of the product"
    },
    productPhoto:
    {
        type: String,
        required: "kindly enter photo url of the product"
    },
    sellerId:
    {
        type: String,
        required: "kindly enter seller id of the product"
    },
    publishDate:
    {
        type: Date,
        default: Date.now
    },
    cartId:
    {
        type: String,
        default: "0"
    }
});

module.exports = mongoose.model('Product', Product);

var SellerRegistration=new Schema({
    sellerId:
    {
        type: String,
        required: "kindly enter the id of the seller"
    },
    sellerProfilePic:
    {
        type: String,
        default: "https://previews.dropbox.com/p/thumb/AAcKUAKO7MYYM6NvQ57JFCtX0HZ3BSi1j0jnt_auAKugBdgoaO5YrTC2_rhrDmF7C4cEcxh2H35WRh0sltIV0o-AqVWcxNgwpSRDlgGHr291_AY29DPn25m9aEC0J0b7o-x7qWH7SYSiUMO44Z6tNfcvz5R3D2sCq0b6NazIgw8GG_9sKF5sLe0k964OkUAHPqvAb9m43x3LM5T6bONM_g8_hi7fj7N0GYlCLdNkyt_xEafg7PAXv7AlMJx9j6lJWa5MaCMEUqP_yK9tzw4osszP_QsFJvkChZ0UpD6iVl5oSYOvH3X-h1LPk9Uux4736VmGgizPJPA8EQaXVEjnwnnr/p.png?fv_content=true&size_mode=5"
    },
    username:
    {
        type: String,
        required: "kindly enter the username"
    },
    password:
    {
        type: String,
        required: "kindly enter the username"
    },
    name:{
        type: String,
        required: "kindly enter the name"
    },
    phoneNumber:{
        type: String,
        required: "kindly enter the contact detail"
    },
    alternatePhoneNumber:{
        type: String,

    },
    email:{
        type: String,
        required: "kindly enter the email of the user"
    },
    DOB:{
        type: Date,
        required: "enter your date of birth"
    },
    h_no:{
        type: Number
    },
    locality:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    country:{
        type:String
    },
    pincode:{
        type: Number
    },
    GSTIN:{
        type: String,
        required: "Kinldy insert the gst number"
    },
    panNumber:{
        type: String
    },
    accountNumber:{
        type: String
    }
});

module.exports=mongoose.model('SellerRegistration',SellerRegistration);


var UserRegistration=new Schema({
    userId:
    {
        type: String,
        required: "kindly enter the id of the user"
    },
    cartId: {
        type: String
    },
    userProfilePic:
    {
        type: String,
        default: "https://previews.dropbox.com/p/thumb/AAcKUAKO7MYYM6NvQ57JFCtX0HZ3BSi1j0jnt_auAKugBdgoaO5YrTC2_rhrDmF7C4cEcxh2H35WRh0sltIV0o-AqVWcxNgwpSRDlgGHr291_AY29DPn25m9aEC0J0b7o-x7qWH7SYSiUMO44Z6tNfcvz5R3D2sCq0b6NazIgw8GG_9sKF5sLe0k964OkUAHPqvAb9m43x3LM5T6bONM_g8_hi7fj7N0GYlCLdNkyt_xEafg7PAXv7AlMJx9j6lJWa5MaCMEUqP_yK9tzw4osszP_QsFJvkChZ0UpD6iVl5oSYOvH3X-h1LPk9Uux4736VmGgizPJPA8EQaXVEjnwnnr/p.png?fv_content=true&size_mode=5"
    },
    username:
    {
        type: String,
        required: "kindly enter the username"
    },
    password:
    {
        type: String,
        required: "kindly enter the password"
    },
    name:{
        type: String,
        required: "kindly enter the name"
    },
    phoneNumber:{
        type: String,
        required: "kindly enter the contact detail"
    },
    alternatePhoneNumber:{
        type: String,

    },
    email:{
        type: String,
        required: "kindly enter the email of the user"
    },
    DOB:{
        type: Date,
        required: "enter your date of birth"
    },
    h_no:{
        type: Number
    },
    locality:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    country:{
        type:String
    },
    pincode:{
        type: Number
    }
    
});

module.exports=mongoose.model('UserRegistration',UserRegistration);

var Order=new Schema({
    orderId:
    {
        type: String,
        required: "kindly enter the id of the order"
    },
    userId:
    {
        type: String,
        required: "kindly enter the userId"
    },
    paymentId:
    {
        type: String,
        required: "kindly enter the payment id"
    },
    shippingId:
    {
        type: String,
        required: "kindly enter the shipping id"
    },
    orderValue:{
        type: Number
    },
    returnPolicy:{
        type: String
    },
    promotionalCode:{
        type: String
    }
});

module.exports=mongoose.model('Order',Order);

var Shipping=new Schema({
    shippingId:
    {
        type: String
    },
    shippingDate:
    {
        type: Date
    },
    shippingAddress:
    {
        type: String
    },
    deliveryDate:
    {
        type: Date
    },
    orderWeight:{
        type: Number
    }
});

module.exports=mongoose.model('Shipping',Shipping);

var Payment=new Schema({
    paymentId:{
        type: String
    },
    paymentMode:{
        type: String
    },
    paymentGateway:{
        type: String
    }
});

module.exports=mongoose.model('Payment',Payment);

var Cart=new Schema({
    cartId: {
        type: String
    },
    orderId:{
        type: String
    },
    cartValue:{
        type: Number
    }
});

module.exports=mongoose.model('Cart',Cart);