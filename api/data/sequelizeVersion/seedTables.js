import { Pokemon, Team, Type, User, Role, Vote, sequelize } from "../../models/index.js";
import argon2 from 'argon2';

seedDatabase();

async function seedDatabase() {

    console.log("Pokedex seeding started");

    /* =========================
       TYPES
    ========================= */
    console.log("types seeding started");

    const steel = await Type.create({ id: 1, name: "Acier", color: "#aaaabb" });
    const fighting = await Type.create({ id: 2, name: "Combat", color: "#bb5544" });
    const dragon = await Type.create({ id: 3, name: "Dragon", color: "#7766ee" });
    const water = await Type.create({ id: 4, name: "Eau", color: "#3399ff" });
    const electric = await Type.create({ id: 5, name: "Électrik", color: "#ffbb33" });
    const fire = await Type.create({ id: 6, name: "Feu", color: "#ff4422" });
    const ice = await Type.create({ id: 7, name: "Glace", color: "#77ddff" });
    const bug = await Type.create({ id: 8, name: "Insecte", color: "#aabb22" });
    const normal = await Type.create({ id: 9, name: "Normal", color: "#bbaabb" });
    const grass = await Type.create({ id: 10, name: "Plante", color: "#77cc55" });
    const poison = await Type.create({ id: 11, name: "Poison", color: "#aa5599" });
    const psychic = await Type.create({ id: 12, name: "Psy", color: "#ff5599" });
    const rock = await Type.create({ id: 13, name: "Roche", color: "#bbaa66" });
    const ground = await Type.create({ id: 14, name: "Sol", color: "#ddbb55" });
    const ghost = await Type.create({ id: 15, name: "Spectre", color: "#6666bb" });
    const dark = await Type.create({ id: 16, name: "Ténèbres", color: "#665544" });
    const flying = await Type.create({ id: 17, name: "Vol", color: "#6699ff" });

    /* =========================
       POKEMONS 1 → 50
    ========================= */
    console.log("pokemons seeding started");

    const bulbizarre = await Pokemon.create({ id: 1, name: "Bulbizarre", hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 });
    const herbizarre = await Pokemon.create({ id: 2, name: "Herbizarre", hp: 60, attack: 62, defense: 63, special_attack: 80, special_defense: 80, speed: 60 });
    const florizarre = await Pokemon.create({ id: 3, name: "Florizarre", hp: 80, attack: 82, defense: 83, special_attack: 100, special_defense: 100, speed: 80 });
    const salameche = await Pokemon.create({ id: 4, name: "Salameche", hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 });
    const reptincel = await Pokemon.create({ id: 5, name: "Reptincel", hp: 58, attack: 64, defense: 58, special_attack: 80, special_defense: 65, speed: 80 });
    const dracaufeu = await Pokemon.create({ id: 6, name: "Dracaufeu", hp: 78, attack: 84, defense: 78, special_attack: 109, special_defense: 85, speed: 100 });
    const carapuce = await Pokemon.create({ id: 7, name: "Carapuce", hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43 });
    const carabaffe = await Pokemon.create({ id: 8, name: "Carabaffe", hp: 59, attack: 63, defense: 80, special_attack: 65, special_defense: 80, speed: 58 });
    const tortank = await Pokemon.create({ id: 9, name: "Tortank", hp: 79, attack: 83, defense: 100, special_attack: 85, special_defense: 105, speed: 78 });
    const chenipan = await Pokemon.create({ id: 10, name: "Chenipan", hp: 45, attack: 30, defense: 35, special_attack: 20, special_defense: 20, speed: 45 });
    const chrysacier = await Pokemon.create({ id: 11, name: "Chrysacier", hp: 50, attack: 20, defense: 55, special_attack: 25, special_defense: 25, speed: 30 });
    const papilusion = await Pokemon.create({ id: 12, name: "Papilusion", hp: 60, attack: 45, defense: 50, special_attack: 80, special_defense: 80, speed: 70 });
    const aspicot = await Pokemon.create({ id: 13, name: "Aspicot", hp: 40, attack: 35, defense: 30, special_attack: 20, special_defense: 20, speed: 50 });
    const coconfort = await Pokemon.create({ id: 14, name: "Coconfort", hp: 45, attack: 25, defense: 50, special_attack: 25, special_defense: 25, speed: 35 });
    const dardargnan = await Pokemon.create({ id: 15, name: "Dardargnan", hp: 65, attack: 80, defense: 40, special_attack: 45, special_defense: 80, speed: 75 });
    const roucool = await Pokemon.create({ id: 16, name: "Roucool", hp: 40, attack: 45, defense: 40, special_attack: 35, special_defense: 35, speed: 56 });
    const roucoups = await Pokemon.create({ id: 17, name: "Roucoups", hp: 63, attack: 60, defense: 55, special_attack: 50, special_defense: 50, speed: 71 });
    const roucarnage = await Pokemon.create({ id: 18, name: "Roucarnage", hp: 83, attack: 80, defense: 75, special_attack: 70, special_defense: 70, speed: 91 });
    const rattata = await Pokemon.create({ id: 19, name: "Rattata", hp: 30, attack: 56, defense: 35, special_attack: 25, special_defense: 35, speed: 72 });
    const rattatac = await Pokemon.create({ id: 20, name: "Rattatac", hp: 55, attack: 81, defense: 60, special_attack: 50, special_defense: 70, speed: 97 });
    const piafabec = await Pokemon.create({ id: 21, name: "Piafabec", hp: 40, attack: 60, defense: 30, special_attack: 31, special_defense: 31, speed: 70 });
    const rapasdepic = await Pokemon.create({ id: 22, name: "Rapasdepic", hp: 65, attack: 90, defense: 65, special_attack: 61, special_defense: 61, speed: 100 });
    const abo = await Pokemon.create({ id: 23, name: "Abo", hp: 35, attack: 60, defense: 44, special_attack: 40, special_defense: 54, speed: 55 });
    const arbok = await Pokemon.create({ id: 24, name: "Arbok", hp: 60, attack: 85, defense: 69, special_attack: 65, special_defense: 79, speed: 80 });
    const pikachu = await Pokemon.create({ id: 25, name: "Pikachu", hp: 35, attack: 55, defense: 30, special_attack: 50, special_defense: 40, speed: 90 });
    const raichu = await Pokemon.create({ id: 26, name: "Raichu", hp: 60, attack: 90, defense: 55, special_attack: 90, special_defense: 80, speed: 100 });
    const sabelette = await Pokemon.create({ id: 27, name: "Sabelette", hp: 50, attack: 75, defense: 85, special_attack: 20, special_defense: 30, speed: 40 });
    const sablaireau = await Pokemon.create({ id: 28, name: "Sablaireau", hp: 75, attack: 100, defense: 110, special_attack: 45, special_defense: 55, speed: 65 });
    const nidoranF = await Pokemon.create({ id: 29, name: "Nidoran F", hp: 55, attack: 47, defense: 52, special_attack: 40, special_defense: 40, speed: 41 });
    const nidorina = await Pokemon.create({ id: 30, name: "Nidorina", hp: 70, attack: 62, defense: 67, special_attack: 55, special_defense: 55, speed: 56 });
    const nidoqueen = await Pokemon.create({ id: 31, name: "Nidoqueen", hp: 90, attack: 82, defense: 87, special_attack: 75, special_defense: 85, speed: 76 });
    const nidoranM = await Pokemon.create({ id: 32, name: "Nidoran M", hp: 46, attack: 57, defense: 40, special_attack: 40, special_defense: 40, speed: 50 });
    const nidorino = await Pokemon.create({ id: 33, name: "Nidorino", hp: 61, attack: 72, defense: 57, special_attack: 55, special_defense: 55, speed: 65 });
    const nidoking = await Pokemon.create({ id: 34, name: "Nidoking", hp: 81, attack: 92, defense: 77, special_attack: 85, special_defense: 75, speed: 85 });
    const melofee = await Pokemon.create({ id: 35, name: "Melofee", hp: 70, attack: 45, defense: 48, special_attack: 60, special_defense: 65, speed: 35 });
    const melodelfe = await Pokemon.create({ id: 36, name: "Melodelfe", hp: 95, attack: 70, defense: 73, special_attack: 85, special_defense: 90, speed: 60 });
    const goupix = await Pokemon.create({ id: 37, name: "Goupix", hp: 38, attack: 41, defense: 40, special_attack: 50, special_defense: 65, speed: 65 });
    const feunard = await Pokemon.create({ id: 38, name: "Feunard", hp: 73, attack: 76, defense: 75, special_attack: 81, special_defense: 100, speed: 100 });
    const rondoudou = await Pokemon.create({ id: 39, name: "Rondoudou", hp: 115, attack: 45, defense: 20, special_attack: 45, special_defense: 25, speed: 20 });
    const grodoudou = await Pokemon.create({ id: 40, name: "Grodoudou", hp: 140, attack: 70, defense: 45, special_attack: 75, special_defense: 50, speed: 45 });
    const nosferapti = await Pokemon.create({ id: 41, name: "Nosferapti", hp: 40, attack: 45, defense: 35, special_attack: 30, special_defense: 40, speed: 55 });
    const nosferalto = await Pokemon.create({ id: 42, name: "Nosferalto", hp: 75, attack: 80, defense: 70, special_attack: 65, special_defense: 75, speed: 90 });
    const mystherbe = await Pokemon.create({ id: 43, name: "Mystherbe", hp: 45, attack: 50, defense: 55, special_attack: 75, special_defense: 65, speed: 30 });
    const ortide = await Pokemon.create({ id: 44, name: "Ortide", hp: 60, attack: 65, defense: 70, special_attack: 85, special_defense: 75, speed: 40 });
    const rafflesia = await Pokemon.create({ id: 45, name: "Rafflesia", hp: 75, attack: 80, defense: 85, special_attack: 100, special_defense: 90, speed: 50 });
    const paras = await Pokemon.create({ id: 46, name: "Paras", hp: 35, attack: 70, defense: 55, special_attack: 45, special_defense: 55, speed: 25 });
    const parasect = await Pokemon.create({ id: 47, name: "Parasect", hp: 60, attack: 95, defense: 80, special_attack: 60, special_defense: 80, speed: 30 });
    const mimitoss = await Pokemon.create({ id: 48, name: "Mimitoss", hp: 60, attack: 55, defense: 50, special_attack: 40, special_defense: 55, speed: 45 });
    const aeromite = await Pokemon.create({ id: 49, name: "Aeromite", hp: 70, attack: 65, defense: 60, special_attack: 90, special_defense: 75, speed: 90 });
    const taupiqueur = await Pokemon.create({ id: 50, name: "Taupiqueur", hp: 10, attack: 55, defense: 25, special_attack: 35, special_defense: 45, speed: 95 });
    /* =========================
       POKEMONS 51 → 100
    ========================= */

    const triopikeur = await Pokemon.create({ id: 51, name: "Triopikeur", hp: 35, attack: 80, defense: 50, special_attack: 50, special_defense: 70, speed: 120 });
    const miaouss = await Pokemon.create({ id: 52, name: "Miaouss", hp: 40, attack: 45, defense: 35, special_attack: 40, special_defense: 40, speed: 90 });
    const persian = await Pokemon.create({ id: 53, name: "Persian", hp: 65, attack: 70, defense: 60, special_attack: 65, special_defense: 65, speed: 115 });
    const psykokwak = await Pokemon.create({ id: 54, name: "Psykokwak", hp: 50, attack: 52, defense: 48, special_attack: 65, special_defense: 50, speed: 55 });
    const akwakwak = await Pokemon.create({ id: 55, name: "Akwakwak", hp: 80, attack: 82, defense: 78, special_attack: 95, special_defense: 80, speed: 85 });
    const ferosinge = await Pokemon.create({ id: 56, name: "Ferosinge", hp: 40, attack: 80, defense: 35, special_attack: 35, special_defense: 45, speed: 70 });
    const colossinge = await Pokemon.create({ id: 57, name: "Colossinge", hp: 65, attack: 105, defense: 60, special_attack: 60, special_defense: 70, speed: 95 });
    const caninos = await Pokemon.create({ id: 58, name: "Caninos", hp: 55, attack: 70, defense: 45, special_attack: 70, special_defense: 50, speed: 60 });
    const arcanin = await Pokemon.create({ id: 59, name: "Arcanin", hp: 90, attack: 110, defense: 80, special_attack: 100, special_defense: 80, speed: 95 });
    const ptitard = await Pokemon.create({ id: 60, name: "Ptitard", hp: 40, attack: 50, defense: 40, special_attack: 40, special_defense: 40, speed: 90 });
    const tetarte = await Pokemon.create({ id: 61, name: "Tetarte", hp: 65, attack: 65, defense: 65, special_attack: 50, special_defense: 50, speed: 90 });
    const tartard = await Pokemon.create({ id: 62, name: "Tartard", hp: 90, attack: 85, defense: 95, special_attack: 70, special_defense: 90, speed: 70 });
    const abra = await Pokemon.create({ id: 63, name: "Abra", hp: 25, attack: 20, defense: 15, special_attack: 105, special_defense: 55, speed: 90 });
    const kadabra = await Pokemon.create({ id: 64, name: "Kadabra", hp: 40, attack: 35, defense: 30, special_attack: 120, special_defense: 70, speed: 105 });
    const alakazam = await Pokemon.create({ id: 65, name: "Alakazam", hp: 55, attack: 50, defense: 45, special_attack: 135, special_defense: 85, speed: 120 });
    const machoc = await Pokemon.create({ id: 66, name: "Machoc", hp: 70, attack: 80, defense: 50, special_attack: 35, special_defense: 35, speed: 35 });
    const machopeur = await Pokemon.create({ id: 67, name: "Machopeur", hp: 80, attack: 100, defense: 70, special_attack: 50, special_defense: 60, speed: 45 });
    const mackogneur = await Pokemon.create({ id: 68, name: "Mackogneur", hp: 90, attack: 130, defense: 80, special_attack: 65, special_defense: 85, speed: 55 });
    const chetiflor = await Pokemon.create({ id: 69, name: "Chetiflor", hp: 50, attack: 75, defense: 35, special_attack: 70, special_defense: 30, speed: 40 });
    const boustiflor = await Pokemon.create({ id: 70, name: "Boustiflor", hp: 65, attack: 90, defense: 50, special_attack: 85, special_defense: 45, speed: 55 });
    const empiflor = await Pokemon.create({ id: 71, name: "Empiflor", hp: 80, attack: 105, defense: 65, special_attack: 100, special_defense: 60, speed: 70 });
    const tentacool = await Pokemon.create({ id: 72, name: "Tentacool", hp: 40, attack: 40, defense: 35, special_attack: 50, special_defense: 100, speed: 70 });
    const tentacruel = await Pokemon.create({ id: 73, name: "Tentacruel", hp: 80, attack: 70, defense: 65, special_attack: 80, special_defense: 120, speed: 100 });
    const racaillou = await Pokemon.create({ id: 74, name: "Racaillou", hp: 40, attack: 80, defense: 100, special_attack: 30, special_defense: 30, speed: 20 });
    const gravalanch = await Pokemon.create({ id: 75, name: "Gravalanch", hp: 55, attack: 95, defense: 115, special_attack: 45, special_defense: 45, speed: 35 });
    const grolem = await Pokemon.create({ id: 76, name: "Grolem", hp: 80, attack: 110, defense: 130, special_attack: 55, special_defense: 65, speed: 45 });
    const ponyta = await Pokemon.create({ id: 77, name: "Ponyta", hp: 50, attack: 85, defense: 55, special_attack: 65, special_defense: 65, speed: 90 });
    const galopa = await Pokemon.create({ id: 78, name: "Galopa", hp: 65, attack: 100, defense: 70, special_attack: 80, special_defense: 80, speed: 105 });
    const ramoloss = await Pokemon.create({ id: 79, name: "Ramoloss", hp: 90, attack: 65, defense: 65, special_attack: 40, special_defense: 40, speed: 15 });
    const flagadoss = await Pokemon.create({ id: 80, name: "Flagadoss", hp: 95, attack: 75, defense: 110, special_attack: 100, special_defense: 80, speed: 30 });
    const magneti = await Pokemon.create({ id: 81, name: "Magneti", hp: 25, attack: 35, defense: 70, special_attack: 95, special_defense: 55, speed: 45 });
    const magneton = await Pokemon.create({ id: 82, name: "Magneton", hp: 50, attack: 60, defense: 95, special_attack: 120, special_defense: 70, speed: 70 });
    const canarticho = await Pokemon.create({ id: 83, name: "Canarticho", hp: 52, attack: 65, defense: 55, special_attack: 58, special_defense: 62, speed: 60 });
    const doduo = await Pokemon.create({ id: 84, name: "Doduo", hp: 35, attack: 85, defense: 45, special_attack: 35, special_defense: 35, speed: 75 });
    const dodrio = await Pokemon.create({ id: 85, name: "Dodrio", hp: 60, attack: 110, defense: 70, special_attack: 60, special_defense: 60, speed: 100 });
    const otaria = await Pokemon.create({ id: 86, name: "Otaria", hp: 65, attack: 45, defense: 55, special_attack: 45, special_defense: 70, speed: 45 });
    const lamantine = await Pokemon.create({ id: 87, name: "Lamantine", hp: 90, attack: 70, defense: 80, special_attack: 70, special_defense: 95, speed: 70 });
    const tadmorv = await Pokemon.create({ id: 88, name: "Tadmorv", hp: 80, attack: 80, defense: 50, special_attack: 40, special_defense: 50, speed: 25 });
    const grotadmorv = await Pokemon.create({ id: 89, name: "Grotadmorv", hp: 105, attack: 105, defense: 75, special_attack: 65, special_defense: 100, speed: 50 });
    const kokiyas = await Pokemon.create({ id: 90, name: "Kokiyas", hp: 30, attack: 65, defense: 100, special_attack: 45, special_defense: 25, speed: 40 });
    const crustabri = await Pokemon.create({ id: 91, name: "Crustabri", hp: 50, attack: 95, defense: 180, special_attack: 85, special_defense: 45, speed: 70 });
    const fantominus = await Pokemon.create({ id: 92, name: "Fantominus", hp: 30, attack: 35, defense: 30, special_attack: 100, special_defense: 35, speed: 80 });
    const spectrum = await Pokemon.create({ id: 93, name: "Spectrum", hp: 45, attack: 50, defense: 45, special_attack: 115, special_defense: 55, speed: 95 });
    const ectoplasma = await Pokemon.create({ id: 94, name: "Ectoplasma", hp: 60, attack: 65, defense: 60, special_attack: 130, special_defense: 75, speed: 110 });
    const onix = await Pokemon.create({ id: 95, name: "Onix", hp: 35, attack: 45, defense: 160, special_attack: 30, special_defense: 45, speed: 70 });
    const soporifik = await Pokemon.create({ id: 96, name: "Soporifik", hp: 60, attack: 48, defense: 45, special_attack: 43, special_defense: 90, speed: 42 });
    const hypnomade = await Pokemon.create({ id: 97, name: "Hypnomade", hp: 85, attack: 73, defense: 70, special_attack: 73, special_defense: 115, speed: 67 });
    const krabby = await Pokemon.create({ id: 98, name: "Krabby", hp: 30, attack: 105, defense: 90, special_attack: 25, special_defense: 25, speed: 50 });
    const krabboss = await Pokemon.create({ id: 99, name: "Krabboss", hp: 55, attack: 130, defense: 115, special_attack: 50, special_defense: 50, speed: 75 });
    const voltorbe = await Pokemon.create({ id: 100, name: "Voltorbe", hp: 40, attack: 30, defense: 50, special_attack: 55, special_defense: 55, speed: 100 });
    const electrode = await Pokemon.create({
        id: 101,
        name: "Électrode",
        hp: 60,
        attack: 50,
        defense: 70,
        special_attack: 80,
        special_defense: 80,
        speed: 150
    });

    const noeunoeuf = await Pokemon.create({
        id: 102,
        name: "Noeunoeuf",
        hp: 60,
        attack: 40,
        defense: 80,
        special_attack: 60,
        special_defense: 45,
        speed: 40
    });

    const noadkoko = await Pokemon.create({
        id: 103,
        name: "Noadkoko",
        hp: 95,
        attack: 95,
        defense: 85,
        special_attack: 125,
        special_defense: 75,
        speed: 55
    });

    const osselait = await Pokemon.create({
        id: 104,
        name: "Osselait",
        hp: 50,
        attack: 50,
        defense: 95,
        special_attack: 40,
        special_defense: 50,
        speed: 35
    });

    const ossatueur = await Pokemon.create({
        id: 105,
        name: "Ossatueur",
        hp: 60,
        attack: 80,
        defense: 110,
        special_attack: 50,
        special_defense: 80,
        speed: 45
    });

    const kicklee = await Pokemon.create({
        id: 106,
        name: "Kicklee",
        hp: 50,
        attack: 120,
        defense: 53,
        special_attack: 35,
        special_defense: 110,
        speed: 87
    });

    const tygnon = await Pokemon.create({
        id: 107,
        name: "Tygnon",
        hp: 50,
        attack: 105,
        defense: 79,
        special_attack: 35,
        special_defense: 110,
        speed: 76
    });

    const excelangue = await Pokemon.create({
        id: 108,
        name: "Excelangue",
        hp: 90,
        attack: 55,
        defense: 75,
        special_attack: 60,
        special_defense: 75,
        speed: 30
    });

    const smogo = await Pokemon.create({
        id: 109,
        name: "Smogo",
        hp: 40,
        attack: 65,
        defense: 95,
        special_attack: 60,
        special_defense: 45,
        speed: 35
    });

    const smogogo = await Pokemon.create({
        id: 110,
        name: "Smogogo",
        hp: 65,
        attack: 90,
        defense: 120,
        special_attack: 85,
        special_defense: 70,
        speed: 60
    });

    const rhinocorne = await Pokemon.create({
        id: 111,
        name: "Rhinocorne",
        hp: 80,
        attack: 85,
        defense: 95,
        special_attack: 30,
        special_defense: 30,
        speed: 25
    });

    const rhinoferos = await Pokemon.create({
        id: 112,
        name: "Rhinoféros",
        hp: 105,
        attack: 130,
        defense: 120,
        special_attack: 45,
        special_defense: 45,
        speed: 40
    });

    const leveinard = await Pokemon.create({
        id: 113,
        name: "Leveinard",
        hp: 250,
        attack: 5,
        defense: 5,
        special_attack: 35,
        special_defense: 105,
        speed: 50
    });

    const saquedeneu = await Pokemon.create({
        id: 114,
        name: "Saquedeneu",
        hp: 65,
        attack: 55,
        defense: 115,
        special_attack: 100,
        special_defense: 40,
        speed: 60
    });

    const kangourex = await Pokemon.create({
        id: 115,
        name: "Kangourex",
        hp: 105,
        attack: 95,
        defense: 80,
        special_attack: 40,
        special_defense: 80,
        speed: 90
    });

    const hypotrempe = await Pokemon.create({
        id: 116,
        name: "Hypotrempe",
        hp: 30,
        attack: 40,
        defense: 70,
        special_attack: 70,
        special_defense: 25,
        speed: 60
    });

    const hypocéan = await Pokemon.create({
        id: 117,
        name: "Hypocéan",
        hp: 55,
        attack: 65,
        defense: 95,
        special_attack: 95,
        special_defense: 45,
        speed: 85
    });

    const poissonroi = await Pokemon.create({
        id: 118,
        name: "Poissirène",
        hp: 45,
        attack: 67,
        defense: 60,
        special_attack: 35,
        special_defense: 50,
        speed: 63
    });

    const poissoroy = await Pokemon.create({
        id: 119,
        name: "Poissoroy",
        hp: 80,
        attack: 92,
        defense: 65,
        special_attack: 65,
        special_defense: 80,
        speed: 68
    });

    const stari = await Pokemon.create({
        id: 120,
        name: "Stari",
        hp: 30,
        attack: 45,
        defense: 55,
        special_attack: 70,
        special_defense: 55,
        speed: 85
    });

    await stari.addType(water);
    const staross = await Pokemon.create({
        id: 121,
        name: "Staross",
        hp: 60,
        attack: 75,
        defense: 85,
        special_attack: 100,
        special_defense: 85,
        speed: 115
    });

    const mMime = await Pokemon.create({
        id: 122,
        name: "M. Mime",
        hp: 40,
        attack: 45,
        defense: 65,
        special_attack: 100,
        special_defense: 120,
        speed: 90
    });

    const insecateur = await Pokemon.create({
        id: 123,
        name: "Insécateur",
        hp: 70,
        attack: 110,
        defense: 80,
        special_attack: 55,
        special_defense: 80,
        speed: 105
    });

    const lippoutou = await Pokemon.create({
        id: 124,
        name: "Lippoutou",
        hp: 65,
        attack: 50,
        defense: 35,
        special_attack: 115,
        special_defense: 95,
        speed: 95
    });

    const elektek = await Pokemon.create({
        id: 125,
        name: "Élektek",
        hp: 65,
        attack: 83,
        defense: 57,
        special_attack: 95,
        special_defense: 85,
        speed: 105
    });

    const magmar = await Pokemon.create({
        id: 126,
        name: "Magmar",
        hp: 65,
        attack: 95,
        defense: 57,
        special_attack: 100,
        special_defense: 85,
        speed: 93
    });

    const scarabrute = await Pokemon.create({
        id: 127,
        name: "Scarabrute",
        hp: 65,
        attack: 125,
        defense: 100,
        special_attack: 55,
        special_defense: 70,
        speed: 85
    });

    const tauros = await Pokemon.create({
        id: 128,
        name: "Tauros",
        hp: 75,
        attack: 100,
        defense: 95,
        special_attack: 40,
        special_defense: 70,
        speed: 110
    });

    const magicarpe = await Pokemon.create({
        id: 129,
        name: "Magicarpe",
        hp: 20,
        attack: 10,
        defense: 55,
        special_attack: 15,
        special_defense: 20,
        speed: 80
    });

    const leviator = await Pokemon.create({
        id: 130,
        name: "Léviator",
        hp: 95,
        attack: 125,
        defense: 79,
        special_attack: 60,
        special_defense: 100,
        speed: 81
    });

    const lokhlass = await Pokemon.create({
        id: 131,
        name: "Lokhlass",
        hp: 130,
        attack: 85,
        defense: 80,
        special_attack: 85,
        special_defense: 95,
        speed: 60
    });

    const metamorph = await Pokemon.create({
        id: 132,
        name: "Métamorph",
        hp: 48,
        attack: 48,
        defense: 48,
        special_attack: 48,
        special_defense: 48,
        speed: 48
    });

    const evoli = await Pokemon.create({
        id: 133,
        name: "Évoli",
        hp: 55,
        attack: 55,
        defense: 50,
        special_attack: 45,
        special_defense: 65,
        speed: 55
    });

    const aquali = await Pokemon.create({
        id: 134,
        name: "Aquali",
        hp: 130,
        attack: 65,
        defense: 60,
        special_attack: 110,
        special_defense: 95,
        speed: 65
    });

    const voltali = await Pokemon.create({
        id: 135,
        name: "Voltali",
        hp: 65,
        attack: 65,
        defense: 60,
        special_attack: 110,
        special_defense: 95,
        speed: 130
    });

    const pyroli = await Pokemon.create({
        id: 136,
        name: "Pyroli",
        hp: 65,
        attack: 130,
        defense: 60,
        special_attack: 95,
        special_defense: 110,
        speed: 65
    });

    const porygon = await Pokemon.create({
        id: 137,
        name: "Porygon",
        hp: 65,
        attack: 60,
        defense: 70,
        special_attack: 85,
        special_defense: 75,
        speed: 40
    });

    const amonita = await Pokemon.create({
        id: 138,
        name: "Amonita",
        hp: 35,
        attack: 40,
        defense: 100,
        special_attack: 90,
        special_defense: 55,
        speed: 35
    });

    const amonistar = await Pokemon.create({
        id: 139,
        name: "Amonistar",
        hp: 70,
        attack: 60,
        defense: 125,
        special_attack: 115,
        special_defense: 70,
        speed: 55
    });

    const kabuto = await Pokemon.create({
        id: 140,
        name: "Kabuto",
        hp: 30,
        attack: 80,
        defense: 90,
        special_attack: 55,
        special_defense: 45,
        speed: 55
    });

    const kabutops = await Pokemon.create({
        id: 141,
        name: "Kabutops",
        hp: 60,
        attack: 115,
        defense: 105,
        special_attack: 65,
        special_defense: 70,
        speed: 80
    });

    const ptera = await Pokemon.create({
        id: 142,
        name: "Ptéra",
        hp: 80,
        attack: 105,
        defense: 65,
        special_attack: 60,
        special_defense: 75,
        speed: 130
    });

    const ronflex = await Pokemon.create({
        id: 143,
        name: "Ronflex",
        hp: 160,
        attack: 110,
        defense: 65,
        special_attack: 65,
        special_defense: 110,
        speed: 30
    });

    const artikodin = await Pokemon.create({
        id: 144,
        name: "Artikodin",
        hp: 90,
        attack: 85,
        defense: 100,
        special_attack: 95,
        special_defense: 125,
        speed: 85
    });

    const electhor = await Pokemon.create({
        id: 145,
        name: "Électhor",
        hp: 90,
        attack: 90,
        defense: 85,
        special_attack: 125,
        special_defense: 90,
        speed: 100
    });

    const sulfura = await Pokemon.create({
        id: 146,
        name: "Sulfura",
        hp: 90,
        attack: 100,
        defense: 90,
        special_attack: 125,
        special_defense: 85,
        speed: 90
    });

    const dratini = await Pokemon.create({
        id: 147,
        name: "Minidraco",
        hp: 41,
        attack: 64,
        defense: 45,
        special_attack: 50,
        special_defense: 50,
        speed: 50
    });

    const draco = await Pokemon.create({
        id: 148,
        name: "Draco",
        hp: 61,
        attack: 84,
        defense: 65,
        special_attack: 70,
        special_defense: 70,
        speed: 70
    });

    const dracolosse = await Pokemon.create({
        id: 149,
        name: "Dracolosse",
        hp: 91,
        attack: 134,
        defense: 95,
        special_attack: 100,
        special_defense: 100,
        speed: 80
    });

    const mewtwo = await Pokemon.create({
        id: 150,
        name: "Mewtwo",
        hp: 106,
        attack: 110,
        defense: 90,
        special_attack: 154,
        special_defense: 90,
        speed: 130
    });

    const mew = await Pokemon.create({
        id: 151,
        name: "Mew",
        hp: 100,
        attack: 100,
        defense: 100,
        special_attack: 100,
        special_defense: 100,
        speed: 100
    });


    await bulbizarre.addType(grass);
    await bulbizarre.addType(poison);

    await herbizarre.addType(grass);
    await herbizarre.addType(poison);

    await florizarre.addType(grass);
    await florizarre.addType(poison);

    await salameche.addType(fire);
    await reptincel.addType(fire);
    await dracaufeu.addType(fire);
    await dracaufeu.addType(flying);

    await carapuce.addType(water);
    await carabaffe.addType(water);
    await tortank.addType(water);

    await chenipan.addType(bug);
    await chrysacier.addType(bug);
    await papilusion.addType(bug);
    await papilusion.addType(flying);

    await aspicot.addType(bug);
    await coconfort.addType(bug);
    await dardargnan.addType(bug);
    await dardargnan.addType(poison);

    await roucool.addType(normal);
    await roucool.addType(flying);
    await roucoups.addType(normal);
    await roucoups.addType(flying);
    await roucarnage.addType(normal);
    await roucarnage.addType(flying);

    await rattata.addType(normal);
    await rattatac.addType(normal);

    await piafabec.addType(normal);
    await piafabec.addType(flying);
    await rapasdepic.addType(normal);
    await rapasdepic.addType(flying);

    await abo.addType(poison);
    await arbok.addType(poison);

    await pikachu.addType(electric);
    await raichu.addType(electric);

    await sabelette.addType(ground);
    await sablaireau.addType(ground);

    await nidoranF.addType(poison);
    await nidorina.addType(poison);
    await nidoqueen.addType(poison);
    await nidoranM.addType(poison);
    await nidorino.addType(poison);
    await nidoking.addType(poison);
    await nidoking.addType(ground);

    await melofee.addType(normal);
    await melodelfe.addType(normal);

    await goupix.addType(fire);
    await feunard.addType(fire);

    await rondoudou.addType(normal);
    await grodoudou.addType(normal);

    await nosferapti.addType(poison);
    await nosferalto.addType(poison);

    await mystherbe.addType(grass);
    await ortide.addType(grass);
    await rafflesia.addType(grass);

    await paras.addType(bug);
    await paras.addType(grass);
    await parasect.addType(bug);
    await parasect.addType(grass);

    await mimitoss.addType(bug);
    await mimitoss.addType(poison);
    await aeromite.addType(rock);
    await aeromite.addType(flying);

    await taupiqueur.addType(ground);
    await triopikeur.addType(ground);

    await miaouss.addType(normal);
    await persian.addType(normal);

    await psykokwak.addType(water);
    await akwakwak.addType(water);

    await ferosinge.addType(fighting);
    await colossinge.addType(fighting);

    await caninos.addType(fire);
    await arcanin.addType(fire);

    await ptitard.addType(water);
    await tetarte.addType(water);
    await tartard.addType(water);
    await tartard.addType(fighting);

    await abra.addType(psychic);
    await kadabra.addType(psychic);
    await alakazam.addType(psychic);

    await machoc.addType(fighting);
    await machopeur.addType(fighting);
    await mackogneur.addType(fighting);

    await chetiflor.addType(grass);
    await boustiflor.addType(grass);
    await empiflor.addType(grass);

    await tentacool.addType(water);
    await tentacool.addType(poison);
    await tentacruel.addType(water);
    await tentacruel.addType(poison);

    await racaillou.addType(rock);
    await racaillou.addType(ground);
    await gravalanch.addType(rock);
    await gravalanch.addType(ground);
    await grolem.addType(rock);
    await grolem.addType(ground);

    await ponyta.addType(fire);
    await galopa.addType(fire);

    await ramoloss.addType(water);
    await ramoloss.addType(psychic);
    await flagadoss.addType(water);
    await flagadoss.addType(psychic);

    await magneti.addType(electric);
    await magneti.addType(steel);

    await magneton.addType(electric);
    await magneton.addType(steel);

    await canarticho.addType(normal);
    await canarticho.addType(flying);

    await doduo.addType(normal);
    await doduo.addType(flying);

    await dodrio.addType(normal);
    await dodrio.addType(flying);

    await otaria.addType(water);
    await otaria.addType(ice);

    await lamantine.addType(water);
    await lamantine.addType(ice);

    await tadmorv.addType(poison);
    await grotadmorv.addType(poison);

    await kokiyas.addType(water);
    await crustabri.addType(water);
    await crustabri.addType(ice);

    await fantominus.addType(ghost);
    await fantominus.addType(poison);

    await spectrum.addType(ghost);
    await spectrum.addType(poison);

    await ectoplasma.addType(ghost);
    await ectoplasma.addType(poison);

    await onix.addType(rock);
    await onix.addType(ground);

    await soporifik.addType(psychic);
    await hypnomade.addType(psychic);

    await krabby.addType(water);
    await krabboss.addType(water);

    await voltorbe.addType(electric);
    await electrode.addType(electric);

    await noeunoeuf.addType(grass);
    await noeunoeuf.addType(psychic);

    await noadkoko.addType(grass);
    await noadkoko.addType(psychic);

    await osselait.addType(ground);
    await ossatueur.addType(ground);

    await kicklee.addType(fighting);
    await tygnon.addType(fighting);

    await excelangue.addType(normal);

    await smogo.addType(poison);
    await smogogo.addType(poison);

    await rhinocorne.addType(ground);
    await rhinocorne.addType(rock);

    await rhinoferos.addType(ground);
    await rhinoferos.addType(rock);

    await leveinard.addType(normal);

    await saquedeneu.addType(grass);

    await kangourex.addType(normal);

    await hypotrempe.addType(water);
    await hypocéan.addType(water);

    await poissonroi.addType(water);
    await poissoroy.addType(water);
    await staross.addType(water);
    await staross.addType(psychic);

    await mMime.addType(psychic);

    await insecateur.addType(bug);
    await insecateur.addType(flying);

    await lippoutou.addType(ice);
    await lippoutou.addType(psychic);

    await elektek.addType(electric);
    await magmar.addType(fire);

    await scarabrute.addType(bug);

    await tauros.addType(normal);

    await magicarpe.addType(water);
    await leviator.addType(water);
    await leviator.addType(flying);

    await lokhlass.addType(water);
    await lokhlass.addType(ice);

    await metamorph.addType(normal);

    await evoli.addType(normal);

    await aquali.addType(water);
    await voltali.addType(electric);
    await pyroli.addType(fire);

    await porygon.addType(normal);

    await amonita.addType(rock);
    await amonita.addType(water);

    await amonistar.addType(rock);
    await amonistar.addType(water);

    await kabuto.addType(rock);
    await kabuto.addType(water);

    await kabutops.addType(rock);
    await kabutops.addType(water);

    await ptera.addType(rock);
    await ptera.addType(flying);

    await ronflex.addType(normal);

    await artikodin.addType(ice);
    await artikodin.addType(flying);

    await electhor.addType(electric);
    await electhor.addType(flying);

    await sulfura.addType(fire);
    await sulfura.addType(flying);

    await dratini.addType(dragon);
    await draco.addType(dragon);
    await dracolosse.addType(dragon);
    await dracolosse.addType(flying);

    await mewtwo.addType(psychic);
    await mew.addType(psychic);

    console.log("team seeding started");

    const teamOne = await Team.create({
        id: 1,
        name: "Ultimate Team",
        description: "La meilleure team du monde"
    });

    const teamTwo = await Team.create({
        id: 2,
        name: "La Team de l'enfer",
        description: "Le feuuuuu"
    });

    const teamThree = await Team.create({
        id: 3,
        name: "Squad fofolle",
        description: "Pour tout gagner"
    });

    // =========================
    // Assign Pokemons to Teams
    // =========================

    // Team 1 : Ultimate Team
    await teamOne.addPokemon(florizarre); // id 3
    await teamOne.addPokemon(dracaufeu);  // id 6
    await teamOne.addPokemon(tortank);    // id 9
    await teamOne.addPokemon(papilusion); // id 12
    await teamOne.addPokemon(dardargnan); // id 15
    await teamOne.addPokemon(nidoking);   // id 34

    // Team 2 : La Team de l'enfer
    await teamTwo.addPokemon(dracaufeu);  // id 6
    await teamTwo.addPokemon(feunard);    // id 38
    await teamTwo.addPokemon(arcanin);    // id 59
    await teamTwo.addPokemon(magmar);     // id 126
    await teamTwo.addPokemon(pyroli);     // id 136
    await teamTwo.addPokemon(sulfura);    // id 146

    // Team 3 : Squad fofolle
    await teamThree.addPokemon(mew);       // id 151
    await teamThree.addPokemon(mewtwo);    // id 150
    await teamThree.addPokemon(dracolosse);// id 149
    await teamThree.addPokemon(sulfura);   // id 146
    await teamThree.addPokemon(electhor);  // id 145
    await teamThree.addPokemon(artikodin); // id 144

    console.log("roles seeding started...");
    const userRole = await Role.create({ name: "user" });
    const adminRole = await Role.create({ name: "admin" });

    console.log("users seeding started...");
    const testUser = await User.create({
        username: "testuser",
        password: await argon2.hash("Password123"),
        role_id: userRole.id,
    });

    const adminUser = await User.create({
        username: "adminuser",
        password: await argon2.hash("Adminpassword1"),
        role_id: adminRole.id,
    });

    console.log("adding team to users")
    await testUser.addTeam(teamOne);
    await testUser.addTeam(teamThree);
    await adminUser.addTeam(teamTwo);

    console.log("votes seeding started"); 
    await Vote.create({
        value: 1, 
        user_id: 2, 
        pokemon_id: 150
    }); 

    await Vote.create({
        value: 1, 
        user_id: 1, 
        pokemon_id: 150
    }); 

    console.log("Seeding is done, closing the DB")
    
    await sequelize.close();
}