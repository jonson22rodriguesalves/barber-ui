/**
 * Configurações de ambiente para desenvolvimento
 * 
 * Este arquivo contém variáveis de ambiente específicas para o ambiente
 * de desenvolvimento local.
 */
export const environment = {
    /**
     * Indica se a aplicação está em modo de produção
     * - false: Ambiente de desenvolvimento (habilita ferramentas de debug)
     * - true: Ambiente de produção (otimizações ativadas)
     */
    production: false,
  
    /**
     * URL base da API backend
     * - No desenvolvimento, aponta para localhost
     * - Na produção, deve ser substituída pela URL do servidor real
     */
    apiUrl: 'http://localhost:8080/'
  };