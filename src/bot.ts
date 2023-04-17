import { Client, GatewayIntentBits } from 'discord.js'
import ready from './listeners/ready'
import onMessage from './listeners/message'
import dotenv from 'dotenv'

console.log('PingPongBot is starting...')

if (!process.env.ENVIRONMENT || process.env.ENVIRONMENT === 'dev') {
    dotenv.config()
}

async function start() {
    const client = new Client({
        intents: [
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
        ],
    })

    ready(client)
    onMessage(client)

    client.login(process.env.DISCORD_TOKEN)
}

start()
