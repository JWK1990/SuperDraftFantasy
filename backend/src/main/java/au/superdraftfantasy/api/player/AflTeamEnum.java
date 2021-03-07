package au.superdraftfantasy.api.player;

// TODO Rename Team to Club to avoid confusion with SDTeam.
public enum AflTeamEnum {
    ADELAIDE_CROWS("Adelaide"),
    BRISBANE_LIONS("Brisbane"),
    CARLTON_BLUES("Carlton"),
    COLLINGWOOD_MAGPIES("Collingwood"),
    ESSENDON_BOMBERS("Essendon"),
    FREMANTLE_DOCKERS("Fremantly"),
    GEELONG_CATS("Geelong"),
    GOLD_COAST_SUNS("Gold Coast"),
    GWS_GIANTS("GWS"),
    HAWTHORN_HAWKS("Hawthorn"),
    MELBOURNE_DEMONS("Melbourne"),
    NORTH_MELBOURNE_KANGAROOS("North Melbourne"),
    PORT_ADELAIDE_POWER("Port Adelaide"),
    RICHMOND_TIGERS("Richmond"),
    ST_KILDA_SAINTS("St Kilda"),
    SYDNEY_SWANS("Sydney"),
    WEST_COAST_EAGLES("West Coast"),
    WESTERN_BULLDOGS("Western Bulldogs");

    private final String aflTeamName;

    AflTeamEnum(String aflTeamName) {
        this.aflTeamName = aflTeamName;
    }

    public String getAflTeamName() {
        return this.aflTeamName;
    }
}


