const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
    name: "tagadmin", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.0", // phiên bản của module này
    hasPermssion: 1, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "hi<@shibaSama>", // TruongMini
    description: "Tag!!", // Thông tin chi tiết về lệnh
    commandCategory: "Tiện ích", // Which group: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "[msg]", // How to use the command
    cooldowns: 5 // How long a person can repeat commands 
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bank.gif")) request("https://i.imgur.com/yj7BGDx.gif ").pipe(fs.createWriteStream(dirMaterial + "bank.gif"));
                       }

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, args }) {
let uid = event.senderID;
var msg = [`ljkj`];
    const { threadID, messageID, body } = event;
    switch (handleReply.type) {
        case "tagadmin": {
            let name = await Users.getNameUser(handleReply.author);
            api.sendMessage({body: `=== [ 𝐀𝐀𝐃𝐈 𝐅𝐄𝐄𝐃𝐁𝐀𝐂𝐊 ] ===\n━━━━━━━━━━━━━━━━━━\n💌 𝐂𝐨𝐧𝐭𝐚𝐧𝐭: ${body}\n👤 𝗮𝗱𝗺𝗶𝗻: ${name || "facebook users"}\n⏰ 𝗧𝗶𝗺𝗲: ${moment().tz("Asia/Kolkata").format("DD/MM/YYYY-HH:mm:ss")}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n💬 𝐂𝐨𝐧𝐭𝐚𝐜𝐭: m.me/${event.senderID}\n━━━━━━━━━━━━━━━━━━\n🌹 𝐑𝐞𝐩𝐥𝐲 𝐓𝐨 𝐌𝐚𝐬𝐬𝐞𝐠𝐞 (𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤) 𝐀𝐛𝐨𝐮𝐭 𝐀𝐚𝐝𝐢 𝐆𝐮𝐩𝐭𝐚💞 `, attachment: await downLoad(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, __dirname+'/cache/12345.jpg')}, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "reply",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
        case "reply": {
            let name = await Users.getNameUser(event.senderID);
            api.sendMessage({body: `=== [ 𝐔𝐒𝐄𝐑 𝐑𝐄𝐏𝐋𝐘 ] ===\n━━━━━━━━━━━━━━━━━━\n𝐂𝐨𝐧𝐭𝐚𝐧𝐭 :${body}\n𝗡𝗮𝗺𝗲 : ${name || "facebook users"}\n𝙗𝙤𝙭 : ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n𝗧𝗶𝗺𝗲: ${moment().tz("Asia/Kolkata").format("DD/MM/YYYY-HH:mm:ss")}\n━━━━━━━━━━━━━━━━━━\n 𝐑𝐞𝐩𝐥𝐲 𝐓𝐨 𝐓𝐡𝐞 𝐌𝐚𝐬𝐬𝐞𝐠𝐞 (𝐑𝐞𝐩𝐥𝐲) 𝐁𝐚𝐜𝐤 𝐓𝐨 𝐓𝐡𝐞 𝐓𝐚𝐠𝐠𝐞𝐫`, attachment: await downLoad(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, __dirname+'/cache/12345.jpg')},handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.handleEvent = async ({ api, event, Users, Threads, args }) => {
    const { threadID, messageID, body, mentions, senderID } = event;
    let path = __dirname + "/cache/tagadmin.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = true;
    if(!mentions || !data[threadID]) return;
    let mentionsKey = Object.keys(mentions);
    let allAdmin = global.config.ADMINBOT;
    mentionsKey.forEach(async (each) => {
        if(each == api.getCurrentUserID()) return;
        if(allAdmin.includes(each)) {
            let userName = await Users.getNameUser(senderID);
            let threadName = await Threads.getInfo(threadID).threadName;
            api.sendMessage({body:`=== [ 𝐓𝐀𝐆 𝐀𝐀𝐃𝐈 ] ===\n━━━━━━━━━━━━━━━━━━\n👤 𝐏𝐞𝐨𝐩𝐥𝐞 𝐓𝐚𝐠: ${userName}\n🎧 𝗕𝗼𝘅: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n💌 𝐂𝐨𝐧𝐭𝐞𝐧𝐭: ${body}\n⏰ 𝗧𝗶𝗺𝗲: ${moment().tz("Asia/Kolkata").format("DD/MM/YYYY-HH:mm:ss")}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n💬 𝐂𝐨𝐧𝐭𝐚𝐜𝐭: m.me/${event.senderID}\n━━━━━━━━━━━━━━━━━━\n𝗥𝗲𝗽𝗹𝘆 𝐌𝐞𝐬𝐬𝐞𝐠𝐞 (𝐑𝐞𝐩𝐥𝐲) 𝐁𝐚𝐜𝐤 𝐓𝐨 𝐓𝐡𝐞 𝐓𝐚𝐠𝐠𝐞𝐫💞`, attachment: await downLoad(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, __dirname+'/cache/12345.jpg')},each, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
                        messID: messageID,
                        author: each,
                        threadID
                    })
                }
            })
        }
    })
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

module.exports.run = async ({ api, event, args }) => {
const fs = require("fs");
    const { threadID } = event;
    let path = __dirname + "/cache/tagadmin.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = true;
    if(args[0] == "off") data[threadID] = false;
    else if(args[0] == "on") data[threadID] = true;
    else return api.sendMessage({body: `Please enable tagadmin on or off`, attachment: fs.createReadStream(__dirname + `/noprefix/bank.gif`)}, event.threadID, event.messageID);
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
    return api.sendMessage({body: `Tag Admin has been ${data[threadID] ? "on" : "off"}`, attachment: fs.createReadStream(__dirname + `/noprefix/bank.gif`)}, event.threadID, event.messageID);
};

async function downLoad(a, b) {
    await (require('image-downloader')).image({
        url: a, dest: b
    });
    return (require('fs-extra')).createReadStream(b);
};