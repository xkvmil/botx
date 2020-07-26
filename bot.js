var tmi = require("tmi.js")
var channel = "h2p_gucio"

var config = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: "jasperbotx",
        // get yours at oauth:xb8lq59fg1um4iqn01mqnneovux15g
        password: "oauth:xb8lq59fg1um4iqn01mqnneovux15g"
    },
    channels: [channel]
}

var client = new tmi.client(config)
client.connect();

client.on("connected", (address, port) => {
    client.say(channel, "")
})

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "TriHard") {
        client.say(channel, "TriHard")
    }
    
    if (self) return;
    if (message == "AYAYA") {
        client.say(channel, "NaM")
    }
    if (self) return;
    if (message == "pepeBASS") {
        client.say(channel, "pepeBASS")
    }
    if (self) return;
    if (message == "pepeJAM") {
        client.say(channel, "pepeJAM")
    }
    if (self) return;
    if (message == "cmonBruh") {
        client.say(channel, "cmonBruh")
    }
    if (self) return;
    if (message == "XD") {
        client.say(channel, "XD")
    }
    if (self) return;
    if (message == "Siema") {
        client.say(channel, "Siema @" + user.username)
    }
    if (self) return;
    if (message == "siema") {
        client.say(channel, "Siema @" + user.username)
    }
    if (self) return;
    if (message == "PogU") {
        client.say(channel, "PogU")
    }    
    if (self) return;
    if (message == "D:") {
        client.say(channel, "D:")
    }    

    
   



    
})