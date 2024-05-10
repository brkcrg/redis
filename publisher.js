const redis = require("redis");
const client = redis.createClient({});

client.on('connect', () => console.log('Redis Client Connected'));
client.on('error', (err) => console.log('Redis Client Connection Error', err));

client.publish("brkcrg","bu app üzerinden gönerildi..",(e,number)=>{
    console.log(`meseaj ${number} kişiye gönderildi..`)
});