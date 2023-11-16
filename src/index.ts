import { GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import Client from './core/Client';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => console.log("Ready!"));

client.login(process.env.TOKEN);