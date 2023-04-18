<template>

  <div class="layout-wrapper layout-theme-light">
      <TopBar></TopBar>
      <!--<div class="layout-sidebar">
        <app-sidebar></app-sidebar>
      </div>-->
      <div class="layout-main-container">
        <div class="layout-main">
          <router-view></router-view>
        </div>
        <app-footer></app-footer>
      </div>
      <div class="layout-mask"></div>
  </div>
</template>

<script setup lang="ts">
import TopBar from "../layout/TopBar.vue";
import AppFooter from "../layout/AppFooter.vue";
import {resolver} from "../../ts/resolver";
import {useRouter} from "vue-router";

if ( resolver() === true ) {
  const router = useRouter()
  router.push("/reports");
}

</script>

<style lang="scss">
.layout-wrapper {
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100vh;
}
</style>