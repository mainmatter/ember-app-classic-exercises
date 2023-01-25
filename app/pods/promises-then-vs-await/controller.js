import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

function waitForJob(data) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(data),
      1000
    );
  });
}

export default Controller.extend({
  apiService: service('promises-then-vs-await'),

  actions: {
    async doTheThing() {
      const fetchedData = await this.get("apiService").fetchData("loginData", "createRecords", {
          recordType: "glbudgetheader",
          recordNo: 123,
          data: "chunk",
          budgetId: "selectedRoot.absoluteRoot.id",
          exportType: "model.exportSelection",
          selectedSIbudget: "model.intacctBudgetId",
        });
          
      if (typeof data === "string") {
        // wait for the job to complete
        await waitForJob(fetchedData);
      }
      alert(fetchedData);   
    },
  },
});
