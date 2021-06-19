const Discord = require(`discord.js`)
const bot = new Discord.Client();

const token = 'ODU1NzY4ODE2NTM2MjU2NTMy.YM3S0Q.EdhLzdhJXLwOvleAMaNJQvXg_8I';

bot.on('ready', () =>{
  console.log('This bot is online!');
  })

bot.on('message', msg=>{
  if(msg.content === "HELLO"){
    msg.reply('HELLO FRIEND!');
    }
  })

bot.login(token);
