var viewBookingsMgr = require('./bookings/viewBookingsMgr');
var viewBulkRegistrationMgr =  require('./buy-registration/buy-registrationMgr');

module.exports = function(app) {
    app.route('/allbookings')
        .get(viewBookingsMgr.allBookings);

        app.route('/bookings/:id')
        .get(viewBookingsMgr.singleBookings);

        app.route('/statusupdate/:id') 
        .put(viewBookingsMgr.updateStatus);

        app.route('/bulkregistration')
        .get(viewBulkRegistrationMgr.bulkRegistration);

      

}