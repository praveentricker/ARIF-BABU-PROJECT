module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Turn on and off qtv only mode using the command",
	commandCategory: "Admin",
	usages: "enable and disable admin and qtv only mode using command",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
      "addedNewNDH": '𝗠𝗢𝗗𝗘 - Successfully added %1 the user becomes a Support Person\n\n%2',
        "listAdmin": `====== [ List of all bot admins ] ======\n\n%1\n\n\n=== [ List of all bot supporters ] ===\n\n%2`,
        "notHavePermssion": 'You are not authorized to be able to use the functionality "%1"',
        "addedNewAdmin": 'Added %1 The user becomes the bot operator:\n\n%2',
        "removedAdmin": 'Removed %1 bot operator:\n\n%2',
  "removedNDH": '𝗠𝗢𝗗𝗘 - Successfully removed the Support role %1 Users return as members\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async  ({ api, event, args, Users, permssion, getText }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const content = args.slice(1, args.length);
 axios.get('https://api-vip-2.khoadang31.repl.co/videogaixinh').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
let callback = function () {
    if (args.length == 0)
      api.sendMessage({body:`=== [ You can use ] ===━━━━━━━━━━━━━━━━━━\n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝 => Add a user as an admin bot \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝𝐧𝐝𝐡 => Add a user as an NDH bot \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐥𝐢𝐬𝐭 => See list of bot admins \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐫𝐞𝐦𝐨𝐯𝐞 => remove admin \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐫𝐞𝐦𝐨𝐯𝐞𝐧𝐝𝐡 => NDH removal \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐱𝐨𝐧𝐥𝐲 => Toggle bot admin-only mode on and off \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲 => Toggle Bot Only Admin mode\n[🕊] admin pa => Toggle mode only admins can chat privately with bots \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐧𝐝𝐡𝐨𝐧𝐥𝐲 => Turn BOT on and off in NDH-only modef \n» 𝐇𝐃𝐒𝐃: ${global.config.PREFIX} 𝐀𝐝𝐦𝐢𝐧 [𝐭𝐞𝐱𝐭]
`,
						attachment: fs.createReadStream(__dirname + `/cache/admin.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/admin.${ext}`), event.messageID);
				};
				 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/admin.${ext}`)).on("close", callback);
			})
 
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": { 
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`[🕊]  ${name}\n𝐋𝐢𝐧𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/profile.php?id=${idAdmin} `);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`[𝙉𝙖𝙢𝙚] ${name1}\n𝐋𝐢𝐧𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/profile.php?id=${idNDH} `);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n\n"), msg1.join("\n\n")), threadID, messageID);
        }

       
        case "add": { 
            if (event.senderID !=100089550064027) return api.sendMessage(`» Sorry! This command can only be used by admins 𝘼𝙖𝙙𝙞`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `『ADMIN』» ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID !=100089550064027) return api.sendMessage(`» Sorry! This command can only be used by admins`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] ❯ ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
        
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("=== [ BOXONLY  ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully disable Administrator mode, all members can use Bot 🎀", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("=== [ 𝗕𝗢𝗫𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - Successful activation of Administrator mode, only Administrators can use Bot 🎀", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("» Sorry! This command can only be used by administrators", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`=== [ 𝗢𝗡𝗟𝗬 𝐀𝐀𝐃𝐈  ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully enabled only admins can use bots ✨️`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`=== [ 𝐏𝐔𝐁𝐋𝐈𝐂 𝐌Ꮎ𝐃𝐄 ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully disabled only admins can use bots✨️`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
          case 'pa':
        case '-pa': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("» Sorry! This command can only be used by administrators", threadID, messageID);
               if (config.adminPaseOnly == false) {
                config.adminPaseOnly = true;
                api.sendMessage("=== [ 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully enable only admins can chat privately with bots 🍞", threadID, messageID);
            } else {
                config.adminPaseOnly = false;
                api.sendMessage("=== [ 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully turn off only admins can chat privately with bots 🍞", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'ndhonly':
        case '-ndh': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("» Sorry! This command can only be used by Admins", threadID, messageID);
            if (config.ndhOnly == false) {
                config.ndhOnly = true;
                api.sendMessage(`=== [ 𝗡𝗗𝗛𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully enabled only NDH can use bots 🐰`, threadID, messageID);
            } else {
                config.ndhOnly = false;
                api.sendMessage(`=== [ 𝗕𝗢𝗫𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - Successfully disable only NDH can use bots 🐰`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
        case "addndh": { 
          if (event.senderID != 100089550064027) return api.sendMessage(`𝗠𝗢𝗗𝗘 - Need main Admin rights to execute the command`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "addndh"), threadID, messageID);
          if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];
                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", 1, `Supporters - ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
  }
        case "removendh":{
          if (event.senderID !=100089550064027) return api.sendMessage(`𝗠𝗢𝗗𝗘 - Admin rights are required to do this`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removendh"), threadID, messageID);
                    if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
                    listAdd.push(`${id} -${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                      }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}