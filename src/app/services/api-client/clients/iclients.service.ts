import { Observable } from "rxjs";
import { DetailClientResponse, ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse } from "./client.models";

/**
 * Interface que define o contrato para o serviço de clientes
 * 
 * Estabelece as operações básicas de CRUD para gestão de clientes
 * Permite diferentes implementações (HTTP, Mock, GraphQL, etc.)
 */
export interface ICLientService {

    /**
     * Cria um novo cliente no sistema
     * @param request Dados do cliente a ser cadastrado
     * @returns Observable com a resposta contendo o cliente criado
     */
    save(request: SaveClientRequest): Observable<SaveClientResponse>

    /**
     * Atualiza os dados de um cliente existente
     * @param id ID do cliente a ser atualizado
     * @param request Dados atualizados do cliente
     * @returns Observable com a resposta contendo o cliente atualizado
     */
    update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>

    /**
     * Remove um cliente do sistema
     * @param id ID do cliente a ser removido
     * @returns Observable que completa quando a operação é finalizada
     */
    delete(id: number): Observable<void>

    /**
     * Lista todos os clientes cadastrados
     * @returns Observable com array de clientes (versão resumida)
     */
    list(): Observable<ListClientResponse[]>

    /**
     * Busca os detalhes completos de um cliente específico
     * @param id ID do cliente a ser consultado
     * @returns Observable com os dados completos do cliente
     */
    findById(id: number): Observable<DetailClientResponse>

}