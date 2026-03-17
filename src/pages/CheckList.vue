<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="text-center q-mb-lg">
      <q-icon name="fact_check" color="navy" size="80px" />
      <h2 class="text-h4 text-navy text-weight-bolder q-mt-sm">Checklist de Estágio</h2>
      <p class="text-subtitle1 text-grey-9">Não esqueça nada antes de sair para o plantão.</p>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-md-8">

        <q-card flat class="custom-border q-mb-xl bg-white shadow-2">
          <q-card-section>
            <div class="row items-center justify-between q-mb-sm">
              <div class="text-subtitle1 text-weight-bold text-navy">Progresso da Mochila</div>
              <div class="text-h6 text-red-med">{{ Math.round(progresso * 100) }}%</div>
            </div>
            <q-linear-progress :value="progresso" color="red-med" track-color="grey-4" height="15px" stripe rounded />
          </q-card-section>
        </q-card>

        <div v-for="(categoria, index) in checklists" :key="index" class="q-mb-lg">
          <q-card flat class="border-left-navy shadow-1">
            <q-item-label header class="bg-navy text-white text-weight-bold text-uppercase q-pa-md">
              <q-icon :name="categoria.icon" size="xs" class="q-mr-sm" />
              {{ categoria.titulo }}
            </q-item-label>

            <q-list separator class="bg-white">
              <q-item v-for="item in categoria.itens" :key="item.nome" tag="label" v-ripple>
                <q-item-section avatar>
                  <q-checkbox v-model="item.checked" color="red-med" />
                </q-item-section>
                <q-item-section>
                  <q-item-label :class="{ 'text-strike text-grey-6': item.checked }" class="text-weight-medium">
                    {{ item.nome }}
                  </q-item-label>
                  <q-item-label caption>{{ item.desc }}</q-item-label>
                </q-item-section>
                <q-item-section side v-if="item.obrigatorio">
                  <q-badge color="black" label="Obrigatório" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>

        <div class="text-center q-mt-xl q-mb-xl">
          <q-btn
            outline
            color="navy"
            icon="restart_alt"
            label="Limpar Checklist para amanhã"
            @click="resetChecklist"
          />
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const checklists = ref([
  {
    titulo: 'Equipamentos de Bolso',
    icon: 'medical_services',
    itens: [
      { nome: 'Estetoscópio', desc: 'Verificar se as olivas estão limpas.', checked: false, obrigatorio: true },
      { nome: 'Esfigmomanômetro', desc: 'Aparelho de pressão portátil.', checked: false, obrigatorio: true },
      { nome: 'Termômetro', desc: 'Digital ou de coluna (se permitido).', checked: false, obrigatorio: true },
      { nome: 'Lanterna de Pupila', desc: 'Com pilhas reserva.', checked: false, obrigatorio: false },
      { nome: 'Tesoura sem ponta', desc: 'Para curativos e aberturas rápidas.', checked: false, obrigatorio: true }
    ]
  },
  {
    titulo: 'Papelaria e Identificação',
    icon: 'assignment',
    itens: [
      { nome: 'Caderneta de Anotações', desc: 'Para anotar sinais vitais e condutas.', checked: false, obrigatorio: true },
      { nome: 'Canetas (Azul e Preta)', desc: 'Levar sempre mais de uma.', checked: false, obrigatorio: true },
      { nome: 'Carimbo Profissional', desc: 'Fundamental para as evoluções.', checked: false, obrigatorio: true },
      { nome: 'Relógio de Pulso', desc: 'Com ponteiro de segundos para SSVV.', checked: false, obrigatorio: true }
    ]
  },
  {
    titulo: 'Proteção e Higiene',
    icon: 'security',
    itens: [
      { nome: 'Máscaras Reserva', desc: 'PFF2 ou Cirúrgica.', checked: false, obrigatorio: true },
      { nome: 'Álcool em Gel 70%', desc: 'Uso individual/portátil.', checked: false, obrigatorio: false },
      { nome: 'Prendedor de Cabelo / Touca', desc: 'Manter biossegurança.', checked: false, obrigatorio: true }
    ]
  }
])

// Lógica para calcular o progresso total
const progresso = computed(() => {
  const totalItens = checklists.value.flatMap(c => c.itens).length
  const itensCheckados = checklists.value.flatMap(c => c.itens).filter(i => i.checked).length
  return totalItens > 0 ? itensCheckados / totalItens : 0
})

function resetChecklist() {
  checklists.value.forEach(cat => {
    cat.itens.forEach(item => item.checked = false)
  })
}
</script>

<style scoped>
.text-navy { color: #001F3F !important; }
.bg-navy { background-color: #001F3F !important; }
.text-red-med { color: #C62828 !important; }
.bg-red-med { background-color: #C62828 !important; }

/* Borda #001F3F */
.custom-border {
  border: 3px solid #001F3F;
}

.border-left-navy {
  border-left: 8px solid #001F3F;
  border-radius: 0 8px 8px 0;
}

.text-strike {
  text-decoration: line-through;
}
</style>
