/* Insert Player Entities. */
INSERT INTO player_draft_entity(player_id, origin, round, pick, year, type, drafting_team_id)
    SELECT player_id, origin, round, pick, year, type, drafting_team_id
    FROM json_populate_recordset(NULL::player_draft_entity,
        '[
          {
            "player_id": 360,
            "origin": "Richmond Football Club",
            "round": 1,
            "pick": 16,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 136,
            "origin": "West Perth",
            "round": 1,
            "pick": 19,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 571,
            "origin": "West Perth",
            "round": 2,
            "pick": 35,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 21,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 13,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 419,
            "origin": "South Fremantle",
            "round": 3,
            "pick": 33,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 317,
            "origin": "South Fremantle",
            "round": 1,
            "pick": 8,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 200,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 4,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 518,
            "origin": "Subiaco",
            "round": 2,
            "pick": 32,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 209,
            "origin": "Norwood",
            "round": 1,
            "pick": 7,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 582,
            "origin": "Perth",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 376,
            "origin": "East Fremantle",
            "round": 3,
            "pick": 44,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 182,
            "origin": "West Perth",
            "round": 2,
            "pick": 21,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 583,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 26,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 474,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 28,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 584,
            "origin": "Old Xaverians",
            "round": 2,
            "pick": 26,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 178,
            "origin": "Sandringham Dragons",
            "round": 4,
            "pick": 68,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 34,
            "origin": "Territory Thunder",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 194,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 2,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 111,
            "origin": "Aspley",
            "round": 4,
            "pick": 61,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 585,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 18,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 420,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 55,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 377,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 4,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 258,
            "origin": "North Ballarat Rebels",
            "round": 3,
            "pick": 35,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 482,
            "origin": "Calder Cannons",
            "round": 4,
            "pick": 81,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 435,
            "origin": "Geelong",
            "round": 1,
            "pick": 11,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 210,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 17,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 201,
            "origin": "Norwood",
            "round": 1,
            "pick": 15,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 202,
            "origin": "Subiaco",
            "round": 1,
            "pick": 18,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 378,
            "origin": "Aspley",
            "round": 3,
            "pick": 48,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 586,
            "origin": "Glenelg",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 421,
            "origin": "Sturt",
            "round": 3,
            "pick": 42,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 556,
            "origin": "Brisbane Academy",
            "round": 3,
            "pick": 43,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 296,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 25,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 379,
            "origin": "Claremont",
            "round": 2,
            "pick": 22,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 160,
            "origin": "Claremont",
            "round": 3,
            "pick": 43,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 297,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 39,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 587,
            "origin": "Murray Bushrangers",
            "round": 4,
            "pick": 55,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 573,
            "origin": "Dandenong Stingrays",
            "round": 5,
            "pick": 75,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 491,
            "origin": "Swans Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 588,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 14,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 97,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 17,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 589,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 28,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 523,
            "origin": "Gwv Rebels",
            "round": 2,
            "pick": 36,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 422,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 3,
            "year": 2004,
            "type": "Pre-Season",
            "drafting_team_id": 2
          },
          {
            "player_id": 239,
            "origin": "Williamstown",
            "round": 4,
            "pick": 59,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 361,
            "origin": "Geelong Falcons",
            "round": 5,
            "pick": 86,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 590,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 45,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 86,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 3,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 289,
            "origin": "Devonport",
            "round": 1,
            "pick": 15,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 362,
            "origin": "Swan Districts",
            "round": 2,
            "pick": 34,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 395,
            "origin": "Unsw",
            "round": 1,
            "pick": 10,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 72,
            "origin": "Geelong Vfl",
            "round": 3,
            "pick": 54,
            "year": 2011,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 24,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 5,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 120,
            "origin": "South Fremantle",
            "round": 2,
            "pick": 29,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 515,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 11,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 396,
            "origin": "West Adelaide",
            "round": 2,
            "pick": 37,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 13,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 4,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 591,
            "origin": "Sturt",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 561,
            "origin": "Oakleigh Chargers",
            "round": 8,
            "pick": 77,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 137,
            "origin": "Cairns",
            "round": 1,
            "pick": 10,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 592,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 21,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 593,
            "origin": "Basketball",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 594,
            "origin": "Box Hill",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 595,
            "origin": "Calder Cannons",
            "round": 4,
            "pick": 53,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 423,
            "origin": "West Adelaide",
            "round": 4,
            "pick": 66,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 447,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 13,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 54,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 2,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 161,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 3,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 151,
            "origin": "Temora",
            "round": 4,
            "pick": 77,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 596,
            "origin": "Pennant Hills",
            "round": 2,
            "pick": 34,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 328,
            "origin": "Swan Districts",
            "round": 5,
            "pick": 67,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 597,
            "origin": "Subiaco",
            "round": 3,
            "pick": 46,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 547,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 9,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 448,
            "origin": "South Adelaide",
            "round": 1,
            "pick": 4,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 503,
            "origin": "Werribee Tigers",
            "round": 3,
            "pick": 47,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 598,
            "origin": "County Derry",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 318,
            "origin": "Eastern Ranges",
            "round": 2,
            "pick": 35,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 290,
            "origin": "Norwood",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 475,
            "origin": "Sandringham Dragons",
            "round": 4,
            "pick": 54,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 405,
            "origin": "Eastern Ranges",
            "round": 3,
            "pick": 50,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 599,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 27,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 483,
            "origin": "Canberra",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 600,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 12,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 601,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 38,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 380,
            "origin": "Swans Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 504,
            "origin": "Gold Coast Suns Academy",
            "round": 2,
            "pick": 16,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 602,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 5,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 603,
            "origin": "0",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 259,
            "origin": "Port Adelaide",
            "round": 1,
            "pick": 12,
            "year": 2000,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 604,
            "origin": "Eagles",
            "round": 2,
            "pick": 22,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 436,
            "origin": "North Adelaide",
            "round": 1,
            "pick": 19,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 195,
            "origin": "North Ballarat Rebels",
            "round": 4,
            "pick": 67,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 484,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 53,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 121,
            "origin": "Western Jets",
            "round": 1,
            "pick": 12,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 510,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 39,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 162,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 52,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 576,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 52,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 406,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 41,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 346,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 7,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 565,
            "origin": "Dandenong Stingrays",
            "round": 4,
            "pick": 56,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 319,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 11,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 222,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 7,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 465,
            "origin": "Claremont",
            "round": 3,
            "pick": 48,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 569,
            "origin": "Swan Districts",
            "round": 2,
            "pick": 39,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 240,
            "origin": "Dartmore",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 605,
            "origin": "Sydney Academy",
            "round": 1,
            "pick": 5,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 548,
            "origin": "Bendigo Bombers",
            "round": 6,
            "pick": 98,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 249,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 24,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 606,
            "origin": "East Fremantle",
            "round": 2,
            "pick": 41,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 607,
            "origin": "Sturt",
            "round": 1,
            "pick": 3,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 320,
            "origin": "Dandenong Stingrays",
            "round": 5,
            "pick": 89,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 335,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 29,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 519,
            "origin": "Williamstown",
            "round": 3,
            "pick": 45,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 241,
            "origin": "Murray Bushrangers",
            "round": 4,
            "pick": 59,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 102,
            "origin": "Eastern Ranges",
            "round": 1,
            "pick": 5,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 608,
            "origin": "Norwood",
            "round": 1,
            "pick": 15,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 609,
            "origin": "West Perth",
            "round": 1,
            "pick": 14,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 381,
            "origin": "Aspley",
            "round": 3,
            "pick": 45,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 610,
            "origin": "Tasmania Devils",
            "round": 2,
            "pick": 28,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 163,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 7,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 492,
            "origin": "Claremont",
            "round": 1,
            "pick": 15,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 321,
            "origin": "Eastern Ranges",
            "round": 2,
            "pick": 21,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 203,
            "origin": "Eastern Ranges",
            "round": 2,
            "pick": 31,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 611,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 35,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 466,
            "origin": "Glenelg",
            "round": 1,
            "pick": 14,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 363,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 29,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 612,
            "origin": "Nt Thunder",
            "round": 1,
            "pick": 10,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 172,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 8,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 306,
            "origin": "Sandhurst Football Netball Club",
            "round": 2,
            "pick": 36,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 613,
            "origin": "Brisbane Academy",
            "round": 1,
            "pick": 24,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 467,
            "origin": "Brisbane",
            "round": 2,
            "pick": 37,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 614,
            "origin": "Sturt",
            "round": 2,
            "pick": 20,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 615,
            "origin": "Hawaii",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 616,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 20,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 179,
            "origin": "Box Hill Hawks",
            "round": 4,
            "pick": 55,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 485,
            "origin": "Claremont",
            "round": 2,
            "pick": 26,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 617,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 31,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 272,
            "origin": "Perth",
            "round": 1,
            "pick": 6,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 62,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 2,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 618,
            "origin": "Gippsland Power",
            "round": 5,
            "pick": 64,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 619,
            "origin": "Gold Coast Suns Academy",
            "round": 3,
            "pick": 29,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 347,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 36,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 620,
            "origin": "South Adelaide",
            "round": 2,
            "pick": 25,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 486,
            "origin": "Werribee",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 437,
            "origin": "Geelong Falcons",
            "round": 4,
            "pick": 62,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 250,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 14,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 152,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 2,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 497,
            "origin": "Dandenong Stingrays",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 126,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 46,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 164,
            "origin": "Woodville-West Torrens",
            "round": 2,
            "pick": 41,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 424,
            "origin": "Oklahoma State",
            "round": 4,
            "pick": 60,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 621,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 8,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 229,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 24,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 69,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 13,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 63,
            "origin": "Murray Bushrangers",
            "round": 5,
            "pick": 86,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 138,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 2,
            "year": 2011,
            "type": "Mini",
            "drafting_team_id": 0
          },
          {
            "player_id": 18,
            "origin": "North Ballarat Rebels",
            "round": 2,
            "pick": 23,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 449,
            "origin": "Sturt",
            "round": 4,
            "pick": 59,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 183,
            "origin": "Eastern Ranges",
            "round": 1,
            "pick": 20,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 622,
            "origin": "Brisbane Lions Academy",
            "round": 2,
            "pick": 43,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 298,
            "origin": "Broken Hill",
            "round": 1,
            "pick": 20,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 336,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 23,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 211,
            "origin": "Turvey Park",
            "round": 7,
            "pick": 107,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 48,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 5,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 623,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 12,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 76,
            "origin": "Geelong Falcons",
            "round": 6,
            "pick": 89,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 291,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 33,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 260,
            "origin": "Geelong Falcons",
            "round": 4,
            "pick": 70,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 173,
            "origin": "Oakleigh Chargers",
            "round": 4,
            "pick": 57,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 438,
            "origin": "Dandenong Stingrays",
            "round": 3,
            "pick": 45,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 14,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 10,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 41,
            "origin": "South Adelaide",
            "round": 3,
            "pick": 46,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 307,
            "origin": "Bendigo Pioneers",
            "round": 2,
            "pick": 27,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 505,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 10,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 184,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 38,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 153,
            "origin": "West Perth",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 624,
            "origin": "Suns Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 165,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 4,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 487,
            "origin": "UNSW",
            "round": 5,
            "pick": 75,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 458,
            "origin": "North Adelaide",
            "round": 1,
            "pick": 10,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 127,
            "origin": "Sturt",
            "round": 4,
            "pick": 56,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 439,
            "origin": "Sturt",
            "round": 1,
            "pick": 3,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 242,
            "origin": "West Adelaide",
            "round": 1,
            "pick": 13,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 337,
            "origin": "Claremont",
            "round": 4,
            "pick": 58,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 185,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 5,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 625,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 19,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 425,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 30,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 112,
            "origin": "Redland",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 92,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 12,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 128,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 17,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 543,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 3,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 557,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 21,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 626,
            "origin": "Eastern Ranges",
            "round": 2,
            "pick": 35,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 261,
            "origin": "South Adelaide",
            "round": 1,
            "pick": 1,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 627,
            "origin": "North Ballarat Rebels",
            "round": 2,
            "pick": 33,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 143,
            "origin": "Western Jets",
            "round": 1,
            "pick": 11,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 308,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 3,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 55,
            "origin": "Norwood",
            "round": 2,
            "pick": 30,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 22,
            "origin": "East Perth",
            "round": 2,
            "pick": 28,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 42,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 25,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 93,
            "origin": "Woodville West Torrens",
            "round": 1,
            "pick": 18,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 628,
            "origin": "Central Districts",
            "round": 2,
            "pick": 37,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 129,
            "origin": "Murray Bushrangers",
            "round": 5,
            "pick": 69,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 223,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 18,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 580,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 18,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 629,
            "origin": "Glenelg",
            "round": 4,
            "pick": 52,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 122,
            "origin": "Nth Adelaide",
            "round": 2,
            "pick": 26,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 299,
            "origin": "Murray Bushrangers",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 139,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 15,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 364,
            "origin": "Woodville-West Torrens",
            "round": 2,
            "pick": 31,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 49,
            "origin": "South Fremantle",
            "round": 1,
            "pick": 19,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 630,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 41,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 631,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 39,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 440,
            "origin": "Norwood",
            "round": 3,
            "pick": 55,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 498,
            "origin": "Scotch OC",
            "round": 4,
            "pick": 60,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 407,
            "origin": "Bendigo Pioneers",
            "round": 3,
            "pick": 51,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 322,
            "origin": "Hills Eagles",
            "round": 6,
            "pick": 85,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 348,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 20,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 230,
            "origin": "Perth",
            "round": 2,
            "pick": 27,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 549,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 11,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 632,
            "origin": "Geelong Falcons",
            "round": 4,
            "pick": 58,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 204,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 11,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 633,
            "origin": "Narrandera",
            "round": 3,
            "pick": 41,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 468,
            "origin": "Glenelg",
            "round": 1,
            "pick": 12,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 309,
            "origin": "Western Jets",
            "round": 2,
            "pick": 22,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 558,
            "origin": "Subiaco",
            "round": 2,
            "pick": 31,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 634,
            "origin": "Western Jets",
            "round": 4,
            "pick": 56,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 166,
            "origin": "Central District",
            "round": 4,
            "pick": 65,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 243,
            "origin": "Coburg",
            "round": 2,
            "pick": 34,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 469,
            "origin": "South Fremantle",
            "round": 6,
            "pick": 84,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 382,
            "origin": "West Adelaide",
            "round": 1,
            "pick": 6,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 635,
            "origin": "Perth",
            "round": 1,
            "pick": 5,
            "year": 2004,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 450,
            "origin": "Nth Ballarat",
            "round": 1,
            "pick": 12,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 636,
            "origin": "Sudan",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 562,
            "origin": "Eagles",
            "round": 4,
            "pick": 61,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 300,
            "origin": "Casey Demons",
            "round": 2,
            "pick": 31,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 426,
            "origin": "Sandringham Dragons",
            "round": 5,
            "pick": 83,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 566,
            "origin": "Brisbane Bullets",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 637,
            "origin": "Broadbeach",
            "round": 3,
            "pick": 38,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 15,
            "origin": "Claremont",
            "round": 2,
            "pick": 20,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 29,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 4,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 638,
            "origin": "Swan Districts",
            "round": 4,
            "pick": 62,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 301,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 22,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 511,
            "origin": "Burnie Dockers",
            "round": 1,
            "pick": 6,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 17
          },
          {
            "player_id": 639,
            "origin": "Eastern Ranges",
            "round": 4,
            "pick": 60,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 520,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 15,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 640,
            "origin": "Murray Bushrangers",
            "round": 5,
            "pick": 72,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 1,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 34,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 338,
            "origin": "Bendigo Pioneers",
            "round": 5,
            "pick": 58,
            "year": 2006,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 397,
            "origin": "Subiaco",
            "round": 1,
            "pick": 18,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 212,
            "origin": "Williamstown",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 383,
            "origin": "Glenelg",
            "round": 1,
            "pick": 1,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 641,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 13,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 642,
            "origin": "Norwood",
            "round": 2,
            "pick": 21,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 451,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 6,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 643,
            "origin": "Gippsland",
            "round": 1,
            "pick": 16,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 16,
            "origin": "Oakleigh",
            "round": 3,
            "pick": 37,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 644,
            "origin": "Calder Cannons",
            "round": 3,
            "pick": 48,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 645,
            "origin": "Glenelg",
            "round": 2,
            "pick": 26,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 470,
            "origin": "Gold Coast Academy",
            "round": 5,
            "pick": 71,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 154,
            "origin": "North Adelaide",
            "round": 3,
            "pick": 53,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 646,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 6,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 103,
            "origin": "Oakleigh",
            "round": 4,
            "pick": 55,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 488,
            "origin": "Port Adelaide",
            "round": 2,
            "pick": 29,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 98,
            "origin": "East Perth",
            "round": 1,
            "pick": 14,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 231,
            "origin": "GWS Giants Academy",
            "round": 1,
            "pick": 10,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 144,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 11,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 30,
            "origin": "Perth Wildcats",
            "round": 3,
            "pick": 48,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 427,
            "origin": "Port Adelaide Magpies",
            "round": 2,
            "pick": 32,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 155,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 18,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 262,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 2,
            "year": 2009,
            "type": "Pre-Season",
            "drafting_team_id": 13
          },
          {
            "player_id": 8,
            "origin": "Sturt",
            "round": 1,
            "pick": 18,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 384,
            "origin": "Claremont",
            "round": 5,
            "pick": 76,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 647,
            "origin": "Sydney Academy",
            "round": 2,
            "pick": 32,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 156,
            "origin": "Sandringham",
            "round": 2,
            "pick": 29,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 44,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 23,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 528,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 33,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 232,
            "origin": "Hobart",
            "round": 1,
            "pick": 7,
            "year": 2011,
            "type": "Pre-Season",
            "drafting_team_id": 7
          },
          {
            "player_id": 476,
            "origin": "Geelong Falcons",
            "round": 5,
            "pick": 72,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 538,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 30,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 648,
            "origin": "Claremont",
            "round": 2,
            "pick": 32,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 471,
            "origin": "Footscray",
            "round": 3,
            "pick": 46,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 273,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 30,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 524,
            "origin": "St. Kevin''s College",
            "round": 1,
            "pick": 14,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 408,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 27,
            "year": 2006,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 274,
            "origin": "Eastern Ranges",
            "round": 3,
            "pick": 44,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 329,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 2,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 398,
            "origin": "Werribee",
            "round": 5,
            "pick": 76,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 180,
            "origin": "West Adelaide",
            "round": 1,
            "pick": 4,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 130,
            "origin": "Sydney University",
            "round": 1,
            "pick": 2,
            "year": 2019,
            "type": "Pre-Season",
            "drafting_team_id": 9
          },
          {
            "player_id": 330,
            "origin": "Central District",
            "round": 1,
            "pick": 1,
            "year": 2020,
            "type": "Pre-Season",
            "drafting_team_id": 0
          },
          {
            "player_id": 25,
            "origin": "Melbourne Grammar",
            "round": 3,
            "pick": 41,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 477,
            "origin": "Subiaco",
            "round": 2,
            "pick": 27,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 649,
            "origin": "Eastern Ranges",
            "round": 3,
            "pick": 47,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 506,
            "origin": "Footscray Vfl",
            "round": 9,
            "pick": 78,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 64,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 7,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 365,
            "origin": "North Adelaide",
            "round": 1,
            "pick": 21,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 82,
            "origin": "Cardiff",
            "round": 1,
            "pick": 18,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 213,
            "origin": "Geelong Falcons",
            "round": 3,
            "pick": 35,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 331,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 16,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 559,
            "origin": "Claremont",
            "round": 1,
            "pick": 9,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 650,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 17,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 310,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 8,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 186,
            "origin": "North Adelaide",
            "round": 2,
            "pick": 32,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 263,
            "origin": "Frankston",
            "round": 1,
            "pick": 4,
            "year": 2010,
            "type": "Pre-Season",
            "drafting_team_id": 4
          },
          {
            "player_id": 459,
            "origin": "Morningside",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 187,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 17,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 77,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 11,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 651,
            "origin": "South Adelaide",
            "round": 3,
            "pick": 45,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 339,
            "origin": "West Perth",
            "round": 2,
            "pick": 33,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 399,
            "origin": "Perth",
            "round": 2,
            "pick": 24,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 340,
            "origin": "West Perth",
            "round": 1,
            "pick": 3,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 302,
            "origin": "Redlands",
            "round": 3,
            "pick": 51,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 311,
            "origin": "Mangoplah Cookardinia United Eastlakes",
            "round": 1,
            "pick": 16,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 349,
            "origin": "Essendon Vfl",
            "round": 3,
            "pick": 54,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 50,
            "origin": "Glenelg",
            "round": 2,
            "pick": 20,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 275,
            "origin": "Aspley",
            "round": 1,
            "pick": 14,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 652,
            "origin": "Essendon",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 409,
            "origin": "Claremont",
            "round": 1,
            "pick": 2,
            "year": 2012,
            "type": "Mini",
            "drafting_team_id": 10
          },
          {
            "player_id": 653,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 7,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 366,
            "origin": "Central District",
            "round": 2,
            "pick": 19,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 654,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 20,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 655,
            "origin": "Roxby Downs",
            "round": 2,
            "pick": 20,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 578,
            "origin": "Western Jets",
            "round": 1,
            "pick": 3,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 2
          },
          {
            "player_id": 276,
            "origin": "East Fremantle",
            "round": 4,
            "pick": 54,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 99,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 7,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 656,
            "origin": "Collingwood Vfl",
            "round": 4,
            "pick": 56,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 367,
            "origin": "Western Jets",
            "round": 1,
            "pick": 4,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 140,
            "origin": "Western",
            "round": 1,
            "pick": 3,
            "year": 2010,
            "type": "Pre-Season",
            "drafting_team_id": 13
          },
          {
            "player_id": 94,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 45,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 277,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 56,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 410,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 31,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 5,
            "origin": "Hobart",
            "round": 2,
            "pick": 33,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 251,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 5,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 499,
            "origin": "Brighton Grammar",
            "round": 4,
            "pick": 57,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 17,
            "origin": "Western Jets",
            "round": 3,
            "pick": 49,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 657,
            "origin": "Redland",
            "round": 2,
            "pick": 24,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 174,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 5,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 104,
            "origin": "Central District",
            "round": 1,
            "pick": 13,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 550,
            "origin": "Adelaide Football Club",
            "round": 5,
            "pick": 65,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 570,
            "origin": "East Perth",
            "round": 3,
            "pick": 60,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 493,
            "origin": "Geelong Falcons",
            "round": 4,
            "pick": 61,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 534,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 21,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 411,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 3,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 658,
            "origin": "Claremont",
            "round": 3,
            "pick": 49,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 544,
            "origin": "Norwood",
            "round": 3,
            "pick": 48,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 659,
            "origin": "Suns Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 660,
            "origin": "Western Jets",
            "round": 1,
            "pick": 9,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 123,
            "origin": "Frankston",
            "round": 1,
            "pick": 12,
            "year": 2010,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 552,
            "origin": "Melbourne",
            "round": 3,
            "pick": 50,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 494,
            "origin": "Ethiopia",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 145,
            "origin": "East Fremantle",
            "round": 7,
            "pick": 105,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 661,
            "origin": "West Perth",
            "round": 4,
            "pick": 58,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 662,
            "origin": "Oakleigh Chargers",
            "round": 5,
            "pick": 63,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 233,
            "origin": "Norwood",
            "round": 5,
            "pick": 85,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 525,
            "origin": "Launceston",
            "round": 1,
            "pick": 9,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 663,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 30,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 500,
            "origin": "North Ballarat Rebels",
            "round": 3,
            "pick": 48,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 664,
            "origin": "-",
            "round": 1,
            "pick": 16,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 244,
            "origin": "Scotch College",
            "round": 2,
            "pick": 32,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 460,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 12,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 113,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 15,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 224,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 9,
            "year": 2011,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 665,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 33,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 666,
            "origin": "Kilkenny",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 667,
            "origin": "East Fremantle",
            "round": 2,
            "pick": 40,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 668,
            "origin": "Western Jets",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 529,
            "origin": "0",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 385,
            "origin": "Murray Bushrangers",
            "round": 4,
            "pick": 58,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 167,
            "origin": "Brisbane Reserves",
            "round": 1,
            "pick": 7,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 278,
            "origin": "Queensland Under 18s",
            "round": 1,
            "pick": 7,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 412,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 40,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 11,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 2,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 73,
            "origin": "South Fremantle",
            "round": 2,
            "pick": 24,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 551,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 29,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 669,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 17,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 441,
            "origin": "Western Jets",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 74,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 40,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 312,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 4,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 168,
            "origin": "Collingullie Ashmont Kapooka",
            "round": 1,
            "pick": 13,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 400,
            "origin": "Perth",
            "round": 3,
            "pick": 48,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 442,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 6,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 368,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 4,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 386,
            "origin": "Launceston",
            "round": 3,
            "pick": 41,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 670,
            "origin": "Albury",
            "round": 3,
            "pick": 52,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 671,
            "origin": "South Adelaide",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 157,
            "origin": "Norwood",
            "round": 1,
            "pick": 9,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 35,
            "origin": "West Adelaide",
            "round": 6,
            "pick": 86,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 146,
            "origin": "Williamstown",
            "round": 3,
            "pick": 46,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 100,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 54,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 530,
            "origin": "Claremont",
            "round": 4,
            "pick": 56,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 169,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 17,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 501,
            "origin": "Oakleigh Chargers",
            "round": 5,
            "pick": 73,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 672,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 22,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 428,
            "origin": "Western Jets",
            "round": 1,
            "pick": 20,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 673,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 36,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 512,
            "origin": "Port Adelaide",
            "round": 2,
            "pick": 27,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 245,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 28,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 188,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 14,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 545,
            "origin": "Calder Cannons",
            "round": 5,
            "pick": 76,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 36,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 41,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 387,
            "origin": "Sturt Fc",
            "round": 3,
            "pick": 42,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 567,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 14,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 196,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 28,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 350,
            "origin": "Killarney Vale",
            "round": 2,
            "pick": 26,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 3,
            "origin": "North Ballarat Rebels",
            "round": 2,
            "pick": 16,
            "year": 2012,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 197,
            "origin": "Swan Districts",
            "round": 2,
            "pick": 29,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 461,
            "origin": "Casey Demons",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 264,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 8,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 265,
            "origin": "Nt Thunder",
            "round": 2,
            "pick": 25,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 341,
            "origin": "Dandenong Stingrays",
            "round": 3,
            "pick": 41,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 674,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 49,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 175,
            "origin": "Woodville-West Torrens",
            "round": 1,
            "pick": 2,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 78,
            "origin": "Port Magpies",
            "round": 2,
            "pick": 29,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 577,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 51,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 266,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 11,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 205,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 13,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 19,
            "origin": "Sandringham Dragons",
            "round": 4,
            "pick": 61,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 234,
            "origin": "Oakleigh",
            "round": 3,
            "pick": 48,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 429,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 21,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 675,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 19,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 7,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 6,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 676,
            "origin": "Dublin",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 292,
            "origin": "Mount Gambier",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 478,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 29,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 489,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 34,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 677,
            "origin": "Woodville West-Torrens",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 678,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 6,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 323,
            "origin": "North Adelaide",
            "round": 3,
            "pick": 50,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 45,
            "origin": "North Ballarat",
            "round": 1,
            "pick": 10,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 332,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 16,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 37,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 3,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 147,
            "origin": "Geraldton",
            "round": 1,
            "pick": 1,
            "year": 2019,
            "type": "Pre-Season",
            "drafting_team_id": 2
          },
          {
            "player_id": 490,
            "origin": "Sandringham",
            "round": 1,
            "pick": 3,
            "year": 2007,
            "type": "Pre-Season",
            "drafting_team_id": 10
          },
          {
            "player_id": 679,
            "origin": "Brisbane Lions Academy",
            "round": 2,
            "pick": 44,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 70,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 39,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 79,
            "origin": "Southern Districts",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 252,
            "origin": "North Adelaide",
            "round": 1,
            "pick": 8,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 71,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 30,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 293,
            "origin": "Perth",
            "round": 3,
            "pick": 40,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 313,
            "origin": "Sturt",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 546,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 6,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 680,
            "origin": "Ireland",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 279,
            "origin": "Glenelg",
            "round": 3,
            "pick": 66,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 413,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 33,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 46,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 3,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 681,
            "origin": "South Adelaide",
            "round": 3,
            "pick": 44,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 682,
            "origin": "Perth Fc",
            "round": 1,
            "pick": 4,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 80,
            "origin": "Werribee",
            "round": 1,
            "pick": 8,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 388,
            "origin": "North Ballarat",
            "round": 3,
            "pick": 53,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 280,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 22,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 131,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 9,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 683,
            "origin": "Brisbane Academy",
            "round": 2,
            "pick": 42,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 105,
            "origin": "Claremont",
            "round": 5,
            "pick": 74,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 472,
            "origin": "Claremont",
            "round": 3,
            "pick": 43,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 81,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 1,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 684,
            "origin": "Tasmania Devils",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 535,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 16,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 246,
            "origin": "Northern Knights",
            "round": 3,
            "pick": 44,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 148,
            "origin": "Casey Scorpions",
            "round": 3,
            "pick": 37,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 685,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 23,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 253,
            "origin": "Peel Thunder",
            "round": 2,
            "pick": 31,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 351,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 21,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 389,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 10,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 686,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 22,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 254,
            "origin": "Western Jets",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 516,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 19,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 401,
            "origin": "Sandringham",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 294,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 26,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 687,
            "origin": "Central District",
            "round": 1,
            "pick": 23,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 688,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 31,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 689,
            "origin": "Woodville-west Torrens",
            "round": 1,
            "pick": 11,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 281,
            "origin": "Woodville-West Torrens",
            "round": 3,
            "pick": 40,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 690,
            "origin": "St Patrick''s",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 414,
            "origin": "Eastern Ranges",
            "round": 2,
            "pick": 25,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 691,
            "origin": "Woodville West Torrens",
            "round": 2,
            "pick": 25,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 692,
            "origin": "Gwv Rebels",
            "round": 4,
            "pick": 69,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 390,
            "origin": "Geelong Falcons",
            "round": 3,
            "pick": 52,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 452,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 10,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 255,
            "origin": "Gippsland Power",
            "round": 3,
            "pick": 46,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 693,
            "origin": "Western Jets",
            "round": 2,
            "pick": 18,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 26,
            "origin": "Subiaco",
            "round": 5,
            "pick": 66,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 10,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 26,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 694,
            "origin": "Maroochydore",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 256,
            "origin": "Geelong Falcons",
            "round": 4,
            "pick": 57,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 267,
            "origin": "Port Melbourne",
            "round": 2,
            "pick": 22,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 149,
            "origin": "Central District",
            "round": 1,
            "pick": 11,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 695,
            "origin": "Subiaco",
            "round": 4,
            "pick": 63,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 31,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 29,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 56,
            "origin": "North Shore",
            "round": 1,
            "pick": 3,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 696,
            "origin": "Bendigo Pioneers",
            "round": 2,
            "pick": 29,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 12,
            "origin": "Claremont",
            "round": 1,
            "pick": 21,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 189,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 9,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 268,
            "origin": "Eastern Ranges",
            "round": 4,
            "pick": 67,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 572,
            "origin": "Woodville West Torrens",
            "round": 4,
            "pick": 57,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 303,
            "origin": "Murray Bushrangers",
            "round": 5,
            "pick": 74,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 453,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 38,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 352,
            "origin": "Wanderers",
            "round": 3,
            "pick": 39,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 190,
            "origin": "Geelong",
            "round": 4,
            "pick": 57,
            "year": 2007,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 87,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 19,
            "year": 2003,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 697,
            "origin": "Glenelg",
            "round": 3,
            "pick": 33,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 369,
            "origin": "Adelaide Football Club",
            "round": 3,
            "pick": 38,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 150,
            "origin": "Oakleigh Chargers",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 698,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 39,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 699,
            "origin": "Gold Coast Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 531,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 34,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 59,
            "origin": "North Shore",
            "round": 8,
            "pick": 58,
            "year": 2012,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 20,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 2,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 83,
            "origin": "North Launceston",
            "round": 2,
            "pick": 35,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 333,
            "origin": "Perth",
            "round": 4,
            "pick": 60,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 536,
            "origin": "Dublin",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 391,
            "origin": "Peel Thunder",
            "round": 1,
            "pick": 9,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 415,
            "origin": "Glenelg",
            "round": 2,
            "pick": 40,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 2,
            "origin": "Glenelg",
            "round": 3,
            "pick": 58,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 700,
            "origin": "South Fremantle",
            "round": 2,
            "pick": 33,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 247,
            "origin": "Geelong Falcons",
            "round": 3,
            "pick": 51,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 701,
            "origin": "North Adelaide",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 575,
            "origin": "Frankston",
            "round": 2,
            "pick": 35,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 214,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 37,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 702,
            "origin": "Suns Academy",
            "round": 4,
            "pick": 40,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 703,
            "origin": "Central District",
            "round": 3,
            "pick": 53,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 282,
            "origin": "West Adelaide",
            "round": 1,
            "pick": 14,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 3
          },
          {
            "player_id": 704,
            "origin": "Dandenong Stingrays",
            "round": 3,
            "pick": 54,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 532,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 10,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 32,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 9,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 454,
            "origin": "Glenelg",
            "round": 2,
            "pick": 28,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 705,
            "origin": "Count Wexford",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 283,
            "origin": "Ireland",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 706,
            "origin": "Claremont",
            "round": 2,
            "pick": 42,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 707,
            "origin": "Perth",
            "round": 2,
            "pick": 27,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 708,
            "origin": "Suns Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 370,
            "origin": "Western Jets",
            "round": 1,
            "pick": 22,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 709,
            "origin": "Na Gaeil",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 4,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 4,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 101,
            "origin": "Perth Demons",
            "round": 1,
            "pick": 1,
            "year": 2011,
            "type": "Mini",
            "drafting_team_id": 7
          },
          {
            "player_id": 527,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 28,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 495,
            "origin": "County Tipperary",
            "round": 6,
            "pick": 69,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 579,
            "origin": "St Kevins",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 176,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 14,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 132,
            "origin": "Nt Thunder",
            "round": 2,
            "pick": 26,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 116,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 5,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 33,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 40,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 710,
            "origin": "Glenelg",
            "round": 1,
            "pick": 8,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 2
          },
          {
            "player_id": 711,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 8,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 353,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 46,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 553,
            "origin": "Eastern Ranges",
            "round": 1,
            "pick": 1,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 371,
            "origin": "Lions Academy",
            "round": 3,
            "pick": 54,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 712,
            "origin": "Devonport",
            "round": 2,
            "pick": 37,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 713,
            "origin": "Glenelg",
            "round": 1,
            "pick": 11,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 38,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 5,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 714,
            "origin": "Gippsland Power",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 521,
            "origin": "Bendigo Pioneers",
            "round": 2,
            "pick": 35,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 715,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 9,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 84,
            "origin": "Collingullie",
            "round": 1,
            "pick": 14,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 9,
            "origin": "Eastern Ranges",
            "round": 1,
            "pick": 2,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 215,
            "origin": "Claremont",
            "round": 1,
            "pick": 6,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 554,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 38,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 716,
            "origin": "Norwood",
            "round": 2,
            "pick": 37,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 235,
            "origin": "Lauderdale",
            "round": 6,
            "pick": 97,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 216,
            "origin": "Oakleigh Chargers",
            "round": 4,
            "pick": 58,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 717,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 3,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 517,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 20,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 507,
            "origin": "Woodville West Torrens",
            "round": 1,
            "pick": 12,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 295,
            "origin": "South Fremantle",
            "round": 1,
            "pick": 13,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 13
          },
          {
            "player_id": 191,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 50,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 314,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 3,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 109,
            "origin": "Woodville West Torrens",
            "round": 1,
            "pick": 5,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 718,
            "origin": "Wwt Eagles",
            "round": 2,
            "pick": 30,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 719,
            "origin": "Sturt",
            "round": 1,
            "pick": 13,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 304,
            "origin": "Claremont",
            "round": 1,
            "pick": 19,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 217,
            "origin": "East Perth",
            "round": 1,
            "pick": 18,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 117,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 9,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 342,
            "origin": "Surfers Paradise",
            "round": 1,
            "pick": 15,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 720,
            "origin": "West Perth",
            "round": 4,
            "pick": 59,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 236,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 13,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 721,
            "origin": "Sandringham Dragons",
            "round": 3,
            "pick": 46,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 95,
            "origin": "Williamstown",
            "round": 6,
            "pick": 90,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 722,
            "origin": "Calder Cannons",
            "round": 3,
            "pick": 47,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 284,
            "origin": "West Adelaide",
            "round": 1,
            "pick": 3,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 723,
            "origin": "GWV Rebels",
            "round": 2,
            "pick": 40,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 285,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 43,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 248,
            "origin": "Western Jets",
            "round": 1,
            "pick": 1,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 286,
            "origin": "Glenelg Football Club",
            "round": 2,
            "pick": 25,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 372,
            "origin": "Glenelg",
            "round": 2,
            "pick": 30,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 724,
            "origin": "Box Hill",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 373,
            "origin": "Murray Bushrangers",
            "round": 3,
            "pick": 38,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 568,
            "origin": "Uws Giants",
            "round": 1,
            "pick": 9,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 725,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 10,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 269,
            "origin": "Werribee",
            "round": 3,
            "pick": 51,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 88,
            "origin": "Subiaco Football Club",
            "round": 1,
            "pick": 7,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 416,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 16,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 51,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 22,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 354,
            "origin": "Tassie Mariners",
            "round": 1,
            "pick": 13,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 315,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 15,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 726,
            "origin": "St Mary''s",
            "round": 3,
            "pick": 51,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 727,
            "origin": "Glenelg",
            "round": 3,
            "pick": 52,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 324,
            "origin": "East Fremantle",
            "round": 2,
            "pick": 32,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 574,
            "origin": "Dandenong Stingrays",
            "round": 3,
            "pick": 49,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 513,
            "origin": "Perth",
            "round": 1,
            "pick": 22,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 206,
            "origin": "Tassie Devils",
            "round": 3,
            "pick": 40,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 27,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 5,
            "year": 2008,
            "type": "Pre-Season",
            "drafting_team_id": 1
          },
          {
            "player_id": 270,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 6,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 430,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 17,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 728,
            "origin": "NT Thunder",
            "round": 4,
            "pick": 37,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 729,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 34,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 355,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 43,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 181,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 25,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 356,
            "origin": "West Perth",
            "round": 2,
            "pick": 37,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 443,
            "origin": "North Ballarat Rebels",
            "round": 2,
            "pick": 31,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 207,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 25,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 730,
            "origin": "Woodville-west Torrens",
            "round": 2,
            "pick": 38,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 52,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 1,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 271,
            "origin": "North Adelaide",
            "round": 1,
            "pick": 5,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 539,
            "origin": "East Fremantle",
            "round": 4,
            "pick": 55,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 192,
            "origin": "Subiaco",
            "round": 2,
            "pick": 26,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 28,
            "origin": "Coburg",
            "round": 4,
            "pick": 66,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 731,
            "origin": "Lions Academy",
            "round": 2,
            "pick": 40,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 65,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 7,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 66,
            "origin": "Coburg",
            "round": 2,
            "pick": 25,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 118,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 9,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 732,
            "origin": "Norwood",
            "round": 1,
            "pick": 4,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 540,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 2,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 402,
            "origin": "Woodville West Torrens",
            "round": 2,
            "pick": 24,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 733,
            "origin": "Woodville-west Torrens",
            "round": 3,
            "pick": 37,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 455,
            "origin": "Williamstown",
            "round": 4,
            "pick": 57,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 734,
            "origin": "Footscray",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 357,
            "origin": "Gc Suns Academy",
            "round": 3,
            "pick": 49,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 225,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 7,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 462,
            "origin": "Dandenong Stingrays",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 177,
            "origin": "Eastern Ranges",
            "round": 4,
            "pick": 76,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 110,
            "origin": "Bendigo",
            "round": 1,
            "pick": 7,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 170,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 8,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 106,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 5,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 374,
            "origin": "Redland",
            "round": 6,
            "pick": 88,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 735,
            "origin": "Gwv Rebels",
            "round": 3,
            "pick": 43,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 563,
            "origin": "East Fremantle",
            "round": 2,
            "pick": 27,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 736,
            "origin": "Bendigo Pioneers",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 737,
            "origin": "Pennant Hills",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 119,
            "origin": "Subiaco",
            "round": 1,
            "pick": 11,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 107,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 7,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 53,
            "origin": "Aspendale",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 193,
            "origin": "Boronia",
            "round": 2,
            "pick": 34,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 738,
            "origin": "Gws Academy",
            "round": 4,
            "pick": 64,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 334,
            "origin": "Calder Cannons",
            "round": 4,
            "pick": 64,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 67,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 11,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 89,
            "origin": "Oakleigh Chargers",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 47,
            "origin": "Western Jets",
            "round": 3,
            "pick": 56,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 23,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 11,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 237,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 32,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 555,
            "origin": "Oakleigh Chargers",
            "round": 4,
            "pick": 53,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 90,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 12,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 226,
            "origin": "Geelong Falcons",
            "round": 3,
            "pick": 53,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 198,
            "origin": "Subiaco",
            "round": 2,
            "pick": 12,
            "year": 2012,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 199,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 1,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 114,
            "origin": "Eastern Ranges",
            "round": 3,
            "pick": 44,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 537,
            "origin": "Mt Gravatt",
            "round": 3,
            "pick": 34,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 96,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 7,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 739,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 33,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 158,
            "origin": "Woodville West Torrens",
            "round": 1,
            "pick": 14,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 133,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 14,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 740,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 21,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 741,
            "origin": "Woodville-west Torrens",
            "round": 3,
            "pick": 48,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 227,
            "origin": "North Ballarat",
            "round": 1,
            "pick": 19,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 541,
            "origin": "Geelong Supercats",
            "round": 3,
            "pick": 41,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 392,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 26,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 742,
            "origin": "QLD Soccer",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 287,
            "origin": "West Adelaide",
            "round": 1,
            "pick": 7,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 4
          },
          {
            "player_id": 218,
            "origin": "Daramalan College",
            "round": 5,
            "pick": 68,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 444,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 29,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 343,
            "origin": "South Adelaide",
            "round": 2,
            "pick": 27,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 743,
            "origin": "South Adelaide",
            "round": 2,
            "pick": 42,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 744,
            "origin": "Albury",
            "round": 2,
            "pick": 24,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 479,
            "origin": "Federals FC",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 68,
            "origin": "West Adelaide",
            "round": 3,
            "pick": 47,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 431,
            "origin": "East Perth",
            "round": 1,
            "pick": 18,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 6,
            "origin": "Belconnen",
            "round": 2,
            "pick": 24,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 745,
            "origin": "Penrith",
            "round": 1,
            "pick": 15,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 432,
            "origin": "Woodville West Torrens",
            "round": 1,
            "pick": 6,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 746,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 16,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 344,
            "origin": "Norwood",
            "round": 1,
            "pick": 5,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 358,
            "origin": "Eastern Ranges",
            "round": 1,
            "pick": 6,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 747,
            "origin": "Gwv Rebels",
            "round": 3,
            "pick": 47,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 456,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 27,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 57,
            "origin": "Geelong Vfl",
            "round": 2,
            "pick": 40,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 748,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 19,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 749,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 15,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 542,
            "origin": "Port Melbourne",
            "round": 1,
            "pick": 7,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 473,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 5,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 359,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 17,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 159,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 1,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 750,
            "origin": "North Adelaide",
            "round": 2,
            "pick": 23,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 751,
            "origin": "Box Hill Hawks",
            "round": 5,
            "pick": 73,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 219,
            "origin": "Murray Bushrangers",
            "round": 4,
            "pick": 70,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 752,
            "origin": "Norwood",
            "round": 3,
            "pick": 50,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 316,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 13,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 141,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 2,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 124,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 15,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 403,
            "origin": "Calder Cannons",
            "round": 3,
            "pick": 46,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 502,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 28,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 305,
            "origin": "Swan Districts",
            "round": 2,
            "pick": 28,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 753,
            "origin": "West Adelaide Fc",
            "round": 1,
            "pick": 2,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 433,
            "origin": "Redlands Fc",
            "round": 3,
            "pick": 42,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 754,
            "origin": "Claremont",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 463,
            "origin": "North Launcestion",
            "round": 1,
            "pick": 8,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 755,
            "origin": "Southport Sharks",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 756,
            "origin": "0",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 393,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 9,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 757,
            "origin": "Sligo, Ireland",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 526,
            "origin": "Leeton",
            "round": 1,
            "pick": 5,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 758,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 7,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 39,
            "origin": "Aspendale",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 759,
            "origin": "Swan Districts",
            "round": 1,
            "pick": 12,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 760,
            "origin": "Basketball",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 325,
            "origin": "North Ballarat Rebels",
            "round": 2,
            "pick": 27,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 220,
            "origin": "County Laois, Ireland",
            "round": 6,
            "pick": 102,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 761,
            "origin": "Wodonga Football",
            "round": 2,
            "pick": 25,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 762,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 3,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 763,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 1,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 764,
            "origin": "Europe",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 765,
            "origin": "Norwood",
            "round": 2,
            "pick": 32,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 445,
            "origin": "Ainslie",
            "round": 1,
            "pick": 2,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 480,
            "origin": "Murray Bushrangers",
            "round": 2,
            "pick": 37,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 766,
            "origin": "Gippsland Power",
            "round": 3,
            "pick": 42,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 767,
            "origin": "Western Jets",
            "round": 2,
            "pick": 27,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 60,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 26,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 125,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 9,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 768,
            "origin": "East Fremantle",
            "round": 3,
            "pick": 50,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 375,
            "origin": "Geelong Falcons",
            "round": 3,
            "pick": 54,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 769,
            "origin": "North Hobart",
            "round": 1,
            "pick": 2,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 446,
            "origin": "Broken Hill North",
            "round": 6,
            "pick": 75,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 326,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 23,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 288,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 22,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 58,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 1,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 61,
            "origin": "Swan Districts",
            "round": 4,
            "pick": 53,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 208,
            "origin": "Western Jets",
            "round": 2,
            "pick": 19,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 560,
            "origin": "East Fremantle",
            "round": 2,
            "pick": 39,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 770,
            "origin": "Claremont",
            "round": 3,
            "pick": 51,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 394,
            "origin": "Claremont",
            "round": 6,
            "pick": 77,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 257,
            "origin": "Swan Districts",
            "round": 2,
            "pick": 22,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 771,
            "origin": "Glenorchy",
            "round": 2,
            "pick": 42,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 772,
            "origin": "Woodville-west Torrens",
            "round": 4,
            "pick": 59,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 434,
            "origin": "Eastern Ranges",
            "round": 1,
            "pick": 9,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 564,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 15,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 221,
            "origin": "Mount Eliza Football Club",
            "round": 1,
            "pick": 1,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 171,
            "origin": "Southport",
            "round": 1,
            "pick": 13,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 417,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 26,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 773,
            "origin": "Claremont",
            "round": 4,
            "pick": 54,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 40,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 1,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 404,
            "origin": "Swans Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 238,
            "origin": "North Adelaide",
            "round": 1,
            "pick": 3,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 134,
            "origin": "Glenelg",
            "round": 3,
            "pick": 48,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 522,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 35,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 774,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 23,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 135,
            "origin": "Narrandera",
            "round": 8,
            "pick": 95,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 418,
            "origin": "North Ballarat Rebels",
            "round": 4,
            "pick": 61,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 228,
            "origin": "WA",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 775,
            "origin": "Vic Metro",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 776,
            "origin": "Peel Thunder",
            "round": 4,
            "pick": 57,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 43,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 7,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 142,
            "origin": "Sturt",
            "round": 1,
            "pick": 6,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 85,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 23,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 91,
            "origin": "Sydney University",
            "round": 4,
            "pick": 67,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 457,
            "origin": "Camperdown",
            "round": 3,
            "pick": 43,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 533,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 41,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 464,
            "origin": "North Adelaide",
            "round": 3,
            "pick": 32,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 115,
            "origin": "Geelong Falcons",
            "round": 3,
            "pick": 45,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 777,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 28,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 778,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 8,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 496,
            "origin": "Western Jets",
            "round": 5,
            "pick": 72,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 108,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 30,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 481,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 7,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 514,
            "origin": "Mt Eliza Football Netball Club",
            "round": 1,
            "pick": 6,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 581,
            "origin": "Sturt",
            "round": 3,
            "pick": 49,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 327,
            "origin": "Northern Knights",
            "round": 2,
            "pick": 23,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 508,
            "origin": "Sturt",
            "round": 4,
            "pick": 66,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 509,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 9,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 75,
            "origin": "Broadbeach",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 345,
            "origin": "East Fremantle",
            "round": 1,
            "pick": 11,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 11
          }
        ]'
    );
