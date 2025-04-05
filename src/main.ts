/**
 * Ponto de entrada principal da aplicação Angular.
 * Responsável por inicializar a aplicação com a configuração raiz.
 */

// Importa a função para inicialização da aplicação
import { bootstrapApplication } from '@angular/platform-browser';

// Importa as configurações principais da aplicação
import { appConfig } from './app/app.config';

// Importa o componente raiz da aplicação
import { AppComponent } from './app/app.component';

/**
 * Inicializa a aplicação Angular.
 * 
 * @param AppComponent - O componente raiz da aplicação
 * @param appConfig - Configurações globais da aplicação
 * 
 * O método bootstrapApplication cria uma instância da aplicação,
 * monta o componente raiz e inicia o ciclo de vida do Angular.
 * 
 * Qualquer erro durante o bootstrap é capturado e logado no console.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Tratamento de erros durante a inicialização