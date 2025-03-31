module.exports.config = {
	name: "lyricsv2",
    version: "1.0.0", 
	hasPermssion: 0,
	credits: "manhG",
	description: "công cụ tìm lời bài hát", 
	commandCategory: "Công Cụ",
	usages: "[artist, title]",
	cooldowns: 5,
    dependencies: {
        "lyrics-finder":""
    }
};
module.exports.run = async function ({ api, args, event }) {
    const lyricsFinder = require('lyrics-finder');
    var artists = args.join(" "), titles = args.join(" ");
    (async function(artist, title) {
        let lyrics = await lyricsFinder(artist, title) || "Not Found!";
        api.sendMessage(`=== 𝙇𝙔𝙍𝙄𝘾𝙎 :====\n━━━━━━━━━━━━━━━━━━\n\n${lyrics}`, event.threadID, event.messageID);
    })(artists, titles);
}
