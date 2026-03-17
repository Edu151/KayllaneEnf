<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-navy text-white custom-header-border">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-icon name="health_and_safety" size="sm" class="q-mr-sm" />
          Kayllane | Enfermagem
        </q-toolbar-title>

        <div class="gt-sm q-gutter-sm">
          <q-btn flat label="Início" icon="home" to="/" />
          <q-btn unelevated class="bg-red-med" label="Calculadora" icon="calculate" to="/calculos" />
          <q-btn flat round icon="link" href="https://linkedin.com" target="_blank">
            <q-tooltip>LinkedIn</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1 custom-drawer-border"
    >
      <q-list>
        <q-item-label header class="text-weight-bold text-navy text-uppercase">
          Menu de Navegação
        </q-item-label>

        <q-item clickable v-ripple to="/" exact active-class="text-red-med">
          <q-item-section avatar>
            <q-icon name="home" color="navy" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Página Inicial</q-item-label>
            <q-item-label caption>Início do blog e posts</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/calculos" class="bg-navy-light text-navy">
          <q-item-section avatar>
            <q-icon name="calculate" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold">Cálculo de Medicamentos</q-item-label>
            <q-item-label caption>Calculadora e fórmulas</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="navy" class="q-my-md" style="opacity: 0.2" />

        <q-item clickable v-ripple href="#" target="_blank">
          <q-item-section avatar>
            <q-icon name="menu_book" color="grey-7" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Meus Resumos</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

      <div class="absolute-bottom q-pa-md text-center bg-blue-grey-1 profile-section">
        <q-avatar size="50px" class="q-mb-xs shadow-2 profile-avatar-border">
          <img src="../../public/icons/FotoPerfil.jpeg">
        </q-avatar>
        <div class="text-caption text-weight-bold text-navy">Kayllane</div>
        <div class="text-caption" style="font-size: 10px;">Acadêmica de Enfermagem</div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer class="bg-black text-white text-center q-pa-xs custom-footer-border">
      <small>Desenvolvido com Quasar & <span class="text-weight-bold">AlvesCode Solutions</span></small>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
/* VARIÁVEIS DE CORES */
.text-navy { color: #001F3F !important; }
.bg-navy { background-color: #001F3F !important; }
.bg-navy-light { background-color: rgba(0, 31, 63, 0.1) !important; }
.bg-red-med { background-color: #C62828 !important; }

/* BORDAS CUSTOMIZADAS EM #001F3F */

/* Borda inferior do Header */
.custom-header-border {
  border-bottom: 3px solid #001F3F !important;
}

/* Borda lateral do Drawer */
.custom-drawer-border {
  border-right: 2px solid #001F3F !important;
}

/* Borda superior do rodapé do Drawer (onde fica a foto) */
.profile-section {
  border-top: 2px solid #001F3F;
}

/* Borda na própria foto de perfil */
.profile-avatar-border {
  border: 2px solid #001F3F;
}

/* Borda superior do Footer principal */
.custom-footer-border {
  border-top: 4px solid #001F3F !important;
}

/* Efeito de transição suave */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
