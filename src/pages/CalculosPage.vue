<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="text-center q-mb-xl">
      <q-icon name="biotech" color="navy" size="80px" />
      <h2 class="text-h4 text-navy text-weight-bolder q-mt-sm">Cálculo de Medicamentos</h2>
      <div class="row justify-center">
        <q-separator color="red-med" style="width: 100px; height: 4px;" class="q-mb-sm" />
      </div>
      <p class="text-subtitle1 text-grey-9 text-weight-medium">Segurança do paciente: Precisão absoluta na dosagem.</p>
    </div>

    <div class="row justify-center q-col-gutter-xl">

      <div class="col-12 col-md-5">
        <q-card flat class="my-card border-navy shadow-5">
          <q-card-section class="bg-navy text-white">
            <div class="text-h6"><q-icon name="functions" /> Regra de Três (Diluição)</div>
          </q-card-section>

          <q-card-section class="q-gutter-y-md bg-white">
            <div class="row q-col-gutter-sm items-center">
              <div class="col-5">
                <q-input v-model.number="form.tenhoMg" label="Tenho (mg/g)"
                         type="number" dense outlined color="navy" :rules="[val => val > 0 || 'Inválido']" />
              </div>
              <div class="col-2 text-center text-weight-bold text-navy"> : </div>
              <div class="col-5">
                <q-input v-model.number="form.tenhoMl" label="Volume (ml)"
                         type="number" dense outlined color="navy" :rules="[val => val > 0 || 'Inválido']" />
              </div>
            </div>

            <div class="row q-col-gutter-sm items-center">
              <div class="col-5">
                <q-input v-model.number="form.prescritoMg" label="Prescrito"
                         type="number" dense outlined color="red-med" :rules="[val => val > 0 || 'Inválido']" />
              </div>
              <div class="col-2 text-center text-weight-bold text-red-med"> : </div>
              <div class="col-5">
                <q-input :model-value="resultadoRegraDeTres" label="Resultado (X)"
                         dense filled readonly bg-color="black" label-color="white" dark />
              </div>
            </div>

            <q-banner dense class="bg-grey-3 text-navy rounded-borders text-center">
              Fórmula: $X = \frac{Prescrito \times Volume}{Tenho}$
            </q-banner>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-5">
        <q-card flat class="my-card border-black shadow-5">
          <q-card-section class="bg-black text-white">
            <div class="text-h6"><q-icon name="water_drop" color="red-med" /> Gotejamento</div>
          </q-card-section>

          <q-card-section class="bg-white">
            <q-tabs v-model="tab" dense class="text-grey-7" active-color="red-med" indicator-color="red-med" align="justify">
              <q-tab name="horas" label="Tempo em Horas" />
              <q-tab name="minutos" label="Tempo em Minutos" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-slot:default v-model="tab" animated class="bg-white">
              <q-tab-panel name="horas">
                <div class="q-mb-md formula-box">
                  <p class="text-weight-bold text-navy">Macrogotas (gts/min):</p>
                  <div class="text-h6 text-center text-black">$$G = \frac{Volume}{Tempo \times 3}$$</div>
                </div>
                <div class="formula-box">
                  <p class="text-weight-bold text-navy">Microgotas (mgts/min):</p>
                  <div class="text-h6 text-center text-black">$$Mg = \frac{Volume}{Tempo}$$</div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="minutos">
                <div class="q-mb-md formula-box">
                  <p class="text-weight-bold text-red-med">Macrogotas (gts/min):</p>
                  <div class="text-h6 text-center text-black">$$G = \frac{Volume \times 20}{Tempo}$$</div>
                </div>
                <div class="formula-box">
                  <p class="text-weight-bold text-red-med">Microgotas (mgts/min):</p>
                  <div class="text-h6 text-center text-black">$$Mg = \frac{Volume \times 60}{Tempo}$$</div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="row justify-center q-mt-xl">
      <div class="col-12 col-md-10">
        <q-banner rounded class="bg-red-med text-white">
          <template v-slot:avatar>
            <q-icon name="warning" color="white" />
          </template>
          <div class="text-weight-bold text-h6">Atenção Crítica:</div>
          Sempre realize o cálculo no papel e confira com um colega antes da administração.
          **Um erro de zero ou vírgula pode ser fatal.**
        </q-banner>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const tab = ref('horas')

const form = reactive({
  tenhoMg: null,
  tenhoMl: null,
  prescritoMg: null
})

// LÓGICA CORRIGIDA: Tratamento de erros matemáticos
const resultadoRegraDeTres = computed(() => {
  // 1. Verifica se os campos estão preenchidos
  if (!form.tenhoMg || !form.tenhoMl || !form.prescritoMg) return 'Aguardando...'

  // 2. Erro de Divisão por Zero
  if (parseFloat(form.tenhoMg) === 0) return 'Erro: Div. por 0'

  // 3. Cálculo
  const res = (form.prescritoMg * form.tenhoMl) / form.tenhoMg

  // Retorna formatado
  return res.toFixed(2) + ' ml'
})
</script>

<style scoped>
/* CORES DA PALETA */
.text-navy { color: #001F3F !important; }
.bg-navy { background-color: #001F3F !important; }
.text-red-med { color: #C62828 !important; }
.bg-red-med { background-color: #C62828 !important; }

/* ESTILIZAÇÃO */
.my-card {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.border-navy { border-top: 6px solid #001F3F; }
.border-black { border-top: 6px solid #000000; }

.formula-box {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

/* Ajuste para inputs de número não mostrarem setas se quiser um visual mais limpo */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
