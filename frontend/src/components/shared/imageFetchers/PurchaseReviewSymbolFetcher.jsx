import FSymbol from "../../../images/purchaseReviewSymbols/FSymbol.svg";
import ESymbol from "../../../images/purchaseReviewSymbols/ESymbol.svg";
import DSymbol from "../../../images/purchaseReviewSymbols/DSymbol.svg";
import CSymbol from "../../../images/purchaseReviewSymbols/CSymbol.svg";
import BSymbol from "../../../images/purchaseReviewSymbols/BSymbol.svg";
import ASymbol from "../../../images/purchaseReviewSymbols/ASymbol.svg";
import OaklandAsSymbol from "../../../images/purchaseReviewSymbols/OaklandAsSymbol.png";

export default class PurchaseReviewSymbolFetcher {

    static purchaseReviewSymbolMap = new Map([
        ["0", FSymbol],
        ["1", ESymbol],
        ["2", DSymbol],
        ["3", CSymbol],
        ["4", BSymbol],
        ["5", ASymbol],
        ["6", OaklandAsSymbol],
    ]);

    static purchaseReviewTextMap = new Map([
        [0, "F"],
        [1, "E"],
        [2, "D"],
        [3, "C"],
        [4, "B"],
        [5, "A"],
        [6, "A+"],
    ]);

    static getPurchaseReviewSymbol(rating) {
        if(rating != null) {
            return this.purchaseReviewSymbolMap.get(rating);
        }
    }

    static getPurchaseReviewText(rating) {
        if(rating != null) {
            return this.purchaseReviewTextMap.get(rating);
        }
    }

}
