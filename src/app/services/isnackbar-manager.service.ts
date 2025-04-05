/**
 * Interface que define o contrato para um serviço de notificação via snackbar
 * 
 * Padroniza a exibição de mensagens temporárias para usuários
 * Implementações devem cuidar da apresentação visual das mensagens
 */
export interface ISnackbarManagerService {
    /**
     * Exibe uma notificação do tipo snackbar com opções configuráveis
     * 
     * @param message - Texto principal a ser exibido na snackbar
     * @param [action] - Texto opcional para o botão de ação (ex: "Fechar", "Desfazer")
     * @param [duration] - Duração opcional em milissegundos (implementações padrão geralmente usam 3000-4000ms)
     * 
     * As implementações devem:
     * - Garantir que a mensagem seja claramente visível
     * - Tratar cliques no botão de ação quando fornecido
     * - Fechar automaticamente após o tempo de duração
     */
    show(message: string, action?: string, duration?: number): void;
}