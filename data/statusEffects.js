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