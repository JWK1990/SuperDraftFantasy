export default class PlayerStatFetcher {

    static positionMaxAveMap = new Map([
        ["DEF", 100],
        ["MID", 110],
        ["RUC", 105],
        ["FWD", 100]
    ]);

    static positionAveMap = new Map([
        ["DEF", 80],
        ["MID", 95],
        ["RUC", 90],
        ["FWD", 80]
    ]);

    static positionMaxDisposalsMap = new Map([
        ["DEF", 20],
        ["MID", 30],
        ["RUC", 15],
        ["FWD", 20]
    ]);

    static positionAveDisposalsMap = new Map([
        ["DEF", 15],
        ["MID", 25],
        ["RUC", 10],
        ["FWD", 15]
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

    static getPositionAve(position) {
        if(position != null) {
            return this.positionAveMap.get(position);
        }
    }

    static getPositionMaxDisposals(position) {
        if(position != null) {
            return this.positionMaxDisposalsMap.get(position);
        }
    }

    static getPositionDisposalsAverage(position) {
        if(position != null) {
            return this.positionAveDisposalsMap.get(position);
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
