# Cats

### Start Project 

```bash
$ npm start 
```

### Project architecture

```
π¦
βββ π public
|   βββ π index.html : point de sortie du site 
|   βββ [...]
βββ π src
|   βββ π assets
|   |   βββ π images : diffΓ©rentes images ressources de chat
|   |   βββ π style : fichier css 
|   βββ π components
|   |   βββ π header : composant barre de navigation
|   |   βββ π poll : composants apparaissant sur la view poll.jsx 
|   βββ π data
|   |   βββ π cats.js : donnΓ©es test pour le site 
|   βββ π utils
|   |   βββ π routes.js : rΓ©pertoire de routes utiles pour la barre de navigation
|   βββ π views
|   |   βββ π app.jsx : vue qui contient le router 
|   |   βββ π poll.jsx : vue qui prΓ©sente le choix des deux chats
|   |   βββ π stats.jsx : vue qui prΓ©sente le classement
|   βββ index.js : point de dΓ©part du rendu de l'app
βββ package.json
βββ README.md
βββ [...]
```