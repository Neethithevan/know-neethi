# Know-Neethi

Know-Neethi is a personal R&D lab for building a React-based chatbot that uses Retrieval Augmented Generation (RAG) to answer questions about my work, experiences, and learning. This repo is my public notebook: it tracks what I build, why I build it, and how the project evolves over time.

---

## Why This Exists

- Build a React app that hosts an AI “chatbot” powered by RAG so it can reference my knowledge base.
- Level up on the full delivery pipeline: React fundamentals, REST/GraphQL API communication, Docker packaging, CI/CD pipelines, cloud deployment, and Terraform-based infrastructure.
- Keep myself accountable by logging progress and sharing the journey.

---

## What To Expect

- 🧠 **ChatBot**: A friendly assistant trained on my notes, blogs, and project history.
- 🗄️ **Knowledge Base**: Curated content that feeds the RAG pipeline.
- ⚙️ **DevOps Practice**: Docker images, CI/CD recipes, and cloud infrastructure as code.
- 📚 **Learning Journals**: Lessons learned, pitfalls, and references that helped.

---

## Progress Log

| Date       | Update                                                     |
|------------|------------------------------------------------------------|
| 2025-09-17 | Restructed the project , still a static website            |
| 2025-09-15 | Develop skeleton for React app with baisc Chat UI Component|
| 2025-09-10 | Finalize project scope, success criteria and roadmap       |

---

## Roadmap

- ✅ Clarify project scope and success criteria
- ☐ Integrate API layer for question answering
- ☐ Containerize app with Docker
- ☐ Stand up CI/CD pipeline
- ☐ Provision cloud environment with Terraform
- ☐ Ship v1 live demo

Legend: ✅ Done · 🟡 In Progress · ☐ Not Started

---

## Progress Tracker

| Area                 | Status | Notes                                                  |
|----------------------|--------|--------------------------------------------------------|
| Research & Content   | 🟡     | Gathering past work artefacts and defining metadata    |
| React Foundations    | 🟡     | Building CatBot UI wireframes and component plan       |
| API Layer            | 🔴     | Yet to decide on tech stack (Node.js, Python, etc.)    
| Dockerization        | 🔴     | Plan Dockerfile and image structure                     
| CI/CD Pipeline       | 🔴     | Choose CI provider (GitHub Actions, CircleCI, etc.)    |
| Cloud Deployment     | 🔴     | Evaluate cloud providers (AWS, GCP, Azure, etc.)       
| Terraform Infra      | 🔴     | Define modules for compute, storage, and secrets      |
Legend: 🟢 On Track · 🟡 In Progress · 🔴 Not Started

---

## Learning Objectives

- **React**: Component architecture, state/data flow, UX for conversational UI.
- **API Communication**: Connect front end to RAG service (REST/GraphQL/WebSocket).
- **RAG Fundamentals**: Content chunking, embeddings, retrieval, prompt design.
- **Docker**: Build reproducible images for local dev and production.
- **CI/CD**: Automated lint/test/build pipelines with previews/deploys.
- **Cloud**: Deploy infrastructure (compute, storage, secrets) in the cloud.
- **Terraform**: Codify infra with modules, state management, and workflows.

---

## Architecture Sketch

1. **Client**: React app (Vite/Next.js) hosting CatBot chat interface.
2. **Service Layer**: API endpoint (Node/Python?) handling user prompts.
3. **RAG Engine**: Embedding model + vector database (e.g., Pinecone, Supabase, Redis).
4. **Knowledge Source**: Markdown notes, blog posts, project documents.
5. **Deployment**: Docker image pushed via CI/CD to cloud provider.
6. **IaC**: Terraform modules provisioning compute + storage + secrets.

## References & Inspirations

