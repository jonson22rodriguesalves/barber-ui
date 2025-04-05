import { Injectable } from '@angular/core';
import { IDialogManagerService } from './idialog-manager.service';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { YesNoDialogComponent } from '../commons/components/yes-no-dialog/yes-no-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root' // Serviço disponível em toda a aplicação (singleton)
})
export class DialogManagerService implements IDialogManagerService {

  /**
   * Construtor do serviço de diálogos
   * @param dialog Serviço do Angular Material para abertura de diálogos
   */
  constructor(private readonly dialog: MatDialog) { }

  /**
   * Implementação do método para exibir diálogo de Sim/Não
   * @param component Componente que será exibido no diálogo (deve ser YesNoDialogComponent)
   * @param data Dados para configuração do diálogo:
   *   - title: Título do diálogo
   *   - content: Conteúdo/mensagem principal
   * @returns Observable que emite:
   *   - true quando o usuário confirma (Sim)
   *   - false quando o usuário cancela (Não)
   *   - undefined se o diálogo for fechado sem ação
   */
  showYesNoDialog(
    component: ComponentType<YesNoDialogComponent>, 
    data: { title: string; content: string; }
  ): Observable<any> {
    // Abre o diálogo com configurações básicas
    const dialogRef = this.dialog.open(component, {
      width: '400px', // Largura fixa do diálogo
      data // Passa os dados para o componente interno
    });

    // Retorna um Observable que notifica quando o diálogo é fechado
    return dialogRef.afterClosed();
  }
}