import { randomUUID } from 'crypto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import type { CreateUserBody, User } from '../models/user';

const users: User[] = [];

@Route('users')
@Tags('Users')
export class UsersController extends Controller {
  /** List all users */
  @Get('/')
  @Response(400, 'Bad request')
  public async listUsers(): Promise<User[]> {
    return users;
  }

  /** Get a user by ID */
  @Get('{id}')
  @Response(404, 'User not found')
  public async getUser(@Path() id: string): Promise<User> {
    const user = users.find(u => u.id === id);
    if (!user) {
      this.setStatus(404);
      throw new Error('User not found');
    }
    return user;
  }

  /** Create a user */
  @Post('/')
  @SuccessResponse(201, 'Created')
  @Response(400, 'Bad request')
  public async createUser(@Body() body: CreateUserBody): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: body.name,
      email: body.email,
      role: body.role,
      createdAt: new Date().toISOString(),
    };
    users.push(user);
    this.setStatus(201);
    return user;
  }

  /** Delete a user */
  @Delete('{id}')
  @SuccessResponse(204, 'Deleted')
  @Response(404, 'User not found')
  public async deleteUser(@Path() id: string): Promise<void> {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
      this.setStatus(404);
      throw new Error('User not found');
    }
    users.splice(index, 1);
    this.setStatus(204);
  }
}
