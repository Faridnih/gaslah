const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
public =false
offline = false
public = false
banChats = true
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = farid = async (farid, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
  
       const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const tanggal = moment().format("ll")
        const jam = moment().format("HH:mm:ss z")
        const botNumber = farid.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? farid.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await farid.chats.all()
		const groupMetadata = isGroup ? await farid.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? farid.user.jid : farid.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? farid.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
			let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = farid.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "List Menu","listType": "SINGLE_SELECT","sections": list}},{quoted :fgiv})
            return farid.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      farid.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           farid.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? farid.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : farid.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           farid.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return farid.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const katalog = (teks) => {
        res = farid.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_©Farz_*", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:fgc})
        farid.relayWAMessage(res)
             
        }
//===============FAKEREPLY FARID====================
const fgiv = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `🍂Pikaw-Bot🍂\nHai Kak ${pushname}`,'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}} 
const fgif = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `🍂𝑰𝒕𝒔𝑴𝒆 𝑭𝒂𝒓-𝒁🍂\n𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒆𝒄𝒖𝒕𝒆𝒅 : ${command}`,'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}} 
        const fgc = {
         key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `🍂𝑰𝒕𝒔𝑴𝒆 𝑭𝒂𝒓-𝒁🍂\n𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒆𝒄𝒖𝒕𝒆𝒅 : ${command}`, 'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}}
        const ftroli = {
         key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `🍂𝑰𝒕𝒔𝑴𝒆 𝑭𝒂𝒓-𝒁🍂\n𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒆𝒄𝒖𝒕𝒆𝒅 : ${command}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./media/Nakano.jpg'), sellerJid: '0@s.whatsapp.net'}}}
        const ftoko = { 
         key: { fromMe: false, participant: `6281241405996@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./media/wpmobile.png') }, "title": `🌹𝑰𝒕𝒔 𝑴𝒆 𝑭𝒂𝒓𝒊𝒅🌹`, "productImageCount": 9999 }, "businessOwnerJid": `6281241405996@s.whatsapp.net`}}}
        const freply = { 
         key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
//=========================FAKE REPLY======================
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       farid.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await farid.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = farid.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await farid.groupRemove(to, [i])
        } else {
           await farid.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       farid.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       farid.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: fgc})
}
      const hideTag = async function(from, text){
	       let anu = await farid.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       farid.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           farid.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:fgc})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           farid.sendMessage(to, media, type, {quoted: fgc, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       farid.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       farid.sendMessage(from, hasil, type, options).catch(e => {
	       farid.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await farid.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = farid.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await farid.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await farid.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = farid.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await farid.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = farid.contacts[from] != undefined ? farid.contacts[from].vname || farid.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Good Night 🌛'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌚'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🍂'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Good Afternoon 🌞'
}
        if(time2 < "11:45:00"){
        var ucapanWaktu = 'Good Morning 🌤️'
}
        if(time2 < "04:00:00"){
        var ucapanWaktu = 'Good Evening 🌜'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       farid.sendMessage(from,(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/27a27acdf6e4ab64bcb7f.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                farid.groupRemove(from, [sender])
            }
        }
        
        // Sewa
             _sewa.expiredCheck(farid, sewa)
             //PUBLIC
             if (!public){
if (!mek.key.fromMe && !isOwner) return
} else {
if (mek.key.fromMe && !mek.key.fromMe) return
}

        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
                         const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(farid, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                farid.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					farid.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        farid.chatRead(from, "read")
        
       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    farid.sendMessage(from, teks, text, {quoted: fgc })
}
	              switch(command){
           
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!sourcecode',buttonText:{displayText: 'SC BOT🔎'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INSTAGRAM'},type:1}],

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{})
               farid.relayWAMessage(prep)
               break     
//Button Location 
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {              	
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await farid.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
farid.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 
kma = gam1
mhan = await farid.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: buttons,
   headerType: 4
}
farid.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
                   case 'menu':
        case 'help':
             groups = farid.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = farid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              user = `${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'User'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await farid.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)              
              jas = `https://telegra.ph/file/a3362b727e4986c022f92.jpg`
              vas = `https://telegra.ph/file/6d1d96cbfba9d7c3800cc.jpg`
              gambar = await getBuffer(vas)
              menu =` 💌 _*Hi*_ , @${sender.split('@')[0]} 🍃

_*A simple whatsapp bot made with*_
_*nodejs by*_ ${ownerName},
_*click menu to see features.*_
 ──────────────────── 
  ㉺ _*INFO BOT*_ 🔎
 
𝓯⃝🪀 _*Creator*_ : ${ownerName}
𝓯⃝🥀 _*About Me*_ :
https://bit.ly/3nrgJyy
𝓯⃝🍁 _*Hit Today*_ : _*${totalhit} Hit*_
𝓯⃝🔖 _*Prefix*_ : _*「 Multi Prefix 」*_
𝓯⃝⏰ _*Time*_ : _*${jam} Wib*_
𝓯⃝🍃 _*Speed*_ : _*${latensie.toFixed(4)} Second*_
𝓯⃝💡 _*Active*_ : _*${runtime(process.uptime())}*_
`        
let gbutsan = [
   {buttonId: `${prefix}command`, buttonText: {displayText: 'LIST MENU'}, type: 1},
   {buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1},
   {buttonId: `${prefix}botstat`, buttonText: {displayText: '✓ INFO BOT'}, type: 1},
   
              
				]
				let gbuttonan = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `© Pikaw-Bot                      `,
					buttons: gbutsan,
					headerType: 6
				}
				await farid.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 1e7,
						isForwarded: true
					}, quoted: mek
				})
			break

case 'allmenu':
case 'menu2':
fas = `https://telegra.ph/file/050141ddec44007623011.jpg`
gas = `https://telegra.ph/file/935830c945f7550ffbd31.jpg`

gambar = await getBuffer(gas)
              
