import type { PocketBaseCollection, PocketBaseField, PocketBaseSchema } from "./types";

function mapPocketBaseTypeToTS(field: PocketBaseField): string {
  switch (field.type) {
    case 'text':
    case 'email':
    case 'url':
    case 'editor':
      return 'string';
    case 'number':
      return 'number';
    case 'bool':
      return 'boolean';
    case 'date':
      return 'string';
    case 'select':
      return 'string';
    case 'json':
      return 'any';
    case 'file':
      return field.maxSelect === 1 ? 'string' : 'string[]';
    case 'relation':
      return 'string';
    case 'password':
      return 'never';
    default:
      return 'any';
  }
}

function generateSelectType(field: PocketBaseField): string {
  if (!field.values || !Array.isArray(field.values)) return '';
  
  const typeName = `${capitalize(field.name)}Options`;
  const values = field.values.map(v => `  '${v}'`).join(' |\n');
  
  return `export type ${typeName} =\n${values};`;
}

function generateTypeForCollection(collection: PocketBaseCollection): string {
  const selectFields = collection.fields
    .filter(field => field.type === 'select' && !field.system)
    .map(generateSelectType)
    .filter(Boolean)
    .join('\n\n');

  const fields = collection.fields
    .filter(field => !field.system || field.name === 'id')
    .map(field => {
      const isOptional = !field.required;
      let tsType = mapPocketBaseTypeToTS(field);
      
      // Use the custom type for select fields
      if (field.type === 'select' && field.values) {
        const typeName = `${capitalize(field.name)}Options`;
        tsType = field.maxSelect === 1 ? typeName : `${typeName}[]`;
      }
      
      return `  ${field.name}${isOptional ? '?' : ''}: ${tsType};`;
    })
    .join('\n');

  return `${selectFields ? selectFields + '\n\n' : ''}export interface ${capitalize(collection.name)}Record {
${fields}
}`;
}

function capitalize(str: string): string {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function generateTypes(schema: PocketBaseSchema): string {
  const types = schema
    .filter(collection => !collection.system) // Skip system collections
    .map(collection => generateTypeForCollection(collection))
    .join('\n\n');

  return `// Generated types for PocketBase collections
${types}

export interface Collections {
${schema
  .filter(collection => !collection.system)
  .map(collection => `  ${collection.name}: ${capitalize(collection.name)}Record;`)
  .join('\n')}
}`;
}