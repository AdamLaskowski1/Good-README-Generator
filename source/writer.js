const fs = require("fs");
const { resolve } = require("path");

function writeFileAsync(filename, filedata){
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, filedata, function(err){
            if(err){
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

module.exports = {
    writeFileAsync
}
