package au.superdraftfantasy.api.player;

// TODO Rename Team to Club to avoid confusion with SDTeam.
public enum AflTeamEnum {
    ADELAIDE_CROWS("Adelaide Crows"),
    BRISBANE_LIONS("Brisbane Lions"),
    CARLTON_BLUES("Carlton Blues"),
    COLLINGWOOD_MAGPIES("Collingwood Magpies"),
    ESSENDON_BOMBERS("Essendon Bombers"),
    FREMANTLE_DOCKERS("Fremantle Dockers"),
    GEELONG_CATS("Geelong Cats"),
    GOLD_COAST_SUNS("Gold Coast Suns"),
    GWS_GIANTS("GWS Giants"),
    HAWTHORN_HAWKS("Hawthorn Hawks"),
    MELBOURNE_DEMONS("Melbourne Demons"),
    NORTH_MELBOURNE_KANGAROOS("North Melbourne Kangaroos"),
    PORT_ADELAIDE_POWER("Port Adelaide Power"),
    RICHMOND_TIGERS("Richmond Tigers"),
    ST_KILDA_SAINTS("St Kilda Saints"),
    SYDNEY_SWANS("Sydney Swans"),
    WEST_COAST_EAGLES("West Coast Eagles"),
    WESTERN_BULLDOGS("Western Bulldogs");

    private final String aflTeamName;

    AflTeamEnum(String aflTeamName) {
        this.aflTeamName = aflTeamName;
    }

    public String getAflTeamName() {
        return this.aflTeamName;
    }
}


