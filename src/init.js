const apps = require("./apps.json");

const child = require("child_process");

apps.forEach(({ url }) => {
  child.exec("open" + " " + url);
});
