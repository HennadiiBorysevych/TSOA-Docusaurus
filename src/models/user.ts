export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface CreateUserBody {
  name: string;
  email: string;
  role: 'admin' | 'user';
}
