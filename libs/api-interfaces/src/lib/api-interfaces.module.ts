export interface Villain {
  id: string;
  alias: string;
  description: string;
}

export const emptyVillain = {
  id: '',
  alias: '',
  description: '',
};

export interface User {
  email: string;
  password: string;
}
