// @ts-ignore
import { createStore, withProps, select } from '@ngneat/elf';
import {
    persistState,
    localStorageStrategy,
    sessionStorageStrategy,
} from '@ngneat/elf-persist-state';
import {reactive} from "vue";

interface AuthProps {
    user: { id: string } | null;
}

export interface AuthState {
    jwt?: string | null;
    isLoggingOut: boolean;
}

// @ts-ignore
export const authStore = createStore({ name }, withProps<AuthState>({ jwt: null, isLoggingOut: false }));

export const persist = persistState(authStore, {
    key: 'auth',
    storage: localStorageStrategy,
});

export const jwt$ = authStore.pipe(select((state) => state.jwt));

jwt$.subscribe(console.log);
console.log("LA MADRE")
jwt$.subscribe(console.log);

