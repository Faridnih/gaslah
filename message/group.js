const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`Welcome Newmem`,}}}
let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (nino, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await nino.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await nino.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(nino.user.jid)) {
            nino.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(nino.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await nino.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `  *Hallo @${num.split('@')[0]}*
_Selamat datang di grup_
_*${mdata.subject}*_
_Jangan lupa baca deskripsi grup yaa kak_ \n\n _*Stay Healthy*_ `
	            buff = await getBuffer(pp_user)
		        nino.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},quoted : floc2})
		}
            if (anu.action == 'remove' && !mem.includes(nino.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `@${num.split('@')[0]} Keluar dari grup *${mdata.subject}* \nSelamat tinggal balik lagi titip gorengan yaa`
                buff = await getBuffer(pp_user)
                nino.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}, quoted : floc2})
            }
            if (anu.action == 'promote' && !mem.includes(nino.user.jid)) {
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                fah = `*PROMOTE - DETECTED*\n\n*Name* : @${num.split('@')[0]}\n*Time* : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n*Group* : ${mdata.subject}\n\n*Ciee Jadi Atmiin :v*`
                buff = await getBuffer(pp_user)
                nino.sendMessage(mdata.id, buff, MessageType.image, {caption: fah, contextInfo: {"mentionedJid": [num]},quoted :floc2})
              }
if (anu.action == 'demote' && !mem.includes(nino.user.jid)) {
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                hah = `*DEMOTE - DETECTED*\n\n*Name* : @${num.split('@')[0]}\n*Time* : _${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}_\n*Group* : _${mdata.subject}_\n\n*Awokwok Ter Demote :v*`
                buff = await getBuffer(pp_user)
                nino.sendMessage(mdata.id, buff, MessageType.image, {caption: hah, contextInfo: {"mentionedJid": [num]},quoted :floc2})
               }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
