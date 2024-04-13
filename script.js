// magics called stats
// statusEffects called effects

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

function findDoT(magic)
{
    if (magic.statusEffects.length > 0)
    {
        for (const status of magic.statusEffects)
        {
            const statusInfo = effects[status.name];
            if (statusInfo.type == 'DoT')
            {
                return status.name;
            }
        }
    }
    return "none";
}

function calculateDoT(params)
{
    const { damage, intensity, dotName } = params;
    const statusInfo = effects[dotName];
    const INTENSITY_FOR_TICK = 28;
    return Math.floor(damage * statusInfo.damagePerTick) * statusInfo.duration;
}

function calculateSynergy(magic, targetStatus, existingDoT)
{
    let synergyDamage = 1;
    let statusResult = existingDoT;
    
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
    // Restrict vitality
    $('#vitality').val(Math.min(params.vitality, params.level*2));


    const vitReduction = calculateVitalityReduction(params.level, params.vitality);
    const spellDamage = spells[params.spell](params);
    const attackDamage = Math.floor(spellDamage * vitReduction);
    const dotName = findDoT(params.magic)
    const dotDamage = calculateDoT({ damage: attackDamage * vitReduction, intensity: params.intensity, dotName: dotName});

    const [synergyDamage, statusResult] = calculateSynergy(params.magic, params.targetStatus, dotName);

    $('#output_base_damage').text(attackDamage);
    $('#output_dot_damage').text(dotDamage + " (" + dotName + ")");
    $('#output_total_damage').text(attackDamage + dotDamage);

    let fullSynDamage = Math.floor(attackDamage * synergyDamage);
    const newDoTDamage = calculateDoT({ damage: fullSynDamage, intensity: params.intensity, dotName: statusResult});


    $('#output_synergy_damage').text(fullSynDamage);
    $('#output_synergy_dot_damage').text(newDoTDamage + " (" + statusResult + ")");
    $('#output_synergy_total_damage').text(fullSynDamage + newDoTDamage);
}

// Input Listeners
$('#level, #vitality, #power, #intensity, #magic, #spell, #amount, #shape, #ultimateArt, #charge, #targetStatus').on('input', function() {
    updateResult();
});