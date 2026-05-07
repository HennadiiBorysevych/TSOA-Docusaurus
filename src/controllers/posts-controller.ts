import { randomUUID } from 'crypto';
import { Controller, Get, Path, Response, Route, Tags } from 'tsoa';
import type { Post } from '../models/post';

const posts: Post[] = [
  { id: randomUUID(), userId: '550e8400-e29b-41d4-a716-446655440000', title: 'Hello world', body: 'First post!', createdAt: new Date().toISOString() },
];

@Route('users/{userId}/posts')
@Tags('Posts')
export class PostsController extends Controller {
  /** Get posts for a user */
  @Get('/')
  @Response(404, 'User not found')
  public async getUserPosts(@Path() userId: string): Promise<Post[]> {
    return posts.filter(p => p.userId === userId);
  }
}
