<template>
  <section class="py-24 bg-black relative overflow-hidden">
    <!-- Decorative gradient -->
    <div class="absolute inset-0">
      <div class="absolute inset-0" 
           style="background-image: radial-gradient(circle at 50% 0%, rgba(230,168,38,0.08), transparent 50%);">
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="inline-flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
          Nossos Serviços
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Cortes Exclusivos para Cada Estilo
        </h2>
        <p class="text-lg text-gray-300">
          Descubra nosso menu de serviços especializados, criados para realçar sua personalidade
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Classic Cut -->
        <div class="group relative">
          <div class="relative aspect-[3/4] rounded-xl overflow-hidden">
            <img
              src="/images/corte01.jpg"
              alt="Corte Clássico Executivo"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex justify-between items-end">
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Corte Clássico Executivo</h3>
                <p class="text-gray-300 text-sm">Refinado e atemporal</p>
              </div>
              <p class="text-primary font-semibold">R$ 45</p>
            </div>
          </div>
        </div>

        <!-- Modern Style -->
        <div class="group relative">
          <div class="relative aspect-[3/4] rounded-xl overflow-hidden">
            <img
              src="/images/corte02.jpg"
              alt="Degradê Moderno"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex justify-between items-end">
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Degradê Moderno</h3>
                <p class="text-gray-300 text-sm">Estilo contemporâneo</p>
              </div>
              <p class="text-primary font-semibold">R$ 55</p>
            </div>
          </div>
        </div>

        <!-- Premium Package -->
        <div class="group relative">
          <div class="relative aspect-[3/4] rounded-xl overflow-hidden">
            <img
              src="/images/corte03.jpg"
              alt="Barba & Cabelo Premium"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex justify-between items-end">
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Barba & Cabelo Premium</h3>
                <p class="text-gray-300 text-sm">Pacote completo de cuidados</p>
              </div>
              <p class="text-primary font-semibold">R$ 85</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-12 text-center">
        <button class="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-600 text-primary-foreground rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
          Ver Todos os Serviços
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>