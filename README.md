# Redis ve Node.js ile Çalışma Rehberi

Bu rehber, Node.js uygulamalarında Redis ile nasıl çalışılacağını anlatmaktadır. Redis, bellek içi bir veri yapısı deposudur ve genellikle hızlı veri erişimi için kullanılır. Node.js, Redis ile bağlantı kurmak için çeşitli kitaplıklar sunar.

## İçerik

1. [Ön Koşullar](#ön-koşullar)
2. [Redis Kurulumu](#redis-kurulumu)
3. [Node.js Projesi Kurulumu](#nodejs-projesi-kurulumu)
4. [Nodemon ve app.js start(#nodemon-app.js-start)
   

## 1. Ön Koşullar

- Temel Node.js bilgisi.
- Redis kurulumu hakkında temel bilgi.
- Terminal veya komut satırı kullanımı konusunda deneyim.

## 2. Redis Kurulumu

- [Resmi Redis Belgeleri](https://redis.io/documentation) üzerinden işletim sisteminize uygun kurulum talimatlarını izleyin.
- Redis'in yüklendiğinden ve çalıştığından emin olmak için terminalde aşağıdaki komutu çalıştırın:

  ```bash
  redis-server --version
  sudo apt install redis-server
  systemctl status redis-server
  redis-cli ping
## 3. Nodejs Projesi Kurulumu

- Node js projesinin kurulumu için aşağıdaki kodları sırası ile çalıştırın:

  ```bash
   npm run start  
   mkdir my-node-project
   cd my-node-project
   code
   npm init -y
   npm install redis
  

## 4. Nodemon ile start etme
  
	 npm install --save-dev nodemon
    {
       "scripts": {
         "start": "nodemon index.js"
       }
    }
 
