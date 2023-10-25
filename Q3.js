const chatbot = require('./chatbot');
const readline = require('readline');

var read1 = readline.createInterface(process.stdin,process.stdout);
read1.setPrompt("Enter the Questions: ");
read1.prompt();

read1.on('line',(message) => {
    console.log("Answer is: " + chatbot.chatBotReply(message));
    read1.prompt();
}).on('close',function(){
    process.exit(0);
})
