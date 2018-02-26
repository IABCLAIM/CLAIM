var path = require('path');

module.exports = {  
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'public/dist/js/'),
        filename: 'script.js'
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
            toastr: "toastr",
            web3: "web3"
        }
    }
};