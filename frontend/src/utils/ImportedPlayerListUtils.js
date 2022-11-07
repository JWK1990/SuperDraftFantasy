class ImportedPlayerListUtils {

    setMyBudgets(myBudgets) {
        const myBudgetsString = JSON.stringify(myBudgets);
        localStorage.setItem('myBudgets', myBudgetsString);
    }

    getMyBudgets() {
        const myBudgetsString = localStorage.getItem('myBudgets');
        return myBudgetsString ? JSON.parse(myBudgetsString) : [];
    }

    removeMyBudgets() {
        localStorage.removeItem('myBudgets');
    }

    setMyBudgetForPlayer(myBudget, playerId) {
        const currentMyBudgetList = this.getMyBudgets();
        const updatedMyBudgetList = currentMyBudgetList.length > 0 ? [...this.getMyBudgets()] : [];
        const currentMyBudgetIndex = updatedMyBudgetList.findIndex(myBudgetData => myBudgetData.id === playerId);
        if(currentMyBudgetIndex > -1) {
            updatedMyBudgetList[currentMyBudgetIndex].myBudget = myBudget;
        } else {
            updatedMyBudgetList.push({
                id: playerId,
                myBudget: myBudget,
            })
        }
        this.setMyBudgets(updatedMyBudgetList);
    }

}

export default new ImportedPlayerListUtils();

