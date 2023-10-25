const http = require('http');
let fet = import('node-fetch')
const port = 4000;

// Console
async function fetchData()
{
    try
    {
        const res = await fetch('http://google.com/');
        const data = await res.text();
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

fetchData();

// Browser
const server = http.createServer(async (req,res) => {
    const res1 = await fetch('http://google.com/');
    const data = await res1.text();
    res.end(data);
})

server.listen(port,() => {
    console.log(`Port is running on ${port}`);
})
