import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My phone's screen-time report called me 'a heavy user', so I reported it for harassment and it apologized in a push notification.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n");
