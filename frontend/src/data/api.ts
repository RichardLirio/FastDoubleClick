import { env } from "@/env";

//criando requisição padrão com o backend
export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(path, baseUrl);

  return fetch(url, init);
}
