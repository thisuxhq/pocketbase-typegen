// Generated types for PocketBase collections
export interface UsersRecord {
  id: string;
  username: string;
  name?: string;
  avatar?: string;
  created?: any;
  updated?: any;
}

export type HelpWithOptions =
  'brand design' |
  'website' |
  'mobile app' |
  'product design' |
  'development' |
  'ui/ux design' |
  'partnership' |
  'other';

export type BudgetOptions =
  'less than $3k' |
  '$3k - $5k' |
  '$5k - $10k' |
  '$10k - $25k' |
  '$25k - $50k' |
  '$50k+';

export type ReferralSourceOptions =
  'Google' |
  'Facebook' |
  'Instagram' |
  'LinkedIn' |
  'Twitter' |
  'Word of Mouth' |
  'Friend Referral' |
  'Advertisement' |
  'Blog' |
  'Email Campaign' |
  'YouTube' |
  'Search Engine' |
  'Other';

export interface InquiriesRecord {
  id: string;
  name: string;
  email: string;
  company_name?: string;
  help_with?: HelpWithOptions[];
  project_details?: string;
  budget?: BudgetOptions;
  referral_source?: ReferralSourceOptions;
  created?: any;
  updated?: any;
}

export interface PartnershipRecord {
  id: string;
  content?: string;
  meta_title?: string;
  meta_description?: string;
  meta_og_image_url?: string;
  created?: any;
  updated?: any;
}

export interface VisionRecord {
  id: string;
  title?: string;
  content?: string;
  created?: any;
  updated?: any;
}

export interface WorksRecord {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  category?: string;
  tags?: any;
  cover_image?: string;
  gallery?: string[];
  client_name?: string;
  project_date?: string;
  published?: boolean;
  featured?: boolean;
  created?: any;
  updated?: any;
}

export interface Collections {
  users: UsersRecord;
  inquiries: InquiriesRecord;
  partnership: PartnershipRecord;
  vision: VisionRecord;
  works: WorksRecord;
}