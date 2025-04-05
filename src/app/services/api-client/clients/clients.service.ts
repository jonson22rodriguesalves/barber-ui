import { Injectable } from '@angular/core';
import { ICLientService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, ListClientResponse, DetailClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

/**
 * Implementação concreta do serviço de clientes
 * 
 * Serviço Angular que implementa a interface ICLientService
 * Realiza operações CRUD via HTTP com a API
 */
@Injectable({
  providedIn: 'root' // Registrado como singleton no injetor raiz
})
export class ClientsService implements ICLientService {

  private readonly basePath = environment.apiUrl // URL base da API

  constructor(private http: HttpClient) { }

  /**
   * Cria um novo cliente
   * @param request Dados do cliente a ser criado
   * @returns Observable com a resposta do servidor
   */
  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}clients`, request)
  }

  /**
   * Atualiza um cliente existente
   * @param id ID do cliente a ser atualizado
   * @param request Dados atualizados do cliente
   * @returns Observable com a resposta do servidor
   */
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients/${id}`, request)
  }

  /**
   * Remove um cliente
   * @param id ID do cliente a ser removido
   * @returns Observable que completa quando a operação termina
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients/${id}`)
  }

  /**
   * Lista todos os clientes (versão resumida)
   * @returns Observable com array de clientes
   */
  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]>(`${this.basePath}clients`)
  }

  /**
   * Busca detalhes completos de um cliente
   * @param id ID do cliente a ser buscado
   * @returns Observable com os dados completos do cliente
   */
  findById(id: number): Observable<DetailClientResponse> {
    return this.http.get<DetailClientResponse>(`${this.basePath}clients/${id}`)
  }
}