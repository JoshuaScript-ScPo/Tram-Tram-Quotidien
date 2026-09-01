const questions = [
    {
        texte: "Name a station located in Kirchberg",
        verifier: station => station.kirchberg === true,
        caracteristique: "kirchberg"
    },
    {
        texte: "Name a station located Niederanven",
        verifier: station => station.niederanven === true,
        caracteristique: "niederanven"
    },
    {
        texte: "Name a station located in Limpertsberg",
        verifier: station => station.Limpertsberg === true,
        caracteristique: "Limpertsberg"
    },
    {
        texte: "Name a station located in Bonnevoie",
        verifier: station => station.bonnevoie === true,
        caracteristique: "bonnevoie"
    },
    {
        texte: "Name a station located in Hesperange",
        verifier: station => station.hesperange === true,
        caracteristique: "hesperange"
    },
    {
        texte: "Name a station located in Gasperich",
        verifier: station => station.gasperich === true,
        caracteristique: "gasperich"
    },
    {
        texte: "Name a station less than 500 metres from a railway station",
        verifier: station => station.moinsDe500mGare === true,
        caracteristique: "moinsDe500mGare"
    },
    {
        texte: "Name a station less than 500 metres from a movie theater",
        verifier: station => station.moinsDe500mCinema === true,
        caracteristique: "moinsDe500mCinema"
    },
    {
        texte: "Name a station less than 300 metres from a bridge",
        verifier: station => station.moinsDe300mPont === true,
        caracteristique: "moinsDe300mPont"
    },
    {
        texte: 'Name a station containing "-", or "/"',
        verifier: station =>
            station.nom.includes("-") ||
            station.nom.includes("–") ||
            station.nom.includes("/"),
            caracteristique: "contientSeparateur",
            autocomplete: false
    },
    {
        texte: "Name a station containing only one word",
        verifier: station =>
            station.nom.trim().split(/\s+/).length === 1,
            caracteristique: "unSeulMot",
            autocomplete: false
    },
    {
        texte: "Name a station containing more than three words",
        verifier: station =>
            station.nom.trim().split(/\s+/).length > 3,
            caracteristique: "plusDeTroisMots"
    },
    {
    texte: 'Name a station ending with the letter "E"',
    verifier: station =>
        station.nom.trim().toLowerCase().endsWith("e"),
        caracteristique: "termineParE",
        autocomplete: false
    },
    {
    texte: "Name a station containing a doubled letter",
    verifier: station =>
        /([a-zà-ÿ])\1/i.test(station.nom),
        caracteristique: "lettreDoublee",
        autocomplete: false
    },
    {
    texte: "Name a station containing more than 15 characters",
    verifier: station =>
        station.nom.length > 15,
        caracteristique: "plusDe15Caracteres"
    },
    {
    texte: "Name one of the eight initial tram stations",
    verifier: station => station.huitinitiale === true,
    caracteristique: "huitinitiale"
    },
    {
    texte: "Name a station with a connection to a night bus",
    verifier: station => station.connectiontonightbus === true,
    caracteristique: "connectiontonightbus"
    },
    {
    texte: "Name a station connected to a P+R car park",
    verifier: station => station.connectionwithparcandrid === true,
    caracteristique: "connectionwithparcandrid"
    },
    {
    texte: "Name a station inaugurated in or after 2024",
    verifier: station => station.depuis2024 === true,
    caracteristique: "depuis2024"
    }
];