menu = ` 💌 _*Hi*_ , @${sender.split('@')[0]} 🍃

_*A simple whatsapp bot made with*_
_*nodejs by*_ ${ownerName},
_*click read more to see features.*_

${readmore}
*l*.🌹「 S T I C K E R  M E N U 」🌹
───────────────────
  ❦ ${prefix}dadu
  ❦ ${prefix}doge
  ❦ ${prefix}toimg
  ❦ ${prefix}patrick
  ❦ ${prefix}garwgura
  ❦ ${prefix}ttg *teks*
  ❦ ${prefix}attp *teks*
  ❦ ${prefix}stickeranime
  ❦ ${prefix}semoji *emoji*
  ❦ ${prefix}sticker *reply foto/video*
  ❦ ${prefix}smeme *teks|teks*
  ❦ ${prefix}swm *pack|author*
  ❦ ${prefix}take *pack|author* 
  ❦ ${prefix}tovideo *reply sgif*

*ll*.🍁「 D O W N L O A D E R 」🍁
───────────────────
  ❦ ${prefix}fb 
  ❦ ${prefix}igdl 
  ❦ ${prefix}igdl2 
  ❦ ${prefix}twitter 
  ❦ ${prefix}tiktok 
  ❦ ${prefix}play 
  ❦ ${prefix}ythd 
  ❦ ${prefix}ytmp3 
  ❦ ${prefix}ytmp4 
  ❦ ${prefix}soundcloud 
  ❦ ${prefix}tiktoknowm 
  ❦ ${prefix}tiktokaudio
  ❦ ${prefix}mediafire 
  ❦ ${prefix}nhentaipdf *code*

*lll*. ☘️「 F U N  M E N U 」☘️
───────────────────
  ❦ ${prefix}slot
  ❦ ${prefix}suit *batu/kertas/gunting*
  ❦ ${prefix}gelud @tag
  ❦ ${prefix}tictactoe @tag 
  ❦ ${prefix}mining
  ❦ ${prefix}togel
  ❦ ${prefix}fitnah
  ❦ ${prefix}cekbapak
  ❦ ${prefix}cekwatak
  ❦ ${prefix}cekmati [nama]
  ❦ ${prefix}wangy [nama]
  ❦ ${prefix}citacita
  ❦ ${prefix}toxic
  ❦ ${prefix}truth
  ❦ ${prefix}dare
  ❦ ${prefix}apakah
  ❦ ${prefix}bisakah
  ❦ ${prefix}kapankah
  ❦ ${prefix}rate
  ❦ ${prefix}jadian
  ❦ ${prefix}cantik
  ❦ ${prefix}ganteng
  ❦ ${prefix}beban
  ❦ ${prefix}babi
  ❦ ${prefix}cekganteng
  ❦ ${prefix}cekcantik

*lV*.🍁「 G R O U P  M E N U 」🍁
───────────────────
  ❦ ${prefix}groupsetting
  ❦ ${prefix}listadmin
  ❦ ${prefix}listonline
  ❦ ${prefix}linkgrup/linkgc
  ❦ ${prefix}revoke
  ❦ ${prefix}afk *alasan*
  ❦ ${prefix}ceksewa
  ❦ ${prefix}kickall
  ❦ ${prefix}infogrup
  ❦ ${prefix}promote
  ❦ ${prefix}demote
  ❦ ${prefix}tagall *teks*
  ❦ ${prefix}tagall2 *teks*
  ❦ ${prefix}infoall *teks*
  ❦ ${prefix}allwame
  ❦ ${prefix}leave
  ❦ ${prefix}wame/wa.me
  ❦ ${prefix}tagme
  ❦ ${prefix}kick *reply*
  ❦ ${prefix}add *+62xxxxxx*
  ❦ ${prefix}setgrupname
  ❦ ${prefix}setppgrup
  ❦ ${prefix}setdesc
  ❦ ${prefix}caripesan *pesannya*
  ❦ ${prefix}delete *reply chat bot*
  ❦ ${prefix}sider *reply chat bot*
  ❦ ${prefix}sticktag *reply sticker*
  ❦ ${prefix}hidetag *teks/reply teks*

*V*.🍃「 M E N U  B O S S 」🍃
───────────────────
  ❦ ${prefix}on
  ❦ ${prefix}off *alasan*
  ❦ ${prefix}bc *teks*
  ❦ ${prefix}term
  ❦ ${prefix}hide1
  ❦ ${prefix}eval
  ❦ ${prefix}clone
  ❦ ${prefix}self
  ❦ ${prefix}public
  ❦ ${prefix}reset
  ❦ ${prefix}readall
  ❦ ${prefix}clearall
  ❦ ${prefix}leaveall
  ❦ ${prefix}setprefix
  ❦ ${prefix}setreply
  ❦ ${prefix}setppbot
  ❦ ${prefix}join *link gc*
  ❦ ${prefix}shutdown
  ❦ ${prefix}getquoted
  ❦ ${prefix}cekapikey
  ❦ ${prefix}addupdate *fiturnya*
  ❦ ${prefix}exif *nama|author*
  ❦ ${prefix}setcmd *prefix+command*
  ❦ ${prefix}delcmd *reply stick*
  ❦ ${prefix}listcmd
  ❦ ${prefix}listprem
  ❦ ${prefix}listgroup
  ❦ ${prefix}sewa add/del *waktunya*
  ❦ ${prefix}premium add @tag|nomor
  ❦ ${prefix}premium del @tag|nomor

*Vl*.🌷「 O T H E R  M E N U 」🌷
───────────────────
  ❦ ${prefix}brainly *query*
  ❦ ${prefix}shopee *product*
  ❦ ${prefix}playstore *query*
  ❦ ${prefix}ssweb *query*
  ❦ ${prefix}google *query*
  ❦ ${prefix}image *query*
  ❦ ${prefix}pinterest *query*
  ❦ ${prefix}nulis *teks*
  ❦ ${prefix}iguser *ussername*
  ❦ ${prefix}igstalk *username*
  ❦ ${prefix}githubstalk *username*
  ❦ ${prefix}tiktokstalk *ussername*
  ❦ ${prefix}img2url *reply foto*
  ❦ ${prefix}ytsearch *query*

*Vll*.🌹「 I N F O  M E N U 」🌹
───────────────────
  ❦ ${prefix}update
  ❦ ${prefix}level
  ❦ ${prefix}rules
  ❦ ${prefix}grupbot
  ❦ ${prefix}profile
  ❦ ${prefix}waktu
  ❦ ${prefix}botstat
  ❦ ${prefix}sewabot
  ❦ ${prefix}listsewa
  ❦ ${prefix}owner
  ❦ ${prefix}ping
  ❦ ${prefix}runtime
  ❦ ${prefix}donasi
  ❦ ${prefix}leaderboard
  ❦ ${prefix}cekpremium
  ❦ ${prefix}listpremium
  ❦ ${prefix}sourcecode
  ❦ ${prefix}bugreport *keluhan*
`
buttons = [
					{ buttonId: `${prefix}rules`, buttonText: { displayText: 'RULES' }, type: 1 },
	                  { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }              
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `© Pikaw-Bot `,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break

             
       case 'groupmenu':
        case 'menugroup':
        if (!isGroup) return farid.sendMessage(from,(mess.only.group), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/db0db1df4f0a3542bfe64.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                farid.sendMessage(from, groupMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/db0db1df4f0a3542bfe64.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            break
             
        
        case 'ownermenu':
        case  'menuowner':
        farid.sendMessage(from, ownerMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/4ea35422d663257fcc6cd.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break
              
        
        case 'downloadmenu':
        case  'menudownload':       
        farid.sendMessage(from, downloadMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/76178323d3e776df37584.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break
              
   
        case 'othermenu':
        case  'menuother':        
        farid.sendMessage(from, otherMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0bd7f7079a8928c815c06.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break
              
        //case 'gamemenu':
        //case  'menugame':
        farid.sendMessage(from, gameMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/6860ee8bc7798c072e0d7.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break
              
        case 'stickermenu':
        case  'stikermenu':        
        farid.sendMessage(from, stickerMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/db0db1df4f0a3542bfe64.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break
              
        case 'funmenu':
        case  'menufun':
        farid.sendMessage(from, funMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/76178323d3e776df37584.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break
              
        case 'infomenu':
        case  'menuinfo':
        farid.sendMessage(from, infoMenu(prefix), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0bd7f7079a8928c815c06.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
        break

       case 'command':       
               list = []
               listmenu = [`allmenu`,`botstat`,`groupmenu`,`stickermenu`,`ownermenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`grupbot`,`sewabot`,`donasi`]
               listmenuu = [`🍃All Menu`,`🍂Info Bot`,`🌹Menu Group`,`🥀Sticker Menu`,`🍁Owner Command`,`☘️Game & Fun Menu`,`🌿Download Menu`,`🌷Info Menu`,`🌻Other Menu`,`🍁OwnerBot`,`🌱Official Group`,`🍃Sewa Bot`,`🥀Donasi Bot`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Pilihan-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu} ,`,`Pilih Menu Pikaw Bot Disini `, list)
               break

case 'owner1':
case 'creator1':
case 'far':
gambur = 'https://telegra.ph/file/752f43ab8dd86b2df353e.jpg'
gambar = await getBuffer(gambur)
menu = `
𝓯⃝🌹 *OWNER INFO*🔎
──────────────────── 
𝓯⃝🐣 *Name* : _Farid R.Fauzi_
𝓯⃝🐣 *Age* : _19 Y.O_
𝓯⃝🐣 *Status* : _Private_
𝓯⃝🐣 *Doi* : _10:v_

𝓯⃝💌 *About Me*
https://instabio.cc/Faaaarz
──────────────────── 
`
buttons = [
					{ buttonId: `${prefix}owner`, buttonText: { displayText: 'NUMBER' }, type: 1 },
	                  { buttonId: `${prefix}infoig`, buttonText: { displayText: 'INSTAGRAM' }, type: 1 }              
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `© Pikaw-Bot`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break

//farid.sendMessage(from,menu,text, {quoted: fgc, contextInfo: { mentionedJid: [sender],externalAdReply: { "title": `${ucapanWaktu} Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": `https://telegra.ph/file/846fefce79226729dfc20.jpg`, "mediaUrl": `https://youtu.be/E4_s-UlA7BEh`}}})
break

case 'botstat':
case 'stat':
case 'stats':
case 'info':
groups = farid.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = farid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await farid.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              gas = `https://telegra.ph/file/27e6c316a47f5425c23a3.jpg`
              das = `https://telegra.ph/file/dce0655fe53c6279ce14f.jpg`
              gambar = await getBuffer(das)
              
  menu =`*─── 「 _STATISTIC BOT_ 」 ────*
  `
buttons = [
					{ buttonId: `${prefix}rules`, buttonText: { displayText: 'RULES' }, type: 1 },
	                                { buttonId:`${prefix}profile`, buttonText: { displayText: 'PROFILE' }, type: 1 }
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `𝓯⃝🪀 _Creator :_ ${ownerName}
𝓯⃝🍁 _Hit Today :_ _*${totalhit} Hit*_
𝓯⃝🐣 _User :_ _*${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'User'}*_
𝓯⃝🌹 _Status_ : _*Online*_
𝓯⃝🔮 _Lib_ : _*Baileys*_
𝓯⃝🧿 _Type_ : _*NodeJs*_
𝓯⃝🔖 _Prefix_ : _*「 Multi Prefix 」*_
𝓯⃝👥 _Group Chats_ : _*${groups.length}*_
𝓯⃝👤 _Private Chats_ : _*${privat.length}*_
𝓯⃝📜 _Total Chats_ : _*${totalChat.length}*_
𝓯⃝⏰ _Time :_ _*${jam} Wib*_
𝓯⃝🍃 _Speed_ : _*${latensie.toFixed(4)} Second*_
𝓯⃝💡 _Active_ : _*${runtime(process.uptime())}*_
*───── 「 _DEVICE 📱_ 」 ────*
𝓯⃝🔋 _Baterai_ : _*${baterai}% ${charger}*_
𝓯⃝📱 _Platform_ : _*${os.platform()}*_
𝓯⃝🧿 _Ram Usage_ : _*${ram2}*_
𝓯⃝🖥️ _Hostname_ : _*${os.hostname()}*_
𝓯⃝⏳ _Uptime_ : _*${runtime(process.uptime())}*_
𝓯⃝☕ _Os Version_ : _*${farid.user.phone.os_version}*_
𝓯⃝📼 _Device Manufacturer_ : _*${farid.user.phone.device_manufacturer}*_
𝓯⃝🖲️ _Device Model_ : _*${farid.user.phone.device_model}*_
𝓯⃝📲 _Os Build Number_ : _*${farid.user.phone.os_build_number}*_



© Pikaw-Bot `,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break

//------------------< Ingfo Bot >--------------------------
case 'tes':
case 'status':
        farid.sendMessage(from, `✓ *STATUS :* ${offline ? 'OFFLINE' : 'ONLINE'}\n✓ *MODE :*${public ? " PUBLIC-MODE" : " SELF-MODE"}`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hai Kak ${pushname}👋🏻\n${ucapanWaktu}\n${time2}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted:fgc,quoted: fgif})
               break
    case 'infoig':
             farid.sendMessage(from, ` *🌹「 FOLLOW IG OWNER 」🌹* : https://www.instagram.com/faaaarr__/`, text, {quoted: fgc, contextInfo: {mentionedJid: [sender], externalAdReply: { 'title': `Hai Kak ${pushname}👋🏻\n${ucapanWaktu}\n${time2}`, thumbnailUrl: 'https://telegra.ph/file/be275a73c34a73e704e1a.jpg', sourceUrl: 'https://instagram.com/faaaarr__?utm_medium=copy_link' }}})
             break
    case 'gcbot':
    case 'grupbot':
    case 'groupbot':
             farid.sendMessage(from,(' *🌹「 GROUP OFFICIAL BOT 」🌹*\n\n➸ https://bit.ly/3CbUK2X\n\n_Ramein bwang_ 🗿 '), MessageType. text, {quoted: fgc, contextInfo: {mentionedJid: [sender], externalAdReply: { 'title': `${ucapanWaktu}\n${time2}`, thumbnailUrl: 'https://telegra.ph/file/99992a53ab0094bd9b586.jpg', sourceUrl: 'https://chat.whatsapp.com/JEO5wHIjvz95btFU0CBEWH' }}})
             break
      
    case 'runtime':
              farid.sendMessage(from,(` 「🌹 *𝐀𝐊𝐓𝐈𝐅 𝐒𝐄𝐋𝐀𝐌𝐀 :* 🌹」\n\n_*${runtime(process.uptime())}*_ `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
    case 'sourcecode': 
    case 'sc': 
    case 'src':
              farid.sendMessage(from, `*🌹 SOURCE CODE🌹* :\nhttps://github.com/Faridrfauzi/Pikawbotv2`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` PikawBot\n © 𝑭 𝑨 𝑹 𝒁 `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
    case 'ping':
    case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              farid.sendMessage(from, `「🌹 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏*🌹 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hai Kak ${pushname}👋🏻\n${ucapanWaktu}\n${time2} WIB`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break

   case 'rules':
   case 'rulesbot':
   farid.sendMessage(from, rulesBot(prefix), MessageType. text, {quoted: fgc, contextInfo: { mentionedJid: [sender],externalAdReply: { "title": `${ucapanWaktu} Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": `https://telegra.ph/file/295700dec848810d6b777.jpg`, "mediaUrl": `https://youtu.be/E4_s-UlA7BEh`}}})
             break
   case 'donate': 
   case 'donasi':
       gambur = 'https://telegra.ph/file/ca180b0a507620ad8c058.jpg'
       gambar = await getBuffer(gambur)
       menu = ` *🌹DONASINYA KAK🌹*
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│𝓯⃝🥀 *XL* :
│»» 085692949920
│𝓯⃝☕ *DANA* :
│»» 085692949920
│𝓯⃝🪀 *CHAT OWNER*
│»» https://bit.ly/3lcHlAT
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
`
buttons = [
					{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner🐣' }, type: 1 },
	                  
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `© Pikaw-Bot `                          ,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
//========RANDOM UPDATE=========================
case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									farid.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgc})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									farid.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgc})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
case 'bokep': case 'bkp': case 'randombokep':{
                   fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    textImg(bokep2.teks)
                })
                }
                break
case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
farid.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: fgc})
           break
case 'kalender':
              reply(`
🐣Day ${week} ${weton} 
🐥Date : ${date}
`)
break
case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `!infoig`,buttonText:{displayText: `Jangan Lupa Follow @faaaarr__`},type:1}]
              imageMsg = (await farid.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'© Pikaw-Bot', imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
              farid.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `!infoig`,buttonText:{displayText: `Jangan Lupa Follow @faaaarr__`},type:1}]
              imageMsg = (await farid.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'© Pikaw-Bot', imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
             setTimeout( async () => {
 farid.relayWAMessage(prep)
}, 5000)
break
case 'payment':
      list = await farid.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "MINAT? PC OWNER"
    }
  }, {quoted: fgc})
  farid.relayWAMessage(list, {waitForAck: true})
       
  
  break
case 'asupan': // shansekai                
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
//=============UPDATE OWNER MENU===============
case 'spam':
                    if (!mek.key.fromMe) return reply('FITUR INI KHUSUS OWNER BOT')
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					farid.sendMessage(from, argsi[0], MessageType.text)
				}
				break
case 'self':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!public) return farid.sendMessage(from, ('Sudah Di Dalam Mode Self'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
public = false
farid.sendMessage(from,(' ```Success Activated Self-Mode``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgif})
break
case 'public':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (public) return farid.sendMessage(from,('Sudah Di Dalam Mode Public'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
public = true
farid.sendMessage(from,(' ```Success Activated Public-Mode``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgif})
break
case 'on':
if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
offline = false
farid.sendMessage(from,('  *🌹BOT TELAH ONLINE🌹* '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            break  
case 'off':
 if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            farid.sendMessage(from,(' *🌹BOT TELAH OFFLINE🌹* '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            break      
case 'setppbot':
			    farid.updatePresence(from, Presence.composing)
					if (!isOwner) return reply('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					xdev.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await farid.downloadAndSaveMediaMessage(enmedia)
					await farid.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break  
					case 'setreply':
	case 'setfake':
	if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
     if (!q) return reply(mess.wrongFormat)
			fake = q
			farid.sendMessage(from,(`Succes Mengganti Conversation Fake : ${q}`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
			break
case 'setprefix':
              if (!isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						farid.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
case 'hide1':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'bc':
      case 'broadcast':
      if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})             
             if (args.length < 1) return reply('teks?')
             anu = await farid.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await farid.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             farid.sendMessage(_.jid, bc, image, {quoted:fgc,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break

case 'bc2':
      case 'broadcast2':
      if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            if (args.length < 1) return reply('teks?')
             anu = await farid.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await farid.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             farid.sendMessage(_.jid, bc, image, {quoted:fgc,caption: `*「 PESAN SIARAN 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	farid.sendMessage(_.jid, { contentText: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`, footerText: '© Pikaw-Bot', buttons: [{ buttonId: `p`, buttonText: { displayText: 'Siap Bwang🐣' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              
}
             reply('Suksess broadcast')
}
             break
//===============Update GROUPMENU=================
case 'wa.me':
		case 'wame':
  			farid.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *BOT WHATSAPP* 」\n\n_*Request by*_ : ${pushname}\n\n*Your link WhatsApp*: https://wa.me/${sender.split("@s.whatsapp.net")[0]}\n*Or ( / )*\nhttps://api.whatsapp.com/send?phone=${sender.split("@")[0]}`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					farid.sendMessage(from, options, text, { quoted: fgc} )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
case 'tagall2':
       if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
       if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `✎ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
case 'infoall': 
case 'tagall3':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if(!q) return farid.sendMessage(from,('Ingfonya apa?'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!isGroup) return reply(mess.only.group)
var nom = mek.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 🌹${botName}🌹 」* `+teks+`┗━ *「 🌹${botName} 🌹」* `, members_id, false )
break
                   case 'allwame':
                   if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
					if (!isGroup) return reply(mess.only.group)
                    members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` ❦ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					farid.sendMessage(from, teks, text, {detectLinks: false, quoted:fgc})
					break
case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'listgrup': 
case 'listgroup':{
	   if (!isGroup) return reply(mess.only.group)
	if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                let totalchat = await farid.chats.all()
				let i = []
				let giid = []
                let grupp = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
              for (let e of giid){
	         	let ingfo = await farid.groupMetadata(e)
	        	grupp.push(ingfo)
	        }
			    	let txt = `*List Group*\n\*Total* : *${grupp.length}*\n\n`
				    for (let i = 0; i < grupp.length; i++){
					    txt += `*Nama grup : ${grupp[i].subject}*\n*ID grup : ${grupp[i].id}*\n*Dibuat : ${moment(`${grupp[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss z')}*\n*Jumlah Peserta : ${grupp[i].participants.length}*\n\n`
			    	}
				    farid.sendMessage(from,(txt), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                  }
                    break
                
    case 'listadmin':
    case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

case 'tagme':
mentions(`@${sender.split("@")[0]}`, [sender], true)
  break
case 'revoke':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
farid.revokeInvite(from)
reply('_Success_')
break

case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return farid.sendMessage(from,(mess.only.group), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
linkgc = await farid.groupInviteCode(from)
yeh = `*🌹Group* : *${groupName}*\n*🌹Created :* *${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*\n*🌹Link Group* :\nhttps://chat.whatsapp.com/${linkgc}\n\n*Ramein Bwang🗿*`
farid.sendMessage(from, yeh, text, { quoted: fgc })
break
      case 'sticktag':
            if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await farid.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await farid.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                
            }
            ini_buffer = fs.readFileSync(file)
            farid.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'belipremium':
       case 'buypremium':
       case 'sewabot':              
         hah = 'https://telegra.ph/file/15689627e607fb1812d65.jpg'
              gop = 'https://telegra.ph/file/30c49e100582c015184b3.jpg'
              buff = await getBuffer(hah)
              teksnya = `*──── 「 PRICE LIST 」 ────*

⛾ *Tarif Premium User adalah 10K Perbulan*
⛾ *Keuntungan Premium :*
⛾ *Bebas memakai fitur premium*
⛾ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*
⛾ *Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
──────────────────── 
𝓯⃝🥀 *XL* : »» 085692949920
𝓯⃝☕ *DANA* : »» 085692949920
𝓯⃝🪀 *CHAT OWNER🪶*
»» https://bit.ly/3lcHlAT
──────────────────── 
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*`
buttons = [
					{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${teksnya}`,
					footerText: `© Pikaw-Bot`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
case 'me':
       case 'profile':       
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              thu = await farid.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = farid.user
              uptime = process.uptime()
              profile = `*•———•°• 「 USER INFO」•°•———•*
𝓯⃝🐣 *Username:* ${pushname}
𝓯⃝🥀 *Status:* ${thu.status}
𝓯⃝👤 *Premium*: ${isPremium ? 'Ya' : 'No'}
𝓯⃝🏷️ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
𝓯⃝📍 *Prefix :* Multi Prefix

 ˏˋ°•*⁀➷
-ˋˏ✄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*Your progress:*
𝓯⃝🍂 *Level*: ${Levelnye}
𝓯⃝💎 *XP*: ${Xpluu} / ${requiredXplu}
𝓯⃝⚔️ *Rank :* ${role}`
buff = await getBuffer(profil)
              buttons = [
					{ buttonId: `${prefix}1`, buttonText: { displayText: 'Thanks🐣' }, type: 1 }, 
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${profile}`,
					footerText: `© Pikaw-Bot `,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
//------------------< gamemenu >------------------- 
case 'cekbapak': // By Farid
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Farid']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					farid.sendMessage(from, cek, text, { quoted: fgc})
					break
case 'truth':       
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://telegra.ph/file/3c76003bb6d72139cc013.jpg`)
              buttons = [
					{ buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 },                           
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: truteh
					},
					contentText: `*Question Truth :*\n\n${ttrth}`,
					footerText: `Truth Or Dare?`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
             case 'dare':       
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://telegra.ph/file/3c76003bb6d72139cc013.jpg`)
              buttons = [
					{ buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 }, { buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth' }, type: 1 },                                   
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buffer
					},
					contentText: `*Challenge Dare :*\n\n${der}`,
					footerText: `Truth Or Dare?`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break

case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            farid.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break

        case 'limitgame': 
        case 'balance': 
                       const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
                        if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ??🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               farid.sendMessage(from, starGame, text, {quoted: fgc, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':        
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':        
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
                      if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              farid.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       //case 'family100':
                     if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)              
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       //case 'tebakanime':       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              farid.sendMessage(from, ini_buffer, image, { quoted: fgc, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       //case 'tebaklagu':       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              farid.sendMessage(from, ini_buffer, audio, {quoted: fgc}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       //case 'tebaktebakan':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              farid.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: fgc}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
      // case 'kuismath':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              farid.sendMessage(from, ini_buffer, image, { quoted: fgc, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':       
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              farid.sendMessage(from, ini_buffer, image, { quoted: fgc, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       //case 'siapaaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              farid.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: fmek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       //case 'tebakkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              farid.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: fgc}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       //case 'tebaklirik':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              farid.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: fgc}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      //case 'tebakjenaka':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              farid.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: fgc}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       //case 'kimiakuis':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              farid.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: fgc}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       //case 'tebakbendera':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              farid.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: fgc}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       //case 'susunkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              farid.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: fgc}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       //case 'asahotak':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              farid.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: fgc}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       //case 'caklontong':      
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://xyz-restapikey.herokuapp.com/api/kuis/caklontong?apikey=xyz`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              farid.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: fgc}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':       
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : ?? : ??') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : ??') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : ?? : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              katalog(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              katalog(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              katalog(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              katalog(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              katalog(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              katalog(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              katalog(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':       
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':       
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa':        
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium':        
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':                 
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
       
              
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (isQuotedSticker) {
              if (!q) return farid.sendMessage(from,(`Penggunaan : ${command} cmdnya dan tag stickernya`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              farid.sendMessage(from,(" *🌹「 SUCCES 」🌹* "), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else {
              farid.sendMessage(from,('tag stickenya'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
              break
       case 'delcmd':
              if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!isQuotedSticker) return farid.sendMessage(from,(`Penggunaan : ${command} tagsticker`) ,MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              farid.sendMessage(from,(" *🌹「 SUCCES 」🌹* "), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
       case 'listcmd':    
if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})   
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       case 'igdl':
       case 'instagram':       
              try {
              if (!isUrl(q)) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break 
       case 'igdl2':
       case 'instagram2':       
              try {
              if (!q) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Username : ${res.data.owner}\`\`\`
\`\`\`🌹 Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igdl3': 
       case 'instagram3':       
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':       
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':       
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: fgc, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':      
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Title : ${res[0].judul}\`\`\`
\`\`\`🌹 Ext : MP3\`\`\`
\`\`\`🌹 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: fgc}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: fgc, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':     
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Title : ${res[0].judul}\`\`\`
\`\`\`🌹 Ext : MP4\`\`\`
\`\`\`🌹 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: fgc}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: fgc, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
            if (!isPremium) return reply(mess.only.premium)
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Title : ${title}\`\`\`
\`\`\`🌹 Kualitas* : 720p\`\`\`
\`\`\`🌹 Size* : ${filesizeF}\`\`\`
\`\`\`🌹 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas : 720p\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
                      if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               farid.sendMessage(from, ss, image, {caption: vars, quoted : fgc})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':      
               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Nama : ${res[0].nama}\`\`\`
\`\`\`🌹 Ukuran : ${res[0].size}\`\`\`
\`\`\`🌹 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: fgc})
             break
       
       case 'tt':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
       case 'tiktok': 
       case 'ttdl':
       case 'tiktokdl':
       case 'tiktoknowm':       
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await farid.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
              farid.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'tt1': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
  if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':               
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await farid.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':      
              reply(mess.wait)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             farid.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fgc})
             break
      case 'fb':
      case 'facebook':      
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':      
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':      
             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             farid.sendMessage(from,(hmm), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             console.log(res)
})
             break
      case 'ssweb':      
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await farid.sendMessage(from, ini_buffer, image, { quoted: fgc})
             break
       case 'nhentaipdf':       
             if (!isPremium) return reply(mess.only.premium)
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             reply(mess.wait)
             get_result = get_result.result
             get_info = get_result.info
             teks = `\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             farid.sendMessage(from, ini_image, image, { caption: teks, quoted: fgc })
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(anu.result)
             farid.sendMessage(from, pdf, document, { quoted: fgc, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break

       //case 'hentai':
       if (!isPremium) return reply(mess.only.premium)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              farid.sendMessage(from, gambar, image, { quoted: fgc,quoted: fgc, caption: '[ √ ] 𝚂𝚞𝚌𝚌𝚎??𝚜...'})
}) 
              break
       
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':      
       if (!isPremium) return reply(mess.only.premium)
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
//CASE PLAY==========================
        case 'play3':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {    		  
			  farid.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: fgc, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
        //case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
🌹 *Judul :* ${res.all[0].title}
🌹 *ID Video :* ${res.all[0].videoId}
🌹 *Diupload Pada :* ${res.all[0].ago}
🌹 *Views :* ${res.all[0].views}
🌹 *Durasi :* ${res.all[0].timestamp}
🌹 *Channel :* ${res.all[0].author.name}
🌹 *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: fgc, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: fgc, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
🌹 *Judul :* ${res.all[0].title}
?? *ID Video :* ${res.all[0].videoId}
🌹 *Diupload Pada :* ${res.all[0].ago}
🌹 *Views :* ${res.all[0].views}
🌹 *Durasi :* ${res.all[0].timestamp}
?? *Channel :* ${res.all[0].author.name}
🌹 *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: fgc, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: fgc, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				farid.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:fgc, caption: '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...'})
					break  
					
					case 'ytdl':
					case 'play':
					
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
			//if (!isPremium) return reply(mess.only.premium)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			gas = await getBuffer('https://img.youtube.com/vi/' + res.videos[0].videoId + '/sddefault.jpg')
		   let thumbInfo = `🔎 *Data berhasil didapatkan*
🍂 *Judul :* ${res.all[0].title}
🍂 *Publish :* ${res.all[0].ago}
🍂 *Views :* ${res.all[0].views}
🍂 *Durasi :* ${res.all[0].timestamp}
🍂 *Channel :* ${res.all[0].author.name}
`
buttons = [
					{ buttonId: `${prefix}play3 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 }, { buttonId: `${prefix}play2 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 },                           
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gas
					},
					contentText: `${thumbInfo}`,
					footerText: `Audio Or Video?`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break

          //case 'lirik':          
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
         //case 'pinterest':         
              if (args.length < 1) return reply(`${prefix}Nakano farid`)
              reply(mess.wait)
              teks = args.join(' ')
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${teks}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: fgc, caption: `*Hasil Pencarian Dari : ${teks}*`})
              break
        case 'shopee':      
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`▢ Nama : ${get_data[i].name}\`\`\`
\`\`\`🌹 Harga : ${get_data[i].harga}\`\`\`
\`\`\`🌹 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`🌹 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`🌹 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`🌹 Stok : ${get_data[i].stock}\`\`\`
\`\`\`🌹 Informasi : ${get_data[i].information}\`\`\`
\`\`\`🌹 Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              farid.sendMessage(from, ini_buffer, image, { quoted: fgc, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':       
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`▢ Title : ${get_result[i].title}\`\`\`
\`\`\`🌹 Harga : ${get_result[i].price}\`\`\`
\`\`\`🌹 Rate : ${get_result[i].rating}\`\`\`
\`\`\`🌹 Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              farid.sendMessage(from, ini_buffer, image, { quoted: fgc, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':       
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `🍂 *Title :* ${i.title}
🍂 *Views :* ${i.views}
🍂 *Upload :* ${i.ago}
🍂 *Durasi :* ${i.timestamp}
🍂 *Channel :* ${i.author.name}
🍂 *Link :* ${i.url}`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: fgc, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : fgc
               owgi = await farid.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':       
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  farid.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               farid.sendMessage(from, ibb, image, { quoted: fgc, caption: caps})
})
              .catch(err => {
               throw err
})
               break

         case 'asupan': // shansekai                
               if (!isPremium) return reply(mess.only.premium)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':       
               if (args.length < 1) return farid.sendMessage(from,('Yang mau di tulis apaan?'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               farid.sendMessage(from, buff, image, {quoted: fgc, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level':       
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await farid.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              farid.sendMessage(from, buffer, image, { caption: teks, quoted: fgc})
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':       
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':      
              if (args.length == 0) return reply(`Example: ${prefix + command} farid-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Username : ${ini_result.name}\`\`\`
\`\`\`🌹 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`🌹 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`🌹 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🌹 Following : ${ini_result.following}\`\`\`
\`\`\`🌹 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`🌹 Link : ${ini_result.url}\`\`\`
`
             farid.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':      
             if (args.length == 0) return reply(`Example: ${prefix + command} farid.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🌹 Username : ${ini_result.username}\`\`\`
\`\`\`🌹 Nama : ${ini_result.fullname}\`\`\`
\`\`\`🌹 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🌹 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`🌹 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`🌹 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             farid.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':      
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`?? Username : ${get_result.username}\`\`\`
\`\`\`🌹 Nama : ${get_result.nickname}\`\`\`
\`\`\`?? Pengikut : ${get_result.followers}\`\`\`
\`\`\`🌹 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`🌹 Likes : ${get_result.likes}\`\`\`
\`\`\`🌹 Video : ${get_result.video}\`\`\`
\`\`\`?? Deskripsi : ${get_result.bio}\`\`\`
`
              farid.sendMessage(from, pp_tt, image, { quoted: fgc, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':       
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              farid.sendMessage(from, ini_buffer, image, { quoted: fgc, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':      
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':       
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':       
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':       
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':       
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              farid.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':       
              if (args.length == 0) return reply(`Example: ${prefix + command} 🥳`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
 ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=IkyAds`)
              await farid.sendMessage(from, ini_buffer, sticker, { quoted: fgc })
              break
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} farid`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              farid.sendMessage(from, buffer, sticker, { quoted: fgc })
              break
       case 'ttg':
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':       
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
		     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await farid.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                farid.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgc})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await farid.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            farid.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgc})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                farid.sendMessage(from,(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            }
            break               
       case 'take':
       case 'colong':       
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, farid, mek, from)
              break
       case 'delwm':       
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, farid, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':       
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              farid.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: fgc})
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              farid.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: fgc })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await farid.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              farid.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: fgc })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              farid.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: fgc })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              farid.sendMessage(from, buffer, image, {quoted: fgc, caption: '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
 reply(mess.wait)
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  farid.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await farid.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':        
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await farid.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               farid.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':        
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await farid.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               farid.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: fgc, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':        
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await farid.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               farid.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: fgc })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':      
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return farid.sendMessage(from,('Linknya?'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = farid.query({ json: ['action', 'invite', link],
             expect200: true })
             farid.sendMessage(from,('Berhasil Masuk Grup'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             break
      case 'eval':      
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':     
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
      
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await farid.chats.all()
             farid.setMaxListeners(25)
             for (let _ of anu) {
             farid.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = farid.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             farid.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick1':
      if (!isGroupAdmins) return farid.sendMessage,(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
      if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add1':
      if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
      if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             farid.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             farid.groupAdd(from, [entah])
}
             break
      case 'promote1':
      if (!isGroupAdmins) return farid.sendMessage,(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
      if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             farid.groupMakeAdmin(from, mems_ids)
             } else {
             farid.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             farid.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
      if (!isGroupAdmins) return farid.sendMessage,(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
      if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             farid.groupDemoteAdmin(from, mems_ids)
             } else {
             farid.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             farid.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              farid.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              farid.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await farid.downloadMediaMessage(encmedia)
              farid.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       
       case 'afk':        
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return farid.sendMessage(from,('Woe Kalo Mau Afk Jangan Nimbrung di sini'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              farid.sendMessage(from,(aluty), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':       
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await farid.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*🌹G R O U P I N F O🌹*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              farid.sendMessage(from, await getBuffer(pic), image, {quoted: fgc, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
       if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
       if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
       case 'kickall': // Anti Banned
if (!isOwner) return  reply(mess.only.owner)
  for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
       if (!mek.key.fromMe && !isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              farid.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(farid.chats.get(ido).presences), farid.user.jid]
             farid.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fgc, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
      if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':      
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await farid.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             farid.sendMessage(from,('Reply chat bot!'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
             break
//------------------< Fun >-------------------
       case 'wangy':       
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':       
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':       
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':      
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password in bio at: http://wa.me/48699542292`)
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':        
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':        
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              farid.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: fgc})
              break
       case 'apakah':       
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              farid.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: fgc })
              break
       case 'rate':
       case 'nilai':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
             mbar= await getBuffer(profil)
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              buttons = [
					{ buttonId: `${prefix}rate`, buttonText: { displayText: 'Rate' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: mbar
					},
					contentText: ` *Question :* rate\n\n*Jawaban :* ${te}%`,
					footerText: `© Pikaw-Bot`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
              
       case 'gantengcek':
       case 'cekganteng':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              gamb = await getBuffer(profil)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              buttons = [
					{ buttonId: `${prefix}cekganteng`, buttonText: { displayText: 'Cek Ganteng' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gamb
					},
					contentText: ` *Question :* Cekganteng\n\n*Jawaban :* ${teng}%`,
					footerText: `© Pikaw-Bot`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
       case 'cantikcek':
       case 'cekcantik':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              bar = await getBuffer(profil)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              buttons = [
					{ buttonId: `${prefix}cekcantik`, buttonText: { displayText: 'Cek Cantik' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: bar
					},
					contentText: ` *Question :* Cekcantik\n\n*Jawaban :* ${tik}%`,
					footerText: `© Pikaw-Bot`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
       case 'cekwatak':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              gam = await getBuffer(profil)
              var namao = pushname
              var prfx = await farid.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              buttons = [
					{ buttonId: `${prefix}cekwatak`, buttonText: { displayText: 'Cek Watak' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gam
					},
					contentText: ` *[ INTROGASI SUKSES ]*\n\n*Nama :* ${namao}\n\n*Watak :* ${wtk}\n\n*Akhlak✨ :* ${akhlak}\n\n*Sifat :* ${sft}\n\n*Hobby :* ${hby}\n\n*Tipe :* ${typo}\n\n*Kelebihan :* ${klbh}\n\n*Note*\n_ini hanya main main_`,
					footerText: `© Pikaw-Bot`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
           case 'hobby':       
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              farid.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: fgc })
              break
       case 'bisakah':       
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              farid.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: fgc })
              break
       case 'kapankah':       
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              farid.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: fgc })
              break
       
             case 'jadian':      
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':       
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':       
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':       
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':       
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':        
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await farid.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               farid.sendMessage(from, buffer, image, {caption: "[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...", quoted: fgc })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await farid.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               farid.sendMessage(from, buffer, image, { quoted: fgc, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await farid.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               farid.sendMessage(from, buffer, image, { quoted: fgc, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER        
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return farid.sendMessage(from,('Reply chat bot'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               farid.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               farid.sendMessage(from,('Reply chat bot'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
               break
             case 'media':
if (isBan) return reply(mess.ban)
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await farid.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             farid.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':       
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              farid.sendMessage(from, teks, text, {quoted: fgc})
              break
       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              farid.sendMessage('6285692949920@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
       if (!isOwner) return  reply(mess.only.owner)
              totalchat.map( async ({ jid }) => {
              await farid.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
       if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return farid.sendMessage(from,(' *🌹「 LEVELING TELAH DI AKTIFKAN  SEBELUMNYA 」🌹* '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              farid.sendMessage(from,(' ```[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜... mengaktifkan leveling di group``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              farid.sendMessage(from,(' ```[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜... menonaktifkan leveling di group```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else {
              farid.sendMessage(from,('Pilih enable atau disable!'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
              break
       case 'antilink':
       if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
       if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return farid.sendMessage(from, (` *🌹「 BOT NOT ADMIN 」🌹*`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!q) return farid.sendMessage(from,(` *Pilih enable atau disable* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return farid.sendMessage(from, (` *🌹「 ANTILINK TELAH DI AKTIFKAN  SEBELUMNYA 」🌹* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              farid.sendMessage(from,('*🌹「 ANTILINK DI AKTIFKAN 」🌹*\n\nYang Ngirim Link Group Bakal Ke Kick!'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              farid.sendMessage(from,('*🌹「 ANTILINK DI NONAKTIFKAN 」🌹*'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else {
              farid.sendMessage(from,(` *Pilih enable atau disable* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
              break
        case 'welcome':
        if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return farid.sendMessage(from,('*🌹「 ! WELCOME  ENABLE/DISABLE 」??* \nExample = !welcome enable '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if ((args[0]) === 'enable') {
               if (isWelkom) return farid.sendMessage(from, (' *🌹「 WELCOME TELAH DI AKTIFKAN  SEBELUMNYA 」🌹* '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               farid.sendMessage(from, (' ```[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜... mengaktifkan welcome di group```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               farid.sendMessage(from, (' ```[ √ ] 𝚂𝚞𝚌𝚌??𝚜𝚜... menonaktifkan welcome di group```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else {
               farid.sendMessage(from,('Enable untuk mengaktifkan, disable untuk menonaktifkan'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               }
               break
        case 'mute':
        if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return farid.sendMessage(from,('!mute enable/disable'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return farid.sendMessage(from,(` *🌹「 GROUP TELAH DI MUTE 」🌹* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               farid.sendMessage(from,(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               farid.sendMessage(from,(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else {
               farid.sendMessage(from,(`Pilih enable atau disable`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
      case 'group':
      case 'grup':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             farid.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             farid.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             farid.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             farid.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
             break
//------------------< Menunya Bang:v >-------------------
      
      case 'jadibot':
             if (!isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(farid,from,sender,reply,mek);
             break
      case 'stopjadibot':
      case 'stopbot':
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(farid,from,sender,mek);
             break
default:

if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }
                  if (budy.includes(`Farid`)) {
                  reply(`Hai kak,ketik !menu untuk menggunakan Bot~`)
                  }
                  if (budy.includes(`rid`)) {
                  reply(`Kenapa kak manggil ownerku,kangen yaaa😁~`)
                  }

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   farid.sendMessage(from, starGame, text, {quoted: fgc, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		farid.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: fgc, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  farid.sendMessage(from, ucapan, text, {quoted: fgc, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
farid.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:fgc,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
farid.sendMessage(from, ucapan1, text, {quoted: fgc, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
farid.sendMessage(from, ucapan, text, {quoted: fgc, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
farid.sendMessage(from, ucapan1, text, {quoted:fgc, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*?? Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 farid.sendMessage(from, ucapan, text, {quoted: fgc, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
farid.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/wpmobile.png')}, 'extendedTextMessage', {sendEphemeral:true, quoted:fgc, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



