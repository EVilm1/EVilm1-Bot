# EVilm1-Bot - SHCK BOT
<img src="https://cdn.discordapp.com/attachments/821097818378469448/824366997810053150/built-by-evilm1svg.svg" width="178" height="35"> [![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)



## Installations :
**Faire les majs :** `sudo apt update` et `sudo apt-get upgrade`

**Montrer la version de Raspbian :** `lsb_release -a`

**Montrer la version de de Node :** `node --version`

**Montrer la version de NPM :** `npm --version`

**Installer Curl :** `apt install curl -y`

**Installer NodeJs (v15) :** `curl -fsSL https://deb.nodesource.com/setup_15.x | bash -` et `apt-get install -y nodejs`

**Installer PM2 (Process Manager 2) :** `npm install pm2 -g`


## Installer les dépendances :
Dans le répertoire du bot : `npm install`


## Lancer le bot avec PM2 :
**Démarrer un process :** `pm2 start index.js --name <app_name>` (dans le répertoire)

**Stopper un process :** `pm2 stop app_name` ou `pm2 stop all`

**PM2 Monitor (terminal) :** `pm2 monit`

**Interface Web :** `pm2 plus` et [Monitor Web PM2](https://id.keymetrics.io/api/oauth/login)

( Aide PM2 : [PM2 Quick start](https://pm2.keymetrics.io/docs/usage/quick-start/) )


## Inviter le bot :

[**Discord Developer Portal**](https://discord.com/developers/applications)

[**Inviter le bot**](https://discord.com/api/oauth2/authorize?client_id=748578472863203348&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&scope=bot%20applications.commands)
