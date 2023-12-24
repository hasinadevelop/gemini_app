# GEMINI APP #

Intégration de l'**API Gemini** de google avec **node JS**.

***Comment l'installer ?***

Cloner le projet.

Entrer dans le projet cloné
```
cd gemini_app
```

Installer ****make**** pour des commandes simples.

Si vous utilisez ***docker***, lancer simplement la commande suivante pour tout installer et lancer le serveur de développement:
```
make docker.init
```
Sinon,
```
make init
```

## Autres commandes utiles: ##

Lancer le container docker
```
make docker.compose
```

Lancer le container docker en arrière plan
```
make docker.compose.d
```
Stopper le container docker
```
make docker.stop
```
Ouvre un terminal dans le container docker
```
make docker.sh
```

Lance le serveur de développement avec docker
```
make docker.npm.watch
```
Lance le serveur de développement sans docker
```
make npm.watch
```
Lance le serveur de production avec docker
```
make docker.npm.start
```
Lance le serveur de production sans docker
```
make npm.start
```