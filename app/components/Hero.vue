<template>
  <section class="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-primary/30" 
         style="background: radial-gradient(circle at top right, rgba(230,168,38,0.15), rgba(11,11,11,0.95))">
      <!-- Decorative elements -->
      <div class="absolute inset-0" 
           style="background-image: radial-gradient(circle at 25% 25%, rgba(230,168,38,0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(230,168,38,0.05) 0%, transparent 50%);">
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center py-16">
        <!-- Left Column - Text Content -->
        <div class="z-10 w-full space-y-8 text-center lg:text-left order-1 lg:order-none">
          <!-- Badge and Headline -->
          <div class="space-y-4">
            <span class="inline-flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              Estilo & Tradição
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Arte da Barbearia Clássica
            </h1>
          </div>

          <!-- Mobile Image - Shows between headline and description -->
          <div class="block lg:hidden w-full max-w-md mx-auto">
            <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
              <img
                src="/images/image-hero.jpg"
                alt="Barbeiro profissional realizando corte"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 border border-white/10 rounded-2xl z-20"></div>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-300 leading-relaxed">
            Transforme sua aparência com um atendimento personalizado em um ambiente sofisticado. 
            Especialistas em cortes clássicos e modernos.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <ButtonPrimary @click="handleAgendamento">
              Agendar Horário
            </ButtonPrimary>
            <ButtonOutline @click="handleServicos">
              Nossos Serviços
            </ButtonOutline>
          </div>

          <!-- Social Proof -->
          <div class="pt-8 border-t border-white/10">
            <div class="flex items-center justify-center lg:justify-start gap-8">
              <div>
                <p class="text-3xl font-bold text-white">4.9/5</p>
                <p class="text-gray-400">Avaliação dos clientes</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-white">1.2k+</p>
                <p class="text-gray-400">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Image Column -->
        <div class="hidden lg:block w-full max-w-lg lg:max-w-none mx-auto">
          <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
            
            <!-- Image -->
            <img
              src="/images/image-hero.jpg"
              alt="Barbeiro profissional realizando corte"
              class="w-full h-full object-cover object-center"
            />

            <!-- Decorative border -->
            <div class="absolute inset-0 border border-white/10 rounded-2xl z-20"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/ui/ButtonPrimary.vue'
import ButtonOutline from '~/components/ui/ButtonOutline.vue'
import { onMounted } from 'vue'

const handleAgendamento = () => {
  // TODO: Implementar navegação para página de agendamento
  console.log('Navegando para agendamento...')
}

const handleServicos = () => {
  // TODO: Implementar navegação para página de serviços
  console.log('Navegando para serviços...')
}

// Preload da imagem para melhor performance
onMounted(() => {
  const img = new Image()
  img.src = '/images/image-hero.jpg'
})
</script>