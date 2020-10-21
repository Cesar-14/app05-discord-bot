import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMzkzOTg1NDI1NDA5.X3tJRQ.ImkIj2WkM21yJFXspMJ76uUvpvA';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message =>{
    if(message.content === 'Hola'){
        message.reply('Con quien hablas? bueno igual no me importa bye :)');
    }
});

client.on('message', message =>{
    if(message.content === 'Hola bot'){
        message.reply('caiese :)');
    }
});

client.on('message', message =>{
    if(message.content === 'hola amlo'){
        message.reply('Hola bro ke transa');
    }
});

client.on('message', message =>{
    if(message.content === 'Hola amlo'){
        message.reply('Hola bro ke transa');
    }
});

client.on('message', message =>{
    if(message.content === 'hola AMLO'){
        message.reply('Hola bro ke transa');
    }
});


client.login(TOKEN_API);