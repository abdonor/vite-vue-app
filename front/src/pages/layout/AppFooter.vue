<script setup>

import { computed } from 'vue';
import {useLayout} from "./composables/layout.js";

const { layoutConfig, contextPath } = useLayout();

const logoUrl = computed(() => {
    return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="layout-footer">
        <img src="../../assets/logo.png" alt="Logo" height="20" class="mr-2" />
        <span class="font-medium ml-2">Editorial Oceano 2023</span>
    </div>
</template>
<style lang="scss" scoped></style>
