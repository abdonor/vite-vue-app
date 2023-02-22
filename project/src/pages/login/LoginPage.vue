<template>
  <Card>
    <!--<template #header>
    </template>-->
    <template #content>
      <img
          class="class-img"
          src="../../assets/img.png"
          alt="Image Text"
          style="width: 300px; height: 140px; margin-bottom: 0;"
      />
      <div class="focustrap-demo">
        <div class="flex justify-content-center p-fluid">
          <div v-focustrap class="card">

            <div class="field">
              <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="username" type="email" placeholder="Email" />
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <Password v-model="password" :feedback="false">
                  <!--<template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer>
                    <Divider />
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                    </ul>
                  </template>-->
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

import {reactive, ref} from "vue";
import {jwt$} from "../../ts/auth";
import {loginApi} from "../../api/authentication";
import {useRouter} from "vue-router";

const name = ref(null)
const username = ref(null)
const password = ref(null)
const accept = ref(null)
const router = useRouter();
const formState = reactive({email: username, password: password});


function doLogin() {
  loginApi(formState)
  console.log(jwt$.subscribe(console.log), "MAMA_MIA")
  router.push("/");
}

function doRegister() {

}

</script>
<style lang="scss">
body {
  background: url('https://wildaid.org/wp-content/uploads/2017/09/dark-blue-ocean-surface-seen-from-underwater-looped-slow-motion-fractal-waves-underwater-and-rays-of-sunlight-shining-through-4k-seamless-loop-video_hy1i0dcrl_thumbnail-full01.png')
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