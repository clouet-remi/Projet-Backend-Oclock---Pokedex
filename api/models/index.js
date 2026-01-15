import { sequelize } from "./sequelize.client.js";
import { Team } from "./team.model.js";
import { Pokemon } from "./pokemon.model.js";
import { Type } from "./type.model.js";
import { User } from "./user.model.js";
import { Role } from "./role.model.js";
import { Vote } from "./vote.model.js";


Team.belongsToMany(Pokemon, {
    as: "pokemons",
    through: "team_pokemon",
    foreignKey: "team_id"
});

Pokemon.belongsToMany(Team, {
    as: "teams",
    through: "team_pokemon",
    foreignKey: "pokemon_id"
});


Pokemon.belongsToMany(Type, {
    as: "types",
    through: "pokemon_type",
    foreignKey: "pokemon_id"
});

Type.belongsToMany(Pokemon, {
    as: "pokemons",
    through: "pokemon_type",
    foreignKey: "type_id"
});

User.belongsTo(Role, {
    as: "role",
    foreignKey: {
        name: "role_id",
        allowNull: false,
    },
});

Role.hasMany(User, {
    as: "users",
    foreignKey: "role_id",
});

Team.belongsTo(User, {
    as: "user",
    foreignKey: {
        name: "user_id"
    }
});

User.hasMany(Team, {
    as: "teams",
    foreignKey: "user_id"
});

User.hasMany(Vote, {
    as: "votes",
    foreignKey: {
        name: "user_id",
        allowNull: false
    }
});

Vote.belongsTo(User, {
    as: "voters",
    foreignKey: "user_id"
}); 

Pokemon.hasMany(Vote, {
    as: "votes",
    foreignKey: {
        name: "pokemon_id"
    }
});

Vote.belongsTo(Pokemon, {
    as: "pokemons",
    foreignKey: "pokemon_id"
});

export { Team, Pokemon, Type, User, Role, Vote, sequelize }; 