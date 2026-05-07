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
  department?: string;
  phone?: string;
  notes?: string;
  active?: boolean;
  avatar?: string;
  timezone?: string;
}
