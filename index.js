
const recoitMonMessage = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `My name is ${recoitMonMessage.myName} I'm in campus ${recoitMonMessage.campus}`,
    e: "oO",
    T: "U "
}));