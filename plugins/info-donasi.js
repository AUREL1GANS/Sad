import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT β*
_*Pulsa/pulse(Telkomsel):*_ 085158185567
_*Dana/ovo:*_ -
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/AUREL1GANS//', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
