export default class PlayerStatFetcher {

    static positionMaxAveMap = new Map([
        ["DEF", 90],
        ["MID", 110],
        ["RUC", 110],
        ["FWD", 90]
    ]);

    static positionMaxDisposalsMap = new Map([
        ["DEF", 20],
        ["MID", 30],
        ["RUC", 15],
        ["FWD", 20]
    ]);

    static positionMaxDisposalEfficiencyMap = new Map([
        ["DEF", 80],
        ["MID", 70],
        ["RUC", 65],
        ["FWD", 80]
    ]);

    static getPositionMaxAve(position) {
        if(position != null) {
            return this.positionMaxAveMap.get(position);
        }
    }

    static getPositionMaxDisposals(position) {
        if(position != null) {
            return this.positionMaxDisposalsMap.get(position);
        }
    }

    static getPositionMaxDisposalEfficiency(position) {
        if(position != null) {
            return this.positionMaxDisposalEfficiencyMap.get(position);
        }
    }

    static maxGamesPlayed = 18;

    static maxPrice = 50;

}
