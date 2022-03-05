import Logo5318008 from "../../../images/teamLogos/Logo5318008.png";
import MazMissesRicho from "../../../images/teamLogos/MazMissesRicho.png";
import TheBackPockets from "../../../images/teamLogos/TheBackPockets.png";
import TheSituation from "../../../images/teamLogos/TheSituation.png";
import Silverbacks from "../../../images/teamLogos/Silverbacks.png";
import Juddstar from "../../../images/teamLogos/Juddstar.png";
import TreeOfLife from "../../../images/teamLogos/TheSituation.png";
import SuperMaalioBros from "../../../images/teamLogos/SuperMaalioBros.png";
import DonTheSash from "../../../images/teamLogos/DonTheSash.png";
import ThePeptidePimps from "../../../images/teamLogos/ThePeptidePimps.gif";
import Lachtioneers from "../../../images/teamLogos/Lachtioneers.gif";
import GiftsOfGirth from "../../../images/teamLogos/GiftsOfGirth.png";

export default class PurchaseReviewSymbolFetcher {

    static teamLogoMap = new Map([
        [1, Logo5318008],
        [2, MazMissesRicho],
        [3, TheBackPockets],
        [4, TheSituation],
        [5, Silverbacks],
        [6, Juddstar],
        [7, TreeOfLife],
        [8, SuperMaalioBros],
        [9, DonTheSash],
        [10, ThePeptidePimps],
        [11, Lachtioneers],
        [12, GiftsOfGirth],
    ]);

    static getTeamLogo(teamId) {
        if(teamId != null) {
            return this.teamLogoMap.get(teamId);
        }
    }

}
