/**
 * Suíte de testes para o SnackbarManagerService
 * 
 * Verifica se o serviço pode ser inicializado e injetado corretamente
 * Observação: Testes adicionais seriam necessários para testar o método show()
 */
import { TestBed } from '@angular/core/testing';
import { SnackbarManagerService } from './snackbar-manager.service';

describe('SnackbarManagerService', () => {
  let service: SnackbarManagerService;

  /**
   * Configuração antes de cada teste
   * Cria um módulo de teste novo e uma instância do serviço para cada teste
   */
  beforeEach(() => {
    // Configura o módulo de teste (vazio pois estamos testando apenas o serviço)
    TestBed.configureTestingModule({});
    
    // Injeta a instância do serviço para teste
    service = TestBed.inject(SnackbarManagerService);
  });

  /**
   * Teste básico de existência
   * Verifica se o serviço pode ser criado e injetado com sucesso
   */
  it('deve ser criado', () => {
    expect(service).toBeTruthy(); // Verifica se a instância do serviço existe
  });

  /**
   * Observação: Casos de teste adicionais normalmente incluiriam:
   * - Testar o comportamento do método show()
   * - Verificar a configuração do snackbar
   * - Testar com diferentes parâmetros
   * - Testar casos de erro
   * 
   * Estes testes exigiriam mock do MatSnackBar (do @angular/material/snack-bar)
   */
});