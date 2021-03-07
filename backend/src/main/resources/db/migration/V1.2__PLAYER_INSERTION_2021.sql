/* Insert Player Entities. */
INSERT INTO player_entity(id, first_name, last_name, date_of_birth, afl_team_id, jumper_number, height, weight)
    SELECT id, first_name, last_name, date_of_birth, afl_team_id, jumper_number, height, weight
    FROM json_populate_recordset(NULL::player_entity,
        '[
          {
            "id": 1,
            "first_name": "Jake",
            "last_name": "Aarts",
            "date_of_birth": "December 8, 1994",
            "afl_team_id": 14,
            "jumper_number": 16,
            "height": 177,
            "weight": 75
          },
          {
            "id": 2,
            "first_name": "Blake",
            "last_name": "Acres",
            "date_of_birth": "October 7, 1995",
            "afl_team_id": 6,
            "jumper_number": 9,
            "height": 191,
            "weight": 90
          },
          {
            "id": 3,
            "first_name": "Marcus",
            "last_name": "Adams",
            "date_of_birth": "June 30, 1993",
            "afl_team_id": 2,
            "jumper_number": 24,
            "height": 192,
            "weight": 93
          },
          {
            "id": 4,
            "first_name": "Taylor",
            "last_name": "Adams",
            "date_of_birth": "September 20, 1993",
            "afl_team_id": 4,
            "jumper_number": 13,
            "height": 181,
            "weight": 83
          },
          {
            "id": 5,
            "first_name": "Brendon",
            "last_name": "Ah Chee",
            "date_of_birth": "December 21, 1993",
            "afl_team_id": 17,
            "jumper_number": 41,
            "height": 189,
            "weight": 88
          },
          {
            "id": 6,
            "first_name": "Callum",
            "last_name": "Ah Chee",
            "date_of_birth": "October 9, 1997",
            "afl_team_id": 2,
            "jumper_number": 4,
            "height": 182,
            "weight": 78
          },
          {
            "id": 7,
            "first_name": "Ben",
            "last_name": "Ainsworth",
            "date_of_birth": "February 10, 1998",
            "afl_team_id": 8,
            "jumper_number": 9,
            "height": 178,
            "weight": 77
          },
          {
            "id": 8,
            "first_name": "Brayden",
            "last_name": "Ainsworth",
            "date_of_birth": "November 21, 1998",
            "afl_team_id": 17,
            "jumper_number": 33,
            "height": 184,
            "weight": 80
          },
          {
            "id": 9,
            "first_name": "James",
            "last_name": "Aish",
            "date_of_birth": "November 8, 1995",
            "afl_team_id": 6,
            "jumper_number": 11,
            "height": 183,
            "weight": 80
          },
          {
            "id": 10,
            "first_name": "Sam",
            "last_name": "Alabakis",
            "date_of_birth": "May 2, 1997",
            "afl_team_id": 15,
            "jumper_number": 45,
            "height": 211,
            "weight": 105
          },
          {
            "id": 11,
            "first_name": "Aliir",
            "last_name": "Aliir",
            "date_of_birth": "September 5, 1994",
            "afl_team_id": 13,
            "jumper_number": 21,
            "height": 195,
            "weight": 97
          },
          {
            "id": 12,
            "first_name": "Oscar",
            "last_name": "Allen",
            "date_of_birth": "March 19, 1999",
            "afl_team_id": 17,
            "jumper_number": 12,
            "height": 192,
            "weight": 87
          },
          {
            "id": 13,
            "first_name": "Matthew",
            "last_name": "Allison",
            "date_of_birth": "January 29, 2002",
            "afl_team_id": 15,
            "jumper_number": 30,
            "height": 192,
            "weight": 80
          },
          {
            "id": 14,
            "first_name": "Joel",
            "last_name": "Amartey",
            "date_of_birth": "September 2, 1999",
            "afl_team_id": 16,
            "jumper_number": 36,
            "height": 197,
            "weight": 96
          },
          {
            "id": 15,
            "first_name": "Patrick",
            "last_name": "Ambrose",
            "date_of_birth": "September 1, 1991",
            "afl_team_id": 5,
            "jumper_number": 29,
            "height": 191,
            "weight": 92
          },
          {
            "id": 16,
            "first_name": "Karl",
            "last_name": "Amon",
            "date_of_birth": "August 19, 1995",
            "afl_team_id": 13,
            "jumper_number": 15,
            "height": 181,
            "weight": 71
          },
          {
            "id": 17,
            "first_name": "Jed",
            "last_name": "Anderson",
            "date_of_birth": "February 2, 1994",
            "afl_team_id": 12,
            "jumper_number": 3,
            "height": 179,
            "weight": 81
          },
          {
            "id": 18,
            "first_name": "Noah",
            "last_name": "Anderson",
            "date_of_birth": "February 17, 2001",
            "afl_team_id": 8,
            "jumper_number": 15,
            "height": 188,
            "weight": 86
          },
          {
            "id": 19,
            "first_name": "Harris",
            "last_name": "Andrews",
            "date_of_birth": "December 11, 1996",
            "afl_team_id": 2,
            "jumper_number": 31,
            "height": 201,
            "weight": 100
          },
          {
            "id": 20,
            "first_name": "Ryan",
            "last_name": "Angwin",
            "date_of_birth": "December 12, 2002",
            "afl_team_id": 9,
            "jumper_number": 9,
            "height": 184,
            "weight": 74
          },
          {
            "id": 21,
            "first_name": "Noah",
            "last_name": "Answerth",
            "date_of_birth": "August 6, 1999",
            "afl_team_id": 2,
            "jumper_number": 43,
            "height": 182,
            "weight": 82
          },
          {
            "id": 22,
            "first_name": "Lachlan",
            "last_name": "Ash",
            "date_of_birth": "June 21, 2001",
            "afl_team_id": 9,
            "jumper_number": 7,
            "height": 186,
            "weight": 80
          },
          {
            "id": 23,
            "first_name": "David",
            "last_name": "Astbury",
            "date_of_birth": "February 26, 1991",
            "afl_team_id": 14,
            "jumper_number": 12,
            "height": 195,
            "weight": 96
          },
          {
            "id": 24,
            "first_name": "Rory",
            "last_name": "Atkins",
            "date_of_birth": "July 12, 1994",
            "afl_team_id": 8,
            "jumper_number": 2,
            "height": 186,
            "weight": 85
          },
          {
            "id": 25,
            "first_name": "Tom",
            "last_name": "Atkins",
            "date_of_birth": "September 18, 1995",
            "afl_team_id": 7,
            "jumper_number": 30,
            "height": 180,
            "weight": 86
          },
          {
            "id": 26,
            "first_name": "Shaun",
            "last_name": "Atley",
            "date_of_birth": "September 13, 1992",
            "afl_team_id": 12,
            "jumper_number": 18,
            "height": 189,
            "weight": 86
          },
          {
            "id": 27,
            "first_name": "Zac",
            "last_name": "Bailey",
            "date_of_birth": "September 23, 1999",
            "afl_team_id": 2,
            "jumper_number": 33,
            "height": 182,
            "weight": 83
          },
          {
            "id": 28,
            "first_name": "Liam",
            "last_name": "Baker",
            "date_of_birth": "January 27, 1998",
            "afl_team_id": 14,
            "jumper_number": 7,
            "height": 173,
            "weight": 72
          },
          {
            "id": 29,
            "first_name": "Oskar",
            "last_name": "Baker",
            "date_of_birth": "May 25, 1998",
            "afl_team_id": 11,
            "jumper_number": 33,
            "height": 184,
            "weight": 82
          },
          {
            "id": 30,
            "first_name": "Kaine",
            "last_name": "Baldwin",
            "date_of_birth": "May 30, 2002",
            "afl_team_id": 5,
            "jumper_number": null,
            "height": 193,
            "weight": 90
          },
          {
            "id": 31,
            "first_name": "Charlie",
            "last_name": "Ballard",
            "date_of_birth": "July 23, 1999",
            "afl_team_id": 8,
            "jumper_number": 10,
            "height": 195,
            "weight": 91
          },
          {
            "id": 32,
            "first_name": "Connor",
            "last_name": "Ballenden",
            "date_of_birth": "March 29, 1999",
            "afl_team_id": 2,
            "jumper_number": 38,
            "height": 200,
            "weight": 101
          },
          {
            "id": 33,
            "first_name": "Noah",
            "last_name": "Balta",
            "date_of_birth": "October 23, 1999",
            "afl_team_id": 14,
            "jumper_number": 21,
            "height": 194,
            "weight": 100
          },
          {
            "id": 34,
            "first_name": "Bailey",
            "last_name": "Banfield",
            "date_of_birth": "February 26, 1998",
            "afl_team_id": 6,
            "jumper_number": 41,
            "height": 190,
            "weight": 92
          },
          {
            "id": 35,
            "first_name": "Tom",
            "last_name": "Barrass",
            "date_of_birth": "October 8, 1995",
            "afl_team_id": 17,
            "jumper_number": 37,
            "height": 196,
            "weight": 96
          },
          {
            "id": 36,
            "first_name": "Josh",
            "last_name": "Battle",
            "date_of_birth": "September 1, 1998",
            "afl_team_id": 15,
            "jumper_number": 26,
            "height": 193,
            "weight": 92
          },
          {
            "id": 37,
            "first_name": "Dominic",
            "last_name": "Bedendo",
            "date_of_birth": "July 9, 2002",
            "afl_team_id": 18,
            "jumper_number": 26,
            "height": 188,
            "weight": 74
          },
          {
            "id": 38,
            "first_name": "Toby",
            "last_name": "Bedford",
            "date_of_birth": "May 27, 2000",
            "afl_team_id": 11,
            "jumper_number": 12,
            "height": 178,
            "weight": 69
          },
          {
            "id": 39,
            "first_name": "James",
            "last_name": "Bell",
            "date_of_birth": "February 10, 1999",
            "afl_team_id": 16,
            "jumper_number": 32,
            "height": 183,
            "weight": 81
          },
          {
            "id": 40,
            "first_name": "Miles",
            "last_name": "Bergman",
            "date_of_birth": "October 18, 2001",
            "afl_team_id": 13,
            "jumper_number": 14,
            "height": 186,
            "weight": 75
          },
          {
            "id": 41,
            "first_name": "Jarrod",
            "last_name": "Berry",
            "date_of_birth": "February 5, 1998",
            "afl_team_id": 2,
            "jumper_number": 7,
            "height": 193,
            "weight": 89
          },
          {
            "id": 42,
            "first_name": "Sam",
            "last_name": "Berry",
            "date_of_birth": "February 12, 2002",
            "afl_team_id": 1,
            "jumper_number": 21,
            "height": 181,
            "weight": 81
          },
          {
            "id": 43,
            "first_name": "Thomas",
            "last_name": "Berry",
            "date_of_birth": "May 1, 2000",
            "afl_team_id": 2,
            "jumper_number": 13,
            "height": 185,
            "weight": 76
          },
          {
            "id": 44,
            "first_name": "Eddie",
            "last_name": "Betts",
            "date_of_birth": "November 26, 1986",
            "afl_team_id": 3,
            "jumper_number": 19,
            "height": 174,
            "weight": 74
          },
          {
            "id": 45,
            "first_name": "Brett",
            "last_name": "Bewley",
            "date_of_birth": "April 14, 1995",
            "afl_team_id": 6,
            "jumper_number": 17,
            "height": 185,
            "weight": 87
          },
          {
            "id": 46,
            "first_name": "Jed",
            "last_name": "Bews",
            "date_of_birth": "December 14, 1993",
            "afl_team_id": 7,
            "jumper_number": 24,
            "height": 186,
            "weight": 88
          },
          {
            "id": 47,
            "first_name": "Trent",
            "last_name": "Bianco",
            "date_of_birth": "January 20, 2001",
            "afl_team_id": 4,
            "jumper_number": 8,
            "height": 178,
            "weight": 70
          },
          {
            "id": 48,
            "first_name": "Jack",
            "last_name": "Billings",
            "date_of_birth": "August 18, 1995",
            "afl_team_id": 15,
            "jumper_number": 15,
            "height": 184,
            "weight": 79
          },
          {
            "id": 49,
            "first_name": "Grant",
            "last_name": "Birchall",
            "date_of_birth": "January 28, 1988",
            "afl_team_id": 2,
            "jumper_number": 14,
            "height": 193,
            "weight": 89
          },
          {
            "id": 50,
            "first_name": "Connor",
            "last_name": "Blakely",
            "date_of_birth": "March 2, 1996",
            "afl_team_id": 6,
            "jumper_number": 19,
            "height": 188,
            "weight": 90
          },
          {
            "id": 51,
            "first_name": "Nick",
            "last_name": "Blakey",
            "date_of_birth": "February 27, 2000",
            "afl_team_id": 16,
            "jumper_number": 22,
            "height": 195,
            "weight": 80
          },
          {
            "id": 52,
            "first_name": "Mark",
            "last_name": "Blicavs",
            "date_of_birth": "March 28, 1991",
            "afl_team_id": 7,
            "jumper_number": 46,
            "height": 198,
            "weight": 100
          },
          {
            "id": 53,
            "first_name": "Travis",
            "last_name": "Boak",
            "date_of_birth": "August 1, 1988",
            "afl_team_id": 13,
            "jumper_number": 10,
            "height": 183,
            "weight": 85
          },
          {
            "id": 54,
            "first_name": "Shai",
            "last_name": "Bolton",
            "date_of_birth": "December 8, 1998",
            "afl_team_id": 14,
            "jumper_number": 29,
            "height": 175,
            "weight": 77
          },
          {
            "id": 55,
            "first_name": "Aiden",
            "last_name": "Bonar",
            "date_of_birth": "March 8, 1999",
            "afl_team_id": 12,
            "jumper_number": 16,
            "height": 188,
            "weight": 87
          },
          {
            "id": 56,
            "first_name": "Riley",
            "last_name": "Bonner",
            "date_of_birth": "March 7, 1997",
            "afl_team_id": 13,
            "jumper_number": 26,
            "height": 190,
            "weight": 85
          },
          {
            "id": 57,
            "first_name": "Marcus",
            "last_name": "Bontempelli",
            "date_of_birth": "November 24, 1995",
            "afl_team_id": 18,
            "jumper_number": 4,
            "height": 193,
            "weight": 93
          },
          {
            "id": 58,
            "first_name": "James",
            "last_name": "Borlase",
            "date_of_birth": "July 18, 2002",
            "afl_team_id": 1,
            "jumper_number": 35,
            "height": 192,
            "weight": 89
          },
          {
            "id": 59,
            "first_name": "Atu",
            "last_name": "Bosenavulagi",
            "date_of_birth": "September 17, 2000",
            "afl_team_id": 12,
            "jumper_number": 15,
            "height": 180,
            "weight": 82
          },
          {
            "id": 60,
            "first_name": "Jack",
            "last_name": "Bowes",
            "date_of_birth": "January 26, 1998",
            "afl_team_id": 8,
            "jumper_number": 3,
            "height": 187,
            "weight": 85
          },
          {
            "id": 61,
            "first_name": "Jake",
            "last_name": "Bowey",
            "date_of_birth": "September 12, 2002",
            "afl_team_id": 11,
            "jumper_number": 17,
            "height": 175,
            "weight": 67
          },
          {
            "id": 62,
            "first_name": "Austin",
            "last_name": "Bradtke",
            "date_of_birth": "May 27, 2000",
            "afl_team_id": 11,
            "jumper_number": 46,
            "height": 204,
            "weight": 91
          },
          {
            "id": 63,
            "first_name": "Lachlan",
            "last_name": "Bramble",
            "date_of_birth": "April 19, 1998",
            "afl_team_id": 10,
            "jumper_number": null,
            "height": 182,
            "weight": 75
          },
          {
            "id": 64,
            "first_name": "Cody",
            "last_name": "Brand",
            "date_of_birth": "May 23, 2002",
            "afl_team_id": 5,
            "jumper_number": 38,
            "height": 195,
            "weight": 84
          },
          {
            "id": 65,
            "first_name": "Kaiden",
            "last_name": "Brand",
            "date_of_birth": "April 8, 1994",
            "afl_team_id": 16,
            "jumper_number": 2,
            "height": 198,
            "weight": 98
          },
          {
            "id": 66,
            "first_name": "Jarrod",
            "last_name": "Brander",
            "date_of_birth": "February 11, 1999",
            "afl_team_id": 17,
            "jumper_number": 10,
            "height": 195,
            "weight": 92
          },
          {
            "id": 67,
            "first_name": "Andrew",
            "last_name": "Brayshaw",
            "date_of_birth": "November 8, 1999",
            "afl_team_id": 6,
            "jumper_number": 8,
            "height": 184,
            "weight": 84
          },
          {
            "id": 68,
            "first_name": "Angus",
            "last_name": "Brayshaw",
            "date_of_birth": "January 9, 1996",
            "afl_team_id": 11,
            "jumper_number": 10,
            "height": 187,
            "weight": 87
          },
          {
            "id": 69,
            "first_name": "Luke",
            "last_name": "Breust",
            "date_of_birth": "November 11, 1990",
            "afl_team_id": 10,
            "jumper_number": 22,
            "height": 184,
            "weight": 84
          },
          {
            "id": 70,
            "first_name": "Kieren",
            "last_name": "Briggs",
            "date_of_birth": "October 6, 1999",
            "afl_team_id": 9,
            "jumper_number": 32,
            "height": 200,
            "weight": 103
          },
          {
            "id": 71,
            "first_name": "Nathan",
            "last_name": "Broad",
            "date_of_birth": "April 15, 1993",
            "afl_team_id": 14,
            "jumper_number": 35,
            "height": 192,
            "weight": 89
          },
          {
            "id": 72,
            "first_name": "Tyler",
            "last_name": "Brockman",
            "date_of_birth": "November 22, 2002",
            "afl_team_id": 10,
            "jumper_number": 42,
            "height": 181,
            "weight": 75
          },
          {
            "id": 73,
            "first_name": "Will",
            "last_name": "Brodie",
            "date_of_birth": "August 23, 1998",
            "afl_team_id": 8,
            "jumper_number": 7,
            "height": 189,
            "weight": 89
          },
          {
            "id": 74,
            "first_name": "Keegan",
            "last_name": "Brooksby",
            "date_of_birth": "April 27, 1990",
            "afl_team_id": 10,
            "jumper_number": 31,
            "height": 197,
            "weight": 105
          },
          {
            "id": 75,
            "first_name": "Ben",
            "last_name": "Brown",
            "date_of_birth": "November 20, 1992",
            "afl_team_id": 11,
            "jumper_number": 50,
            "height": 200,
            "weight": 101
          },
          {
            "id": 76,
            "first_name": "Callum",
            "last_name": "Brown",
            "date_of_birth": "August 15, 2000",
            "afl_team_id": 9,
            "jumper_number": 46,
            "height": 188,
            "weight": 91
          },
          {
            "id": 77,
            "first_name": "Callum L.",
            "last_name": "Brown",
            "date_of_birth": "April 27, 1998",
            "afl_team_id": 4,
            "jumper_number": 17,
            "height": 178,
            "weight": 77
          },
          {
            "id": 78,
            "first_name": "Luke",
            "last_name": "Brown",
            "date_of_birth": "September 22, 1992",
            "afl_team_id": 1,
            "jumper_number": 16,
            "height": 181,
            "weight": 81
          },
          {
            "id": 79,
            "first_name": "Mitchell",
            "last_name": "Brown",
            "date_of_birth": "August 28, 1990",
            "afl_team_id": 11,
            "jumper_number": 38,
            "height": 196,
            "weight": 95
          },
          {
            "id": 80,
            "first_name": "Tyler",
            "last_name": "Brown",
            "date_of_birth": "December 9, 1999",
            "afl_team_id": 4,
            "jumper_number": 6,
            "height": 188,
            "weight": 77
          },
          {
            "id": 81,
            "first_name": "Oscar",
            "last_name": "Brownless",
            "date_of_birth": "February 16, 2000",
            "afl_team_id": 7,
            "jumper_number": 20,
            "height": 186,
            "weight": 75
          },
          {
            "id": 82,
            "first_name": "Josh",
            "last_name": "Bruce",
            "date_of_birth": "June 8, 1992",
            "afl_team_id": 18,
            "jumper_number": 17,
            "height": 197,
            "weight": 101
          },
          {
            "id": 83,
            "first_name": "Tanner",
            "last_name": "Bruhn",
            "date_of_birth": "May 27, 2002",
            "afl_team_id": 9,
            "jumper_number": 5,
            "height": 183,
            "weight": 74
          },
          {
            "id": 84,
            "first_name": "Nick",
            "last_name": "Bryan",
            "date_of_birth": "October 22, 2001",
            "afl_team_id": 5,
            "jumper_number": 24,
            "height": 202,
            "weight": 87
          },
          {
            "id": 85,
            "first_name": "Jack",
            "last_name": "Buckley",
            "date_of_birth": "December 17, 1997",
            "afl_team_id": 9,
            "jumper_number": 44,
            "height": 193,
            "weight": 87
          },
          {
            "id": 86,
            "first_name": "Connor",
            "last_name": "Budarick",
            "date_of_birth": "April 6, 2001",
            "afl_team_id": 8,
            "jumper_number": 35,
            "height": 175,
            "weight": 72
          },
          {
            "id": 87,
            "first_name": "Matthew",
            "last_name": "Buntine",
            "date_of_birth": "October 19, 1993",
            "afl_team_id": 9,
            "jumper_number": 21,
            "height": 189,
            "weight": 84
          },
          {
            "id": 88,
            "first_name": "Chris",
            "last_name": "Burgess",
            "date_of_birth": null,
            "afl_team_id": 8,
            "jumper_number": 29,
            "height": 191,
            "weight": 82
          },
          {
            "id": 89,
            "first_name": "Shaun",
            "last_name": "Burgoyne",
            "date_of_birth": "October 21, 1982",
            "afl_team_id": 10,
            "jumper_number": 9,
            "height": 186,
            "weight": 89
          },
          {
            "id": 90,
            "first_name": "Trent",
            "last_name": "Burgoyne",
            "date_of_birth": "October 2, 2001",
            "afl_team_id": 13,
            "jumper_number": 31,
            "height": 177,
            "weight": 70
          },
          {
            "id": 91,
            "first_name": "Ryan",
            "last_name": "Burton",
            "date_of_birth": "January 31, 1997",
            "afl_team_id": 13,
            "jumper_number": 3,
            "height": 191,
            "weight": 90
          },
          {
            "id": 92,
            "first_name": "Daniel",
            "last_name": "Butler",
            "date_of_birth": "June 3, 1996",
            "afl_team_id": 15,
            "jumper_number": 16,
            "height": 182,
            "weight": 80
          },
          {
            "id": 93,
            "first_name": "Louis",
            "last_name": "Butler",
            "date_of_birth": "August 26, 2001",
            "afl_team_id": 18,
            "jumper_number": 18,
            "height": 184,
            "weight": 75
          },
          {
            "id": 94,
            "first_name": "Zak",
            "last_name": "Butters",
            "date_of_birth": "September 8, 2000",
            "afl_team_id": 13,
            "jumper_number": 18,
            "height": 181,
            "weight": 71
          },
          {
            "id": 95,
            "first_name": "Jordon",
            "last_name": "Butts",
            "date_of_birth": "December 31, 1999",
            "afl_team_id": 1,
            "jumper_number": 41,
            "height": 198,
            "weight": 83
          },
          {
            "id": 96,
            "first_name": "Darcy",
            "last_name": "Byrne-Jones",
            "date_of_birth": "September 20, 1995",
            "afl_team_id": 13,
            "jumper_number": 33,
            "height": 181,
            "weight": 75
          },
          {
            "id": 97,
            "first_name": "Ryan",
            "last_name": "Byrnes",
            "date_of_birth": "May 3, 2001",
            "afl_team_id": 15,
            "jumper_number": 31,
            "height": 181,
            "weight": 80
          },
          {
            "id": 98,
            "first_name": "Jack",
            "last_name": "Bytel",
            "date_of_birth": "March 14, 2000",
            "afl_team_id": 15,
            "jumper_number": 23,
            "height": 189,
            "weight": 78
          },
          {
            "id": 99,
            "first_name": "Josh",
            "last_name": "Caddy",
            "date_of_birth": "September 28, 1992",
            "afl_team_id": 14,
            "jumper_number": 22,
            "height": 186,
            "weight": 87
          },
          {
            "id": 100,
            "first_name": "Ned",
            "last_name": "Cahill",
            "date_of_birth": "January 11, 2001",
            "afl_team_id": 5,
            "jumper_number": 28,
            "height": 178,
            "weight": 77
          },
          {
            "id": 101,
            "first_name": "Jye",
            "last_name": "Caldwell",
            "date_of_birth": "September 28, 2000",
            "afl_team_id": 5,
            "jumper_number": 6,
            "height": 183,
            "weight": 82
          },
          {
            "id": 102,
            "first_name": "Charlie",
            "last_name": "Cameron",
            "date_of_birth": "July 5, 1994",
            "afl_team_id": 2,
            "jumper_number": 23,
            "height": 181,
            "weight": 74
          },
          {
            "id": 103,
            "first_name": "Darcy",
            "last_name": "Cameron",
            "date_of_birth": "July 18, 1995",
            "afl_team_id": 4,
            "jumper_number": 14,
            "height": 205,
            "weight": 103
          },
          {
            "id": 104,
            "first_name": "Jarrod",
            "last_name": "Cameron",
            "date_of_birth": "May 3, 2000",
            "afl_team_id": 17,
            "jumper_number": 39,
            "height": 182,
            "weight": 70
          },
          {
            "id": 105,
            "first_name": "Jeremy",
            "last_name": "Cameron",
            "date_of_birth": "April 1, 1993",
            "afl_team_id": 7,
            "jumper_number": 5,
            "height": 196,
            "weight": 96
          },
          {
            "id": 106,
            "first_name": "Braeden",
            "last_name": "Campbell",
            "date_of_birth": "February 4, 2002",
            "afl_team_id": 16,
            "jumper_number": 16,
            "height": 181,
            "weight": 73
          },
          {
            "id": 107,
            "first_name": "Tom",
            "last_name": "Campbell",
            "date_of_birth": "November 2, 1991",
            "afl_team_id": 12,
            "jumper_number": 42,
            "height": 201,
            "weight": 105
          },
          {
            "id": 108,
            "first_name": "Jake",
            "last_name": "Carlisle",
            "date_of_birth": "October 1, 1991",
            "afl_team_id": 15,
            "jumper_number": 2,
            "height": 200,
            "weight": 106
          },
          {
            "id": 109,
            "first_name": "Jack",
            "last_name": "Carroll",
            "date_of_birth": "December 20, 2002",
            "afl_team_id": 3,
            "jumper_number": 16,
            "height": 187,
            "weight": 76
          },
          {
            "id": 110,
            "first_name": "Malachy",
            "last_name": "Carruthers",
            "date_of_birth": "May 11, 2002",
            "afl_team_id": 16,
            "jumper_number": 40,
            "height": 184,
            "weight": 67
          },
          {
            "id": 111,
            "first_name": "Levi",
            "last_name": "Casboult",
            "date_of_birth": "March 15, 1990",
            "afl_team_id": 3,
            "jumper_number": 41,
            "height": 201,
            "weight": 101
          },
          {
            "id": 112,
            "first_name": "Jason",
            "last_name": "Castagna",
            "date_of_birth": "July 12, 1996",
            "afl_team_id": 14,
            "jumper_number": 11,
            "height": 181,
            "weight": 82
          },
          {
            "id": 113,
            "first_name": "Ben",
            "last_name": "Cavarra",
            "date_of_birth": "December 20, 1995",
            "afl_team_id": 18,
            "jumper_number": 25,
            "height": 173,
            "weight": 72
          },
          {
            "id": 114,
            "first_name": "Jonathon",
            "last_name": "Ceglar",
            "date_of_birth": "February 14, 1991",
            "afl_team_id": 10,
            "jumper_number": 18,
            "height": 204,
            "weight": 102
          },
          {
            "id": 115,
            "first_name": "Adam",
            "last_name": "Cerra",
            "date_of_birth": "October 7, 1999",
            "afl_team_id": 6,
            "jumper_number": 5,
            "height": 188,
            "weight": 84
          },
          {
            "id": 116,
            "first_name": "Kade",
            "last_name": "Chandler",
            "date_of_birth": "January 13, 2000",
            "afl_team_id": 11,
            "jumper_number": 37,
            "height": 174,
            "weight": 75
          },
          {
            "id": 117,
            "first_name": "Heath",
            "last_name": "Chapman",
            "date_of_birth": "January 31, 2002",
            "afl_team_id": 6,
            "jumper_number": 27,
            "height": 193,
            "weight": 81
          },
          {
            "id": 118,
            "first_name": "Mabior",
            "last_name": "Chol",
            "date_of_birth": "January 29, 1997",
            "afl_team_id": 14,
            "jumper_number": 41,
            "height": 200,
            "weight": 91
          },
          {
            "id": 119,
            "first_name": "Isaac",
            "last_name": "Chugg",
            "date_of_birth": "February 26, 2002",
            "afl_team_id": 4,
            "jumper_number": 34,
            "height": 180,
            "weight": 81
          },
          {
            "id": 120,
            "first_name": "Hunter",
            "last_name": "Clark",
            "date_of_birth": "March 26, 1999",
            "afl_team_id": 15,
            "jumper_number": 11,
            "height": 187,
            "weight": 82
          },
          {
            "id": 121,
            "first_name": "Jordan",
            "last_name": "Clark",
            "date_of_birth": "October 16, 2000",
            "afl_team_id": 7,
            "jumper_number": 6,
            "height": 185,
            "weight": 78
          },
          {
            "id": 122,
            "first_name": "Dylan",
            "last_name": "Clarke",
            "date_of_birth": "September 6, 1998",
            "afl_team_id": 5,
            "jumper_number": 37,
            "height": 187,
            "weight": 87
          },
          {
            "id": 123,
            "first_name": "Ryan",
            "last_name": "Clarke",
            "date_of_birth": "June 17, 1997",
            "afl_team_id": 16,
            "jumper_number": 4,
            "height": 186,
            "weight": 85
          },
          {
            "id": 124,
            "first_name": "Oscar",
            "last_name": "Clavarino",
            "date_of_birth": "May 22, 1999",
            "afl_team_id": 15,
            "jumper_number": 38,
            "height": 197,
            "weight": 89
          },
          {
            "id": 125,
            "first_name": "Bradley",
            "last_name": "Close",
            "date_of_birth": "July 30, 1998",
            "afl_team_id": 7,
            "jumper_number": 45,
            "height": 181,
            "weight": 68
          },
          {
            "id": 126,
            "first_name": "Tom",
            "last_name": "Clurey",
            "date_of_birth": "March 23, 1994",
            "afl_team_id": 13,
            "jumper_number": 17,
            "height": 193,
            "weight": 88
          },
          {
            "id": 127,
            "first_name": "Nakia",
            "last_name": "Cockatoo",
            "date_of_birth": "October 23, 1996",
            "afl_team_id": 2,
            "jumper_number": 12,
            "height": 186,
            "weight": 90
          },
          {
            "id": 128,
            "first_name": "Nicholas",
            "last_name": "Coffield",
            "date_of_birth": "October 23, 1999",
            "afl_team_id": 15,
            "jumper_number": 1,
            "height": 191,
            "weight": 86
          },
          {
            "id": 129,
            "first_name": "Tom",
            "last_name": "Cole",
            "date_of_birth": "May 28, 1997",
            "afl_team_id": 17,
            "jumper_number": 28,
            "height": 186,
            "weight": 81
          },
          {
            "id": 130,
            "first_name": "Blake",
            "last_name": "Coleman",
            "date_of_birth": "August 6, 2002",
            "afl_team_id": 2,
            "jumper_number": 34,
            "height": 180,
            "weight": 79
          },
          {
            "id": 131,
            "first_name": "Keidean",
            "last_name": "Coleman",
            "date_of_birth": "March 31, 2000",
            "afl_team_id": 2,
            "jumper_number": 18,
            "height": 183,
            "weight": 75
          },
          {
            "id": 132,
            "first_name": "Callum",
            "last_name": "Coleman-Jones",
            "date_of_birth": "June 13, 1999",
            "afl_team_id": 14,
            "jumper_number": 40,
            "height": 200,
            "weight": 102
          },
          {
            "id": 133,
            "first_name": "Mate",
            "last_name": "Colina",
            "date_of_birth": "May 20, 1999",
            "afl_team_id": 14,
            "jumper_number": 39,
            "height": 209,
            "weight": 111
          },
          {
            "id": 134,
            "first_name": "Riley",
            "last_name": "Collier-Dawkins",
            "date_of_birth": "February 3, 2000",
            "afl_team_id": 14,
            "jumper_number": 26,
            "height": 189,
            "weight": 89
          },
          {
            "id": 135,
            "first_name": "Samuel",
            "last_name": "Collins",
            "date_of_birth": "June 15, 1994",
            "afl_team_id": 8,
            "jumper_number": 25,
            "height": 194,
            "weight": 98
          },
          {
            "id": 136,
            "first_name": "Travis",
            "last_name": "Colyer",
            "date_of_birth": "August 24, 1991",
            "afl_team_id": 6,
            "jumper_number": 33,
            "height": 175,
            "weight": 77
          },
          {
            "id": 137,
            "first_name": "Charlie",
            "last_name": "Comben",
            "date_of_birth": "July 20, 2001",
            "afl_team_id": 12,
            "jumper_number": 30,
            "height": 199,
            "weight": 82
          },
          {
            "id": 138,
            "first_name": "Reece",
            "last_name": "Conca",
            "date_of_birth": "August 12, 1992",
            "afl_team_id": 6,
            "jumper_number": 6,
            "height": 181,
            "weight": 84
          },
          {
            "id": 139,
            "first_name": "Stephen",
            "last_name": "Coniglio",
            "date_of_birth": "December 15, 1993",
            "afl_team_id": 9,
            "jumper_number": 3,
            "height": 182,
            "weight": 86
          },
          {
            "id": 140,
            "first_name": "Leo",
            "last_name": "Connolly",
            "date_of_birth": "August 7, 2001",
            "afl_team_id": 15,
            "jumper_number": 37,
            "height": 181,
            "weight": 74
          },
          {
            "id": 141,
            "first_name": "Matt",
            "last_name": "Conroy",
            "date_of_birth": "July 11, 2000",
            "afl_team_id": 8,
            "jumper_number": 48,
            "height": 199,
            "weight": 85
          },
          {
            "id": 142,
            "first_name": "Charlie",
            "last_name": "Constable",
            "date_of_birth": "May 18, 1999",
            "afl_team_id": 7,
            "jumper_number": 18,
            "height": 191,
            "weight": 86
          },
          {
            "id": 143,
            "first_name": "Brayden",
            "last_name": "Cook",
            "date_of_birth": "July 18, 2002",
            "afl_team_id": 1,
            "jumper_number": 15,
            "height": 189,
            "weight": 80
          },
          {
            "id": 144,
            "first_name": "Josh",
            "last_name": "Corbett",
            "date_of_birth": "April 23, 1996",
            "afl_team_id": 8,
            "jumper_number": 19,
            "height": 190,
            "weight": 90
          },
          {
            "id": 145,
            "first_name": "Zaine",
            "last_name": "Cordy",
            "date_of_birth": "October 27, 1996",
            "afl_team_id": 18,
            "jumper_number": 12,
            "height": 193,
            "weight": 90
          },
          {
            "id": 146,
            "first_name": "Aidan",
            "last_name": "Corr",
            "date_of_birth": "May 17, 1994",
            "afl_team_id": 12,
            "jumper_number": 4,
            "height": 195,
            "weight": 97
          },
          {
            "id": 147,
            "first_name": "Trent",
            "last_name": "Cotchin",
            "date_of_birth": "April 7, 1990",
            "afl_team_id": 14,
            "jumper_number": 9,
            "height": 185,
            "weight": 86
          },
          {
            "id": 148,
            "first_name": "Matt",
            "last_name": "Cottrell",
            "date_of_birth": "February 29, 2000",
            "afl_team_id": 3,
            "jumper_number": 46,
            "height": 181,
            "weight": 72
          },
          {
            "id": 149,
            "first_name": "James",
            "last_name": "Cousins",
            "date_of_birth": "March 19, 1998",
            "afl_team_id": 10,
            "jumper_number": 24,
            "height": 185,
            "weight": 84
          },
          {
            "id": 150,
            "first_name": "Brennan",
            "last_name": "Cox",
            "date_of_birth": "August 13, 1998",
            "afl_team_id": 6,
            "jumper_number": 36,
            "height": 195,
            "weight": 99
          },
          {
            "id": 151,
            "first_name": "Mason",
            "last_name": "Cox",
            "date_of_birth": "March 14, 1991",
            "afl_team_id": 4,
            "jumper_number": 46,
            "height": 211,
            "weight": 105
          },
          {
            "id": 152,
            "first_name": "Nikolas",
            "last_name": "Cox",
            "date_of_birth": "January 15, 2002",
            "afl_team_id": 5,
            "jumper_number": 13,
            "height": 199,
            "weight": 82
          },
          {
            "id": 153,
            "first_name": "Jamie",
            "last_name": "Cripps",
            "date_of_birth": "April 23, 1992",
            "afl_team_id": 17,
            "jumper_number": 15,
            "height": 183,
            "weight": 84
          },
          {
            "id": 154,
            "first_name": "Patrick",
            "last_name": "Cripps",
            "date_of_birth": "March 18, 1995",
            "afl_team_id": 3,
            "jumper_number": 9,
            "height": 195,
            "weight": 92
          },
          {
            "id": 155,
            "first_name": "Jack",
            "last_name": "Crisp",
            "date_of_birth": "October 2, 1993",
            "afl_team_id": 4,
            "jumper_number": 25,
            "height": 190,
            "weight": 90
          },
          {
            "id": 156,
            "first_name": "Brad",
            "last_name": "Crouch",
            "date_of_birth": "January 14, 1994",
            "afl_team_id": 15,
            "jumper_number": 5,
            "height": 186,
            "weight": 85
          },
          {
            "id": 157,
            "first_name": "Matt",
            "last_name": "Crouch",
            "date_of_birth": "April 21, 1995",
            "afl_team_id": 1,
            "jumper_number": 5,
            "height": 182,
            "weight": 80
          },
          {
            "id": 158,
            "first_name": "Mitchell",
            "last_name": "Crowden",
            "date_of_birth": "April 28, 1999",
            "afl_team_id": 6,
            "jumper_number": 12,
            "height": 176,
            "weight": 84
          },
          {
            "id": 159,
            "first_name": "Hayden",
            "last_name": "Crozier",
            "date_of_birth": "December 24, 1993",
            "afl_team_id": 18,
            "jumper_number": 9,
            "height": 185,
            "weight": 79
          },
          {
            "id": 160,
            "first_name": "Noah",
            "last_name": "Cumberland",
            "date_of_birth": "March 15, 2001",
            "afl_team_id": 14,
            "jumper_number": 38,
            "height": 183,
            "weight": 79
          },
          {
            "id": 161,
            "first_name": "Isaac",
            "last_name": "Cumming",
            "date_of_birth": "August 11, 1998",
            "afl_team_id": 9,
            "jumper_number": 13,
            "height": 184,
            "weight": 83
          },
          {
            "id": 162,
            "first_name": "David",
            "last_name": "Cuningham",
            "date_of_birth": "March 30, 1997",
            "afl_team_id": 3,
            "jumper_number": 28,
            "height": 185,
            "weight": 85
          },
          {
            "id": 163,
            "first_name": "Harry",
            "last_name": "Cunningham",
            "date_of_birth": "December 6, 1993",
            "afl_team_id": 16,
            "jumper_number": 7,
            "height": 181,
            "weight": 78
          },
          {
            "id": 164,
            "first_name": "Ben",
            "last_name": "Cunnington",
            "date_of_birth": "June 30, 1991",
            "afl_team_id": 12,
            "jumper_number": 10,
            "height": 185,
            "weight": 88
          },
          {
            "id": 165,
            "first_name": "Charlie",
            "last_name": "Curnow",
            "date_of_birth": "February 3, 1997",
            "afl_team_id": 3,
            "jumper_number": 30,
            "height": 192,
            "weight": 96
          },
          {
            "id": 166,
            "first_name": "Edward",
            "last_name": "Curnow",
            "date_of_birth": "November 7, 1989",
            "afl_team_id": 3,
            "jumper_number": 35,
            "height": 180,
            "weight": 85
          },
          {
            "id": 167,
            "first_name": "Tom",
            "last_name": "Cutler",
            "date_of_birth": "February 20, 1995",
            "afl_team_id": 5,
            "jumper_number": 12,
            "height": 192,
            "weight": 92
          },
          {
            "id": 168,
            "first_name": "Luke",
            "last_name": "Dahlhaus",
            "date_of_birth": "August 21, 1992",
            "afl_team_id": 7,
            "jumper_number": 40,
            "height": 179,
            "weight": 77
          },
          {
            "id": 169,
            "first_name": "Josh",
            "last_name": "Daicos",
            "date_of_birth": "November 26, 1998",
            "afl_team_id": 4,
            "jumper_number": 7,
            "height": 178,
            "weight": 76
          },
          {
            "id": 170,
            "first_name": "Bailey",
            "last_name": "Dale",
            "date_of_birth": "July 22, 1996",
            "afl_team_id": 18,
            "jumper_number": 31,
            "height": 183,
            "weight": 82
          },
          {
            "id": 171,
            "first_name": "Patrick",
            "last_name": "Dangerfield",
            "date_of_birth": "April 5, 1990",
            "afl_team_id": 7,
            "jumper_number": 35,
            "height": 189,
            "weight": 92
          },
          {
            "id": 172,
            "first_name": "Caleb",
            "last_name": "Daniel",
            "date_of_birth": "July 7, 1996",
            "afl_team_id": 18,
            "jumper_number": 35,
            "height": 168,
            "weight": 72
          },
          {
            "id": 173,
            "first_name": "Brent",
            "last_name": "Daniels",
            "date_of_birth": "March 9, 1999",
            "afl_team_id": 9,
            "jumper_number": 16,
            "height": 170,
            "weight": 74
          },
          {
            "id": 174,
            "first_name": "Joe",
            "last_name": "Daniher",
            "date_of_birth": "March 4, 1994",
            "afl_team_id": 2,
            "jumper_number": 3,
            "height": 200,
            "weight": 99
          },
          {
            "id": 175,
            "first_name": "Sean",
            "last_name": "Darcy",
            "date_of_birth": "June 12, 1998",
            "afl_team_id": 6,
            "jumper_number": 4,
            "height": 202,
            "weight": 113
          },
          {
            "id": 176,
            "first_name": "Jack",
            "last_name": "Darling",
            "date_of_birth": "June 13, 1992",
            "afl_team_id": 17,
            "jumper_number": 27,
            "height": 191,
            "weight": 95
          },
          {
            "id": 177,
            "first_name": "Alex",
            "last_name": "Davies",
            "date_of_birth": "March 18, 2002",
            "afl_team_id": 8,
            "jumper_number": 30,
            "height": 191,
            "weight": 85
          },
          {
            "id": 178,
            "first_name": "Luke",
            "last_name": "Davies-Uniacke",
            "date_of_birth": "June 8, 1999",
            "afl_team_id": 12,
            "jumper_number": 9,
            "height": 188,
            "weight": 85
          },
          {
            "id": 179,
            "first_name": "Ben",
            "last_name": "Davis",
            "date_of_birth": "May 19, 1997",
            "afl_team_id": 1,
            "jumper_number": 40,
            "height": 187,
            "weight": 85
          },
          {
            "id": 180,
            "first_name": "Phil",
            "last_name": "Davis",
            "date_of_birth": "August 30, 1990",
            "afl_team_id": 9,
            "jumper_number": 1,
            "height": 197,
            "weight": 96
          },
          {
            "id": 181,
            "first_name": "Jordan",
            "last_name": "Dawson",
            "date_of_birth": "April 9, 1997",
            "afl_team_id": 16,
            "jumper_number": 34,
            "height": 192,
            "weight": 86
          },
          {
            "id": 182,
            "first_name": "Sam",
            "last_name": "Day",
            "date_of_birth": "September 6, 1992",
            "afl_team_id": 8,
            "jumper_number": 12,
            "height": 197,
            "weight": 104
          },
          {
            "id": 183,
            "first_name": "Will",
            "last_name": "Day",
            "date_of_birth": "June 5, 2001",
            "afl_team_id": 10,
            "jumper_number": 12,
            "height": 187,
            "weight": 70
          },
          {
            "id": 184,
            "first_name": "Matthew",
            "last_name": "De Boer",
            "date_of_birth": "March 10, 1990",
            "afl_team_id": 9,
            "jumper_number": 24,
            "height": 189,
            "weight": 87
          },
          {
            "id": 185,
            "first_name": "Jordan",
            "last_name": "De Goey",
            "date_of_birth": "March 15, 1996",
            "afl_team_id": 4,
            "jumper_number": 2,
            "height": 188,
            "weight": 92
          },
          {
            "id": 186,
            "first_name": "Sam",
            "last_name": "De Koning",
            "date_of_birth": "February 26, 2001",
            "afl_team_id": 7,
            "jumper_number": 16,
            "height": 200,
            "weight": 85
          },
          {
            "id": 187,
            "first_name": "Tom",
            "last_name": "De Koning",
            "date_of_birth": "July 16, 1999",
            "afl_team_id": 3,
            "jumper_number": 12,
            "height": 203,
            "weight": 97
          },
          {
            "id": 188,
            "first_name": "Charlie",
            "last_name": "Dixon",
            "date_of_birth": "September 23, 1990",
            "afl_team_id": 13,
            "jumper_number": 22,
            "height": 200,
            "weight": 105
          },
          {
            "id": 189,
            "first_name": "Sam",
            "last_name": "Docherty",
            "date_of_birth": "October 17, 1993",
            "afl_team_id": 3,
            "jumper_number": 15,
            "height": 187,
            "weight": 87
          },
          {
            "id": 190,
            "first_name": "Tom",
            "last_name": "Doedee",
            "date_of_birth": "March 1, 1997",
            "afl_team_id": 1,
            "jumper_number": 39,
            "height": 188,
            "weight": 88
          },
          {
            "id": 191,
            "first_name": "Paddy",
            "last_name": "Dow",
            "date_of_birth": "October 16, 1999",
            "afl_team_id": 3,
            "jumper_number": 2,
            "height": 187,
            "weight": 83
          },
          {
            "id": 192,
            "first_name": "Thomson",
            "last_name": "Dow",
            "date_of_birth": "October 16, 2001",
            "afl_team_id": 14,
            "jumper_number": 27,
            "height": 182,
            "weight": 72
          },
          {
            "id": 193,
            "first_name": "Connor",
            "last_name": "Downie",
            "date_of_birth": "May 31, 2002",
            "afl_team_id": 10,
            "jumper_number": 41,
            "height": 185,
            "weight": 82
          },
          {
            "id": 194,
            "first_name": "Sam",
            "last_name": "Draper",
            "date_of_birth": "September 28, 1998",
            "afl_team_id": 5,
            "jumper_number": 2,
            "height": 205,
            "weight": 107
          },
          {
            "id": 195,
            "first_name": "Willem",
            "last_name": "Drew",
            "date_of_birth": "October 1, 1998",
            "afl_team_id": 13,
            "jumper_number": 28,
            "height": 188,
            "weight": 78
          },
          {
            "id": 196,
            "first_name": "Liam",
            "last_name": "Duggan",
            "date_of_birth": "December 11, 1996",
            "afl_team_id": 17,
            "jumper_number": 14,
            "height": 184,
            "weight": 83
          },
          {
            "id": 197,
            "first_name": "Taylin",
            "last_name": "Duman",
            "date_of_birth": "April 18, 1998",
            "afl_team_id": 6,
            "jumper_number": 44,
            "height": 193,
            "weight": 83
          },
          {
            "id": 198,
            "first_name": "Trent",
            "last_name": "Dumont",
            "date_of_birth": "June 30, 1995",
            "afl_team_id": 12,
            "jumper_number": 14,
            "height": 186,
            "weight": 87
          },
          {
            "id": 199,
            "first_name": "Mitchell",
            "last_name": "Duncan",
            "date_of_birth": "June 10, 1991",
            "afl_team_id": 7,
            "jumper_number": 22,
            "height": 188,
            "weight": 88
          },
          {
            "id": 200,
            "first_name": "Josh",
            "last_name": "Dunkley",
            "date_of_birth": "January 9, 1997",
            "afl_team_id": 18,
            "jumper_number": 5,
            "height": 190,
            "weight": 88
          },
          {
            "id": 201,
            "first_name": "Luke",
            "last_name": "Dunstan",
            "date_of_birth": "January 29, 1995",
            "afl_team_id": 15,
            "jumper_number": 7,
            "height": 185,
            "weight": 84
          },
          {
            "id": 202,
            "first_name": "Corey",
            "last_name": "Durdin",
            "date_of_birth": "April 14, 2002",
            "afl_team_id": 3,
            "jumper_number": 29,
            "height": 173,
            "weight": 73
          },
          {
            "id": 203,
            "first_name": "Taylor",
            "last_name": "Duryea",
            "date_of_birth": "April 24, 1991",
            "afl_team_id": 18,
            "jumper_number": 15,
            "height": 179,
            "weight": 80
          },
          {
            "id": 204,
            "first_name": "Xavier",
            "last_name": "Duursma",
            "date_of_birth": "July 7, 2000",
            "afl_team_id": 13,
            "jumper_number": 7,
            "height": 186,
            "weight": 73
          },
          {
            "id": 205,
            "first_name": "Harry",
            "last_name": "Edwards",
            "date_of_birth": "October 1, 2000",
            "afl_team_id": 17,
            "jumper_number": 42,
            "height": 200,
            "weight": 87
          },
          {
            "id": 206,
            "first_name": "Luke",
            "last_name": "Edwards",
            "date_of_birth": "January 12, 2002",
            "afl_team_id": 17,
            "jumper_number": 16,
            "height": 188,
            "weight": 83
          },
          {
            "id": 207,
            "first_name": "Shane",
            "last_name": "Edwards",
            "date_of_birth": "October 25, 1988",
            "afl_team_id": 14,
            "jumper_number": 10,
            "height": 182,
            "weight": 80
          },
          {
            "id": 208,
            "first_name": "Jamie",
            "last_name": "Elliott",
            "date_of_birth": "August 21, 1992",
            "afl_team_id": 4,
            "jumper_number": 5,
            "height": 178,
            "weight": 81
          },
          {
            "id": 209,
            "first_name": "Brandon",
            "last_name": "Ellis",
            "date_of_birth": "August 3, 1993",
            "afl_team_id": 8,
            "jumper_number": 4,
            "height": 181,
            "weight": 82
          },
          {
            "id": 210,
            "first_name": "Cameron",
            "last_name": "Ellis-Yolmen",
            "date_of_birth": "January 28, 1993",
            "afl_team_id": 2,
            "jumper_number": 28,
            "height": 190,
            "weight": 96
          },
          {
            "id": 211,
            "first_name": "Timothy",
            "last_name": "English",
            "date_of_birth": "August 10, 1997",
            "afl_team_id": 18,
            "jumper_number": 44,
            "height": 205,
            "weight": 93
          },
          {
            "id": 212,
            "first_name": "Francis",
            "last_name": "Evans",
            "date_of_birth": "August 23, 2001",
            "afl_team_id": 7,
            "jumper_number": 31,
            "height": 182,
            "weight": 78
          },
          {
            "id": 213,
            "first_name": "Josh",
            "last_name": "Eyre",
            "date_of_birth": "October 24, 2002",
            "afl_team_id": 5,
            "jumper_number": 32,
            "height": 197,
            "weight": 85
          },
          {
            "id": 214,
            "first_name": "Orazio",
            "last_name": "Fantasia",
            "date_of_birth": "September 14, 1995",
            "afl_team_id": 13,
            "jumper_number": 13,
            "height": 178,
            "weight": 77
          },
          {
            "id": 215,
            "first_name": "Jy",
            "last_name": "Farrar",
            "date_of_birth": "December 7, 2001",
            "afl_team_id": 8,
            "jumper_number": 50,
            "height": 191,
            "weight": 79
          },
          {
            "id": 216,
            "first_name": "Kane",
            "last_name": "Farrell",
            "date_of_birth": "March 17, 1999",
            "afl_team_id": 13,
            "jumper_number": 24,
            "height": 182,
            "weight": 74
          },
          {
            "id": 217,
            "first_name": "Jeremy",
            "last_name": "Finlayson",
            "date_of_birth": "February 9, 1996",
            "afl_team_id": 9,
            "jumper_number": 31,
            "height": 196,
            "weight": 93
          },
          {
            "id": 218,
            "first_name": "Brayden",
            "last_name": "Fiorini",
            "date_of_birth": "August 22, 1997",
            "afl_team_id": 8,
            "jumper_number": 8,
            "height": 186,
            "weight": 82
          },
          {
            "id": 219,
            "first_name": "Zac",
            "last_name": "Fisher",
            "date_of_birth": "June 15, 1998",
            "afl_team_id": 3,
            "jumper_number": 25,
            "height": 177,
            "weight": 75
          },
          {
            "id": 220,
            "first_name": "Sam",
            "last_name": "Flanders",
            "date_of_birth": "July 24, 2001",
            "afl_team_id": 8,
            "jumper_number": 26,
            "height": 182,
            "weight": 81
          },
          {
            "id": 221,
            "first_name": "Cameron",
            "last_name": "Fleeton",
            "date_of_birth": "June 17, 2002",
            "afl_team_id": 9,
            "jumper_number": 29,
            "height": 192,
            "weight": 81
          },
          {
            "id": 222,
            "first_name": "Oliver",
            "last_name": "Florent",
            "date_of_birth": "July 22, 1998",
            "afl_team_id": 16,
            "jumper_number": 13,
            "height": 185,
            "weight": 81
          },
          {
            "id": 223,
            "first_name": "Matthew",
            "last_name": "Flynn",
            "date_of_birth": "September 13, 1997",
            "afl_team_id": 9,
            "jumper_number": 30,
            "height": 200,
            "weight": 103
          },
          {
            "id": 224,
            "first_name": "Darcy",
            "last_name": "Fogarty",
            "date_of_birth": "September 25, 1999",
            "afl_team_id": 1,
            "jumper_number": 32,
            "height": 193,
            "weight": 94
          },
          {
            "id": 225,
            "first_name": "Lachlan",
            "last_name": "Fogarty",
            "date_of_birth": "April 1, 1999",
            "afl_team_id": 3,
            "jumper_number": 8,
            "height": 180,
            "weight": 76
          },
          {
            "id": 226,
            "first_name": "Luke",
            "last_name": "Foley",
            "date_of_birth": "October 8, 1999",
            "afl_team_id": 17,
            "jumper_number": 29,
            "height": 188,
            "weight": 75
          },
          {
            "id": 227,
            "first_name": "Eddie",
            "last_name": "Ford",
            "date_of_birth": "June 21, 2002",
            "afl_team_id": 12,
            "jumper_number": 40,
            "height": 184,
            "weight": 73
          },
          {
            "id": 228,
            "first_name": "Darcy",
            "last_name": "Fort",
            "date_of_birth": "August 6, 1993",
            "afl_team_id": 7,
            "jumper_number": 28,
            "height": 204,
            "weight": 99
          },
          {
            "id": 229,
            "first_name": "Robbie",
            "last_name": "Fox",
            "date_of_birth": "April 16, 1993",
            "afl_team_id": 16,
            "jumper_number": 42,
            "height": 186,
            "weight": 86
          },
          {
            "id": 230,
            "first_name": "Billy",
            "last_name": "Frampton",
            "date_of_birth": "November 20, 1996",
            "afl_team_id": 1,
            "jumper_number": 22,
            "height": 200,
            "weight": 90
          },
          {
            "id": 231,
            "first_name": "Aaron",
            "last_name": "Francis",
            "date_of_birth": "August 10, 1997",
            "afl_team_id": 5,
            "jumper_number": 10,
            "height": 192,
            "weight": 90
          },
          {
            "id": 232,
            "first_name": "Lance",
            "last_name": "Franklin",
            "date_of_birth": "January 30, 1987",
            "afl_team_id": 16,
            "jumper_number": 23,
            "height": 199,
            "weight": 105
          },
          {
            "id": 233,
            "first_name": "James",
            "last_name": "Frawley",
            "date_of_birth": "September 20, 1988",
            "afl_team_id": 15,
            "jumper_number": 24,
            "height": 193,
            "weight": 96
          },
          {
            "id": 234,
            "first_name": "Martin",
            "last_name": "Frederick",
            "date_of_birth": "May 17, 2000",
            "afl_team_id": 13,
            "jumper_number": 45,
            "height": 178,
            "weight": 74
          },
          {
            "id": 235,
            "first_name": "Minairo",
            "last_name": "Frederick",
            "date_of_birth": "May 17, 2000",
            "afl_team_id": 6,
            "jumper_number": 43,
            "height": 183,
            "weight": 71
          },
          {
            "id": 236,
            "first_name": "Bayley",
            "last_name": "Fritsch",
            "date_of_birth": "December 6, 1996",
            "afl_team_id": 11,
            "jumper_number": 31,
            "height": 188,
            "weight": 82
          },
          {
            "id": 237,
            "first_name": "Sam",
            "last_name": "Frost",
            "date_of_birth": "August 28, 1993",
            "afl_team_id": 10,
            "jumper_number": 8,
            "height": 194,
            "weight": 93
          },
          {
            "id": 238,
            "first_name": "Tom",
            "last_name": "Fullarton",
            "date_of_birth": "February 23, 1999",
            "afl_team_id": 2,
            "jumper_number": 21,
            "height": 199,
            "weight": 92
          },
          {
            "id": 239,
            "first_name": "Aiden",
            "last_name": "Fyfe",
            "date_of_birth": "August 16, 2002",
            "afl_team_id": 8,
            "jumper_number": 33,
            "height": 190,
            "weight": 83
          },
          {
            "id": 240,
            "first_name": "Nathan",
            "last_name": "Fyfe",
            "date_of_birth": "September 18, 1991",
            "afl_team_id": 6,
            "jumper_number": 7,
            "height": 192,
            "weight": 96
          },
          {
            "id": 241,
            "first_name": "Andrew",
            "last_name": "Gaff",
            "date_of_birth": "June 16, 1992",
            "afl_team_id": 17,
            "jumper_number": 3,
            "height": 183,
            "weight": 85
          },
          {
            "id": 242,
            "first_name": "Riley",
            "last_name": "Garcia",
            "date_of_birth": "January 30, 2001",
            "afl_team_id": 18,
            "jumper_number": 38,
            "height": 177,
            "weight": 70
          },
          {
            "id": 243,
            "first_name": "Darcy",
            "last_name": "Gardiner",
            "date_of_birth": "September 22, 1995",
            "afl_team_id": 2,
            "jumper_number": 27,
            "height": 193,
            "weight": 92
          },
          {
            "id": 244,
            "first_name": "Ryan",
            "last_name": "Gardner",
            "date_of_birth": "June 1, 1997",
            "afl_team_id": 18,
            "jumper_number": 43,
            "height": 197,
            "weight": 93
          },
          {
            "id": 245,
            "first_name": "Joel",
            "last_name": "Garner",
            "date_of_birth": "May 21, 1999",
            "afl_team_id": 13,
            "jumper_number": 27,
            "height": 184,
            "weight": 83
          },
          {
            "id": 246,
            "first_name": "Taylor",
            "last_name": "Garner",
            "date_of_birth": "January 8, 1994",
            "afl_team_id": 12,
            "jumper_number": 6,
            "height": 187,
            "weight": 88
          },
          {
            "id": 247,
            "first_name": "Ryan",
            "last_name": "Garthwaite",
            "date_of_birth": "June 30, 1998",
            "afl_team_id": 14,
            "jumper_number": 42,
            "height": 192,
            "weight": 91
          },
          {
            "id": 248,
            "first_name": "Max",
            "last_name": "Gawn",
            "date_of_birth": "December 30, 1991",
            "afl_team_id": 11,
            "jumper_number": 11,
            "height": 208,
            "weight": 109
          },
          {
            "id": 249,
            "first_name": "Jarryn",
            "last_name": "Geary",
            "date_of_birth": "June 23, 1988",
            "afl_team_id": 15,
            "jumper_number": 14,
            "height": 183,
            "weight": 82
          },
          {
            "id": 250,
            "first_name": "Mitch",
            "last_name": "Georgiades",
            "date_of_birth": "September 28, 2001",
            "afl_team_id": 13,
            "jumper_number": 19,
            "height": 191,
            "weight": 78
          },
          {
            "id": 251,
            "first_name": "Michael",
            "last_name": "Gibbons",
            "date_of_birth": "May 15, 1995",
            "afl_team_id": 3,
            "jumper_number": 40,
            "height": 175,
            "weight": 75
          },
          {
            "id": 252,
            "first_name": "Bryce",
            "last_name": "Gibbs",
            "date_of_birth": "March 15, 1989",
            "afl_team_id": 1,
            "jumper_number": null,
            "height": 188,
            "weight": 84
          },
          {
            "id": 253,
            "first_name": "Jack",
            "last_name": "Ginnivan",
            "date_of_birth": "December 19, 2002",
            "afl_team_id": 4,
            "jumper_number": 33,
            "height": 183,
            "weight": 77
          },
          {
            "id": 254,
            "first_name": "Stefan",
            "last_name": "Giro",
            "date_of_birth": "March 10, 1999",
            "afl_team_id": 6,
            "jumper_number": 42,
            "height": 175,
            "weight": 77
          },
          {
            "id": 255,
            "first_name": "Martin",
            "last_name": "Gleeson",
            "date_of_birth": "August 25, 1994",
            "afl_team_id": 5,
            "jumper_number": 8,
            "height": 191,
            "weight": 86
          },
          {
            "id": 256,
            "first_name": "Tyson",
            "last_name": "Goldsack",
            "date_of_birth": "May 22, 1987",
            "afl_team_id": 13,
            "jumper_number": 50,
            "height": 193,
            "weight": 93
          },
          {
            "id": 257,
            "first_name": "Todd",
            "last_name": "Goldstein",
            "date_of_birth": "July 1, 1988",
            "afl_team_id": 12,
            "jumper_number": 22,
            "height": 201,
            "weight": 103
          },
          {
            "id": 258,
            "first_name": "Lachlan",
            "last_name": "Gollant",
            "date_of_birth": "September 12, 2001",
            "afl_team_id": 1,
            "jumper_number": 44,
            "height": 191,
            "weight": 72
          },
          {
            "id": 259,
            "first_name": "Will",
            "last_name": "Gould",
            "date_of_birth": "January 14, 2001",
            "afl_team_id": 16,
            "jumper_number": 17,
            "height": 191,
            "weight": 98
          },
          {
            "id": 260,
            "first_name": "Caleb",
            "last_name": "Graham",
            "date_of_birth": "September 12, 2000",
            "afl_team_id": 8,
            "jumper_number": 46,
            "height": 195,
            "weight": 92
          },
          {
            "id": 261,
            "first_name": "Jack",
            "last_name": "Graham",
            "date_of_birth": "February 25, 1998",
            "afl_team_id": 14,
            "jumper_number": 34,
            "height": 181,
            "weight": 82
          },
          {
            "id": 262,
            "first_name": "Denver",
            "last_name": "Grainger-Barras",
            "date_of_birth": "April 17, 2002",
            "afl_team_id": 10,
            "jumper_number": 38,
            "height": 195,
            "weight": 78
          },
          {
            "id": 263,
            "first_name": "Robbie",
            "last_name": "Gray",
            "date_of_birth": "March 30, 1988",
            "afl_team_id": 13,
            "jumper_number": 9,
            "height": 183,
            "weight": 84
          },
          {
            "id": 264,
            "first_name": "Sam",
            "last_name": "Gray",
            "date_of_birth": "February 1, 1992",
            "afl_team_id": 16,
            "jumper_number": 15,
            "height": 176,
            "weight": 75
          },
          {
            "id": 265,
            "first_name": "Damon",
            "last_name": "Greaves",
            "date_of_birth": "April 25, 2000",
            "afl_team_id": 10,
            "jumper_number": 30,
            "height": 186,
            "weight": 77
          },
          {
            "id": 266,
            "first_name": "Tom",
            "last_name": "Green",
            "date_of_birth": "January 23, 2001",
            "afl_team_id": 9,
            "jumper_number": 12,
            "height": 188,
            "weight": 85
          },
          {
            "id": 267,
            "first_name": "Toby",
            "last_name": "Greene",
            "date_of_birth": "September 25, 1993",
            "afl_team_id": 9,
            "jumper_number": 4,
            "height": 182,
            "weight": 83
          },
          {
            "id": 268,
            "first_name": "Hugh",
            "last_name": "Greenwood",
            "date_of_birth": "March 6, 1992",
            "afl_team_id": 8,
            "jumper_number": 1,
            "height": 191,
            "weight": 92
          },
          {
            "id": 269,
            "first_name": "Levi",
            "last_name": "Greenwood",
            "date_of_birth": "February 19, 1989",
            "afl_team_id": 4,
            "jumper_number": 19,
            "height": 181,
            "weight": 87
          },
          {
            "id": 270,
            "first_name": "Jade",
            "last_name": "Gresham",
            "date_of_birth": "August 24, 1997",
            "afl_team_id": 15,
            "jumper_number": 4,
            "height": 179,
            "weight": 79
          },
          {
            "id": 271,
            "first_name": "Dylan",
            "last_name": "Grimes",
            "date_of_birth": "July 16, 1991",
            "afl_team_id": 14,
            "jumper_number": 2,
            "height": 193,
            "weight": 90
          },
          {
            "id": 272,
            "first_name": "Brodie",
            "last_name": "Grundy",
            "date_of_birth": "April 15, 1994",
            "afl_team_id": 4,
            "jumper_number": 4,
            "height": 203,
            "weight": 100
          },
          {
            "id": 273,
            "first_name": "Matt",
            "last_name": "Guelfi",
            "date_of_birth": "August 14, 1997",
            "afl_team_id": 5,
            "jumper_number": 35,
            "height": 184,
            "weight": 85
          },
          {
            "id": 274,
            "first_name": "Errol",
            "last_name": "Gulden",
            "date_of_birth": "July 18, 2002",
            "afl_team_id": 16,
            "jumper_number": 21,
            "height": 175,
            "weight": 75
          },
          {
            "id": 275,
            "first_name": "Jack",
            "last_name": "Gunston",
            "date_of_birth": "October 16, 1991",
            "afl_team_id": 10,
            "jumper_number": 19,
            "height": 193,
            "weight": 87
          },
          {
            "id": 276,
            "first_name": "Cameron",
            "last_name": "Guthrie",
            "date_of_birth": "August 19, 1992",
            "afl_team_id": 7,
            "jumper_number": 29,
            "height": 187,
            "weight": 86
          },
          {
            "id": 277,
            "first_name": "Zach",
            "last_name": "Guthrie",
            "date_of_birth": "June 30, 1998",
            "afl_team_id": 7,
            "jumper_number": 39,
            "height": 187,
            "weight": 76
          },
          {
            "id": 278,
            "first_name": "Aaron",
            "last_name": "Hall",
            "date_of_birth": "November 9, 1990",
            "afl_team_id": 12,
            "jumper_number": 43,
            "height": 185,
            "weight": 85
          },
          {
            "id": 279,
            "first_name": "Brayden",
            "last_name": "Ham",
            "date_of_birth": "April 25, 1999",
            "afl_team_id": 5,
            "jumper_number": 33,
            "height": 181,
            "weight": 70
          },
          {
            "id": 280,
            "first_name": "Will",
            "last_name": "Hamill",
            "date_of_birth": "November 17, 2000",
            "afl_team_id": 1,
            "jumper_number": 17,
            "height": 186,
            "weight": 71
          },
          {
            "id": 281,
            "first_name": "Joel",
            "last_name": "Hamling",
            "date_of_birth": "April 9, 1993",
            "afl_team_id": 6,
            "jumper_number": 21,
            "height": 194,
            "weight": 92
          },
          {
            "id": 282,
            "first_name": "Mitchell",
            "last_name": "Hannan",
            "date_of_birth": "March 9, 1994",
            "afl_team_id": 18,
            "jumper_number": 29,
            "height": 189,
            "weight": 86
          },
          {
            "id": 283,
            "first_name": "Daniel",
            "last_name": "Hannebery",
            "date_of_birth": "February 24, 1991",
            "afl_team_id": 15,
            "jumper_number": 10,
            "height": 181,
            "weight": 80
          },
          {
            "id": 284,
            "first_name": "Oliver",
            "last_name": "Hanrahan",
            "date_of_birth": "August 27, 1998",
            "afl_team_id": 10,
            "jumper_number": 13,
            "height": 181,
            "weight": 75
          },
          {
            "id": 285,
            "first_name": "Jarrod",
            "last_name": "Harbrow",
            "date_of_birth": "July 18, 1988",
            "afl_team_id": 8,
            "jumper_number": 5,
            "height": 178,
            "weight": 73
          },
          {
            "id": 286,
            "first_name": "Blake",
            "last_name": "Hardwick",
            "date_of_birth": "February 5, 1997",
            "afl_team_id": 10,
            "jumper_number": 15,
            "height": 181,
            "weight": 79
          },
          {
            "id": 287,
            "first_name": "James",
            "last_name": "Harmes",
            "date_of_birth": "October 5, 1995",
            "afl_team_id": 11,
            "jumper_number": 4,
            "height": 185,
            "weight": 82
          },
          {
            "id": 288,
            "first_name": "Kyle",
            "last_name": "Hartigan",
            "date_of_birth": "November 7, 1991",
            "afl_team_id": 10,
            "jumper_number": 28,
            "height": 194,
            "weight": 98
          },
          {
            "id": 289,
            "first_name": "Hamish",
            "last_name": "Hartlett",
            "date_of_birth": "August 14, 1990",
            "afl_team_id": 13,
            "jumper_number": 8,
            "height": 185,
            "weight": 83
          },
          {
            "id": 290,
            "first_name": "Michael",
            "last_name": "Hartley",
            "date_of_birth": "June 7, 1993",
            "afl_team_id": 10,
            "jumper_number": 27,
            "height": 198,
            "weight": 104
          },
          {
            "id": 291,
            "first_name": "Jackson",
            "last_name": "Hately",
            "date_of_birth": "October 21, 2000",
            "afl_team_id": 1,
            "jumper_number": 6,
            "height": 190,
            "weight": 83
          },
          {
            "id": 292,
            "first_name": "Tom",
            "last_name": "Hawkins",
            "date_of_birth": "July 21, 1988",
            "afl_team_id": 7,
            "jumper_number": 26,
            "height": 198,
            "weight": 103
          },
          {
            "id": 293,
            "first_name": "Kyron",
            "last_name": "Hayden",
            "date_of_birth": "June 7, 1999",
            "afl_team_id": 12,
            "jumper_number": 37,
            "height": 186,
            "weight": 86
          },
          {
            "id": 294,
            "first_name": "Sam",
            "last_name": "Hayes",
            "date_of_birth": "June 9, 1999",
            "afl_team_id": 13,
            "jumper_number": 25,
            "height": 203,
            "weight": 93
          },
          {
            "id": 295,
            "first_name": "Will",
            "last_name": "Hayes",
            "date_of_birth": "June 5, 1995",
            "afl_team_id": 18,
            "jumper_number": 32,
            "height": 181,
            "weight": 77
          },
          {
            "id": 296,
            "first_name": "Nick",
            "last_name": "Haynes",
            "date_of_birth": "May 18, 1992",
            "afl_team_id": 9,
            "jumper_number": 19,
            "height": 193,
            "weight": 90
          },
          {
            "id": 297,
            "first_name": "Will",
            "last_name": "Hayward",
            "date_of_birth": "October 26, 1998",
            "afl_team_id": 16,
            "jumper_number": 9,
            "height": 187,
            "weight": 84
          },
          {
            "id": 298,
            "first_name": "Isaac",
            "last_name": "Heeney",
            "date_of_birth": "May 5, 1996",
            "afl_team_id": 16,
            "jumper_number": 5,
            "height": 186,
            "weight": 84
          },
          {
            "id": 299,
            "first_name": "Lachlan",
            "last_name": "Henderson",
            "date_of_birth": "December 14, 1989",
            "afl_team_id": 7,
            "jumper_number": 25,
            "height": 196,
            "weight": 98
          },
          {
            "id": 300,
            "first_name": "Jack",
            "last_name": "Henry",
            "date_of_birth": "August 29, 1998",
            "afl_team_id": 7,
            "jumper_number": 38,
            "height": 191,
            "weight": 92
          },
          {
            "id": 301,
            "first_name": "Liam",
            "last_name": "Henry",
            "date_of_birth": "August 28, 2001",
            "afl_team_id": 6,
            "jumper_number": 23,
            "height": 179,
            "weight": 67
          },
          {
            "id": 302,
            "first_name": "Oliver",
            "last_name": "Henry",
            "date_of_birth": "July 29, 2002",
            "afl_team_id": 4,
            "jumper_number": 35,
            "height": 186,
            "weight": 72
          },
          {
            "id": 303,
            "first_name": "Dyson",
            "last_name": "Heppell",
            "date_of_birth": "May 14, 1992",
            "afl_team_id": 5,
            "jumper_number": 21,
            "height": 189,
            "weight": 84
          },
          {
            "id": 304,
            "first_name": "George",
            "last_name": "Hewett",
            "date_of_birth": "December 29, 1995",
            "afl_team_id": 16,
            "jumper_number": 29,
            "height": 187,
            "weight": 84
          },
          {
            "id": 305,
            "first_name": "Michael",
            "last_name": "Hibberd",
            "date_of_birth": "January 3, 1990",
            "afl_team_id": 11,
            "jumper_number": 14,
            "height": 186,
            "weight": 90
          },
          {
            "id": 306,
            "first_name": "Tom",
            "last_name": "Hickey",
            "date_of_birth": "March 6, 1991",
            "afl_team_id": 16,
            "jumper_number": 31,
            "height": 201,
            "weight": 96
          },
          {
            "id": 307,
            "first_name": "Jack",
            "last_name": "Higgins",
            "date_of_birth": "March 19, 1999",
            "afl_team_id": 15,
            "jumper_number": 22,
            "height": 177,
            "weight": 78
          },
          {
            "id": 308,
            "first_name": "Shaun",
            "last_name": "Higgins",
            "date_of_birth": "March 4, 1988",
            "afl_team_id": 7,
            "jumper_number": 4,
            "height": 184,
            "weight": 89
          },
          {
            "id": 309,
            "first_name": "Tom",
            "last_name": "Highmore",
            "date_of_birth": "February 24, 1998",
            "afl_team_id": 15,
            "jumper_number": 34,
            "height": 192,
            "weight": 89
          },
          {
            "id": 310,
            "first_name": "Bradley",
            "last_name": "Hill",
            "date_of_birth": "July 9, 1993",
            "afl_team_id": 15,
            "jumper_number": 8,
            "height": 179,
            "weight": 79
          },
          {
            "id": 311,
            "first_name": "Ian",
            "last_name": "Hill",
            "date_of_birth": "February 9, 2000",
            "afl_team_id": 9,
            "jumper_number": 37,
            "height": 175,
            "weight": 66
          },
          {
            "id": 312,
            "first_name": "Stephen",
            "last_name": "Hill",
            "date_of_birth": "May 1, 1990",
            "afl_team_id": 6,
            "jumper_number": 32,
            "height": 183,
            "weight": 82
          },
          {
            "id": 313,
            "first_name": "Elliott",
            "last_name": "Himmelberg",
            "date_of_birth": "June 4, 1998",
            "afl_team_id": 1,
            "jumper_number": 34,
            "height": 198,
            "weight": 96
          },
          {
            "id": 314,
            "first_name": "Harrison",
            "last_name": "Himmelberg",
            "date_of_birth": "May 8, 1996",
            "afl_team_id": 9,
            "jumper_number": 27,
            "height": 194,
            "weight": 92
          },
          {
            "id": 315,
            "first_name": "Nick",
            "last_name": "Hind",
            "date_of_birth": "August 19, 1994",
            "afl_team_id": 5,
            "jumper_number": 19,
            "height": 180,
            "weight": 71
          },
          {
            "id": 316,
            "first_name": "Mitchell",
            "last_name": "Hinge",
            "date_of_birth": "June 26, 1998",
            "afl_team_id": 1,
            "jumper_number": 20,
            "height": 190,
            "weight": 84
          },
          {
            "id": 317,
            "first_name": "Eric",
            "last_name": "Hipwood",
            "date_of_birth": "September 13, 1997",
            "afl_team_id": 2,
            "jumper_number": 30,
            "height": 204,
            "weight": 90
          },
          {
            "id": 318,
            "first_name": "Tom",
            "last_name": "Hird",
            "date_of_birth": "March 28, 2001",
            "afl_team_id": 5,
            "jumper_number": 49,
            "height": 182,
            "weight": 70
          },
          {
            "id": 319,
            "first_name": "Jesse",
            "last_name": "Hogan",
            "date_of_birth": "February 12, 1995",
            "afl_team_id": 9,
            "jumper_number": 23,
            "height": 195,
            "weight": 99
          },
          {
            "id": 320,
            "first_name": "Elijah",
            "last_name": "Hollands",
            "date_of_birth": "April 25, 2002",
            "afl_team_id": 8,
            "jumper_number": 36,
            "height": 189,
            "weight": 80
          },
          {
            "id": 321,
            "first_name": "Nicholas",
            "last_name": "Holman",
            "date_of_birth": "May 29, 1995",
            "afl_team_id": 8,
            "jumper_number": 39,
            "height": 189,
            "weight": 87
          },
          {
            "id": 322,
            "first_name": "Max",
            "last_name": "Holmes",
            "date_of_birth": "August 29, 2002",
            "afl_team_id": 7,
            "jumper_number": 9,
            "height": 189,
            "weight": 74
          },
          {
            "id": 323,
            "first_name": "Jack",
            "last_name": "Hombsch",
            "date_of_birth": "March 7, 1993",
            "afl_team_id": 8,
            "jumper_number": 20,
            "height": 194,
            "weight": 89
          },
          {
            "id": 324,
            "first_name": "Josh",
            "last_name": "Honey",
            "date_of_birth": "October 17, 2001",
            "afl_team_id": 3,
            "jumper_number": 36,
            "height": 184,
            "weight": 79
          },
          {
            "id": 325,
            "first_name": "Cale",
            "last_name": "Hooker",
            "date_of_birth": "October 13, 1988",
            "afl_team_id": 5,
            "jumper_number": 26,
            "height": 198,
            "weight": 103
          },
          {
            "id": 326,
            "first_name": "Jacob",
            "last_name": "Hopper",
            "date_of_birth": "February 6, 1997",
            "afl_team_id": 9,
            "jumper_number": 2,
            "height": 187,
            "weight": 87
          },
          {
            "id": 327,
            "first_name": "Marty",
            "last_name": "Hore",
            "date_of_birth": "March 5, 1996",
            "afl_team_id": 11,
            "jumper_number": 21,
            "height": 190,
            "weight": 84
          },
          {
            "id": 328,
            "first_name": "Will",
            "last_name": "Hoskin-Elliott",
            "date_of_birth": "September 2, 1993",
            "afl_team_id": 4,
            "jumper_number": 32,
            "height": 186,
            "weight": 82
          },
          {
            "id": 329,
            "first_name": "Bachar",
            "last_name": "Houli",
            "date_of_birth": "May 12, 1988",
            "afl_team_id": 14,
            "jumper_number": 14,
            "height": 180,
            "weight": 83
          },
          {
            "id": 330,
            "first_name": "Dan",
            "last_name": "Houston",
            "date_of_birth": "May 12, 1997",
            "afl_team_id": 13,
            "jumper_number": 5,
            "height": 186,
            "weight": 83
          },
          {
            "id": 331,
            "first_name": "Dougal",
            "last_name": "Howard",
            "date_of_birth": "March 25, 1996",
            "afl_team_id": 15,
            "jumper_number": 20,
            "height": 199,
            "weight": 92
          },
          {
            "id": 332,
            "first_name": "Daniel",
            "last_name": "Howe",
            "date_of_birth": "December 4, 1995",
            "afl_team_id": 10,
            "jumper_number": 17,
            "height": 191,
            "weight": 87
          },
          {
            "id": 333,
            "first_name": "Jeremy",
            "last_name": "Howe",
            "date_of_birth": "June 29, 1990",
            "afl_team_id": 4,
            "jumper_number": 38,
            "height": 190,
            "weight": 86
          },
          {
            "id": 334,
            "first_name": "Ethan",
            "last_name": "Hughes",
            "date_of_birth": "December 7, 1994",
            "afl_team_id": 6,
            "jumper_number": 15,
            "height": 188,
            "weight": 89
          },
          {
            "id": 335,
            "first_name": "Jayden",
            "last_name": "Hunt",
            "date_of_birth": "April 3, 1995",
            "afl_team_id": 11,
            "jumper_number": 29,
            "height": 187,
            "weight": 82
          },
          {
            "id": 336,
            "first_name": "Lachlan",
            "last_name": "Hunter",
            "date_of_birth": "December 13, 1994",
            "afl_team_id": 18,
            "jumper_number": 7,
            "height": 183,
            "weight": 82
          },
          {
            "id": 337,
            "first_name": "Paul",
            "last_name": "Hunter",
            "date_of_birth": "February 9, 1993",
            "afl_team_id": 15,
            "jumper_number": 37,
            "height": 200,
            "weight": 104
          },
          {
            "id": 338,
            "first_name": "Michael",
            "last_name": "Hurley",
            "date_of_birth": "June 1, 1990",
            "afl_team_id": 5,
            "jumper_number": 18,
            "height": 192,
            "weight": 94
          },
          {
            "id": 339,
            "first_name": "Shannon",
            "last_name": "Hurn",
            "date_of_birth": "September 4, 1987",
            "afl_team_id": 17,
            "jumper_number": 25,
            "height": 187,
            "weight": 95
          },
          {
            "id": 340,
            "first_name": "Thomas",
            "last_name": "Hutchesson",
            "date_of_birth": "April 4, 1995",
            "afl_team_id": 9,
            "jumper_number": 20,
            "height": 177,
            "weight": 75
          },
          {
            "id": 341,
            "first_name": "Mark",
            "last_name": "Hutchings",
            "date_of_birth": "May 25, 1991",
            "afl_team_id": 17,
            "jumper_number": 34,
            "height": 182,
            "weight": 83
          },
          {
            "id": 342,
            "first_name": "Connor",
            "last_name": "Idun",
            "date_of_birth": "July 29, 2000",
            "afl_team_id": 9,
            "jumper_number": 39,
            "height": 191,
            "weight": 91
          },
          {
            "id": 343,
            "first_name": "Jarman",
            "last_name": "Impey",
            "date_of_birth": "July 9, 1995",
            "afl_team_id": 10,
            "jumper_number": 4,
            "height": 178,
            "weight": 82
          },
          {
            "id": 344,
            "first_name": "Luke",
            "last_name": "Jackson",
            "date_of_birth": "September 29, 2001",
            "afl_team_id": 11,
            "jumper_number": 6,
            "height": 198,
            "weight": 84
          },
          {
            "id": 345,
            "first_name": "Callum",
            "last_name": "Jamieson",
            "date_of_birth": "July 31, 2000",
            "afl_team_id": 17,
            "jumper_number": 40,
            "height": 200,
            "weight": 81
          },
          {
            "id": 346,
            "first_name": "Ben",
            "last_name": "Jarvis",
            "date_of_birth": "July 27, 2000",
            "afl_team_id": 7,
            "jumper_number": 10,
            "height": 189,
            "weight": 65
          },
          {
            "id": 347,
            "first_name": "Joel",
            "last_name": "Jeffrey",
            "date_of_birth": "March 12, 2002",
            "afl_team_id": 8,
            "jumper_number": 40,
            "height": 192,
            "weight": 78
          },
          {
            "id": 348,
            "first_name": "Emerson",
            "last_name": "Jeka",
            "date_of_birth": "September 18, 2001",
            "afl_team_id": 10,
            "jumper_number": 39,
            "height": 197,
            "weight": 87
          },
          {
            "id": 349,
            "first_name": "Josh",
            "last_name": "Jenkins",
            "date_of_birth": "February 8, 1989",
            "afl_team_id": 7,
            "jumper_number": 11,
            "height": 200,
            "weight": 108
          },
          {
            "id": 350,
            "first_name": "Neville",
            "last_name": "Jetta",
            "date_of_birth": "February 12, 1990",
            "afl_team_id": 11,
            "jumper_number": 39,
            "height": 180,
            "weight": 83
          },
          {
            "id": 351,
            "first_name": "Changkuoth",
            "last_name": "Jiath",
            "date_of_birth": "June 13, 1999",
            "afl_team_id": 10,
            "jumper_number": 29,
            "height": 185,
            "weight": 74
          },
          {
            "id": 352,
            "first_name": "Jason",
            "last_name": "Johannisen",
            "date_of_birth": "November 8, 1992",
            "afl_team_id": 18,
            "jumper_number": 39,
            "height": 180,
            "weight": 82
          },
          {
            "id": 353,
            "first_name": "Ben",
            "last_name": "Johnson",
            "date_of_birth": "March 6, 2001",
            "afl_team_id": 17,
            "jumper_number": 38,
            "height": 180,
            "weight": 65
          },
          {
            "id": 354,
            "first_name": "Lachlan",
            "last_name": "Johnson",
            "date_of_birth": "August 7, 2001",
            "afl_team_id": 5,
            "jumper_number": 36,
            "height": 176,
            "weight": 75
          },
          {
            "id": 355,
            "first_name": "Thomas",
            "last_name": "Jonas",
            "date_of_birth": "January 9, 1991",
            "afl_team_id": 13,
            "jumper_number": 1,
            "height": 188,
            "weight": 89
          },
          {
            "id": 356,
            "first_name": "Chayce",
            "last_name": "Jones",
            "date_of_birth": "January 14, 2000",
            "afl_team_id": 1,
            "jumper_number": 1,
            "height": 180,
            "weight": 77
          },
          {
            "id": 357,
            "first_name": "Harrison",
            "last_name": "Jones",
            "date_of_birth": "February 25, 2001",
            "afl_team_id": 5,
            "jumper_number": 23,
            "height": 194,
            "weight": 75
          },
          {
            "id": 358,
            "first_name": "Jamaine",
            "last_name": "Jones",
            "date_of_birth": "September 29, 1998",
            "afl_team_id": 17,
            "jumper_number": 31,
            "height": 180,
            "weight": 81
          },
          {
            "id": 359,
            "first_name": "Lachlan",
            "last_name": "Jones",
            "date_of_birth": "April 9, 2002",
            "afl_team_id": 13,
            "jumper_number": 34,
            "height": 186,
            "weight": 89
          },
          {
            "id": 360,
            "first_name": "Liam",
            "last_name": "Jones",
            "date_of_birth": "February 24, 1991",
            "afl_team_id": 3,
            "jumper_number": 14,
            "height": 199,
            "weight": 97
          },
          {
            "id": 361,
            "first_name": "Nathan",
            "last_name": "Jones",
            "date_of_birth": "January 20, 1988",
            "afl_team_id": 11,
            "jumper_number": 2,
            "height": 180,
            "weight": 87
          },
          {
            "id": 362,
            "first_name": "Zak",
            "last_name": "Jones",
            "date_of_birth": "March 15, 1995",
            "afl_team_id": 15,
            "jumper_number": 3,
            "height": 181,
            "weight": 80
          },
          {
            "id": 363,
            "first_name": "Lin",
            "last_name": "Jong",
            "date_of_birth": "June 4, 1993",
            "afl_team_id": 18,
            "jumper_number": 46,
            "height": 188,
            "weight": 87
          },
          {
            "id": 364,
            "first_name": "James",
            "last_name": "Jordan",
            "date_of_birth": "December 20, 2000",
            "afl_team_id": 11,
            "jumper_number": 23,
            "height": 186,
            "weight": 80
          },
          {
            "id": 365,
            "first_name": "Darragh",
            "last_name": "Joyce",
            "date_of_birth": "April 23, 1997",
            "afl_team_id": 15,
            "jumper_number": 39,
            "height": 195,
            "weight": 90
          },
          {
            "id": 366,
            "first_name": "Tom",
            "last_name": "Joyce",
            "date_of_birth": "March 7, 2000",
            "afl_team_id": 2,
            "jumper_number": 32,
            "height": 180,
            "weight": 86
          },
          {
            "id": 367,
            "first_name": "Buku",
            "last_name": "Khamis",
            "date_of_birth": "March 24, 2000",
            "afl_team_id": 18,
            "jumper_number": 24,
            "height": 189,
            "weight": 82
          },
          {
            "id": 368,
            "first_name": "Mark",
            "last_name": "Keane",
            "date_of_birth": null,
            "afl_team_id": 4,
            "jumper_number": 11,
            "height": 194,
            "weight": 92
          },
          {
            "id": 369,
            "first_name": "Alex",
            "last_name": "Keath",
            "date_of_birth": "January 20, 1992",
            "afl_team_id": 18,
            "jumper_number": 42,
            "height": 197,
            "weight": 93
          },
          {
            "id": 370,
            "first_name": "Ben",
            "last_name": "Keays",
            "date_of_birth": "February 23, 1997",
            "afl_team_id": 1,
            "jumper_number": 2,
            "height": 185,
            "weight": 89
          },
          {
            "id": 371,
            "first_name": "Lachlan",
            "last_name": "Keeffe",
            "date_of_birth": "April 14, 1990",
            "afl_team_id": 9,
            "jumper_number": 25,
            "height": 204,
            "weight": 102
          },
          {
            "id": 372,
            "first_name": "Jake",
            "last_name": "Kelly",
            "date_of_birth": "January 21, 1995",
            "afl_team_id": 1,
            "jumper_number": 8,
            "height": 190,
            "weight": 89
          },
          {
            "id": 373,
            "first_name": "Joshua",
            "last_name": "Kelly",
            "date_of_birth": "February 12, 1995",
            "afl_team_id": 9,
            "jumper_number": 22,
            "height": 184,
            "weight": 83
          },
          {
            "id": 374,
            "first_name": "Tim",
            "last_name": "Kelly",
            "date_of_birth": "July 26, 1994",
            "afl_team_id": 17,
            "jumper_number": 11,
            "height": 182,
            "weight": 81
          },
          {
            "id": 375,
            "first_name": "Will",
            "last_name": "Kelly",
            "date_of_birth": "August 16, 2000",
            "afl_team_id": 4,
            "jumper_number": 20,
            "height": 194,
            "weight": 84
          },
          {
            "id": 376,
            "first_name": "Brodie",
            "last_name": "Kemp",
            "date_of_birth": "May 1, 2001",
            "afl_team_id": 3,
            "jumper_number": 17,
            "height": 192,
            "weight": 82
          },
          {
            "id": 377,
            "first_name": "Adam",
            "last_name": "Kennedy",
            "date_of_birth": "July 12, 1992",
            "afl_team_id": 9,
            "jumper_number": 40,
            "height": 182,
            "weight": 80
          },
          {
            "id": 378,
            "first_name": "Josh P.",
            "last_name": "Kennedy",
            "date_of_birth": "June 20, 1988",
            "afl_team_id": 16,
            "jumper_number": 12,
            "height": 189,
            "weight": 97
          },
          {
            "id": 379,
            "first_name": "Joshua",
            "last_name": "Kennedy",
            "date_of_birth": "August 25, 1987",
            "afl_team_id": 17,
            "jumper_number": 17,
            "height": 196,
            "weight": 102
          },
          {
            "id": 380,
            "first_name": "Matthew",
            "last_name": "Kennedy",
            "date_of_birth": "April 6, 1997",
            "afl_team_id": 3,
            "jumper_number": 7,
            "height": 190,
            "weight": 88
          },
          {
            "id": 381,
            "first_name": "Dean",
            "last_name": "Kent",
            "date_of_birth": "February 24, 1994",
            "afl_team_id": 15,
            "jumper_number": 25,
            "height": 180,
            "weight": 85
          },
          {
            "id": 382,
            "first_name": "Ben",
            "last_name": "King",
            "date_of_birth": "July 7, 2000",
            "afl_team_id": 8,
            "jumper_number": 34,
            "height": 202,
            "weight": 87
          },
          {
            "id": 383,
            "first_name": "Max",
            "last_name": "King",
            "date_of_birth": "July 7, 2000",
            "afl_team_id": 15,
            "jumper_number": 12,
            "height": 202,
            "weight": 90
          },
          {
            "id": 384,
            "first_name": "Jake",
            "last_name": "Kolodjashnij",
            "date_of_birth": "August 9, 1995",
            "afl_team_id": 7,
            "jumper_number": 8,
            "height": 193,
            "weight": 94
          },
          {
            "id": 385,
            "first_name": "Jacob",
            "last_name": "Koschitzke",
            "date_of_birth": "July 11, 2000",
            "afl_team_id": 10,
            "jumper_number": 34,
            "height": 196,
            "weight": 94
          },
          {
            "id": 386,
            "first_name": "Nathan",
            "last_name": "Kreuger",
            "date_of_birth": "June 25, 1999",
            "afl_team_id": 7,
            "jumper_number": 15,
            "height": 196,
            "weight": 88
          },
          {
            "id": 387,
            "first_name": "Peter",
            "last_name": "Ladhams",
            "date_of_birth": "January 14, 1998",
            "afl_team_id": 13,
            "jumper_number": 38,
            "height": 202,
            "weight": 95
          },
          {
            "id": 388,
            "first_name": "Rory",
            "last_name": "Laird",
            "date_of_birth": "December 29, 1993",
            "afl_team_id": 1,
            "jumper_number": 29,
            "height": 177,
            "weight": 81
          },
          {
            "id": 389,
            "first_name": "Kane",
            "last_name": "Lambert",
            "date_of_birth": "November 26, 1991",
            "afl_team_id": 14,
            "jumper_number": 23,
            "height": 178,
            "weight": 77
          },
          {
            "id": 390,
            "first_name": "Ed",
            "last_name": "Langdon",
            "date_of_birth": "February 1, 1996",
            "afl_team_id": 11,
            "jumper_number": 15,
            "height": 182,
            "weight": 78
          },
          {
            "id": 391,
            "first_name": "Zac",
            "last_name": "Langdon",
            "date_of_birth": "November 13, 1995",
            "afl_team_id": 17,
            "jumper_number": 7,
            "height": 177,
            "weight": 81
          },
          {
            "id": 392,
            "first_name": "Kyle",
            "last_name": "Langford",
            "date_of_birth": "December 1, 1996",
            "afl_team_id": 5,
            "jumper_number": 4,
            "height": 191,
            "weight": 87
          },
          {
            "id": 393,
            "first_name": "Nick",
            "last_name": "Larkey",
            "date_of_birth": "June 6, 1998",
            "afl_team_id": 12,
            "jumper_number": 20,
            "height": 198,
            "weight": 93
          },
          {
            "id": 394,
            "first_name": "Bailey",
            "last_name": "Laurie",
            "date_of_birth": "March 24, 2002",
            "afl_team_id": 11,
            "jumper_number": 16,
            "height": 179,
            "weight": 78
          },
          {
            "id": 395,
            "first_name": "Jayden",
            "last_name": "Laverde",
            "date_of_birth": "April 12, 1996",
            "afl_team_id": 5,
            "jumper_number": 15,
            "height": 191,
            "weight": 91
          },
          {
            "id": 396,
            "first_name": "Charlie",
            "last_name": "Lazzaro",
            "date_of_birth": "March 25, 2002",
            "afl_team_id": 12,
            "jumper_number": 35,
            "height": 179,
            "weight": 73
          },
          {
            "id": 397,
            "first_name": "Sean",
            "last_name": "Lemmens",
            "date_of_birth": "November 2, 1994",
            "afl_team_id": 8,
            "jumper_number": 23,
            "height": 184,
            "weight": 84
          },
          {
            "id": 398,
            "first_name": "Ryan",
            "last_name": "Lester",
            "date_of_birth": "August 26, 1992",
            "afl_team_id": 2,
            "jumper_number": 35,
            "height": 192,
            "weight": 85
          },
          {
            "id": 399,
            "first_name": "Jake",
            "last_name": "Lever",
            "date_of_birth": "March 5, 1996",
            "afl_team_id": 11,
            "jumper_number": 8,
            "height": 195,
            "weight": 91
          },
          {
            "id": 400,
            "first_name": "Mitchell",
            "last_name": "Lewis",
            "date_of_birth": "October 14, 1998",
            "afl_team_id": 10,
            "jumper_number": 2,
            "height": 198,
            "weight": 95
          },
          {
            "id": 401,
            "first_name": "Thomas",
            "last_name": "Liberatore",
            "date_of_birth": "May 16, 1992",
            "afl_team_id": 18,
            "jumper_number": 21,
            "height": 183,
            "weight": 83
          },
          {
            "id": 402,
            "first_name": "Jarrod",
            "last_name": "Lienert",
            "date_of_birth": "August 5, 1994",
            "afl_team_id": 13,
            "jumper_number": 40,
            "height": 195,
            "weight": 88
          },
          {
            "id": 403,
            "first_name": "Matthew",
            "last_name": "Ling",
            "date_of_birth": "April 21, 1999",
            "afl_team_id": 16,
            "jumper_number": 19,
            "height": 184,
            "weight": 79
          },
          {
            "id": 404,
            "first_name": "Patrick",
            "last_name": "Lipinski",
            "date_of_birth": "July 17, 1998",
            "afl_team_id": 18,
            "jumper_number": 27,
            "height": 187,
            "weight": 84
          },
          {
            "id": 405,
            "first_name": "Daniel",
            "last_name": "Lloyd",
            "date_of_birth": "February 18, 1992",
            "afl_team_id": 9,
            "jumper_number": 38,
            "height": 187,
            "weight": 85
          },
          {
            "id": 406,
            "first_name": "Jake",
            "last_name": "Lloyd",
            "date_of_birth": "September 20, 1993",
            "afl_team_id": 16,
            "jumper_number": 44,
            "height": 181,
            "weight": 79
          },
          {
            "id": 407,
            "first_name": "Rory",
            "last_name": "Lobb",
            "date_of_birth": "February 9, 1993",
            "afl_team_id": 6,
            "jumper_number": 37,
            "height": 206,
            "weight": 106
          },
          {
            "id": 408,
            "first_name": "Jay",
            "last_name": "Lockhart",
            "date_of_birth": "February 3, 1996",
            "afl_team_id": 11,
            "jumper_number": 41,
            "height": 177,
            "weight": 75
          },
          {
            "id": 409,
            "first_name": "Griffin",
            "last_name": "Logue",
            "date_of_birth": "April 13, 1998",
            "afl_team_id": 6,
            "jumper_number": 2,
            "height": 193,
            "weight": 101
          },
          {
            "id": 410,
            "first_name": "Ben",
            "last_name": "Long",
            "date_of_birth": "August 21, 1997",
            "afl_team_id": 15,
            "jumper_number": 21,
            "height": 184,
            "weight": 79
          },
          {
            "id": 411,
            "first_name": "Jack",
            "last_name": "Lonie",
            "date_of_birth": "August 13, 1996",
            "afl_team_id": 15,
            "jumper_number": 13,
            "height": 175,
            "weight": 70
          },
          {
            "id": 412,
            "first_name": "Ollie",
            "last_name": "Lord",
            "date_of_birth": "January 2, 2002",
            "afl_team_id": 13,
            "jumper_number": 30,
            "height": 195,
            "weight": 84
          },
          {
            "id": 413,
            "first_name": "Jack",
            "last_name": "Lukosius",
            "date_of_birth": "August 9, 2000",
            "afl_team_id": 8,
            "jumper_number": 13,
            "height": 195,
            "weight": 83
          },
          {
            "id": 414,
            "first_name": "Scott",
            "last_name": "Lycett",
            "date_of_birth": "September 26, 1992",
            "afl_team_id": 13,
            "jumper_number": 29,
            "height": 203,
            "weight": 98
          },
          {
            "id": 415,
            "first_name": "Max",
            "last_name": "Lynch",
            "date_of_birth": "September 12, 1998",
            "afl_team_id": 4,
            "jumper_number": 15,
            "height": 200,
            "weight": 99
          },
          {
            "id": 416,
            "first_name": "Tom J.",
            "last_name": "Lynch",
            "date_of_birth": "October 31, 1992",
            "afl_team_id": 14,
            "jumper_number": 19,
            "height": 199,
            "weight": 99
          },
          {
            "id": 417,
            "first_name": "Tom",
            "last_name": "Lynch",
            "date_of_birth": "September 15, 1990",
            "afl_team_id": 1,
            "jumper_number": 27,
            "height": 193,
            "weight": 88
          },
          {
            "id": 418,
            "first_name": "Jarryd",
            "last_name": "Lyons",
            "date_of_birth": "July 22, 1992",
            "afl_team_id": 2,
            "jumper_number": 17,
            "height": 184,
            "weight": 84
          },
          {
            "id": 419,
            "first_name": "David",
            "last_name": "MacKay",
            "date_of_birth": "July 25, 1988",
            "afl_team_id": 1,
            "jumper_number": 14,
            "height": 181,
            "weight": 78
          },
          {
            "id": 420,
            "first_name": "Darcy",
            "last_name": "Macpherson",
            "date_of_birth": "October 29, 1997",
            "afl_team_id": 8,
            "jumper_number": 44,
            "height": 174,
            "weight": 78
          },
          {
            "id": 421,
            "first_name": "Finlay",
            "last_name": "Macrae",
            "date_of_birth": "March 13, 2002",
            "afl_team_id": 4,
            "jumper_number": 18,
            "height": 186,
            "weight": 78
          },
          {
            "id": 422,
            "first_name": "Jackson",
            "last_name": "Macrae",
            "date_of_birth": "August 3, 1994",
            "afl_team_id": 18,
            "jumper_number": 11,
            "height": 191,
            "weight": 85
          },
          {
            "id": 423,
            "first_name": "James",
            "last_name": "Madden",
            "date_of_birth": "November 15, 1999",
            "afl_team_id": 2,
            "jumper_number": 42,
            "height": 186,
            "weight": 85
          },
          {
            "id": 424,
            "first_name": "Jack",
            "last_name": "Madgen",
            "date_of_birth": "April 25, 1993",
            "afl_team_id": 4,
            "jumper_number": 44,
            "height": 192,
            "weight": 98
          },
          {
            "id": 425,
            "first_name": "Finn",
            "last_name": "Maginness",
            "date_of_birth": "February 23, 2001",
            "afl_team_id": 10,
            "jumper_number": 32,
            "height": 187,
            "weight": 80
          },
          {
            "id": 426,
            "first_name": "Jack",
            "last_name": "Mahony",
            "date_of_birth": "November 12, 2001",
            "afl_team_id": 12,
            "jumper_number": 1,
            "height": 176,
            "weight": 70
          },
          {
            "id": 427,
            "first_name": "Rhyan",
            "last_name": "Mansell",
            "date_of_birth": "June 4, 2000",
            "afl_team_id": 14,
            "jumper_number": null,
            "height": 180,
            "weight": 70
          },
          {
            "id": 428,
            "first_name": "Caleb",
            "last_name": "Marchbank",
            "date_of_birth": "December 7, 1996",
            "afl_team_id": 3,
            "jumper_number": 22,
            "height": 193,
            "weight": 93
          },
          {
            "id": 429,
            "first_name": "Oleg",
            "last_name": "Markov",
            "date_of_birth": "May 8, 1996",
            "afl_team_id": 8,
            "jumper_number": 17,
            "height": 188,
            "weight": 82
          },
          {
            "id": 430,
            "first_name": "Rowan",
            "last_name": "Marshall",
            "date_of_birth": "November 24, 1995",
            "afl_team_id": 15,
            "jumper_number": 19,
            "height": 201,
            "weight": 104
          },
          {
            "id": 431,
            "first_name": "Todd",
            "last_name": "Marshall",
            "date_of_birth": "October 8, 1998",
            "afl_team_id": 13,
            "jumper_number": 4,
            "height": 198,
            "weight": 87
          },
          {
            "id": 432,
            "first_name": "Dustin",
            "last_name": "Martin",
            "date_of_birth": "June 26, 1991",
            "afl_team_id": 14,
            "jumper_number": 4,
            "height": 187,
            "weight": 93
          },
          {
            "id": 433,
            "first_name": "Jack",
            "last_name": "Martin",
            "date_of_birth": "January 29, 1995",
            "afl_team_id": 3,
            "jumper_number": 21,
            "height": 186,
            "weight": 83
          },
          {
            "id": 434,
            "first_name": "Stefan",
            "last_name": "Martin",
            "date_of_birth": "November 17, 1986",
            "afl_team_id": 18,
            "jumper_number": 8,
            "height": 199,
            "weight": 104
          },
          {
            "id": 435,
            "first_name": "Will",
            "last_name": "Martyn",
            "date_of_birth": "March 29, 2001",
            "afl_team_id": 14,
            "jumper_number": 36,
            "height": 183,
            "weight": 73
          },
          {
            "id": 436,
            "first_name": "Rhys",
            "last_name": "Mathieson",
            "date_of_birth": "January 10, 1997",
            "afl_team_id": 2,
            "jumper_number": 36,
            "height": 188,
            "weight": 87
          },
          {
            "id": 437,
            "first_name": "Steven",
            "last_name": "May",
            "date_of_birth": "January 10, 1992",
            "afl_team_id": 11,
            "jumper_number": 1,
            "height": 193,
            "weight": 100
          },
          {
            "id": 438,
            "first_name": "Sam",
            "last_name": "Mayes",
            "date_of_birth": "May 20, 1994",
            "afl_team_id": 13,
            "jumper_number": 32,
            "height": 187,
            "weight": 84
          },
          {
            "id": 439,
            "first_name": "Brayden",
            "last_name": "Maynard",
            "date_of_birth": "September 20, 1996",
            "afl_team_id": 4,
            "jumper_number": 37,
            "height": 189,
            "weight": 90
          },
          {
            "id": 440,
            "first_name": "Christopher",
            "last_name": "Mayne",
            "date_of_birth": "November 2, 1988",
            "afl_team_id": 4,
            "jumper_number": 16,
            "height": 188,
            "weight": 84
          },
          {
            "id": 441,
            "first_name": "Shane",
            "last_name": "McAdam",
            "date_of_birth": "May 28, 1995",
            "afl_team_id": 1,
            "jumper_number": 23,
            "height": 181,
            "weight": 78
          },
          {
            "id": 442,
            "first_name": "Fischer",
            "last_name": "McAsey",
            "date_of_birth": "March 8, 2001",
            "afl_team_id": 1,
            "jumper_number": 3,
            "height": 197,
            "weight": 91
          },
          {
            "id": 443,
            "first_name": "Cian",
            "last_name": "McBride",
            "date_of_birth": "April 19, 2001",
            "afl_team_id": 5,
            "jumper_number": 41,
            "height": 197,
            "weight": 90
          },
          {
            "id": 444,
            "first_name": "Lincoln",
            "last_name": "McCarthy",
            "date_of_birth": "October 22, 1993",
            "afl_team_id": 2,
            "jumper_number": 11,
            "height": 176,
            "weight": 84
          },
          {
            "id": 445,
            "first_name": "Tom",
            "last_name": "McCartin",
            "date_of_birth": "December 30, 1999",
            "afl_team_id": 16,
            "jumper_number": 30,
            "height": 193,
            "weight": 89
          },
          {
            "id": 446,
            "first_name": "Hugh",
            "last_name": "McCluggage",
            "date_of_birth": "March 3, 1998",
            "afl_team_id": 2,
            "jumper_number": 6,
            "height": 187,
            "weight": 85
          },
          {
            "id": 447,
            "first_name": "Beau",
            "last_name": "McCreery",
            "date_of_birth": "April 19, 2001",
            "afl_team_id": 4,
            "jumper_number": 31,
            "height": 186,
            "weight": 80
          },
          {
            "id": 448,
            "first_name": "Logan",
            "last_name": "McDonald",
            "date_of_birth": "April 4, 2002",
            "afl_team_id": 16,
            "jumper_number": 6,
            "height": 196,
            "weight": 86
          },
          {
            "id": 449,
            "first_name": "Luke",
            "last_name": "McDonald",
            "date_of_birth": "February 9, 1995",
            "afl_team_id": 12,
            "jumper_number": 11,
            "height": 189,
            "weight": 89
          },
          {
            "id": 450,
            "first_name": "Tom",
            "last_name": "McDonald",
            "date_of_birth": "September 18, 1992",
            "afl_team_id": 11,
            "jumper_number": 25,
            "height": 194,
            "weight": 99
          },
          {
            "id": 451,
            "first_name": "Anthony",
            "last_name": "McDonald-Tipungwuti",
            "date_of_birth": "April 22, 1993",
            "afl_team_id": 5,
            "jumper_number": 43,
            "height": 171,
            "weight": 77
          },
          {
            "id": 452,
            "first_name": "Ben",
            "last_name": "McEvoy",
            "date_of_birth": "July 11, 1989",
            "afl_team_id": 10,
            "jumper_number": 7,
            "height": 200,
            "weight": 102
          },
          {
            "id": 453,
            "first_name": "Connor",
            "last_name": "McFadyen",
            "date_of_birth": "December 4, 2000",
            "afl_team_id": 2,
            "jumper_number": 26,
            "height": 190,
            "weight": 81
          },
          {
            "id": 454,
            "first_name": "Jeremy",
            "last_name": "McGovern",
            "date_of_birth": "April 15, 1992",
            "afl_team_id": 17,
            "jumper_number": 20,
            "height": 196,
            "weight": 99
          },
          {
            "id": 455,
            "first_name": "Mitch",
            "last_name": "McGovern",
            "date_of_birth": "October 11, 1994",
            "afl_team_id": 3,
            "jumper_number": 11,
            "height": 191,
            "weight": 93
          },
          {
            "id": 456,
            "first_name": "Andrew",
            "last_name": "McGrath",
            "date_of_birth": "June 2, 1998",
            "afl_team_id": 5,
            "jumper_number": 1,
            "height": 178,
            "weight": 83
          },
          {
            "id": 457,
            "first_name": "Matthew",
            "last_name": "McGuinness",
            "date_of_birth": "June 13, 2000",
            "afl_team_id": 12,
            "jumper_number": 41,
            "height": 192,
            "weight": 75
          },
          {
            "id": 458,
            "first_name": "Ned",
            "last_name": "McHenry",
            "date_of_birth": "July 13, 2000",
            "afl_team_id": 1,
            "jumper_number": 25,
            "height": 179,
            "weight": 70
          },
          {
            "id": 459,
            "first_name": "Justin",
            "last_name": "Mcinerney",
            "date_of_birth": "August 18, 2000",
            "afl_team_id": 16,
            "jumper_number": 27,
            "height": 187,
            "weight": 73
          },
          {
            "id": 460,
            "first_name": "Oscar",
            "last_name": "McInerney",
            "date_of_birth": "July 10, 1994",
            "afl_team_id": 2,
            "jumper_number": 46,
            "height": 205,
            "weight": 107
          },
          {
            "id": 461,
            "first_name": "Reef",
            "last_name": "McInnes",
            "date_of_birth": "December 12, 2002",
            "afl_team_id": 4,
            "jumper_number": 26,
            "height": 193,
            "weight": 86
          },
          {
            "id": 462,
            "first_name": "Kamdyn",
            "last_name": "Mcintosh",
            "date_of_birth": "April 3, 1994",
            "afl_team_id": 14,
            "jumper_number": 33,
            "height": 191,
            "weight": 91
          },
          {
            "id": 463,
            "first_name": "Ben",
            "last_name": "McKay",
            "date_of_birth": "December 24, 1997",
            "afl_team_id": 12,
            "jumper_number": 23,
            "height": 201,
            "weight": 95
          },
          {
            "id": 464,
            "first_name": "Harry",
            "last_name": "McKay",
            "date_of_birth": "December 24, 1997",
            "afl_team_id": 3,
            "jumper_number": 10,
            "height": 204,
            "weight": 99
          },
          {
            "id": 465,
            "first_name": "Daniel",
            "last_name": "McKenzie",
            "date_of_birth": "May 17, 1996",
            "afl_team_id": 15,
            "jumper_number": 36,
            "height": 185,
            "weight": 83
          },
          {
            "id": 466,
            "first_name": "Trent",
            "last_name": "McKenzie",
            "date_of_birth": "April 3, 1992",
            "afl_team_id": 13,
            "jumper_number": 12,
            "height": 191,
            "weight": 83
          },
          {
            "id": 467,
            "first_name": "Shaun",
            "last_name": "McKernan",
            "date_of_birth": "September 1, 1990",
            "afl_team_id": 15,
            "jumper_number": 27,
            "height": 196,
            "weight": 100
          },
          {
            "id": 468,
            "first_name": "Hayden",
            "last_name": "McLean",
            "date_of_birth": "January 20, 1999",
            "afl_team_id": 16,
            "jumper_number": 41,
            "height": 197,
            "weight": 93
          },
          {
            "id": 469,
            "first_name": "Toby",
            "last_name": "McLean",
            "date_of_birth": "January 31, 1996",
            "afl_team_id": 18,
            "jumper_number": 16,
            "height": 180,
            "weight": 79
          },
          {
            "id": 470,
            "first_name": "Jez",
            "last_name": "McLennan",
            "date_of_birth": "September 7, 2000",
            "afl_team_id": 8,
            "jumper_number": 43,
            "height": 185,
            "weight": 82
          },
          {
            "id": 471,
            "first_name": "Liam",
            "last_name": "McMahon",
            "date_of_birth": "May 2, 2002",
            "afl_team_id": 4,
            "jumper_number": 29,
            "height": 194,
            "weight": 80
          },
          {
            "id": 472,
            "first_name": "Lachlan",
            "last_name": "McNeil",
            "date_of_birth": "February 9, 2001",
            "afl_team_id": 18,
            "jumper_number": 30,
            "height": 182,
            "weight": 80
          },
          {
            "id": 473,
            "first_name": "Andrew",
            "last_name": "McPherson",
            "date_of_birth": "June 20, 1999",
            "afl_team_id": 1,
            "jumper_number": 36,
            "height": 186,
            "weight": 79
          },
          {
            "id": 474,
            "first_name": "Ross",
            "last_name": "McQuillan",
            "date_of_birth": "January 18, 1999",
            "afl_team_id": 5,
            "jumper_number": 39,
            "height": 188,
            "weight": 79
          },
          {
            "id": 475,
            "first_name": "Daniel",
            "last_name": "McStay",
            "date_of_birth": "June 24, 1995",
            "afl_team_id": 2,
            "jumper_number": 25,
            "height": 195,
            "weight": 100
          },
          {
            "id": 476,
            "first_name": "Jackson",
            "last_name": "Mead",
            "date_of_birth": "September 30, 2001",
            "afl_team_id": 13,
            "jumper_number": 44,
            "height": 184,
            "weight": 83
          },
          {
            "id": 477,
            "first_name": "Lloyd",
            "last_name": "Meek",
            "date_of_birth": "April 22, 1998",
            "afl_team_id": 6,
            "jumper_number": 22,
            "height": 203,
            "weight": 111
          },
          {
            "id": 478,
            "first_name": "Lewis",
            "last_name": "Melican",
            "date_of_birth": "November 4, 1996",
            "afl_team_id": 16,
            "jumper_number": 43,
            "height": 195,
            "weight": 98
          },
          {
            "id": 479,
            "first_name": "Jake",
            "last_name": "Melksham",
            "date_of_birth": "August 29, 1991",
            "afl_team_id": 11,
            "jumper_number": 18,
            "height": 186,
            "weight": 83
          },
          {
            "id": 480,
            "first_name": "Tim",
            "last_name": "Membrey",
            "date_of_birth": "May 26, 1994",
            "afl_team_id": 15,
            "jumper_number": 28,
            "height": 190,
            "weight": 89
          },
          {
            "id": 481,
            "first_name": "Connor",
            "last_name": "Menadue",
            "date_of_birth": "September 19, 1996",
            "afl_team_id": 12,
            "jumper_number": 31,
            "height": 187,
            "weight": 80
          },
          {
            "id": 482,
            "first_name": "Sam",
            "last_name": "Menegola",
            "date_of_birth": "March 7, 1992",
            "afl_team_id": 7,
            "jumper_number": 27,
            "height": 189,
            "weight": 89
          },
          {
            "id": 483,
            "first_name": "Zachary",
            "last_name": "Merrett",
            "date_of_birth": "October 3, 1995",
            "afl_team_id": 5,
            "jumper_number": 7,
            "height": 180,
            "weight": 83
          },
          {
            "id": 484,
            "first_name": "Carter",
            "last_name": "Michael",
            "date_of_birth": "May 22, 2002",
            "afl_team_id": 2,
            "jumper_number": 39,
            "height": 188,
            "weight": 74
          },
          {
            "id": 485,
            "first_name": "Gryan",
            "last_name": "Miers",
            "date_of_birth": "March 30, 1999",
            "afl_team_id": 7,
            "jumper_number": 32,
            "height": 178,
            "weight": 78
          },
          {
            "id": 486,
            "first_name": "Brody",
            "last_name": "Mihocek",
            "date_of_birth": "February 4, 1993",
            "afl_team_id": 4,
            "jumper_number": 41,
            "height": 192,
            "weight": 97
          },
          {
            "id": 487,
            "first_name": "Wayne",
            "last_name": "Milera",
            "date_of_birth": "September 14, 1997",
            "afl_team_id": 1,
            "jumper_number": 30,
            "height": 184,
            "weight": 81
          },
          {
            "id": 488,
            "first_name": "Ben",
            "last_name": "Miller",
            "date_of_birth": "August 31, 1999",
            "afl_team_id": 14,
            "jumper_number": 46,
            "height": 195,
            "weight": 95
          },
          {
            "id": 489,
            "first_name": "Touk",
            "last_name": "Miller",
            "date_of_birth": "February 22, 1996",
            "afl_team_id": 8,
            "jumper_number": 11,
            "height": 178,
            "weight": 83
          },
          {
            "id": 490,
            "first_name": "Callum",
            "last_name": "Mills",
            "date_of_birth": "April 2, 1997",
            "afl_team_id": 16,
            "jumper_number": 14,
            "height": 189,
            "weight": 83
          },
          {
            "id": 491,
            "first_name": "Seamus",
            "last_name": "Mitchell",
            "date_of_birth": "July 3, 2002",
            "afl_team_id": 10,
            "jumper_number": 40,
            "height": 181,
            "weight": 74
          },
          {
            "id": 492,
            "first_name": "Tom",
            "last_name": "Mitchell",
            "date_of_birth": "May 31, 1993",
            "afl_team_id": 10,
            "jumper_number": 3,
            "height": 182,
            "weight": 84
          },
          {
            "id": 493,
            "first_name": "Darcy",
            "last_name": "Moore",
            "date_of_birth": "January 25, 1996",
            "afl_team_id": 4,
            "jumper_number": 30,
            "height": 203,
            "weight": 100
          },
          {
            "id": 494,
            "first_name": "Dylan",
            "last_name": "Moore",
            "date_of_birth": "August 4, 1999",
            "afl_team_id": 10,
            "jumper_number": 36,
            "height": 176,
            "weight": 70
          },
          {
            "id": 495,
            "first_name": "Josh",
            "last_name": "Morris",
            "date_of_birth": "November 7, 2001",
            "afl_team_id": 10,
            "jumper_number": 35,
            "height": 186,
            "weight": 76
          },
          {
            "id": 496,
            "first_name": "Harry",
            "last_name": "Morrison",
            "date_of_birth": "November 12, 1998",
            "afl_team_id": 10,
            "jumper_number": 1,
            "height": 180,
            "weight": 79
          },
          {
            "id": 497,
            "first_name": "Irving",
            "last_name": "Mosquito",
            "date_of_birth": "August 24, 2000",
            "afl_team_id": 5,
            "jumper_number": 22,
            "height": 176,
            "weight": 72
          },
          {
            "id": 498,
            "first_name": "Steven",
            "last_name": "Motlop",
            "date_of_birth": "March 12, 1991",
            "afl_team_id": 13,
            "jumper_number": 6,
            "height": 183,
            "weight": 76
          },
          {
            "id": 499,
            "first_name": "Shane",
            "last_name": "Mumford",
            "date_of_birth": "July 5, 1986",
            "afl_team_id": 9,
            "jumper_number": 41,
            "height": 198,
            "weight": 105
          },
          {
            "id": 500,
            "first_name": "David",
            "last_name": "Mundy",
            "date_of_birth": "July 20, 1985",
            "afl_team_id": 6,
            "jumper_number": 16,
            "height": 193,
            "weight": 94
          },
          {
            "id": 501,
            "first_name": "Jordan",
            "last_name": "Murdoch",
            "date_of_birth": "March 23, 1992",
            "afl_team_id": 8,
            "jumper_number": 31,
            "height": 190,
            "weight": 87
          },
          {
            "id": 502,
            "first_name": "Lachlan",
            "last_name": "Murphy",
            "date_of_birth": "December 4, 1998",
            "afl_team_id": 1,
            "jumper_number": 4,
            "height": 176,
            "weight": 76
          },
          {
            "id": 503,
            "first_name": "Marc",
            "last_name": "Murphy",
            "date_of_birth": "July 19, 1987",
            "afl_team_id": 3,
            "jumper_number": 3,
            "height": 180,
            "weight": 80
          },
          {
            "id": 504,
            "first_name": "Nathan",
            "last_name": "Murphy",
            "date_of_birth": "December 15, 1999",
            "afl_team_id": 4,
            "jumper_number": 28,
            "height": 190,
            "weight": 85
          },
          {
            "id": 505,
            "first_name": "Patrick",
            "last_name": "Murtagh",
            "date_of_birth": "February 11, 2000",
            "afl_team_id": 8,
            "jumper_number": 42,
            "height": 196,
            "weight": 94
          },
          {
            "id": 506,
            "first_name": "Patrick",
            "last_name": "Naish",
            "date_of_birth": "January 15, 1999",
            "afl_team_id": 14,
            "jumper_number": 6,
            "height": 182,
            "weight": 75
          },
          {
            "id": 507,
            "first_name": "Sam",
            "last_name": "Naismith",
            "date_of_birth": "July 16, 1992",
            "afl_team_id": 16,
            "jumper_number": 10,
            "height": 206,
            "weight": 108
          },
          {
            "id": 508,
            "first_name": "Nicholas",
            "last_name": "Naitanui",
            "date_of_birth": "May 4, 1990",
            "afl_team_id": 17,
            "jumper_number": 9,
            "height": 201,
            "weight": 110
          },
          {
            "id": 509,
            "first_name": "Toby",
            "last_name": "Nankervis",
            "date_of_birth": "August 12, 1994",
            "afl_team_id": 14,
            "jumper_number": 25,
            "height": 199,
            "weight": 102
          },
          {
            "id": 510,
            "first_name": "Quinton",
            "last_name": "Narkle",
            "date_of_birth": "December 3, 1997",
            "afl_team_id": 7,
            "jumper_number": 19,
            "height": 181,
            "weight": 80
          },
          {
            "id": 511,
            "first_name": "Conor",
            "last_name": "Nash",
            "date_of_birth": "July 28, 1998",
            "afl_team_id": 10,
            "jumper_number": 11,
            "height": 197,
            "weight": 93
          },
          {
            "id": 512,
            "first_name": "Aaron",
            "last_name": "Naughton",
            "date_of_birth": "November 30, 1999",
            "afl_team_id": 18,
            "jumper_number": 33,
            "height": 195,
            "weight": 89
          },
          {
            "id": 513,
            "first_name": "Alex",
            "last_name": "Neal-Bullen",
            "date_of_birth": "January 9, 1996",
            "afl_team_id": 11,
            "jumper_number": 30,
            "height": 182,
            "weight": 80
          },
          {
            "id": 514,
            "first_name": "Lachie",
            "last_name": "Neale",
            "date_of_birth": "May 24, 1993",
            "afl_team_id": 2,
            "jumper_number": 9,
            "height": 177,
            "weight": 85
          },
          {
            "id": 515,
            "first_name": "Shannon",
            "last_name": "Neale",
            "date_of_birth": "July 25, 2002",
            "afl_team_id": 7,
            "jumper_number": 33,
            "height": 202,
            "weight": 91
          },
          {
            "id": 516,
            "first_name": "Jackson",
            "last_name": "Nelson",
            "date_of_birth": "March 15, 1996",
            "afl_team_id": 17,
            "jumper_number": 30,
            "height": 187,
            "weight": 85
          },
          {
            "id": 517,
            "first_name": "Tariek",
            "last_name": "Newchurch",
            "date_of_birth": "July 21, 2002",
            "afl_team_id": 1,
            "jumper_number": 42,
            "height": 182,
            "weight": 77
          },
          {
            "id": 518,
            "first_name": "Nic",
            "last_name": "Newman",
            "date_of_birth": "January 15, 1993",
            "afl_team_id": 3,
            "jumper_number": 24,
            "height": 187,
            "weight": 83
          },
          {
            "id": 519,
            "first_name": "Jack",
            "last_name": "Newnes",
            "date_of_birth": "February 24, 1993",
            "afl_team_id": 3,
            "jumper_number": 32,
            "height": 186,
            "weight": 82
          },
          {
            "id": 520,
            "first_name": "Rhys",
            "last_name": "Nicholls",
            "date_of_birth": "September 30, 2002",
            "afl_team_id": 8,
            "jumper_number": 38,
            "height": 187,
            "weight": 77
          },
          {
            "id": 521,
            "first_name": "Aaron",
            "last_name": "Nietschke",
            "date_of_birth": "May 26, 2000",
            "afl_team_id": 11,
            "jumper_number": 27,
            "height": 184,
            "weight": 82
          },
          {
            "id": 522,
            "first_name": "John",
            "last_name": "Noble",
            "date_of_birth": "March 25, 1997",
            "afl_team_id": 4,
            "jumper_number": 9,
            "height": 180,
            "weight": 72
          },
          {
            "id": 523,
            "first_name": "Bigoa",
            "last_name": "Nyuon",
            "date_of_birth": "May 18, 2001",
            "afl_team_id": 14,
            "jumper_number": 47,
            "height": 195,
            "weight": 87
          },
          {
            "id": 524,
            "first_name": "Lochie",
            "last_name": "O''Brien",
            "date_of_birth": "September 18, 1999",
            "afl_team_id": 3,
            "jumper_number": 4,
            "height": 185,
            "weight": 78
          },
          {
            "id": 525,
            "first_name": "Reilly",
            "last_name": "O''Brien",
            "date_of_birth": "August 20, 1995",
            "afl_team_id": 1,
            "jumper_number": 43,
            "height": 202,
            "weight": 101
          },
          {
            "id": 526,
            "first_name": "Tim",
            "last_name": "O''Brien",
            "date_of_birth": "March 28, 1994",
            "afl_team_id": 10,
            "jumper_number": 23,
            "height": 193,
            "weight": 90
          },
          {
            "id": 527,
            "first_name": "Barry",
            "last_name": "O''Connor",
            "date_of_birth": "June 26, 1998",
            "afl_team_id": 16,
            "jumper_number": 35,
            "height": 193,
            "weight": 92
          },
          {
            "id": 528,
            "first_name": "Mark",
            "last_name": "O''Connor",
            "date_of_birth": "January 17, 1997",
            "afl_team_id": 7,
            "jumper_number": 42,
            "height": 191,
            "weight": 87
          },
          {
            "id": 529,
            "first_name": "Ronin",
            "last_name": "O''Connor",
            "date_of_birth": "February 1, 2001",
            "afl_team_id": 1,
            "jumper_number": 37,
            "height": 191,
            "weight": 85
          },
          {
            "id": 530,
            "first_name": "Nathan",
            "last_name": "O''Driscoll",
            "date_of_birth": "May 17, 2002",
            "afl_team_id": 6,
            "jumper_number": 30,
            "height": 187,
            "weight": 78
          },
          {
            "id": 531,
            "first_name": "Hewago",
            "last_name": "Oea",
            "date_of_birth": "November 13, 2001",
            "afl_team_id": 8,
            "jumper_number": 47,
            "height": 174,
            "weight": 65
          },
          {
            "id": 532,
            "first_name": "Xavier",
            "last_name": "O''Halloran",
            "date_of_birth": "July 11, 2000",
            "afl_team_id": 9,
            "jumper_number": 33,
            "height": 186,
            "weight": 84
          },
          {
            "id": 533,
            "first_name": "Stefan",
            "last_name": "Okunbor",
            "date_of_birth": "August 12, 1998",
            "afl_team_id": 7,
            "jumper_number": 43,
            "height": 190,
            "weight": 87
          },
          {
            "id": 534,
            "first_name": "Clayton",
            "last_name": "Oliver",
            "date_of_birth": "July 22, 1997",
            "afl_team_id": 11,
            "jumper_number": 13,
            "height": 187,
            "weight": 85
          },
          {
            "id": 535,
            "first_name": "Jaeger",
            "last_name": "O''Meara",
            "date_of_birth": "February 23, 1994",
            "afl_team_id": 10,
            "jumper_number": 10,
            "height": 183,
            "weight": 82
          },
          {
            "id": 536,
            "first_name": "Xavier",
            "last_name": "O''Neill",
            "date_of_birth": "August 3, 2000",
            "afl_team_id": 17,
            "jumper_number": 24,
            "height": 185,
            "weight": 81
          },
          {
            "id": 537,
            "first_name": "Colin",
            "last_name": "O''Riordan",
            "date_of_birth": "October 12, 1995",
            "afl_team_id": 16,
            "jumper_number": 38,
            "height": 187,
            "weight": 87
          },
          {
            "id": 538,
            "first_name": "Matt",
            "last_name": "Owies",
            "date_of_birth": "March 19, 1997",
            "afl_team_id": 3,
            "jumper_number": 44,
            "height": 179,
            "weight": 84
          },
          {
            "id": 539,
            "first_name": "Tom",
            "last_name": "Papley",
            "date_of_birth": "July 13, 1996",
            "afl_team_id": 16,
            "jumper_number": 11,
            "height": 178,
            "weight": 76
          },
          {
            "id": 540,
            "first_name": "Brandan",
            "last_name": "Parfitt",
            "date_of_birth": "April 27, 1998",
            "afl_team_id": 7,
            "jumper_number": 3,
            "height": 180,
            "weight": 79
          },
          {
            "id": 541,
            "first_name": "Darcy",
            "last_name": "Parish",
            "date_of_birth": "July 25, 1997",
            "afl_team_id": 5,
            "jumper_number": 3,
            "height": 181,
            "weight": 77
          },
          {
            "id": 542,
            "first_name": "Luke",
            "last_name": "Parker",
            "date_of_birth": "October 25, 1992",
            "afl_team_id": 16,
            "jumper_number": 26,
            "height": 183,
            "weight": 87
          },
          {
            "id": 543,
            "first_name": "Luke",
            "last_name": "Parks",
            "date_of_birth": "April 18, 2001",
            "afl_team_id": 3,
            "jumper_number": 26,
            "height": 189,
            "weight": 93
          },
          {
            "id": 544,
            "first_name": "Jake",
            "last_name": "Pasini",
            "date_of_birth": "February 6, 2001",
            "afl_team_id": 13,
            "jumper_number": 48,
            "height": 192,
            "weight": 81
          },
          {
            "id": 545,
            "first_name": "Ben",
            "last_name": "Paton",
            "date_of_birth": "October 19, 1998",
            "afl_team_id": 15,
            "jumper_number": 33,
            "height": 187,
            "weight": 79
          },
          {
            "id": 546,
            "first_name": "Jonathon",
            "last_name": "Patton",
            "date_of_birth": "May 20, 1993",
            "afl_team_id": 10,
            "jumper_number": 25,
            "height": 198,
            "weight": 102
          },
          {
            "id": 547,
            "first_name": "Jack",
            "last_name": "Payne",
            "date_of_birth": "October 15, 1999",
            "afl_team_id": 2,
            "jumper_number": 40,
            "height": 197,
            "weight": 101
          },
          {
            "id": 548,
            "first_name": "Alex",
            "last_name": "Pearce",
            "date_of_birth": "June 9, 1995",
            "afl_team_id": 6,
            "jumper_number": 25,
            "height": 201,
            "weight": 101
          },
          {
            "id": 549,
            "first_name": "Luke",
            "last_name": "Pedlar",
            "date_of_birth": "May 17, 2002",
            "afl_team_id": 1,
            "jumper_number": 10,
            "height": 183,
            "weight": 80
          },
          {
            "id": 550,
            "first_name": "Scott",
            "last_name": "Pendlebury",
            "date_of_birth": "January 7, 1988",
            "afl_team_id": 4,
            "jumper_number": 10,
            "height": 191,
            "weight": 90
          },
          {
            "id": 551,
            "first_name": "Harry",
            "last_name": "Pepper",
            "date_of_birth": "August 9, 2001",
            "afl_team_id": 10,
            "jumper_number": 33,
            "height": 180,
            "weight": 83
          },
          {
            "id": 552,
            "first_name": "Flynn",
            "last_name": "Perez",
            "date_of_birth": "August 25, 2001",
            "afl_team_id": 12,
            "jumper_number": 39,
            "height": 187,
            "weight": 82
          },
          {
            "id": 553,
            "first_name": "Archie",
            "last_name": "Perkins",
            "date_of_birth": "March 26, 2002",
            "afl_team_id": 5,
            "jumper_number": 16,
            "height": 185,
            "weight": 87
          },
          {
            "id": 554,
            "first_name": "Harry",
            "last_name": "Perryman",
            "date_of_birth": "December 19, 1998",
            "afl_team_id": 9,
            "jumper_number": 36,
            "height": 184,
            "weight": 80
          },
          {
            "id": 555,
            "first_name": "Christian",
            "last_name": "Petracca",
            "date_of_birth": "January 4, 1996",
            "afl_team_id": 11,
            "jumper_number": 5,
            "height": 186,
            "weight": 96
          },
          {
            "id": 556,
            "first_name": "Sam",
            "last_name": "Petrevski-Seton",
            "date_of_birth": "February 19, 1998",
            "afl_team_id": 3,
            "jumper_number": 5,
            "height": 182,
            "weight": 78
          },
          {
            "id": 557,
            "first_name": "Jack",
            "last_name": "Petruccelle",
            "date_of_birth": "April 12, 1999",
            "afl_team_id": 17,
            "jumper_number": 21,
            "height": 185,
            "weight": 80
          },
          {
            "id": 558,
            "first_name": "Harrison",
            "last_name": "Petty",
            "date_of_birth": "November 12, 1999",
            "afl_team_id": 11,
            "jumper_number": 35,
            "height": 197,
            "weight": 89
          },
          {
            "id": 559,
            "first_name": "Andrew",
            "last_name": "Phillips",
            "date_of_birth": "July 3, 1991",
            "afl_team_id": 5,
            "jumper_number": 34,
            "height": 201,
            "weight": 98
          },
          {
            "id": 560,
            "first_name": "Tom",
            "last_name": "Phillips",
            "date_of_birth": "May 7, 1996",
            "afl_team_id": 10,
            "jumper_number": 16,
            "height": 187,
            "weight": 79
          },
          {
            "id": 561,
            "first_name": "Will",
            "last_name": "Phillips",
            "date_of_birth": "May 22, 2002",
            "afl_team_id": 12,
            "jumper_number": 29,
            "height": 180,
            "weight": 80
          },
          {
            "id": 562,
            "first_name": "Sam",
            "last_name": "Philp",
            "date_of_birth": "August 4, 2001",
            "afl_team_id": 3,
            "jumper_number": 34,
            "height": 185,
            "weight": 80
          },
          {
            "id": 563,
            "first_name": "Kysaiah",
            "last_name": "Pickett",
            "date_of_birth": "June 2, 2001",
            "afl_team_id": 11,
            "jumper_number": 36,
            "height": 170,
            "weight": 67
          },
          {
            "id": 564,
            "first_name": "Marlion",
            "last_name": "Pickett",
            "date_of_birth": "January 6, 1992",
            "afl_team_id": 14,
            "jumper_number": 50,
            "height": 184,
            "weight": 84
          },
          {
            "id": 565,
            "first_name": "Marc",
            "last_name": "Pittonet",
            "date_of_birth": "June 3, 1996",
            "afl_team_id": 3,
            "jumper_number": 27,
            "height": 202,
            "weight": 105
          },
          {
            "id": 566,
            "first_name": "Lachlan",
            "last_name": "Plowman",
            "date_of_birth": "September 11, 1994",
            "afl_team_id": 3,
            "jumper_number": 20,
            "height": 193,
            "weight": 90
          },
          {
            "id": 567,
            "first_name": "Jared",
            "last_name": "Polec",
            "date_of_birth": "October 12, 1992",
            "afl_team_id": 12,
            "jumper_number": 13,
            "height": 187,
            "weight": 84
          },
          {
            "id": 568,
            "first_name": "Caleb",
            "last_name": "Poulter",
            "date_of_birth": "October 12, 2002",
            "afl_team_id": 4,
            "jumper_number": 27,
            "height": 192,
            "weight": 79
          },
          {
            "id": 569,
            "first_name": "Tom",
            "last_name": "Powell",
            "date_of_birth": "March 2, 2002",
            "afl_team_id": 12,
            "jumper_number": 24,
            "height": 183,
            "weight": 74
          },
          {
            "id": 570,
            "first_name": "Wil",
            "last_name": "Powell",
            "date_of_birth": "August 26, 1999",
            "afl_team_id": 8,
            "jumper_number": 27,
            "height": 185,
            "weight": 76
          },
          {
            "id": 571,
            "first_name": "Sam",
            "last_name": "Powell-Pepper",
            "date_of_birth": "January 8, 1998",
            "afl_team_id": 13,
            "jumper_number": 2,
            "height": 187,
            "weight": 91
          },
          {
            "id": 572,
            "first_name": "Dion",
            "last_name": "Prestia",
            "date_of_birth": "October 12, 1992",
            "afl_team_id": 14,
            "jumper_number": 3,
            "height": 175,
            "weight": 82
          },
          {
            "id": 573,
            "first_name": "Braydon",
            "last_name": "Preuss",
            "date_of_birth": "June 16, 1995",
            "afl_team_id": 9,
            "jumper_number": 11,
            "height": 206,
            "weight": 114
          },
          {
            "id": 574,
            "first_name": "Jaxon",
            "last_name": "Prior",
            "date_of_birth": "June 4, 2001",
            "afl_team_id": 2,
            "jumper_number": 20,
            "height": 188,
            "weight": 79
          },
          {
            "id": 575,
            "first_name": "Isaac",
            "last_name": "Quaynor",
            "date_of_birth": "January 15, 2000",
            "afl_team_id": 4,
            "jumper_number": 3,
            "height": 180,
            "weight": 83
          },
          {
            "id": 576,
            "first_name": "Hugo",
            "last_name": "Ralphsmith",
            "date_of_birth": "November 9, 2001",
            "afl_team_id": 14,
            "jumper_number": 45,
            "height": 186,
            "weight": 70
          },
          {
            "id": 577,
            "first_name": "Dane",
            "last_name": "Rampe",
            "date_of_birth": "June 2, 1990",
            "afl_team_id": 16,
            "jumper_number": 24,
            "height": 187,
            "weight": 88
          },
          {
            "id": 578,
            "first_name": "Sam",
            "last_name": "Ramsay",
            "date_of_birth": "March 21, 2001",
            "afl_team_id": 3,
            "jumper_number": 33,
            "height": 180,
            "weight": 72
          },
          {
            "id": 579,
            "first_name": "Izak",
            "last_name": "Rankine",
            "date_of_birth": "April 23, 2000",
            "afl_team_id": 8,
            "jumper_number": 22,
            "height": 179,
            "weight": 76
          },
          {
            "id": 580,
            "first_name": "Jay",
            "last_name": "Rantall",
            "date_of_birth": "June 10, 2001",
            "afl_team_id": 4,
            "jumper_number": 1,
            "height": 184,
            "weight": 82
          },
          {
            "id": 581,
            "first_name": "Esava",
            "last_name": "Ratugolea",
            "date_of_birth": "July 24, 1998",
            "afl_team_id": 7,
            "jumper_number": 17,
            "height": 197,
            "weight": 102
          },
          {
            "id": 582,
            "first_name": "Cameron",
            "last_name": "Rayner",
            "date_of_birth": "October 21, 1999",
            "afl_team_id": 2,
            "jumper_number": 16,
            "height": 187,
            "weight": 90
          },
          {
            "id": 583,
            "first_name": "Jack",
            "last_name": "Redden",
            "date_of_birth": "December 9, 1990",
            "afl_team_id": 17,
            "jumper_number": 8,
            "height": 190,
            "weight": 85
          },
          {
            "id": 584,
            "first_name": "Mason",
            "last_name": "Redman",
            "date_of_birth": "August 26, 1997",
            "afl_team_id": 5,
            "jumper_number": 27,
            "height": 187,
            "weight": 87
          },
          {
            "id": 585,
            "first_name": "Ned",
            "last_name": "Reeves",
            "date_of_birth": "October 31, 1998",
            "afl_team_id": 10,
            "jumper_number": 37,
            "height": 208,
            "weight": 96
          },
          {
            "id": 586,
            "first_name": "Sam",
            "last_name": "Reid",
            "date_of_birth": "December 27, 1991",
            "afl_team_id": 16,
            "jumper_number": 20,
            "height": 196,
            "weight": 100
          },
          {
            "id": 587,
            "first_name": "Samuel",
            "last_name": "Reid",
            "date_of_birth": "November 7, 1989",
            "afl_team_id": 9,
            "jumper_number": 50,
            "height": 188,
            "weight": 85
          },
          {
            "id": 588,
            "first_name": "Zach",
            "last_name": "Reid",
            "date_of_birth": "March 2, 2002",
            "afl_team_id": 5,
            "jumper_number": 31,
            "height": 202,
            "weight": 82
          },
          {
            "id": 589,
            "first_name": "Jake",
            "last_name": "Riccardi",
            "date_of_birth": "November 7, 1999",
            "afl_team_id": 9,
            "jumper_number": 26,
            "height": 195,
            "weight": 92
          },
          {
            "id": 590,
            "first_name": "Daniel",
            "last_name": "Rich",
            "date_of_birth": "June 7, 1990",
            "afl_team_id": 2,
            "jumper_number": 10,
            "height": 183,
            "weight": 87
          },
          {
            "id": 591,
            "first_name": "Ed",
            "last_name": "Richards",
            "date_of_birth": "July 3, 1999",
            "afl_team_id": 18,
            "jumper_number": 20,
            "height": 185,
            "weight": 79
          },
          {
            "id": 592,
            "first_name": "Jordan",
            "last_name": "Ridley",
            "date_of_birth": "October 20, 1998",
            "afl_team_id": 5,
            "jumper_number": 14,
            "height": 192,
            "weight": 91
          },
          {
            "id": 593,
            "first_name": "Jack",
            "last_name": "Riewoldt",
            "date_of_birth": "October 31, 1988",
            "afl_team_id": 14,
            "jumper_number": 8,
            "height": 193,
            "weight": 92
          },
          {
            "id": 594,
            "first_name": "Daniel",
            "last_name": "Rioli",
            "date_of_birth": "April 16, 1997",
            "afl_team_id": 14,
            "jumper_number": 17,
            "height": 179,
            "weight": 76
          },
          {
            "id": 595,
            "first_name": "Maurice",
            "last_name": "Rioli",
            "date_of_birth": "September 1, 2002",
            "afl_team_id": 14,
            "jumper_number": 49,
            "height": 173,
            "weight": 73
          },
          {
            "id": 596,
            "first_name": "Willie",
            "last_name": "Rioli",
            "date_of_birth": "June 4, 1995",
            "afl_team_id": 17,
            "jumper_number": 44,
            "height": 175,
            "weight": 77
          },
          {
            "id": 597,
            "first_name": "Trent",
            "last_name": "Rivers",
            "date_of_birth": "July 30, 2001",
            "afl_team_id": 11,
            "jumper_number": 24,
            "height": 188,
            "weight": 85
          },
          {
            "id": 598,
            "first_name": "Dylan",
            "last_name": "Roberton",
            "date_of_birth": "June 21, 1991",
            "afl_team_id": 15,
            "jumper_number": 17,
            "height": 194,
            "weight": 94
          },
          {
            "id": 599,
            "first_name": "Deven",
            "last_name": "Robertson",
            "date_of_birth": "June 30, 2001",
            "afl_team_id": 2,
            "jumper_number": 2,
            "height": 182,
            "weight": 80
          },
          {
            "id": 600,
            "first_name": "Mitch",
            "last_name": "Robinson",
            "date_of_birth": "June 7, 1989",
            "afl_team_id": 2,
            "jumper_number": 5,
            "height": 184,
            "weight": 90
          },
          {
            "id": 601,
            "first_name": "Tom",
            "last_name": "Rockliff",
            "date_of_birth": "February 22, 1990",
            "afl_team_id": 13,
            "jumper_number": 11,
            "height": 185,
            "weight": 85
          },
          {
            "id": 602,
            "first_name": "Gary",
            "last_name": "Rohan",
            "date_of_birth": "June 7, 1991",
            "afl_team_id": 7,
            "jumper_number": 23,
            "height": 189,
            "weight": 92
          },
          {
            "id": 603,
            "first_name": "Ben",
            "last_name": "Ronke",
            "date_of_birth": "December 18, 1997",
            "afl_team_id": 16,
            "jumper_number": 25,
            "height": 183,
            "weight": 76
          },
          {
            "id": 604,
            "first_name": "Malcolm",
            "last_name": "Rosas",
            "date_of_birth": "June 27, 2001",
            "afl_team_id": 8,
            "jumper_number": 41,
            "height": 175,
            "weight": 70
          },
          {
            "id": 605,
            "first_name": "Fraser",
            "last_name": "Rosman",
            "date_of_birth": "May 30, 2002",
            "afl_team_id": 11,
            "jumper_number": 19,
            "height": 193,
            "weight": 81
          },
          {
            "id": 606,
            "first_name": "Jack",
            "last_name": "Ross",
            "date_of_birth": "September 3, 2000",
            "afl_team_id": 14,
            "jumper_number": 5,
            "height": 187,
            "weight": 85
          },
          {
            "id": 607,
            "first_name": "Sebastian",
            "last_name": "Ross",
            "date_of_birth": "May 7, 1993",
            "afl_team_id": 15,
            "jumper_number": 6,
            "height": 188,
            "weight": 88
          },
          {
            "id": 608,
            "first_name": "Josh",
            "last_name": "Rotham",
            "date_of_birth": "February 25, 1998",
            "afl_team_id": 17,
            "jumper_number": 35,
            "height": 193,
            "weight": 86
          },
          {
            "id": 609,
            "first_name": "Jordan",
            "last_name": "Roughead",
            "date_of_birth": "November 3, 1990",
            "afl_team_id": 4,
            "jumper_number": 23,
            "height": 200,
            "weight": 101
          },
          {
            "id": 610,
            "first_name": "James",
            "last_name": "Rowbottom",
            "date_of_birth": "September 19, 2000",
            "afl_team_id": 16,
            "jumper_number": 8,
            "height": 186,
            "weight": 78
          },
          {
            "id": 611,
            "first_name": "James",
            "last_name": "Rowe",
            "date_of_birth": "September 17, 1999",
            "afl_team_id": 1,
            "jumper_number": 31,
            "height": 173,
            "weight": 73
          },
          {
            "id": 612,
            "first_name": "Matt",
            "last_name": "Rowell",
            "date_of_birth": "July 1, 2001",
            "afl_team_id": 8,
            "jumper_number": 18,
            "height": 178,
            "weight": 74
          },
          {
            "id": 613,
            "first_name": "Connor",
            "last_name": "Rozee",
            "date_of_birth": "January 22, 2000",
            "afl_team_id": 13,
            "jumper_number": 20,
            "height": 185,
            "weight": 74
          },
          {
            "id": 614,
            "first_name": "Trey",
            "last_name": "Ruscoe",
            "date_of_birth": "November 3, 2001",
            "afl_team_id": 4,
            "jumper_number": 21,
            "height": 190,
            "weight": 90
          },
          {
            "id": 615,
            "first_name": "Liam",
            "last_name": "Ryan",
            "date_of_birth": "October 2, 1996",
            "afl_team_id": 17,
            "jumper_number": 1,
            "height": 179,
            "weight": 72
          },
          {
            "id": 616,
            "first_name": "Luke",
            "last_name": "Ryan",
            "date_of_birth": "February 6, 1996",
            "afl_team_id": 6,
            "jumper_number": 13,
            "height": 187,
            "weight": 92
          },
          {
            "id": 617,
            "first_name": "Samson",
            "last_name": "Ryan",
            "date_of_birth": "December 9, 2000",
            "afl_team_id": 14,
            "jumper_number": 32,
            "height": 206,
            "weight": 96
          },
          {
            "id": 618,
            "first_name": "Patrick",
            "last_name": "Ryder",
            "date_of_birth": "March 14, 1988",
            "afl_team_id": 15,
            "jumper_number": 18,
            "height": 197,
            "weight": 94
          },
          {
            "id": 619,
            "first_name": "Adam",
            "last_name": "Saad",
            "date_of_birth": "July 23, 1994",
            "afl_team_id": 3,
            "jumper_number": 42,
            "height": 178,
            "weight": 78
          },
          {
            "id": 620,
            "first_name": "Christian",
            "last_name": "Salem",
            "date_of_birth": "July 15, 1995",
            "afl_team_id": 11,
            "jumper_number": 3,
            "height": 183,
            "weight": 81
          },
          {
            "id": 621,
            "first_name": "Jack",
            "last_name": "Saunders",
            "date_of_birth": "February 11, 2002",
            "afl_team_id": 10,
            "jumper_number": 43,
            "height": 177,
            "weight": 73
          },
          {
            "id": 622,
            "first_name": "Josh",
            "last_name": "Schache",
            "date_of_birth": "August 21, 1997",
            "afl_team_id": 18,
            "jumper_number": 13,
            "height": 199,
            "weight": 94
          },
          {
            "id": 623,
            "first_name": "Harry",
            "last_name": "Schoenberg",
            "date_of_birth": "February 21, 2001",
            "afl_team_id": 1,
            "jumper_number": 26,
            "height": 180,
            "weight": 78
          },
          {
            "id": 624,
            "first_name": "Taj",
            "last_name": "Schofield",
            "date_of_birth": "September 7, 2002",
            "afl_team_id": 13,
            "jumper_number": 37,
            "height": 178,
            "weight": 72
          },
          {
            "id": 625,
            "first_name": "Lachlan",
            "last_name": "Schultz",
            "date_of_birth": "November 30, 1997",
            "afl_team_id": 6,
            "jumper_number": 28,
            "height": 178,
            "weight": 78
          },
          {
            "id": 626,
            "first_name": "Anthony",
            "last_name": "Scott",
            "date_of_birth": "February 28, 1995",
            "afl_team_id": 18,
            "jumper_number": null,
            "height": 180,
            "weight": 76
          },
          {
            "id": 627,
            "first_name": "Bailey",
            "last_name": "Scott",
            "date_of_birth": "July 9, 2000",
            "afl_team_id": 12,
            "jumper_number": 8,
            "height": 186,
            "weight": 73
          },
          {
            "id": 628,
            "first_name": "Jack",
            "last_name": "Scrimshaw",
            "date_of_birth": "September 4, 1998",
            "afl_team_id": 10,
            "jumper_number": 14,
            "height": 193,
            "weight": 88
          },
          {
            "id": 629,
            "first_name": "Tom",
            "last_name": "Scully",
            "date_of_birth": "May 15, 1991",
            "afl_team_id": 10,
            "jumper_number": 21,
            "height": 181,
            "weight": 80
          },
          {
            "id": 630,
            "first_name": "Paul",
            "last_name": "Seedsman",
            "date_of_birth": "January 22, 1992",
            "afl_team_id": 1,
            "jumper_number": 11,
            "height": 190,
            "weight": 87
          },
          {
            "id": 631,
            "first_name": "Joel",
            "last_name": "Selwood",
            "date_of_birth": "May 26, 1988",
            "afl_team_id": 7,
            "jumper_number": 14,
            "height": 183,
            "weight": 84
          },
          {
            "id": 632,
            "first_name": "Caleb",
            "last_name": "Serong",
            "date_of_birth": "February 9, 2001",
            "afl_team_id": 6,
            "jumper_number": 3,
            "height": 178,
            "weight": 83
          },
          {
            "id": 633,
            "first_name": "Will",
            "last_name": "Setterfield",
            "date_of_birth": "February 5, 1998",
            "afl_team_id": 3,
            "jumper_number": 43,
            "height": 192,
            "weight": 87
          },
          {
            "id": 634,
            "first_name": "Alex",
            "last_name": "Sexton",
            "date_of_birth": "December 3, 1993",
            "afl_team_id": 8,
            "jumper_number": 6,
            "height": 186,
            "weight": 83
          },
          {
            "id": 635,
            "first_name": "Harry",
            "last_name": "Sharp",
            "date_of_birth": "December 17, 2002",
            "afl_team_id": 2,
            "jumper_number": 22,
            "height": 183,
            "weight": 69
          },
          {
            "id": 636,
            "first_name": "Jeremy",
            "last_name": "Sharp",
            "date_of_birth": "August 13, 2001",
            "afl_team_id": 8,
            "jumper_number": 37,
            "height": 187,
            "weight": 79
          },
          {
            "id": 637,
            "first_name": "Will",
            "last_name": "Shaw",
            "date_of_birth": "June 14, 2001",
            "afl_team_id": 9,
            "jumper_number": 35,
            "height": 180,
            "weight": 70
          },
          {
            "id": 638,
            "first_name": "Marc",
            "last_name": "Sheather",
            "date_of_birth": "June 11, 2002",
            "afl_team_id": 16,
            "jumper_number": 33,
            "height": 185,
            "weight": 84
          },
          {
            "id": 639,
            "first_name": "Dominic",
            "last_name": "Sheed",
            "date_of_birth": "April 10, 1995",
            "afl_team_id": 17,
            "jumper_number": 4,
            "height": 185,
            "weight": 87
          },
          {
            "id": 640,
            "first_name": "Bradley",
            "last_name": "Sheppard",
            "date_of_birth": "May 23, 1991",
            "afl_team_id": 17,
            "jumper_number": 5,
            "height": 187,
            "weight": 85
          },
          {
            "id": 641,
            "first_name": "Dylan",
            "last_name": "Shiel",
            "date_of_birth": "March 9, 1993",
            "afl_team_id": 5,
            "jumper_number": 9,
            "height": 182,
            "weight": 83
          },
          {
            "id": 642,
            "first_name": "Liam",
            "last_name": "Shiels",
            "date_of_birth": "April 29, 1991",
            "afl_team_id": 10,
            "jumper_number": 26,
            "height": 183,
            "weight": 84
          },
          {
            "id": 643,
            "first_name": "Nicholas",
            "last_name": "Shipley",
            "date_of_birth": "June 25, 1999",
            "afl_team_id": 9,
            "jumper_number": 34,
            "height": 188,
            "weight": 92
          },
          {
            "id": 644,
            "first_name": "Lachlan",
            "last_name": "Sholl",
            "date_of_birth": "March 7, 2000",
            "afl_team_id": 1,
            "jumper_number": 38,
            "height": 185,
            "weight": 77
          },
          {
            "id": 645,
            "first_name": "Jayden",
            "last_name": "Short",
            "date_of_birth": "January 24, 1996",
            "afl_team_id": 14,
            "jumper_number": 15,
            "height": 178,
            "weight": 76
          },
          {
            "id": 646,
            "first_name": "Luke",
            "last_name": "Shuey",
            "date_of_birth": "June 2, 1990",
            "afl_team_id": 17,
            "jumper_number": 13,
            "height": 183,
            "weight": 90
          },
          {
            "id": 647,
            "first_name": "James",
            "last_name": "Sicily",
            "date_of_birth": "January 6, 1995",
            "afl_team_id": 10,
            "jumper_number": 6,
            "height": 186,
            "weight": 87
          },
          {
            "id": 648,
            "first_name": "Steele",
            "last_name": "Sidebottom",
            "date_of_birth": "January 2, 1991",
            "afl_team_id": 4,
            "jumper_number": 22,
            "height": 184,
            "weight": 85
          },
          {
            "id": 649,
            "first_name": "Brayden",
            "last_name": "Sier",
            "date_of_birth": "December 12, 1997",
            "afl_team_id": 4,
            "jumper_number": 36,
            "height": 191,
            "weight": 88
          },
          {
            "id": 650,
            "first_name": "Jack",
            "last_name": "Silvagni",
            "date_of_birth": "December 17, 1997",
            "afl_team_id": 3,
            "jumper_number": 1,
            "height": 194,
            "weight": 89
          },
          {
            "id": 651,
            "first_name": "Jy",
            "last_name": "Simpkin",
            "date_of_birth": "March 5, 1998",
            "afl_team_id": 12,
            "jumper_number": 12,
            "height": 182,
            "weight": 75
          },
          {
            "id": 652,
            "first_name": "Sam",
            "last_name": "Simpson",
            "date_of_birth": "June 14, 1998",
            "afl_team_id": 7,
            "jumper_number": 37,
            "height": 180,
            "weight": 74
          },
          {
            "id": 653,
            "first_name": "Callum",
            "last_name": "Sinclair",
            "date_of_birth": "September 23, 1989",
            "afl_team_id": 16,
            "jumper_number": 18,
            "height": 200,
            "weight": 96
          },
          {
            "id": 654,
            "first_name": "Jack",
            "last_name": "Sinclair",
            "date_of_birth": "February 12, 1995",
            "afl_team_id": 15,
            "jumper_number": 35,
            "height": 181,
            "weight": 81
          },
          {
            "id": 655,
            "first_name": "Rory",
            "last_name": "Sloane",
            "date_of_birth": "March 17, 1990",
            "afl_team_id": 1,
            "jumper_number": 9,
            "height": 182,
            "weight": 83
          },
          {
            "id": 656,
            "first_name": "Archie",
            "last_name": "Smith",
            "date_of_birth": "July 19, 1995",
            "afl_team_id": 2,
            "jumper_number": 44,
            "height": 203,
            "weight": 104
          },
          {
            "id": 657,
            "first_name": "Bailey",
            "last_name": "Smith",
            "date_of_birth": "December 7, 2000",
            "afl_team_id": 18,
            "jumper_number": 6,
            "height": 185,
            "weight": 80
          },
          {
            "id": 658,
            "first_name": "Brock",
            "last_name": "Smith",
            "date_of_birth": "March 13, 2001",
            "afl_team_id": 2,
            "jumper_number": 1,
            "height": 188,
            "weight": 81
          },
          {
            "id": 659,
            "first_name": "Brodie",
            "last_name": "Smith",
            "date_of_birth": "January 14, 1992",
            "afl_team_id": 1,
            "jumper_number": 33,
            "height": 189,
            "weight": 90
          },
          {
            "id": 660,
            "first_name": "Devon",
            "last_name": "Smith",
            "date_of_birth": "May 20, 1993",
            "afl_team_id": 5,
            "jumper_number": 5,
            "height": 174,
            "weight": 77
          },
          {
            "id": 661,
            "first_name": "Ely",
            "last_name": "Smith",
            "date_of_birth": "September 13, 2000",
            "afl_team_id": 2,
            "jumper_number": 8,
            "height": 187,
            "weight": 86
          },
          {
            "id": 662,
            "first_name": "Henry",
            "last_name": "Smith",
            "date_of_birth": "September 24, 2002",
            "afl_team_id": 2,
            "jumper_number": 19,
            "height": 204,
            "weight": 96
          },
          {
            "id": 663,
            "first_name": "Isaac",
            "last_name": "Smith",
            "date_of_birth": "December 30, 1988",
            "afl_team_id": 7,
            "jumper_number": 7,
            "height": 188,
            "weight": 83
          },
          {
            "id": 664,
            "first_name": "Joel",
            "last_name": "Smith",
            "date_of_birth": "February 25, 1996",
            "afl_team_id": 11,
            "jumper_number": 44,
            "height": 191,
            "weight": 87
          },
          {
            "id": 665,
            "first_name": "Roarke",
            "last_name": "Smith",
            "date_of_birth": "September 11, 1996",
            "afl_team_id": 18,
            "jumper_number": 37,
            "height": 181,
            "weight": 81
          },
          {
            "id": 666,
            "first_name": "Zac",
            "last_name": "Smith",
            "date_of_birth": "February 22, 1990",
            "afl_team_id": 8,
            "jumper_number": 32,
            "height": 206,
            "weight": 105
          },
          {
            "id": 667,
            "first_name": "Will",
            "last_name": "Snelling",
            "date_of_birth": "August 6, 1997",
            "afl_team_id": 5,
            "jumper_number": 40,
            "height": 175,
            "weight": 70
          },
          {
            "id": 668,
            "first_name": "Ivan",
            "last_name": "Soldo",
            "date_of_birth": "April 14, 1996",
            "afl_team_id": 14,
            "jumper_number": 20,
            "height": 204,
            "weight": 106
          },
          {
            "id": 669,
            "first_name": "Charlie",
            "last_name": "Spargo",
            "date_of_birth": "November 25, 1999",
            "afl_team_id": 11,
            "jumper_number": 9,
            "height": 173,
            "weight": 71
          },
          {
            "id": 670,
            "first_name": "Tom",
            "last_name": "Sparrow",
            "date_of_birth": "May 31, 2000",
            "afl_team_id": 11,
            "jumper_number": 32,
            "height": 183,
            "weight": 82
          },
          {
            "id": 671,
            "first_name": "Phoenix",
            "last_name": "Spicer",
            "date_of_birth": "January 30, 2002",
            "afl_team_id": 12,
            "jumper_number": 36,
            "height": 173,
            "weight": 64
          },
          {
            "id": 672,
            "first_name": "Zachary",
            "last_name": "Sproule",
            "date_of_birth": "May 12, 1998",
            "afl_team_id": 9,
            "jumper_number": 28,
            "height": 197,
            "weight": 92
          },
          {
            "id": 673,
            "first_name": "Sydney",
            "last_name": "Stack",
            "date_of_birth": "April 28, 2000",
            "afl_team_id": 14,
            "jumper_number": 44,
            "height": 179,
            "weight": 72
          },
          {
            "id": 674,
            "first_name": "Rhys",
            "last_name": "Stanley",
            "date_of_birth": "December 1, 1990",
            "afl_team_id": 7,
            "jumper_number": 1,
            "height": 200,
            "weight": 102
          },
          {
            "id": 675,
            "first_name": "Brandon",
            "last_name": "Starcevich",
            "date_of_birth": "July 24, 1999",
            "afl_team_id": 2,
            "jumper_number": 37,
            "height": 188,
            "weight": 88
          },
          {
            "id": 676,
            "first_name": "Jack",
            "last_name": "Steele",
            "date_of_birth": "December 13, 1995",
            "afl_team_id": 15,
            "jumper_number": 9,
            "height": 187,
            "weight": 90
          },
          {
            "id": 677,
            "first_name": "Jake",
            "last_name": "Stein",
            "date_of_birth": "January 17, 1994",
            "afl_team_id": 9,
            "jumper_number": 42,
            "height": 195,
            "weight": 95
          },
          {
            "id": 678,
            "first_name": "Tyson",
            "last_name": "Stengle",
            "date_of_birth": "October 19, 1998",
            "afl_team_id": 1,
            "jumper_number": 18,
            "height": 172,
            "weight": 73
          },
          {
            "id": 679,
            "first_name": "Cooper",
            "last_name": "Stephens",
            "date_of_birth": "January 17, 2001",
            "afl_team_id": 7,
            "jumper_number": 12,
            "height": 188,
            "weight": 83
          },
          {
            "id": 680,
            "first_name": "Dylan",
            "last_name": "Stephens",
            "date_of_birth": "January 8, 2001",
            "afl_team_id": 16,
            "jumper_number": 3,
            "height": 183,
            "weight": 69
          },
          {
            "id": 681,
            "first_name": "Jaidyn",
            "last_name": "Stephenson",
            "date_of_birth": "January 15, 1999",
            "afl_team_id": 12,
            "jumper_number": 2,
            "height": 188,
            "weight": 78
          },
          {
            "id": 682,
            "first_name": "Nick",
            "last_name": "Stevens",
            "date_of_birth": "March 23, 2002",
            "afl_team_id": 7,
            "jumper_number": 21,
            "height": 192,
            "weight": 84
          },
          {
            "id": 683,
            "first_name": "James",
            "last_name": "Stewart",
            "date_of_birth": "March 4, 1994",
            "afl_team_id": 5,
            "jumper_number": 17,
            "height": 199,
            "weight": 96
          },
          {
            "id": 684,
            "first_name": "Thomas",
            "last_name": "Stewart",
            "date_of_birth": "March 15, 1993",
            "afl_team_id": 7,
            "jumper_number": 44,
            "height": 190,
            "weight": 88
          },
          {
            "id": 685,
            "first_name": "Liam",
            "last_name": "Stocker",
            "date_of_birth": "January 23, 2000",
            "afl_team_id": 3,
            "jumper_number": 13,
            "height": 184,
            "weight": 83
          },
          {
            "id": 686,
            "first_name": "Conor",
            "last_name": "Stone",
            "date_of_birth": "April 22, 2002",
            "afl_team_id": 9,
            "jumper_number": 18,
            "height": 188,
            "weight": 81
          },
          {
            "id": 687,
            "first_name": "Kieran",
            "last_name": "Strachan",
            "date_of_birth": "October 5, 1995",
            "afl_team_id": 1,
            "jumper_number": 45,
            "height": 204,
            "weight": 95
          },
          {
            "id": 688,
            "first_name": "Jake",
            "last_name": "Stringer",
            "date_of_birth": "April 25, 1994",
            "afl_team_id": 5,
            "jumper_number": 25,
            "height": 192,
            "weight": 95
          },
          {
            "id": 689,
            "first_name": "Sam",
            "last_name": "Sturt",
            "date_of_birth": "May 12, 2000",
            "afl_team_id": 6,
            "jumper_number": 1,
            "height": 189,
            "weight": 72
          },
          {
            "id": 690,
            "first_name": "David",
            "last_name": "Swallow",
            "date_of_birth": "November 19, 1992",
            "afl_team_id": 8,
            "jumper_number": 24,
            "height": 185,
            "weight": 87
          },
          {
            "id": 691,
            "first_name": "Jordon",
            "last_name": "Sweet",
            "date_of_birth": "February 2, 1998",
            "afl_team_id": 18,
            "jumper_number": 41,
            "height": 203,
            "weight": 106
          },
          {
            "id": 692,
            "first_name": "Sam",
            "last_name": "Switkowski",
            "date_of_birth": "November 20, 1996",
            "afl_team_id": 6,
            "jumper_number": 39,
            "height": 179,
            "weight": 74
          },
          {
            "id": 693,
            "first_name": "Matthew",
            "last_name": "Taberner",
            "date_of_birth": "June 17, 1993",
            "afl_team_id": 6,
            "jumper_number": 20,
            "height": 198,
            "weight": 99
          },
          {
            "id": 694,
            "first_name": "Cameron",
            "last_name": "Taheny",
            "date_of_birth": "August 3, 2001",
            "afl_team_id": 7,
            "jumper_number": 41,
            "height": 185,
            "weight": 80
          },
          {
            "id": 695,
            "first_name": "Daniel",
            "last_name": "Talia",
            "date_of_birth": "October 2, 1991",
            "afl_team_id": 1,
            "jumper_number": 12,
            "height": 197,
            "weight": 98
          },
          {
            "id": 696,
            "first_name": "Tim",
            "last_name": "Taranto",
            "date_of_birth": "January 28, 1998",
            "afl_team_id": 9,
            "jumper_number": 14,
            "height": 187,
            "weight": 87
          },
          {
            "id": 697,
            "first_name": "Robbie",
            "last_name": "Tarrant",
            "date_of_birth": "April 25, 1989",
            "afl_team_id": 12,
            "jumper_number": 25,
            "height": 196,
            "weight": 97
          },
          {
            "id": 698,
            "first_name": "Curtis",
            "last_name": "Taylor",
            "date_of_birth": "April 6, 2000",
            "afl_team_id": 12,
            "jumper_number": 5,
            "height": 187,
            "weight": 78
          },
          {
            "id": 699,
            "first_name": "Lewis",
            "last_name": "Taylor",
            "date_of_birth": "February 17, 1995",
            "afl_team_id": 16,
            "jumper_number": 28,
            "height": 175,
            "weight": 80
          },
          {
            "id": 700,
            "first_name": "Sam",
            "last_name": "Taylor",
            "date_of_birth": "May 5, 1999",
            "afl_team_id": 9,
            "jumper_number": 15,
            "height": 196,
            "weight": 93
          },
          {
            "id": 701,
            "first_name": "Riley",
            "last_name": "Thilthorpe",
            "date_of_birth": "July 7, 2002",
            "afl_team_id": 1,
            "jumper_number": 7,
            "height": 201,
            "weight": 100
          },
          {
            "id": 702,
            "first_name": "Josh",
            "last_name": "Thomas",
            "date_of_birth": "October 1, 1991",
            "afl_team_id": 4,
            "jumper_number": 24,
            "height": 178,
            "weight": 78
          },
          {
            "id": 703,
            "first_name": "Leno",
            "last_name": "Thomas",
            "date_of_birth": "May 12, 2001",
            "afl_team_id": 6,
            "jumper_number": 24,
            "height": 181,
            "weight": 74
          },
          {
            "id": 704,
            "first_name": "Tarryn",
            "last_name": "Thomas",
            "date_of_birth": "March 25, 2000",
            "afl_team_id": 12,
            "jumper_number": 26,
            "height": 189,
            "weight": 74
          },
          {
            "id": 705,
            "first_name": "Rory",
            "last_name": "Thompson",
            "date_of_birth": "March 12, 1991",
            "afl_team_id": 8,
            "jumper_number": 16,
            "height": 200,
            "weight": 100
          },
          {
            "id": 706,
            "first_name": "Anton",
            "last_name": "Tohill",
            "date_of_birth": null,
            "afl_team_id": 4,
            "jumper_number": 43,
            "height": 191,
            "weight": 85
          },
          {
            "id": 707,
            "first_name": "Adam",
            "last_name": "Tomlinson",
            "date_of_birth": "August 10, 1993",
            "afl_team_id": 11,
            "jumper_number": 20,
            "height": 194,
            "weight": 96
          },
          {
            "id": 708,
            "first_name": "Luke",
            "last_name": "Towey",
            "date_of_birth": "July 11, 1999",
            "afl_team_id": 8,
            "jumper_number": 45,
            "height": 186,
            "weight": 80
          },
          {
            "id": 709,
            "first_name": "Jacob",
            "last_name": "Townsend",
            "date_of_birth": "June 20, 1993",
            "afl_team_id": 8,
            "jumper_number": 21,
            "height": 187,
            "weight": 89
          },
          {
            "id": 710,
            "first_name": "Josh",
            "last_name": "Treacy",
            "date_of_birth": "August 4, 2002",
            "afl_team_id": 6,
            "jumper_number": 35,
            "height": 194,
            "weight": 94
          },
          {
            "id": 711,
            "first_name": "Adam",
            "last_name": "Treloar",
            "date_of_birth": "March 9, 1993",
            "afl_team_id": 18,
            "jumper_number": 1,
            "height": 182,
            "weight": 89
          },
          {
            "id": 712,
            "first_name": "Zane",
            "last_name": "Trew",
            "date_of_birth": "April 26, 2002",
            "afl_team_id": 17,
            "jumper_number": 26,
            "height": 187,
            "weight": 78
          },
          {
            "id": 713,
            "first_name": "Paul",
            "last_name": "Tsapatolis",
            "date_of_birth": "June 20, 2002",
            "afl_team_id": 7,
            "jumper_number": 36,
            "height": 203,
            "weight": 100
          },
          {
            "id": 714,
            "first_name": "Darcy",
            "last_name": "Tucker",
            "date_of_birth": "January 23, 1997",
            "afl_team_id": 6,
            "jumper_number": 18,
            "height": 184,
            "weight": 83
          },
          {
            "id": 715,
            "first_name": "Zach",
            "last_name": "Tuohy",
            "date_of_birth": "December 10, 1989",
            "afl_team_id": 7,
            "jumper_number": 2,
            "height": 187,
            "weight": 93
          },
          {
            "id": 716,
            "first_name": "Kayne",
            "last_name": "Turner",
            "date_of_birth": "December 31, 1995",
            "afl_team_id": 12,
            "jumper_number": 28,
            "height": 180,
            "weight": 75
          },
          {
            "id": 717,
            "first_name": "Dom",
            "last_name": "Tyson",
            "date_of_birth": "June 8, 1993",
            "afl_team_id": 12,
            "jumper_number": 21,
            "height": 186,
            "weight": 85
          },
          {
            "id": 718,
            "first_name": "Jamarra",
            "last_name": "Ugle-Hagan",
            "date_of_birth": "April 4, 2002",
            "afl_team_id": 18,
            "jumper_number": 22,
            "height": 194,
            "weight": 84
          },
          {
            "id": 719,
            "first_name": "Deividas",
            "last_name": "Uosis",
            "date_of_birth": "June 28, 2000",
            "afl_team_id": 2,
            "jumper_number": 41,
            "height": 183,
            "weight": 74
          },
          {
            "id": 720,
            "first_name": "Luke",
            "last_name": "Valente",
            "date_of_birth": "May 8, 2000",
            "afl_team_id": 6,
            "jumper_number": 29,
            "height": 187,
            "weight": 81
          },
          {
            "id": 721,
            "first_name": "Aaron",
            "last_name": "Vandenberg",
            "date_of_birth": "March 3, 1992",
            "afl_team_id": 11,
            "jumper_number": 22,
            "height": 188,
            "weight": 93
          },
          {
            "id": 722,
            "first_name": "Laitham",
            "last_name": "Vandermeer",
            "date_of_birth": "February 3, 1999",
            "afl_team_id": 18,
            "jumper_number": 23,
            "height": 180,
            "weight": 77
          },
          {
            "id": 723,
            "first_name": "Nathan",
            "last_name": "Vardy",
            "date_of_birth": "June 25, 1991",
            "afl_team_id": 17,
            "jumper_number": 19,
            "height": 200,
            "weight": 98
          },
          {
            "id": 724,
            "first_name": "Daniel",
            "last_name": "Venables",
            "date_of_birth": "November 19, 1998",
            "afl_team_id": 17,
            "jumper_number": 18,
            "height": 187,
            "weight": 84
          },
          {
            "id": 725,
            "first_name": "Jack",
            "last_name": "Viney",
            "date_of_birth": "April 13, 1994",
            "afl_team_id": 11,
            "jumper_number": 7,
            "height": 178,
            "weight": 84
          },
          {
            "id": 726,
            "first_name": "Nick",
            "last_name": "Vlastuin",
            "date_of_birth": "April 19, 1994",
            "afl_team_id": 14,
            "jumper_number": 1,
            "height": 187,
            "weight": 88
          },
          {
            "id": 727,
            "first_name": "Brandon",
            "last_name": "Walker",
            "date_of_birth": "October 17, 2002",
            "afl_team_id": 6,
            "jumper_number": 31,
            "height": 183,
            "weight": 75
          },
          {
            "id": 728,
            "first_name": "Joshua",
            "last_name": "Walker",
            "date_of_birth": "November 12, 1992",
            "afl_team_id": 12,
            "jumper_number": 19,
            "height": 197,
            "weight": 100
          },
          {
            "id": 729,
            "first_name": "Patrick",
            "last_name": "Walker",
            "date_of_birth": "June 9, 2002",
            "afl_team_id": 12,
            "jumper_number": 33,
            "height": 186,
            "weight": 80
          },
          {
            "id": 730,
            "first_name": "Taylor",
            "last_name": "Walker",
            "date_of_birth": "April 25, 1990",
            "afl_team_id": 1,
            "jumper_number": 13,
            "height": 193,
            "weight": 100
          },
          {
            "id": 731,
            "first_name": "Will",
            "last_name": "Walker",
            "date_of_birth": "March 30, 1999",
            "afl_team_id": 12,
            "jumper_number": 27,
            "height": 186,
            "weight": 78
          },
          {
            "id": 732,
            "first_name": "Mitchell",
            "last_name": "Wallis",
            "date_of_birth": "October 24, 1992",
            "afl_team_id": 18,
            "jumper_number": 3,
            "height": 186,
            "weight": 85
          },
          {
            "id": 733,
            "first_name": "Sam",
            "last_name": "Walsh",
            "date_of_birth": "July 2, 2000",
            "afl_team_id": 3,
            "jumper_number": 18,
            "height": 184,
            "weight": 80
          },
          {
            "id": 734,
            "first_name": "Michael",
            "last_name": "Walters",
            "date_of_birth": "January 7, 1991",
            "afl_team_id": 6,
            "jumper_number": 10,
            "height": 178,
            "weight": 78
          },
          {
            "id": 735,
            "first_name": "Callan",
            "last_name": "Ward",
            "date_of_birth": "April 10, 1990",
            "afl_team_id": 9,
            "jumper_number": 8,
            "height": 187,
            "weight": 84
          },
          {
            "id": 736,
            "first_name": "Chad",
            "last_name": "Warner",
            "date_of_birth": "May 19, 2001",
            "afl_team_id": 16,
            "jumper_number": 1,
            "height": 181,
            "weight": 80
          },
          {
            "id": 737,
            "first_name": "Alec",
            "last_name": "Waterman",
            "date_of_birth": "August 19, 1996",
            "afl_team_id": 5,
            "jumper_number": 42,
            "height": 183,
            "weight": 89
          },
          {
            "id": 738,
            "first_name": "Jake",
            "last_name": "Waterman",
            "date_of_birth": "May 6, 1998",
            "afl_team_id": 17,
            "jumper_number": 2,
            "height": 191,
            "weight": 92
          },
          {
            "id": 739,
            "first_name": "Tobe",
            "last_name": "Watson",
            "date_of_birth": "December 3, 1997",
            "afl_team_id": 6,
            "jumper_number": 38,
            "height": 190,
            "weight": 83
          },
          {
            "id": 740,
            "first_name": "Jimmy",
            "last_name": "Webster",
            "date_of_birth": "June 28, 1993",
            "afl_team_id": 15,
            "jumper_number": 29,
            "height": 188,
            "weight": 83
          },
          {
            "id": 741,
            "first_name": "Jacob",
            "last_name": "Wehr",
            "date_of_birth": "July 5, 1998",
            "afl_team_id": 9,
            "jumper_number": 10,
            "height": 184,
            "weight": 71
          },
          {
            "id": 742,
            "first_name": "Sam",
            "last_name": "Weideman",
            "date_of_birth": "June 26, 1997",
            "afl_team_id": 11,
            "jumper_number": 26,
            "height": 195,
            "weight": 97
          },
          {
            "id": 743,
            "first_name": "Cody",
            "last_name": "Weightman",
            "date_of_birth": "January 15, 2001",
            "afl_team_id": 18,
            "jumper_number": 19,
            "height": 177,
            "weight": 73
          },
          {
            "id": 744,
            "first_name": "Jacob",
            "last_name": "Weitering",
            "date_of_birth": "November 23, 1997",
            "afl_team_id": 3,
            "jumper_number": 23,
            "height": 196,
            "weight": 98
          },
          {
            "id": 745,
            "first_name": "Lachlan",
            "last_name": "Weller",
            "date_of_birth": "February 23, 1996",
            "afl_team_id": 8,
            "jumper_number": 14,
            "height": 181,
            "weight": 81
          },
          {
            "id": 746,
            "first_name": "Rhylee",
            "last_name": "West",
            "date_of_birth": "July 12, 2000",
            "afl_team_id": 18,
            "jumper_number": 14,
            "height": 181,
            "weight": 82
          },
          {
            "id": 747,
            "first_name": "Joel",
            "last_name": "Western",
            "date_of_birth": "October 12, 2002",
            "afl_team_id": 6,
            "jumper_number": 34,
            "height": 171,
            "weight": 64
          },
          {
            "id": 748,
            "first_name": "Lachie",
            "last_name": "Whitfield",
            "date_of_birth": "July 18, 1994",
            "afl_team_id": 9,
            "jumper_number": 6,
            "height": 187,
            "weight": 81
          },
          {
            "id": 749,
            "first_name": "Sam",
            "last_name": "Wicks",
            "date_of_birth": "September 14, 1999",
            "afl_team_id": 16,
            "jumper_number": 45,
            "height": 181,
            "weight": 73
          },
          {
            "id": 750,
            "first_name": "Callum",
            "last_name": "Wilkie",
            "date_of_birth": "March 10, 1996",
            "afl_team_id": 15,
            "jumper_number": 44,
            "height": 191,
            "weight": 87
          },
          {
            "id": 751,
            "first_name": "Bailey",
            "last_name": "Williams",
            "date_of_birth": "October 10, 1997",
            "afl_team_id": 18,
            "jumper_number": 34,
            "height": 187,
            "weight": 85
          },
          {
            "id": 752,
            "first_name": "Bailey J.",
            "last_name": "Williams",
            "date_of_birth": "April 17, 2000",
            "afl_team_id": 17,
            "jumper_number": 32,
            "height": 199,
            "weight": 95
          },
          {
            "id": 753,
            "first_name": "Dylan",
            "last_name": "Williams",
            "date_of_birth": "July 1, 2001",
            "afl_team_id": 13,
            "jumper_number": 23,
            "height": 185,
            "weight": 79
          },
          {
            "id": 754,
            "first_name": "Zachary",
            "last_name": "Williams",
            "date_of_birth": "September 20, 1994",
            "afl_team_id": 3,
            "jumper_number": 6,
            "height": 185,
            "weight": 84
          },
          {
            "id": 755,
            "first_name": "Tom",
            "last_name": "Williamson",
            "date_of_birth": "December 12, 1998",
            "afl_team_id": 3,
            "jumper_number": 31,
            "height": 190,
            "weight": 85
          },
          {
            "id": 756,
            "first_name": "Nathan",
            "last_name": "Wilson",
            "date_of_birth": "January 7, 1993",
            "afl_team_id": 6,
            "jumper_number": 14,
            "height": 185,
            "weight": 81
          },
          {
            "id": 757,
            "first_name": "Tom",
            "last_name": "Wilson",
            "date_of_birth": "June 14, 1997",
            "afl_team_id": 4,
            "jumper_number": 12,
            "height": 194,
            "weight": 77
          },
          {
            "id": 758,
            "first_name": "Isiah",
            "last_name": "Winder",
            "date_of_birth": "May 16, 2002",
            "afl_team_id": 17,
            "jumper_number": 22,
            "height": 180,
            "weight": 79
          },
          {
            "id": 759,
            "first_name": "Oliver",
            "last_name": "Wines",
            "date_of_birth": "October 7, 1994",
            "afl_team_id": 13,
            "jumper_number": 16,
            "height": 187,
            "weight": 89
          },
          {
            "id": 760,
            "first_name": "Chad",
            "last_name": "Wingard",
            "date_of_birth": "July 29, 1993",
            "afl_team_id": 10,
            "jumper_number": 20,
            "height": 183,
            "weight": 85
          },
          {
            "id": 761,
            "first_name": "Alex",
            "last_name": "Witherden",
            "date_of_birth": "September 10, 1998",
            "afl_team_id": 17,
            "jumper_number": 23,
            "height": 188,
            "weight": 85
          },
          {
            "id": 762,
            "first_name": "Jarrod",
            "last_name": "Witts",
            "date_of_birth": "September 13, 1992",
            "afl_team_id": 8,
            "jumper_number": 28,
            "height": 209,
            "weight": 111
          },
          {
            "id": 763,
            "first_name": "Easton",
            "last_name": "Wood",
            "date_of_birth": "September 4, 1989",
            "afl_team_id": 18,
            "jumper_number": 10,
            "height": 187,
            "weight": 86
          },
          {
            "id": 764,
            "first_name": "Mason",
            "last_name": "Wood",
            "date_of_birth": "September 13, 1993",
            "afl_team_id": 15,
            "jumper_number": 32,
            "height": 192,
            "weight": 87
          },
          {
            "id": 765,
            "first_name": "Boyd",
            "last_name": "Woodcock",
            "date_of_birth": "March 5, 2000",
            "afl_team_id": 13,
            "jumper_number": 36,
            "height": 179,
            "weight": 76
          },
          {
            "id": 766,
            "first_name": "James",
            "last_name": "Worpel",
            "date_of_birth": "January 24, 1999",
            "afl_team_id": 10,
            "jumper_number": 5,
            "height": 185,
            "weight": 85
          },
          {
            "id": 767,
            "first_name": "Josh",
            "last_name": "Worrell",
            "date_of_birth": "April 11, 2001",
            "afl_team_id": 1,
            "jumper_number": 24,
            "height": 195,
            "weight": 74
          },
          {
            "id": 768,
            "first_name": "Peter",
            "last_name": "Wright",
            "date_of_birth": "September 8, 1996",
            "afl_team_id": 5,
            "jumper_number": 20,
            "height": 203,
            "weight": 103
          },
          {
            "id": 769,
            "first_name": "Tristan",
            "last_name": "Xerri",
            "date_of_birth": "March 15, 1999",
            "afl_team_id": 12,
            "jumper_number": 38,
            "height": 201,
            "weight": 94
          },
          {
            "id": 770,
            "first_name": "Elliot",
            "last_name": "Yeo",
            "date_of_birth": "October 1, 1993",
            "afl_team_id": 17,
            "jumper_number": 6,
            "height": 190,
            "weight": 89
          },
          {
            "id": 771,
            "first_name": "Hayden",
            "last_name": "Young",
            "date_of_birth": "April 11, 2001",
            "afl_team_id": 6,
            "jumper_number": 26,
            "height": 188,
            "weight": 82
          },
          {
            "id": 772,
            "first_name": "Lachie",
            "last_name": "Young",
            "date_of_birth": "April 6, 1999",
            "afl_team_id": 12,
            "jumper_number": 17,
            "height": 189,
            "weight": 81
          },
          {
            "id": 773,
            "first_name": "Lewis",
            "last_name": "Young",
            "date_of_birth": "December 20, 1998",
            "afl_team_id": 18,
            "jumper_number": 2,
            "height": 197,
            "weight": 96
          },
          {
            "id": 774,
            "first_name": "David",
            "last_name": "Zaharakis",
            "date_of_birth": "February 21, 1990",
            "afl_team_id": 5,
            "jumper_number": 11,
            "height": 180,
            "weight": 79
          },
          {
            "id": 775,
            "first_name": "Brandon",
            "last_name": "Zerk-Thatcher",
            "date_of_birth": "August 25, 1998",
            "afl_team_id": 5,
            "jumper_number": 30,
            "height": 195,
            "weight": 86
          },
          {
            "id": 776,
            "first_name": "Jack",
            "last_name": "Ziebell",
            "date_of_birth": "February 28, 1991",
            "afl_team_id": 12,
            "jumper_number": 7,
            "height": 188,
            "weight": 89
          },
          {
            "id": 777,
            "first_name": "Dayne",
            "last_name": "Zorko",
            "date_of_birth": "February 9, 1989",
            "afl_team_id": 2,
            "jumper_number": 15,
            "height": 175,
            "weight": 78
          },
          {
            "id": 778,
            "first_name": "Cameron",
            "last_name": "Zurhaar",
            "date_of_birth": "May 22, 1998",
            "afl_team_id": 12,
            "jumper_number": 44,
            "height": 189,
            "weight": 90
          }
        ]'
    );
