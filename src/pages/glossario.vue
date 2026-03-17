<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="text-center q-mb-lg">
      <q-icon name="menu_book" color="navy" size="80px" />
      <h2 class="text-h4 text-navy text-weight-bolder q-mt-sm">Glossário Técnico</h2>
      <div class="row justify-center q-mb-md">
        <q-separator color="red-med" style="width: 80px; height: 3px;" />
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-md-10">

        <q-card flat class="custom-border q-mb-lg bg-white shadow-2">
          <q-card-section>
            <q-input
              v-model="filtro"
              outlined
              placeholder="Digite o termo ou significado..."
              color="navy"
              dense
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <div class="q-gutter-xs q-mt-sm">
              <q-chip
                v-for="cat in categorias"
                :key="cat"
                clickable
                @click="categoriaSelecionada = cat"
                :outline="categoriaSelecionada !== cat"
                :color="categoriaSelecionada === cat ? 'red-med' : 'grey-7'"
                text-color="white"
                size="sm"
              >
                {{ cat }}
              </q-chip>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-center">
            <div class="row justify-center q-gutter-xs">
              <q-btn
                v-for="letra in alfabeto"
                :key="letra"
                @click="letraSelecionada = letra"
                flat
                dense
                size="sm"
                :class="letraSelecionada === letra ? 'bg-navy text-white' : 'text-navy'"
                :label="letra"
              />
              <q-btn flat dense size="sm" label="TODOS" @click="limparFiltros" color="red-med" />
            </div>
          </q-card-section>
        </q-card>

        <div class="row q-col-gutter-md">
          <div
            v-for="item in termosFiltrados"
            :key="item.termo"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card flat class="term-card border-navy shadow-1 full-height">
              <q-card-section class="bg-navy text-white q-py-sm row justify-between items-center">
                <div class="text-subtitle1 text-weight-bold">{{ item.termo }}</div>
                <q-icon name="bookmark_border" size="xs" class="cursor-pointer" />
              </q-card-section>

              <q-card-section class="bg-white text-grey-9 text-body2">
                {{ item.significado }}
              </q-card-section>

              <q-card-section class="bg-grey-1 q-py-xs row justify-between">
                <q-badge color="red-med" :label="item.categoria" />
                <div class="text-caption text-grey-6 text-italic">Obs: {{ item.prefixo }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const filtro = ref('')
const letraSelecionada = ref('')
const categoriaSelecionada = ref('Todas')

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const categorias = ['Todas', 'Respiratório', 'Cardíaco', 'Eliminação', 'Tegumentar', 'Geral']

const listaTermos = ref([
  { termo: 'Anúria', significado: 'Ausência total de urina (menos de 100ml em 24h).', categoria: 'Eliminação', prefixo: 'A- (ausência)' },
  { termo: 'Bradicardia', significado: 'Frequência cardíaca abaixo do normal (< 60 bpm).', categoria: 'Cardíaco', prefixo: 'Bradi- (lento)' },
  { termo: 'Dispneia', significado: 'Dificuldade para respirar ou respiração laboriosa.', categoria: 'Respiratório', prefixo: 'Dis- (dificuldade)' },
  { termo: 'Eupneia', significado: 'Respiração normal, silenciosa e rítmica.', categoria: 'Respiratório', prefixo: 'Eu- (normal)' },
  { termo: 'Hematúria', significado: 'Presença de sangue na urina.', categoria: 'Eliminação', prefixo: 'Hemato- (sangue)' },
  { termo: 'Icterícia', significado: 'Pele e mucosas amareladas (excesso de bilirrubina).', categoria: 'Tegumentar', prefixo: 'Sintoma' },
  { termo: 'Melena', significado: 'Fezes escuras com sangue digerido (aspecto de borra de café).', categoria: 'Eliminação', prefixo: 'Digestivo' },
  { termo: 'Ortopneia', significado: 'Dificuldade de respirar enquanto deitado.', categoria: 'Respiratório', prefixo: 'Orto- (reto)' },
  { termo: 'Poliúria', significado: 'Aumento excessivo do volume urinário.', categoria: 'Eliminação', prefixo: 'Poli- (muito)' }
])

const termosFiltrados = computed(() => {
  return listaTermos.value.filter(t => {
    const correspondeBusca = t.termo.toLowerCase().includes(filtro.value.toLowerCase()) ||
      t.significado.toLowerCase().includes(filtro.value.toLowerCase())
    const correspondeLetra = letraSelecionada.value ? t.termo.startsWith(letraSelecionada.value) : true
    const correspondeCat = categoriaSelecionada.value === 'Todas' ? true : t.categoria === categoriaSelecionada.value

    return correspondeBusca && correspondeLetra && correspondeCat
  })
})

function limparFiltros() {
  filtro.value = ''
  letraSelecionada.value = ''
  categoriaSelecionada.value = 'Todas'
}
</script>

<style scoped>
.text-navy { color: #001F3F !important; }
.bg-navy { background-color: #001F3F !important; }
.bg-red-med { background-color: #C62828 !important; }
.text-red-med { color: #C62828 !important; }

.custom-border {
  border: 3px solid #001F3F;
  border-radius: 12px;
}

.border-navy {
  border-left: 6px solid #001F3F;
}

.term-card {
  transition: all 0.3s ease;
}

.term-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.2) !important;
}
</style>
