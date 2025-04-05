/**
 * Serviço para gerenciar notificações do tipo snackbar na aplicação
 * Implementa a interface ISnackbarManagerService para tratamento consistente de notificações
 * Utiliza o MatSnackBar do Angular Material para exibição das notificações
 */
import { Injectable } from '@angular/core';
import { ISnackbarManagerService } from './isnackbar-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root' // Serviço fornecido no nível raiz (singleton)
})
export class SnackbarManagerService implements ISnackbarManagerService {

  /**
   * Construtor do serviço
   * @param snackBar - Instância injetada do serviço snackbar do Angular Material
   */
  constructor(private readonly snackBar: MatSnackBar) { }

  /**
   * Exibe uma notificação do tipo snackbar
   * @param message - Mensagem a ser exibida
   * @param action - Texto para o botão de ação (padrão: 'fechar')
   * @param duration - Tempo de exibição em milissegundos (padrão: 3000)
   */
  show(message: string, action: string = 'fechar', duration: number = 3000): void {
    this.snackBar.open(
      message, 
      action, 
      { 
        duration, 
        verticalPosition: 'top', // Posiciona a notificação no topo da tela
        horizontalPosition: 'right' // Posiciona a notificação no lado direito
      }
    );
  }
}