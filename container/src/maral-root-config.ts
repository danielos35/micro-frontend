import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@maral/mf-header",
  app: () => System.import("@maral/mf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
