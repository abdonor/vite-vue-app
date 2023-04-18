<template>
  <Card>
    <!--<template #header>
    </template>-->
    <template #content>
      <img
          class="class-img"
          src="../../assets/logo.png"
          alt="Image Text"
          style="width: 300px; height: 120px; margin-bottom: 0;"
      />
      <div  >
        <div class="flex justify-content-center p-fluid">
          <div   class="card">

            <div class="field">
              <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="username" type="email" placeholder="Email" />

              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <Password v-model="password" :feedback="false" placeholder="Contraseña">
                </Password>
                <label for="password">Contraseña</label>
              </div>
            </div>
            <!--<div class="field-checkbox">
              <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
              <label for="accept">I agree to the terms and conditions*</label>
            </div>-->
            <Button type="submit" label="Entrar" class="mt-2" @click="doLogin" />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup lang="ts">
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
//import Checkbox from "primevue/checkbox"
import Card from "primevue/card"
//import Image from 'primevue/image';
import {onMounted, reactive, ref} from "vue";
import {loginApi, useAuth} from "../../api/authentication";
import {useRouter} from "vue-router";
import { useToast } from "primevue/usetoast";
import {ToastSeverity} from "primevue/api";

const name = ref(null)
const username = ref(null)
const password = ref(null)
const router = useRouter();
const formState = reactive({username: username, password: password});
const auth = useAuth();
const toast = useToast();



if (auth.isLoggedIn()) {
  router.push("/");
}

function doLogin() {
  if (!formState.password || !formState.username) {
    //toast.add({severity: ToastSeverity.ERROR, summary: "Login or password is incorrect", detail: "", life: 3000});
    alert("Login or password is incorrect");
    toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    return;
  }
  loginApi(formState).then((response) => {
    if (response.data.jwt) {
      auth.AUTH_LOGIN(response);
      router.push("/");
    } else {
      throw new Error("Erro con el login")
    }
  }).catch((err) => {
    //toast.add({severity: ToastSeverity.ERROR, summary: err, detail: err, life: 3000});
    alert(err);
  })
}


</script>
<style lang="scss">
body {
  background-image: url('https://static.vecteezy.com/system/resources/previews/001/416/257/non_2x/futuristic-sci-fi-wallpaper-background-free-photo.jpg')
}
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  .wallpaper-login {
    background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .wallpaper-register {
    background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
.logos-img{
  margin-left: 25px;
  margin-top: 25px;
}
</style>