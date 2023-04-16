var tmi = require("tmi.js");
var TEST_STREAMER_NAME = "supertf";
// Define configuration options
var opts = {
    identity: {
        username: "justinfan498",
    },
    channels: [TEST_STREAMER_NAME],
};
// Create a client with our options
var client = new tmi.client(opts);
// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
// Connect to Twitch:
client.connect();
// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot
    // Remove whitespace from chat message
    var commandName = msg.trim();
    // If the command is known, let's execute it
    if (commandName === "!dice") {
        var num = rollDice();
        client.say(target, "You rolled a ".concat(num));
        console.log("* Executed ".concat(commandName, " command"));
    }
    else {
        console.log("* Unknown command ".concat(commandName));
    }
}
// Function called when the "dice" command is issued
function rollDice() {
    var sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log("* Connected to ".concat(addr, ":").concat(port));
}
