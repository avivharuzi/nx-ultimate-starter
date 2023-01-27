export enum NodeEnv {
  Development = 'development',
  Production = 'production',
}

export interface Env {
  NODE_ENV: NodeEnv;
  API_HOST: string;
  API_PORT: number;
  API_GLOBAL_PREFIX: string;
  API_COOKIE_SECRET: string;
  API_MONGODB_URI: string;
}
