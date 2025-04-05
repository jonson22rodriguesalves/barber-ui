/**
 * Tokens centralizados para injeção de dependência de serviços
 * 
 * Fornece tokens tipados para todas as principais dependências de serviços
 * Permite baixo acoplamento e facilita testes/mocks de serviços
 */
import { InjectionToken } from "@angular/core";
import { ICLientService } from "./api-client/clients/iclients.service";
import { ISnackbarManagerService } from "./isnackbar-manager.service";
import { IDialogManagerService } from "./idialog-manager.service";
import { IScheduleService } from "./api-client/schedules/ischedules.service";

/**
 * Objeto no estilo namespace contendo todos os tokens de injeção
 * Organizado hierarquicamente por categoria de serviço
 */
export const SERVICES_TOKEN = {
    /**
     * Serviços de comunicação HTTP/API
     */
    HTTP: {
        /**
         * Token para operações relacionadas a clientes
         * @type {InjectionToken<ICLientService>}
         */
        CLIENT: new InjectionToken<ICLientService>('SERVICES_TOKEN.HTTP.CLIENT'),
        
        /**
         * Token para operações relacionadas a agendamentos
         * @type {InjectionToken<IScheduleService>}
         */
        SCHEDULE: new InjectionToken<IScheduleService>('SERVICES_TOKEN.HTTP.SCHEDULE'),
    },
    
    /**
     * Serviço de notificação UI (Snackbar)
     * @type {InjectionToken<ISnackbarManagerService>}
     */
    SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICES_TOKEN.SNACKBAR'),
    
    /**
     * Serviço de gerenciamento de diálogos
     * @type {InjectionToken<IDialogManagerService>}
     */
    DIALOG: new InjectionToken<IDialogManagerService>('SERVICES_TOKEN.DIALOG')
};