# Pokedex API

Une API backend construite avec **Node.js et Express**, permettant de gérer des pokémons, des types, des équipes et l’authentification des utilisateurs.  

Ce projet a été réalisé dans le cadre de la formation **Concepteur Développeur d’Applications** chez **O'clock**, afin de se familiariser avec le développement backend, la sécurisation d’API, la gestion de bases de données relationnelles et la documentation avec Swagger.

---

## 🎯 Objectifs du projet
- Utiliser **Node.js** et **Express** pour créer une API RESTful.
- Implémenter la gestion d’une base de données PostgreSQL avec **Sequelize**.
- Expérimenter l’authentification sécurisée via **JWT** et le hachage de mots de passe avec **argon2**.
- Documenter l’API de manière interactive avec **Swagger**.
- Tester les routes et le middleware d’authentification avec des fichiers **tests.http** et RapidAPI.

---

## 🛠️ Technologies utilisées
- **Node.js / Express** : framework backend pour créer des routes et gérer le serveur.
- **PostgreSQL** : base de données relationnelle pour stocker utilisateurs, pokémons, types et équipes.
- **Sequelize** : ORM pour interagir facilement avec la base de données.
- **JWT (JSON Web Token)** : sécurisation des routes et authentification des utilisateurs.
- **argon2** : hachage sécurisé des mots de passe.
- **Swagger** : documentation interactive de l’API pour tester les routes.
- **RapidAPI / tests.http** : tests manuels des endpoints avec authentification.

---

## 💻 Fonctionnalités principales
- **Gestion des utilisateurs** : inscription, connexion et récupération de ses équipes.
- **Gestion des pokémons** : récupération par ID, par nom, vote et comparaison entre deux pokémons.
- **Gestion des équipes** : création, modification, ajout/suppression de pokémons, suppression d’équipe.
- **Types de pokémons** : récupération des types et des pokémons associés.
- **Sécurisation des routes** : authentification obligatoire pour certaines actions avec JWT.
- **Documentation interactive** : toutes les routes documentées avec Swagger pour tester facilement l’API.

---

## 📌 Récapitulatif des routes

| Méthode | Route | Paramètres / Body | Description | Réponse |
|---------|-------|-----------------|-------------|---------|
| POST | /auth/register | Body : `{ username, password }` | Créer un nouvel utilisateur | 201 : `{ id, username }` |
| POST | /auth/login | Body : `{ username, password }` | Connexion et génération d’un token JWT | 200 : `{ token, user }` |
| GET | /auth/{id}/myTeams | Path : `id` | Récupérer les équipes d’un utilisateur | 200 : `{ id, username, teams }` |
| GET | /pokemons/getAll | - | Récupérer la liste de tous les pokémons | 200 : `[{ id, name }]` |
| GET | /pokemons/{id} | Path : `id` | Récupérer un pokémon par ID | 200 : `{ id, name, types }` |
| POST | /pokemons/addVote/{id} | Path : `id` | Ajouter un vote à un pokémon | 201 : `{ id, user_id, pokemon_id }` |
| DELETE | /pokemons/deleteVote/{id} | Path : `id` | Supprimer le dernier vote de l’utilisateur | 204 : aucun contenu |
| POST | /pokemons/getByName | Query : `pokemonName` | Récupérer un pokémon par son nom | 200 : `{ id, name }` |
| POST | /pokemons/compare | Body : `{ pokemonOne, pokemonTwo }` | Comparer deux pokémons | 200 : `{ firstPokemon, secondPokemon }` |
| GET | /types/getAll | - | Récupérer tous les types | 200 : `[{ id, name }]` |
| GET | /types/{id} | Path : `id` | Récupérer un type et ses pokémons | 200 : `{ id, name, pokemons }` |
| GET | /teamsv2/me | - | Récupérer les équipes de l’utilisateur connecté | 200 : `[{ name, description }]` |
| GET | /teamsv2/get/{id} | Path : `id` | Récupérer une équipe par ID | 200 : `{ id, name, pokemons }` |
| POST | /teamsv2/new | Body : `{ name, description }` | Créer une nouvelle équipe | 201 : `{ id, name, description }` |
| PATCH | /teamsv2/update/{id} | Path : `id` + Body `{ name?, description? }` | Mettre à jour une équipe | 200 : `{ id, name, description }` |
| PATCH | /teamsv2/{id}/newPokemon | Path : `id` + Query `pokemonId` | Ajouter un pokémon à l’équipe | 200 : `{ addedPokemon, team }` |
| DELETE | /teamsv2/{id}/removePokemon | Path : `id` + Query `pokemonId` | Supprimer un pokémon de l’équipe | 204 : aucun contenu |
| DELETE | /teamsv2/remove/{id} | Path : `id` | Supprimer une équipe | 204 : aucun contenu |

---

## 🚀 Lancer le projet

Cloner le dépôt :

```bash
git clone <url_du_projet>
```

Se placer dans le dossier API et installer les dépendances :

```bash
cd api
npm install
```

### 🔑 Variables d’environnement

- Créer la base de données PostgreSQL.
- Ajouter la variable `PG_URL` dans un fichier `.env` avec l’URL de connexion à la base de données.
- Ajouter la clé `JWT_SECRET` pour générer les tokens.

### 🔑 Authentification pour tests

- Aller dans `auth.tests` et lancer un login pour récupérer un **token JWT**.
- Copier ce token en haut des fichiers `tests.http` que vous souhaitez utiliser avec **RapidAPI** pour que le middleware d’authentification fonctionne.

Pour démarrer le serveur :

```bash
npm run dev
```

- L’API sera disponible sur `http://localhost:3000`.
- La documentation Swagger est accessible sur `http://localhost:3000/api-docs`.

