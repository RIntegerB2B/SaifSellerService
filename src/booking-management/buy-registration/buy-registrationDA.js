
var BulkOrder = require('../../model/buyInBulk.model')

exports.bulkRegistration = function (req, res) {
    BulkOrder
    .find({}).select().exec(function (err, booking) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(booking);
        }
    });
}