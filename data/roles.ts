export interface Role {
    id: string;
    movie: string;
    character: string;
    year: number;
    quote: string;
    description: string;
    image?: string;
}

export const roles: Role[] = [
    {
        id: 'tmt',
        movie: 'Thulladha Manamum Thullum',
        character: 'Kutty',
        year: 1999,
        quote: 'Innisai Paadivarum...',
        description: 'The soulful lover who sacrificed everything for love. A cult classic melodrama.'
    },
    {
        id: 'ghilli',
        movie: 'Ghilli',
        character: 'Velu',
        year: 2004,
        quote: 'All arealaiyum Aiya ghilli da...',
        description: 'The kabaddi player who risked it all for love, redefining the mass hero template.'
    },
    {
        id: 'sachein',
        movie: 'Sachein',
        character: 'Sachein',
        year: 2005,
        quote: 'Kanadi munaadi ninnu...',
        description: 'The charming college romantic who won hearts with his patience and smile.'
    },
    {
        id: 'nanban',
        movie: 'Nanban',
        character: 'Pari (Panchavan Parivendan)',
        year: 2012,
        quote: 'All is well!',
        description: 'A genius who redefined friendship and the education system.'
    },
    {
        id: 'thuppakki',
        movie: 'Thuppakki',
        character: 'Jagadish',
        year: 2012,
        quote: 'I am waiting!',
        description: 'An army man on a secret mission. Intelligent, stylish, and sharp.'
    },
    {
        id: 'kaththi',
        movie: 'Kaththi',
        character: 'Kathiresan / Jeevanandham',
        year: 2014,
        quote: 'Kathi kathersan villathi villan...',
        description: 'A dual role fighting for farmers rights with powerful social commentary.'
    },
    {
        id: 'theri',
        movie: 'Theri',
        character: 'Vijay Kumar',
        year: 2016,
        quote: 'Theri Baby!',
        description: 'The loving father and the fierce cop. A perfect blend of emotion and action.'
    },
    {
        id: 'mersal',
        movie: 'Mersal',
        character: 'Vetri / Maaran / Thalapathy',
        year: 2017,
        quote: 'Peace Bro!',
        description: 'A magician and a doctor fighting against medical crimes. Triple dose of entertainment.'
    },
    {
        id: 'master',
        movie: 'Master',
        character: 'JD',
        year: 2021,
        quote: 'Vaathi Coming!',
        description: 'A flawed professor who finds his redemption. A clash of titans.'
    },
    {
        id: 'leo',
        movie: 'Leo',
        character: 'Parthiban / Leo Das',
        year: 2023,
        quote: 'Bloody Sweet!',
        description: 'A bakery owner with a violent past. A bloody sweet journey.'
    }
];
