let handler = async m => m.reply(`
            .✵.𝗚𝗥𝗨𝗣 𝐅𝐒𝐏𝐒.✵.

            https://chat.whatsapp.com/IIpo1Rq4oXH7MbkPYTWX4E
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler