module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`==𝙍𝙀𝙎𝙏𝘼𝙍𝙏𝙄𝙉𝙂 𝙏𝙄𝙈𝙀 8 𝙎𝙀𝘾𝙊𝙉𝘿==               \n\n😘_________________________________😘 `, threadID, () => process.exit(1));
}