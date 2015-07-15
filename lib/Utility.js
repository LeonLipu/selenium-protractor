﻿module.exports = {

    getRandomString: function (chars) {
    
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < chars; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return text;
    
    }

};