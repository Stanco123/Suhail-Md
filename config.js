const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_53_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJsNmpHcE81NGhnRnFxU05lMi91enhEc1lnbVUvWUQ0WUhlRnAxbjhvYVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAzNjk5MzU2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTEzMkU2Njc1MUI3QUMyODAzN0E1RDVFM0M5ODFDNjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTQyMzg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNlTzhCTldFVFMyU2VFQWJIZHZVS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGY4M2EyYWQtY2UxYS00MDZjLThlNGEtN2MzMTVjN2EzOWE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDIwNSxcbiAgICAgIDEzOSxcbiAgICAgIDEwMyxcbiAgICAgIDIwNixcbiAgICAgIDc2LFxuICAgICAgMjA4LFxuICAgICAgMTk3LFxuICAgICAgMjYsXG4gICAgICAzOSxcbiAgICAgIDE4OCxcbiAgICAgIDE2LFxuICAgICAgMTExLFxuICAgICAgNzAsXG4gICAgICA2OCxcbiAgICAgIDI0MixcbiAgICAgIDI1NSxcbiAgICAgIDE4MCxcbiAgICAgIDI0NSxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDIxMCxcbiAgICAgIDc4LFxuICAgICAgNjEsXG4gICAgICAyMTcsXG4gICAgICAyMTksXG4gICAgICAyNDUsXG4gICAgICAyNTMsXG4gICAgICAyLFxuICAgICAgMTU1LFxuICAgICAgMTQwLFxuICAgICAgMjQwLFxuICAgICAgMCxcbiAgICAgIDE4NSxcbiAgICAgIDEwLFxuICAgICAgMTc1LFxuICAgICAgODcsXG4gICAgICAxNjUsXG4gICAgICAyMTQsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUOUZFSDNXSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzNjk5MzU2NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg5ODU2MjgyNDE5OTQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCb3NzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUtyMWEwSEVLdkF1N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvQWVtLzJBMkpIeStaeWFWRmxiRXlwSXFlQ0VOVHRNTkNCaFhxQ053YjJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIit2OUpBVXVmSjVBTW9Wdm9XaHVYeWxieE9wNmJwR3ZmT0p5cDRibWQxblY4NkZuVlY3SFU3UE01VFhhai9rUVhJdG9ndlJnSUhURkxzVlh3b2dJQ0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkR0TGxQMWV5cjZoQXE3ekozaVQ3TU9USFBpdnNhQXpzSUJGbHdWN1k2RDZsbTRCL3lFaFVFVUxwTDhVVkdEaVRrMm0xVWZKeE9RWnhucmJKOC9Ma2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzY5OTM1Njc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU0MjM4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxjWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGNaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTFovQjE3QTAveWc5eXZrbTA5dnVIQXF0c1poQzg5elZRV21jZ0F5QSt2Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc0ODE4MTc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1NDIzODUwODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
