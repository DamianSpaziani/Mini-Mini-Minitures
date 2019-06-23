console.log('hi');

const products = [
    {name: `Abaddon the Despoiler`,
    image: `Abby.png`,
    descript: `Striding onto the battlefield like a demigod of war, the Despoiler scowls at the mortal chattel before him. He is an ender of worlds, a destroyer of hope, a bane unto the galaxy itself. Yet he is not beyond the siren call of battle, and leads his Black Legion to acts of pitiless slaughter whenever a worthy foe is near. `,
    price: 75,
    chaos: true,
    xenos: false,
    imperium: false,
    unitType: `Lord of War`},

    {name: `Haarken Worldclaimer`,
    image:`Haarken.png`,
    descript:`Haarken Worldclaimer takes a heinous joy in his role as the mouthpiece of Abaddon, for it is he who proclaims the death of worlds. He does so not with some quotidian threat or hollow boast, but by driving his weapon, the Daemon-touched Helspear deep into the heart of citizen and soldier alike. He is a dark omen given form, and the otherworldly destruction he heralds is the coming of the Warmaster himself. `,
    price: 40,
    chaos: true,
    xenos: false,
    imperium: false,
    unitType:`HQ`},

    {name: `Roboute Guiliman`,
    image:`Big G.png`,
    descript:`Strategist. Hero. Avenging Son. Roboute Guilliman is the Primarch of the Ultramarines, Lord of Ultramar, and a peerless leader of men. Resurrected by the Adeptus Mechanicus and the Ynnari, he seeks to muster the strength of the Imperium and drive back the minions of the Dark Gods. Towering over even the heroic battle-brothers of his Chapter, Guilliman storms to war with a thunderous scowl. He clutches the burning sword of the Emperor, and wears the Hand of Dominion, with which he can tear apart tanks and crush his foes with ease. Yet it is the Primarch’s strategic brilliance that is his greatest weapon, dooming enemies to defeat before the battle has even begun.`,
    price: 75,
    chaos: false,
    xenos: false,
    imperium: true,
    unitType: 'Lord of War'},

    {name: `Mega Nobs`,
    image:`Meganob.png`,
    descript:`The Meganobz are the richest and most battle-hardened Nobz around. Clad in Mek-built mega armour (with enough protective plating to turn the wearer into a walking tank), these Nobz can shrug off the hail of bullets that would kill lesser Orks.`,
    price: 76,
    chaos: false,
    xenos: true,
    imperium: false,
    unitType: 'Elite'},

    {name: `Chaos Terminators`,
    image:`Term.png`,
    descript:`Chaos Terminators are heavily armoured veterans clad in debased suits of Tactical Dreadnought armour. They form the elite of their masters’ warbands, for though they are ponderous compared to their power armour-clad comrades, nothing short of a dedicated anti-tank laser can stop a Terminator in full stride. Spiked trophy racks protrude from massive shoulders, the skulls of the enemy a barbaric testament to their wearer’s martial prowess. Helmets have grown into bestial masks that sprout great tusks and razored horns, many of which have fused directly into the skulls of their wearers.`,
    price: 70,
    chaos: true,
    xenos: false,
    imperium: false,
    unitType: 'Elite'},

    {name: `Space Marines`,
    image:`SM.png`,
    descript:`Designed by the Adeptus Mechanicus to replace the worn-down power armour used during the Great Crusade, Mark IV power armour is ancient and powerful. The most common pre-Heresy armour still in wide use, with even a few Chapters still producing new suits, it is a testament to the ingenuity and longevity of the Space Marines.`,
    price: 50,
    chaos: false,
    xenos: false,
    imperium: true,
    unitType: 'Troop'},

    {name: `Chaos Space Marines`,
    image:`CSM.png`,
    descript:`Not even the Space Marines are safe from the lure of Chaos. Whether they hail from the dark days of the Horus Heresy or turned traitor more recently, these baleful warriors combine their gene-given gifts with dark blessings and malefic sorceries, transformed by years of battle into fearless, superhuman reavers.`,
    price: 50,
    chaos: true,
    xenos: false,
    imperium: false,
    unitType: 'Troop'},
    
];

const getProductAsHtml = (val) =>{
  return `
  <div class="box">
    <p>${val.name}</p>
    <img src="BL/${val.image}" alt="${val.name}" >
    <p> ${val.descript}</p>
    <p> ${val.price} $ <p>
  </div>
`;
}





const getAllProductsAsHTML = (ar) => {
  return ar.map(getProductAsHtml).join(``);
}


document.getElementById(`products`).innerHTML = getAllProductsAsHTML(products)





// Top Nav (Not working)

//document.getElementById('factions').chaos.val;

//if (val == true)
//return;


//******* Search (not working)

//<!--document.getElementById(search).addEventListener (`submit`, (event) => {
//  event.preventDefault();
 // let q = document.getElementsByName(`search`).query.value;
//  showModel(q);
//});
