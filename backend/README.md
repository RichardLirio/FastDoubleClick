- **Back-end:**
    - *Rotas Fastify*:
        - `POST /clicks` → recebe e grava no JSON.
        - `GET /clicks` → retorna o JSON completo.
    - *Serviço*: Módulo para leitura/escrita segura no JSON.
    - *Validação*: Plugins do Fastify (ex: `fastify-sensible`, `fastify-ajv`).

    - **Banco de dados (JSON):**
    - Estrutura básica:
        
        ```json
        json
        CopiarEditar
        [
          {
            "id": "uuid",
            "timestamp": "2025-05-01T12:00:00Z",
            "name": "João",
            "timeBetweenClicks": 350
          }
        ]
        
        ```