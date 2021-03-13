package au.superdraftfantasy.api.player;

public class PlayerRepositoryQueries {

    /* Select Best Undrafted Player In A Given Draft. */
    public static final String selectBestUndraftedPlayerId = "" +
            "SELECT MIN(pe.id) as id\n" +
            "\tFrom player_entity pe \n" +
            "\t\tleft join(\n" +
            "\t\t\tselect *\n" +
            "\t\t\t\tfrom team_player_join_entity tpje \n" +
            "\t\t\t\tleft join team_entity te\n" +
            "\t\t\t\ton te.id = tpje.team_id \n" +
            "\t\t\twhere te.draft_id = :draftId\n" +
            "\t\t) as filtered_tpje\n" +
            "\t\ton filtered_tpje.player_id = pe.id\n" +
            "\twhere filtered_tpje.draft_id is NULL;";

    /* Select Best Undrafted Player In A Given Draft Excluding Given Positions. */
    public static final String selectBestUndraftedPlayerIdWithPositionFilter = "" +
            "SELECT MIN(pe.id) as id\n" +
            "\tFrom player_entity pe \n" +
            "\t\tleft join player_position_join ppj\n" +
            "\t\t\tON PE.id = ppj.player_id\n" +
            "\t\tleft join(\n" +
            "\t\t\tselect *\n" +
            "\t\t\t\tfrom team_player_join_entity tpje \n" +
            "\t\t\t\tleft join team_entity te\n" +
            "\t\t\t\ton te.id = tpje.team_id \n" +
            "\t\t\twhere te.draft_id = :draftId\n" +
            "\t\t) as filtered_tpje\n" +
            "\t\ton filtered_tpje.player_id = pe.id\n" +
            "\t\tleft join position_entity pose\n" +
            "\t\t\ton pose.id = ppj.position_id \n" +
            "\twhere pose.\"type\" not IN :positionExclusionList\n" +
            "\tand filtered_tpje.draft_id is NULL;";
}
