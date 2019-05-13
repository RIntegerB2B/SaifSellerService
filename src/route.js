var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');
var productRoutes = require('./product/productRoute');
var buyerRoutes = require('./buyer/buyerRoute');
var settingRoutes = require('./settings/settingsRoute');
var moqRoutes = require('./moq/moqRoute');
<<<<<<< HEAD
var customerRoutes = require('./customer-management/customerManagementRoute');
var bookingManagementRoutes = require('./booking-management/bookingManagementRoute');
=======
>>>>>>> db9b3bdbabd07e392f8fe13589009c3366969db4

exports.loadRoutes = function (app) {
    moqRoutes(app);
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
    buyerRoutes(app);
    settingRoutes(app);
<<<<<<< HEAD
    customerRoutes(app);
    bookingManagementRoutes(app);
=======
>>>>>>> db9b3bdbabd07e392f8fe13589009c3366969db4
};

