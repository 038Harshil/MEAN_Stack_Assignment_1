const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./files/zipFile1.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./files/zipFile1.txt',"utf-8"));

    console.log("\n file is Decompressed \n");