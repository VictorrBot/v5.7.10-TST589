import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
if (/bass/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/reverb/.test(command)) set = '-af aeval=\'reverb=0|0.8\':\'c0<0+c1<0|c0<0+c1<1|c0<1+c1<0|c0<1+c1<1\':\'a\''
if (/distorsi/.test(command)) set = '-af asplit [a][dist];[dist]vocdistort [dist];[a][dist]amix'
if (/tremolo/.test(command)) set = '-af atremolo=s=10'
if (/chorus/.test(command)) set = '-af chorus=0.7:0.9:55:0.4:0.25:2'
if (/wahwah/.test(command)) set = '-af afir=dry=20:wet=80:w=0.3:f=2700:t=1:g=1:st=10'
if (/phaser/.test(command)) set = '-af aphaser=0.9:1.1:125:0.8:0.5:2'
if (/flanger/.test(command)) set = '-af flanger=0.5:0.5:20:0.5:0.5:2'
if (/bitcrusher/.test(command)) set = '-af asplit [a][crush];[crush]acrusher=2:1:8:0:log:0.5 [crush];[a][crush]amix=inputs=2'
if (/delay/.test(command)) set = '-af adelay=1000|1000'
if (/highpass/.test(command)) set = '-af highpass=f=2000'
if (/lowpass/.test(command)) set = '-af lowpass=f=2000'
if (/notch/.test(command)) set = '-af anotch=2000:200'
if (/overdrive/.test(command)) set = '-af asplit [a][over];[over]overdrive=f=20:hard=0.8 [over];[a][over]amix=inputs=2'
if (/pitch/.test(command)) set = '-af asetrate=48000*1.2,aresample=48000'
if (/phaserinv/.test(command)) set = '-af aphaser=in_gain=0.5:out_gain=2.0:delay=20:decay=0.5:depth=2:stereo=0'
if (/vinyl/.test(command)) set = '-af anlmdn=weighted:0.1'
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) throw `*_ERROR_*`
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else throw `*_Reply Audio/VN Dengan Perintah: ${usedPrefix + command}_*`
} catch (e) {
throw e
}}
handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai','reverb','distorsi','tremolo','chorus','wahwah','phaser','flanger','bitcrusher','delay','highpass','lowpass','notch','overdrive','pitch','phaserinv'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|reverb|distorsi|tremolo|chorus|wahwah|phaser|flanger|bitcrusher|delay|highpass|lowpass|notch|overdrive|pitch|phaserinv|vinyl)$/i
export default handler
handler.register = true
handler.limit = 1
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
