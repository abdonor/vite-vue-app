<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img  src="../../assets/logo.png" alt="logo" />
      {{supplier?.name}}
    </router-link>
    <!--<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars"></i>
    </button>-->

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <!--<button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
        <i class="pi pi-calendar"></i>
        <span>Calendar</span>
      </button>-->
      <button @click="logout" class="p-link layout-topbar-button">
        <i class="pi pi-sign-out"></i>
        <span>sign out</span>
      </button>

    </div>
  </div>
</template>

<script setup  lang="ts">
  import { useLayout } from './composables/layout.js';
  import {useAuth} from "../../api/authentication";
  import Button from "primevue/button";
  import 'primeicons/primeicons.css';
  import {useRouter} from "vue-router";
  import {computed, ref} from "vue";
  import {SupplierDto} from "../../ts/SupplierDto";
  const auth = useAuth();
  const router = useRouter();
  const topbarMenuActive = ref(false);
  const { layoutConfig, onMenuToggle, contextPath } = useLayout();

  //@ts-ignore
  let supplier : SupplierDto = useAuth().getAuth()?.supplier
  function logout()
  {
    auth.AUTH_LOGOUT();
    router.push("/login");
  }
  const topbarMenuClasses = computed(() => {
    return {
      'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
  });
  const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
  };
</script>

<style lang="scss" scoped>

</style>