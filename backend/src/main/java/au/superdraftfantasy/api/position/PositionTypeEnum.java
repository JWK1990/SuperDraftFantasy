package au.superdraftfantasy.api.position;

public enum PositionTypeEnum {
    DEF("DEF"),
    MID("MID"),
    RUC("RUC"),
    FWD("FWD"),
    BENCH("BENCH");

    private final String positionName;

    PositionTypeEnum(String positionName) {
        this.positionName = positionName;
    }

    public String getPositionName() {
        return this.positionName;
    }
}
