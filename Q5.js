const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('zibfolder')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('zipfile.gz'));

  console.log("\n file Created \n");