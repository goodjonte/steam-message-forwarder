const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp')
const client = new SteamUser();

var config = require('./config');

const logOnOptions = {
	accountName: config.bot.username,
	password: config.bot.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.bot.shared_secret)
	
};

if (config.bot.username == "" || config.bot.password == "" || config.bot.shared_secret == "" || config.bot.main_acc_ID == "" || config.bot.main_acc_ID64 == "" ){
	console.log("")
	console.log("###################################################")
	console.log("")
	console.log("YOU HAVE NOT FILLED OUT ALL/ANY OF THE CONFIG FILE!")
	console.log("")
	console.log("###################################################")
	console.log("")
}
else{
	run(logOnOptions, config, client);
}






function run(logOnOptions, config, client){

	client.logOn(logOnOptions);

	client.on('loggedOn', () => {
		console.log("Succesfully Logged In")
		console.log("Running")
	});

	client.on("friendMessage", function(steamID, message) {
		if (steamID == config.bot.main_acc_ID64){
			var reply = message.split(",");
			var command = reply[0];
			var account = reply[1]; 
			var new_message = ""
			for (i = 2; i < reply.length; i++)
				var word = reply[i] + " ";
				var new_message = new_message + word;
			if (command == "!reply" || command == "!message" || command == "!msg" ){
				client.chatMessage(account, new_message);
				console.log("message sent!")
			}
		}else{
			client.getPersonas([steamID], function(err, personas) {
				if (err) {console.log('error.')}
				else {
				persona = personas[steamID.getSteamID64()];
				name = persona ? persona.player_name : ("[" + steamID.getSteamID64() + "]");
				client.chatMessage(config.bot.main_acc_ID,'New Message From ' + name + "   -   " + steamID);
				client.chatMessage(config.bot.main_acc_ID,"\""+message+"\"")
				}
			});
		}
	});
}