import { TestBed } from '@angular/core/testing';
import { DialogManagerService } from './dialog-manager.service';

/**
 * Suíte de testes para o DialogManagerService
 * 
 * Verifica a criação do serviço e seu comportamento básico
 * Observação: Testes mais completos exigiriam mock do MatDialog
 */
describe('DialogManagerService', () => {
  let service: DialogManagerService;

  /**
   * Configuração antes de cada teste
   * Cria um módulo de teste vazio e injeta o serviço
   */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogManagerService);
  });

  /**
   * Teste básico de criação
   * Verifica se o serviço foi instanciado corretamente
   */
  it('deve ser criado', () => {
    expect(service).toBeTruthy(); // Verifica se a instância existe
  });

  /**
   * Testes sugeridos para implementação futura:
   * 
   * 1. Testar o método showYesNoDialog():
   *    - Deve abrir o diálogo com as configurações corretas
   *    - Deve retornar um Observable
   *    - Deve passar os dados corretamente para o componente
   * 
   * 2. Testar o comportamento do afterClosed():
   *    - Deve emitir true quando confirmado
   *    - Deve emitir false quando cancelado
   *    - Deve lidar com erros adequadamente
   * 
   * Observação: Esses testes exigiriam:
   * - Mock do MatDialog (Angular Material)
   * - Mock do YesNoDialogComponent
   * - Controle do Observable retornado
   */
});