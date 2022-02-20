import ThePeptidePimpsLogo from "../../../images/teamLogos/ThePeptidePimps.png";

export default class PurchaseReviewSymbolFetcher {

    static teamLogoMap = new Map([
        [0, ThePeptidePimpsLogo],
        [1, ThePeptidePimpsLogo],
        [2, ThePeptidePimpsLogo],
        [3, ThePeptidePimpsLogo],
        [4, ThePeptidePimpsLogo],
        [5, ThePeptidePimpsLogo],
        [6, ThePeptidePimpsLogo],
        [7, ThePeptidePimpsLogo],
        [8, ThePeptidePimpsLogo],
        [9, ThePeptidePimpsLogo],
    ]);

    static getTeamLogo(teamId) {
        if(teamId != null) {
            return this.teamLogoMap.get(teamId);
        }
    }

}
