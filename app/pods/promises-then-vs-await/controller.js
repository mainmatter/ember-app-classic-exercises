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
    doTheThing() {
      return new Promise((resolve, reject) => {
        this.get("apiService").fetchData("loginData", "createRecords", {
          recordType: "glbudgetheader",
          recordNo: 123,
          data: "chunk",
          budgetId: "selectedRoot.absoluteRoot.id",
          exportType: "model.exportSelection",
          selectedSIbudget: "model.intacctBudgetId",
        }).then((data) => {
          if (typeof data === "string") {
            // wait for the job to complete
            waitForJob(data).then(resolve, reject);
          }
        }).then(alert);
      });
    },
  },
});
