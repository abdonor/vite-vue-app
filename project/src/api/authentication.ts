import {authStore, jwt$} from "../ts/auth";

interface RequiredDataLogin {
    email : string,
    password : string
}
export function loginApi(loginData : RequiredDataLogin)
{
    // Should do a login in your platform that will response you with a token
    let jwt = 'my-token-'+loginData.email;

    //setTimeout(() => {
    authStore.update((state) => ({
        ...state,
        jwt: jwt,
        isLoggingOut: false
    }));

    console.log(jwt$.pipe(), "YYYY")
}