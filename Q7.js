const fs = require('fs');

function unlinkFile(fpath)
{
    return new Promise((success,fail) => {
        fs.unlink(fpath,(err,data) => {
            if(err)
                fail(err);
            else
                success(data);
        })
    })
}

unlinkFile("./files1/file1.txt")
.then((data) => {
        console.log("File Successfully Unlink");
    })
    .catch((err) => {
        console.log("not Unlink");
    })
    