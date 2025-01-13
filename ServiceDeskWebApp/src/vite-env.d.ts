/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_DESK_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
