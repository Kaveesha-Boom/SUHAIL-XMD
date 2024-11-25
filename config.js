const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_10_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFhIRy8wU2orRi9KcTI4RGFWZEtPcU5sTHViNDJoZERpSDBtU1FBTVJKZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnFsVEtPbkdTRUd1WkhfN2pDUXp1Z1wiLFxuICBcInBob25lSWRcIjogXCI3MWEwOTI2Yy0wMTQ2LTRlY2EtYWJmNC1jOWMxN2U2YmU0MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNjAsXG4gICAgICA3NCxcbiAgICAgIDE0MSxcbiAgICAgIDE2MixcbiAgICAgIDIzNSxcbiAgICAgIDIyNCxcbiAgICAgIDkzLFxuICAgICAgMjU0LFxuICAgICAgMTY5LFxuICAgICAgMzcsXG4gICAgICAyMDAsXG4gICAgICA0NSxcbiAgICAgIDQxLFxuICAgICAgMTU1LFxuICAgICAgMjI3LFxuICAgICAgMTQ3LFxuICAgICAgNTksXG4gICAgICAzMyxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA2LFxuICAgICAgMTk2LFxuICAgICAgMTMsXG4gICAgICAxNCxcbiAgICAgIDg2LFxuICAgICAgMjA3LFxuICAgICAgOTAsXG4gICAgICA2MyxcbiAgICAgIDQ3LFxuICAgICAgODQsXG4gICAgICAxOSxcbiAgICAgIDIwMixcbiAgICAgIDE4NixcbiAgICAgIDEsXG4gICAgICA4NSxcbiAgICAgIDI0OSxcbiAgICAgIDExOCxcbiAgICAgIDIyNixcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xMnE4c0NFTStOa0xvR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidTNvN1V5elkxV2dIQ0NNWkh3RGRORTR2NHVVSUZWS1c2R1lPektwSUFYMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvblhQbW5oWlNXeGxsaVBmZVdZc2xDK01MUkg4VVR3VElGcDhsamRjeDFhZGhqZXY5SGRvYkdNK3RQQlkxQ01OS2hBUmRiMGZMUUpvM0tHcWNDcFBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1V291VW9kRmVCdWVTTThJL0srT3poUm41UUl5eUtSeWNrdU1aMjM0QXlBZFphc3FkVzI5TDlTRHhzVzFMV2VxRDZCQUhHVlhNUXVpK1dqYzRQQStBdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI3ODQ5NDIzOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQEtBdml5YVNHOTE0OFwiLFxuICAgIFwibGlkXCI6IFwiMjA1NDQxNjQwNDM1NzYwOjUyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Mjc4NDk0MjM6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNTExNDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmRtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKZGsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzbWRLcFlmZ3BhWmFVbitwekRVdWU2UWlaWC9NalNjNW1jWkNoRVFHRnBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NDg2ODgyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNDMyMDQ5OTI3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmRsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnJkREZkUVZXYzZzTzRTUnU4a2Z2U0hvaHRtSHE5b0NMUmlta29ldldacz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTQ4Njg4MjYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjQ2NzE4Mjg2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpkbS5qc29uIjogIntcImtleURhdGFcIjpcInlyc2twMk4vYUZGRG93cTM5cEZJTTc5OGFPVk5xcFRZcEhMano4bVNnc2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk0ODY4ODI2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjUwMzQzODE4OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpkbi5qc29uIjogIntcImtleURhdGFcIjpcInlVS2QzMDMwZVRNaGh4WDY3enAyVTVyeXo4amZxNS94L2EvUDFUUzVvZHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk0ODY4ODI2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKZG8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEUUtCOU1odUlGTHFZM084WERKcVlJeDkxbnQzUE9wSWY0aEN2eWczbUlFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NDg2ODgyNixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNTExMzUzNzQ0XCJ9Igp9";  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
