const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp')
const client = new SteamUser();

var config = require('./config');

const logOnOptions = {
	accountName: config.bot.username,
	password: config.bot.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.bot.shared_secret)
};




client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log("Succesfully Logged In")
	console.log("Running")
});

client.on("friendMessage", function(steamID, message) {
	client.getPersonas([steamID], function(err, personas) {
		if (err) {console.log('error.')}
		else {
		persona = personas[steamID.getSteamID64()];
		name = persona ? persona.player_name : ("[" + steamID.getSteamID64() + "]");
	 
		client.chatMessage(config.bot.main_acc,'New Message From ' + name +":");
		client.chatMessage(config.bot.main_acc,"\""+message+"\"")

		}
	});
});
