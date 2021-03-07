/* Insert Player Entities. */
INSERT INTO player_entity(id, first_name, last_name)
    SELECT id, first_name, last_name
    FROM json_populate_recordset(NULL::player_entity,
        '[
          {
            "id": 1,
            "first_name": "Jake",
            "last_name": "Aarts"
          },
          {
            "id": 2,
            "first_name": "Blake",
            "last_name": "Acres"
          },
          {
            "id": 3,
            "first_name": "Marcus",
            "last_name": "Adams"
          },
          {
            "id": 4,
            "first_name": "Taylor",
            "last_name": "Adams"
          },
          {
            "id": 5,
            "first_name": "Brendon",
            "last_name": "Ah Chee"
          },
          {
            "id": 6,
            "first_name": "Callum",
            "last_name": "Ah Chee"
          },
          {
            "id": 7,
            "first_name": "Ben",
            "last_name": "Ainsworth"
          },
          {
            "id": 8,
            "first_name": "Brayden",
            "last_name": "Ainsworth"
          },
          {
            "id": 9,
            "first_name": "James",
            "last_name": "Aish"
          },
          {
            "id": 10,
            "first_name": "Sam",
            "last_name": "Alabakis"
          },
          {
            "id": 11,
            "first_name": "Aliir",
            "last_name": "Aliir"
          },
          {
            "id": 12,
            "first_name": "Oscar",
            "last_name": "Allen"
          },
          {
            "id": 13,
            "first_name": "Matthew",
            "last_name": "Allison"
          },
          {
            "id": 14,
            "first_name": "Joel",
            "last_name": "Amartey"
          },
          {
            "id": 15,
            "first_name": "Patrick",
            "last_name": "Ambrose"
          },
          {
            "id": 16,
            "first_name": "Karl",
            "last_name": "Amon"
          },
          {
            "id": 17,
            "first_name": "Jed",
            "last_name": "Anderson"
          },
          {
            "id": 18,
            "first_name": "Noah",
            "last_name": "Anderson"
          },
          {
            "id": 19,
            "first_name": "Harris",
            "last_name": "Andrews"
          },
          {
            "id": 20,
            "first_name": "Ryan",
            "last_name": "Angwin"
          },
          {
            "id": 21,
            "first_name": "Noah",
            "last_name": "Answerth"
          },
          {
            "id": 22,
            "first_name": "Lachlan",
            "last_name": "Ash"
          },
          {
            "id": 23,
            "first_name": "David",
            "last_name": "Astbury"
          },
          {
            "id": 24,
            "first_name": "Rory",
            "last_name": "Atkins"
          },
          {
            "id": 25,
            "first_name": "Tom",
            "last_name": "Atkins"
          },
          {
            "id": 26,
            "first_name": "Shaun",
            "last_name": "Atley"
          },
          {
            "id": 27,
            "first_name": "Zac",
            "last_name": "Bailey"
          },
          {
            "id": 28,
            "first_name": "Liam",
            "last_name": "Baker"
          },
          {
            "id": 29,
            "first_name": "Oskar",
            "last_name": "Baker"
          },
          {
            "id": 30,
            "first_name": "Kaine",
            "last_name": "Baldwin"
          },
          {
            "id": 31,
            "first_name": "Charlie",
            "last_name": "Ballard"
          },
          {
            "id": 32,
            "first_name": "Connor",
            "last_name": "Ballenden"
          },
          {
            "id": 33,
            "first_name": "Noah",
            "last_name": "Balta"
          },
          {
            "id": 34,
            "first_name": "Bailey",
            "last_name": "Banfield"
          },
          {
            "id": 35,
            "first_name": "Tom",
            "last_name": "Barrass"
          },
          {
            "id": 36,
            "first_name": "Josh",
            "last_name": "Battle"
          },
          {
            "id": 37,
            "first_name": "Dominic",
            "last_name": "Bedendo"
          },
          {
            "id": 38,
            "first_name": "Toby",
            "last_name": "Bedford"
          },
          {
            "id": 39,
            "first_name": "James",
            "last_name": "Bell"
          },
          {
            "id": 40,
            "first_name": "Miles",
            "last_name": "Bergman"
          },
          {
            "id": 41,
            "first_name": "Jarrod",
            "last_name": "Berry"
          },
          {
            "id": 42,
            "first_name": "Sam",
            "last_name": "Berry"
          },
          {
            "id": 43,
            "first_name": "Thomas",
            "last_name": "Berry"
          },
          {
            "id": 44,
            "first_name": "Eddie",
            "last_name": "Betts"
          },
          {
            "id": 45,
            "first_name": "Brett",
            "last_name": "Bewley"
          },
          {
            "id": 46,
            "first_name": "Jed",
            "last_name": "Bews"
          },
          {
            "id": 47,
            "first_name": "Trent",
            "last_name": "Bianco"
          },
          {
            "id": 48,
            "first_name": "Jack",
            "last_name": "Billings"
          },
          {
            "id": 49,
            "first_name": "Grant",
            "last_name": "Birchall"
          },
          {
            "id": 50,
            "first_name": "Connor",
            "last_name": "Blakely"
          },
          {
            "id": 51,
            "first_name": "Nick",
            "last_name": "Blakey"
          },
          {
            "id": 52,
            "first_name": "Mark",
            "last_name": "Blicavs"
          },
          {
            "id": 53,
            "first_name": "Travis",
            "last_name": "Boak"
          },
          {
            "id": 54,
            "first_name": "Shai",
            "last_name": "Bolton"
          },
          {
            "id": 55,
            "first_name": "Aiden",
            "last_name": "Bonar"
          },
          {
            "id": 56,
            "first_name": "Riley",
            "last_name": "Bonner"
          },
          {
            "id": 57,
            "first_name": "Marcus",
            "last_name": "Bontempelli"
          },
          {
            "id": 58,
            "first_name": "James",
            "last_name": "Borlase"
          },
          {
            "id": 59,
            "first_name": "Atu",
            "last_name": "Bosenavulagi"
          },
          {
            "id": 60,
            "first_name": "Jack",
            "last_name": "Bowes"
          },
          {
            "id": 61,
            "first_name": "Jake",
            "last_name": "Bowey"
          },
          {
            "id": 62,
            "first_name": "Austin",
            "last_name": "Bradtke"
          },
          {
            "id": 63,
            "first_name": "Lachlan",
            "last_name": "Bramble"
          },
          {
            "id": 64,
            "first_name": "Cody",
            "last_name": "Brand"
          },
          {
            "id": 65,
            "first_name": "Kaiden",
            "last_name": "Brand"
          },
          {
            "id": 66,
            "first_name": "Jarrod",
            "last_name": "Brander"
          },
          {
            "id": 67,
            "first_name": "Andrew",
            "last_name": "Brayshaw"
          },
          {
            "id": 68,
            "first_name": "Angus",
            "last_name": "Brayshaw"
          },
          {
            "id": 69,
            "first_name": "Luke",
            "last_name": "Breust"
          },
          {
            "id": 70,
            "first_name": "Kieren",
            "last_name": "Briggs"
          },
          {
            "id": 71,
            "first_name": "Nathan",
            "last_name": "Broad"
          },
          {
            "id": 72,
            "first_name": "Tyler",
            "last_name": "Brockman"
          },
          {
            "id": 73,
            "first_name": "Will",
            "last_name": "Brodie"
          },
          {
            "id": 74,
            "first_name": "Keegan",
            "last_name": "Brooksby"
          },
          {
            "id": 75,
            "first_name": "Ben",
            "last_name": "Brown"
          },
          {
            "id": 76,
            "first_name": "Callum",
            "last_name": "Brown"
          },
          {
            "id": 77,
            "first_name": "Callum L.",
            "last_name": "Brown"
          },
          {
            "id": 78,
            "first_name": "Luke",
            "last_name": "Brown"
          },
          {
            "id": 79,
            "first_name": "Mitchell",
            "last_name": "Brown"
          },
          {
            "id": 80,
            "first_name": "Tyler",
            "last_name": "Brown"
          },
          {
            "id": 81,
            "first_name": "Oscar",
            "last_name": "Brownless"
          },
          {
            "id": 82,
            "first_name": "Josh",
            "last_name": "Bruce"
          },
          {
            "id": 83,
            "first_name": "Tanner",
            "last_name": "Bruhn"
          },
          {
            "id": 84,
            "first_name": "Nick",
            "last_name": "Bryan"
          },
          {
            "id": 85,
            "first_name": "Jack",
            "last_name": "Buckley"
          },
          {
            "id": 86,
            "first_name": "Connor",
            "last_name": "Budarick"
          },
          {
            "id": 87,
            "first_name": "Matthew",
            "last_name": "Buntine"
          },
          {
            "id": 88,
            "first_name": "Chris",
            "last_name": "Burgess"
          },
          {
            "id": 89,
            "first_name": "Shaun",
            "last_name": "Burgoyne"
          },
          {
            "id": 90,
            "first_name": "Trent",
            "last_name": "Burgoyne"
          },
          {
            "id": 91,
            "first_name": "Ryan",
            "last_name": "Burton"
          },
          {
            "id": 92,
            "first_name": "Daniel",
            "last_name": "Butler"
          },
          {
            "id": 93,
            "first_name": "Louis",
            "last_name": "Butler"
          },
          {
            "id": 94,
            "first_name": "Zak",
            "last_name": "Butters"
          },
          {
            "id": 95,
            "first_name": "Jordon",
            "last_name": "Butts"
          },
          {
            "id": 96,
            "first_name": "Darcy",
            "last_name": "Byrne-Jones"
          },
          {
            "id": 97,
            "first_name": "Ryan",
            "last_name": "Byrnes"
          },
          {
            "id": 98,
            "first_name": "Jack",
            "last_name": "Bytel"
          },
          {
            "id": 99,
            "first_name": "Josh",
            "last_name": "Caddy"
          },
          {
            "id": 100,
            "first_name": "Ned",
            "last_name": "Cahill"
          },
          {
            "id": 101,
            "first_name": "Jye",
            "last_name": "Caldwell"
          },
          {
            "id": 102,
            "first_name": "Charlie",
            "last_name": "Cameron"
          },
          {
            "id": 103,
            "first_name": "Darcy",
            "last_name": "Cameron"
          },
          {
            "id": 104,
            "first_name": "Jarrod",
            "last_name": "Cameron"
          },
          {
            "id": 105,
            "first_name": "Jeremy",
            "last_name": "Cameron"
          },
          {
            "id": 106,
            "first_name": "Braeden",
            "last_name": "Campbell"
          },
          {
            "id": 107,
            "first_name": "Tom",
            "last_name": "Campbell"
          },
          {
            "id": 108,
            "first_name": "Jake",
            "last_name": "Carlisle"
          },
          {
            "id": 109,
            "first_name": "Jack",
            "last_name": "Carroll"
          },
          {
            "id": 110,
            "first_name": "Malachy",
            "last_name": "Carruthers"
          },
          {
            "id": 111,
            "first_name": "Levi",
            "last_name": "Casboult"
          },
          {
            "id": 112,
            "first_name": "Jason",
            "last_name": "Castagna"
          },
          {
            "id": 113,
            "first_name": "Ben",
            "last_name": "Cavarra"
          },
          {
            "id": 114,
            "first_name": "Jonathon",
            "last_name": "Ceglar"
          },
          {
            "id": 115,
            "first_name": "Adam",
            "last_name": "Cerra"
          },
          {
            "id": 116,
            "first_name": "Kade",
            "last_name": "Chandler"
          },
          {
            "id": 117,
            "first_name": "Heath",
            "last_name": "Chapman"
          },
          {
            "id": 118,
            "first_name": "Mabior",
            "last_name": "Chol"
          },
          {
            "id": 119,
            "first_name": "Isaac",
            "last_name": "Chugg"
          },
          {
            "id": 120,
            "first_name": "Hunter",
            "last_name": "Clark"
          },
          {
            "id": 121,
            "first_name": "Jordan",
            "last_name": "Clark"
          },
          {
            "id": 122,
            "first_name": "Dylan",
            "last_name": "Clarke"
          },
          {
            "id": 123,
            "first_name": "Ryan",
            "last_name": "Clarke"
          },
          {
            "id": 124,
            "first_name": "Oscar",
            "last_name": "Clavarino"
          },
          {
            "id": 125,
            "first_name": "Bradley",
            "last_name": "Close"
          },
          {
            "id": 126,
            "first_name": "Tom",
            "last_name": "Clurey"
          },
          {
            "id": 127,
            "first_name": "Nakia",
            "last_name": "Cockatoo"
          },
          {
            "id": 128,
            "first_name": "Nicholas",
            "last_name": "Coffield"
          },
          {
            "id": 129,
            "first_name": "Tom",
            "last_name": "Cole"
          },
          {
            "id": 130,
            "first_name": "Blake",
            "last_name": "Coleman"
          },
          {
            "id": 131,
            "first_name": "Keidean",
            "last_name": "Coleman"
          },
          {
            "id": 132,
            "first_name": "Callum",
            "last_name": "Coleman-Jones"
          },
          {
            "id": 133,
            "first_name": "Mate",
            "last_name": "Colina"
          },
          {
            "id": 134,
            "first_name": "Riley",
            "last_name": "Collier-Dawkins"
          },
          {
            "id": 135,
            "first_name": "Samuel",
            "last_name": "Collins"
          },
          {
            "id": 136,
            "first_name": "Travis",
            "last_name": "Colyer"
          },
          {
            "id": 137,
            "first_name": "Charlie",
            "last_name": "Comben"
          },
          {
            "id": 138,
            "first_name": "Reece",
            "last_name": "Conca"
          },
          {
            "id": 139,
            "first_name": "Stephen",
            "last_name": "Coniglio"
          },
          {
            "id": 140,
            "first_name": "Leo",
            "last_name": "Connolly"
          },
          {
            "id": 141,
            "first_name": "Matt",
            "last_name": "Conroy"
          },
          {
            "id": 142,
            "first_name": "Charlie",
            "last_name": "Constable"
          },
          {
            "id": 143,
            "first_name": "Brayden",
            "last_name": "Cook"
          },
          {
            "id": 144,
            "first_name": "Josh",
            "last_name": "Corbett"
          },
          {
            "id": 145,
            "first_name": "Zaine",
            "last_name": "Cordy"
          },
          {
            "id": 146,
            "first_name": "Aidan",
            "last_name": "Corr"
          },
          {
            "id": 147,
            "first_name": "Trent",
            "last_name": "Cotchin"
          },
          {
            "id": 148,
            "first_name": "Matt",
            "last_name": "Cottrell"
          },
          {
            "id": 149,
            "first_name": "James",
            "last_name": "Cousins"
          },
          {
            "id": 150,
            "first_name": "Brennan",
            "last_name": "Cox"
          },
          {
            "id": 151,
            "first_name": "Mason",
            "last_name": "Cox"
          },
          {
            "id": 152,
            "first_name": "Nikolas",
            "last_name": "Cox"
          },
          {
            "id": 153,
            "first_name": "Jamie",
            "last_name": "Cripps"
          },
          {
            "id": 154,
            "first_name": "Patrick",
            "last_name": "Cripps"
          },
          {
            "id": 155,
            "first_name": "Jack",
            "last_name": "Crisp"
          },
          {
            "id": 156,
            "first_name": "Brad",
            "last_name": "Crouch"
          },
          {
            "id": 157,
            "first_name": "Matt",
            "last_name": "Crouch"
          },
          {
            "id": 158,
            "first_name": "Mitchell",
            "last_name": "Crowden"
          },
          {
            "id": 159,
            "first_name": "Hayden",
            "last_name": "Crozier"
          },
          {
            "id": 160,
            "first_name": "Noah",
            "last_name": "Cumberland"
          },
          {
            "id": 161,
            "first_name": "Isaac",
            "last_name": "Cumming"
          },
          {
            "id": 162,
            "first_name": "David",
            "last_name": "Cuningham"
          },
          {
            "id": 163,
            "first_name": "Harry",
            "last_name": "Cunningham"
          },
          {
            "id": 164,
            "first_name": "Ben",
            "last_name": "Cunnington"
          },
          {
            "id": 165,
            "first_name": "Charlie",
            "last_name": "Curnow"
          },
          {
            "id": 166,
            "first_name": "Edward",
            "last_name": "Curnow"
          },
          {
            "id": 167,
            "first_name": "Tom",
            "last_name": "Cutler"
          },
          {
            "id": 168,
            "first_name": "Luke",
            "last_name": "Dahlhaus"
          },
          {
            "id": 169,
            "first_name": "Josh",
            "last_name": "Daicos"
          },
          {
            "id": 170,
            "first_name": "Bailey",
            "last_name": "Dale"
          },
          {
            "id": 171,
            "first_name": "Patrick",
            "last_name": "Dangerfield"
          },
          {
            "id": 172,
            "first_name": "Caleb",
            "last_name": "Daniel"
          },
          {
            "id": 173,
            "first_name": "Brent",
            "last_name": "Daniels"
          },
          {
            "id": 174,
            "first_name": "Joe",
            "last_name": "Daniher"
          },
          {
            "id": 175,
            "first_name": "Sean",
            "last_name": "Darcy"
          },
          {
            "id": 176,
            "first_name": "Jack",
            "last_name": "Darling"
          },
          {
            "id": 177,
            "first_name": "Alex",
            "last_name": "Davies"
          },
          {
            "id": 178,
            "first_name": "Luke",
            "last_name": "Davies-Uniacke"
          },
          {
            "id": 179,
            "first_name": "Ben",
            "last_name": "Davis"
          },
          {
            "id": 180,
            "first_name": "Phil",
            "last_name": "Davis"
          },
          {
            "id": 181,
            "first_name": "Jordan",
            "last_name": "Dawson"
          },
          {
            "id": 182,
            "first_name": "Sam",
            "last_name": "Day"
          },
          {
            "id": 183,
            "first_name": "Will",
            "last_name": "Day"
          },
          {
            "id": 184,
            "first_name": "Matthew",
            "last_name": "De Boer"
          },
          {
            "id": 185,
            "first_name": "Jordan",
            "last_name": "De Goey"
          },
          {
            "id": 186,
            "first_name": "Sam",
            "last_name": "De Koning"
          },
          {
            "id": 187,
            "first_name": "Tom",
            "last_name": "De Koning"
          },
          {
            "id": 188,
            "first_name": "Charlie",
            "last_name": "Dixon"
          },
          {
            "id": 189,
            "first_name": "Sam",
            "last_name": "Docherty"
          },
          {
            "id": 190,
            "first_name": "Tom",
            "last_name": "Doedee"
          },
          {
            "id": 191,
            "first_name": "Paddy",
            "last_name": "Dow"
          },
          {
            "id": 192,
            "first_name": "Thomson",
            "last_name": "Dow"
          },
          {
            "id": 193,
            "first_name": "Connor",
            "last_name": "Downie"
          },
          {
            "id": 194,
            "first_name": "Sam",
            "last_name": "Draper"
          },
          {
            "id": 195,
            "first_name": "Willem",
            "last_name": "Drew"
          },
          {
            "id": 196,
            "first_name": "Liam",
            "last_name": "Duggan"
          },
          {
            "id": 197,
            "first_name": "Taylin",
            "last_name": "Duman"
          },
          {
            "id": 198,
            "first_name": "Trent",
            "last_name": "Dumont"
          },
          {
            "id": 199,
            "first_name": "Mitchell",
            "last_name": "Duncan"
          },
          {
            "id": 200,
            "first_name": "Josh",
            "last_name": "Dunkley"
          },
          {
            "id": 201,
            "first_name": "Luke",
            "last_name": "Dunstan"
          },
          {
            "id": 202,
            "first_name": "Corey",
            "last_name": "Durdin"
          },
          {
            "id": 203,
            "first_name": "Taylor",
            "last_name": "Duryea"
          },
          {
            "id": 204,
            "first_name": "Xavier",
            "last_name": "Duursma"
          },
          {
            "id": 205,
            "first_name": "Harry",
            "last_name": "Edwards"
          },
          {
            "id": 206,
            "first_name": "Luke",
            "last_name": "Edwards"
          },
          {
            "id": 207,
            "first_name": "Shane",
            "last_name": "Edwards"
          },
          {
            "id": 208,
            "first_name": "Jamie",
            "last_name": "Elliott"
          },
          {
            "id": 209,
            "first_name": "Brandon",
            "last_name": "Ellis"
          },
          {
            "id": 210,
            "first_name": "Cameron",
            "last_name": "Ellis-Yolmen"
          },
          {
            "id": 211,
            "first_name": "Timothy",
            "last_name": "English"
          },
          {
            "id": 212,
            "first_name": "Francis",
            "last_name": "Evans"
          },
          {
            "id": 213,
            "first_name": "Josh",
            "last_name": "Eyre"
          },
          {
            "id": 214,
            "first_name": "Orazio",
            "last_name": "Fantasia"
          },
          {
            "id": 215,
            "first_name": "Jy",
            "last_name": "Farrar"
          },
          {
            "id": 216,
            "first_name": "Kane",
            "last_name": "Farrell"
          },
          {
            "id": 217,
            "first_name": "Jeremy",
            "last_name": "Finlayson"
          },
          {
            "id": 218,
            "first_name": "Brayden",
            "last_name": "Fiorini"
          },
          {
            "id": 219,
            "first_name": "Zac",
            "last_name": "Fisher"
          },
          {
            "id": 220,
            "first_name": "Sam",
            "last_name": "Flanders"
          },
          {
            "id": 221,
            "first_name": "Cameron",
            "last_name": "Fleeton"
          },
          {
            "id": 222,
            "first_name": "Oliver",
            "last_name": "Florent"
          },
          {
            "id": 223,
            "first_name": "Matthew",
            "last_name": "Flynn"
          },
          {
            "id": 224,
            "first_name": "Darcy",
            "last_name": "Fogarty"
          },
          {
            "id": 225,
            "first_name": "Lachlan",
            "last_name": "Fogarty"
          },
          {
            "id": 226,
            "first_name": "Luke",
            "last_name": "Foley"
          },
          {
            "id": 227,
            "first_name": "Eddie",
            "last_name": "Ford"
          },
          {
            "id": 228,
            "first_name": "Darcy",
            "last_name": "Fort"
          },
          {
            "id": 229,
            "first_name": "Robbie",
            "last_name": "Fox"
          },
          {
            "id": 230,
            "first_name": "Billy",
            "last_name": "Frampton"
          },
          {
            "id": 231,
            "first_name": "Aaron",
            "last_name": "Francis"
          },
          {
            "id": 232,
            "first_name": "Lance",
            "last_name": "Franklin"
          },
          {
            "id": 233,
            "first_name": "James",
            "last_name": "Frawley"
          },
          {
            "id": 234,
            "first_name": "Martin",
            "last_name": "Frederick"
          },
          {
            "id": 235,
            "first_name": "Minairo",
            "last_name": "Frederick"
          },
          {
            "id": 236,
            "first_name": "Bayley",
            "last_name": "Fritsch"
          },
          {
            "id": 237,
            "first_name": "Sam",
            "last_name": "Frost"
          },
          {
            "id": 238,
            "first_name": "Tom",
            "last_name": "Fullarton"
          },
          {
            "id": 239,
            "first_name": "Aiden",
            "last_name": "Fyfe"
          },
          {
            "id": 240,
            "first_name": "Nathan",
            "last_name": "Fyfe"
          },
          {
            "id": 241,
            "first_name": "Andrew",
            "last_name": "Gaff"
          },
          {
            "id": 242,
            "first_name": "Riley",
            "last_name": "Garcia"
          },
          {
            "id": 243,
            "first_name": "Darcy",
            "last_name": "Gardiner"
          },
          {
            "id": 244,
            "first_name": "Ryan",
            "last_name": "Gardner"
          },
          {
            "id": 245,
            "first_name": "Joel",
            "last_name": "Garner"
          },
          {
            "id": 246,
            "first_name": "Taylor",
            "last_name": "Garner"
          },
          {
            "id": 247,
            "first_name": "Ryan",
            "last_name": "Garthwaite"
          },
          {
            "id": 248,
            "first_name": "Max",
            "last_name": "Gawn"
          },
          {
            "id": 249,
            "first_name": "Jarryn",
            "last_name": "Geary"
          },
          {
            "id": 250,
            "first_name": "Mitch",
            "last_name": "Georgiades"
          },
          {
            "id": 251,
            "first_name": "Michael",
            "last_name": "Gibbons"
          },
          {
            "id": 252,
            "first_name": "Bryce",
            "last_name": "Gibbs"
          },
          {
            "id": 253,
            "first_name": "Jack",
            "last_name": "Ginnivan"
          },
          {
            "id": 254,
            "first_name": "Stefan",
            "last_name": "Giro"
          },
          {
            "id": 255,
            "first_name": "Martin",
            "last_name": "Gleeson"
          },
          {
            "id": 256,
            "first_name": "Tyson",
            "last_name": "Goldsack"
          },
          {
            "id": 257,
            "first_name": "Todd",
            "last_name": "Goldstein"
          },
          {
            "id": 258,
            "first_name": "Lachlan",
            "last_name": "Gollant"
          },
          {
            "id": 259,
            "first_name": "Will",
            "last_name": "Gould"
          },
          {
            "id": 260,
            "first_name": "Caleb",
            "last_name": "Graham"
          },
          {
            "id": 261,
            "first_name": "Jack",
            "last_name": "Graham"
          },
          {
            "id": 262,
            "first_name": "Denver",
            "last_name": "Grainger-Barras"
          },
          {
            "id": 263,
            "first_name": "Robbie",
            "last_name": "Gray"
          },
          {
            "id": 264,
            "first_name": "Sam",
            "last_name": "Gray"
          },
          {
            "id": 265,
            "first_name": "Damon",
            "last_name": "Greaves"
          },
          {
            "id": 266,
            "first_name": "Tom",
            "last_name": "Green"
          },
          {
            "id": 267,
            "first_name": "Toby",
            "last_name": "Greene"
          },
          {
            "id": 268,
            "first_name": "Hugh",
            "last_name": "Greenwood"
          },
          {
            "id": 269,
            "first_name": "Levi",
            "last_name": "Greenwood"
          },
          {
            "id": 270,
            "first_name": "Jade",
            "last_name": "Gresham"
          },
          {
            "id": 271,
            "first_name": "Dylan",
            "last_name": "Grimes"
          },
          {
            "id": 272,
            "first_name": "Brodie",
            "last_name": "Grundy"
          },
          {
            "id": 273,
            "first_name": "Matt",
            "last_name": "Guelfi"
          },
          {
            "id": 274,
            "first_name": "Errol",
            "last_name": "Gulden"
          },
          {
            "id": 275,
            "first_name": "Jack",
            "last_name": "Gunston"
          },
          {
            "id": 276,
            "first_name": "Cameron",
            "last_name": "Guthrie"
          },
          {
            "id": 277,
            "first_name": "Zach",
            "last_name": "Guthrie"
          },
          {
            "id": 278,
            "first_name": "Aaron",
            "last_name": "Hall"
          },
          {
            "id": 279,
            "first_name": "Brayden",
            "last_name": "Ham"
          },
          {
            "id": 280,
            "first_name": "Will",
            "last_name": "Hamill"
          },
          {
            "id": 281,
            "first_name": "Joel",
            "last_name": "Hamling"
          },
          {
            "id": 282,
            "first_name": "Mitchell",
            "last_name": "Hannan"
          },
          {
            "id": 283,
            "first_name": "Daniel",
            "last_name": "Hannebery"
          },
          {
            "id": 284,
            "first_name": "Oliver",
            "last_name": "Hanrahan"
          },
          {
            "id": 285,
            "first_name": "Jarrod",
            "last_name": "Harbrow"
          },
          {
            "id": 286,
            "first_name": "Blake",
            "last_name": "Hardwick"
          },
          {
            "id": 287,
            "first_name": "James",
            "last_name": "Harmes"
          },
          {
            "id": 288,
            "first_name": "Kyle",
            "last_name": "Hartigan"
          },
          {
            "id": 289,
            "first_name": "Hamish",
            "last_name": "Hartlett"
          },
          {
            "id": 290,
            "first_name": "Michael",
            "last_name": "Hartley"
          },
          {
            "id": 291,
            "first_name": "Jackson",
            "last_name": "Hately"
          },
          {
            "id": 292,
            "first_name": "Tom",
            "last_name": "Hawkins"
          },
          {
            "id": 293,
            "first_name": "Kyron",
            "last_name": "Hayden"
          },
          {
            "id": 294,
            "first_name": "Sam",
            "last_name": "Hayes"
          },
          {
            "id": 295,
            "first_name": "Will",
            "last_name": "Hayes"
          },
          {
            "id": 296,
            "first_name": "Nick",
            "last_name": "Haynes"
          },
          {
            "id": 297,
            "first_name": "Will",
            "last_name": "Hayward"
          },
          {
            "id": 298,
            "first_name": "Isaac",
            "last_name": "Heeney"
          },
          {
            "id": 299,
            "first_name": "Lachlan",
            "last_name": "Henderson"
          },
          {
            "id": 300,
            "first_name": "Jack",
            "last_name": "Henry"
          },
          {
            "id": 301,
            "first_name": "Liam",
            "last_name": "Henry"
          },
          {
            "id": 302,
            "first_name": "Oliver",
            "last_name": "Henry"
          },
          {
            "id": 303,
            "first_name": "Dyson",
            "last_name": "Heppell"
          },
          {
            "id": 304,
            "first_name": "George",
            "last_name": "Hewett"
          },
          {
            "id": 305,
            "first_name": "Michael",
            "last_name": "Hibberd"
          },
          {
            "id": 306,
            "first_name": "Tom",
            "last_name": "Hickey"
          },
          {
            "id": 307,
            "first_name": "Jack",
            "last_name": "Higgins"
          },
          {
            "id": 308,
            "first_name": "Shaun",
            "last_name": "Higgins"
          },
          {
            "id": 309,
            "first_name": "Tom",
            "last_name": "Highmore"
          },
          {
            "id": 310,
            "first_name": "Bradley",
            "last_name": "Hill"
          },
          {
            "id": 311,
            "first_name": "Ian",
            "last_name": "Hill"
          },
          {
            "id": 312,
            "first_name": "Stephen",
            "last_name": "Hill"
          },
          {
            "id": 313,
            "first_name": "Elliott",
            "last_name": "Himmelberg"
          },
          {
            "id": 314,
            "first_name": "Harrison",
            "last_name": "Himmelberg"
          },
          {
            "id": 315,
            "first_name": "Nick",
            "last_name": "Hind"
          },
          {
            "id": 316,
            "first_name": "Mitchell",
            "last_name": "Hinge"
          },
          {
            "id": 317,
            "first_name": "Eric",
            "last_name": "Hipwood"
          },
          {
            "id": 318,
            "first_name": "Tom",
            "last_name": "Hird"
          },
          {
            "id": 319,
            "first_name": "Jesse",
            "last_name": "Hogan"
          },
          {
            "id": 320,
            "first_name": "Elijah",
            "last_name": "Hollands"
          },
          {
            "id": 321,
            "first_name": "Nicholas",
            "last_name": "Holman"
          },
          {
            "id": 322,
            "first_name": "Max",
            "last_name": "Holmes"
          },
          {
            "id": 323,
            "first_name": "Jack",
            "last_name": "Hombsch"
          },
          {
            "id": 324,
            "first_name": "Josh",
            "last_name": "Honey"
          },
          {
            "id": 325,
            "first_name": "Cale",
            "last_name": "Hooker"
          },
          {
            "id": 326,
            "first_name": "Jacob",
            "last_name": "Hopper"
          },
          {
            "id": 327,
            "first_name": "Marty",
            "last_name": "Hore"
          },
          {
            "id": 328,
            "first_name": "Will",
            "last_name": "Hoskin-Elliott"
          },
          {
            "id": 329,
            "first_name": "Bachar",
            "last_name": "Houli"
          },
          {
            "id": 330,
            "first_name": "Dan",
            "last_name": "Houston"
          },
          {
            "id": 331,
            "first_name": "Dougal",
            "last_name": "Howard"
          },
          {
            "id": 332,
            "first_name": "Daniel",
            "last_name": "Howe"
          },
          {
            "id": 333,
            "first_name": "Jeremy",
            "last_name": "Howe"
          },
          {
            "id": 334,
            "first_name": "Ethan",
            "last_name": "Hughes"
          },
          {
            "id": 335,
            "first_name": "Jayden",
            "last_name": "Hunt"
          },
          {
            "id": 336,
            "first_name": "Lachlan",
            "last_name": "Hunter"
          },
          {
            "id": 337,
            "first_name": "Paul",
            "last_name": "Hunter"
          },
          {
            "id": 338,
            "first_name": "Michael",
            "last_name": "Hurley"
          },
          {
            "id": 339,
            "first_name": "Shannon",
            "last_name": "Hurn"
          },
          {
            "id": 340,
            "first_name": "Thomas",
            "last_name": "Hutchesson"
          },
          {
            "id": 341,
            "first_name": "Mark",
            "last_name": "Hutchings"
          },
          {
            "id": 342,
            "first_name": "Connor",
            "last_name": "Idun"
          },
          {
            "id": 343,
            "first_name": "Jarman",
            "last_name": "Impey"
          },
          {
            "id": 344,
            "first_name": "Luke",
            "last_name": "Jackson"
          },
          {
            "id": 345,
            "first_name": "Callum",
            "last_name": "Jamieson"
          },
          {
            "id": 346,
            "first_name": "Ben",
            "last_name": "Jarvis"
          },
          {
            "id": 347,
            "first_name": "Joel",
            "last_name": "Jeffrey"
          },
          {
            "id": 348,
            "first_name": "Emerson",
            "last_name": "Jeka"
          },
          {
            "id": 349,
            "first_name": "Josh",
            "last_name": "Jenkins"
          },
          {
            "id": 350,
            "first_name": "Neville",
            "last_name": "Jetta"
          },
          {
            "id": 351,
            "first_name": "Changkuoth",
            "last_name": "Jiath"
          },
          {
            "id": 352,
            "first_name": "Jason",
            "last_name": "Johannisen"
          },
          {
            "id": 353,
            "first_name": "Ben",
            "last_name": "Johnson"
          },
          {
            "id": 354,
            "first_name": "Lachlan",
            "last_name": "Johnson"
          },
          {
            "id": 355,
            "first_name": "Thomas",
            "last_name": "Jonas"
          },
          {
            "id": 356,
            "first_name": "Chayce",
            "last_name": "Jones"
          },
          {
            "id": 357,
            "first_name": "Harrison",
            "last_name": "Jones"
          },
          {
            "id": 358,
            "first_name": "Jamaine",
            "last_name": "Jones"
          },
          {
            "id": 359,
            "first_name": "Lachlan",
            "last_name": "Jones"
          },
          {
            "id": 360,
            "first_name": "Liam",
            "last_name": "Jones"
          },
          {
            "id": 361,
            "first_name": "Nathan",
            "last_name": "Jones"
          },
          {
            "id": 362,
            "first_name": "Zak",
            "last_name": "Jones"
          },
          {
            "id": 363,
            "first_name": "Lin",
            "last_name": "Jong"
          },
          {
            "id": 364,
            "first_name": "James",
            "last_name": "Jordan"
          },
          {
            "id": 365,
            "first_name": "Darragh",
            "last_name": "Joyce"
          },
          {
            "id": 366,
            "first_name": "Tom",
            "last_name": "Joyce"
          },
          {
            "id": 367,
            "first_name": "Buku",
            "last_name": "Khamis"
          },
          {
            "id": 368,
            "first_name": "Mark",
            "last_name": "Keane"
          },
          {
            "id": 369,
            "first_name": "Alex",
            "last_name": "Keath"
          },
          {
            "id": 370,
            "first_name": "Ben",
            "last_name": "Keays"
          },
          {
            "id": 371,
            "first_name": "Lachlan",
            "last_name": "Keeffe"
          },
          {
            "id": 372,
            "first_name": "Jake",
            "last_name": "Kelly"
          },
          {
            "id": 373,
            "first_name": "Joshua",
            "last_name": "Kelly"
          },
          {
            "id": 374,
            "first_name": "Tim",
            "last_name": "Kelly"
          },
          {
            "id": 375,
            "first_name": "Will",
            "last_name": "Kelly"
          },
          {
            "id": 376,
            "first_name": "Brodie",
            "last_name": "Kemp"
          },
          {
            "id": 377,
            "first_name": "Adam",
            "last_name": "Kennedy"
          },
          {
            "id": 378,
            "first_name": "Josh P.",
            "last_name": "Kennedy"
          },
          {
            "id": 379,
            "first_name": "Joshua",
            "last_name": "Kennedy"
          },
          {
            "id": 380,
            "first_name": "Matthew",
            "last_name": "Kennedy"
          },
          {
            "id": 381,
            "first_name": "Dean",
            "last_name": "Kent"
          },
          {
            "id": 382,
            "first_name": "Ben",
            "last_name": "King"
          },
          {
            "id": 383,
            "first_name": "Max",
            "last_name": "King"
          },
          {
            "id": 384,
            "first_name": "Jake",
            "last_name": "Kolodjashnij"
          },
          {
            "id": 385,
            "first_name": "Jacob",
            "last_name": "Koschitzke"
          },
          {
            "id": 386,
            "first_name": "Nathan",
            "last_name": "Kreuger"
          },
          {
            "id": 387,
            "first_name": "Peter",
            "last_name": "Ladhams"
          },
          {
            "id": 388,
            "first_name": "Rory",
            "last_name": "Laird"
          },
          {
            "id": 389,
            "first_name": "Kane",
            "last_name": "Lambert"
          },
          {
            "id": 390,
            "first_name": "Ed",
            "last_name": "Langdon"
          },
          {
            "id": 391,
            "first_name": "Zac",
            "last_name": "Langdon"
          },
          {
            "id": 392,
            "first_name": "Kyle",
            "last_name": "Langford"
          },
          {
            "id": 393,
            "first_name": "Nick",
            "last_name": "Larkey"
          },
          {
            "id": 394,
            "first_name": "Bailey",
            "last_name": "Laurie"
          },
          {
            "id": 395,
            "first_name": "Jayden",
            "last_name": "Laverde"
          },
          {
            "id": 396,
            "first_name": "Charlie",
            "last_name": "Lazzaro"
          },
          {
            "id": 397,
            "first_name": "Sean",
            "last_name": "Lemmens"
          },
          {
            "id": 398,
            "first_name": "Ryan",
            "last_name": "Lester"
          },
          {
            "id": 399,
            "first_name": "Jake",
            "last_name": "Lever"
          },
          {
            "id": 400,
            "first_name": "Mitchell",
            "last_name": "Lewis"
          },
          {
            "id": 401,
            "first_name": "Thomas",
            "last_name": "Liberatore"
          },
          {
            "id": 402,
            "first_name": "Jarrod",
            "last_name": "Lienert"
          },
          {
            "id": 403,
            "first_name": "Matthew",
            "last_name": "Ling"
          },
          {
            "id": 404,
            "first_name": "Patrick",
            "last_name": "Lipinski"
          },
          {
            "id": 405,
            "first_name": "Daniel",
            "last_name": "Lloyd"
          },
          {
            "id": 406,
            "first_name": "Jake",
            "last_name": "Lloyd"
          },
          {
            "id": 407,
            "first_name": "Rory",
            "last_name": "Lobb"
          },
          {
            "id": 408,
            "first_name": "Jay",
            "last_name": "Lockhart"
          },
          {
            "id": 409,
            "first_name": "Griffin",
            "last_name": "Logue"
          },
          {
            "id": 410,
            "first_name": "Ben",
            "last_name": "Long"
          },
          {
            "id": 411,
            "first_name": "Jack",
            "last_name": "Lonie"
          },
          {
            "id": 412,
            "first_name": "Ollie",
            "last_name": "Lord"
          },
          {
            "id": 413,
            "first_name": "Jack",
            "last_name": "Lukosius"
          },
          {
            "id": 414,
            "first_name": "Scott",
            "last_name": "Lycett"
          },
          {
            "id": 415,
            "first_name": "Max",
            "last_name": "Lynch"
          },
          {
            "id": 416,
            "first_name": "Tom J.",
            "last_name": "Lynch"
          },
          {
            "id": 417,
            "first_name": "Tom",
            "last_name": "Lynch"
          },
          {
            "id": 418,
            "first_name": "Jarryd",
            "last_name": "Lyons"
          },
          {
            "id": 419,
            "first_name": "David",
            "last_name": "MacKay"
          },
          {
            "id": 420,
            "first_name": "Darcy",
            "last_name": "Macpherson"
          },
          {
            "id": 421,
            "first_name": "Finlay",
            "last_name": "Macrae"
          },
          {
            "id": 422,
            "first_name": "Jackson",
            "last_name": "Macrae"
          },
          {
            "id": 423,
            "first_name": "James",
            "last_name": "Madden"
          },
          {
            "id": 424,
            "first_name": "Jack",
            "last_name": "Madgen"
          },
          {
            "id": 425,
            "first_name": "Finn",
            "last_name": "Maginness"
          },
          {
            "id": 426,
            "first_name": "Jack",
            "last_name": "Mahony"
          },
          {
            "id": 427,
            "first_name": "Rhyan",
            "last_name": "Mansell"
          },
          {
            "id": 428,
            "first_name": "Caleb",
            "last_name": "Marchbank"
          },
          {
            "id": 429,
            "first_name": "Oleg",
            "last_name": "Markov"
          },
          {
            "id": 430,
            "first_name": "Rowan",
            "last_name": "Marshall"
          },
          {
            "id": 431,
            "first_name": "Todd",
            "last_name": "Marshall"
          },
          {
            "id": 432,
            "first_name": "Dustin",
            "last_name": "Martin"
          },
          {
            "id": 433,
            "first_name": "Jack",
            "last_name": "Martin"
          },
          {
            "id": 434,
            "first_name": "Stefan",
            "last_name": "Martin"
          },
          {
            "id": 435,
            "first_name": "Will",
            "last_name": "Martyn"
          },
          {
            "id": 436,
            "first_name": "Rhys",
            "last_name": "Mathieson"
          },
          {
            "id": 437,
            "first_name": "Steven",
            "last_name": "May"
          },
          {
            "id": 438,
            "first_name": "Sam",
            "last_name": "Mayes"
          },
          {
            "id": 439,
            "first_name": "Brayden",
            "last_name": "Maynard"
          },
          {
            "id": 440,
            "first_name": "Christopher",
            "last_name": "Mayne"
          },
          {
            "id": 441,
            "first_name": "Shane",
            "last_name": "McAdam"
          },
          {
            "id": 442,
            "first_name": "Fischer",
            "last_name": "McAsey"
          },
          {
            "id": 443,
            "first_name": "Cian",
            "last_name": "McBride"
          },
          {
            "id": 444,
            "first_name": "Lincoln",
            "last_name": "McCarthy"
          },
          {
            "id": 445,
            "first_name": "Tom",
            "last_name": "McCartin"
          },
          {
            "id": 446,
            "first_name": "Hugh",
            "last_name": "McCluggage"
          },
          {
            "id": 447,
            "first_name": "Beau",
            "last_name": "McCreery"
          },
          {
            "id": 448,
            "first_name": "Logan",
            "last_name": "McDonald"
          },
          {
            "id": 449,
            "first_name": "Luke",
            "last_name": "McDonald"
          },
          {
            "id": 450,
            "first_name": "Tom",
            "last_name": "McDonald"
          },
          {
            "id": 451,
            "first_name": "Anthony",
            "last_name": "McDonald-Tipungwuti"
          },
          {
            "id": 452,
            "first_name": "Ben",
            "last_name": "McEvoy"
          },
          {
            "id": 453,
            "first_name": "Connor",
            "last_name": "McFadyen"
          },
          {
            "id": 454,
            "first_name": "Jeremy",
            "last_name": "McGovern"
          },
          {
            "id": 455,
            "first_name": "Mitch",
            "last_name": "McGovern"
          },
          {
            "id": 456,
            "first_name": "Andrew",
            "last_name": "McGrath"
          },
          {
            "id": 457,
            "first_name": "Matthew",
            "last_name": "McGuinness"
          },
          {
            "id": 458,
            "first_name": "Ned",
            "last_name": "McHenry"
          },
          {
            "id": 459,
            "first_name": "Justin",
            "last_name": "Mcinerney"
          },
          {
            "id": 460,
            "first_name": "Oscar",
            "last_name": "McInerney"
          },
          {
            "id": 461,
            "first_name": "Reef",
            "last_name": "McInnes"
          },
          {
            "id": 462,
            "first_name": "Kamdyn",
            "last_name": "Mcintosh"
          },
          {
            "id": 463,
            "first_name": "Ben",
            "last_name": "McKay"
          },
          {
            "id": 464,
            "first_name": "Harry",
            "last_name": "McKay"
          },
          {
            "id": 465,
            "first_name": "Daniel",
            "last_name": "McKenzie"
          },
          {
            "id": 466,
            "first_name": "Trent",
            "last_name": "McKenzie"
          },
          {
            "id": 467,
            "first_name": "Shaun",
            "last_name": "McKernan"
          },
          {
            "id": 468,
            "first_name": "Hayden",
            "last_name": "McLean"
          },
          {
            "id": 469,
            "first_name": "Toby",
            "last_name": "McLean"
          },
          {
            "id": 470,
            "first_name": "Jez",
            "last_name": "McLennan"
          },
          {
            "id": 471,
            "first_name": "Liam",
            "last_name": "McMahon"
          },
          {
            "id": 472,
            "first_name": "Lachlan",
            "last_name": "McNeil"
          },
          {
            "id": 473,
            "first_name": "Andrew",
            "last_name": "McPherson"
          },
          {
            "id": 474,
            "first_name": "Ross",
            "last_name": "McQuillan"
          },
          {
            "id": 475,
            "first_name": "Daniel",
            "last_name": "McStay"
          },
          {
            "id": 476,
            "first_name": "Jackson",
            "last_name": "Mead"
          },
          {
            "id": 477,
            "first_name": "Lloyd",
            "last_name": "Meek"
          },
          {
            "id": 478,
            "first_name": "Lewis",
            "last_name": "Melican"
          },
          {
            "id": 479,
            "first_name": "Jake",
            "last_name": "Melksham"
          },
          {
            "id": 480,
            "first_name": "Tim",
            "last_name": "Membrey"
          },
          {
            "id": 481,
            "first_name": "Connor",
            "last_name": "Menadue"
          },
          {
            "id": 482,
            "first_name": "Sam",
            "last_name": "Menegola"
          },
          {
            "id": 483,
            "first_name": "Zachary",
            "last_name": "Merrett"
          },
          {
            "id": 484,
            "first_name": "Carter",
            "last_name": "Michael"
          },
          {
            "id": 485,
            "first_name": "Gryan",
            "last_name": "Miers"
          },
          {
            "id": 486,
            "first_name": "Brody",
            "last_name": "Mihocek"
          },
          {
            "id": 487,
            "first_name": "Wayne",
            "last_name": "Milera"
          },
          {
            "id": 488,
            "first_name": "Ben",
            "last_name": "Miller"
          },
          {
            "id": 489,
            "first_name": "Touk",
            "last_name": "Miller"
          },
          {
            "id": 490,
            "first_name": "Callum",
            "last_name": "Mills"
          },
          {
            "id": 491,
            "first_name": "Seamus",
            "last_name": "Mitchell"
          },
          {
            "id": 492,
            "first_name": "Tom",
            "last_name": "Mitchell"
          },
          {
            "id": 493,
            "first_name": "Darcy",
            "last_name": "Moore"
          },
          {
            "id": 494,
            "first_name": "Dylan",
            "last_name": "Moore"
          },
          {
            "id": 495,
            "first_name": "Josh",
            "last_name": "Morris"
          },
          {
            "id": 496,
            "first_name": "Harry",
            "last_name": "Morrison"
          },
          {
            "id": 497,
            "first_name": "Irving",
            "last_name": "Mosquito"
          },
          {
            "id": 498,
            "first_name": "Steven",
            "last_name": "Motlop"
          },
          {
            "id": 499,
            "first_name": "Shane",
            "last_name": "Mumford"
          },
          {
            "id": 500,
            "first_name": "David",
            "last_name": "Mundy"
          },
          {
            "id": 501,
            "first_name": "Jordan",
            "last_name": "Murdoch"
          },
          {
            "id": 502,
            "first_name": "Lachlan",
            "last_name": "Murphy"
          },
          {
            "id": 503,
            "first_name": "Marc",
            "last_name": "Murphy"
          },
          {
            "id": 504,
            "first_name": "Nathan",
            "last_name": "Murphy"
          },
          {
            "id": 505,
            "first_name": "Patrick",
            "last_name": "Murtagh"
          },
          {
            "id": 506,
            "first_name": "Patrick",
            "last_name": "Naish"
          },
          {
            "id": 507,
            "first_name": "Sam",
            "last_name": "Naismith"
          },
          {
            "id": 508,
            "first_name": "Nicholas",
            "last_name": "Naitanui"
          },
          {
            "id": 509,
            "first_name": "Toby",
            "last_name": "Nankervis"
          },
          {
            "id": 510,
            "first_name": "Quinton",
            "last_name": "Narkle"
          },
          {
            "id": 511,
            "first_name": "Conor",
            "last_name": "Nash"
          },
          {
            "id": 512,
            "first_name": "Aaron",
            "last_name": "Naughton"
          },
          {
            "id": 513,
            "first_name": "Alex",
            "last_name": "Neal-Bullen"
          },
          {
            "id": 514,
            "first_name": "Lachie",
            "last_name": "Neale"
          },
          {
            "id": 515,
            "first_name": "Shannon",
            "last_name": "Neale"
          },
          {
            "id": 516,
            "first_name": "Jackson",
            "last_name": "Nelson"
          },
          {
            "id": 517,
            "first_name": "Tariek",
            "last_name": "Newchurch"
          },
          {
            "id": 518,
            "first_name": "Nic",
            "last_name": "Newman"
          },
          {
            "id": 519,
            "first_name": "Jack",
            "last_name": "Newnes"
          },
          {
            "id": 520,
            "first_name": "Rhys",
            "last_name": "Nicholls"
          },
          {
            "id": 521,
            "first_name": "Aaron",
            "last_name": "Nietschke"
          },
          {
            "id": 522,
            "first_name": "John",
            "last_name": "Noble"
          },
          {
            "id": 523,
            "first_name": "Bigoa",
            "last_name": "Nyuon"
          },
          {
            "id": 524,
            "first_name": "Lochie",
            "last_name": "O''Brien"
          },
          {
            "id": 525,
            "first_name": "Reilly",
            "last_name": "O''Brien"
          },
          {
            "id": 526,
            "first_name": "Tim",
            "last_name": "O''Brien"
          },
          {
            "id": 527,
            "first_name": "Barry",
            "last_name": "O''Connor"
          },
          {
            "id": 528,
            "first_name": "Mark",
            "last_name": "O''Connor"
          },
          {
            "id": 529,
            "first_name": "Ronin",
            "last_name": "O''Connor"
          },
          {
            "id": 530,
            "first_name": "Nathan",
            "last_name": "O''Driscoll"
          },
          {
            "id": 531,
            "first_name": "Hewago",
            "last_name": "Oea"
          },
          {
            "id": 532,
            "first_name": "Xavier",
            "last_name": "O''Halloran"
          },
          {
            "id": 533,
            "first_name": "Stefan",
            "last_name": "Okunbor"
          },
          {
            "id": 534,
            "first_name": "Clayton",
            "last_name": "Oliver"
          },
          {
            "id": 535,
            "first_name": "Jaeger",
            "last_name": "O''Meara"
          },
          {
            "id": 536,
            "first_name": "Xavier",
            "last_name": "O''Neill"
          },
          {
            "id": 537,
            "first_name": "Colin",
            "last_name": "O''Riordan"
          },
          {
            "id": 538,
            "first_name": "Matt",
            "last_name": "Owies"
          },
          {
            "id": 539,
            "first_name": "Tom",
            "last_name": "Papley"
          },
          {
            "id": 540,
            "first_name": "Brandan",
            "last_name": "Parfitt"
          },
          {
            "id": 541,
            "first_name": "Darcy",
            "last_name": "Parish"
          },
          {
            "id": 542,
            "first_name": "Luke",
            "last_name": "Parker"
          },
          {
            "id": 543,
            "first_name": "Luke",
            "last_name": "Parks"
          },
          {
            "id": 544,
            "first_name": "Jake",
            "last_name": "Pasini"
          },
          {
            "id": 545,
            "first_name": "Ben",
            "last_name": "Paton"
          },
          {
            "id": 546,
            "first_name": "Jonathon",
            "last_name": "Patton"
          },
          {
            "id": 547,
            "first_name": "Jack",
            "last_name": "Payne"
          },
          {
            "id": 548,
            "first_name": "Alex",
            "last_name": "Pearce"
          },
          {
            "id": 549,
            "first_name": "Luke",
            "last_name": "Pedlar"
          },
          {
            "id": 550,
            "first_name": "Scott",
            "last_name": "Pendlebury"
          },
          {
            "id": 551,
            "first_name": "Harry",
            "last_name": "Pepper"
          },
          {
            "id": 552,
            "first_name": "Flynn",
            "last_name": "Perez"
          },
          {
            "id": 553,
            "first_name": "Archie",
            "last_name": "Perkins"
          },
          {
            "id": 554,
            "first_name": "Harry",
            "last_name": "Perryman"
          },
          {
            "id": 555,
            "first_name": "Christian",
            "last_name": "Petracca"
          },
          {
            "id": 556,
            "first_name": "Sam",
            "last_name": "Petrevski-Seton"
          },
          {
            "id": 557,
            "first_name": "Jack",
            "last_name": "Petruccelle"
          },
          {
            "id": 558,
            "first_name": "Harrison",
            "last_name": "Petty"
          },
          {
            "id": 559,
            "first_name": "Andrew",
            "last_name": "Phillips"
          },
          {
            "id": 560,
            "first_name": "Tom",
            "last_name": "Phillips"
          },
          {
            "id": 561,
            "first_name": "Will",
            "last_name": "Phillips"
          },
          {
            "id": 562,
            "first_name": "Sam",
            "last_name": "Philp"
          },
          {
            "id": 563,
            "first_name": "Kysaiah",
            "last_name": "Pickett"
          },
          {
            "id": 564,
            "first_name": "Marlion",
            "last_name": "Pickett"
          },
          {
            "id": 565,
            "first_name": "Marc",
            "last_name": "Pittonet"
          },
          {
            "id": 566,
            "first_name": "Lachlan",
            "last_name": "Plowman"
          },
          {
            "id": 567,
            "first_name": "Jared",
            "last_name": "Polec"
          },
          {
            "id": 568,
            "first_name": "Caleb",
            "last_name": "Poulter"
          },
          {
            "id": 569,
            "first_name": "Tom",
            "last_name": "Powell"
          },
          {
            "id": 570,
            "first_name": "Wil",
            "last_name": "Powell"
          },
          {
            "id": 571,
            "first_name": "Sam",
            "last_name": "Powell-Pepper"
          },
          {
            "id": 572,
            "first_name": "Dion",
            "last_name": "Prestia"
          },
          {
            "id": 573,
            "first_name": "Braydon",
            "last_name": "Preuss"
          },
          {
            "id": 574,
            "first_name": "Jaxon",
            "last_name": "Prior"
          },
          {
            "id": 575,
            "first_name": "Isaac",
            "last_name": "Quaynor"
          },
          {
            "id": 576,
            "first_name": "Hugo",
            "last_name": "Ralphsmith"
          },
          {
            "id": 577,
            "first_name": "Dane",
            "last_name": "Rampe"
          },
          {
            "id": 578,
            "first_name": "Sam",
            "last_name": "Ramsay"
          },
          {
            "id": 579,
            "first_name": "Izak",
            "last_name": "Rankine"
          },
          {
            "id": 580,
            "first_name": "Jay",
            "last_name": "Rantall"
          },
          {
            "id": 581,
            "first_name": "Esava",
            "last_name": "Ratugolea"
          },
          {
            "id": 582,
            "first_name": "Cameron",
            "last_name": "Rayner"
          },
          {
            "id": 583,
            "first_name": "Jack",
            "last_name": "Redden"
          },
          {
            "id": 584,
            "first_name": "Mason",
            "last_name": "Redman"
          },
          {
            "id": 585,
            "first_name": "Ned",
            "last_name": "Reeves"
          },
          {
            "id": 586,
            "first_name": "Sam",
            "last_name": "Reid"
          },
          {
            "id": 587,
            "first_name": "Samuel",
            "last_name": "Reid"
          },
          {
            "id": 588,
            "first_name": "Zach",
            "last_name": "Reid"
          },
          {
            "id": 589,
            "first_name": "Jake",
            "last_name": "Riccardi"
          },
          {
            "id": 590,
            "first_name": "Daniel",
            "last_name": "Rich"
          },
          {
            "id": 591,
            "first_name": "Ed",
            "last_name": "Richards"
          },
          {
            "id": 592,
            "first_name": "Jordan",
            "last_name": "Ridley"
          },
          {
            "id": 593,
            "first_name": "Jack",
            "last_name": "Riewoldt"
          },
          {
            "id": 594,
            "first_name": "Daniel",
            "last_name": "Rioli"
          },
          {
            "id": 595,
            "first_name": "Maurice",
            "last_name": "Rioli"
          },
          {
            "id": 596,
            "first_name": "Willie",
            "last_name": "Rioli"
          },
          {
            "id": 597,
            "first_name": "Trent",
            "last_name": "Rivers"
          },
          {
            "id": 598,
            "first_name": "Dylan",
            "last_name": "Roberton"
          },
          {
            "id": 599,
            "first_name": "Deven",
            "last_name": "Robertson"
          },
          {
            "id": 600,
            "first_name": "Mitch",
            "last_name": "Robinson"
          },
          {
            "id": 601,
            "first_name": "Tom",
            "last_name": "Rockliff"
          },
          {
            "id": 602,
            "first_name": "Gary",
            "last_name": "Rohan"
          },
          {
            "id": 603,
            "first_name": "Ben",
            "last_name": "Ronke"
          },
          {
            "id": 604,
            "first_name": "Malcolm",
            "last_name": "Rosas"
          },
          {
            "id": 605,
            "first_name": "Fraser",
            "last_name": "Rosman"
          },
          {
            "id": 606,
            "first_name": "Jack",
            "last_name": "Ross"
          },
          {
            "id": 607,
            "first_name": "Sebastian",
            "last_name": "Ross"
          },
          {
            "id": 608,
            "first_name": "Josh",
            "last_name": "Rotham"
          },
          {
            "id": 609,
            "first_name": "Jordan",
            "last_name": "Roughead"
          },
          {
            "id": 610,
            "first_name": "James",
            "last_name": "Rowbottom"
          },
          {
            "id": 611,
            "first_name": "James",
            "last_name": "Rowe"
          },
          {
            "id": 612,
            "first_name": "Matt",
            "last_name": "Rowell"
          },
          {
            "id": 613,
            "first_name": "Connor",
            "last_name": "Rozee"
          },
          {
            "id": 614,
            "first_name": "Trey",
            "last_name": "Ruscoe"
          },
          {
            "id": 615,
            "first_name": "Liam",
            "last_name": "Ryan"
          },
          {
            "id": 616,
            "first_name": "Luke",
            "last_name": "Ryan"
          },
          {
            "id": 617,
            "first_name": "Samson",
            "last_name": "Ryan"
          },
          {
            "id": 618,
            "first_name": "Patrick",
            "last_name": "Ryder"
          },
          {
            "id": 619,
            "first_name": "Adam",
            "last_name": "Saad"
          },
          {
            "id": 620,
            "first_name": "Christian",
            "last_name": "Salem"
          },
          {
            "id": 621,
            "first_name": "Jack",
            "last_name": "Saunders"
          },
          {
            "id": 622,
            "first_name": "Josh",
            "last_name": "Schache"
          },
          {
            "id": 623,
            "first_name": "Harry",
            "last_name": "Schoenberg"
          },
          {
            "id": 624,
            "first_name": "Taj",
            "last_name": "Schofield"
          },
          {
            "id": 625,
            "first_name": "Lachlan",
            "last_name": "Schultz"
          },
          {
            "id": 626,
            "first_name": "Anthony",
            "last_name": "Scott"
          },
          {
            "id": 627,
            "first_name": "Bailey",
            "last_name": "Scott"
          },
          {
            "id": 628,
            "first_name": "Jack",
            "last_name": "Scrimshaw"
          },
          {
            "id": 629,
            "first_name": "Tom",
            "last_name": "Scully"
          },
          {
            "id": 630,
            "first_name": "Paul",
            "last_name": "Seedsman"
          },
          {
            "id": 631,
            "first_name": "Joel",
            "last_name": "Selwood"
          },
          {
            "id": 632,
            "first_name": "Caleb",
            "last_name": "Serong"
          },
          {
            "id": 633,
            "first_name": "Will",
            "last_name": "Setterfield"
          },
          {
            "id": 634,
            "first_name": "Alex",
            "last_name": "Sexton"
          },
          {
            "id": 635,
            "first_name": "Harry",
            "last_name": "Sharp"
          },
          {
            "id": 636,
            "first_name": "Jeremy",
            "last_name": "Sharp"
          },
          {
            "id": 637,
            "first_name": "Will",
            "last_name": "Shaw"
          },
          {
            "id": 638,
            "first_name": "Marc",
            "last_name": "Sheather"
          },
          {
            "id": 639,
            "first_name": "Dominic",
            "last_name": "Sheed"
          },
          {
            "id": 640,
            "first_name": "Bradley",
            "last_name": "Sheppard"
          },
          {
            "id": 641,
            "first_name": "Dylan",
            "last_name": "Shiel"
          },
          {
            "id": 642,
            "first_name": "Liam",
            "last_name": "Shiels"
          },
          {
            "id": 643,
            "first_name": "Nicholas",
            "last_name": "Shipley"
          },
          {
            "id": 644,
            "first_name": "Lachlan",
            "last_name": "Sholl"
          },
          {
            "id": 645,
            "first_name": "Jayden",
            "last_name": "Short"
          },
          {
            "id": 646,
            "first_name": "Luke",
            "last_name": "Shuey"
          },
          {
            "id": 647,
            "first_name": "James",
            "last_name": "Sicily"
          },
          {
            "id": 648,
            "first_name": "Steele",
            "last_name": "Sidebottom"
          },
          {
            "id": 649,
            "first_name": "Brayden",
            "last_name": "Sier"
          },
          {
            "id": 650,
            "first_name": "Jack",
            "last_name": "Silvagni"
          },
          {
            "id": 651,
            "first_name": "Jy",
            "last_name": "Simpkin"
          },
          {
            "id": 652,
            "first_name": "Sam",
            "last_name": "Simpson"
          },
          {
            "id": 653,
            "first_name": "Callum",
            "last_name": "Sinclair"
          },
          {
            "id": 654,
            "first_name": "Jack",
            "last_name": "Sinclair"
          },
          {
            "id": 655,
            "first_name": "Rory",
            "last_name": "Sloane"
          },
          {
            "id": 656,
            "first_name": "Archie",
            "last_name": "Smith"
          },
          {
            "id": 657,
            "first_name": "Bailey",
            "last_name": "Smith"
          },
          {
            "id": 658,
            "first_name": "Brock",
            "last_name": "Smith"
          },
          {
            "id": 659,
            "first_name": "Brodie",
            "last_name": "Smith"
          },
          {
            "id": 660,
            "first_name": "Devon",
            "last_name": "Smith"
          },
          {
            "id": 661,
            "first_name": "Ely",
            "last_name": "Smith"
          },
          {
            "id": 662,
            "first_name": "Henry",
            "last_name": "Smith"
          },
          {
            "id": 663,
            "first_name": "Isaac",
            "last_name": "Smith"
          },
          {
            "id": 664,
            "first_name": "Joel",
            "last_name": "Smith"
          },
          {
            "id": 665,
            "first_name": "Roarke",
            "last_name": "Smith"
          },
          {
            "id": 666,
            "first_name": "Zac",
            "last_name": "Smith"
          },
          {
            "id": 667,
            "first_name": "Will",
            "last_name": "Snelling"
          },
          {
            "id": 668,
            "first_name": "Ivan",
            "last_name": "Soldo"
          },
          {
            "id": 669,
            "first_name": "Charlie",
            "last_name": "Spargo"
          },
          {
            "id": 670,
            "first_name": "Tom",
            "last_name": "Sparrow"
          },
          {
            "id": 671,
            "first_name": "Phoenix",
            "last_name": "Spicer"
          },
          {
            "id": 672,
            "first_name": "Zachary",
            "last_name": "Sproule"
          },
          {
            "id": 673,
            "first_name": "Sydney",
            "last_name": "Stack"
          },
          {
            "id": 674,
            "first_name": "Rhys",
            "last_name": "Stanley"
          },
          {
            "id": 675,
            "first_name": "Brandon",
            "last_name": "Starcevich"
          },
          {
            "id": 676,
            "first_name": "Jack",
            "last_name": "Steele"
          },
          {
            "id": 677,
            "first_name": "Jake",
            "last_name": "Stein"
          },
          {
            "id": 678,
            "first_name": "Tyson",
            "last_name": "Stengle"
          },
          {
            "id": 679,
            "first_name": "Cooper",
            "last_name": "Stephens"
          },
          {
            "id": 680,
            "first_name": "Dylan",
            "last_name": "Stephens"
          },
          {
            "id": 681,
            "first_name": "Jaidyn",
            "last_name": "Stephenson"
          },
          {
            "id": 682,
            "first_name": "Nick",
            "last_name": "Stevens"
          },
          {
            "id": 683,
            "first_name": "James",
            "last_name": "Stewart"
          },
          {
            "id": 684,
            "first_name": "Thomas",
            "last_name": "Stewart"
          },
          {
            "id": 685,
            "first_name": "Liam",
            "last_name": "Stocker"
          },
          {
            "id": 686,
            "first_name": "Conor",
            "last_name": "Stone"
          },
          {
            "id": 687,
            "first_name": "Kieran",
            "last_name": "Strachan"
          },
          {
            "id": 688,
            "first_name": "Jake",
            "last_name": "Stringer"
          },
          {
            "id": 689,
            "first_name": "Sam",
            "last_name": "Sturt"
          },
          {
            "id": 690,
            "first_name": "David",
            "last_name": "Swallow"
          },
          {
            "id": 691,
            "first_name": "Jordon",
            "last_name": "Sweet"
          },
          {
            "id": 692,
            "first_name": "Sam",
            "last_name": "Switkowski"
          },
          {
            "id": 693,
            "first_name": "Matthew",
            "last_name": "Taberner"
          },
          {
            "id": 694,
            "first_name": "Cameron",
            "last_name": "Taheny"
          },
          {
            "id": 695,
            "first_name": "Daniel",
            "last_name": "Talia"
          },
          {
            "id": 696,
            "first_name": "Tim",
            "last_name": "Taranto"
          },
          {
            "id": 697,
            "first_name": "Robbie",
            "last_name": "Tarrant"
          },
          {
            "id": 698,
            "first_name": "Curtis",
            "last_name": "Taylor"
          },
          {
            "id": 699,
            "first_name": "Lewis",
            "last_name": "Taylor"
          },
          {
            "id": 700,
            "first_name": "Sam",
            "last_name": "Taylor"
          },
          {
            "id": 701,
            "first_name": "Riley",
            "last_name": "Thilthorpe"
          },
          {
            "id": 702,
            "first_name": "Josh",
            "last_name": "Thomas"
          },
          {
            "id": 703,
            "first_name": "Leno",
            "last_name": "Thomas"
          },
          {
            "id": 704,
            "first_name": "Tarryn",
            "last_name": "Thomas"
          },
          {
            "id": 705,
            "first_name": "Rory",
            "last_name": "Thompson"
          },
          {
            "id": 706,
            "first_name": "Anton",
            "last_name": "Tohill"
          },
          {
            "id": 707,
            "first_name": "Adam",
            "last_name": "Tomlinson"
          },
          {
            "id": 708,
            "first_name": "Luke",
            "last_name": "Towey"
          },
          {
            "id": 709,
            "first_name": "Jacob",
            "last_name": "Townsend"
          },
          {
            "id": 710,
            "first_name": "Josh",
            "last_name": "Treacy"
          },
          {
            "id": 711,
            "first_name": "Adam",
            "last_name": "Treloar"
          },
          {
            "id": 712,
            "first_name": "Zane",
            "last_name": "Trew"
          },
          {
            "id": 713,
            "first_name": "Paul",
            "last_name": "Tsapatolis"
          },
          {
            "id": 714,
            "first_name": "Darcy",
            "last_name": "Tucker"
          },
          {
            "id": 715,
            "first_name": "Zach",
            "last_name": "Tuohy"
          },
          {
            "id": 716,
            "first_name": "Kayne",
            "last_name": "Turner"
          },
          {
            "id": 717,
            "first_name": "Dom",
            "last_name": "Tyson"
          },
          {
            "id": 718,
            "first_name": "Jamarra",
            "last_name": "Ugle-Hagan"
          },
          {
            "id": 719,
            "first_name": "Deividas",
            "last_name": "Uosis"
          },
          {
            "id": 720,
            "first_name": "Luke",
            "last_name": "Valente"
          },
          {
            "id": 721,
            "first_name": "Aaron",
            "last_name": "Vandenberg"
          },
          {
            "id": 722,
            "first_name": "Laitham",
            "last_name": "Vandermeer"
          },
          {
            "id": 723,
            "first_name": "Nathan",
            "last_name": "Vardy"
          },
          {
            "id": 724,
            "first_name": "Daniel",
            "last_name": "Venables"
          },
          {
            "id": 725,
            "first_name": "Jack",
            "last_name": "Viney"
          },
          {
            "id": 726,
            "first_name": "Nick",
            "last_name": "Vlastuin"
          },
          {
            "id": 727,
            "first_name": "Brandon",
            "last_name": "Walker"
          },
          {
            "id": 728,
            "first_name": "Joshua",
            "last_name": "Walker"
          },
          {
            "id": 729,
            "first_name": "Patrick",
            "last_name": "Walker"
          },
          {
            "id": 730,
            "first_name": "Taylor",
            "last_name": "Walker"
          },
          {
            "id": 731,
            "first_name": "Will",
            "last_name": "Walker"
          },
          {
            "id": 732,
            "first_name": "Mitchell",
            "last_name": "Wallis"
          },
          {
            "id": 733,
            "first_name": "Sam",
            "last_name": "Walsh"
          },
          {
            "id": 734,
            "first_name": "Michael",
            "last_name": "Walters"
          },
          {
            "id": 735,
            "first_name": "Callan",
            "last_name": "Ward"
          },
          {
            "id": 736,
            "first_name": "Chad",
            "last_name": "Warner"
          },
          {
            "id": 737,
            "first_name": "Alec",
            "last_name": "Waterman"
          },
          {
            "id": 738,
            "first_name": "Jake",
            "last_name": "Waterman"
          },
          {
            "id": 739,
            "first_name": "Tobe",
            "last_name": "Watson"
          },
          {
            "id": 740,
            "first_name": "Jimmy",
            "last_name": "Webster"
          },
          {
            "id": 741,
            "first_name": "Jacob",
            "last_name": "Wehr"
          },
          {
            "id": 742,
            "first_name": "Sam",
            "last_name": "Weideman"
          },
          {
            "id": 743,
            "first_name": "Cody",
            "last_name": "Weightman"
          },
          {
            "id": 744,
            "first_name": "Jacob",
            "last_name": "Weitering"
          },
          {
            "id": 745,
            "first_name": "Lachlan",
            "last_name": "Weller"
          },
          {
            "id": 746,
            "first_name": "Rhylee",
            "last_name": "West"
          },
          {
            "id": 747,
            "first_name": "Joel",
            "last_name": "Western"
          },
          {
            "id": 748,
            "first_name": "Lachie",
            "last_name": "Whitfield"
          },
          {
            "id": 749,
            "first_name": "Sam",
            "last_name": "Wicks"
          },
          {
            "id": 750,
            "first_name": "Callum",
            "last_name": "Wilkie"
          },
          {
            "id": 751,
            "first_name": "Bailey",
            "last_name": "Williams"
          },
          {
            "id": 752,
            "first_name": "Bailey J.",
            "last_name": "Williams"
          },
          {
            "id": 753,
            "first_name": "Dylan",
            "last_name": "Williams"
          },
          {
            "id": 754,
            "first_name": "Zachary",
            "last_name": "Williams"
          },
          {
            "id": 755,
            "first_name": "Tom",
            "last_name": "Williamson"
          },
          {
            "id": 756,
            "first_name": "Nathan",
            "last_name": "Wilson"
          },
          {
            "id": 757,
            "first_name": "Tom",
            "last_name": "Wilson"
          },
          {
            "id": 758,
            "first_name": "Isiah",
            "last_name": "Winder"
          },
          {
            "id": 759,
            "first_name": "Oliver",
            "last_name": "Wines"
          },
          {
            "id": 760,
            "first_name": "Chad",
            "last_name": "Wingard"
          },
          {
            "id": 761,
            "first_name": "Alex",
            "last_name": "Witherden"
          },
          {
            "id": 762,
            "first_name": "Jarrod",
            "last_name": "Witts"
          },
          {
            "id": 763,
            "first_name": "Easton",
            "last_name": "Wood"
          },
          {
            "id": 764,
            "first_name": "Mason",
            "last_name": "Wood"
          },
          {
            "id": 765,
            "first_name": "Boyd",
            "last_name": "Woodcock"
          },
          {
            "id": 766,
            "first_name": "James",
            "last_name": "Worpel"
          },
          {
            "id": 767,
            "first_name": "Josh",
            "last_name": "Worrell"
          },
          {
            "id": 768,
            "first_name": "Peter",
            "last_name": "Wright"
          },
          {
            "id": 769,
            "first_name": "Tristan",
            "last_name": "Xerri"
          },
          {
            "id": 770,
            "first_name": "Elliot",
            "last_name": "Yeo"
          },
          {
            "id": 771,
            "first_name": "Hayden",
            "last_name": "Young"
          },
          {
            "id": 772,
            "first_name": "Lachie",
            "last_name": "Young"
          },
          {
            "id": 773,
            "first_name": "Lewis",
            "last_name": "Young"
          },
          {
            "id": 774,
            "first_name": "David",
            "last_name": "Zaharakis"
          },
          {
            "id": 775,
            "first_name": "Brandon",
            "last_name": "Zerk-Thatcher"
          },
          {
            "id": 776,
            "first_name": "Jack",
            "last_name": "Ziebell"
          },
          {
            "id": 777,
            "first_name": "Dayne",
            "last_name": "Zorko"
          },
          {
            "id": 778,
            "first_name": "Cameron",
            "last_name": "Zurhaar"
          }
        ]'
    );

/* Insert initial Player Positions. */
/* INSERT INTO player_position_join(player_id, position_id)
    VALUES (1, 2),
           (2, 2),
           (2, 3),
           (3, 4),
           (4, 4),
           (5, 1),
           (6, 4),
           (7, 4),
           (8, 1),
           (9, 2),
           (9, 3),
           (10, 2),
           (11, 2),
           (12, 2),
           (13, 3),
           (14, 4),
           (15, 4),
           (16, 1),
           (17, 4),
           (18, 4),
           (19, 1),
           (20, 2),
           (21, 2),
           (22, 2),
           (22, 3),
           (23, 4),
           (24, 4),
           (25, 1),
           (26, 4),
           (27, 4),
           (28, 1),
           (29, 2),
           (29, 3),
           (30, 2),
           (31, 2),
           (32, 2),
           (33, 3),
           (34, 4),
           (35, 4),
           (36, 1),
           (37, 4),
           (38, 4),
           (39, 1),
           (40, 2),
           (41, 1),
           (41, 4),
           (42, 4),
           (43, 1),
           (44, 1),
           (44, 2),
           (45, 2),
           (46, 2),
           (47, 3),
           (48, 1),
           (48, 3),
           (49, 1),
           (49, 2),
           (50, 1);
   */





