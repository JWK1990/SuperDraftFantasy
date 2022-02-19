/* Clear Previous Player Position Joins. */
TRUNCATE TABLE player_position_join;

/* Define Player Position Joins. */
with player_position_join_import_json (import_json) as (
    values
        ('[
          {
            "player_id": 1,
            "position_id": 3
          },
          {
            "player_id": 2,
            "position_id": 2
          },
          {
            "player_id": 3,
            "position_id": 1
          },
          {
            "player_id": 4,
            "position_id": 2
          },
          {
            "player_id": 5,
            "position_id": 1
          },
          {
            "player_id": 6,
            "position_id": 2
          },
          {
            "player_id": 7,
            "position_id": 2
          },
          {
            "player_id": 8,
            "position_id": 3
          },
          {
            "player_id": 9,
            "position_id": 2
          },
          {
            "player_id": 10,
            "position_id": 2
          },
          {
            "player_id": 11,
            "position_id": 2
          },
          {
            "player_id": 12,
            "position_id": 2
          },
          {
            "player_id": 13,
            "position_id": 2
          },
          {
            "player_id": 14,
            "position_id": 2
          },
          {
            "player_id": 15,
            "position_id": 2
          },
          {
            "player_id": 16,
            "position_id": 3
          },
          {
            "player_id": 17,
            "position_id": 2
          },
          {
            "player_id": 18,
            "position_id": 2
          },
          {
            "player_id": 19,
            "position_id": 2
          },
          {
            "player_id": 20,
            "position_id": 3
          },
          {
            "player_id": 21,
            "position_id": 2
          },
          {
            "player_id": 22,
            "position_id": 2
          },
          {
            "player_id": 23,
            "position_id": 2
          },
          {
            "player_id": 24,
            "position_id": 2
          },
          {
            "player_id": 25,
            "position_id": 4
          },
          {
            "player_id": 26,
            "position_id": 2
          },
          {
            "player_id": 28,
            "position_id": 1
          },
          {
            "player_id": 29,
            "position_id": 2
          },
          {
            "player_id": 30,
            "position_id": 2
          },
          {
            "player_id": 31,
            "position_id": 2
          },
          {
            "player_id": 32,
            "position_id": 3
          },
          {
            "player_id": 33,
            "position_id": 2
          },
          {
            "player_id": 34,
            "position_id": 2
          },
          {
            "player_id": 35,
            "position_id": 2
          },
          {
            "player_id": 36,
            "position_id": 2
          },
          {
            "player_id": 37,
            "position_id": 2
          },
          {
            "player_id": 38,
            "position_id": 2
          },
          {
            "player_id": 39,
            "position_id": 2
          },
          {
            "player_id": 40,
            "position_id": 1
          },
          {
            "player_id": 41,
            "position_id": 1
          },
          {
            "player_id": 42,
            "position_id": 2
          },
          {
            "player_id": 43,
            "position_id": 2
          },
          {
            "player_id": 44,
            "position_id": 2
          },
          {
            "player_id": 45,
            "position_id": 3
          },
          {
            "player_id": 46,
            "position_id": 2
          },
          {
            "player_id": 47,
            "position_id": 1
          },
          {
            "player_id": 48,
            "position_id": 2
          },
          {
            "player_id": 49,
            "position_id": 4
          },
          {
            "player_id": 50,
            "position_id": 1
          },
          {
            "player_id": 51,
            "position_id": 1
          },
          {
            "player_id": 53,
            "position_id": 2
          },
          {
            "player_id": 54,
            "position_id": 2
          },
          {
            "player_id": 55,
            "position_id": 2
          },
          {
            "player_id": 56,
            "position_id": 2
          },
          {
            "player_id": 57,
            "position_id": 1
          },
          {
            "player_id": 58,
            "position_id": 2
          },
          {
            "player_id": 59,
            "position_id": 3
          },
          {
            "player_id": 60,
            "position_id": 2
          },
          {
            "player_id": 61,
            "position_id": 4
          },
          {
            "player_id": 62,
            "position_id": 2
          },
          {
            "player_id": 63,
            "position_id": 1
          },
          {
            "player_id": 64,
            "position_id": 1
          },
          {
            "player_id": 65,
            "position_id": 3
          },
          {
            "player_id": 66,
            "position_id": 1
          },
          {
            "player_id": 67,
            "position_id": 1
          },
          {
            "player_id": 68,
            "position_id": 3
          },
          {
            "player_id": 69,
            "position_id": 2
          },
          {
            "player_id": 70,
            "position_id": 2
          },
          {
            "player_id": 71,
            "position_id": 1
          },
          {
            "player_id": 72,
            "position_id": 1
          },
          {
            "player_id": 73,
            "position_id": 2
          },
          {
            "player_id": 74,
            "position_id": 2
          },
          {
            "player_id": 75,
            "position_id": 2
          },
          {
            "player_id": 76,
            "position_id": 2
          },
          {
            "player_id": 77,
            "position_id": 4
          },
          {
            "player_id": 78,
            "position_id": 3
          },
          {
            "player_id": 79,
            "position_id": 1
          },
          {
            "player_id": 80,
            "position_id": 2
          },
          {
            "player_id": 81,
            "position_id": 2
          },
          {
            "player_id": 82,
            "position_id": 4
          },
          {
            "player_id": 83,
            "position_id": 3
          },
          {
            "player_id": 84,
            "position_id": 1
          },
          {
            "player_id": 85,
            "position_id": 1
          },
          {
            "player_id": 86,
            "position_id": 2
          },
          {
            "player_id": 87,
            "position_id": 2
          },
          {
            "player_id": 88,
            "position_id": 1
          },
          {
            "player_id": 89,
            "position_id": 2
          },
          {
            "player_id": 90,
            "position_id": 2
          },
          {
            "player_id": 91,
            "position_id": 3
          },
          {
            "player_id": 92,
            "position_id": 1
          },
          {
            "player_id": 93,
            "position_id": 2
          },
          {
            "player_id": 94,
            "position_id": 1
          },
          {
            "player_id": 95,
            "position_id": 1
          },
          {
            "player_id": 96,
            "position_id": 2
          },
          {
            "player_id": 97,
            "position_id": 2
          },
          {
            "player_id": 99,
            "position_id": 2
          },
          {
            "player_id": 100,
            "position_id": 2
          },
          {
            "player_id": 101,
            "position_id": 2
          },
          {
            "player_id": 102,
            "position_id": 2
          },
          {
            "player_id": 103,
            "position_id": 4
          },
          {
            "player_id": 104,
            "position_id": 1
          },
          {
            "player_id": 105,
            "position_id": 1
          },
          {
            "player_id": 106,
            "position_id": 2
          },
          {
            "player_id": 108,
            "position_id": 2
          },
          {
            "player_id": 109,
            "position_id": 2
          },
          {
            "player_id": 110,
            "position_id": 2
          },
          {
            "player_id": 111,
            "position_id": 1
          },
          {
            "player_id": 112,
            "position_id": 4
          },
          {
            "player_id": 113,
            "position_id": 2
          },
          {
            "player_id": 114,
            "position_id": 2
          },
          {
            "player_id": 115,
            "position_id": 2
          },
          {
            "player_id": 116,
            "position_id": 2
          },
          {
            "player_id": 117,
            "position_id": 2
          },
          {
            "player_id": 118,
            "position_id": 1
          },
          {
            "player_id": 119,
            "position_id": 2
          },
          {
            "player_id": 120,
            "position_id": 2
          },
          {
            "player_id": 121,
            "position_id": 4
          },
          {
            "player_id": 122,
            "position_id": 2
          },
          {
            "player_id": 124,
            "position_id": 1
          },
          {
            "player_id": 125,
            "position_id": 1
          },
          {
            "player_id": 127,
            "position_id": 1
          },
          {
            "player_id": 128,
            "position_id": 1
          },
          {
            "player_id": 129,
            "position_id": 1
          },
          {
            "player_id": 131,
            "position_id": 4
          },
          {
            "player_id": 132,
            "position_id": 2
          },
          {
            "player_id": 133,
            "position_id": 4
          },
          {
            "player_id": 134,
            "position_id": 1
          },
          {
            "player_id": 135,
            "position_id": 1
          },
          {
            "player_id": 136,
            "position_id": 2
          },
          {
            "player_id": 137,
            "position_id": 1
          },
          {
            "player_id": 138,
            "position_id": 2
          },
          {
            "player_id": 139,
            "position_id": 2
          },
          {
            "player_id": 141,
            "position_id": 2
          },
          {
            "player_id": 142,
            "position_id": 2
          },
          {
            "player_id": 143,
            "position_id": 1
          },
          {
            "player_id": 144,
            "position_id": 4
          },
          {
            "player_id": 145,
            "position_id": 4
          },
          {
            "player_id": 146,
            "position_id": 4
          },
          {
            "player_id": 147,
            "position_id": 4
          },
          {
            "player_id": 148,
            "position_id": 3
          },
          {
            "player_id": 149,
            "position_id": 1
          },
          {
            "player_id": 151,
            "position_id": 4
          },
          {
            "player_id": 152,
            "position_id": 2
          },
          {
            "player_id": 153,
            "position_id": 4
          },
          {
            "player_id": 154,
            "position_id": 2
          },
          {
            "player_id": 155,
            "position_id": 2
          },
          {
            "player_id": 156,
            "position_id": 4
          },
          {
            "player_id": 157,
            "position_id": 4
          },
          {
            "player_id": 158,
            "position_id": 1
          },
          {
            "player_id": 159,
            "position_id": 2
          },
          {
            "player_id": 160,
            "position_id": 1
          },
          {
            "player_id": 161,
            "position_id": 2
          },
          {
            "player_id": 162,
            "position_id": 1
          },
          {
            "player_id": 163,
            "position_id": 1
          },
          {
            "player_id": 164,
            "position_id": 1
          },
          {
            "player_id": 165,
            "position_id": 2
          },
          {
            "player_id": 166,
            "position_id": 3
          },
          {
            "player_id": 167,
            "position_id": 2
          },
          {
            "player_id": 168,
            "position_id": 2
          },
          {
            "player_id": 169,
            "position_id": 2
          },
          {
            "player_id": 170,
            "position_id": 2
          },
          {
            "player_id": 171,
            "position_id": 2
          },
          {
            "player_id": 172,
            "position_id": 1
          },
          {
            "player_id": 173,
            "position_id": 2
          },
          {
            "player_id": 174,
            "position_id": 1
          },
          {
            "player_id": 175,
            "position_id": 1
          },
          {
            "player_id": 176,
            "position_id": 4
          },
          {
            "player_id": 177,
            "position_id": 2
          },
          {
            "player_id": 178,
            "position_id": 2
          },
          {
            "player_id": 179,
            "position_id": 1
          },
          {
            "player_id": 181,
            "position_id": 2
          },
          {
            "player_id": 182,
            "position_id": 4
          },
          {
            "player_id": 183,
            "position_id": 1
          },
          {
            "player_id": 184,
            "position_id": 3
          },
          {
            "player_id": 185,
            "position_id": 2
          },
          {
            "player_id": 186,
            "position_id": 1
          },
          {
            "player_id": 187,
            "position_id": 4
          },
          {
            "player_id": 188,
            "position_id": 1
          },
          {
            "player_id": 189,
            "position_id": 1
          },
          {
            "player_id": 191,
            "position_id": 3
          },
          {
            "player_id": 192,
            "position_id": 4
          },
          {
            "player_id": 193,
            "position_id": 2
          },
          {
            "player_id": 194,
            "position_id": 2
          },
          {
            "player_id": 195,
            "position_id": 4
          },
          {
            "player_id": 196,
            "position_id": 2
          },
          {
            "player_id": 197,
            "position_id": 4
          },
          {
            "player_id": 198,
            "position_id": 4
          },
          {
            "player_id": 199,
            "position_id": 1
          },
          {
            "player_id": 200,
            "position_id": 4
          },
          {
            "player_id": 201,
            "position_id": 2
          },
          {
            "player_id": 202,
            "position_id": 1
          },
          {
            "player_id": 203,
            "position_id": 1
          },
          {
            "player_id": 204,
            "position_id": 2
          },
          {
            "player_id": 205,
            "position_id": 4
          },
          {
            "player_id": 206,
            "position_id": 2
          },
          {
            "player_id": 207,
            "position_id": 2
          },
          {
            "player_id": 208,
            "position_id": 2
          },
          {
            "player_id": 209,
            "position_id": 1
          },
          {
            "player_id": 211,
            "position_id": 1
          },
          {
            "player_id": 214,
            "position_id": 2
          },
          {
            "player_id": 215,
            "position_id": 1
          },
          {
            "player_id": 216,
            "position_id": 2
          },
          {
            "player_id": 217,
            "position_id": 2
          },
          {
            "player_id": 218,
            "position_id": 3
          },
          {
            "player_id": 219,
            "position_id": 4
          },
          {
            "player_id": 220,
            "position_id": 1
          },
          {
            "player_id": 221,
            "position_id": 1
          },
          {
            "player_id": 222,
            "position_id": 4
          },
          {
            "player_id": 223,
            "position_id": 2
          },
          {
            "player_id": 225,
            "position_id": 1
          },
          {
            "player_id": 226,
            "position_id": 4
          },
          {
            "player_id": 227,
            "position_id": 2
          },
          {
            "player_id": 228,
            "position_id": 1
          },
          {
            "player_id": 229,
            "position_id": 4
          },
          {
            "player_id": 230,
            "position_id": 4
          },
          {
            "player_id": 231,
            "position_id": 2
          },
          {
            "player_id": 232,
            "position_id": 1
          },
          {
            "player_id": 233,
            "position_id": 1
          },
          {
            "player_id": 235,
            "position_id": 3
          },
          {
            "player_id": 236,
            "position_id": 1
          },
          {
            "player_id": 238,
            "position_id": 1
          },
          {
            "player_id": 240,
            "position_id": 4
          },
          {
            "player_id": 241,
            "position_id": 3
          },
          {
            "player_id": 242,
            "position_id": 1
          },
          {
            "player_id": 243,
            "position_id": 1
          },
          {
            "player_id": 245,
            "position_id": 1
          },
          {
            "player_id": 246,
            "position_id": 1
          },
          {
            "player_id": 247,
            "position_id": 1
          },
          {
            "player_id": 248,
            "position_id": 4
          },
          {
            "player_id": 250,
            "position_id": 1
          },
          {
            "player_id": 251,
            "position_id": 1
          },
          {
            "player_id": 252,
            "position_id": 4
          },
          {
            "player_id": 253,
            "position_id": 2
          },
          {
            "player_id": 254,
            "position_id": 1
          },
          {
            "player_id": 255,
            "position_id": 4
          },
          {
            "player_id": 256,
            "position_id": 4
          },
          {
            "player_id": 260,
            "position_id": 4
          },
          {
            "player_id": 261,
            "position_id": 3
          },
          {
            "player_id": 262,
            "position_id": 1
          },
          {
            "player_id": 263,
            "position_id": 1
          },
          {
            "player_id": 264,
            "position_id": 1
          },
          {
            "player_id": 265,
            "position_id": 1
          },
          {
            "player_id": 267,
            "position_id": 4
          },
          {
            "player_id": 268,
            "position_id": 4
          },
          {
            "player_id": 269,
            "position_id": 2
          },
          {
            "player_id": 270,
            "position_id": 4
          },
          {
            "player_id": 271,
            "position_id": 4
          },
          {
            "player_id": 273,
            "position_id": 2
          },
          {
            "player_id": 274,
            "position_id": 1
          },
          {
            "player_id": 275,
            "position_id": 4
          },
          {
            "player_id": 277,
            "position_id": 1
          },
          {
            "player_id": 278,
            "position_id": 1
          },
          {
            "player_id": 279,
            "position_id": 4
          },
          {
            "player_id": 280,
            "position_id": 4
          },
          {
            "player_id": 281,
            "position_id": 1
          },
          {
            "player_id": 282,
            "position_id": 1
          },
          {
            "player_id": 283,
            "position_id": 1
          },
          {
            "player_id": 284,
            "position_id": 4
          },
          {
            "player_id": 285,
            "position_id": 4
          },
          {
            "player_id": 286,
            "position_id": 2
          },
          {
            "player_id": 287,
            "position_id": 4
          },
          {
            "player_id": 288,
            "position_id": 4
          },
          {
            "player_id": 290,
            "position_id": 1
          },
          {
            "player_id": 291,
            "position_id": 1
          },
          {
            "player_id": 292,
            "position_id": 1
          },
          {
            "player_id": 294,
            "position_id": 4
          },
          {
            "player_id": 295,
            "position_id": 2
          },
          {
            "player_id": 296,
            "position_id": 1
          },
          {
            "player_id": 297,
            "position_id": 4
          },
          {
            "player_id": 298,
            "position_id": 1
          },
          {
            "player_id": 299,
            "position_id": 4
          },
          {
            "player_id": 300,
            "position_id": 4
          },
          {
            "player_id": 301,
            "position_id": 1
          },
          {
            "player_id": 302,
            "position_id": 4
          },
          {
            "player_id": 303,
            "position_id": 2
          },
          {
            "player_id": 304,
            "position_id": 1
          },
          {
            "player_id": 305,
            "position_id": 1
          },
          {
            "player_id": 306,
            "position_id": 1
          },
          {
            "player_id": 307,
            "position_id": 4
          },
          {
            "player_id": 309,
            "position_id": 4
          },
          {
            "player_id": 310,
            "position_id": 1
          },
          {
            "player_id": 311,
            "position_id": 4
          },
          {
            "player_id": 312,
            "position_id": 4
          },
          {
            "player_id": 313,
            "position_id": 4
          },
          {
            "player_id": 314,
            "position_id": 1
          },
          {
            "player_id": 315,
            "position_id": 1
          },
          {
            "player_id": 317,
            "position_id": 1
          },
          {
            "player_id": 318,
            "position_id": 4
          },
          {
            "player_id": 319,
            "position_id": 2
          },
          {
            "player_id": 320,
            "position_id": 4
          },
          {
            "player_id": 322,
            "position_id": 4
          },
          {
            "player_id": 323,
            "position_id": 1
          },
          {
            "player_id": 324,
            "position_id": 1
          },
          {
            "player_id": 325,
            "position_id": 1
          },
          {
            "player_id": 328,
            "position_id": 1
          },
          {
            "player_id": 329,
            "position_id": 2
          },
          {
            "player_id": 330,
            "position_id": 2
          },
          {
            "player_id": 331,
            "position_id": 1
          },
          {
            "player_id": 332,
            "position_id": 4
          },
          {
            "player_id": 333,
            "position_id": 2
          },
          {
            "player_id": 334,
            "position_id": 2
          },
          {
            "player_id": 335,
            "position_id": 4
          },
          {
            "player_id": 336,
            "position_id": 2
          },
          {
            "player_id": 337,
            "position_id": 2
          },
          {
            "player_id": 338,
            "position_id": 2
          },
          {
            "player_id": 339,
            "position_id": 1
          },
          {
            "player_id": 342,
            "position_id": 3
          },
          {
            "player_id": 343,
            "position_id": 2
          },
          {
            "player_id": 344,
            "position_id": 2
          },
          {
            "player_id": 345,
            "position_id": 4
          },
          {
            "player_id": 346,
            "position_id": 2
          },
          {
            "player_id": 347,
            "position_id": 2
          },
          {
            "player_id": 348,
            "position_id": 2
          },
          {
            "player_id": 349,
            "position_id": 1
          },
          {
            "player_id": 350,
            "position_id": 4
          },
          {
            "player_id": 351,
            "position_id": 1
          },
          {
            "player_id": 352,
            "position_id": 4
          },
          {
            "player_id": 353,
            "position_id": 1
          },
          {
            "player_id": 354,
            "position_id": 4
          },
          {
            "player_id": 355,
            "position_id": 2
          },
          {
            "player_id": 356,
            "position_id": 1
          },
          {
            "player_id": 357,
            "position_id": 4
          },
          {
            "player_id": 358,
            "position_id": 4
          },
          {
            "player_id": 359,
            "position_id": 4
          },
          {
            "player_id": 360,
            "position_id": 4
          },
          {
            "player_id": 361,
            "position_id": 1
          },
          {
            "player_id": 362,
            "position_id": 2
          },
          {
            "player_id": 363,
            "position_id": 1
          },
          {
            "player_id": 364,
            "position_id": 2
          },
          {
            "player_id": 365,
            "position_id": 4
          },
          {
            "player_id": 366,
            "position_id": 4
          },
          {
            "player_id": 367,
            "position_id": 2
          },
          {
            "player_id": 368,
            "position_id": 4
          },
          {
            "player_id": 369,
            "position_id": 4
          },
          {
            "player_id": 370,
            "position_id": 2
          },
          {
            "player_id": 371,
            "position_id": 1
          },
          {
            "player_id": 372,
            "position_id": 1
          },
          {
            "player_id": 373,
            "position_id": 4
          },
          {
            "player_id": 374,
            "position_id": 4
          },
          {
            "player_id": 375,
            "position_id": 1
          },
          {
            "player_id": 376,
            "position_id": 1
          },
          {
            "player_id": 377,
            "position_id": 1
          },
          {
            "player_id": 378,
            "position_id": 2
          },
          {
            "player_id": 379,
            "position_id": 4
          },
          {
            "player_id": 380,
            "position_id": 1
          },
          {
            "player_id": 381,
            "position_id": 3
          },
          {
            "player_id": 382,
            "position_id": 1
          },
          {
            "player_id": 384,
            "position_id": 2
          },
          {
            "player_id": 385,
            "position_id": 1
          },
          {
            "player_id": 386,
            "position_id": 1
          },
          {
            "player_id": 388,
            "position_id": 4
          },
          {
            "player_id": 389,
            "position_id": 4
          },
          {
            "player_id": 390,
            "position_id": 1
          },
          {
            "player_id": 391,
            "position_id": 4
          },
          {
            "player_id": 392,
            "position_id": 2
          },
          {
            "player_id": 393,
            "position_id": 1
          },
          {
            "player_id": 394,
            "position_id": 4
          },
          {
            "player_id": 395,
            "position_id": 1
          },
          {
            "player_id": 396,
            "position_id": 1
          },
          {
            "player_id": 397,
            "position_id": 4
          },
          {
            "player_id": 398,
            "position_id": 1
          },
          {
            "player_id": 399,
            "position_id": 4
          },
          {
            "player_id": 400,
            "position_id": 4
          },
          {
            "player_id": 401,
            "position_id": 4
          },
          {
            "player_id": 402,
            "position_id": 2
          },
          {
            "player_id": 403,
            "position_id": 2
          },
          {
            "player_id": 404,
            "position_id": 4
          },
          {
            "player_id": 405,
            "position_id": 2
          },
          {
            "player_id": 406,
            "position_id": 2
          },
          {
            "player_id": 407,
            "position_id": 2
          },
          {
            "player_id": 409,
            "position_id": 4
          },
          {
            "player_id": 410,
            "position_id": 2
          },
          {
            "player_id": 411,
            "position_id": 4
          },
          {
            "player_id": 412,
            "position_id": 1
          },
          {
            "player_id": 413,
            "position_id": 1
          },
          {
            "player_id": 414,
            "position_id": 4
          },
          {
            "player_id": 415,
            "position_id": 4
          },
          {
            "player_id": 416,
            "position_id": 1
          },
          {
            "player_id": 417,
            "position_id": 4
          },
          {
            "player_id": 418,
            "position_id": 1
          },
          {
            "player_id": 420,
            "position_id": 1
          },
          {
            "player_id": 421,
            "position_id": 1
          },
          {
            "player_id": 424,
            "position_id": 4
          },
          {
            "player_id": 425,
            "position_id": 3
          },
          {
            "player_id": 426,
            "position_id": 1
          },
          {
            "player_id": 428,
            "position_id": 1
          },
          {
            "player_id": 429,
            "position_id": 4
          },
          {
            "player_id": 430,
            "position_id": 4
          },
          {
            "player_id": 431,
            "position_id": 1
          },
          {
            "player_id": 432,
            "position_id": 4
          },
          {
            "player_id": 434,
            "position_id": 4
          },
          {
            "player_id": 435,
            "position_id": 1
          },
          {
            "player_id": 436,
            "position_id": 1
          },
          {
            "player_id": 437,
            "position_id": 1
          },
          {
            "player_id": 438,
            "position_id": 1
          },
          {
            "player_id": 439,
            "position_id": 4
          },
          {
            "player_id": 440,
            "position_id": 4
          },
          {
            "player_id": 441,
            "position_id": 2
          },
          {
            "player_id": 442,
            "position_id": 4
          },
          {
            "player_id": 443,
            "position_id": 1
          },
          {
            "player_id": 444,
            "position_id": 4
          },
          {
            "player_id": 446,
            "position_id": 4
          },
          {
            "player_id": 447,
            "position_id": 2
          },
          {
            "player_id": 449,
            "position_id": 4
          },
          {
            "player_id": 452,
            "position_id": 4
          },
          {
            "player_id": 454,
            "position_id": 1
          },
          {
            "player_id": 455,
            "position_id": 4
          },
          {
            "player_id": 456,
            "position_id": 1
          },
          {
            "player_id": 458,
            "position_id": 1
          },
          {
            "player_id": 459,
            "position_id": 3
          },
          {
            "player_id": 463,
            "position_id": 2
          },
          {
            "player_id": 465,
            "position_id": 4
          },
          {
            "player_id": 466,
            "position_id": 4
          },
          {
            "player_id": 467,
            "position_id": 1
          },
          {
            "player_id": 468,
            "position_id": 4
          },
          {
            "player_id": 469,
            "position_id": 4
          },
          {
            "player_id": 470,
            "position_id": 1
          },
          {
            "player_id": 471,
            "position_id": 4
          },
          {
            "player_id": 472,
            "position_id": 4
          },
          {
            "player_id": 473,
            "position_id": 2
          },
          {
            "player_id": 474,
            "position_id": 4
          },
          {
            "player_id": 475,
            "position_id": 4
          },
          {
            "player_id": 476,
            "position_id": 2
          },
          {
            "player_id": 477,
            "position_id": 1
          },
          {
            "player_id": 478,
            "position_id": 2
          },
          {
            "player_id": 479,
            "position_id": 1
          },
          {
            "player_id": 480,
            "position_id": 4
          },
          {
            "player_id": 481,
            "position_id": 1
          },
          {
            "player_id": 482,
            "position_id": 2
          },
          {
            "player_id": 483,
            "position_id": 4
          },
          {
            "player_id": 484,
            "position_id": 2
          },
          {
            "player_id": 485,
            "position_id": 4
          },
          {
            "player_id": 486,
            "position_id": 4
          },
          {
            "player_id": 487,
            "position_id": 1
          },
          {
            "player_id": 489,
            "position_id": 4
          },
          {
            "player_id": 490,
            "position_id": 3
          },
          {
            "player_id": 491,
            "position_id": 4
          },
          {
            "player_id": 492,
            "position_id": 2
          },
          {
            "player_id": 493,
            "position_id": 1
          },
          {
            "player_id": 494,
            "position_id": 1
          },
          {
            "player_id": 495,
            "position_id": 1
          },
          {
            "player_id": 496,
            "position_id": 4
          },
          {
            "player_id": 497,
            "position_id": 2
          },
          {
            "player_id": 498,
            "position_id": 1
          },
          {
            "player_id": 499,
            "position_id": 1
          },
          {
            "player_id": 500,
            "position_id": 4
          },
          {
            "player_id": 501,
            "position_id": 4
          },
          {
            "player_id": 502,
            "position_id": 2
          },
          {
            "player_id": 503,
            "position_id": 4
          },
          {
            "player_id": 504,
            "position_id": 1
          },
          {
            "player_id": 505,
            "position_id": 4
          },
          {
            "player_id": 507,
            "position_id": 4
          },
          {
            "player_id": 508,
            "position_id": 1
          },
          {
            "player_id": 509,
            "position_id": 1
          },
          {
            "player_id": 510,
            "position_id": 1
          },
          {
            "player_id": 511,
            "position_id": 1
          },
          {
            "player_id": 512,
            "position_id": 1
          },
          {
            "player_id": 513,
            "position_id": 2
          },
          {
            "player_id": 514,
            "position_id": 1
          },
          {
            "player_id": 515,
            "position_id": 1
          },
          {
            "player_id": 517,
            "position_id": 4
          },
          {
            "player_id": 521,
            "position_id": 1
          },
          {
            "player_id": 522,
            "position_id": 4
          },
          {
            "player_id": 523,
            "position_id": 4
          },
          {
            "player_id": 525,
            "position_id": 1
          },
          {
            "player_id": 527,
            "position_id": 2
          },
          {
            "player_id": 528,
            "position_id": 1
          },
          {
            "player_id": 529,
            "position_id": 1
          },
          {
            "player_id": 530,
            "position_id": 4
          },
          {
            "player_id": 532,
            "position_id": 2
          },
          {
            "player_id": 533,
            "position_id": 4
          },
          {
            "player_id": 534,
            "position_id": 1
          },
          {
            "player_id": 535,
            "position_id": 4
          },
          {
            "player_id": 536,
            "position_id": 2
          },
          {
            "player_id": 538,
            "position_id": 1
          },
          {
            "player_id": 539,
            "position_id": 1
          },
          {
            "player_id": 540,
            "position_id": 1
          },
          {
            "player_id": 541,
            "position_id": 1
          },
          {
            "player_id": 542,
            "position_id": 3
          },
          {
            "player_id": 543,
            "position_id": 2
          },
          {
            "player_id": 545,
            "position_id": 4
          },
          {
            "player_id": 546,
            "position_id": 1
          },
          {
            "player_id": 547,
            "position_id": 2
          },
          {
            "player_id": 548,
            "position_id": 4
          },
          {
            "player_id": 549,
            "position_id": 4
          },
          {
            "player_id": 551,
            "position_id": 1
          },
          {
            "player_id": 554,
            "position_id": 4
          },
          {
            "player_id": 555,
            "position_id": 4
          },
          {
            "player_id": 557,
            "position_id": 2
          },
          {
            "player_id": 558,
            "position_id": 1
          },
          {
            "player_id": 559,
            "position_id": 4
          },
          {
            "player_id": 560,
            "position_id": 2
          },
          {
            "player_id": 561,
            "position_id": 1
          },
          {
            "player_id": 562,
            "position_id": 4
          },
          {
            "player_id": 564,
            "position_id": 4
          },
          {
            "player_id": 566,
            "position_id": 4
          },
          {
            "player_id": 571,
            "position_id": 1
          },
          {
            "player_id": 572,
            "position_id": 4
          },
          {
            "player_id": 573,
            "position_id": 4
          },
          {
            "player_id": 575,
            "position_id": 1
          },
          {
            "player_id": 576,
            "position_id": 2
          },
          {
            "player_id": 577,
            "position_id": 3
          },
          {
            "player_id": 578,
            "position_id": 4
          },
          {
            "player_id": 579,
            "position_id": 4
          },
          {
            "player_id": 580,
            "position_id": 1
          },
          {
            "player_id": 581,
            "position_id": 1
          },
          {
            "player_id": 583,
            "position_id": 1
          },
          {
            "player_id": 585,
            "position_id": 1
          },
          {
            "player_id": 586,
            "position_id": 4
          },
          {
            "player_id": 587,
            "position_id": 4
          },
          {
            "player_id": 588,
            "position_id": 2
          },
          {
            "player_id": 589,
            "position_id": 4
          },
          {
            "player_id": 590,
            "position_id": 4
          },
          {
            "player_id": 591,
            "position_id": 1
          },
          {
            "player_id": 592,
            "position_id": 1
          },
          {
            "player_id": 594,
            "position_id": 1
          },
          {
            "player_id": 595,
            "position_id": 1
          },
          {
            "player_id": 596,
            "position_id": 3
          },
          {
            "player_id": 597,
            "position_id": 4
          },
          {
            "player_id": 598,
            "position_id": 1
          },
          {
            "player_id": 600,
            "position_id": 4
          },
          {
            "player_id": 601,
            "position_id": 3
          },
          {
            "player_id": 603,
            "position_id": 4
          },
          {
            "player_id": 605,
            "position_id": 1
          },
          {
            "player_id": 606,
            "position_id": 2
          },
          {
            "player_id": 608,
            "position_id": 4
          },
          {
            "player_id": 609,
            "position_id": 1
          },
          {
            "player_id": 610,
            "position_id": 1
          },
          {
            "player_id": 612,
            "position_id": 4
          },
          {
            "player_id": 613,
            "position_id": 4
          },
          {
            "player_id": 614,
            "position_id": 4
          },
          {
            "player_id": 615,
            "position_id": 3
          },
          {
            "player_id": 616,
            "position_id": 2
          },
          {
            "player_id": 617,
            "position_id": 4
          },
          {
            "player_id": 618,
            "position_id": 1
          },
          {
            "player_id": 619,
            "position_id": 3
          },
          {
            "player_id": 620,
            "position_id": 2
          },
          {
            "player_id": 621,
            "position_id": 2
          },
          {
            "player_id": 622,
            "position_id": 2
          },
          {
            "player_id": 623,
            "position_id": 4
          },
          {
            "player_id": 624,
            "position_id": 2
          },
          {
            "player_id": 625,
            "position_id": 1
          },
          {
            "player_id": 626,
            "position_id": 2
          },
          {
            "player_id": 627,
            "position_id": 2
          },
          {
            "player_id": 628,
            "position_id": 4
          },
          {
            "player_id": 629,
            "position_id": 2
          },
          {
            "player_id": 630,
            "position_id": 4
          },
          {
            "player_id": 631,
            "position_id": 1
          },
          {
            "player_id": 632,
            "position_id": 1
          },
          {
            "player_id": 633,
            "position_id": 3
          },
          {
            "player_id": 634,
            "position_id": 4
          },
          {
            "player_id": 635,
            "position_id": 4
          },
          {
            "player_id": 636,
            "position_id": 1
          },
          {
            "player_id": 638,
            "position_id": 4
          },
          {
            "player_id": 641,
            "position_id": 4
          },
          {
            "player_id": 644,
            "position_id": 4
          },
          {
            "player_id": 645,
            "position_id": 1
          },
          {
            "player_id": 646,
            "position_id": 1
          },
          {
            "player_id": 647,
            "position_id": 4
          },
          {
            "player_id": 648,
            "position_id": 1
          },
          {
            "player_id": 649,
            "position_id": 3
          },
          {
            "player_id": 650,
            "position_id": 4
          },
          {
            "player_id": 651,
            "position_id": 1
          },
          {
            "player_id": 652,
            "position_id": 2
          },
          {
            "player_id": 653,
            "position_id": 2
          },
          {
            "player_id": 654,
            "position_id": 2
          },
          {
            "player_id": 658,
            "position_id": 3
          },
          {
            "player_id": 659,
            "position_id": 4
          },
          {
            "player_id": 660,
            "position_id": 4
          },
          {
            "player_id": 663,
            "position_id": 4
          },
          {
            "player_id": 664,
            "position_id": 1
          },
          {
            "player_id": 666,
            "position_id": 1
          },
          {
            "player_id": 668,
            "position_id": 1
          },
          {
            "player_id": 669,
            "position_id": 1
          },
          {
            "player_id": 670,
            "position_id": 4
          },
          {
            "player_id": 671,
            "position_id": 1
          },
          {
            "player_id": 672,
            "position_id": 2
          },
          {
            "player_id": 673,
            "position_id": 2
          },
          {
            "player_id": 674,
            "position_id": 4
          },
          {
            "player_id": 675,
            "position_id": 2
          },
          {
            "player_id": 676,
            "position_id": 1
          },
          {
            "player_id": 677,
            "position_id": 1
          },
          {
            "player_id": 678,
            "position_id": 1
          },
          {
            "player_id": 679,
            "position_id": 2
          },
          {
            "player_id": 680,
            "position_id": 4
          },
          {
            "player_id": 681,
            "position_id": 4
          },
          {
            "player_id": 682,
            "position_id": 4
          },
          {
            "player_id": 683,
            "position_id": 2
          },
          {
            "player_id": 684,
            "position_id": 1
          },
          {
            "player_id": 685,
            "position_id": 2
          },
          {
            "player_id": 686,
            "position_id": 2
          },
          {
            "player_id": 687,
            "position_id": 1
          },
          {
            "player_id": 688,
            "position_id": 4
          },
          {
            "player_id": 689,
            "position_id": 4
          },
          {
            "player_id": 691,
            "position_id": 2
          },
          {
            "player_id": 692,
            "position_id": 3
          },
          {
            "player_id": 695,
            "position_id": 1
          },
          {
            "player_id": 696,
            "position_id": 4
          },
          {
            "player_id": 698,
            "position_id": 2
          },
          {
            "player_id": 699,
            "position_id": 4
          },
          {
            "player_id": 700,
            "position_id": 4
          },
          {
            "player_id": 701,
            "position_id": 4
          },
          {
            "player_id": 702,
            "position_id": 1
          },
          {
            "player_id": 704,
            "position_id": 1
          },
          {
            "player_id": 705,
            "position_id": 1
          },
          {
            "player_id": 707,
            "position_id": 1
          },
          {
            "player_id": 708,
            "position_id": 2
          },
          {
            "player_id": 710,
            "position_id": 1
          },
          {
            "player_id": 711,
            "position_id": 1
          },
          {
            "player_id": 712,
            "position_id": 1
          },
          {
            "player_id": 713,
            "position_id": 2
          },
          {
            "player_id": 715,
            "position_id": 4
          },
          {
            "player_id": 716,
            "position_id": 1
          },
          {
            "player_id": 717,
            "position_id": 2
          },
          {
            "player_id": 718,
            "position_id": 2
          },
          {
            "player_id": 719,
            "position_id": 2
          },
          {
            "player_id": 720,
            "position_id": 2
          },
          {
            "player_id": 721,
            "position_id": 2
          },
          {
            "player_id": 724,
            "position_id": 3
          },
          {
            "player_id": 725,
            "position_id": 1
          },
          {
            "player_id": 726,
            "position_id": 2
          },
          {
            "player_id": 727,
            "position_id": 4
          },
          {
            "player_id": 728,
            "position_id": 4
          },
          {
            "player_id": 729,
            "position_id": 2
          },
          {
            "player_id": 730,
            "position_id": 4
          },
          {
            "player_id": 731,
            "position_id": 4
          },
          {
            "player_id": 732,
            "position_id": 4
          },
          {
            "player_id": 733,
            "position_id": 2
          },
          {
            "player_id": 734,
            "position_id": 4
          },
          {
            "player_id": 735,
            "position_id": 2
          },
          {
            "player_id": 736,
            "position_id": 1
          },
          {
            "player_id": 737,
            "position_id": 4
          },
          {
            "player_id": 740,
            "position_id": 2
          },
          {
            "player_id": 741,
            "position_id": 4
          },
          {
            "player_id": 743,
            "position_id": 4
          },
          {
            "player_id": 744,
            "position_id": 4
          },
          {
            "player_id": 745,
            "position_id": 1
          },
          {
            "player_id": 746,
            "position_id": 2
          },
          {
            "player_id": 747,
            "position_id": 2
          },
          {
            "player_id": 748,
            "position_id": 1
          },
          {
            "player_id": 749,
            "position_id": 2
          },
          {
            "player_id": 750,
            "position_id": 3
          },
          {
            "player_id": 751,
            "position_id": 4
          },
          {
            "player_id": 753,
            "position_id": 4
          },
          {
            "player_id": 755,
            "position_id": 1
          },
          {
            "player_id": 758,
            "position_id": 4
          },
          {
            "player_id": 759,
            "position_id": 2
          },
          {
            "player_id": 760,
            "position_id": 3
          },
          {
            "player_id": 761,
            "position_id": 1
          },
          {
            "player_id": 763,
            "position_id": 4
          },
          {
            "player_id": 764,
            "position_id": 1
          },
          {
            "player_id": 765,
            "position_id": 2
          },
          {
            "player_id": 768,
            "position_id": 1
          },
          {
            "player_id": 769,
            "position_id": 1
          },
          {
            "player_id": 770,
            "position_id": 4
          },
          {
            "player_id": 771,
            "position_id": 1
          },
          {
            "player_id": 772,
            "position_id": 1
          },
          {
            "player_id": 773,
            "position_id": 2
          },
          {
            "player_id": 774,
            "position_id": 4
          },
          {
            "player_id": 775,
            "position_id": 1
          },
          {
            "player_id": 776,
            "position_id": 2
          },
          {
            "player_id": 777,
            "position_id": 1
          },
          {
            "player_id": 778,
            "position_id": 4
          },
          {
            "player_id": 779,
            "position_id": 1
          },
          {
            "player_id": 780,
            "position_id": 1
          },
          {
            "player_id": 781,
            "position_id": 1
          },
          {
            "player_id": 782,
            "position_id": 4
          },
          {
            "player_id": 783,
            "position_id": 3
          },
          {
            "player_id": 784,
            "position_id": 1
          },
          {
            "player_id": 785,
            "position_id": 1
          },
          {
            "player_id": 786,
            "position_id": 1
          },
          {
            "player_id": 787,
            "position_id": 3
          },
          {
            "player_id": 788,
            "position_id": 4
          },
          {
            "player_id": 789,
            "position_id": 1
          },
          {
            "player_id": 790,
            "position_id": 1
          },
          {
            "player_id": 791,
            "position_id": 1
          },
          {
            "player_id": 792,
            "position_id": 1
          },
          {
            "player_id": 793,
            "position_id": 1
          },
          {
            "player_id": 794,
            "position_id": 2
          },
          {
            "player_id": 795,
            "position_id": 2
          },
          {
            "player_id": 796,
            "position_id": 4
          },
          {
            "player_id": 797,
            "position_id": 1
          },
          {
            "player_id": 798,
            "position_id": 2
          },
          {
            "player_id": 799,
            "position_id": 2
          },
          {
            "player_id": 800,
            "position_id": 1
          },
          {
            "player_id": 801,
            "position_id": 3
          },
          {
            "player_id": 802,
            "position_id": 4
          },
          {
            "player_id": 803,
            "position_id": 2
          },
          {
            "player_id": 804,
            "position_id": 1
          },
          {
            "player_id": 805,
            "position_id": 1
          },
          {
            "player_id": 806,
            "position_id": 1
          },
          {
            "player_id": 807,
            "position_id": 4
          },
          {
            "player_id": 808,
            "position_id": 2
          },
          {
            "player_id": 809,
            "position_id": 2
          },
          {
            "player_id": 810,
            "position_id": 4
          },
          {
            "player_id": 811,
            "position_id": 2
          },
          {
            "player_id": 812,
            "position_id": 1
          },
          {
            "player_id": 813,
            "position_id": 1
          },
          {
            "player_id": 814,
            "position_id": 2
          },
          {
            "player_id": 815,
            "position_id": 2
          },
          {
            "player_id": 816,
            "position_id": 2
          },
          {
            "player_id": 817,
            "position_id": 4
          },
          {
            "player_id": 818,
            "position_id": 2
          },
          {
            "player_id": 819,
            "position_id": 2
          },
          {
            "player_id": 820,
            "position_id": 2
          },
          {
            "player_id": 821,
            "position_id": 2
          },
          {
            "player_id": 822,
            "position_id": 2
          },
          {
            "player_id": 823,
            "position_id": 4
          },
          {
            "player_id": 824,
            "position_id": 2
          },
          {
            "player_id": 825,
            "position_id": 1
          },
          {
            "player_id": 826,
            "position_id": 2
          },
          {
            "player_id": 827,
            "position_id": 2
          },
          {
            "player_id": 828,
            "position_id": 2
          },
          {
            "player_id": 829,
            "position_id": 4
          },
          {
            "player_id": 830,
            "position_id": 3
          },
          {
            "player_id": 831,
            "position_id": 4
          },
          {
            "player_id": 832,
            "position_id": 2
          },
          {
            "player_id": 833,
            "position_id": 1
          },
          {
            "player_id": 834,
            "position_id": 2
          },
          {
            "player_id": 835,
            "position_id": 3
          },
          {
            "player_id": 836,
            "position_id": 1
          },
          {
            "player_id": 837,
            "position_id": 2
          },
          {
            "player_id": 838,
            "position_id": 1
          },
          {
            "player_id": 839,
            "position_id": 4
          },
          {
            "player_id": 840,
            "position_id": 2
          },
          {
            "player_id": 841,
            "position_id": 1
          },
          {
            "player_id": 842,
            "position_id": 3
          },
          {
            "player_id": 843,
            "position_id": 2
          },
          {
            "player_id": 844,
            "position_id": 4
          },
          {
            "player_id": 845,
            "position_id": 3
          },
          {
            "player_id": 846,
            "position_id": 2
          },
          {
            "player_id": 847,
            "position_id": 2
          },
          {
            "player_id": 848,
            "position_id": 1
          },
          {
            "player_id": 849,
            "position_id": 2
          },
          {
            "player_id": 850,
            "position_id": 2
          },
          {
            "player_id": 851,
            "position_id": 2
          },
          {
            "player_id": 852,
            "position_id": 2
          },
          {
            "player_id": 853,
            "position_id": 2
          },
          {
            "player_id": 854,
            "position_id": 4
          },
          {
            "player_id": 855,
            "position_id": 1
          },
          {
            "player_id": 856,
            "position_id": 1
          },
          {
            "player_id": 857,
            "position_id": 2
          },
          {
            "player_id": 858,
            "position_id": 1
          },
          {
            "player_id": 859,
            "position_id": 2
          },
          {
            "player_id": 860,
            "position_id": 1
          },
          {
            "player_id": 861,
            "position_id": 2
          },
          {
            "player_id": 862,
            "position_id": 2
          },
          {
            "player_id": 863,
            "position_id": 4
          },
          {
            "player_id": 864,
            "position_id": 2
          },
          {
            "player_id": 865,
            "position_id": 1
          },
          {
            "player_id": 866,
            "position_id": 1
          },
          {
            "player_id": 867,
            "position_id": 1
          },
          {
            "player_id": 868,
            "position_id": 2
          },
          {
            "player_id": 869,
            "position_id": 2
          },
          {
            "player_id": 870,
            "position_id": 2
          },
          {
            "player_id": 871,
            "position_id": 2
          },
          {
            "player_id": 872,
            "position_id": 2
          },
          {
            "player_id": 873,
            "position_id": 1
          },
          {
            "player_id": 874,
            "position_id": 1
          },
          {
            "player_id": 875,
            "position_id": 1
          },
          {
            "player_id": 876,
            "position_id": 4
          },
          {
            "player_id": 877,
            "position_id": 1
          },
          {
            "player_id": 878,
            "position_id": 1
          },
          {
            "player_id": 879,
            "position_id": 2
          },
          {
            "player_id": 880,
            "position_id": 2
          },
          {
            "player_id": 881,
            "position_id": 4
          },
          {
            "player_id": 882,
            "position_id": 2
          },
          {
            "player_id": 883,
            "position_id": 4
          },
          {
            "player_id": 884,
            "position_id": 2
          },
          {
            "player_id": 885,
            "position_id": 1
          },
          {
            "player_id": 886,
            "position_id": 2
          },
          {
            "player_id": 887,
            "position_id": 2
          },
          {
            "player_id": 888,
            "position_id": 1
          },
          {
            "player_id": 563,
            "position_id": 2
          },
          {
            "player_id": 694,
            "position_id": 1
          },
          {
            "player_id": 52,
            "position_id": 2
          },
          {
            "player_id": 40,
            "position_id": 2
          },
          {
            "player_id": 63,
            "position_id": 2
          },
          {
            "player_id": 143,
            "position_id": 2
          },
          {
            "player_id": 163,
            "position_id": 2
          },
          {
            "player_id": 175,
            "position_id": 2
          },
          {
            "player_id": 186,
            "position_id": 2
          },
          {
            "player_id": 203,
            "position_id": 2
          },
          {
            "player_id": 220,
            "position_id": 2
          },
          {
            "player_id": 246,
            "position_id": 2
          },
          {
            "player_id": 283,
            "position_id": 2
          },
          {
            "player_id": 377,
            "position_id": 2
          },
          {
            "player_id": 396,
            "position_id": 2
          },
          {
            "player_id": 514,
            "position_id": 2
          },
          {
            "player_id": 585,
            "position_id": 2
          },
          {
            "player_id": 707,
            "position_id": 2
          },
          {
            "player_id": 736,
            "position_id": 2
          },
          {
            "player_id": 769,
            "position_id": 2
          },
          {
            "player_id": 789,
            "position_id": 2
          },
          {
            "player_id": 793,
            "position_id": 2
          },
          {
            "player_id": 797,
            "position_id": 2
          },
          {
            "player_id": 841,
            "position_id": 2
          },
          {
            "player_id": 865,
            "position_id": 2
          },
          {
            "player_id": 874,
            "position_id": 2
          },
          {
            "player_id": 878,
            "position_id": 2
          },
          {
            "player_id": 888,
            "position_id": 2
          },
          {
            "player_id": 49,
            "position_id": 3
          },
          {
            "player_id": 131,
            "position_id": 3
          },
          {
            "player_id": 157,
            "position_id": 3
          },
          {
            "player_id": 198,
            "position_id": 3
          },
          {
            "player_id": 285,
            "position_id": 3
          },
          {
            "player_id": 411,
            "position_id": 3
          },
          {
            "player_id": 470,
            "position_id": 3
          },
          {
            "player_id": 522,
            "position_id": 3
          },
          {
            "player_id": 548,
            "position_id": 3
          },
          {
            "player_id": 581,
            "position_id": 3
          },
          {
            "player_id": 603,
            "position_id": 3
          },
          {
            "player_id": 614,
            "position_id": 3
          },
          {
            "player_id": 617,
            "position_id": 3
          },
          {
            "player_id": 680,
            "position_id": 3
          },
          {
            "player_id": 699,
            "position_id": 3
          },
          {
            "player_id": 731,
            "position_id": 3
          },
          {
            "player_id": 778,
            "position_id": 3
          },
          {
            "player_id": 779,
            "position_id": 3
          },
          {
            "player_id": 780,
            "position_id": 3
          },
          {
            "player_id": 788,
            "position_id": 3
          },
          {
            "player_id": 805,
            "position_id": 3
          },
          {
            "player_id": 810,
            "position_id": 3
          },
          {
            "player_id": 817,
            "position_id": 3
          },
          {
            "player_id": 876,
            "position_id": 3
          },
          {
            "player_id": 883,
            "position_id": 3
          },
          {
            "player_id": 22,
            "position_id": 4
          },
          {
            "player_id": 23,
            "position_id": 4
          },
          {
            "player_id": 34,
            "position_id": 4
          },
          {
            "player_id": 37,
            "position_id": 4
          },
          {
            "player_id": 39,
            "position_id": 4
          },
          {
            "player_id": 42,
            "position_id": 4
          },
          {
            "player_id": 62,
            "position_id": 4
          },
          {
            "player_id": 120,
            "position_id": 4
          },
          {
            "player_id": 141,
            "position_id": 4
          },
          {
            "player_id": 142,
            "position_id": 4
          },
          {
            "player_id": 154,
            "position_id": 4
          },
          {
            "player_id": 155,
            "position_id": 4
          },
          {
            "player_id": 171,
            "position_id": 4
          },
          {
            "player_id": 185,
            "position_id": 4
          },
          {
            "player_id": 201,
            "position_id": 4
          },
          {
            "player_id": 217,
            "position_id": 4
          },
          {
            "player_id": 265,
            "position_id": 4
          },
          {
            "player_id": 269,
            "position_id": 4
          },
          {
            "player_id": 303,
            "position_id": 4
          },
          {
            "player_id": 315,
            "position_id": 4
          },
          {
            "player_id": 336,
            "position_id": 4
          },
          {
            "player_id": 337,
            "position_id": 4
          },
          {
            "player_id": 343,
            "position_id": 4
          },
          {
            "player_id": 403,
            "position_id": 4
          },
          {
            "player_id": 407,
            "position_id": 4
          },
          {
            "player_id": 454,
            "position_id": 4
          },
          {
            "player_id": 463,
            "position_id": 4
          },
          {
            "player_id": 467,
            "position_id": 4
          },
          {
            "player_id": 473,
            "position_id": 4
          },
          {
            "player_id": 476,
            "position_id": 4
          },
          {
            "player_id": 478,
            "position_id": 4
          },
          {
            "player_id": 487,
            "position_id": 4
          },
          {
            "player_id": 502,
            "position_id": 4
          },
          {
            "player_id": 527,
            "position_id": 4
          },
          {
            "player_id": 536,
            "position_id": 4
          },
          {
            "player_id": 540,
            "position_id": 4
          },
          {
            "player_id": 547,
            "position_id": 4
          },
          {
            "player_id": 551,
            "position_id": 4
          },
          {
            "player_id": 557,
            "position_id": 4
          },
          {
            "player_id": 576,
            "position_id": 4
          },
          {
            "player_id": 598,
            "position_id": 4
          },
          {
            "player_id": 622,
            "position_id": 4
          },
          {
            "player_id": 625,
            "position_id": 4
          },
          {
            "player_id": 631,
            "position_id": 4
          },
          {
            "player_id": 652,
            "position_id": 4
          },
          {
            "player_id": 653,
            "position_id": 4
          },
          {
            "player_id": 654,
            "position_id": 4
          },
          {
            "player_id": 672,
            "position_id": 4
          },
          {
            "player_id": 673,
            "position_id": 4
          },
          {
            "player_id": 683,
            "position_id": 4
          },
          {
            "player_id": 684,
            "position_id": 4
          },
          {
            "player_id": 708,
            "position_id": 4
          },
          {
            "player_id": 713,
            "position_id": 4
          },
          {
            "player_id": 717,
            "position_id": 4
          },
          {
            "player_id": 719,
            "position_id": 4
          },
          {
            "player_id": 721,
            "position_id": 4
          },
          {
            "player_id": 726,
            "position_id": 4
          },
          {
            "player_id": 733,
            "position_id": 4
          },
          {
            "player_id": 740,
            "position_id": 4
          },
          {
            "player_id": 749,
            "position_id": 4
          },
          {
            "player_id": 776,
            "position_id": 4
          },
          {
            "player_id": 786,
            "position_id": 4
          },
          {
            "player_id": 794,
            "position_id": 4
          },
          {
            "player_id": 799,
            "position_id": 4
          },
          {
            "player_id": 804,
            "position_id": 4
          },
          {
            "player_id": 815,
            "position_id": 4
          },
          {
            "player_id": 821,
            "position_id": 4
          },
          {
            "player_id": 825,
            "position_id": 4
          },
          {
            "player_id": 832,
            "position_id": 4
          },
          {
            "player_id": 836,
            "position_id": 4
          },
          {
            "player_id": 840,
            "position_id": 4
          },
          {
            "player_id": 847,
            "position_id": 4
          },
          {
            "player_id": 849,
            "position_id": 4
          },
          {
            "player_id": 853,
            "position_id": 4
          },
          {
            "player_id": 857,
            "position_id": 4
          },
          {
            "player_id": 859,
            "position_id": 4
          },
          {
            "player_id": 860,
            "position_id": 4
          },
          {
            "player_id": 862,
            "position_id": 4
          },
          {
            "player_id": 866,
            "position_id": 4
          },
          {
            "player_id": 875,
            "position_id": 4
          },
          {
            "player_id": 877,
            "position_id": 4
          },
          {
            "player_id": 886,
            "position_id": 4
          }
        ]'::json)
)
/* Insert Player Position Joins. */
INSERT INTO player_position_join(player_id, position_id)
    SELECT player_id, position_id
    FROM player_position_join_import_json
        CROSS JOIN LATERAL json_populate_recordset(NULL::player_position_join, import_json);
