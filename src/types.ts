export interface PocketBaseField {
  id: string;
  name: string;
  type: string;
  system: boolean;
  required: boolean;
  [key: string]: any;
}

export interface PocketBaseCollection {
  id: string;
  name: string;
  type: string;
  system: boolean;
  fields: PocketBaseField[];
  [key: string]: any;
}

export type PocketBaseSchema = PocketBaseCollection[];