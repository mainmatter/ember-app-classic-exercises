import Service from '@ember/service';

export default Service.extend({
  fetchData(data, type, options) {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve("This is the payload from the backend."),
        100
      );
    });
  }
})
