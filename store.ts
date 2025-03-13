import { Store } from "pullstate";

interface User {
  name: string;
  password: string;
  username: string;
}

interface Auth {
  isAuth: boolean;
  user?: User | null;
}

export const authStore = new Store<Auth>({
  isAuth: false,
});
