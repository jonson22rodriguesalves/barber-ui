import { Observable } from "rxjs";
import { SaveScheduleRequest, SaveScheduleResponse, ScheduleAppointmentMonthResponse } from "./schedule.models";

/**
 * Interface que define o contrato para o serviço de agendamentos
 * 
 * Especifica os métodos que qualquer implementação concreta deve fornecer
 * Segue o princípio de inversão de dependência (SOLID)
 */
export interface IScheduleService {

    /**
     * Salva um novo agendamento ou atualiza um existente
     * @param request Dados do agendamento a ser persistido
     * @returns Observable que emite a resposta do servidor
     */
    save(request: SaveScheduleRequest): Observable<SaveScheduleResponse>

    /**
     * Remove um agendamento existente
     * @param id ID do agendamento a ser removido
     * @returns Observable que completa quando a operação termina
     */
    delete(id: number): Observable<void>

    /**
     * Obtém os agendamentos de um mês específico
     * @param year Ano de referência
     * @param month Mês de referência (1-12)
     * @returns Observable com a lista de agendamentos do período
     */
    listInMonth(year: number, month: number): Observable<ScheduleAppointmentMonthResponse>

}