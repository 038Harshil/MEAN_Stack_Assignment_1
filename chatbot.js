module.exports.chatBotReply = function(message)
{
    this.age = 20;
    this.country = "India";
    this.UniverCity = "VNSGU";
    this.name = "XYZ";

    message = message.toLowerCase();
    if(message.indexOf("hi") > -1 || message.indexOf("welcome") > -1 || message.indexOf("hello") > -1)
    {
        return "Hii";
    }
    else if(message.indexOf("how") > -1 && message.indexOf("how are you") > -1)
    {
        return "I'm Fine!";
    }
    else if(message.indexOf("where") > -1 && message.indexOf("where you live") > -1)
    {
        return "I Live In " + this.country;
    }
    else if(message.indexOf("age") > -1 && message.indexOf("what is your age") > -1)
    {
        return "My age is " + this.age;
    }
    else if(message.indexOf("name") > -1 && message.indexOf("what is your name") > -1)
    {
        return "My name is " + this.name;
    }
    else if(message.indexOf("univercity") > -1 && message.indexOf("what is your univercity name") > -1)
    {
        return "My UniverCity Name is " + this.UniverCity;
    }
    return "Sorry, I Didn't get it.";
}
