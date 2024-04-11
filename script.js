const stats = {
    acid: {
        damage: 0.875,
        size: 1.0,
        speed: 1.0,
        statusEffects: [
            { damageThreshold: 0, name: "corroding" }
        ],
        synergies: [
            {name: "frozen", multiplier: 1.2, replaceWith: null},
            {name: "petrified", multiplier: 1.2, replaceWith: null},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "bleeding", multiplier: 1.1},
            {name: "burning", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "charred", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "freezing", multiplier: 1, replaceWith: null},
            {name: "soaked", multiplier: 0.9},
            {name: "sandy", multiplier: 0.9, replaceWith: null},
        ],
    },
    ash: {
        damage: 0.85,
        size: 1.25,
        speed: 0.9,
        statusEffects: [
            {damageThreshold: 0.33, name: "petrified"}
        ],
        synergies: [
            {name: "burning", multiplier: 1.25, replaceWith: "petrified"},
            {name: "scalding", multiplier: 1.2, replaceWith: "petrified"},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "bleeding", multiplier: 1.15},
            {name: "seared", multiplier: 1.175},
            {name: "corroding", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "charred", multiplier: 1.1, replaceWith: "petrified"},
            {name: "sandy", multiplier: 1.1},
            {name: "snowy", multiplier: 1, replaceWith: null},
            {name: "soaked", multiplier: 0.95, replaceWith: null},
            {name: "freezing", multiplier: 0.9, replaceWith: null},
        ]
    },
    crystal: {
        damage: 0.975,
        size: 1.15,
        speed: 0.75,
        statusEffects: [
            {damageThreshold: 0, name: "crystallized"}
        ],
        synergies: [
            {name: "crystallized", multiplier: 1.3, replaceWith: null},
            {name: "frozen", multiplier: 1.1},
            {name: "bleeding", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
            {name: "sandy", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
        ]
    },
    earth: {
        damage: 1.0,
        size: 1.3,
        speed: 0.6,
        statusEffects: [
            {damageThreshold: 0.33, name: "bleeding"}
        ],
        synergies: [
            {name: "frozen", multiplier: 1.3, replaceWith: null}, // ???
            {name: "bleeding", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "sandy", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
        ]
    },
    explosion: {
        damage: 0.925,
        size: 1.3,
        speed: 0.8,
        statusEffects: [
            {damageThreshold: 0.0, name: "charred"}
        ],
        synergies: [
            {name: "frozen", multiplier: 1.2, replaceWith: null},
            {name: "petrified", multiplier: 1.2, replaceWith: null},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "bleeding", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "burning", multiplier: 1.1},
            {name: "scalded", multiplier: 1.1},
            {name: "freezing", multiplier: 1, replaceWith: null},
            {name: "snowy", multiplier: 1, replaceWith: null},
            {name: "sandy", multiplier: 0.9},
            {name: "soaked", multiplier: 0.9, replaceWith: null},
        ]
    },
    fire: {
        damage: 0.85,
        size: 1.1,
        speed: 1.0,
        statusEffects: [
            {damageThreshold: 0.0, name: "burning"}
        ],
        synergies: [
            {name: "charred", multiplier: 1.2, replaceWith: "petrified"},
            {name: "bleeding", multiplier: 1.2, replaceWith: null},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "melting", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
            {name: "petrified", multiplier: 1.1},
            {name: "scalded", multiplier: 1.1},
            {name: "sweating", multiplier: 1.1},
            {name: "freezing", multiplier: 1, replaceWith: null},
            {name: "frozen", multiplier: 1, replaceWith: null},
            {name: "soaked", multiplier: 0.9, replaceWith: null},
            {name: "crystallized", multiplier: 0.85},
            {name: "sandy", multiplier: 0.8},
        ]
    },
    glass: {
        damage: 0.9,
        size: 1.1,
        speed: 1.0,
        statusEffects: [
            {damageThreshold: 0.0, name: "bleeding"}
        ],
        synergies: [
            {name: "melting", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
            {name: "sandy", multiplier: 1.1},
            {name: "freezing", multiplier: 1.1},
            {name: "crystallized", multiplier: 0.2},
        ]
    },
    ice: {
        damage: 0.975,
        size: 1.2,
        speed: 0.8,
        statusEffects: [
            {damageThreshold: 0.0, name: "freezing"},
            {damageThreshold: 0.33, name: "frozen"}

        ],
        synergies: [
            {name: "bleeding", multiplier: 1.25, replaceWith: null},
            {name: "frozen", multiplier: 1.2},
            {name: "soaked", multiplier: 1.1, replaceWith: "frozen"},
            {name: "snowy", multiplier: 1.1, replaceWith: "frozen"},
            {name: "melting", multiplier: 1, replaceWith: null},
            {name: "corroding", multiplier: 1, replaceWith: null},
            {name: "burning", multiplier: 0.9},
            {name: "petrified", multiplier: 0.9},
            {name: "charred", multiplier: 0.9, replaceWith: null},
            {name: "scorched", multiplier: 0.8},
            {name: "seared", multiplier: 0.8},
        ]
    },
    light: {
        damage: 0.85,
        size: 1.0,
        speed: 1.8,
        statusEffects: [
            {damageThreshold: 0.0, name: "blinded"}
        ],
        synergies: [
            {name: "crystallized", multiplier: 1.1},
            {name: "blinded", multiplier: 1.1},
            {name: "drained", multiplier: 0.8},
        ]
    },
    lightning: {
        damage: 0.85,
        size: 1.25,
        speed: 0.9,
        statusEffects: [
            {damageThreshold: 0.33, name: "paralyzed"}
        ],
        synergies: [
            {name: "frozen", multiplier: 1.3, replaceWith: null}, // ???
            {name: "bleeding", multiplier: 1.25, replaceWith: null},
            {name: "sandy", multiplier: 1.2, replaceWith: null},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "soaked", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "charred", multiplier: 1, replaceWith: null},
            {name: "petrified", multiplier: 1, replaceWith: null},
        ]
    },
    magma: {
        damage: 0.9,
        size: 1.2,
        speed: 0.7,
        statusEffects: [
            {damageThreshold: 0.0, name: "melting"}
        ],
        synergies: [
            {name: "corroding", multiplier: 1.2, replaceWith: null},
            {name: "petrified", multiplier: 1.2, replaceWith: null},
            {name: "bleeding", multiplier: 1.2, replaceWith: null},
            {name: "sweating", multiplier: 1.2,}, // ???
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "burning", multiplier: 1.1},
            {name: "charred", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "poisoned", multiplier: 1, replaceWith: null},
            {name: "soaked", multiplier: 0.95, replaceWith: null},
            {name: "freezing", multiplier: 0.95, replaceWith: null},
            {name: "sandy", multiplier: 0.9, replaceWith: null},
        ]
    },
    metal: {
        damage: 1.05,
        size: 1.2,
        speed: 0.55,
        statusEffects: [
            {damageThreshold: 0.05, name: "bleeding"}
        ],
        synergies: [
            {name: "frozen", multiplier: 1.2, replaceWith: null},
            {name: "crysallized", multiplier: 1.1},
            {name: "sandy", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "scorched", multiplier: 1.1},
            {name: "seared", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
        ]
    },
    plasma: {
        damage: 0.825,
        size: 1.0,
        speed: 1.3,
        statusEffects: [
            {damageThreshold: 0.0, name: "scorched"}
        ],
        synergies: [
            {name: "melting", multiplier: 1.2},
            {name: "charred", multiplier: 1.2, replaceWith: "petrified"},
            {name: "seared", multiplier: 1.175},
            {name: "burning", multiplier: 1.15},
            {name: "scalded", multiplier: 1.15},
            {name: "poisoned", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
            {name: "petrified", multiplier: 1.1},
            {name: "bleeding", multiplier: 1.05, replaceWith: null},
            {name: "frozen", multiplier: 1, replaceWith: null},
            {name: "soaked", multiplier: 0.95, replaceWith: null},
            {name: "freezing", multiplier: 0.95, replaceWith: null},
            {name: "crystallized", multiplier: 0.9},
        ]
    },
    poison: {
        damage: 0.75,
        size: 1.15,
        speed: 1.0,
        statusEffects: [
            {damageThreshold: 0.0, name: "poisoned"}
        ],
        synergies: [
            {name: "bleeding", multiplier: 1.1},
            {name: "burning", multiplier: 0.9},
        ]
    },
    sand: {
        damage: 0.975,
        size: 1.1,
        speed: 0.95,
        statusEffects: [
            {damageThreshold: 0.0, name: "sandy"}
        ],
        synergies: [
            {name: "petrified", multiplier: 1.2},
            {name: "charred", multiplier: 1.2},
            {name: "bleeding", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
            {name: "burning", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "sweating", multiplier: 1.05},
            {name: "soaked", multiplier: 0.8, replaceWith: null},
            {name: "crystallized", multiplier: 0.8},
        ]
    },
    shadow: {
        damage: 0.95,
        size: 1.1,
        speed: 1.2,
        statusEffects: [
            {damageThreshold: 0.0, name: "drained"}
        ],
        synergies: [
            {name: "crystallized", multiplier: 0.75},
            {name: "blinded", multiplier: 0.7},
        ]
    },
    snow: {
        damage: 0.925,
        size: 1.15,
        speed: 1.05,
        statusEffects: [
            {damageThreshold: 0.0, name: "snowy"}
        ],
        synergies: [
            {name: "freezing", multiplier: 1.1, replaceWith: "frozen"},
            {name: "soaked", multiplier: 1.1, replaceWith: "frozen"},
            {name: "petrified", multiplier: 1, replaceWith: null},   
            {name: "burning", multiplier: 0.9, replaceWith: null},
            {name: "melting", multiplier: 0.9, replaceWith: null},
            {name: "scorched", multiplier: 0.8, replaceWith: null},
            {name: "seared", multiplier: 0.8, replaceWith: null},
            {name: "charred", multiplier: 0.8, replaceWith: null},
        ]
    },
    water: {
        damage: 0.925,
        size: 1.2,
        speed: 1.0,
        statusEffects: [
            {damageThreshold: 0.0, name: "soaked"}
        ],
        synergies: [
            {name: "freezing", multiplier: 1.1, replaceWith: "frozen"},
            {name: "snowy", multiplier: 1.1},
            {name: "bleeding", multiplier: 1.05},
            {name: "singed", multiplier: 1, replaceWith: null},
            {name: "scalded", multiplier: 1, replaceWith: null},
            {name: "melting", multiplier: 0.9, replaceWith: null},
            {name: "charred", multiplier: 0.9},
            {name: "petrified", multiplier: 0.9},
            {name: "crystallized", multiplier: 0.85},
            {name: "burning", multiplier: 0.8, replaceWith: null},
            {name: "sandy", multiplier: 0.8},
            {name: "scorched", multiplier: 0.7, replaceWith: null},
            {name: "seared", multiplier: 0.7, replaceWith: null},
        ]
    },
    wind: {
        damage: 0.825,
        size: 1.2,
        speed: 1.4,
        statusEffects: [],
        synergies: [
            {name: "freezing", multiplier: 1.2, replaceWith: "frozen"},
            {name: "petrified", multiplier: 1.2, replaceWith: null},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "snowy", multiplier: 1.1, replaceWith: "frozen"},
            {name: "charred", multiplier: 1.1},
            {name: "soaked", multiplier: 0.9, replaceWith: null},
            {name: "burning", multiplier: 0.9, replaceWith: null},
            {name: "sandy", multiplier: 0.9, replaceWith: null},
            {name: "singed", multiplier: 0.9},
            {name: "poisoned", multiplier: 0.9, replaceWith: null},
        ]
    },
    wood: {
        damage: 0.95,
        size: 1.2,
        speed: 0.8,
        statusEffects: [
            {damageThreshold: 0.05, name: "bleeding"}
        ],
        synergies: [
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "burning", multiplier: 1.1},
            {name: "sandy", multiplier: 1.1},
            {name: "petrified", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "charred", multiplier: 1.1},
        ]
    },
};
const effects = {
    bleeding: {
        damagePerTick: 0.05,
        duration: 5,
        type: "DoT",
    },
    burning: {
        damagePerTick: 0.07,
        duration: 5,
        type: "DoT",
    },
    scorched: {
        damagePerTick: 0.1,
        duration: 3,
        type: "DoT",
    },
    melting: {
        damagePerTick: 0.05,
        duration: 10,
        type: "DoT",
    },
    corroding: {
        damagePerTick: 0.05,
        duration: 10,
        type: "DoT",
    },
    poisoned: {
        damagePerTick: 0.05,
        duration: 20,
        type: "DoT",
    },
    singed: {
        damagePerTick: 0.05, // ?
        duration: 10,
        type: "DoT",
    },
    freezing: {
        duration: 10,
        type: "Interaction",
    },
    charred: {
        duration: 10,
        type: "Interaction",
    },
    soaked: {
        duration: 10,
        type: "Interaction",
    },
    crystallized: {
        duration: 10,
        type: "Interaction",
    },
    drained: {
        duration: 10,
        type: "Interaction",
    },
    seared: {
        damagePerTick: 0.2/3,
        duration: 3,
        type: "DoT",
    },
    blinded: {
        duration: 1.5,
        type: "Blind",
    },
    sandy: {
        duration: 5,
        type: "Blind",
    },
    snowy: {
        duration: 4,
        type: "Blind",
    },
    frozen: {
        duration: 1,
        type: "Stun",
    },
    petrified: {
        duration: 1,
        type: "Stun",
    },
    paralyzed: {
        duration: 1,
        type: "Stun",
    },
    sweating: {
        duration: 10, // ???
        type: "Interaction",
    },
    none: {
        duration: 0, // ???
        type: "Interaction",
    },
};

const spells = {
    blast: (params) => {
        const { level, power, magic, amount } = params;
        console.log(amount);
        let damage = magic.damage * (level + 19 + power);
        if (amount > 1)
        {
            damage *= (1.05/amount + 0.05);
        }
        return damage;
    },
    explosion: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * (level + 19 + power) * (1 + 0.004*(100-size));
        if (placed)
        {
            damage *= 0.6;
        }
        if (amount > 1)
        {
            damage *= 2/(1 + amount);
        }
        return damage;
    },
    beam: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * 0.65 * (level + 19 + power);
        if (amount == 2)
        {
            damage *= 1.4;
        }
        return damage;
    },
    snare: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * (0.74*level + 19 + power);
        return damage;
    },
    pulsar: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * (level + 19 + power);
        return damage;
    },
    javelin: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * 1.25 (level + 19 + power);
        return damage;
    },
    surge: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * 0.15 * (level + 19 + power);
        return damage;
    }
}

