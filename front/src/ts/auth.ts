// @ts-ignore
import { createStore, withProps, select } from '@ngneat/elf';
// @ts-ignore
import { persistState, localStorageStrategy,  sessionStorageStrategy,} from '@ngneat/elf-persist-state';

export interface AuthProps {
    user: { id: string } | null;
}

export interface RequiredDataLogin {
    username? : string,
    password? : string,

    grant_type?: string,

    app_token?: string
}

export interface LoginResponse {
    jwt : string;
}

export interface AuthState {
    jwt : string;
    isLoggingOut: boolean;
}

// @ts-ignore
export const authStore = createStore(
    { name : "auth" },
    withProps<AuthState>({ jwt: null, isLoggingOut: false })
);

export const authStore2 = createStore(
    { name : "me_jwt" },
    withProps<string>()
);

export const persist = persistState(authStore, {
    key: 'auth',
    storage: localStorageStrategy,
});

export const jwt$ = authStore.pipe(select((state) => state.jwt));
let lala : string;
jwt$.subscribe(lala);
// @ts-ignore
jwt$.subscribe(console.log);

