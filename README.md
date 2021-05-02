# Cats

### Start Project 

```bash
$ npm start 
```

### Project architecture

```
📦
├── 📁 public
|   ├── 📃 index.html : point de sortie du site 
|   └── [...]
├── 📁 src
|   ├── 📁 assets
|   |   ├── 📁 images : différentes images ressources de chat
|   |   └── 📁 style : fichier css 
|   ├── 📁 components
|   |   ├── 📁 header : composant barre de navigation
|   |   └── 📁 poll : composants apparaissant sur la view poll.jsx 
|   ├── 📁 data
|   |   └── 📃 cats.js : données test pour le site 
|   ├── 📁 utils
|   |   └── 📃 routes.js : répertoire de routes utiles pour la barre de navigation
|   ├── 📁 views
|   |   ├── 📃 app.jsx : vue qui contient le router 
|   |   ├── 📃 poll.jsx : vue qui présente le choix des deux chats
|   |   └── 📃 stats.jsx : vue qui présente le classement
|   └── index.js : point de départ du rendu de l'app
├── package.json
├── README.md
└── [...]
```