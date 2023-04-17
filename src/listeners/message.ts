import { Client, Events } from 'discord.js'

export default (client: Client): void => {
    client.on(Events.MessageCreate, async function (message: any) {
        if (!client.user || !client.application) {
            return
        }

        if (
            (message.content === 'ping' &&
                message.author.id === '242816688129572864') ||
            message.author.id === '139114165523447809'
        ) {
            message.channel.send('pong')
        }
    })
}
