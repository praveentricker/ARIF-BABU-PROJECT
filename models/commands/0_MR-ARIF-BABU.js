module.exports.config = {
  name: "babu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Arif dp",
  usePrefix: true,
  commandCategory: "Random-IMG",
  usages: "arif babu",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/A1Qift2.jpg","https://i.imgur.com/8WUF7HJ.jpg","https://i.imgur.com/mLJw7tc.jpg","https://i.imgur.com/a1NPl9F.jpg","https://i.imgur.com/nBYDoNT.jpg","https://i.imgur.com/coGeSau.jpg","https://i.imgur.com/2JjkK0l.jpg","https://i.imgur.com/7qIldX1.jpg","https://i.imgur.com/YpDPpq5.jpg","https://i.imgur.com/c1aaVpd.jpg","https://i.imgur.com/U4eQKKS.jpg","https://i.imgur.com/R9W8CgK.jpg","https://i.imgur.com/xXGtR1H.jpg","https://i.imgur.com/4l2CyaF.jpg","https://i.imgur.com/GZyFV0o.jpg",
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     ABHI-BABU                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\nDEKH LO MARA BOSS ABHI BABU KO SABSE ALAG MASOOM SA CHEHRA BHOLE SE SURAT AANKH ME PYAR DIL ME BUKHAR ♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }
