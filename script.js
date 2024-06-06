// magics called stats
// statusEffects called effects

const spells = {
    blast: (params) => {
        const { level, power, magic, amount, ultimateArt, size = 100 } = params;
        // console.log(amount);
        let damage = magic.damage * (level + 19 + power) * (1 + 0.004*(100-size));
        if (amount > 1)
        {
            damage *= (1.05/amount + 0.05);
        }
        if (ultimateArt)
        {
            damage *= 1.3;
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
        let damage = magic.damage * 0.65 * (level + 19 + power) * (1 + 0.004*(100-size));
        if (amount == 2)
        {
            damage *= 1.4;
        }
        return damage;
    },
    snare: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * (0.74*level + 19 + power) * (1 + 0.004*(100-size));
        return damage;
    },
    pulsar: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * (level + 19 + power) * (1 + 0.004*(100-size));
        return damage;
    },
    javelin: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * 1.25 (level + 19 + power) * (1 + 0.004*(100-size));
        return damage;
    },
    surge: (params) => {
        const { level, power, magic, amount = 1, placed = false, size = 100 } = params;
        let damage = magic.damage * 0.15 * (level + 19 + power) * (1 + 0.004*(100-size));
        return damage;
    }
}

const MAX_LEVEL = 136;
const HP_PER_VIT = 4;

function calculateBaseHP(level)
{
    return 93 + level*7;
}

function calculateVitalityReduction(level, vitality) {
    const baseHealth = calculateBaseHP(level);
    const vitHealth = baseHealth + vitality*HP_PER_VIT;
    return Math.sqrt(baseHealth/vitHealth);
}

function calculateSubStat(value)
{
    let result = 0;
    if (value != 0)
    {
        result = 0.01 * (1.35 * (( ((16 * Math.log(0.1*value+4)**3)*0.09+(0.15*value)) / (0.1+0.15*MAX_LEVEL**0.5) ) - 0.79 ));
    }
    // console.log(val);
    return result;
}

function calculateArmorPiercing(armorPiercing, targetDefense, targetLevel, targetVitality)
{
    let increase = 1;
    if (armorPiercing != 0)
    {
        increase += calculateSubStat(armorPiercing) * targetDefense / (calculateBaseHP(targetLevel) + (targetVitality*HP_PER_VIT) + targetDefense - targetDefense) / 4;
    }
    return increase;
}

function findStatus(magic)
{
    if (magic.statusEffects.length > 0)
    {
        for (const status of magic.statusEffects)
        {
            const statusInfo = effects[status.name];
            if (statusInfo)
            {
                return status.name;
            }
        }
    }
    return "none";
}

function calculateDoT(params)
{
    const { damage, statusName } = params;
    let dotDamage = 0;
    const statusInfo = effects[statusName];
    let statusDuration = statusInfo.duration;
    if (statusInfo.type == 'DoT')
    {
        dotDamage = Math.floor(damage * statusInfo.damagePerTick) * statusDuration;
    }
    return [dotDamage, statusDuration];
}

function calculateSynergy(magic, targetStatus, existingStatus)
{
    let synergyDamage = 1;
    let statusResult = existingStatus;
    
    let synergyStore = [];

    for (const synergy of magic.synergies)
    {
        if (targetStatus == synergy.name)
        {
            synergyDamage = synergy.multiplier;
            if (synergy.replaceWith == "clear" && synergy.name == existingStatus)
            {
                statusResult = "none";
            }
            else if (synergy.replaceWith != undefined)
            {
                statusResult = synergy.replaceWith;
            }
            break;
        }
    }
    // console.log(statusResult);
    return [synergyDamage, statusResult];
}

function updateResult()
{
    const params = {
        level: Number($('#level').val()),
        vitality: Number($('#vitality').val()),
        power: Number($('#power').val()),
        size: Number($('#size').val()),
        armorPiercing: Number($('#armorPiercing').val()),
        magic: stats[String($('#magic').val())],
        spell: String($('#spell').val()),
        amount: Number($('#amount').val()),
        charge: Number($('#charge').val()),
        ultimateArt: Boolean($('#ultimateArt').prop('checked')),
        shape: String($('#shape').val()),
        targetStatus: String($('#targetStatus').val()),
        targetLevel: Number($('#targetLevel').val()),
        targetVitality: Number($('#targetVitality').val()),
        targetDefense: Number($('#targetDefense').val()),
        
    };
    // Restrict vitality
    $('#vitality').val(Math.min(params.vitality, params.level*2));
    $('#targetVitality').val(Math.min(params.targetVitality, params.targetLevel*2));


    const vitReduction = calculateVitalityReduction(params.level, params.vitality);
    const piercingBoost = calculateArmorPiercing(params.armorPiercing, params.targetDefense, params.targetLevel, params.targetVitality);
    const spellDamage = spells[params.spell](params);
    const attackDamage = Math.floor(spellDamage * vitReduction * piercingBoost);
    const statusName = findStatus(params.magic);
    const [dotDamage, statusDuration] = calculateDoT({ damage: attackDamage, statusName: statusName});

    if (params.size < 20)
    {
        $('#size').val(20);
        params.size = 20;
    }

    const [synergyDamage, statusResult] = calculateSynergy(params.magic, params.targetStatus, statusName);

    let fullSynDamage = Math.floor(attackDamage * synergyDamage);
    const [newDoTDamage, newStatusDuration] = calculateDoT({ damage: fullSynDamage, statusName: statusResult});
    if (synergyDamage > 1)
    {
        $('#output_base_damage').text("+"+fullSynDamage + " ("+(fullSynDamage-attackDamage)+")");
        $('#output_total_damage').text((fullSynDamage + newDoTDamage) + " ("+(fullSynDamage + newDoTDamage-attackDamage-dotDamage)+")");
    }
    else
    {
        $('#output_base_damage').text(fullSynDamage);
        $('#output_total_damage').text(fullSynDamage + newDoTDamage);
    }
    $('#output_dot_damage').text(newStatusDuration+"x"+(newDoTDamage/newStatusDuration)+" ("+newDoTDamage +")" + " (" + statusResult + ")");


}

// Input Listeners
$('#level, #vitality, #power, #size, #magic, #spell, #amount, #shape, #ultimateArt, #charge, #targetStatus, #targetLevel, #targetDefense, #targetVitality, #armorPiercing').on('input', function() {
    updateResult();
});

// Run once at startup
updateResult();