# Back-end FastDoubleClick
  Repositorio criado para aplicação de um teste tecnico, a aplicação consiste em um mini game aonde é medido o tempo de um double click. O backend foi construído com foco em boas práticas de desenvolvimento, como os princípios SOLID,  e TDD (Test-Driven Development), utilizando Node.js, TypeScript, Fastify e zod para validações.


## Funcionalidades Principais

- **Inserção**: Cadastro de novos tempos dentro de um banco de dados local.
- **Busca**: Busca todos os registros de forma paginada e ordenada por melhores tempos.

## Tecnologias Utilizadas

- **Node.js**: Plataforma principal para o backend.
- **TypeScript**: Adiciona tipagem estática ao JavaScript para maior robustez.
- **Fastify**: Framework web leve e performático.
- **Zod**: Validação de esquemas para dados de entrada.
- **Vitest**: Ferramenta de testes unitários e end-to-end.

### Rotas Fastify:
  - `POST /clicks` → recebe e grava no JSON.
    ```json                 
    {
      "name": "Player1",
      "timeBetweenClicks": number // tempo entre os clicks
    }
  
  - `GET /clicks` → recebe e grava no JSON
    ```
    
  
  Retorno
  ```json
    [
      {
        "id": "uuid",
        "timestamp": "02/05/2025, 20:35:20",
        "name": "Player1",
        "timeBetweenClicks": 350
      }
    ]
  ```
  
  
## Banco de dados (JSON):
- Estrutura básica:
  
  ```json
  [
    {
      "id": "uuid",
      "timestamp": "02/05/2025, 20:35:20",
      "name": "Player1",
      "timeBetweenClicks": 350
    }
  ]
  
  ```
  
  - A aplicação utilizará um arquivo json emulando um banco de dados, e para isso precisei criar uma logica de funcionamento da seguinte maneira:
    - Primeiro ao iniciar o servidor ele verifica se o arquivo data.json já existe, caso não ele cria um arquivo novo:
      ```Typescript
      export async function FileExist(file: string) {
        const jsonHelpers = new JsonHelpers();
        try {
          await fs.access(file, fs.constants.F_OK);
        } catch (error) {
          await fs.mkdir("./src/data"); //cria pasta data caso não exista
          const saveFile = await jsonHelpers.write([]); //cria o arquivo json usado como banco de dados
          if (!saveFile) {
            throw new Error("Erro ao criar o arquivo Json.");
          } else {
            console.log("Arquivo Json Criado com sucesso.");
          }
        }
      }

    
    - Classe criada para manipulação do arquivo data.json:
      ```Typescript
        export class JsonHelpers {
        public filePath: string = "./src/data/data.json";
        //metodo para escrever no arquivo
        public async write(data: any): Promise<any> {
          try {
            await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
            return true;
          } catch (error) {
            console.error("🚀 ~ JsonHelpers ~ write ~ error:", error);
            return null;
          }
        }
        //metodo para inserir dados no arquivo
        public async insert(newClick: Clicks): Promise<Clicks | null> {
          try {
            const data = await this.read();
            if (!data) {
              return null;
            }
            data.push(newClick);
            await this.write(data);
            return newClick;
          } catch (error) {
            console.error("🚀 ~ JsonHelpers ~ update ~ error:", error);
            return null;
          }
        }
        //metodo para ler o arquivo
        public async read(): Promise<Clicks[] | null> {
          try {
            const data = JSON.parse(await fs.readFile(this.filePath, "utf-8"));
            return data;
          } catch (error) {
            console.error("🚀 ~ JsonHelpers ~ read ~ error:", error);
            return null;
          }
        }
        //metodo para zerar dados do arquivo
        public async delete(): Promise<any> {
          try {
            await this.write([]);
            return true;
          } catch (error) {
            console.error("🚀 ~ JsonHelpers ~ delete ~ error:", error);
            return null;
          }
        }
        }
    

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/pt/)
- [Git](https://git-scm.com/)

## Como Configurar e Executar

Siga os passos abaixo para rodar a API localmente:

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/RichardLirio/FastDoubleClick.git
   cd FastDoubleClick
   cd backend
   ```

2. **Instale as Dependências**
   ```bash
   pnpm install
   ```

3. **Configure as Variáveis de Ambiente**
   - Renomeie o arquivo `.env.example` para `.env`.
   - Preencha as variáveis necessárias, como:
     ```
     NODE_ENV=dev
     PORT=3333
     ```

4. **Inicie a API**
   ```bash
   npm run dev
   ```
   A API estará disponível em: `http://localhost:3333`.

## Testes

O projeto inclui testes unitários criados na aplicação do TDD

- **Rodar Testes Unitários**
  ```bash
  npm run test
  ```


## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções.