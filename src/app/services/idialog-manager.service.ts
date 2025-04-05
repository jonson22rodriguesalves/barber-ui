/**
 * Interface para o serviço de gerenciamento de diálogos
 * 
 * Define o contrato para exibição de diálogos modais na aplicação
 */
import { ComponentType } from "@angular/cdk/portal";
import { Observable } from "rxjs";
import { YesNoDialogComponent } from "../commons/components/yes-no-dialog/yes-no-dialog.component";

export interface IDialogManagerService {
    /**
     * Exibe um diálogo de confirmação Sim/Não
     * 
     * @param component Componente Angular que será exibido no diálogo (deve ser do tipo YesNoDialogComponent)
     * @param data Dados para configuração do diálogo:
     *   - title: Título do diálogo
     *   - content: Conteúdo/mensagem principal do diálogo
     * @returns Observable que emite:
     *   - true quando o usuário confirma (Sim)
     *   - false quando o usuário cancela (Não)
     *   - Pode emitir erros se ocorrerem problemas na abertura do diálogo
     */
    showYesNoDialog(
        component: ComponentType<YesNoDialogComponent>, 
        data: { title: string, content: string }
    ): Observable<any>;
}