const labelByType = {
    "1": "Titanium",
    "2": "Silicium",
    "3": "Copper",
    "4": "Elects",
} as const;

type k = keyof typeof labelByType;

interface obj {
    type: k;
    name: string;
}

const listeDesElements: obj[] = [
    { type: "1", name: "A" },
    { type: "2", name: "A" },
    { type: "3", name: "A" },
    { type: "4", name: "A" },
    { type: "1", name: "A" },
    { type: "2", name: "A" },
    { type: "3", name: "A" },
    { type: "1", name: "A" },
    { type: "2", name: "A" },
];

const parse: Record<string, obj[]> = {};

const changement = () => {
    listeDesElements.forEach((el) => {
        parse[el.type] ??= [];
        parse[el.type].push(el);
    });
};

/*   transforme salut en parse    */

// Object.keys(parse).map(el => ({
//     label:labelByType[el],
//     listDesBats:parse[el].map(el2 => ({div:{name:""}}))
// }))
