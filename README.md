Barber Shop UI - Sistema de Agendamento para Barbearias
<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="Barber Shop UI" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>Barber Shop UI</h1>
    <p>Sistema de agendamento para barbearias desenvolvido em Angular</p>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
  <img src="https://img.shields.io/badge/API_REST-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="REST API" />
</p>

## 🏗️ Arquitetura do Projeto
* src/app/
* ├── api-client/
* │ ├── clients/
* │ │ ├── clients.service.ts # Operações CRUD de clientes
* │ │ ├── iclients.service.ts # Interface do serviço de clientes
* │ │ └── client.models.ts # Modelos e DTOs de clientes
* │ └── schedules/
* │ ├── schedules.service.ts # Operações de agendamento
* │ ├── ischedules.service.ts # Interface do serviço de agendamentos
* │ └── schedule.models.ts # Modelos e DTOs de agendamentos
* ├── commons/ # Componentes compartilhados
* ├── services/ # Serviços principais
* └── features/ # Módulos de funcionalidades
* ├── clients/ # Gestão de clientes
* └── schedules/ # Sistema de agendamentos


## 📡 Interfaces Principais

### Gestão de Clientes
```typescript
interface ICLientService {
  save(request: SaveClientRequest): Observable<SaveClientResponse>
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>
  delete(id: number): Observable<void>
  list(): Observable<ListClientResponse[]>
  findById(id: number): Observable<DetailClientResponse>
}

Agendamentos
interface IScheduleService {
  save(request: SaveScheduleRequest): Observable<SaveScheduleResponse>
  delete(id: number): Observable<void>
  listInMonth(year: number, month: number): Observable<ScheduleAppointmentMonthResponse>
}

🛠️ Configuração do Ambiente
Instalar dependências

npm install

Iniciar servidor de desenvolvimento

ng serve

Executar testes

ng test

✨ Funcionalidades
Gestão de Clientes

Cadastro, consulta, atualização e remoção de clientes

Listagem de clientes com paginação

Perfis detalhados de clientes

Agendamentos

Visualização mensal em calendário

Gerenciamento de horários disponíveis

Operações CRUD para agendamentos

Associação com clientes

📄 Documentação da API
Endpoint	Método	Descrição
/clients	POST	Cadastrar novo cliente
/clients/{id}	PUT	Atualizar cliente
/clients	GET	Listar todos os clientes
/schedules	POST	Criar agendamento
/schedules/{year}/{month}	GET	Obter agendamentos mensais
