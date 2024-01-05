import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['573224573810', 'FG', true],
  ['573224573810']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['573224573810', '573224235033']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Cristina┃ᴮᴼᵀ' 
global.author = '@Cristina' 

//--info FG
global.botName = 'Cristina'
global.fgig = 'https://www.instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaJwVyMDzgTFX04bvC3v'
global.bgp = 'https://whatsapp.com/IDAqbBsSFXK6XpBo2h0UXj'
global.bgp2 = 'https://chat.whatsapp.com/EgbYnaeST2l615yzXmOWQW'
global.bgp3 = 'https://chat.whatsapp.com/ErjE0eM4Sfq3owyaBwunAT' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
