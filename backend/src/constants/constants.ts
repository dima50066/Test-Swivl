import path from 'node:path';

export const SORT_ORDER: { ASC: 'asc'; DESC: 'desc' } = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES: number = 15 * 60 * 1000;
export const THIRTY_DAYS: number = 30 * 24 * 60 * 60 * 1000;


export const TEMPLATES_DIR: string = path.join(process.cwd(), 'src', 'templates');
export const TEMP_UPLOAD_DIR: string = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR: string = path.join(process.cwd(), 'uploads');

export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};

