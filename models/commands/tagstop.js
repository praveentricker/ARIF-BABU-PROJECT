module.exports.config = {
    name: "tagstop",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Ntkhang",
    description: "Tag the person you tag continuously for 5 times\nCan be called calling that person's soul",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event }) {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const { mentions, threadID, messageID } = event;
  function reply(body) {
    api.sendMessage(body, threadID, messageID);
  }
  if (!global.client.modulesTaglientuc) global.client.modulesTaglientuc = [];
  const dataTaglientuc = global.client.modulesTaglientuc;
  if (!dataTaglientuc.some(item => item.threadID == threadID)) dataTaglientuc.push({ threadID, targetID: []});
  const thisTaglientuc = dataTaglientuc.find(item => item.threadID == threadID);
  if (args[0] == "stop") {
    if (args[1] == "all") {
      thisTaglientuc.targetID = [];
      return reply("Turned off soul calling all");
    }
    else {
      if (Object.keys(mentions).length == 0) return reply("Tag the person you want to stop calling");
			let msg = "";
      for (let id in mentions) {
        
        const userName = mentions[id].replace("@", "");
        if (!thisTaglientuc.targetID.includes(id)) msg += `\n${userName} The present is not called up`;
        else {
          thisTaglientuc.targetID.splice(thisTaglientuc.targetID.findIndex(item => item == id, 1));
          msg += `\n Soul calling turned off.  ${userName}`;
        }
      }
      return reply(msg);
    }
  }
  else {
		let solantag = args[args.length - 2];
    let time = args[args.length - 1];
                  // Check syntax
    if (Object.keys(mentions) == 0) return reply("Please tag the person you want to call a soul");
    if (!solantag || !time) return global.utils.throwError(this.config.name, threadID, messageID);
    if (isNaN(solantag)) return reply("The number of times the tag should be a number");
    if (isNaN(time)) return reply("The time between each tag should be a number");
    time = time*1000;
    const target = Object.keys(mentions)[0];
    if (thisTaglientuc.targetID.includes(target)) return reply("This person is being called");
    thisTaglientuc.targetID.push(target);
    reply(`Added ${mentions[target].replace("@", "")} to the soul list with:\nThe number of times the tag is: ${solantag}\nThe time between tags is ${time/1000} second`);
    const noidungtag = args.slice(0, args.length - 2).join(" ").replace("@", "");
    
    let i = 0;
    while (true) {
      await delay(time);
      if (i == solantag) {
				thisTaglientuc.targetID.splice(thisTaglientuc.targetID.findIndex(item => item == target, 1));
				break;
			}
      if (!global.client.modulesTaglientuc.find(item => item.threadID == threadID).targetID.includes(target)) break;
      await api.sendMessage({
        body: noidungtag,
        mentions: [{ id: target, tag: noidungtag }]
      }, threadID);
      i++;
    }
  }
};