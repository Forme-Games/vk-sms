const { VK, keyboard } = require('vk-io');
const vk = new VK();
const rq = require("prequest");
const { api } = vk;
const fs = require("fs");
var besedi_arr2 = fs.readFileSync('chat.txt').toString().split("\n");

const sm4omg = require("./vk-sms");

vk.setOptions({ token: '57749068a475af3eab63fb300ef9a3efa329218d5521e47de6d29eec5f7b1dad2358ebf9f6b26ee2729dd'}); // Токен стр вк
const { updates, snippets } = vk;

updates.startPolling();
console.log(`Started`)

setInterval(() => {
vk.api.call("messages.joinChatByInviteLink", {link: (besedi_arr2[sm4omg.besedi_i2])})
sm4omg.besedi_i2++;
 console.log('+ 1 sms ');
}, 5000); 
