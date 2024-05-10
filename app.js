const redis = require("redis");
const client = redis.createClient({});

client.on('connect', () => console.log('Redis Client Connected'));
client.on('error', (err) => console.log('Redis Client Connection Error', err))



// set işlemi
client.set("user_name", "burak", (error, message) => {
    if (error) {
        console.error(error);
    } else {
        console.log(message);
       
    }
});
// get
 client.get("user_name", (getError, getMessage) => {
    if (getError) {
        console.error(getError);
    } else {
        console.log(getMessage);
        // istemciyi kapat
        // client.quit(); // veya client.end() kullanabilirsiniz
    }
});
// exists
client.exists("user_name", (getError, getMessage) => {
    if (getError) {
        console.error(getError);
    } else {
        console.log(getMessage);
        // istemciyi kapat
        // client.quit(); // veya client.end() kullanabilirsiniz
    }
});
// append işlemi
client.append("user_name", " brkcrg", (error, message) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Append'+message);
       
    }
});

client.on("message",(channel,message)=>{
    console.log(`${channel} isimli kanala ${message} geldi...`)
});

client.subscribe("brkcrg");
