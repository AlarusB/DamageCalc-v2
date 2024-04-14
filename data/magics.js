const stats = {
    acid: {
        damage: 0.875,
        size: 1.0,
        speed: 1.0,
        statusEffects: [
            { damageThreshold: 0, name: "corroding" }
        ],
        synergies: [
            {name: "frozen", multiplier: 1.2, replaceWith: "clear"},
            {name: "petrified", multiplier: 1.2, replaceWith: "clear"},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "bleeding", multiplier: 1.1},
            {name: "burning", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "charred", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "freezing", multiplier: 1, replaceWith: "clear"},
            {name: "soaked", multiplier: 0.9},
            {name: "sandy", multiplier: 0.9, replaceWith: "clear"},
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
            {name: "snowy", multiplier: 1, replaceWith: "clear"},
            {name: "soaked", multiplier: 0.95, replaceWith: "clear"},
            {name: "freezing", multiplier: 0.9, replaceWith: "clear"},
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
            {name: "crystallized", multiplier: 1.3, replaceWith: "clear"},
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
            {name: "frozen", multiplier: 1.3, replaceWith: "clear"}, // ???
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
            {name: "frozen", multiplier: 1.2, replaceWith: "clear"},
            {name: "petrified", multiplier: 1.2, replaceWith: "clear"},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "bleeding", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "burning", multiplier: 1.1},
            {name: "scalded", multiplier: 1.1},
            {name: "freezing", multiplier: 1, replaceWith: "clear"},
            {name: "snowy", multiplier: 1, replaceWith: "clear"},
            {name: "sandy", multiplier: 0.9},
            {name: "soaked", multiplier: 0.9, replaceWith: "clear"},
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
            {name: "bleeding", multiplier: 1.2, replaceWith: "clear"},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "melting", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "corroding", multiplier: 1.1},
            {name: "petrified", multiplier: 1.1},
            {name: "scalded", multiplier: 1.1},
            {name: "sweating", multiplier: 1.1},
            {name: "freezing", multiplier: 1, replaceWith: "clear"},
            {name: "frozen", multiplier: 1, replaceWith: "clear"},
            {name: "soaked", multiplier: 0.9, replaceWith: "clear"},
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
            {name: "bleeding", multiplier: 1.25, replaceWith: "clear"},
            {name: "frozen", multiplier: 1.2},
            {name: "soaked", multiplier: 1.1, replaceWith: "frozen"},
            {name: "snowy", multiplier: 1.1, replaceWith: "frozen"},
            {name: "melting", multiplier: 1, replaceWith: "clear"},
            {name: "corroding", multiplier: 1, replaceWith: "clear"},
            {name: "burning", multiplier: 0.9},
            {name: "petrified", multiplier: 0.9},
            {name: "charred", multiplier: 0.9, replaceWith: "clear"},
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
            {name: "frozen", multiplier: 1.3, replaceWith: "clear"}, // ???
            {name: "bleeding", multiplier: 1.25, replaceWith: "clear"},
            {name: "sandy", multiplier: 1.2, replaceWith: "clear"},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "soaked", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "melting", multiplier: 1.1},
            {name: "charred", multiplier: 1, replaceWith: "clear"},
            {name: "petrified", multiplier: 1, replaceWith: "clear"},
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
            {name: "corroding", multiplier: 1.2, replaceWith: "clear"},
            {name: "petrified", multiplier: 1.2, replaceWith: "clear"},
            {name: "bleeding", multiplier: 1.2, replaceWith: "clear"},
            {name: "sweating", multiplier: 1.2,}, // ???
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "burning", multiplier: 1.1},
            {name: "charred", multiplier: 1.1},
            {name: "crystallized", multiplier: 1.1},
            {name: "poisoned", multiplier: 1.1},
            {name: "poisoned", multiplier: 1, replaceWith: "clear"},
            {name: "soaked", multiplier: 0.95, replaceWith: "clear"},
            {name: "freezing", multiplier: 0.95, replaceWith: "clear"},
            {name: "sandy", multiplier: 0.9, replaceWith: "clear"},
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
            {name: "frozen", multiplier: 1.2, replaceWith: "clear"},
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
            {name: "bleeding", multiplier: 1.05, replaceWith: "clear"},
            {name: "frozen", multiplier: 1, replaceWith: "clear"},
            {name: "soaked", multiplier: 0.95, replaceWith: "clear"},
            {name: "freezing", multiplier: 0.95, replaceWith: "clear"},
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
            {name: "soaked", multiplier: 0.8, replaceWith: "clear"},
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
            {name: "petrified", multiplier: 1, replaceWith: "clear"},   
            {name: "burning", multiplier: 0.9, replaceWith: "clear"},
            {name: "melting", multiplier: 0.9, replaceWith: "clear"},
            {name: "scorched", multiplier: 0.8, replaceWith: "clear"},
            {name: "seared", multiplier: 0.8, replaceWith: "clear"},
            {name: "charred", multiplier: 0.8, replaceWith: "clear"},
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
            {name: "singed", multiplier: 1, replaceWith: "clear"},
            {name: "scalded", multiplier: 1, replaceWith: "clear"},
            {name: "melting", multiplier: 0.9, replaceWith: "clear"},
            {name: "charred", multiplier: 0.9},
            {name: "petrified", multiplier: 0.9},
            {name: "crystallized", multiplier: 0.85},
            {name: "burning", multiplier: 0.8, replaceWith: "clear"},
            {name: "sandy", multiplier: 0.8},
            {name: "scorched", multiplier: 0.7, replaceWith: "clear"},
            {name: "seared", multiplier: 0.7, replaceWith: "clear"},
        ]
    },
    wind: {
        damage: 0.825,
        size: 1.2,
        speed: 1.4,
        statusEffects: [],
        synergies: [
            {name: "freezing", multiplier: 1.2, replaceWith: "frozen"},
            {name: "petrified", multiplier: 1.2, replaceWith: "clear"},
            {name: "scorched", multiplier: 1.175},
            {name: "seared", multiplier: 1.175},
            {name: "snowy", multiplier: 1.1, replaceWith: "frozen"},
            {name: "charred", multiplier: 1.1},
            {name: "soaked", multiplier: 0.9, replaceWith: "clear"},
            {name: "burning", multiplier: 0.9, replaceWith: "clear"},
            {name: "sandy", multiplier: 0.9, replaceWith: "clear"},
            {name: "singed", multiplier: 0.9},
            {name: "poisoned", multiplier: 0.9, replaceWith: "clear"},
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