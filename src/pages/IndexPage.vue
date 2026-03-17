<template>
  <q-page class="bg-dark-grey q-pa-md">
    <div class="row justify-center q-mb-xl">
      <div class="col-12 col-md-8 text-center">
        <q-avatar size="220px" class="">
          <img src="../../public/icons/FotoPerfil.jpeg">
        </q-avatar>
        <h1 class="text-h3 text-navy text-weight-bolder q-mb-xs">Kayllane</h1>
        <div class="text-h5 text-red-med text-weight-medium q-mb-sm">Enfermagem em Foco</div>
        <p class="text-subtitle1 text-grey-9 italic">"Cuidar é a arte de acolher e transformar vidas."</p>

        <div class="row justify-center q-gutter-sm q-mt-md">
          <q-btn color="navy" label="Ver Publicações" unelevated icon="expand_more" @click="scrollTo('posts')" />
          <q-btn outline color="red-med" label="Currículo Lattes" icon="description" />
        </div>
      </div>
    </div>

    <div class="row justify-center q-gutter-y-xl" id="posts">

      <div class="col-12 col-md-8">
        <q-card flat class="my-card border-navy">
          <q-card-section class="bg-navy text-white">
            <div class="text-h6"><q-icon name="person" class="q-mr-sm" /> Sobre Mim</div>
          </q-card-section>
          <q-card-section class="q-pt-lg bg-white">
            <p class="text-body1">
              Olá! Eu sou a Kayllane, acadêmica de Enfermagem apaixonada pela assistência humanizada.
              Atualmente, estou mergulhando no universo do cuidado, aprendendo que ser enfermeira vai muito além da técnica:
              é sobre ser o suporte do paciente nos momentos de maior vulnerabilidade.
            </p>
            <p class="text-body1">
              Neste espaço, compartilho minha jornada acadêmica, meus aprendizados em estágios e conteúdos que
              podem ajudar outros estudantes e curiosos sobre o mundo da saúde.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <q-card flat class="my-card border-black">
          <q-card-section class="bg-black text-white">
            <div class="text-h6"><q-icon name="monitor_heart" color="red-med" class="q-mr-sm" /> Sinais Vitais: O Termômetro da Vida</div>
          </q-card-section>
          <q-card-section class="bg-white">
            <p class="text-body2">Os sinais vitais (SSVV) são indicadores do estado de saúde e das funções vitais do corpo. Dominá-los é o primeiro passo para uma triagem eficaz.</p>

            <q-markup-table flat bordered class="vitals-table">
              <thead class="bg-grey-2">
              <tr>
                <th class="text-left text-navy">Sinal Vital</th>
                <th class="text-left text-navy">Referência (Adulto)</th>
                <th class="text-left text-navy">Terminologia</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-weight-bold">Frequência Cardíaca (FC)</td>
                <td>60 – 100 bpm</td>
                <td class="text-red-med">Normocardia</td>
              </tr>
              <tr>
                <td class="text-weight-bold">Frequência Respiratória (FR)</td>
                <td>12 – 20 irpm</td>
                <td class="text-red-med">Eupneia</td>
              </tr>
              <tr>
                <td class="text-weight-bold">Temperatura (T)</td>
                <td>36°C – 37,2°C</td>
                <td class="text-red-med">Afebril</td>
              </tr>
              <tr>
                <td class="text-weight-bold">Pressão Arterial (PA)</td>
                <td>120 x 80 mmHg</td>
                <td class="text-red-med">Normotensão</td>
              </tr>
              <tr>
                <td class="text-weight-bold">Saturação (SpO2)</td>
                <td>95% – 100%</td>
                <td class="text-red-med">Normoxemia</td>
              </tr>
              </tbody>
            </q-markup-table>
            <p class="q-mt-md text-caption text-grey-7 italic text-center">
              *Valores podem variar conforme a literatura e condições individuais do paciente.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <q-card flat class="my-card border-red">
          <q-card-section class="bg-red-med text-white">
            <div class="text-h6"><q-icon name="verified_user" class="q-mr-sm" /> Segurança na Medicação</div>
          </q-card-section>
          <q-card-section class="bg-white">
            <div class="text-subtitle1 text-weight-bold text-navy q-mb-md">Os 9 Certos da Enfermagem:</div>
            <div class="row q-col-gutter-sm">
              <div v-for="certo in noveCertos" :key="certo" class="col-6 col-sm-4">
                <q-chip outline color="black" text-color="black" icon="check_circle" class="full-width">
                  {{ certo }}
                </q-chip>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <q-card flat class="my-card border-navy q-mb-xl">
          <q-card-section class="bg-navy text-white">
            <div class="text-h6"><q-icon name="spa" class="q-mr-sm" /> Autocuidado para Estudantes</div>
          </q-card-section>
          <q-card-section class="bg-white">
            <div class="text-subtitle2 q-mb-sm text-red-med text-weight-bold">Quem cuida de quem cuida?</div>
            <p>A rotina da enfermagem é intensa: provas, estágios, plantões e a carga emocional de lidar com doenças. Para ser um bom profissional, você precisa estar bem!</p>

            <q-list bordered separator padding>
              <q-item clickable v-ripple>
                <q-item-section avatar><q-icon color="navy" name="bedtime" /></q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">Sono de Qualidade</q-item-label>
                  <q-item-label caption>Tente manter uma rotina, mesmo com plantões.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar><q-icon color="navy" name="fitness_center" /></q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">Ergonomia</q-item-label>
                  <q-item-label caption>Cuidado com a postura ao realizar procedimentos!</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar><q-icon color="navy" name="psychology" /></q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">Saúde Mental</q-item-label>
                  <q-item-label caption>Não hesite em buscar apoio psicológico ou momentos de lazer.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="footer-custom q-pa-xl text-center">
      <div class="q-gutter-md q-mb-lg">
        <q-btn round color="navy" icon="fa-brands fa-instagram" />
        <q-btn round color="black" icon="fa-brands fa-linkedin" />
        <q-btn round color="red-med" icon="mail" />
      </div>
      <div class="text-grey-8">
        &copy; 2026 - Desenvolvido por <span class="text-weight-bold text-navy">AlvesCode Solutions</span>
        <br>
