//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +919366316018
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "923027665767"
global.dev = ["923027665767"]
global.ownername = "Arslan Salfi"
global.ytname = "Enjoying"
global.socialm = "FB : Muhammad Arslan"
global.location = "Pakistan Zindabad"

global.ownernumber = '923027665767'  //creator number
global.ownername = 'Arslan ⚉ Salfi' //owner name
global.botname = 'Salfi Bug Bot V18' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'Arslan ⚉ Salfi\n\nContact: +923027665767'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Salfi Bot Inc."

//theme link
global.link = 'https://chat.whatsapp.com/F7efPP07dqd2HZJ9xuNHzI'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @Only_possible\nTelegram: @Only_Possible\nWhatsApp: +923027665767`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @Only_Possible\nTelegram: @Only_Possible\nWhatsApp: +923027665767`,
}

global.banner = ["447893985392@s.whatsapp.net","995544996873@s.whatsapp.net","916909137213","919366316018@s.whatsapp.net","919485490229@s.whatsapp.net","919402104403@s.whatsapp.net"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})