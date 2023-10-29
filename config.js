const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "254716637803"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '254716637803' 
global.devs = '254716637803';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic045VThJYlVEeUpQa2dyMnhYQUozenJUZThESmIzMHBXVm1XS3ZmT2kxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGpZQ1U0UERHek5Ec3A3LzRrdUw3Q0h0Mk9ETUNXVm9SdUhHRXVpcDlWWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSXZOY0gzNWE0Y1IxMnJFQjlGV25Wb0h0UnBhazBGSmNINVYxMUw3NG1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiRkloV1psK2tqY1ZVbHM3QWw0NGtHZUdCOEt5T2pnNi9uZmRXUStQSjNjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEQ1pzaGZtUXluRjhHK0NValB3UXBRbHBZYWVZRVlpTm9naGJJZHllbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhGQkI2STBSWUR2K3Q5N1BubWlKUGRlWVJzYXl4YWJRQXJETURvbnp6bkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5RVdFSFhJSWg1S25nMHVxQktyTlcvK2hHc0Jrb2JZR2ptYUxIVVdjWWViOWdNRXdIK3F0N3pDSFYxSDZoMk9QZUxrM0Q1eVg3aFdHK2V5Wi8yQjlpZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5MCwiYWR2U2VjcmV0S2V5IjoieE9aMjQrZFgzbjEzb3Jrc0JQVEIwbG4vZ0pPV1QwSmJ4bU1DVGNabnVCOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoickZtSDVnN0pTeXFkTmR0dnFyVFhFZyIsInBob25lSWQiOiJhZTY4NDhhZS1kMDkyLTQyZmQtYmFjYS01ZDRiZWRjYTkwOWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVY1WkdDUytTcU9zRGhrL0RGVG41cndPYzM0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuVXZHZnMrNWtIblJsaFp4aGoxR1EwUXFSbkk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLK2dzZEVFRU1MWGtha0dHQTg9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdVQ2RRT2N2MGZVQTlzZEE5VFhybUs1Z0JCU2lQYUdKN2ZHaVhlSGt3Z3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhRaURrWVNTbWxWL3lkNHAyL0J1TjlVTERHM2Jkb2o0MEFSZndDZS9uNWFNdy9SRysxSWFhWVZzdU1NVStOUGY0aFVWSkFQVm42djZFWHcwWFF0VUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4eEdoTytXcE0zZ0kvbEx5RDkwSFVtSHcxUGEyWXl6OEtvVkowdTl6UXFNQjlxM0twRW11ZGhjUW1kZGFuY0NlSi83NHVOMWI3c0hZNGlFTEtMYXVpQT09In0sIm1lIjp7ImlkIjoiMjU0NzE2NjM3ODAzOjMyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxNjYzNzgwMzozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbEFuVURuTDlIMUFQYkhRUFUxNjVpdVlBUVVvajJoaWUzeG9sM2g1TUlNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk2ODg1NzAwfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "savage-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '12' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'im alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
