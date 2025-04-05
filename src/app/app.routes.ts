/**
 * Configuração de rotas principais da aplicação
 * 
 * Define os mapeamentos entre URLs e componentes Angular,
 * incluindo parâmetros de rota e redirecionamentos.
 */
import { Routes } from '@angular/router';

// Importação dos componentes associados às rotas
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { SchedulesMonthComponent } from './schedules/schedules-month/schedules-month.component';

/**
 * Array de definições de rotas da aplicação
 * 
 * Cada rota contém:
 * - path: URL correspondente
 * - component: Componente Angular a ser renderizado
 * - data: Metadados adicionais (como títulos da página)
 * - redirectTo: Redirecionamento para outras rotas (caso aplicável)
 */
export const routes: Routes = [
    { 
        path: 'clients/edit-client/:id', 
        component: EditClientComponent, 
        data: { title: 'Atualizar Cliente' }  // Título exibido na página/aba
    },
    { 
        path: 'clients/new-client', 
        component: NewClientComponent, 
        data: { title: 'Cadastrar Cliente' }  // Título para a página de cadastro
    },
    { 
        path: 'clients/list', 
        component: ListClientsComponent, 
        data: { title: 'Clientes Cadastrados' }  // Título para a listagem
    },
    { 
        path: 'schedules/month', 
        component: SchedulesMonthComponent, 
        data: { title: 'Agendamentos' }  // Título para a agenda mensal
    },
    { 
        path: '**',  // Rota curinga para qualquer caminho não definido
        redirectTo: 'schedules/month'  // Redireciona para a agenda por padrão
    }
];