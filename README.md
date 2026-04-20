# Catalogo de Produtos em React

Este repositorio apresenta a evolucao do projeto desenvolvido nas atividades da disciplina de Front-End Development. A aplicacao comecou como um catalogo simples em React e foi ampliada ate chegar em uma versao com estado, eventos, filtros, integracao com API simulada e operacoes assincronas.

## Evolucao do projeto

### Atividade 2
- configuracao do projeto React
- renderizacao de produtos com JSX
- componentes reutilizaveis
- uso de props
- listas com `map`
- total do catalogo com `reduce`
- destaque para produtos em promocao

### Atividade 3
- expansao da componentizacao
- uso de `children`
- formulario para cadastro de produtos
- filtros por nome e categoria
- remocao de produtos
- organizacao visual em secoes e cards

### Atividade 4
- eventos `onClick` e `onSubmit`
- gerenciamento de estado com `useState`
- carregamento inicial com `useEffect`
- comunicacao assincrona com `fetch`
- funcoes assincronas com `async/await`
- tratamento de carregamento e erro
- persistencia dos dados com API simulada via `db.json`

## Funcionalidades atuais
- listagem de produtos em cards
- cadastro de novos produtos
- remocao de produtos
- filtro por nome
- filtro por categoria
- destaque visual para promocoes
- resumo com total do catalogo, quantidade de itens e quantidade em promocao
- tema claro e escuro
- mensagem de carregando enquanto a API responde
- mensagem de erro quando a API nao esta disponivel

## Componentes utilizados
O projeto atende ao requisito de trabalhar com pelo menos sete componentes estilizados e funcionais.

- `App`
- `Header`
- `SectionCard`
- `FormProduto`
- `Filtros`
- `ListaProdutos`
- `ProdutoCard`
- `StatusMessage`

## Props e children
- **Props** sao utilizadas para comunicar dados e acoes entre os componentes.
- **Children** sao utilizados no componente `SectionCard`, permitindo compor diferentes blocos da interface de forma reutilizavel.

## Observacao sobre persistencia de dados
Para esta atividade final, a persistencia foi implementada com **JSON Server** usando o arquivo `db.json`.

Essa abordagem substitui o uso de `localStorage` e foi escolhida porque aproxima o projeto de um cenario real de mercado, permitindo:

- uso de multiplos metodos HTTP
- integracao com `fetch`
- controle assincrono com `async/await`
- simulacao de uma API REST para cadastro, listagem e remocao

## Metodos HTTP utilizados
- `GET` para buscar os produtos iniciais
- `POST` para cadastrar novos produtos
- `DELETE` para remover produtos

## Estrutura do projeto

```bash
src/
├── components/
│   ├── Filtros.jsx
│   ├── FormProduto.jsx
│   ├── Header.jsx
│   ├── ListaProdutos.jsx
│   ├── ProdutoCard.jsx
│   ├── SectionCard.jsx
│   └── StatusMessage.jsx
├── App.css
├── App.js
├── index.css
└── index.js

db.json
README.md
package.json
```

## Como executar o projeto

### 1. Instalar as dependencias
```bash
npm install
```

### 2. Iniciar a API simulada
```bash
npm run api
```

A API sera executada em:

```bash
http://localhost:3001/produtos
```

### 3. Iniciar a aplicacao React
Em outro terminal, execute:

```bash
npm start
```

A aplicacao sera aberta em:

```bash
http://localhost:3000
```

## Requisitos da Atividade 4 atendidos
- tratamento de eventos de clique e envio
- gerenciamento de estado com `useState`
- carregamento assincrono com `fetch` + `useEffect`
- uso de `async/await`
- exibicao de estado de carregamento
- integracao com API simulada

## Entrega
O projeto pode ser entregue por meio do link do repositorio no GitHub ou em arquivo compactado, conforme solicitado no AVA.
