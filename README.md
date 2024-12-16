# pocketbase-typegen

A TypeScript type generator for PocketBase collections. This tool automatically generates TypeScript interfaces and types from your PocketBase schema.

## Features

- Generates TypeScript interfaces for all PocketBase collections
- Supports all PocketBase field types
- Generates union types for select fields
- Handles optional fields
- Supports file fields (single and multiple)
- Excludes system collections by default
- Generates a Collections interface for type-safe access

## Installation

```bash
# Using bun
bun add pocketbase-typegen

# Using npm
npm install pocketbase-typegen

# Using yarn
yarn add pocketbase-typegen
```

## Usage

### Generate types from a schema file

```typescript
import { pbTypegenFromFile, pbTypegenToFile } from 'pocketbase-typegen';

// Generate types and get as string
const types = await pbTypegenFromFile('./schema.json');
console.log(types);

// Generate types and save to file
await pbTypegenToFile('./schema.json', './types.ts');
```

### Generate types from schema object

```typescript
import { pbTypegen } from 'pocketbase-typegen';

const schema = [/* your PocketBase schema */];
const types = pbTypegen(schema);
```

## Output Example

The generator creates TypeScript interfaces and types like this:

```typescript
export type CategoryOptions =
  'web' |
  'mobile' |
  'design';

export interface ProjectRecord {
  id: string;
  title: string;
  description?: string;
  category?: CategoryOptions;
  files?: string[];
  created?: string;
  updated?: string;
}

export interface Collections {
  projects: ProjectRecord;
}
```

## Type Mappings

- `text`, `email`, `url`, `editor` → `string`
- `number` → `number`
- `bool` → `boolean`
- `date` → `string`
- `select` → Custom union type
- `json` → `any`
- `file` (single) → `string`
- `file` (multiple) → `string[]`
- `relation` → `string`
- `password` → `never`

## Development

This project uses [Bun](https://bun.sh) for development. Make sure you have Bun installed.

```bash
# Install dependencies
bun install

# Run tests
bun test

# Generate types from sample schema
bun run generate
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
