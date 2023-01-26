export enum NodeEnv {
  Development = 'development',
  Production = 'production',
}

export interface Env {
  NODE_ENV: NodeEnv;
  API_HOST: string;
  API_PORT: number;
  API_MONGODB_URI: string;
}