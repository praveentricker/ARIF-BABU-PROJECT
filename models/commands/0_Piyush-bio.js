module.exports.config = {
    name: "shayri",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "PIYUSH CHAUHAN",
    description: "THIS BOT WAS MADE BY MR PIYUSH CHAUHAN",
    commandCategory: "SHAYRI PROFILE",
    cooldowns: 0
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];
    
    // Shayari ka array
    const shayariList = ["Do Belv Ao Peopl C Chg At�"-[] " ,
"____� �O  ht Lov  Ws w Grt AlLf App Lf� ____ ",� 
"��� - ;))�� ___-__�Tw Tw Ltt St ot ot 's   C��� -[] ",
"Sx M � "


[|==>   2 <==|]
 [ Bio No-1 ]

{{�"--�^^



____"f  ��  � � 
 g, �  _"



Hc�}}",
"


 [ Bio No-2 ]

^^))__




Excs M, 
I Fo Sot U M Sos 
O, Its Yo Attt�



Rpot",
"


 [ Bio No-3 ]

-__




___"To j   j(^^)
*)) t pS  H j	 H:


Y
:)Co",
"


 [ Bio No-4 ]
_-_

__T U CG J T H  
Bt p t H To S__

(:Rctor",
"


 [ Bio No-5]
___-_



_�Tw Tw Ltt St ot ot 's   C��� 

"-[]

Sx M 


�",
"


 [ Bio No-6 ]

"-_



____"If o TK I � BAD o woG, I�  wos
""___



"-_",
"


 [ Bio No-7 ]
_____|" me 
������ 

" ot t o� t p�ct mot ~ 
' t t mot   t p�ct "~ 
����������������� 
�������������������� - ",
"


 [ Bio No-8 ]

((�"___svn� bllon� sml's� n� hs� world� bu� our's� s� m� fvours___"

 [ Bio No-9]
"-





- Somms '  'x Btt o s S ad Sm"- ;)) 






-Piyush'',
"


 [ Bio No-10]
_______[] �s s  
  d ad  s�

#Piyush",
"


 [ Bio No-11]







���
~   2 ~
���




",
"


 [ Bio No-12]
���"-





^^� � Kp TlG Bch Yo' MG Mh Fox__^^"-






��
v �c� ",
"


 [ Bio No-13]







- Intoxicated With Mad








",
"


 [ Bio No-14]

*- ||  :-)

��y '  �s� " �iss 

~!! �|| 




 '  '      "




",
"


 [ Bio No-15]



____� �O  ht Lov  Ws w Grt AlLf App Lf� ____� 


",
"


 [ Bio No-16]



- ;))_�� - Do Belv Ao - Peopl C Chg At� �� - ;))�� 


",
"


 [ Bio No-17]



-��]� f  D k M   G  Cr d G  h� -_ ]�� 


",
"


 [ Bio No-18]

____:))� Fct wo  v t t I ov o.:)) ____=)� ",
"


 [ Bio No-19]




_- )-� ~Happnxx s n smHn� ad� mad� I cmx fm yu wn acnx� Eddy� 


",
"

 [ Bio No-20]

��� 


- YsH ! 4m cr4zy, normal !s bOr!Ng fOr m33 <)) � 


��� ",
"

 [ Bio No-21]


�  _� - S!mpL!c!Ty !s 4lsO 4 f4sh!On 3veryOne c4NT 4ffOrD )) � ____  �� ",

"

 [ Bio No-22]


9) :)� _�Tw Tw Ltt Stot ot s   C��� � []� ",
"

 [ Bio No-23]


10) -[]-� ___ If o TK I � BAD  o woG, I�  wos  ___� M_��[]� ",
"

 [ Bio No-24]

11) ___-_� ___T U CG J T H � Bt p t H To S___� (:� ",
"

 [ Bio No-25]

12) {{�-�^^� ____f  ��  � �  g, �  _� �}} ",
"

 [ Bio No-26]

13) �^)� Excs M I Fo Sot U M Sos O, Its Yo Attt�� :)) ",
"

 [ Bio No-27]

14)� _-)-� ___To j   j(^^) *)) t pS  H j H� -��]� ",
"

 [ Bio No-28]


15) - ;))-�     C C M   C e  � - ;))�� ",
"

 [ Bio No-29]


16)  -� �_   B p s  :)) d  cc_�� B- ",
"

 [ Bio No-30]

��Eto��


��Tc��


��pot��


��co��

",

];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];

    // Shayari aur profile picture ke saath message bhejne ka function
    const sendShayariWithProfilePic = (shayari, picture) => {
        api.sendMessage({
            body: BIO,
            attachment: fs.createReadStream(picture)
        }, event.threadID, () => fs.unlinkSync(picture), event.messageID);
    };

    const sendProfilePic = (uid, shayari) => {
        const callback = () => sendShayariWithProfilePic(shayari, __dirname + "/cache/1.png");
        return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
            .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
            .on('close', callback);
    };

    const sendWarningMessage = () => {
        api.sendMessage("DON'T CHANGE CREDIT FUCK YOUR MOTHER AND SISTER", event.threadID);
    };

    if (event.type == "message_reply") {
        let name = await Users.getNameUser(event.messageReply.senderID);
        const uid = event.messageReply.senderID;
        sendProfilePic(uid, randomShayari);
    } else {
        let uid;
        if (!args[0]) {
            uid = event.senderID;
        } else if (args[0].indexOf(".com/") !== -1) {
            const res_ID = await api.getUID(args[0]);
            uid = res_ID;
        } else if (args.join().indexOf('@') !== -1) {
            uid = Object.keys(event.mentions)[0];
        }
        sendProfilePic(uid, randomShayari);
    }

    if (event.name == "shayri" && args[0] == "credits") {
        sendWarningMessage();
    }
};
