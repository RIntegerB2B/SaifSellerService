
var subscribeDA = require('./subscribeDA');
const webpush = require('web-push');

const vapidKeys = {"publicKey":"BNMN_-1BUbcWu_HDPo-fedCKVZRtbx_Lv1718BzoFfiERREFBeknxGLmJvn5dzU1xM5zS-v5nkE8gU1ak49YOcE",
"privateKey":"xbIt--86Az8UtZyoobrxZwgI4FEYHlqUoTSYWZII7qE"}
webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

exports.subscribe = function (req, res) {
    try {
        subscribeDA.subscribe(req, res);

    } catch (error) {
        console.log(error);
    }
}
