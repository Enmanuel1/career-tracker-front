export type AuthUser = {
  id: string;
  email: string;
  fullName?: string;
};

export type AuthSession = {
  accessToken: string;
  user: AuthUser;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = AuthSession;
