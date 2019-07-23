


//getting all models or schema from the database
var mongoose=require('mongoose'),
Product=mongoose.model('Product'),
SellerRegistration=mongoose.model('SellerRegistration'),
UserRegistration=mongoose.model('UserRegistration'),
Order=mongoose.model('Order'),
Shipping=mongoose.model('Shipping'),
Payment=mongoose.model('Payment'),
Cart=mongoose.model('Cart');



//test api's
exports.listAllUser=function(req,res){
    UserRegistration.find({}, function(err,task){
        if(err)
            res.send(err);
        else
            res.json(task);
    });
};


exports.listAllProduct=function(req,res){
    Product.find({}, function(err,task){
        if(err)
            res.send(err);
        else
            res.json(task);
    });
};


exports.listAllSeller=function(req,res){
    SellerRegistration.find({}, function(err,task){
        if(err)
            res.send(err);
        else
            res.json(task);
    });
};

exports.registerNewUser=function(req,res){
    var newUser=new UserRegistration(req.body);
    newUser.save(function(err,task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};

exports.registerNewSeller=function(req,res){
    var newSeller=new SellerRegistration(req.body);
    newSeller.save(function(err,task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};

exports.registerNewProduct=function(req,res){
    var newProduct=new Product(req.body);
    newProduct.save(function(err,task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};
