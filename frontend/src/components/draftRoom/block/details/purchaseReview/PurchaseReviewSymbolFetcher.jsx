import FSymbol from "../../../../../images/FSymbol.svg";
import ESymbol from "../../../../../images/ESymbol.svg";
import DSymbol from "../../../../../images/DSymbol.svg";
import CSymbol from "../../../../../images/CSymbol.svg";
import BSymbol from "../../../../../images/BSymbol.svg";
import ASymbol from "../../../../../images/ASymbol.svg";
import APlusSymbol from "../../../../../images/APlusSymbol.svg";

export default class PurchaseReviewSymbolFetcher {

    static purchaseReviewSymbolMap = new Map([
        ["0", FSymbol],
        ["1", ESymbol],
        ["2", DSymbol],
        ["3", CSymbol],
        ["4", BSymbol],
        ["5", ASymbol],
        ["6", APlusSymbol],
    ]);

    static getPurchaseReviewSymbol(rating) {
        if(rating != null) {
            return this.purchaseReviewSymbolMap.get(rating);
        }
    }

}
