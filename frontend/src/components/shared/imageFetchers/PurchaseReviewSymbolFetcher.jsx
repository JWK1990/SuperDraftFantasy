import FSymbol from "../../../images/purchaseReviewSymbols/FSymbol.svg";
import ESymbol from "../../../images/purchaseReviewSymbols/ESymbol.svg";
import DSymbol from "../../../images/purchaseReviewSymbols/DSymbol.svg";
import CSymbol from "../../../images/purchaseReviewSymbols/CSymbol.svg";
import BSymbol from "../../../images/purchaseReviewSymbols/BSymbol.svg";
import ASymbol from "../../../images/purchaseReviewSymbols/ASymbol.svg";
import APlusSymbol from "../../../images/purchaseReviewSymbols/APlusSymbol.svg";

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
