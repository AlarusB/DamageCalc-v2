// magics called stats
// statusEffects called effects

const spells = {
    blast: (params) => calculateDamage(params,
        {
            amountScaling: true,
            ultMultiplier: 1.3 
        }),
    explosion: (params) => calculateDamage(params,
        { 
            sizeScaling: 0.004,
            amountScaling: true,
            placed: 0.6,
            amountFormula: (amount) => 2 / (1 + amount) 
        }),
    beam: (params) => calculateDamage(params,
        { 
            amountScaling: true,
            baseMultiplier: 0.65,
            amountCondition: { amount: 2, multiplier: 1.4 },
            amountFormula: (amount) => 2 / (1 + amount) 
        }),
    snare: (params) => calculateDamage(params,
        { 
            amountScaling: false,
            levelMultiplier: 0.74
         }),
    pulsar: (params) => calculateDamage(params,
         {
            amountScaling: false,
         }),
    javelin: (params) => calculateDamage(params,
        { 
            amountScaling: false,
            nonPowerMultiplier: 1.5 
        }),
    surge: (params) => calculateDamage(params,
        {
             amountScaling: false,
             baseMultiplier: 0.2
        })
};

function calculateDamage(params, modifiers = {}) {
    const { level, power, magic, amount = 1, placed = false, size = 100, ultimateArt = false, charge = 0} = params;
    const baseMultiplier = modifiers.baseMultiplier || 1;
    const levelMultiplier = modifiers.levelMultiplier || 1;
    const nonPowerMultiplier = modifiers.nonPowerMultiplier || 1;
    const ultMultiplier = modifiers.ultMultiplier || 1.2;
    const sizeScaling = modifiers.sizeScaling || 0.003;

    let damage = magic.damage * baseMultiplier * ( nonPowerMultiplier * (levelMultiplier * level + 19) + power) * (1 + sizeScaling * (100 - size)) * (1 + (charge/3) / 100);

    if (amount > 1 && modifiers.amountScaling && !(modifiers.amountCondition && amount == modifiers.amountCondition.amount)) {
        const amountFormula = modifiers.amountFormula || ((amount) => (1.05 / amount + 0.05));
        damage *= amountFormula(amount);
    }

    if (placed && modifiers.placed) {
        damage *= modifiers.placed;
    }


    if (ultimateArt) {
        damage *= ultMultiplier;
    }

    if (modifiers.amountCondition && amount == modifiers.amountCondition.amount) {
        damage *= modifiers.amountCondition.multiplier;
    }

    return damage;
}

const MAX_LEVEL = 140;
const HP_PER_VIT = 4;
const HP_PER_LEVEL = 7

function calculateBaseHP(level)
{
    return 93 + level*HP_PER_LEVEL;
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
    params.vitality = Math.min(params.vitality, params.level*2);
    params.targetVitality = Math.min(params.targetVitality, params.targetLevel*2)
    $('#vitality').val(params.vitality);
    $('#targetVitality').val(params.targetVitality);
    
    if (params.size < 20)
    {
        params.size = 20;
        $('#size').val(params.size);
    }

    const vitReduction = calculateVitalityReduction(params.level, params.vitality);
    const piercingBoost = calculateArmorPiercing(params.armorPiercing, params.targetDefense, params.targetLevel, params.targetVitality);
    const spellDamage = spells[params.spell](params);
    const attackDamage = Math.floor(spellDamage * vitReduction * piercingBoost);
    const statusName = findStatus(params.magic);
    const [dotDamage, statusDuration] = calculateDoT({ damage: attackDamage, statusName: statusName});



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
$('#level, #vitality, #power, #size, #magic, #spell, #amount, #shape, #ultimateArt, #charge, #targetStatus, #targetLevel, #targetDefense, #targetVitality, #armorPiercing').on('input', updateResult);

// Run once at startup
updateResult();