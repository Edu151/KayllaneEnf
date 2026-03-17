<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="text-center q-mb-lg">
      <q-icon name="psychology" color="navy" size="80px" />
      <h2 class="text-h4 text-navy text-weight-bolder q-mt-sm">Calculadora de Glasgow</h2>
      <p class="text-subtitle1 text-grey-9">Avaliação do Nível de Consciência (Atualizada)</p>
    </div>

    <div class="row justify-center q-col-gutter-lg">
      <div class="col-12 col-md-8">
        <q-card flat class="my-card custom-border shadow-5">

          <q-card-section class="bg-black text-white text-center">
            <div class="text-overline">Pontuação Total</div>
            <div class="text-h2 text-weight-bolder text-red-med">{{ totalScore }}</div>
            <div class="text-h6 q-mt-sm text-uppercase">{{ classificacao }}</div>
          </q-card-section>

          <q-card-section class="bg-white q-pa-md">
            <q-list separator>

              <div class="q-pa-sm text-weight-bold text-navy bg-grey-3 rounded-borders">
                1. ABERTURA OCULAR
              </div>
              <q-item v-for="opt in aberturaOcularOpts" :key="opt.value" tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="glasgow.ocular" :val="opt.value" color="red-med" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ opt.label }}</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bold text-navy">+{{ opt.value }}</q-item-section>
              </q-item>

              <div class="q-pa-sm text-weight-bold text-navy bg-grey-3 rounded-borders q-mt-md">
                2. RESPOSTA VERBAL
              </div>
              <q-item v-for="opt in respostaVerbalOpts" :key="opt.value" tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="glasgow.verbal" :val="opt.value" color="red-med" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ opt.label }}</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bold text-navy">+{{ opt.value }}</q-item-section>
              </q-item>

              <div class="q-pa-sm text-weight-bold text-navy bg-grey-3 rounded-borders q-mt-md">
                3. RESPOSTA MOTORA
              </div>
              <q-item v-for="opt in respostaMotoraOpts" :key="opt.value" tag="label" v-ripple>
                <q-item-section avatar>
                  <q-radio v-model="glasgow.motora" :val="opt.value" color="red-med" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ opt.label }}</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bold text-navy">+{{ opt.value }}</q-item-section>
              </q-item>

            </q-list>
          </q-card-section>

          <q-card-actions align="center" class="bg-grey-1 q-pa-md">
            <q-btn flat icon="refresh" label="Reiniciar Avaliação" color="navy" @click="resetGlasgow" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <q-banner rounded class="bg-navy text-white">
          <template v-slot:avatar>
            <q-icon name="info" color="red-med" />
          </template>
          <div class="text-weight-bold">Nota Técnica:</div>
          A escala varia de 3 a 15 pontos. Recentemente foi incluída a Reatividade Pupilar (P), resultando no cálculo GCS-P.
          Deseja que eu adicione a avaliação de pupilas também?
        </q-banner>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, computed } from 'vue'

const glasgow = reactive({
  ocular: 4,
  verbal: 5,
  motora: 6
})

const aberturaOcularOpts = [
  { label: 'Espontânea', value: 4 },
  { label: 'Ao som (estímulo verbal)', value: 3 },
  { label: 'À pressão (estímulo doloroso)', value: 2 },
  { label: 'Ausente', value: 1 }
]

const respostaVerbalOpts = [
  { label: 'Orientado', value: 5 },
  { label: 'Confuso', value: 4 },
  { label: 'Palavras Inapropriadas', value: 3 },
  { label: 'Sons Ininteligíveis', value: 2 },
  { label: 'Ausente', value: 1 }
]

const respostaMotoraOpts = [
  { label: 'Obedece a comandos', value: 6 },
  { label: 'Localiza estímulo (dor)', value: 5 },
  { label: 'Flexão normal (retirada)', value: 4 },
  { label: 'Flexão anormal (decorticação)', value: 3 },
  { label: 'Extensão anormal (descerebração)', value: 2 },
  { label: 'Ausente', value: 1 }
]

const totalScore = computed(() => {
  return glasgow.ocular + glasgow.verbal + glasgow.motora
})

const classificacao = computed(() => {
  const score = totalScore.value
  if (score >= 13) return 'Trauma Leve'
  if (score >= 9) return 'Trauma Moderado'
  return 'Trauma Grave (Necessidade de IOT)'
})

function resetGlasgow() {
  glasgow.ocular = 4
  glasgow.verbal = 5
  glasgow.motora = 6
}
</script>

<style scoped>
.text-navy { color: #001F3F !important; }
.bg-navy { background-color: #001F3F !important; }
.text-red-med { color: #C62828 !important; }

/* BORDA EM #001F3F CONFORME PEDIDO */
.custom-border {
  border: 3px solid #001F3F !important;
  border-radius: 12px;
  overflow: hidden;
}

.my-card {
  transition: all 0.3s ease;
}
</style>
