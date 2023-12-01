import { IBaseController, IUser } from '../entities/interfaces/interfaces'

export class UserController implements IBaseController<IUser> {
    async index(): Promise<void> {
      // Implementação para listar usuários
    }

    async show(id: string): Promise<void> {
      // Implementação para mostrar detalhes de um usuário
    }

    async create(data: IUser): Promise<void> {
      // Implementação para criar um novo usuário
    }

    async update(id: string, data: any): Promise<void> {
      // Implementação para atualizar um usuário existente
    }

    async delete(id: string): Promise<void> {
      // Implementação para excluir um usuário
    }
  }
