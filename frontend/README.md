# Front-end FastDoubleClick
### Visão Geral
O FastDoubleClick é um jogo que mede o tempo de reação entre dois cliques consecutivos. Desenvolvido com Next.js 15 e Tailwind CSS, o projeto oferece uma experiência moderna com dark mode, validações robustas e ranking de jogadores.

### Tecnologias Utilizadas
- Next.js 15 (App Router)

- TypeScript

- Tailwind CSS para estilização

- shadcn/ui para componentes UI

- Zod para validação de dados

- Sonner para notificações (toasts)

- Lucide React para ícones

### Funcionalidades Principais
- Registro de Tempos:
    - Medição precisa do intervalo entre dois cliques

 - Validação do nome do jogador

 - Envio dos dados para o backend

 - Ranking:
    - Listagem ordenada por melhores tempos

 - Filtragem por nome do jogador

 - Visualização em dark/light mode

### UI/UX
 - Componentes acessíveis e estilizados

 - Feedback visual durante interações

 - Notificações para ações do usuário

### 🧠 Lógica de Negócio Para Registro e Envio do Tempo para o Backend
- Arquivo form-play.tsx
- Implementa a lógica principal de medição e registro de tempos:

```typescript
Logica pensada e anotada no inicio do arquivo:
{
    /**
     Logica para registrar tempo entre os clicks:
    1) liberar somente o input para o usuario digitar seu nome, pois é obrigatorio no corpo da requisição.
    2) Assim que digitar o nome, habilitar o botão que irá realizar o registro do intervalo entre os dois clicks.
    2.1) Date.now() vs performance.now() -> utilizar o perfomance pois possui maior precisão.
    3) Salvar o intervalo e mostra-lo no seu input
    4) Assim que esse input do intervalo for alimentado, desabilitar o botão do double click e habilitar o botão responsavel pelo submit
    5) Ao realizar o submit zerar tudo e reiniciar a logica.
    **/
}

```



```typescript
Evento acionado pelo botão que vai receber o double click
// Trecho central da lógica de medição
  const handleClick = () => {
    const now = performance.now(); //performance melhor que o date now para registrar ms
    if (clickStart === null) {
      //verifica se o clickstart ja foi iniciado
      setClickStart(now); //seta caso não tenha sido iniciado
    } else {
      const diff = now - clickStart; //calcula o intervlo dos clicks
      setInterval(Math.round(diff)); //arredonda para inteiro
      setClickStart(null); //reseta o click inicial
      setClickEnabled(false); //desabilita o botão do double click
      setSubmitEnabled(true); //habilita o botão para envio dos dados
    }
  };
```
- Fluxo de Validação
- Schema Zod para validação:

```typescript
const registertimeBetweenClicksSchema = z.object({  
  name: z.string(),  
  timeBetweenClicks: z.coerce.number(),  
});

```


- Estados controlados:

```typescript
Variaveis utilizadas para registrar os tempos e executar as regras de negocio pensada.

const [name, setName] = useState("");
const [clickEnabled, setClickEnabled] = useState(false);
const [submitEnabled, setSubmitEnabled] = useState(false);
const [clickStart, setClickStart] = useState<number | null>(null);
const [interval, setInterval] = useState<number | null>(null);

```

### ▶️ Como Executar o Projeto
- ✅ Pré-requisitos:
    - Node.js 18+

    - npm ou yarn ou pnpm

### Backend precisa estar configurado e rodando (ver variáveis de ambiente)

### 💾 Instalação
```bash
git clone https://github.com/RichardLirio/FastDoubleClick.git
cd frontend

npm install

⚙️ Configuração
Crie um arquivo .env.local na raiz do projeto:

env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3333
```

### 🚀 Execução
```bash
npm run dev
Acesse: http://localhost:3000

```

### 🔄 Fluxo do Usuário
- Acesse a página /play

- Digite seu nome

- Clique no botão "Realize um Fast Double Click"

- Execute dois cliques rápidos consecutivos

- Confirme o envio do tempo

- Veja sua posição no ranking em /ranking

👏 Projeto desenvolvido como desafio técnico por Richard Lirio.