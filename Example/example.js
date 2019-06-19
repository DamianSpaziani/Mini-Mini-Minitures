console.log('hi');

const products = [
    {name: `Abaddon the Despoiler`,
    image: `Abby.png`,
    descript: `Striding onto the battlefield like a demigod of war, the Despoiler scowls at the mortal chattel before him. He is an ender of worlds, a destroyer of hope, a bane unto the galaxy itself. Yet he is not beyond the siren call of battle, and leads his Black Legion to acts of pitiless slaughter whenever a worthy foe is near. `,
    price: 75,
    chaos: true,
    unitType: `Lord of War`},

    {name: `Haarken Worldclaimer`,
    image:`Haarken.png`,
    descript:`Haarken Worldclaimer takes a heinous joy in his role as the mouthpiece of Abaddon, for it is he who proclaims the death of worlds. He does so not with some quotidian threat or hollow boast, but by driving his weapon, the Daemon-touched Helspear deep into the heart of citizen and soldier alike. He is a dark omen given form, and the otherworldly destruction he heralds is the coming of the Warmaster himself. `,
    price: 40,
    chaos: false,
    unitType:`HQ`},

    {name: `Roboute Guiliman`,
    image:`Big G.png`,
    descript:`Strategist. Hero. Avenging Son. Roboute Guilliman is the Primarch of the Ultramarines, Lord of Ultramar, and a peerless leader of men. Resurrected by the Adeptus Mechanicus and the Ynnari, he seeks to muster the strength of the Imperium and drive back the minions of the Dark Gods. Towering over even the heroic battle-brothers of his Chapter, Guilliman storms to war with a thunderous scowl. He clutches the burning sword of the Emperor, and wears the Hand of Dominion, with which he can tear apart tanks and crush his foes with ease. Yet it is the Primarch’s strategic brilliance that is his greatest weapon, dooming enemies to defeat before the battle has even begun.`,
    price: 75,
    chaos: false,
    unitType: 'Lord of War',}
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

document.getElementById('factions').chaos.val;

if (val == true)


//******* Search (not working)

document.getElementById(search).addEventListener (`submit`, (event) => {
  event.preventDefault();
  let q = document.getElementsByName(`search`).query.value;
  showModel(q);
});
