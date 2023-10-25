const mysql = require('nodejs-mysql').default;

const connection = {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db"
}

const db = mysql.getInstance(connection)
db.connect()
    .then(function(){
        console.log("Connection Done");

        var sql = "INSERT INTO emptb(username,password,email,number) VALUES ('hello','hello@1234','hello@gmail.com','7956775430')";
        return db.exec(sql);
      
    }).then(function(res){
        console.log(res);
        return db.exec("SELECT * FROM emptb");
    }).then(function(result){
        for (var i in result) {
            console.log('Username: ', result[i].username + " Password: " +result[i].password + " Email: " + result[i].email + " Number: " + result[i].number);
        }
        process.exit(0);
    }).catch(function(err){
        console.log("Not Done");
        process.exit(0);
    })
