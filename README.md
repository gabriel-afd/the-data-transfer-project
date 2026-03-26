# 🚀 DataFlow - Data Transfer Manager

## 📌 Sobre o projeto

O **DataFlow** é uma aplicação web desenvolvida com Angular que simula a criação e execução de jobs de transferência de dados entre diferentes bancos (ex: SQL Server → PostgreSQL).

O objetivo principal do projeto é **praticar e consolidar conceitos modernos do Angular**, com foco em arquitetura, estado, formulários reativos e boas práticas de desenvolvimento frontend.

> ⚠️ Este projeto atualmente é um **simulador frontend**. O backend será implementado futuramente em ASP.NET Core.

---

## 🎯 Objetivo

* Simular um sistema de migração de dados (ETL simplificado)
* Treinar Angular moderno (standalone + signals)
* Criar um projeto com **cara de sistema real**
* Servir como **portfólio para vagas de frontend Angular (Jr/Pleno)**

---

## 🧩 Funcionalidades

### 🔌 Conexões

* Listagem de conexões cadastradas
* Criação de novas conexões via modal
* Tipos suportados:

  * SQL Server
  * PostgreSQL
* Exibição de status (Online)

---

### ⚙️ Jobs de transferência

* Criação de jobs entre duas conexões
* Configurações:

  * Origem e destino
  * Tabelas (input livre)
  * Tipo de carga:

    * Full Load
    * Incremental
  * Estratégia de schema:

    * Criar tabela
    * Usar existente
  * Opção de truncar tabela

---

### 📊 Execução simulada

* Jobs iniciam automaticamente como **running**
* Progresso atualizado dinamicamente
* Status possíveis:

  * Running
  * Completed
  * Failed (simulado futuramente)

---

### 🎨 Interface

* Layout inspirado em sistemas reais de dados
* Header com navegação
* Modais para criação
* Tabelas organizadas
* Feedback visual (status + progresso)

---

## 🛠️ Tecnologias utilizadas

* Angular (Standalone Components)
* Angular Material
* TypeScript
* SCSS
* Signals (state management)
* Reactive Forms
* Angular Router

---

## 🧠 Conceitos de Angular aplicados

### ✔ Componentização

* Separação por features:

  * `connections`
  * `jobs`
* Componentes reutilizáveis e organizados

---

### ✔ Standalone Components

* Projeto sem módulos tradicionais (NgModule)
* Uso direto de `imports` nos componentes

---

### ✔ Injeção de dependência (DI)

* Uso de `inject()` ao invés de constructor
* Services centralizando lógica de negócio

---

### ✔ State Management com Signals

* Gerenciamento de estado simples e reativo

Exemplo:

```ts
connections = signal<Connection[]>([]);
```

* Atualização com `.set()` e `.update()`
* Reatividade automática na UI

---

### ✔ Reactive Forms

* Formulários robustos com `FormBuilder`
* Validações:

  * Campos obrigatórios
  * Regras de negócio (ex: origem ≠ destino)

---

### ✔ Angular Material

* Dialog (modais)
* Buttons
* Toolbar
* Progress bar

---

### ✔ Comunicação entre componentes

* Uso de `MatDialog`
* `afterClosed()` para controle de fluxo

---

### ✔ Simulação de backend

* Uso de `setInterval` para simular progresso de jobs
* Estrutura preparada para futura integração com API

---

## 🧱 Estrutura do projeto

```
src/app/
  core/
    models/
    services/

  features/
    connections/
      connection-list/
      connection-form/

    jobs/
      job-list/
      job-form/

  layout/
    header/
```

---

## ▶️ Como rodar o projeto

```bash
npm install
ng serve
```

Acesse:

```
http://localhost:4200
```

---

## 🔮 Próximos passos (backend)

O backend será desenvolvido em **ASP.NET Core** e deverá incluir:

* API REST para:

  * Conexões
  * Jobs
* Execução real de migração de dados
* Validação de conexão com banco
* Processamento assíncrono de jobs
* Possível uso de:

  * Background Services
  * SignalR (tempo real)

---

## 💡 Possíveis melhorias futuras

* Autenticação (JWT)
* Dashboard com métricas
* Logs de execução
* Retry de jobs
* Filtros e busca
* Dark mode completo
* Integração com bancos reais

---

## 🧑‍💻 Autor

Gabriel Medeiros

---

## 📣 Observação

Este projeto foi desenvolvido com foco em aprendizado e prática, mas seguindo padrões utilizados em aplicações reais de mercado.

---
