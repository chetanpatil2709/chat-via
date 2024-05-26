export interface IAuthState {
  isAuthenticated?: boolean;
  loading?: boolean;
  error?: unknown | null;
  result?: unknown;
}
