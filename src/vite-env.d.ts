/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly [key: `VITE_${string}`]: string | undefined;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
