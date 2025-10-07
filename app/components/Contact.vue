<template>
  <section class="py-24 bg-black relative overflow-hidden">
    <!-- Decorative gradient -->
    <div class="absolute inset-0">
      <div class="absolute inset-0" 
           style="background-image: radial-gradient(circle at 0% 50%, rgba(230,168,38,0.08), transparent 50%);">
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="inline-flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
          Localização
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Venha nos Visitar
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Contact Info -->
        <div class="space-y-8">
          <!-- Business Info -->
          <div class="space-y-6">
            <div class="space-y-2">
              <h3 class="text-2xl font-bold text-white">Barbearia Clássica</h3>
              <p class="text-gray-300">Expertise em cortes masculinos desde 2010</p>
            </div>

            <!-- Contact Details -->
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-white">Endereço</p>
                  <p class="text-gray-300">Rua das Barbearias, 123</p>
                  <p class="text-gray-300">Centro - São Paulo, SP</p>
                  <p class="text-gray-300">CEP: 01234-567</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-white">Horário de Funcionamento</p>
                  <p class="text-gray-300">Segunda - Sexta: 9h às 20h</p>
                  <p class="text-gray-300">Sábado: 9h às 18h</p>
                  <p class="text-gray-300">Domingo: Fechado</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-white">Contato</p>
                  <p class="text-gray-300">(11) 99999-9999</p>
                  <p class="text-gray-300">contato@barbearia.com</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="flex gap-4">
              <a href="#" class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                </svg>
              </a>
              <a href="#" class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.98 0a6.9 6.9 0 01-5.03 1.45c-1.97.08-3.86.72-5.43 1.82A11.7 11.7 0 002.1 8.12C1.38 10.21.96 12.36 1 14.55c.03 2.2.51 4.37 1.44 6.39.93 2.02 2.27 3.8 3.97 5.27a11.7 11.7 0 006.63 2.76c2.09.17 4.19-.12 6.15-.87 1.96-.75 3.73-1.95 5.21-3.52 1.48-1.57 2.6-3.45 3.3-5.51.7-2.06.94-4.24.72-6.39-.22-2.14-.89-4.21-1.97-6.09-1.08-1.88-2.54-3.51-4.29-4.81-1.75-1.3-3.74-2.2-5.87-2.63-.47-.09-.93-.16-1.4-.2zM12 0c6.63 0 12 5.37 12 12s-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0zm0 4.8c-3.97 0-7.2 3.23-7.2 7.2s3.23 7.2 7.2 7.2 7.2-3.23 7.2-7.2-3.23-7.2-7.2-7.2zm0 1.2a6 6 0 110 12 6 6 0 010-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Map -->
        <div class="w-full h-[500px] rounded-xl overflow-hidden relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975736096!2d-46.6522!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635786987654!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="filter grayscale contrast-125"
          ></iframe>
          <!-- Map Overlay -->
          <div class="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>