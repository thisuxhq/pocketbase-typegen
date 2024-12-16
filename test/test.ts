import { pbTypegen, pbTypegenFromFile, pbTypegenToFile } from "../src";

// This will be replaced with the generated types at build time
// const types = await pbTypegenFromFile("./sample/schema.json");
// console.log(types);

// console.log("--------------------------------");
// const types2 = await pbTypegen(JSON.parse(await Bun.file("./sample/schema.json").text()));
// console.log(types2);

await pbTypegenToFile("./sample/schema.json", "./sample/types.ts");