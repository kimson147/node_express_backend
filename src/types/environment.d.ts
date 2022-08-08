export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      MONGODB_URL: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
