package au.superdraftfantasy.api.player;

// TODO Rename Team to Club to avoid confusion with SDTeam.
public enum AflTeamEnum {
    ADELAIDE_CROWS("ADE"),
    BRISBANE_LIONS("BRI"),
    CARLTON_BLUES("CAR"),
    COLLINGWOOD_MAGPIES("COLL"),
    ESSENDON_BOMBERS("ESS"),
    FREMANTLE_DOCKERS("FRE"),
    GEELONG_CATS("GEE"),
    GOLD_COAST_SUNS("GC"),
    GWS_GIANTS("GWS"),
    HAWTHORN_HAWKS("HAW"),
    MELBOURNE_DEMONS("MEL"),
    NORTH_MELBOURNE_KANGAROOS("NTH"),
    PORT_ADELAIDE_POWER("PTA"),
    RICHMOND_TIGERS("RIC"),
    ST_KILDA_SAINTS("STK"),
    SYDNEY_SWANS("SYD"),
    WEST_COAST_EAGLES("WCE"),
    WESTERN_BULLDOGS("WBD");

    private final String aflTeamName;

    AflTeamEnum(String aflTeamName) {
        this.aflTeamName = aflTeamName;
    }

    public String getAflTeamName() {
        return this.aflTeamName;
    }
}


