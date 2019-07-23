'use strict';

module.exports = function(app){
    var path=require('../controller/apiController')

    app.route('/user')
    .get(path.listAllUser)
    .post(path.registerNewUser);

    app.route('/seller')
    .get(path.listAllSeller)
    .post(path.registerNewSeller);

    app.route('/product')
    .get(path.listAllProduct)
    .post(path.registerNewProduct);
};