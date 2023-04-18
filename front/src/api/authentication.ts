import {AuthState, authStore, authStore2, LoginResponse, RequiredDataLogin} from "../ts/auth";
// @ts-ignore
import {computed, reactive, readonly, ref} from "vue";
import {AuthDto} from "../ts/AuthDto";
import {api} from "./cn_api";


// @ts-ignore
let reactiveObjAuth = localStorage.getItem("auth" ) || {
    jwt : null,
    isLoggingOut : false
}

// @ts-ignore
let reactiveObjMeJwt = localStorage.getItem("me_jwt" ) || ""

// @ts-ignore
const state: AuthState = ref(
    reactiveObjAuth
);

const state2: string = ref(reactiveObjMeJwt);
// @ts-ignore
const { VITE_APP_TOKEN } = import.meta.env;
export async function loginApi(loginData : RequiredDataLogin)
{
    loginData.app_token = "$2y$10$oBk2faIUGbDayx5j0u7pEuTCL3LOWwloUzOXbWNyrlgg29/0w4H8e"
    loginData.grant_type = "password"
    // Should do a login in your platform that will response you with a token
    const { data } = await api().post("/api/v1/auth/login", loginData);
    if (!data.data.jwt) {
        // @ts-ignore
        throw new Error('Error: user or password are incorrect');
    }
    await setTokenAuthStore(data)

    return setTokenInfo(data)
}

// @ts-ignore
export async function setTokenAuthStore(data)
{
    authStore.update((state) => ({
        ...state,
        jwt: data.data.jwt,
        isLoggingOut: false
    }));
}

export async function setTokenInfo(data)
{
    const { data : response } = await api().get("/api/v1/auth/my_token_info");

    if (!response.data.user.supplier.name) {
        // @ts-ignore
        throw new Error('Usuario no es un proveedor');
    }
    authStore.update((state) => ({
        ...state,
        jwt: data.data.jwt,
        isLoggingOut: false,
        user: response.data.user,
        supplier: response.data.user.supplier
    }));

    authStore2.update( (state2) => (
        data.data.jwt
    ))

    return data;
}

const AUTH_LOGIN = (loginData: LoginResponse) => {
    state.jwt = loginData.jwt;
    state.isLoggingOut = false;
    reactiveObjMeJwt = loginData.jwt;
};

const AUTH_LOGOUT = () => {
    state.jwt = null;
    state.isLoggingOut = true;
    authStore.update((state) => ({ jwt: null, isLoggingOut: false }));
};

function getAuth(): AuthDto|boolean
{
    // @ts-ignore
    let ls = localStorage.getItem("auth" )
    if (!ls) {
       return false
    }

    // @ts-ignore
    return JSON.parse(ls);
}

function isLoggedIn()
{
    // @ts-ignore
    return getAuth()?.jwt !== null
}

export const useAuth = () => ({
    AUTH_LOGIN,
    AUTH_LOGOUT,
    isLoggedIn,
    state: readonly(state),
    getAuth,
});