const fs = require("fs");
module.exports.config = {
	name: "imoge5",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PIYUSHJI ", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("dost") ||
     react.includes("👊") || react.includes("bhai") || react.includes("brother") ||
react.includes("🧑‍🤝‍🧑") ||
react.includes("kafila")) {
		var msg = {
				body: `【 【 ᯽ 𝐋𝐎 𝐌𝐄 𝐀𝐀 𝐆𝐘𝐀 𝐏𝐈𝐘𝐔𝐒𝐇 𝐊𝐄 𝐁𝐄𝐒𝐓 𝐅𝐑𝐄𝐍𝐃𝐒 𝐋𝐎𝐆𝐎 𝐊𝐎 𝐋𝐄𝐊𝐄 
   【 𝐘𝐓 𝐋𝐈𝐍𝐊 : ̗̀➛ https://youtube.com/@piyush_chauhan447?si=e81SAzZ4tRCekzy- 】
   
   【 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐇𝐄𝐋𝐋 𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊 : ̗̀➛ https://chat.whatsapp.com/FvSKvHB3OQ4ItfouW8c3IY 】
   
   【 𝐏𝐈𝐘𝐔𝐒𝐇 𝐒𝐈𝐑 𝐅𝐁 𝐈𝐃  : ̗̀➛ https://www.facebook.com/profile.php?id=61559938125497&mibextid=ZbWKwL◎ 】

   【 𝐁𝐄𝐒𝐓 𝐅𝐑𝐍𝐃 1 𝐀𝐁𝐇𝐈 𝐘𝐀𝐃𝐀𝐕 : ̗̀➛  https://www.facebook.com/panditokibahanokonangakarakebhaga?mibextid=ZbWKwL 】
   
   【 𝐁𝐄𝐒𝐓 𝐅𝐑𝐍𝐃 2 𝐑𝐎𝐂𝐊𝐘 𝐑𝐀𝐀𝐉 : ̗̀➛  https://www.facebook.com/profile.php?id=100037922105225&mibextid=ZbWKwL 】
   
   【 𝐁𝐄𝐒𝐓 𝐅𝐑𝐍𝐃 3 𝐒𝐈𝐘𝐀 𝐑𝐀𝐀𝐉𝐏𝐎𝐓 : ̗̀➛ https://www.facebook.com/golgappiii12?mibextid=ZbWKwL 】
   
   【 𝐁𝐄𝐒𝐓 𝐅𝐑𝐍𝐃 4 𝐌𝐀𝐃𝐇𝐀𝐕 𝐘𝐀𝐃𝐀𝐕 : ̗̀➛ https://www.facebook.com/profile.php?id=100065885880671&mibextid=ZbWKwL 】
   
   【 
   
   【 𝐒𝐮𝐬𝐜𝐫𝐢𝐛𝐞 𝐚𝐧𝐝 𝐣𝐨𝐢𝐧 𝐦𝐲 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐠𝐫𝐨𝐮𝐩 𝐭𝐪 𝐠𝐮𝐲𝐬 🥰😍᯽】】`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }