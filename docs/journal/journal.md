# Journal de bord 

- Utilisation de l'IA : Seulement pour convertir mon script SQL pour Sequelize dans ce projet (*afin de tester mes capacités dans ce cas précis mais je m'en sers en général pour obtenir des explications rapides ou des rappels.*)

## Journée 12.01.26

- Rien à signaler, tout était assez fluide dans l'ensemble et en dehors de quelques petits bugs suite à des fautes de frappes (*le classique Datatypes par exemple*), tout s'est très bien passé. 

## Journée 13.01.26

- **Question sur la manière d'ajouter un pokemon dans une équipe.** Je pense chercher à utiliser req.query et jouer avec include pour ça mais il faut que je creuse... 

- Solution : après avoir passé de longues heures à explorer de très nombreuses pistes (include avec update, transaction via sequelize, l'idée de destroy et create à nouveau... j'ai finalement exposé mon problème à un llm qui m'a rappelé qu'on peut tout simplement utiliser "addToX" avec Sequelize.). Comme très souvent, j'ai cherché bien trop compliqué alors que ce n'était pas du tout nécessaire. 

## Journée 14.01.26

- **Question sur la manière de gérer les autorisations.**
- On a vu comment gérer ça avec jwt dans un projet précédent mais il y avait un front qui permettait de sauvegarder le token dans le local.storage. J'ai du mal à voir comment mettre ça en place ici alors qu'on a pas de front (*notamment pour implémenter un test afin de vérifier*).

- Idée en tête : mettre en place un middleware authentificate dans une route particulière afin de préparer le terrain à un futur front qui utilisera notre api (*en bref, faire comme si on avait un front mais du coup impossible de le tester*).

- Solution trouvée : d'après mes recherches, on peut dans Rapid API directement indiquer un token avec "@" tout en haut du code pour éviter d'avoir un front. Tous les tests fonctionnent correctement donc plus de problème avec ça. 

## Journée 15.01.26

- Pas de problèmes en particulier pour implémenter les nouvelles routes "teams" du bonus (*afin qu'on puisse seulement administrer ses propres teams.*)

- J'ai hésité à enlever la limite d'une heure pour le jwt car ça nécessite de refaire un test login dans auth et de copier le nouveau token dans team.tests à chaque fois mais j'y fini par le laisser pour montrer qu'on peut gérer la durée de vie d'un token.
 
- Concernant l'ajout d'un vote dans la bdd, j'ai préféré modifier mon mcd et mon mld (*nouvelles versions disponibles dans le dossier conception*) en m'inspirant des commentaires dans le projet oddit (révision SB06) pour être sûr de ne pas faire fausse route. 

- Erreur constatée : Une 409 à la création d'une team mais pas systématique (*après plusieurs essais dans team.tests, on a des fois un retour positif.* Il faudrait que je creuse mais je pense plutôt explorer un peu Swagger API aujourd'hui et revenir dessus plus tard.)