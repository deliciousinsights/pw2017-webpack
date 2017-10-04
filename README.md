# Support d’atelier Webpack à Paris Web 2017

## Table des matières

- [Mise en place](#mise-en-place)
- [Slides](#slides)
- [Suivre la progression](#suivre-la-progression)

## Mise en place

1. Assure-toi d’avoir un **Node récent** installé (idéalement 8+)
  - Pour Windows et Mac, hors nvm : [les installeurs officiels](https://nodejs.org/en/download/current/)
  - Pour Linux, hors nvm : [les dépôts NodeSource](https://github.com/nodesource/distributions#table-of-contents)
  - Avec nvm : `nvm install 8 && nvm use 8` (voire `nvm alias default 8`)
2. Mets à jour ton `npm` : `npm install -g npm` (si besoin en `sudo`)
3. Assure-toi d’avoir un **Git récent**, ça sera utile ici…
  - Pour Windows, hors Linux Subsystem : [l’installeur officiel](https://git-scm.com/downloads)
  - Pour Linux (Debian/Ubuntu/Mint ou Windows Linux Subsystem) : [le PPA qui va bien](https://launchpad.net/~git-core/+archive/ubuntu/ppa)
  - Pour Mac, hors Homebrew : [l’installeur officiel](https://git-scm.com/downloads)
  - Pour Mac, avec Homebrew : `brew update` puis `brew install git` (ou `brew upgrade git`)
4. Clone ce dépôt depuis un dossier de ton choix, genre ton bureau :

```bash
git clone https://github.com/deliciousinsights/pw2017-webpack
```

5. Procède à une première installation :

```bash
cd pw2017-webpack
npm install
```

Tu es prêt·e !

## Slides

Les slides de l’atelier sont [attachés au dépôt](https://deliciousinsights.github.io/pw2017-webpack/)

## Suivre la progression

### Sur GitHub.com

Même si tu ne connais pas Git, tu peux facilement consulter le détail de chaque étape, voire sous-étape.

1. Dans le sélecteur de branche en haut du listing de fichiers, [choisis `master`](https://github.com/deliciousinsights/pw2017-webpack/tree/master)
2. [Liste les commits](https://github.com/deliciousinsights/pw2017-webpack/commits/master)
3. Pour consulter le contenu d’un commit, clique simplement sur son nom ou son SHA1

### Sur ta machine

1. Ouvre un terminal dans le dossier de ce projet que tu as cloné localement
2. Utilise la commande `git log --oneline --decorate --reverse origin/master` pour lister toutes les étapes et sous-étapes par ordre « chronologique » (tant qu’à faire)
3. Pour voir le contenu d’un commit, utilise la commande `git show LE_NUMERO_OU_TAG`, par exemple `git show etape-7` pour la fin de l’étape 7 ou `git show b4503e5` pour la 2e partie de l’étape 8 (attention, ce SHA1 aura changé après l’écriture de cette documentation : regarde celui indiqué par le log !)

Astuce : tes *diffs* et *shows* seront plus jolis si tu utilises [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy#readme).
