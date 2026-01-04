export interface Movie {
    id: number;
    title: string;
    year: number;
    director: string;
    category: 'Beginning' | 'Rising Stardom' | 'Thalapathy Era' | 'Peak & Legacy';
    boxOffice?: string;
    poster?: string;
    verdict?: string;
}

export const movies: Movie[] = [
    // 1992-1999: THE BEGINNING
    { id: 1, title: "Naalaiya Theerpu", year: 1992, director: "S. A. Chandrasekhar", category: "Beginning" },
    { id: 2, title: "Senthoorapandi", year: 1993, director: "S. A. Chandrasekhar", category: "Beginning" },
    { id: 3, title: "Rasigan", year: 1994, director: "S. A. Chandrasekhar", category: "Beginning" },
    { id: 4, title: "Deva", year: 1995, director: "S. A. Chandrasekhar", category: "Beginning" },
    { id: 5, title: "Poove Unakkaga", year: 1996, director: "Vikraman", category: "Beginning", verdict: "Blockbuster" },
    { id: 6, title: "Love Today", year: 1997, director: "Balasekaran", category: "Beginning" },
    { id: 7, title: "Kadhalukku Mariyadhai", year: 1997, director: "Fazil", category: "Beginning", verdict: "Blockbuster" },
    { id: 8, title: "Priyamudan", year: 1998, director: "Vincent Selva", category: "Beginning" },
    { id: 9, title: "Thulladha Manamum Thullum", year: 1999, director: "Ezhil", category: "Beginning", verdict: "Blockbuster" },

    // 2000-2009: RISING STARDOM
    { id: 10, title: "Kushi", year: 2000, director: "S. J. Surya", category: "Rising Stardom", verdict: "Blockbuster" },
    { id: 11, title: "Priyamanavale", year: 2000, director: "K. Selva Bharathy", category: "Rising Stardom" },
    { id: 12, title: "Friends", year: 2001, director: "Siddique", category: "Rising Stardom", verdict: "Blockbuster" },
    { id: 13, title: "Badri", year: 2001, director: "P. A. Arun Prasad", category: "Rising Stardom" },
    { id: 14, title: "Thamizhan", year: 2002, director: "Majith", category: "Rising Stardom" },
    { id: 15, title: "Thirumalai", year: 2003, director: "Ramana", category: "Rising Stardom" },
    { id: 16, title: "Ghilli", year: 2004, director: "Dharani", category: "Rising Stardom", verdict: "Industry Hit" },
    { id: 17, title: "Thirupaachi", year: 2005, director: "Perarasu", category: "Rising Stardom", verdict: "Super Hit" },
    { id: 18, title: "Sivakasi", year: 2005, director: "Perarasu", category: "Rising Stardom" },
    { id: 19, title: "Pokkiri", year: 2007, director: "Prabhu Deva", category: "Rising Stardom", verdict: "Blockbuster" },
    { id: 20, title: "Vettaikaaran", year: 2009, director: "Babu Sivan", category: "Rising Stardom" },

    // 2010-2019: THALAPATHY ERA
    { id: 21, title: "Kaavalan", year: 2011, director: "Siddique", category: "Thalapathy Era" },
    { id: 22, title: "Velayudham", year: 2011, director: "Mohan Raja", category: "Thalapathy Era" },
    { id: 23, title: "Nanban", year: 2012, director: "Shankar", category: "Thalapathy Era", verdict: "Blockbuster" },
    { id: 24, title: "Thuppakki", year: 2012, director: "AR Murugadoss", category: "Thalapathy Era", verdict: "Blockbuster" },
    { id: 25, title: "Thalaivaa", year: 2013, director: "AL Vijay", category: "Thalapathy Era" },
    { id: 26, title: "Jilla", year: 2014, director: "R. T. Neason", category: "Thalapathy Era" },
    { id: 27, title: "Kaththi", year: 2014, director: "AR Murugadoss", category: "Thalapathy Era", verdict: "Blockbuster" },
    { id: 28, title: "Theri", year: 2016, director: "Atlee", category: "Thalapathy Era", verdict: "Blockbuster" },
    { id: 29, title: "Bairavaa", year: 2017, director: "Bharathan", category: "Thalapathy Era" },
    { id: 30, title: "Mersal", year: 2017, director: "Atlee", category: "Thalapathy Era", verdict: "Blockbuster" },
    { id: 31, title: "Sarkar", year: 2018, director: "AR Murugadoss", category: "Thalapathy Era", verdict: "Blockbuster" },
    { id: 32, title: "Bigil", year: 2019, director: "Atlee", category: "Thalapathy Era", verdict: "Blockbuster" },

    // 2020-2025: THE PEAK & LEGACY
    { id: 33, title: "Master", year: 2021, director: "Lokesh Kanagaraj", category: "Peak & Legacy", verdict: "Blockbuster" },
    { id: 34, title: "Beast", year: 2022, director: "Nelson Dilipkumar", category: "Peak & Legacy", verdict: "Super Hit" },
    { id: 35, title: "Varisu", year: 2023, director: "Vamshi Paidipally", category: "Peak & Legacy", verdict: "Blockbuster" },
    { id: 36, title: "Leo", year: 2023, director: "Lokesh Kanagaraj", category: "Peak & Legacy", verdict: "All Time Blockbuster" },
    { id: 37, title: "The Greatest of All Time", year: 2024, director: "Venkat Prabhu", category: "Peak & Legacy", verdict: "Mega Blockbuster" },
    { id: 38, title: "Thalapathy 69", year: 2025, director: "H. Vinoth", category: "Peak & Legacy", verdict: "The Final Chapter" },
];
