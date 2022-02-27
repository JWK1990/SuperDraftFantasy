class ImportedPlayerListUtils {

    setMyBudgets(myBudgets) {
        const myBudgetsString = JSON.stringify(myBudgets);
        localStorage.setItem('myBudgets', myBudgetsString);
    }

    getMyBudgets() {
        const myBudgetsString = localStorage.getItem('myBudgets');
        return JSON.parse(myBudgetsString);
    }

    removeMyBudgets() {
        localStorage.removeItem('myBudgets');
    }

}

export default new ImportedPlayerListUtils();

