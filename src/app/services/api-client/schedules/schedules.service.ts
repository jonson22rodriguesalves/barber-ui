import { Injectable } from '@angular/core';
import { IScheduleService } from './ischedules.service';
import { Observable } from 'rxjs';
import { SaveScheduleRequest, SaveScheduleResponse, ScheduleAppointmentMonthResponse } from './schedule.models';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

/**
 * Serviço para gestão de agendamentos
 * 
 * Implementa a interface IScheduleService e fornece operações CRUD para agendamentos
 * Comunica com a API através do HttpClient do Angular
 */
@Injectable({
  providedIn: 'root' // Disponibilizado como singleton na raiz da aplicação
})
export class SchedulesService implements IScheduleService {

  private readonly basePath = environment.apiUrl // URL base da API (configurada no environment)

  constructor(private http: HttpClient) { }

  /**
   * Cria ou atualiza um agendamento
   * @param request Dados do agendamento a ser salvo
   * @returns Observable com a resposta do servidor
   */
  save(request: SaveScheduleRequest): Observable<SaveScheduleResponse> {
    return this.http.post<SaveScheduleResponse>(`${this.basePath}schedules`, request)
  }

  /**
   * Remove um agendamento existente
   * @param id ID do agendamento a ser removido
   * @returns Observable vazio que completa quando a operação termina
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}schedules/${id}`)
  }

  /**
   * Lista agendamentos por mês/ano
   * @param year Ano de referência
   * @param month Mês de referência (1-12)
   * @returns Observable com a lista de agendamentos
   */
  listInMonth(year: number, month: number): Observable<ScheduleAppointmentMonthResponse> {
    return this.http.get<ScheduleAppointmentMonthResponse>(`${this.basePath}schedules/${year}/${month}`)
  }
}