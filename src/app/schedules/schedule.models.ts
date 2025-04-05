/**
 * Modelo que representa um mês de agendamentos
 * Contém todos os agendamentos para um determinado mês/ano
 */
export interface ScheduleAppointementMonthModel {
    year: number       // Ano dos agendamentos (ex: 2023)
    month: number      // Mês dos agendamentos (1-12)
    scheduledAppointments: ClientScheduleAppointmentModel[]  // Lista de agendamentos
}

/**
 * Modelo de um agendamento de cliente
 * Representa um horário marcado por um cliente específico
 */
export interface ClientScheduleAppointmentModel {
    id: number         // ID único do agendamento
    day: number        // Dia do mês (1-31)
    startAt: Date      // Data/hora de início
    endAt: Date        // Data/hora de término
    clientId: number   // ID do cliente
    clientName: string // Nome do cliente (para exibição)
}

/**
 * Modelo para criação/atualização de agendamentos
 * Usado quando se está salvando um novo agendamento
 */
export interface SaveScheduleModel {
    startAt?: Date     // Data/hora de início (opcional)
    endAt?: Date       // Data/hora de término (opcional)
    clientId?: number  // ID do cliente (opcional)
}

/**
 * Modelo simplificado para seleção de clientes
 * Usado em dropdowns/seletores de cliente
 */
export interface SelectClientModel {
    id: number   // ID do cliente
    name: string // Nome do cliente (para exibição)
}