function calculateBaseHP(level)
{
    return 93 + level*7;
}

function calculateVitalityReduction(level, vitality) {
    const baseHealth = calculateBaseHP(level);
    const vitHealth = baseHealth + vitality*4;
    return Math.sqrt(baseHealth/vitHealth);
}

function calculateDoT(params)
{
    const { damage, intensity, magic } = params;
    const INTENSITY_FOR_TICK = 28;
    if (magic.statusEffects.length > 0)
    {
        for (const status of magic.statusEffects)
        {
            const statusInfo = effects[status.name]
            if (statusInfo.type == 'DoT')
            {
                return [Math.floor(damage * statusInfo.damagePerTick) * statusInfo.duration, status];
            }
        }
    }
    return [0, {name: "None"}];
}

function calculateSynergy(params)
{
    const {magic, targetStatus} = params
    let synergyDamage = 1;
    let statusResult = "None";
    
    let synergyStore = [];

    for (const synergy of magic.synergies)
    {
        if (targetStatus == synergy.name)
        {
            synergyDamage = synergy.multiplier;
            if (synergy.replaceWith != undefined)
            {
                statusResult = synergy.replaceWith;
            }        
            break;
        }
    }
    console.log(statusResult);
    return [synergyDamage, statusResult];
}

function updateResult()
{
    const params = {
        level: Number($('#level').val()),
        vitality: Number($('#vitality').val()),
        power: Number($('#power').val()),
        magic: stats[String($('#magic').val())],
        spell: String($('#spell').val()),
        intensity: Number($('#intensity').val()),
        amount: Number($('#amount').val()),
        charge: Number($('#charge').val()),
        ultimateArt: Boolean($('#ultimateArt').val()),
        targetStatus: String($('#targetStatus').val()),
        shape: String($('#shape').val()),
    };

    const vitReduction = calculateVitalityReduction(params.level, params.vitality);
    const spellDamage = spells[params.spell](params);
    const attackDamage = Math.floor(spellDamage * vitReduction);
    const [dotDamage, statusInfo] = calculateDoT({ damage: attackDamage * vitReduction, intensity: params.intensity, magic: params.magic });

    const [synergyDamage, statusResult] = calculateSynergy(params);

    $('#output_base_damage').text(attackDamage);
    $('#output_dot_damage').text(dotDamage + " (" + statusInfo.name + ")");
    $('#output_total_damage').text(attackDamage + dotDamage);

    let fullSynDamage = Math.floor(attackDamage * synergyDamage);
    let newStatusInfo = effects[statusResult];
    if (newStatusInfo.type == 'DoT')
    {
        let synDoT = Math.floor(damage * newStatusInfo.damagePerTick) * newStatusInfo.duration;
    }

    $('#output_synergy_damage').text(fullSynDamage);
    $('#output_synergy_dot_damage').text(synDoT + " (" + statusInfo.name + ")");
    $('#output_synergy_total_damage').text(fullSynDamage + synDoT);
}

// Input Listeners
$('#level, #vitality, #power, #intensity, #magic, #spell, #amount, #shape, #ultimateArt, #charge, #targetStatus').on('input', function() {
    updateResult();
});