<!--        <q-badge color="black" label="Nursing Portfolio v2.0" class="q-mt-sm" />-->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

const noveCertos = [
  'Paciente Certo', 'Medicamento Certo', 'Via Certa',
  'Hora Certa', 'Dose Certa', 'Registro Certo',
  'Orientação Certa', 'Forma Certa', 'Resposta Certa'
]

function scrollTo (id) {
  const el = document.getElementById(id)
  const target = getScrollTarget(el)
  const offset = el.offsetTop - 20
  const duration = 500
  setVerticalScrollPosition(target, offset, duration)
}
</script>

<style scoped>
/* CORES PERSONALIZADAS */
.text-navy { color: #001F3F !important; }
.bg-navy { background-color: #001F3F !important; }

.text-red-med { color: #C62828 !important; }
.bg-red-med { background-color: #C62828 !important; }

.bg-dark-grey { background-color: #f4f4f4; }

/* ESTILOS DOS CARDS */
.my-card {
  border-radius: 0px; /* Bordas retas passam mais seriedade */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.my-card:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
}

/* BORDAS LATERAIS PARA IDENTIFICAÇÃO */
.border-navy { border-left: 8px solid #001F3F; border-bottom: 1px solid #ddd; }
.border-black { border-left: 8px solid #000000; border-bottom: 1px solid #ddd; }
.border-red { border-left: 8px solid #C62828; border-bottom: 1px solid #ddd; }

.custom-profile-border {
  border: 6px solid #001F3F;
  padding: 5px;
  background: white;
}

.vitals-table {
  border: 1px solid #eeeeee;
}

.footer-custom {
  background: #e0e0e0;
  margin-top: 50px;
  border-top: 4px solid #001F3F;
}

.italic { font-style: italic; }
</style>z
