const stations = [
    {
        nom: "Findel - Luxembourg Airport",
        kirchberg: false,
        depuis2024: true,
        niederanven: true,
        contientSeparateur: true,
        plusDeTroisMots: true,
        plusDe15Caracteres: true,

        points: {
            depuis2024: 20,
            niederanven: 30,
            contientSeparateur: 10,
            plusDeTroisMots: 10,
            plusDe15Caracteres: 20
        }
    },
    {
        nom: "Héienhaff P+R",
        kirchberg: false,
        niederanven: true,
        connectionwithparcandrid: true,
        depuis2024: true,
        lettreDoublee: true,

        points: {
            depuis2024: 30,
            niederanven: 40,
            connectionwithparcandrid: 20,
            lettreDoublee: 30
        }
    },
    {
        nom: "Luxexpo",
        kirchberg: true,
        moinsDe500mCinema: true,
        connectionwithparcandrid: true,
        huitinitiale: true,
        unSeulMot: true,

        points: {
            kirchberg: 20,
            moinsDe500mCinema: 20,
            connectionwithparcandrid: 30,
            huitinitiale: 20,
            unSeulMot: 20
        }
    },
    {
        nom: "Alphonse Weicker",
        kirchberg: true,
        moinsDe500mCinema: true,
        connectiontonightbus: true,
        huitinitiale: true,

         points: {
            kirchberg: 10,
            moinsDe500mCinema: 20,
            connectiontonightbus: 40,
            huitinitiale: 20
        }
    },
    {
        nom: "Nationalbibliotheik / Bibliothèque nationale",
        kirchberg: true,
        huitinitiale: true,
        contientSeparateur: true,
        plusDeTroisMots: true,
        termineParE: 30,
        plusDe15Caracteres: true,

         points: {
            kirchberg: 30,
            huitinitiale: 50,
            contientSeparateur: 50,
            plusDeTroisMots: 30,
            termineParE: 30,
            plusDe15Caracteres: 30
        }
    },
    {
        nom: "Universitéit",
        kirchberg: true,
        huitinitiale: true,
        unSeulMot: true,

          points: {
            kirchberg: 20,
            huitinitiale: 40,
            unSeulMot: 30
        }
    },
    {
        nom: "Coque",
        kirchberg: true,
        huitinitiale: true,
        unSeulMot: true,
        termineParE: 10,

            points: {
                kirchberg: 10,
                huitinitiale: 30,
                unSeulMot: 20,
                termineParE: 10
        }
    },
    {
        nom: "Europaparlament / Parlement européen",
        kirchberg: true, 
        huitinitiale: true,
        contientSeparateur: true,
        plusDeTroisMots: true,
        lettreDoublee: true,
        plusDe15Caracteres: true,

            points: {
                kirchberg: 30,
                huitinitiale: 40,
                contientSeparateur: 40,
                plusDeTroisMots: 30,
                lettreDoublee: 40,
                plusDe15Caracteres: 30
        }
    },
    {
        nom: "Philharmonie - Mudam",
        kirchberg: true,
        huitinitiale: true,
        contientSeparateur: true,
        plusDe15Caracteres: true,

            points: {
                kirchberg: 20,
                huitinitiale: 50,
                contientSeparateur: 10,
                plusDe15Caracteres: 20
        }
    },
    {
        nom: "Rout Bréck - Pafendall / Pfaffenthal - Kirchberg",
        kirchberg: true,
        moinsDe500mGare: true,
        huitinitiale: true,
        moinsDe300mPont: true,
        contientSeparateur: true,
        plusDeTroisMots: true,
        lettreDoublee: true,
        plusDe15Caracteres: true,

            points: {
                kirchberg: 50,
                huitinitiale: 70,
                moinsDe500mGare: 60,
                moinsDe300mPont: 40,
                contientSeparateur: 50,
                plusDeTroisMots: 50,
                lettreDoublee: 50,
                plusDe15Caracteres: 40
        }
    },
    {
        nom: "Theater",
        kirchberg: false,
        Limpertsberg: true,
        moinsDe500mGare: true,
        moinsDe500mCinema: true,
        moinsDe300mPont: true,
        unSeulMot: true,
     
            points: {
                moinsDe500mGare: 30,
                moinsDe300mPont: 20,
                Limpertsberg: 10,
                moinsDe500mCinema: 20,
                unSeulMot: 20
        }    
    },
    {
        nom: "Faïencerie",
        kirchberg: false,
        Limpertsberg: true,
        moinsDe500mCinema: true,
        unSeulMot: true,
        termineParE: true,

        points: {
                Limpertsberg: 20,
                moinsDe500mCinema: 30,
                unSeulMot: 30,
                termineParE: 20
        }    
    },
    {
        nom: "Stäreplaz - Etoile",
        kirchberg: false,
        moinsDe500mCinema: true,
        contientSeparateur: true,
        termineParE: true,
        plusDe15Caracteres: true,

            points: {
                moinsDe500mCinema: 40,
                contientSeparateur: 30,
                termineParE: 30,
                plusDe15Caracteres: 60
        }    
    },
    {
        nom: "Hamilius",
        kirchberg: false,
        moinsDe500mCinema: true,
        connectiontonightbus: true,
        moinsDe300mPont: true,
        unSeulMot: true,

        points: {
                moinsDe300mPont: 20,
                moinsDe500mCinema: 50,
                connectiontonightbus: 30,
                unSeulMot: 10
        }
    },
    {
        nom: "Place de Metz",
        kirchberg: false,
        moinsDe300mPont: true,
        plusDeTroisMots: true,

        points: {
                moinsDe300mPont: 10,
                plusDeTroisMots: 20
        }
    },
    {
        nom: "Paräisser Plaz / Place de Paris",
        kirchberg: false,
        moinsDe500mGare: true,
        contientSeparateur: true,
        plusDeTroisMots: true,
        lettreDoublee: true,
        plusDe15Caracteres: true,

        points: {
                moinsDe500mGare: 20,
                contientSeparateur: 30,
                plusDeTroisMots: 30,
                lettreDoublee: 30, 
                plusDe15Caracteres: 30
        }
    },
    {
        nom: "Gare centrale",
        kirchberg: false,
        moinsDe500mGare: true,
        connectiontonightbus: true,
        termineParE: true,

        points: {
                moinsDe500mGare: 10,
                connectiontonightbus: 10,
                termineParE: 20
        }
    },
    {
        nom: "Leschte Steiwer / Dernier Sol",
        kirchberg: false,
        bonnevoie: true,
        contientSeparateur: true,
        plusDeTroisMots: true,
        plusDe15Caracteres: true,

        points: {
            bonnevoie: 40,
            contientSeparateur: 60, 
            plusDeTroisMots: 50, 
            plusDe15Caracteres: 50
        }
    },
    {
        nom: "Lycée Bouneweg",
        kirchberg: false,
        bonnevoie: true,
        lettreDoublee: true,

        points: {
            bonnevoie: 20,
            lettreDoublee: 40
        }
    },
    {
        nom: "Scillas",
        kirchberg: false,
        hesperange: true,
        moinsDe500mGare: true,
        depuis2024: true,
        unSeulMot: true, 
        lettreDoublee: true,

        points: {
            hesperange: 30,
            moinsDe500mGare: 60,
            depuis2024: 50,
            unSeulMot: 40, 
            lettreDoublee: 40
        }
    },
    {
        nom: "Howald Gare",
        kirchberg: false,
        hesperange: true,
        moinsDe500mGare: true,
        connectionwithparcandrid: true,
        depuis2024: true,
        termineParE: true,

        points: {
            hesperange: 10,
            moinsDe500mGare: 20,
            depuis2024: 20,
            connectionwithparcandrid: 30,
            termineParE: 30
        }
    },
    {
        nom: "Lycée Vauban",
        kirchberg: false,
        gasperich: true,
        depuis2024: true,

        points: {
            gasperich: 30,
            depuis2024: 30,
        }
    },
    {
        nom: "Waassertuerm",
        kirchberg: false,
        gasperich: true,
        depuis2024: true,
        unSeulMot: true, 
        lettreDoublee: true,

        points: {
            gasperich: 50,
            depuis2024: 60,
            unSeulMot: 70,
            lettreDoublee: 80
        }
    },
    {
        nom: "Stadion",
        kirchberg: false,
        gasperich: true,
        connectionwithparcandrid: true,
        depuis2024: true,
        unSeulMot: true,

        points: {
            gasperich: 20,
            depuis2024: 20,
            connectionwithparcandrid: 30,
            unSeulMot: 20
        }
    }
];
