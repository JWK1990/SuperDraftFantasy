/* Insert Player Entities. */
INSERT INTO player_draft_entity(player_id, origin, round, pick, year, type, drafting_team_id)
    SELECT player_id, origin, round, pick, year, type, drafting_team_id
    FROM json_populate_recordset(NULL::player_draft_entity,
        '[
          {
            "player_id": 1,
            "origin": "Richmond Football Club",
            "round": 1,
            "pick": 16,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 2,
            "origin": "West Perth",
            "round": 1,
            "pick": 19,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 3,
            "origin": "West Perth",
            "round": 2,
            "pick": 35,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 4,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 13,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 5,
            "origin": "South Fremantle",
            "round": 3,
            "pick": 33,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 6,
            "origin": "South Fremantle",
            "round": 1,
            "pick": 8,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 7,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 4,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 8,
            "origin": "Subiaco",
            "round": 2,
            "pick": 32,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 9,
            "origin": "Norwood",
            "round": 1,
            "pick": 7,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 10,
            "origin": "Perth",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 11,
            "origin": "East Fremantle",
            "round": 3,
            "pick": 44,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 12,
            "origin": "West Perth",
            "round": 2,
            "pick": 21,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 13,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 26,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 14,
            "origin": "Sandringham Dragons",
            "round": 2,
            "pick": 28,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 15,
            "origin": "Old Xaverians",
            "round": 2,
            "pick": 26,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 16,
            "origin": "Sandringham Dragons",
            "round": 4,
            "pick": 68,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 17,
            "origin": "Territory Thunder",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 18,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 2,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 19,
            "origin": "Aspley",
            "round": 4,
            "pick": 61,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 20,
            "origin": "Gippsland Power",
            "round": 1,
            "pick": 18,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 21,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 55,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 22,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 4,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 23,
            "origin": "North Ballarat Rebels",
            "round": 3,
            "pick": 35,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 24,
            "origin": "Calder Cannons",
            "round": 4,
            "pick": 81,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 25,
            "origin": "Geelong",
            "round": 1,
            "pick": 11,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 26,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 17,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 27,
            "origin": "Norwood",
            "round": 1,
            "pick": 15,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 28,
            "origin": "Subiaco",
            "round": 1,
            "pick": 18,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 29,
            "origin": "Aspley",
            "round": 3,
            "pick": 48,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 30,
            "origin": "Glenelg",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 31,
            "origin": "Sturt",
            "round": 3,
            "pick": 42,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 32,
            "origin": "Brisbane Academy",
            "round": 3,
            "pick": 43,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 33,
            "origin": "Calder Cannons",
            "round": 2,
            "pick": 25,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 34,
            "origin": "Claremont",
            "round": 2,
            "pick": 22,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 35,
            "origin": "Claremont",
            "round": 3,
            "pick": 43,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 36,
            "origin": "Dandenong Stingrays",
            "round": 2,
            "pick": 39,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 37,
            "origin": "Murray Bushrangers",
            "round": 4,
            "pick": 55,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 38,
            "origin": "Dandenong Stingrays",
            "round": 5,
            "pick": 75,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 39,
            "origin": "Swans Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 40,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 14,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 41,
            "origin": "North Ballarat Rebels",
            "round": 1,
            "pick": 17,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 42,
            "origin": "Gippsland Power",
            "round": 2,
            "pick": 28,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 43,
            "origin": "Gwv Rebels",
            "round": 2,
            "pick": 36,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 44,
            "origin": "Calder Cannons",
            "round": 1,
            "pick": 3,
            "year": 2004,
            "type": "Pre-Season",
            "drafting_team_id": 2
          },
          {
            "player_id": 45,
            "origin": "Williamstown",
            "round": 4,
            "pick": 59,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 46,
            "origin": "Geelong Falcons",
            "round": 5,
            "pick": 86,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 47,
            "origin": "Oakleigh Chargers",
            "round": 3,
            "pick": 45,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 48,
            "origin": "Oakleigh Chargers",
            "round": 1,
            "pick": 3,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 49,
            "origin": "Devonport",
            "round": 1,
            "pick": 15,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 50,
            "origin": "Swan Districts",
            "round": 2,
            "pick": 34,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 51,
            "origin": "Unsw",
            "round": 1,
            "pick": 10,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 52,
            "origin": "Geelong Vfl",
            "round": 3,
            "pick": 54,
            "year": 2011,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 53,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 5,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 54,
            "origin": "South Fremantle",
            "round": 2,
            "pick": 29,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 55,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 11,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 56,
            "origin": "West Adelaide",
            "round": 2,
            "pick": 37,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 57,
            "origin": "Northern Knights",
            "round": 1,
            "pick": 4,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 58,
            "origin": "Sturt",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 59,
            "origin": "Oakleigh Chargers",
            "round": 8,
            "pick": 77,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 60,
            "origin": "Cairns",
            "round": 1,
            "pick": 10,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 61,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 21,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 62,
            "origin": "Basketball",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 63,
            "origin": "Box Hill",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 64,
            "origin": "Calder Cannons",
            "round": 4,
            "pick": 53,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 65,
            "origin": "West Adelaide",
            "round": 4,
            "pick": 66,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 66,
            "origin": "Bendigo Pioneers",
            "round": 1,
            "pick": 13,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 67,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 2,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 68,
            "origin": "Sandringham Dragons",
            "round": 1,
            "pick": 3,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 69,
            "origin": "Temora",
            "round": 4,
            "pick": 77,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 70,
            "origin": "Pennant Hills",
            "round": 2,
            "pick": 34,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 71,
            "origin": "Swan Districts",
            "round": 5,
            "pick": 67,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 72,
            "origin": "Subiaco",
            "round": 3,
            "pick": 46,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 73,
            "origin": "Murray Bushrangers",
            "round": 1,
            "pick": 9,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 74,
            "origin": "South Adelaide",
            "round": 1,
            "pick": 4,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 75,
            "origin": "Werribee Tigers",
            "round": 3,
            "pick": 47,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 76,
            "origin": "County Derry",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 77,
            "origin": "Eastern Ranges",
            "round": 2,
            "pick": 35,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 78,
            "origin": "Norwood",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 79,
            "origin": "Sandringham Dragons",
            "round": 4,
            "pick": 54,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 80,
            "origin": "Eastern Ranges",
            "round": 3,
            "pick": 50,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 81,
            "origin": "Geelong Falcons",
            "round": 2,
            "pick": 27,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 82,
            "origin": "Canberra",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 83,
            "origin": "Geelong Falcons",
            "round": 1,
            "pick": 12,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 84,
            "origin": "Oakleigh Chargers",
            "round": 2,
            "pick": 38,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 85,
            "origin": "Swans Academy",
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 86,
            "origin": "Gold Coast Suns Academy",
            "round": 2,
            "pick": 16,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 87,
            "origin": "Dandenong Stingrays",
            "round": 1,
            "pick": 5,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 88,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 89,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2000,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 90,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 91,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 92,
            "origin": null,
            "round": 4,
            "pick": 67,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 93,
            "origin": null,
            "round": 3,
            "pick": 53,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 94,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 95,
            "origin": null,
            "round": 3,
            "pick": 39,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 96,
            "origin": null,
            "round": 3,
            "pick": 52,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 97,
            "origin": null,
            "round": 3,
            "pick": 52,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 98,
            "origin": null,
            "round": 2,
            "pick": 41,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 99,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 100,
            "origin": null,
            "round": 4,
            "pick": 56,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 101,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 102,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 103,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 104,
            "origin": null,
            "round": 2,
            "pick": 39,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 105,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 106,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 107,
            "origin": null,
            "round": 6,
            "pick": 98,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 108,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 109,
            "origin": null,
            "round": 2,
            "pick": 41,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 110,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 111,
            "origin": null,
            "round": 5,
            "pick": 89,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 112,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 113,
            "origin": null,
            "round": 3,
            "pick": 45,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 114,
            "origin": null,
            "round": 4,
            "pick": 59,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 115,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 116,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 117,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 118,
            "origin": null,
            "round": 3,
            "pick": 45,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 119,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 120,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 121,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 122,
            "origin": null,
            "round": 2,
            "pick": 21,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 123,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 124,
            "origin": null,
            "round": 2,
            "pick": 35,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 125,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 126,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 127,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 128,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 129,
            "origin": null,
            "round": 2,
            "pick": 36,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 130,
            "origin": null,
            "round": 1,
            "pick": 24,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 131,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 132,
            "origin": null,
            "round": 2,
            "pick": 20,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 133,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 134,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 135,
            "origin": null,
            "round": 4,
            "pick": 55,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 136,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 137,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 138,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 139,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 140,
            "origin": null,
            "round": 5,
            "pick": 64,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 141,
            "origin": null,
            "round": 3,
            "pick": 29,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 142,
            "origin": null,
            "round": 2,
            "pick": 36,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 143,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 144,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 145,
            "origin": null,
            "round": 4,
            "pick": 62,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 146,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 147,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 148,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 149,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 150,
            "origin": null,
            "round": 2,
            "pick": 41,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 151,
            "origin": null,
            "round": 4,
            "pick": 60,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 152,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 153,
            "origin": null,
            "round": 1,
            "pick": 24,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 154,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 155,
            "origin": null,
            "round": 5,
            "pick": 86,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 156,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2011,
            "type": "Mini",
            "drafting_team_id": 0
          },
          {
            "player_id": 157,
            "origin": null,
            "round": 2,
            "pick": 23,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 158,
            "origin": null,
            "round": 4,
            "pick": 59,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 159,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 160,
            "origin": null,
            "round": 2,
            "pick": 43,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 161,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 162,
            "origin": null,
            "round": 1,
            "pick": 23,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 163,
            "origin": null,
            "round": 7,
            "pick": 107,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 164,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 165,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 166,
            "origin": null,
            "round": 6,
            "pick": 89,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 167,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 168,
            "origin": null,
            "round": 4,
            "pick": 70,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 169,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 170,
            "origin": null,
            "round": 3,
            "pick": 45,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 171,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 172,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 173,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 174,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 175,
            "origin": null,
            "round": 2,
            "pick": 38,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 176,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 177,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 178,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 179,
            "origin": null,
            "round": 5,
            "pick": 75,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 180,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 181,
            "origin": null,
            "round": 4,
            "pick": 56,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 182,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 183,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 184,
            "origin": null,
            "round": 4,
            "pick": 58,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 185,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 186,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 187,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 188,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 189,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 190,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 191,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 192,
            "origin": null,
            "round": 1,
            "pick": 21,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 193,
            "origin": null,
            "round": 2,
            "pick": 35,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 194,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 195,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 196,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 197,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 198,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 199,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 200,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 201,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 202,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 203,
            "origin": null,
            "round": 5,
            "pick": 69,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 204,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 205,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 206,
            "origin": null,
            "round": 4,
            "pick": 52,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 207,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 208,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 209,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 210,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 211,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 212,
            "origin": null,
            "round": 2,
            "pick": 41,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 213,
            "origin": null,
            "round": 2,
            "pick": 39,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 214,
            "origin": null,
            "round": 3,
            "pick": 55,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 215,
            "origin": null,
            "round": 4,
            "pick": 60,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 216,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 217,
            "origin": null,
            "round": 6,
            "pick": 85,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 218,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 219,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 220,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 221,
            "origin": null,
            "round": 4,
            "pick": 58,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 222,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 223,
            "origin": null,
            "round": 3,
            "pick": 41,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 224,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 225,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 226,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 227,
            "origin": null,
            "round": 4,
            "pick": 56,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 228,
            "origin": null,
            "round": 4,
            "pick": 65,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 229,
            "origin": null,
            "round": 2,
            "pick": 34,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 230,
            "origin": null,
            "round": 6,
            "pick": 84,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 231,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 232,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2004,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 233,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 234,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 235,
            "origin": null,
            "round": 4,
            "pick": 61,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 236,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 237,
            "origin": null,
            "round": 5,
            "pick": 83,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 238,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 239,
            "origin": null,
            "round": 3,
            "pick": 38,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 240,
            "origin": null,
            "round": 2,
            "pick": 20,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 241,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 242,
            "origin": null,
            "round": 4,
            "pick": 62,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 243,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 244,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 17
          },
          {
            "player_id": 245,
            "origin": null,
            "round": 4,
            "pick": 60,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 246,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 247,
            "origin": null,
            "round": 5,
            "pick": 72,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 248,
            "origin": null,
            "round": 3,
            "pick": 34,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 249,
            "origin": null,
            "round": 5,
            "pick": 58,
            "year": 2006,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 250,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 251,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 252,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 253,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 254,
            "origin": null,
            "round": 2,
            "pick": 21,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 255,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 256,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 257,
            "origin": null,
            "round": 3,
            "pick": 37,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 258,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 259,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 260,
            "origin": null,
            "round": 5,
            "pick": 71,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 261,
            "origin": null,
            "round": 3,
            "pick": 53,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 262,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 263,
            "origin": null,
            "round": 4,
            "pick": 55,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 264,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 265,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 266,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 267,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 268,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 269,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 270,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 271,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2009,
            "type": "Pre-Season",
            "drafting_team_id": 13
          },
          {
            "player_id": 272,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 273,
            "origin": null,
            "round": 5,
            "pick": 76,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 274,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 275,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 276,
            "origin": null,
            "round": 1,
            "pick": 23,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 277,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 278,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2011,
            "type": "Pre-Season",
            "drafting_team_id": 7
          },
          {
            "player_id": 279,
            "origin": null,
            "round": 5,
            "pick": 72,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 280,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 281,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 282,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 283,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 284,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 285,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2006,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 286,
            "origin": null,
            "round": 3,
            "pick": 44,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 287,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 288,
            "origin": null,
            "round": 5,
            "pick": 76,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 289,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 290,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2019,
            "type": "Pre-Season",
            "drafting_team_id": 9
          },
          {
            "player_id": 291,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2020,
            "type": "Pre-Season",
            "drafting_team_id": 0
          },
          {
            "player_id": 292,
            "origin": null,
            "round": 3,
            "pick": 41,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 293,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 294,
            "origin": null,
            "round": 3,
            "pick": 47,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 295,
            "origin": null,
            "round": 9,
            "pick": 78,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 296,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 297,
            "origin": null,
            "round": 1,
            "pick": 21,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 298,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 299,
            "origin": null,
            "round": 3,
            "pick": 35,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 300,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 301,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 302,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 303,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 304,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 305,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2010,
            "type": "Pre-Season",
            "drafting_team_id": 4
          },
          {
            "player_id": 306,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 307,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 308,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 309,
            "origin": null,
            "round": 3,
            "pick": 45,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 310,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 311,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 312,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 313,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 314,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 315,
            "origin": null,
            "round": 3,
            "pick": 54,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 316,
            "origin": null,
            "round": 2,
            "pick": 20,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 317,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 318,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 319,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2012,
            "type": "Mini",
            "drafting_team_id": 10
          },
          {
            "player_id": 320,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 321,
            "origin": null,
            "round": 2,
            "pick": 19,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 322,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 323,
            "origin": null,
            "round": 2,
            "pick": 20,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 324,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 2
          },
          {
            "player_id": 325,
            "origin": null,
            "round": 4,
            "pick": 54,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 326,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 327,
            "origin": null,
            "round": 4,
            "pick": 56,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 328,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 329,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2010,
            "type": "Pre-Season",
            "drafting_team_id": 13
          },
          {
            "player_id": 330,
            "origin": null,
            "round": 3,
            "pick": 45,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 331,
            "origin": null,
            "round": 3,
            "pick": 56,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 332,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 333,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 334,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 335,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 336,
            "origin": null,
            "round": 3,
            "pick": 49,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 337,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 338,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 339,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 340,
            "origin": null,
            "round": 5,
            "pick": 65,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 341,
            "origin": null,
            "round": 3,
            "pick": 60,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 342,
            "origin": null,
            "round": 4,
            "pick": 61,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 343,
            "origin": null,
            "round": 2,
            "pick": 21,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 344,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 345,
            "origin": null,
            "round": 3,
            "pick": 49,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 346,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 347,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 348,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 349,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2010,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 350,
            "origin": null,
            "round": 3,
            "pick": 50,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 351,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 352,
            "origin": null,
            "round": 7,
            "pick": 105,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 353,
            "origin": null,
            "round": 4,
            "pick": 58,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 354,
            "origin": null,
            "round": 5,
            "pick": 63,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 355,
            "origin": null,
            "round": 5,
            "pick": 85,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 356,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 357,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 358,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 359,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 360,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 361,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 362,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 363,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2011,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 364,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 365,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 366,
            "origin": null,
            "round": 2,
            "pick": 40,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 367,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 368,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 369,
            "origin": null,
            "round": 4,
            "pick": 58,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 370,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 371,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 372,
            "origin": null,
            "round": 3,
            "pick": 40,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 373,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 374,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 375,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 376,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 377,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 378,
            "origin": null,
            "round": 3,
            "pick": 40,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 379,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 380,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 381,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 382,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 383,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 384,
            "origin": null,
            "round": 3,
            "pick": 41,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 385,
            "origin": null,
            "round": 3,
            "pick": 52,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 386,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 387,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 388,
            "origin": null,
            "round": 6,
            "pick": 86,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 389,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 390,
            "origin": null,
            "round": 3,
            "pick": 54,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 391,
            "origin": null,
            "round": 4,
            "pick": 56,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 392,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 393,
            "origin": null,
            "round": 5,
            "pick": 73,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 394,
            "origin": null,
            "round": 1,
            "pick": 22,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 395,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 396,
            "origin": null,
            "round": 2,
            "pick": 36,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 397,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 398,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 399,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 400,
            "origin": null,
            "round": 5,
            "pick": 76,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 401,
            "origin": null,
            "round": 2,
            "pick": 41,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 402,
            "origin": null,
            "round": 3,
            "pick": 42,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 403,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 404,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 405,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 406,
            "origin": null,
            "round": 2,
            "pick": 16,
            "year": 2012,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 407,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 408,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 409,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 410,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 411,
            "origin": null,
            "round": 3,
            "pick": 41,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 412,
            "origin": null,
            "round": 3,
            "pick": 49,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 413,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 414,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 415,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 416,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 417,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 418,
            "origin": null,
            "round": 4,
            "pick": 61,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 419,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 420,
            "origin": null,
            "round": 2,
            "pick": 21,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 421,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 422,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 423,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 424,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 425,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 426,
            "origin": null,
            "round": 2,
            "pick": 34,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 427,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 428,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 429,
            "origin": null,
            "round": 3,
            "pick": 50,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 430,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 431,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 432,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 433,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2019,
            "type": "Pre-Season",
            "drafting_team_id": 2
          },
          {
            "player_id": 434,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2007,
            "type": "Pre-Season",
            "drafting_team_id": 10
          },
          {
            "player_id": 435,
            "origin": null,
            "round": 2,
            "pick": 44,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 436,
            "origin": null,
            "round": 2,
            "pick": 39,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 437,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 438,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 439,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 440,
            "origin": null,
            "round": 3,
            "pick": 40,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 441,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 442,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 443,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 444,
            "origin": null,
            "round": 3,
            "pick": 66,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 445,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 446,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 447,
            "origin": null,
            "round": 3,
            "pick": 44,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 448,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 449,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 450,
            "origin": null,
            "round": 3,
            "pick": 53,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 451,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 452,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 453,
            "origin": null,
            "round": 2,
            "pick": 42,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 454,
            "origin": null,
            "round": 5,
            "pick": 74,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 455,
            "origin": null,
            "round": 3,
            "pick": 43,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 456,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 457,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 458,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 459,
            "origin": null,
            "round": 3,
            "pick": 44,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 460,
            "origin": null,
            "round": 3,
            "pick": 37,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 461,
            "origin": null,
            "round": 1,
            "pick": 23,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 462,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 463,
            "origin": null,
            "round": 1,
            "pick": 21,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 464,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 465,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 466,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 467,
            "origin": null,
            "round": 2,
            "pick": 19,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 4
          },
          {
            "player_id": 468,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 469,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 470,
            "origin": null,
            "round": 1,
            "pick": 23,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 471,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 472,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 473,
            "origin": null,
            "round": 3,
            "pick": 40,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 474,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 475,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 476,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 477,
            "origin": null,
            "round": 4,
            "pick": 69,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 478,
            "origin": null,
            "round": 3,
            "pick": 52,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 479,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 480,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 481,
            "origin": null,
            "round": 2,
            "pick": 18,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 482,
            "origin": null,
            "round": 5,
            "pick": 66,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 483,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 484,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 485,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 486,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 487,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 488,
            "origin": null,
            "round": 4,
            "pick": 63,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 489,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 490,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 491,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 492,
            "origin": null,
            "round": 1,
            "pick": 21,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 493,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 494,
            "origin": null,
            "round": 4,
            "pick": 67,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 495,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 496,
            "origin": null,
            "round": 5,
            "pick": 74,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 497,
            "origin": null,
            "round": 2,
            "pick": 38,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 498,
            "origin": null,
            "round": 3,
            "pick": 39,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 499,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2007,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 500,
            "origin": null,
            "round": 2,
            "pick": 19,
            "year": 2003,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 501,
            "origin": null,
            "round": 3,
            "pick": 33,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 502,
            "origin": null,
            "round": 3,
            "pick": 38,
            "year": 2017,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 503,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 504,
            "origin": null,
            "round": 3,
            "pick": 39,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 505,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 506,
            "origin": null,
            "round": 2,
            "pick": 34,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 507,
            "origin": null,
            "round": 8,
            "pick": 58,
            "year": 2012,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 508,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 509,
            "origin": null,
            "round": 2,
            "pick": 35,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 510,
            "origin": null,
            "round": 4,
            "pick": 60,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 511,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 512,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 513,
            "origin": null,
            "round": 2,
            "pick": 40,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 514,
            "origin": null,
            "round": 3,
            "pick": 58,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 515,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 516,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 517,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 518,
            "origin": null,
            "round": 2,
            "pick": 35,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 519,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 520,
            "origin": null,
            "round": 4,
            "pick": 40,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 521,
            "origin": null,
            "round": 3,
            "pick": 53,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 522,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 3
          },
          {
            "player_id": 523,
            "origin": null,
            "round": 3,
            "pick": 54,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 524,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 525,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 526,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 527,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 528,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 529,
            "origin": null,
            "round": 2,
            "pick": 42,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 530,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 531,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 532,
            "origin": null,
            "round": 1,
            "pick": 22,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 533,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 534,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 535,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2011,
            "type": "Mini",
            "drafting_team_id": 7
          },
          {
            "player_id": 536,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 537,
            "origin": null,
            "round": 6,
            "pick": 69,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 538,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 539,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 540,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 541,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 542,
            "origin": null,
            "round": 2,
            "pick": 40,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 543,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 2
          },
          {
            "player_id": 544,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 545,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 546,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 547,
            "origin": null,
            "round": 3,
            "pick": 54,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 548,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 549,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 550,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 551,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 552,
            "origin": null,
            "round": 2,
            "pick": 35,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 553,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 554,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 555,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 556,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 557,
            "origin": null,
            "round": 2,
            "pick": 38,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 558,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 559,
            "origin": null,
            "round": 6,
            "pick": 97,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 560,
            "origin": null,
            "round": 4,
            "pick": 58,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 561,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 562,
            "origin": null,
            "round": 1,
            "pick": 20,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 563,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 564,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 13
          },
          {
            "player_id": 565,
            "origin": null,
            "round": 3,
            "pick": 50,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 566,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 567,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 568,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 569,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 570,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 571,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 572,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 573,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 574,
            "origin": null,
            "round": 4,
            "pick": 59,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 575,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 576,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 577,
            "origin": null,
            "round": 6,
            "pick": 90,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 578,
            "origin": null,
            "round": 3,
            "pick": 47,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 579,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 580,
            "origin": null,
            "round": 2,
            "pick": 40,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 581,
            "origin": null,
            "round": 3,
            "pick": 43,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 582,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 583,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 584,
            "origin": null,
            "round": 2,
            "pick": 30,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 585,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 586,
            "origin": null,
            "round": 3,
            "pick": 38,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 587,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 588,
            "origin": null,
            "round": 1,
            "pick": 10,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 589,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 590,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 591,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 592,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 593,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 594,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 595,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 596,
            "origin": null,
            "round": 3,
            "pick": 52,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 597,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 598,
            "origin": null,
            "round": 3,
            "pick": 49,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 599,
            "origin": null,
            "round": 1,
            "pick": 22,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 600,
            "origin": null,
            "round": 3,
            "pick": 40,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 601,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2008,
            "type": "Pre-Season",
            "drafting_team_id": 1
          },
          {
            "player_id": 602,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 603,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 15
          },
          {
            "player_id": 604,
            "origin": null,
            "round": 4,
            "pick": 37,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 605,
            "origin": null,
            "round": 2,
            "pick": 34,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 606,
            "origin": null,
            "round": 2,
            "pick": 43,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 607,
            "origin": null,
            "round": 1,
            "pick": 25,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 608,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 609,
            "origin": null,
            "round": 2,
            "pick": 31,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 610,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 611,
            "origin": null,
            "round": 2,
            "pick": 38,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 612,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 613,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 614,
            "origin": null,
            "round": 4,
            "pick": 55,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 615,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 616,
            "origin": null,
            "round": 4,
            "pick": 66,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 617,
            "origin": null,
            "round": 2,
            "pick": 40,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 618,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2005,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 619,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 620,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 621,
            "origin": null,
            "round": 1,
            "pick": 4,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 9
          },
          {
            "player_id": 622,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 623,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 624,
            "origin": null,
            "round": 3,
            "pick": 37,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 625,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 626,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 627,
            "origin": null,
            "round": 3,
            "pick": 49,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 628,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 629,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 630,
            "origin": null,
            "round": 4,
            "pick": 76,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 631,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2006,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 632,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 633,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 634,
            "origin": null,
            "round": 6,
            "pick": 88,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 635,
            "origin": null,
            "round": 3,
            "pick": 43,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 636,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 637,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 638,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 639,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 640,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 641,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 642,
            "origin": null,
            "round": 2,
            "pick": 34,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 643,
            "origin": null,
            "round": 4,
            "pick": 64,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 644,
            "origin": null,
            "round": 4,
            "pick": 64,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 645,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 646,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 647,
            "origin": null,
            "round": 3,
            "pick": 56,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 648,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 649,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 650,
            "origin": null,
            "round": 4,
            "pick": 53,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 651,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 652,
            "origin": null,
            "round": 3,
            "pick": 53,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 6
          },
          {
            "player_id": 653,
            "origin": null,
            "round": 2,
            "pick": 12,
            "year": 2012,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 654,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 655,
            "origin": null,
            "round": 3,
            "pick": 44,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 656,
            "origin": null,
            "round": 3,
            "pick": 34,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 1
          },
          {
            "player_id": 657,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 658,
            "origin": null,
            "round": 2,
            "pick": 33,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 659,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 660,
            "origin": null,
            "round": 1,
            "pick": 14,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 661,
            "origin": null,
            "round": 1,
            "pick": 21,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 662,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 663,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 664,
            "origin": null,
            "round": 3,
            "pick": 41,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 665,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 666,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 667,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2018,
            "type": "Midyear",
            "drafting_team_id": 4
          },
          {
            "player_id": 668,
            "origin": null,
            "round": 5,
            "pick": 68,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 669,
            "origin": null,
            "round": 2,
            "pick": 29,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 670,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 671,
            "origin": null,
            "round": 2,
            "pick": 42,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 672,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 673,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 674,
            "origin": null,
            "round": 3,
            "pick": 47,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 675,
            "origin": null,
            "round": 1,
            "pick": 18,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 676,
            "origin": null,
            "round": 2,
            "pick": 24,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 677,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 8
          },
          {
            "player_id": 678,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 13
          },
          {
            "player_id": 679,
            "origin": null,
            "round": 1,
            "pick": 16,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 680,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 681,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 682,
            "origin": null,
            "round": 3,
            "pick": 47,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 683,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 684,
            "origin": null,
            "round": 2,
            "pick": 40,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 685,
            "origin": null,
            "round": 1,
            "pick": 19,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 686,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 687,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 0
          },
          {
            "player_id": 688,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 689,
            "origin": null,
            "round": 1,
            "pick": 17,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 690,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 691,
            "origin": null,
            "round": 2,
            "pick": 23,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 692,
            "origin": null,
            "round": 5,
            "pick": 73,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 693,
            "origin": null,
            "round": 4,
            "pick": 70,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 694,
            "origin": null,
            "round": 3,
            "pick": 50,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 695,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 696,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 697,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 698,
            "origin": null,
            "round": 3,
            "pick": 46,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 699,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 700,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 701,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 702,
            "origin": null,
            "round": 3,
            "pick": 42,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 3
          },
          {
            "player_id": 703,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 704,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 705,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 706,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 707,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 708,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 709,
            "origin": null,
            "round": 1,
            "pick": 5,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 7
          },
          {
            "player_id": 710,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 711,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 712,
            "origin": null,
            "round": 1,
            "pick": 12,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 713,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 714,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 715,
            "origin": null,
            "round": 6,
            "pick": 102,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 716,
            "origin": null,
            "round": 2,
            "pick": 25,
            "year": 2013,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 717,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 718,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 719,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 720,
            "origin": null,
            "round": 2,
            "pick": 32,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 721,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2014,
            "type": "Rookie",
            "drafting_team_id": 10
          },
          {
            "player_id": 722,
            "origin": null,
            "round": 2,
            "pick": 37,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 723,
            "origin": null,
            "round": 3,
            "pick": 42,
            "year": 2009,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 724,
            "origin": null,
            "round": 2,
            "pick": 27,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 725,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 726,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 13
          },
          {
            "player_id": 727,
            "origin": null,
            "round": 3,
            "pick": 50,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 728,
            "origin": null,
            "round": 3,
            "pick": 54,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 6
          },
          {
            "player_id": 729,
            "origin": null,
            "round": 1,
            "pick": 2,
            "year": 2020,
            "type": "Rookie",
            "drafting_team_id": 11
          },
          {
            "player_id": 730,
            "origin": null,
            "round": 6,
            "pick": 75,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 731,
            "origin": null,
            "round": 2,
            "pick": 23,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 732,
            "origin": null,
            "round": 1,
            "pick": 22,
            "year": 2010,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 733,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 734,
            "origin": null,
            "round": 4,
            "pick": 53,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 735,
            "origin": null,
            "round": 2,
            "pick": 19,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 736,
            "origin": null,
            "round": 2,
            "pick": 39,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 15
          },
          {
            "player_id": 737,
            "origin": null,
            "round": 3,
            "pick": 51,
            "year": 2015,
            "type": "Rookie",
            "drafting_team_id": 16
          },
          {
            "player_id": 738,
            "origin": null,
            "round": 6,
            "pick": 77,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 739,
            "origin": null,
            "round": 2,
            "pick": 22,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 5
          },
          {
            "player_id": 740,
            "origin": null,
            "round": 2,
            "pick": 42,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 14
          },
          {
            "player_id": 741,
            "origin": null,
            "round": 4,
            "pick": 59,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 742,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 10
          },
          {
            "player_id": 743,
            "origin": null,
            "round": 1,
            "pick": 15,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 744,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 745,
            "origin": null,
            "round": 1,
            "pick": 13,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 746,
            "origin": null,
            "round": 2,
            "pick": 26,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 747,
            "origin": null,
            "round": 4,
            "pick": 54,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 748,
            "origin": null,
            "round": 1,
            "pick": 1,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 749,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 750,
            "origin": null,
            "round": 1,
            "pick": 3,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 14
          },
          {
            "player_id": 751,
            "origin": null,
            "round": 3,
            "pick": 48,
            "year": 2015,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 752,
            "origin": null,
            "round": 2,
            "pick": 35,
            "year": 2018,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 753,
            "origin": null,
            "round": 2,
            "pick": 23,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 754,
            "origin": null,
            "round": 8,
            "pick": 95,
            "year": 2013,
            "type": "National",
            "drafting_team_id": 8
          },
          {
            "player_id": 755,
            "origin": null,
            "round": 4,
            "pick": 61,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 2
          },
          {
            "player_id": 756,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 757,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 758,
            "origin": null,
            "round": 4,
            "pick": 57,
            "year": 2020,
            "type": "National",
            "drafting_team_id": 16
          },
          {
            "player_id": 759,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 760,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 12
          },
          {
            "player_id": 761,
            "origin": null,
            "round": 2,
            "pick": 23,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 762,
            "origin": null,
            "round": 4,
            "pick": 67,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 3
          },
          {
            "player_id": 763,
            "origin": null,
            "round": 3,
            "pick": 43,
            "year": 2007,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 764,
            "origin": null,
            "round": 2,
            "pick": 41,
            "year": 2012,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 765,
            "origin": null,
            "round": 3,
            "pick": 32,
            "year": 2019,
            "type": "Rookie",
            "drafting_team_id": 12
          },
          {
            "player_id": 766,
            "origin": null,
            "round": 3,
            "pick": 45,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 9
          },
          {
            "player_id": 767,
            "origin": null,
            "round": 2,
            "pick": 28,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 0
          },
          {
            "player_id": 768,
            "origin": null,
            "round": 1,
            "pick": 8,
            "year": 2014,
            "type": "National",
            "drafting_team_id": 7
          },
          {
            "player_id": 769,
            "origin": null,
            "round": 5,
            "pick": 72,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 770,
            "origin": null,
            "round": 1,
            "pick": 30,
            "year": 2011,
            "type": "National",
            "drafting_team_id": 1
          },
          {
            "player_id": 771,
            "origin": null,
            "round": 1,
            "pick": 7,
            "year": 2019,
            "type": "National",
            "drafting_team_id": 5
          },
          {
            "player_id": 772,
            "origin": null,
            "round": 1,
            "pick": 6,
            "year": 2018,
            "type": "Rookie",
            "drafting_team_id": 17
          },
          {
            "player_id": 773,
            "origin": null,
            "round": 3,
            "pick": 49,
            "year": 2016,
            "type": "National",
            "drafting_team_id": 17
          },
          {
            "player_id": 774,
            "origin": null,
            "round": 2,
            "pick": 23,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 775,
            "origin": null,
            "round": 4,
            "pick": 66,
            "year": 2017,
            "type": "National",
            "drafting_team_id": 4
          },
          {
            "player_id": 776,
            "origin": null,
            "round": 1,
            "pick": 9,
            "year": 2008,
            "type": "National",
            "drafting_team_id": 11
          },
          {
            "player_id": 777,
            "origin": null,
            "round": null,
            "pick": null,
            "year": null,
            "type": null,
            "drafting_team_id": null
          },
          {
            "player_id": 778,
            "origin": null,
            "round": 1,
            "pick": 11,
            "year": 2016,
            "type": "Rookie",
            "drafting_team_id": 11
          }
        ]'
    );
