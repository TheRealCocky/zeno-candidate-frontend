# 🚀 Zeno Grupo - Portal de Candidaturas (Frontend)

Este é o módulo Frontend do sistema de gestão de candidatos desenvolvido para o desafio técnico **ZENCODE (ZEN3579)**. A aplicação foi construída com foco em performance, organização e escalabilidade, utilizando as tecnologias mais modernas do ecossistema JavaScript.

## 🌐 Link da Aplicação em Produção
A aplicação está live e pode ser acedida aqui: 
👉 [https://zenogrupocandidate.onrender.com/](https://zenogrupocandidate.onrender.com/)

---

## 🛠️ Tecnologias Utilizadas

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 📂 Estrutura do Projeto

A organização de pastas segue as melhores práticas de componentização e separação de conceitos (Clean Architecture):

* **`app/`**: Contém a página principal de listagem de candidatos e configurações globais.
* **`components/`**: Componentes de UI reutilizáveis, incluindo o Modal de cadastro (`CreateCandidate.tsx`).
* **`hooks/`**: Hooks customizados (`useCandidates.ts`) para gestão de estado e lógica de consumo de dados.
* **`services/`**: Camada de serviço (`candidateService.ts`) que abstrai as chamadas HTTP para a API.
* **`types/`**: Interfaces TypeScript que garantem a integridade dos dados em toda a aplicação.

---

## 📸 Demonstração Visual

<div align="center">
  <p><i>Página principal com listagem de candidatos e Modal de cadastro integrado.</i></p>
  <img src="https://res.cloudinary.com/dwp3wuum6/image/upload/v1771877575/Screen_Shot_2026-02-23_at_21.12.08_hhqc5v.png" alt="Dashboard Principal" width="45%"/>
  <img src="[./public/screenshot2.png](https://res.cloudinary.com/dwp3wuum6/image/upload/v1771877587/Screen_Shot_2026-02-23_at_21.12.22_f1zuwe.png)" alt="Modal de Cadastro" width="45%"/>
</div>

---

## 🚀 Deploy no Render

A aplicação foi configurada como um **Static Site** no Render para garantir máxima velocidade. As definições utilizadas foram:

* **Build Command:** `npm install && npm run build`
* **Publish Directory:** `out`
* **Environment Variables:** `NEXT_PUBLIC_API_URL` configurada no painel do Render.

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para colocar o ambiente a funcionar na sua máquina:

### 1. Clonar o Repositório
```bash
git clone [https://github.com/TheRealCocky/zeno-candidate-frontend.git](https://github.com/TheRealCocky/zeno-candidate-frontend.git)
cd zeno-candidate-frontend
2. Configurar Variáveis de Ambiente
Crie o ficheiro de configuração necessário para que o Frontend saiba onde encontrar a API:
echo "NEXT_PUBLIC_API_URL=[https://zeno-candidate-backend.onrender.com/api](https://zeno-candidate-backend.onrender.com/api)" > .env.local

3. Instalar Dependências
Bash

npm install
4. Iniciar o Servidor de Desenvolvimento
Bash

npm run dev
Nota: Após iniciar, a aplicação estará disponível em http://localhost:3000.
