# 📦 Atividade 3 - Catálogo de Produtos (React)

## 📘 Descrição

Este projeto é a continuação do Catálogo de Produtos desenvolvido nas atividades anteriores, agora evoluído com os conceitos de **componentização em React**, conforme a Unidade 3.

A aplicação permite visualizar, cadastrar, filtrar e remover produtos, utilizando boas práticas de organização de código e reutilização de componentes.

---

## 🎯 Objetivo

Aplicar na prática os conceitos de React abordados na Unidade 3:

- Componentes reutilizáveis
- Props (propriedades)
- Children
- Listas com `map`
- Manipulação de arrays (`filter`, `reduce`)
- Formulários controlados com `useState`
- Organização e separação de responsabilidades

---

## 🧠 Conceitos aplicados

### 🔹 Componentes

A aplicação foi dividida em múltiplos componentes reutilizáveis:

- `Header` → Cabeçalho da aplicação
- `SectionCard` → Container com uso de `children`
- `FormProduto` → Formulário para cadastro de produtos
- `ListaProdutos` → Renderização da lista
- `ProdutoCard` → Exibição individual de cada produto

---

### 🔹 Props

Os dados são passados entre componentes utilizando **props**, permitindo comunicação entre eles e tornando os componentes dinâmicos.

---

### 🔹 Children

O componente `SectionCard` e `ProdutoCard` utilizam a propriedade especial `children` para receber conteúdo adicional, aumentando a flexibilidade da aplicação.

---

### 🔹 Listas e Arrays

- `map` → Renderização dos produtos
- `filter` → Filtro por nome e categoria
- `reduce` → Cálculo do valor total do catálogo

---

### 🔹 Formulário

Foi implementado um formulário controlado com `useState`, permitindo:

- Adicionar novos produtos
- Atualizar automaticamente a lista

---

## 🚀 Funcionalidades

- ✅ Listagem de produtos em formato de cards
- ✅ Cadastro de novos produtos
- ✅ Remoção de produtos
- ✅ Filtro por nome
- ✅ Filtro por categoria
- ✅ Destaque visual para produtos em promoção
- ✅ Cálculo do valor total do catálogo

---

## 🗂️ Estrutura do Projeto

```
src/
 ├── components/
 │     ├── Header.jsx
 │     ├── SectionCard.jsx
 │     ├── ProdutoCard.jsx
 │     ├── ListaProdutos.jsx
 │     ├── FormProduto.jsx
 │
 ├── data/
 │     └── produtos.js
 │
 ├── App.jsx
 ├── App.css
```

---

## ▶️ Como executar o projeto

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm start
```

---

## 📌 Entrega da Atividade

O projeto atende aos requisitos da atividade:

- ✔ Uso de componentes React
- ✔ Comunicação via props
- ✔ Uso de `children`
- ✔ Listagem com `map`
- ✔ Uso de `key`
- ✔ Formulário funcional
- ✔ Estilização dos componentes

---

## 👨‍💻 Autor

Desenvolvido por André Santos
Projeto acadêmico – Front-End Development

---
