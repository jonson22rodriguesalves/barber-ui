/**
 * Interface que representa a resposta da API com agendamentos mensais
 * 
 * Contém a estrutura completa dos agendamentos para um mês específico
 * Usada principalmente no método listInMonth()
 */
export interface ScheduleAppointmentMonthResponse {
    year: number,       // Ano dos agendamentos (ex: 2023)
    month: number       // Mês dos agendamentos (1-12)
    scheduledAppointments: ClientScheduleAppointementResponse[]  // Lista de agendamentos
}

/**
 * Interface que representa um agendamento individual retornado pela API
 * 
 * Contém todos os dados de um agendamento específico
 * Observe o typo no nome (Appointement vs Appointment)
 */
export interface ClientScheduleAppointementResponse {
    id: number         // ID único do agendamento
    day: number        // Dia do mês (1-31)
    startAt: Date      // Data/hora de início do agendamento
    endAt: Date        // Data/hora de término do agendamento
    clientId: number   // ID do cliente relacionado
    clientName: string // Nome do cliente (para exibição)
}

/**
 * Interface que representa a resposta ao salvar um agendamento
 * 
 * Retornada pelo método save() após criação/atualização
 * Contém os dados persistidos no servidor
 */
export interface SaveScheduleResponse {
    id: number        // ID do agendamento salvo
    startAt: Date     // Data/hora de início confirmada
    endAt: Date       // Data/hora de término confirmada
    clientId: number  // ID do cliente confirmado
}

/**
 * Interface que representa os dados para criar/atualizar um agendamento
 * 
 * Usada como parâmetro no método save()
 * Todos os campos são obrigatórios
 */
export interface SaveScheduleRequest {
    startAt: Date     // Data/hora de início desejada
    endAt: Date       // Data/hora de término desejada
    clientId: number  // ID do cliente a ser agendado
}