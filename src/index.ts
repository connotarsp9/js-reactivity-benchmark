import { dynamicBench } from "./dynamicBench";
import { cellxbench } from "./cellxBench";
import { sbench } from "./sBench";
import { frameworkInfo } from "./config";
import { logPerfResultHeaders } from "./util/perfLogging";
import { molBench } from "./molBench";
import { kairoBench } from "./kairoBench";

async function main() {
  logPerfResultHeaders();
  for (const frameworkTest of frameworkInfo) {
    await dynamicBench(frameworkTest);
  }

  for (const { framework } of frameworkInfo) {
    console.log("------------------");
    console.log("Running kairo-bench for", framework.name);
    kairoBench(framework);
  }

  for (const { framework } of frameworkInfo) {
    console.log("------------------");
    console.log("Running mol-bench for", framework.name);
    molBench(framework);
  }

  for (const { framework } of frameworkInfo) {
    console.log("------------------");
    console.log("Running S-bench for", framework.name);
    sbench(framework);
  }

  for (const { framework } of frameworkInfo) {
    console.log("------------------");
    console.log("Running Cellx-bench for", framework.name);
    cellxbench(framework);
  }
}

main();
