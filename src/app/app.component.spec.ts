/**
 * Suíte de testes para o componente raiz AppComponent
 * 
 * Testa a funcionalidade básica e renderização do componente principal da aplicação
 */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Descrição da suíte de testes
describe('AppComponent', () => {
  /**
   * Configuração antes de cada teste
   * Prepara o módulo de teste com o AppComponent
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa o componente standalone
    }).compileComponents(); // Compila o componente e seu template
  });

  /**
   * Teste: Criação do componente
   * Verifica se o AppComponent pode ser criado com sucesso
   */
  it('deve criar o aplicativo', () => {
    // Cria uma instância do componente
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verifica se o componente existe
    expect(app).toBeTruthy();
  });

  /**
   * Teste: Verificação do título padrão
   * Confirma que o componente tem o título correto por padrão
   */
  it('deve ter o título "barber-shop-ui"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verifica se o título corresponde ao valor esperado
    expect(app.title).toEqual('barber-shop-ui');
  });

  /**
   * Teste: Renderização do título
   * Verifica se o título é renderizado corretamente no template
   * Observação: Este teste pode precisar de ajustes conforme o conteúdo real do template
   */
  it('deve renderizar o título', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Dispara a detecção de mudanças para atualizar a view
    fixture.detectChanges();
    // Obtém o HTML renderizado
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica se o título aparece em um elemento h1
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, barber-shop-ui');
  });
});