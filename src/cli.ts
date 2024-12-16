import { pbTypegenToFile } from "./index";
import { argv } from 'bun';

// Get the input and output paths from the command line arguments
const [inputPath, outputPath] = argv.slice(2);

// Generate the types and write to the output file
await pbTypegenToFile(inputPath, outputPath);

// Log the success message
console.log(`Types generated and written to ${outputPath}`);

