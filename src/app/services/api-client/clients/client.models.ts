/**
 * Modelo para criação de novos clientes
 * Usado como payload no método save() do serviço
 */
export interface SaveClientRequest {
    name: string   // Nome completo do cliente (obrigatório)
    email: string  // E-mail do cliente (obrigatório)
    phone: string  // Telefone do cliente (obrigatório)
}

/**
 * Modelo para atualização de clientes existentes
 * Usado como payload no método update() do serviço
 */
export interface UpdateClientRequest {
    name: string   // Nome completo atualizado
    email: string  // E-mail atualizado
    phone: string  // Telefone atualizado
}

/**
 * Resposta após criação de um novo cliente
 * Retornado pelo método save() do serviço
 */
export interface SaveClientResponse {
    id: number    // ID único gerado pelo sistema
    name: string  // Nome do cliente criado
    email: string // E-mail do cliente criado
    phone: string // Telefone do cliente criado
}

/**
 * Resposta após atualização de um cliente
 * Retornado pelo método update() do serviço
 */
export interface UpdateClientResponse {
    id: number    // ID do cliente atualizado
    name: string  // Nome atualizado
    email: string // E-mail atualizado
    phone: string // Telefone atualizado
}

/**
 * Modelo simplificado para listagem de clientes
 * Usado no método list() do serviço
 */
export interface ListClientResponse {
    id: number    // ID do cliente
    name: string  // Nome do cliente
    email: string // E-mail do cliente
    phone: string // Telefone do cliente
}

/**
 * Modelo completo com todos os detalhes de um cliente
 * Usado no método findById() do serviço
 * (Atualmente idêntico ao ListClientResponse, mas pode ser expandido)
 */
export interface DetailClientResponse {
    id: number    // ID do cliente
    name: string  // Nome completo
    email: string // E-mail principal
    phone: string // Telefone principal
}