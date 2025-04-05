import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ScheduleCalendarComponent } from '../components/schedule-calendar/schedule-calendar.component';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IScheduleService } from '../../services/api-client/schedules/ischedules.service';
import { ICLientService } from '../../services/api-client/clients/iclients.service';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';
import { SchedulesService } from '../../services/api-client/schedules/schedules.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { Subscription } from 'rxjs';
import { ClientScheduleAppointmentModel, SaveScheduleModel, ScheduleAppointementMonthModel, SelectClientModel } from '../schedule.models';
import { SaveScheduleRequest } from '../../services/api-client/schedules/schedule.models';

@Component({
  selector: 'app-schedules-month',
  imports: [ScheduleCalendarComponent],
  templateUrl: './schedules-month.component.html',
  styleUrl: './schedules-month.component.scss',
  providers: [
    // Configuração dos provedores de serviço
    { provide: SERVICES_TOKEN.HTTP.SCHEDULE, useClass: SchedulesService },
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
  ]
})
export class SchedulesMonthComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [] // Armazena todas as subscriptions para gerenciamento
  private selectedDate?: Date // Data atualmente selecionada no calendário

  monthSchedule!: ScheduleAppointementMonthModel // Agendamentos do mês atual
  clients: SelectClientModel[] = [] // Lista de clientes para seleção

  constructor(
    // Injeção de serviços usando os tokens definidos
    @Inject(SERVICES_TOKEN.HTTP.SCHEDULE) private readonly httpService: IScheduleService,
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly clientHttpService: ICLientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackbarManage: ISnackbarManagerService
  ) { }

  /**
   * Inicialização do componente
   * Carrega os agendamentos do mês atual e a lista de clientes
   */
  ngOnInit(): void {
    this.fetchSchedules(new Date()); // Carrega agendamentos do mês atual
    this.subscriptions.push(
      this.clientHttpService.list().subscribe(data => this.clients = data) // Carrega lista de clientes
    )
  }

  /**
   * Destruição do componente
   * Cancela todas as subscriptions para evitar memory leaks
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  /**
   * Handler para mudança de data no calendário
   * @param date Nova data selecionada
   */
  onDateChange(date: Date) {
    this.selectedDate = date
    this.fetchSchedules(date)
  }

  /**
   * Confirmação de exclusão de agendamento
   * @param schedule Agendamento a ser excluído
   */
  onConfirmDelete(schedule: ClientScheduleAppointmentModel) {
    this.subscriptions.push(
      this.httpService.delete(schedule.id).subscribe() // Chama serviço de exclusão
    )
  }

  /**
   * Agenda um novo horário para um cliente
   * @param schedule Dados do novo agendamento
   */
  onScheduleClient(schedule: SaveScheduleModel) {
    if (schedule.startAt && schedule.endAt && schedule.clientId) {
      const request: SaveScheduleRequest = { 
        startAt: schedule.startAt, 
        endAt: schedule.endAt, 
        clientId: schedule.clientId 
      }
      
      this.subscriptions.push(
        this.httpService.save(request).subscribe(() => {
          this.snackbarManage.show('Agendamento realizado com sucesso')
          if (this.selectedDate) {
            this.fetchSchedules(this.selectedDate) // Recarrega os agendamentos após salvar
          }
        })
      )
    }
  }

  /**
   * Busca os agendamentos para um determinado mês/ano
   * @param currentDate Data de referência para a busca
   */
  private fetchSchedules(currentDate: Date) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Meses são 0-indexed no JavaScript
    this.subscriptions.push(
      this.httpService.listInMonth(year, month).subscribe(data => this.monthSchedule = data)
    );
  }
}