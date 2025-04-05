/**
 * Configuração principal da aplicação Angular
 * 
 * Define os provedores globais e configurações essenciais para:
 * - Detecção de mudanças
 * - Roteamento
 * - Animações
 * - Comunicação HTTP
 * - Máscaras de formulário
 */

// Importações de módulos do Angular Core
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Importação do sistema de roteamento
import { provideRouter } from '@angular/router';

// Importação das rotas definidas da aplicação
import { routes } from './app.routes';
// Importação para suporte a animações assíncronas
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Importação do cliente HTTP
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// Importação da biblioteca de máscaras
import { provideNgxMask } from 'ngx-mask';

/**
 * Configuração global da aplicação
 * 
 * Agrupa todos os provedores necessários para o funcionamento básico da aplicação
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Configuração do Zone.js para detecção de mudanças
     * - eventCoalescing: Otimiza a detecção de mudanças agrupando eventos
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Provedor do sistema de roteamento com as rotas definidas
    provideRouter(routes),

    // Habilita animações assíncronas (suporte a lazy loading de animações)
    provideAnimationsAsync(),

    /**
     * Configura o HttpClient para injeção de dependência
     * - withInterceptorsFromDi: Permite usar interceptadores via DI
     */
    provideHttpClient(withInterceptorsFromDi()),

    /**
     * Configuração do ngx-mask para máscaras de formulário
     * - Opções vazias indicam uso das configurações padrão
     */
    provideNgxMask({})
  ]
};