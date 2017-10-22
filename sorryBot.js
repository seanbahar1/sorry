const Discord = require('discord.js');
const client = new Discord.Client();
var sorry = {
    "Sean": 0,
    "Griffen": 0
};
client.login('MzYxMTQ5Nzc5NjIwOTIxMzQ2.DMplog.uXJkttYEX3NFR56SU8dtTDBl1cc');
client.on('message', msg => {
    console.log(`[${msg.author.username}]: ${msg.content}`);
    if (msg.author.bot)
        return;
    if (msg.content.includes("!sorry_check")) {
        msg.reply(`sean said sorry for: ${sorry['Sean'] }, Griffen did for: ${sorry['Griffen'] }`);
        return;
    }
  
    switch (msg.author.username) {
        case "sean bahar":
            sorry['Sean'] += that(msg.content.toLowerCase());
            break;
        case "DarkGriffen":
            sorry['Griffen'] += that(msg.content.toLowerCase());
            break;
    };

});










var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});













function that(msg) {
    //lets here
    let i = 0;
    let y = 0;
    var check = msg.split(" ");
    for (i = 0; i < check.length; i++) {
        if(check[i].includes('sorry'))
            y++;
        else;
    }


    return y;
};
