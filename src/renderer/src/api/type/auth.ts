export interface Login{
  success: boolean;
  token: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  status: string;
  createdAt: string;
}