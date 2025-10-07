<template>
  <section class="py-24 bg-black relative overflow-hidden">
    <!-- Decorative gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-black to-black/95">
      <div class="absolute inset-0" 
           style="background-image: radial-gradient(circle at 15% 50%, rgba(230,168,38,0.08), transparent 50%),
                                  radial-gradient(circle at 85% 50%, rgba(230,168,38,0.05), transparent 50%);">
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <span class="inline-flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              Nossa História
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Tradição em Cuidados Masculinos
            </h2>
            <div class="space-y-6 text-gray-300">
              <p class="text-lg leading-relaxed">
                Desde 2010, nossa barbearia tem sido um refúgio para homens que buscam não apenas um corte de cabelo, 
                mas uma experiência completa de cuidado pessoal.
              </p>
              <p class="text-lg leading-relaxed">
                Combinamos técnicas tradicionais com tendências modernas, criando um ambiente onde o clássico encontra 
                o contemporâneo. Nossa equipe de mestres barbeiros é especializada em realçar a personalidade de cada 
                cliente através de cortes precisos e acabamentos impecáveis.
              </p>
              <p class="text-lg leading-relaxed">
                Mais que uma barbearia, somos um espaço de transformação e bem-estar, onde cada visita é uma 
                oportunidade de renovação.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-8 pt-4">
            <div class="flex items-center gap-3">
              <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-white">15+</p>
                <p class="text-gray-400">Anos de Experiência</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-white">100%</p>
                <p class="text-gray-400">Satisfação Garantida</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Image -->
        <div class="relative">
          <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10"></div>
            
            <!-- Image -->
            <img
              src="/images/entrada.jpg"
              alt="Fachada da nossa barbearia"
              class="w-full h-full object-cover object-center"
            />

            <!-- Decorative elements -->
            <div class="absolute inset-0 border border-white/10 rounded-2xl z-20"></div>
            <div class="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent opacity-50 rounded-2xl z-0"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>