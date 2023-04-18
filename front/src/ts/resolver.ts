// @ts-ignore
import {setTokenAuthStore, setTokenInfo, useAuth} from "../api/authentication.js";
// @ts-ignore
import {useRoute, useRouter} from "vue-router";

export function resolver() {
    const route = useRoute()
    const router = useRouter()
    const authLogin = useAuth()
    if (route.query.jwt) {
        authLogin.AUTH_LOGOUT()
    }
    if (!useAuth().isLoggedIn()) {
        if (route.query.jwt) {

            let data = {
                data: {
                    jwt: route.query.jwt
                }
            }
            authLogin.AUTH_LOGIN(route.query)
            setTokenAuthStore(data).then(r => {})
            // @ts-ignore
            setTokenInfo(data).then(r => {})
            router.push("/").then(r => {})
        }
        router.push('login')
    } else {
        return true;
    }
}