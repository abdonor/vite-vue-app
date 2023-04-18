<template>
  <div class="grid">
    <BlockUI :blocked="loader" fullScreen />
    <div class="col-12" v-if="loader">
        <ProgressSpinner  />
    </div>
    <div class="col-12" v-else>
      <div class="card">
       <b class="mr-2">INFORME DE ALUMNOS MATRICULADOS</b>
        <div>&nbsp;</div>
        <TabView >
          <TabPanel  >
                <template #header>
                  <i class="pi pi-flag">&nbsp;Todos</i>
                </template>
                <Divider align="left">
                  <div class="inline-flex align-items-center">
                    <i class="pi pi-flag mr-2"></i>
                    <b>Todos los Países</b>
                  </div>
                </Divider>
                <DataTable   :value="dataCourse" showGridlines stripedRows >
                  <template #header>

                  </template>
                  <template #loading>
                    Loading customers data. Please wait.
                  </template>

                  <Column headerStyle="background-color:#1f3295;"   field="course" header="Curso" ></Column>
                  <Column headerStyle="background-color:#1f3295;"   field="total" header="Cantidad Alumnos"  ></Column>
                  <template #footer>
                    Total de {{ report.total }} licencias.
                  </template>
                </DataTable>
              </TabPanel>
              <TabPanel v-for="data in report.data" :key="data[0].country"  >
                <template #header>
                  <i class="pi pi-flag">&nbsp;{{data[0].country}}</i>
                </template>
                <Divider align="left">
                  <div class="inline-flex align-items-center">
                    <i class="pi pi-flag mr-2"></i>
                    <b>{{data[0].country}}</b>
                  </div>
                </Divider>
                <DataTable  :value="data" removableSort sortMode="multiple" showGridlines responsiveLayout="scroll" >
                  <template #header>

                  </template>
                  <template #loading>
                    Loading customers data. Please wait.
                  </template>
                  <Column headerStyle="background-color:#1f3295;" field="country" header="País" ></Column>
                  <Column headerStyle="background-color:#1f3295;" sortable field="name" header="Curso" ></Column>
                  <Column headerStyle="background-color:#1f3295;" sortable field="quantity" header="Cantidad Alumnos"  ></Column>
                  <template #footer>
                    Total de {{ report.total_by_country[data[0].country].total }} licencias.
                  </template>
                </DataTable>
              </TabPanel>

        </TabView>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {defineAsyncComponent, ref} from "vue";
import {getReportEnrolled} from "../../api/report";
import {ReportUsersEnrolledDto} from "../../ts/ReportUsersEnrolledDto";
import TabView from "primevue/tabview"
import TabPanel from "primevue/tabpanel"
import {resolver} from "../../ts/resolver";
import ProgressSpinner from 'primevue/progressspinner';
import BlockUI from 'primevue/blockui';

resolver();

const report = ref<ReportUsersEnrolledDto>([]);
const loader = ref<boolean>(true)
const dataCourse = ref<{name: string, quantity: number}[]>(null)

setTimeout(function() {
  getReportEnrolled().then((result) => {
    report.value = result
    dataCourse.value = result.data_course
    console.log("QUE VA", report.value.data, result)
  }).catch((e) => {
    alert("ERROR" + e.message);
  }).finally(() => {
    loader.value = false
  })
}, 2000);




</script>

<style lang="scss" scoped>

</style>