import { API } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "wordbook-m",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
};
