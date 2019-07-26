const Discord = require('discord.js')
const client = new Discord.Client()                                                                                               //basic libraries needed
const RichEmbed = Discord.RichEmbed;



client.on('ready', () => {
  console.log('I am ready!');
});


module.exports.run = async (bot, message, args) => {
	 if(message.author.id != "600014679946821632") return;
	 message.react (':popcorn:')
	 
}

module.exports.help = {
	name: "react"
}


client.on('message', message => {
 if (!message.guild) return;
   if (message.content.startsWith('!kick')) {
   
    const user = message.mentions.users.first();
  
    if (user) {
    
      const member = message.guild.member(user);
      
      if (member) {
        
        member.kick('Optional reason that will display in the audit logs').then(() => {
         
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
         
          message.reply('I was unable to kick the member');
          
          console.error(err);
        });
      } else {
       
        message.reply('That user isn\'t in this guild!');
      }
   
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
})





client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'general');

  if (!channel) return;
  
  channel.send(`Welcome to the server,${member} ; its just for testing purposes so make sure u enjoy :) `);
});


client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
   
    if (user) {
    
      const member = message.guild.member(user);
    
      if (member) {
        
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          
          message.reply('I was unable to ban the member');
         
          console.error(err);
        });
      } else {
       
        message.reply("That user isnt in this guild!");
      }
    } else {
   
      message.reply("You didn't mention the user to ban!");
    }
  }
});




client.on('message', message => {

  if (message.content === '!info') {
   
    const embed = new RichEmbed()

      .setTitle('owner:)')

      .setColor(0xFF0952)

      .setDescription('juicylynx is good person :P');

    message.channel.send(embed);
  }
});



client.on('guildMemberAdd', member => {


    var role = member.guild.roles.find('name', 'newly wed!'); // Variable to get channel ID
    member.addRole(role); // Adds the default role to members

    member.guild.channels.get('600016142236516374').send({
        embed: {
            color: 3447003,
            title: "**SERVER NAME** Welcome Bot!",
            url: "www.google.com",
            description: "Welcome *" + member + "* to the **Server name** discord server!",
            fields: [{
                name: "Information",
                value: "Some info on the server"
            }],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© NAME OF SERVER 2018 - 2019"
            }
        }
    });
});

client.on('message', (receivedMessage) => {                                                                                       //prefix (!)
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }                                                                                                                                  
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {                                                                                        //command line arguement
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark                                       
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)                                                                               //commands
    } else {
        receivedMessage.channel.send("I don't understand the command. Try `!help`, `!general` or `!multiply`")
    }
}

function helpCommand(arguments, receivedMessage) {                                                                                //help
    if (arguments.length > 0) { 
        receivedMessage.channel.send("It looks like you might need help with " + arguments)                                            
    } else { 
        receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
    }
}

function multiplyCommand(arguments, receivedMessage) {                                                                            //multiply
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }                                                                                                                                       
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

client.on('ready', () =>{                                                                                                         //activity

client.user.setActivity("juicylynx's server",{ //Put the text you want it to say as the activity here in the ' '    
type: 'WATCHING' //Sets activity. Uses "WATCHING" "STREAMING" "PLAYING                                                                    
}).catch(console.error); //Catches if an error happens

})

client.on('message', (receivedMessage) => {                                                                                       // did ja mention me
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    
    // Check if the bot's user was tagged in the message
    if (receivedMessage.content.includes(client.user.toString())) {
                                                                                                    
        receivedMessage.channel.send("hmm! u pinged me bruh .......... why?????? oh god why????? dont deny i have proof:- " +
            receivedMessage.author.toString() + " look at what u sent -_-               :" + receivedMessage.content)
    }
})

function replycommand(arguments ,recievedMessage){                                                                                // trial of reply
    if (recievedMessage.content.includes('hello'))
    {                                                                                                                                
        recievedMessage.send('heya there wassup!')
    }
    else {
	recievedMessage.channel.send("")  
}}
	
  
client.on( 'message', (receivedMessage) => {
	if (receivedMessage.author == client.user) {
	return
	}
	
	else if(receivedMessage.content.includes('heya'))
	{
		receivedMessage.channel.send (receivedMessage.author.toString() + " heya there sup")
		
	}
}

)


client.on( 'message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
    return
    }
    
    else if(receivedMessage.content.includes('hi'))
    {
        receivedMessage.channel.send (receivedMessage.author.toString() + " hello mate :)")
        
    }
}

)

client.on('message', message => {
    if (message.content === '!react-await') {
        message.react('👍').then(() => message.react('👎'));

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '👍') {
                    message.reply('you reacted with a thumbs up.');
                } else {
                    message.reply('you reacted with a thumbs down.');
                }
            })
            .catch(collected => {
                console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
            });
    }
});


bot_secret_token = ""
                                                                                                                                           //token
client.login(bot_secret_token)
