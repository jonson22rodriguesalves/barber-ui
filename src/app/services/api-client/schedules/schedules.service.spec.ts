import { TestBed } from '@angular/core/testing';
import { SchedulesService } from './schedules.service';

/**
 * Suíte de testes para o SchedulesService
 * 
 * Verifica o comportamento básico do serviço de agendamentos
 * 
 * ATENÇÃO: Este é um teste inicial básico (deveria ser expandido)
 * Testes completos deveriam:
 * - Mockar chamadas HTTP
 * - Testar todos os métodos (save, delete, listInMonth)
 * - Verificar tratamento de erros
 */
describe('SchedulesService', () => {
  let service: SchedulesService;

  // Configuração antes de cada teste
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuração mínima do módulo de teste
    service = TestBed.inject(SchedulesService); // Injeta o serviço a ser testado
  });

  // Teste básico de criação do serviço
  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica se a instância do serviço existe
  });
});