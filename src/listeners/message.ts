import { Client, Events } from 'discord.js'

const AUTHORIZED_USERS = [
    '242816688129572864',
    '139114165523447809',
]

export default (client: Client): void => {
    client.on(Events.MessageCreate, async function (message: any) {
        if (!client.user || !client.application) {
            return
        }

        if (
            message.content === 'ping' &&
            AUTHORIZED_USERS.includes(message.author.id)
        ) {
            message.channel.send('pong')
        }
    })
}
