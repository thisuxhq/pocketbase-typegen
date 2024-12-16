import { generateTypes } from "./generator";
import type { PocketBaseSchema } from "./types";

export function pbTypegen(schema: PocketBaseSchema): string {
  return generateTypes(schema);
}

export async function pbTypegenFromFile(path: string): Promise<string> {
  const file = Bun.file(path);
  const content = await file.text();
  const schema = JSON.parse(content) as PocketBaseSchema;
  return generateTypes(schema);
}

export async function pbTypegenToFile(inputPath: string, outputPath?: string): Promise<void> {
  const types = await pbTypegenFromFile(inputPath);
  const targetPath = outputPath || inputPath.replace(/\.json$/, '.types.ts');

  await Bun.write(targetPath, types);
}

