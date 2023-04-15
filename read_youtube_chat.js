const { LiveChat } = require("youtube-chat");

const liveChat = new LiveChat({ channelId: "UCSJ4gkVC6NrvII8umztf0Ow" });

liveChat.on("chat", (chatItem) => {
  console.log(chatItem.message[0].text);
});

liveChat.start()
