var buyRegistrationDA = require('./buy-registrationDA');


exports.bulkRegistration = function (req, res) {
    try {
        buyRegistrationDA.bulkRegistration(req, res);
    } catch (error) {
        console.log(error);
    }
}