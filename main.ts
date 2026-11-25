import { writeFileSync, chmodSync } from "node:fs";

const entry = "Guard won't let me in, my badge photo's from 2019 and he thinks I'm queuing for the midnight launch.";
const target = "/output/entry.txt";
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
// Entry for make.fun — The Excuse That Almost Works.
