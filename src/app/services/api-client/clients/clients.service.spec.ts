import { TestBed } from '@angular/core/testing';
import { ClientsService } from './clients.service';

/**
 * Suíte de testes para o ClientsService
 * 
 * Verifica o comportamento básico do serviço de clientes
 * 
 * ATENÇÃO: Este é um teste inicial mínimo (deveria ser expandido)
 * Testes completos deveriam:
 * - Mockar chamadas HTTP
 * - Testar todos os métodos CRUD
 * - Verificar tratamento de erros
 */
describe('ClientsService', () => {
  let service: ClientsService;

  // Configuração antes de cada teste
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuração mínima do módulo de teste
    service = TestBed.inject(ClientsService); // Injeta o serviço a ser testado
  });

  // Teste básico de criação do serviço
  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica se a instância do serviço existe
  });
});