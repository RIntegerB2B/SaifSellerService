var NotificationDetail = require('../../model/subscribe.model');
const webpush = require('web-push');

exports.subscribe = function (req, res) {
    NotificationDetail.findOne({
        'mobileNumber': req.body.mobileNumber,
        'userSubscriptions':req.body.userSubscriptions,
      
    }, function (err, notificationDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (notificationDetail == null) {
                var notification = new NotificationDetail(req.body);
                notification.save(
                    function (err,notificationData) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            NotificationDetail.find({
                            }, function (err, subscriptionData) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    console.log('Total subscriptions', subscriptionData);
                        
                                    const notificationPayload = {
                                        "notification": {
                                            "title": 'New customer subscribed',
                                            "body": 'Mobile Number' ,
                                           /*  "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl, */
                                            "vibrate": [100, 50, 100],
                                            "data": {
                                             /*    "url": appSetting.notificationUrl , */
                                                "dateOfArrival": Date.now(),
                                                "primaryKey": 1
                                            }
                                        }
                                    };
                                    Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                                            sub.userSubscriptions, JSON.stringify(notificationPayload))))
                                        .then(() => res.status(200).json({
                                            message: 'Push Notificatoin Successfull.'
                                        }))
                                        .catch(err => {
                                            console.error("Error sending notification, reason: ", err);
                                            res.sendStatus(500);
                                        });
                                }
                            });
                        }
                    });
            } 
        }
    });
}