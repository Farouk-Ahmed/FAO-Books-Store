import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../data/services';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { getLocalizedService } from '../../data/translations';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="services-section">
      
      <!-- Section header introductions -->
      <div class="mb-16 text-center max-w-2xl mx-auto">
        <span class="text-neon-pink font-mono text-xs uppercase block tracking-[0.2em] md:tracking-[0.3em] font-bold select-none">
          {{ lang.t().servicesPre }}
        </span>
        <h2 class="font-display font-medium text-3xl sm:text-4xl text-white mt-3 select-none">
          <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-neon-pink pr-1">{{ lang.t().servicesTitleBold }}</span>
          <span class="font-light text-gray-400 uppercase tracking-widest">{{ lang.t().servicesTitleLight }}</span>
        </h2>
        <p class="text-sm text-gray-400 font-light mt-3 leading-relaxed">
          {{ lang.t().servicesDesc }}
        </p>
      </div>

      <!-- Services bento grid columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start" id="services-bento-grid">
        @for (item of services; track item.id) {
          <div 
            class="p-6 rounded-2xl bg-[#0e0e15]/80 border border-white/[0.04] hover:border-white/10 transition-all flex flex-col justify-between group h-full relative"
            [id]="'service-card-' + item.id"
          >
            <!-- Highlight gradients background -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent rounded-2xl pointer-events-none"></div>

            <div class="text-start">
              
              <div class="flex items-center justify-between mb-5">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-300 group-hover:text-neon-pink group-hover:border-neon-pink/40 transition-colors">
                  <app-lucide-icon [name]="item.iconName" [size]="16"></app-lucide-icon>
                </div>
                
                <span class="px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-mono bg-white/5 text-gray-400 border border-white/[0.06] font-semibold">
                  {{ getLocalized(item).badge }}
                </span>
              </div>

              <h3 class="font-display font-bold text-base text-white tracking-wide group-hover:text-neon-pink transition-colors select-none">
                {{ getLocalized(item).title }}
              </h3>
              
              <p class="text-xs text-gray-400 font-light mt-3 leading-relaxed">
                {{ getLocalized(item).description }}
              </p>

            </div>

            <!-- Card bottom stats metrics -->
            <div class="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-gray-500 uppercase select-none">
              <span>{{ lang.t().serviceCoverage }}</span>
              <span class="text-neon-pink font-semibold glow-text-pink">{{ getLocalized(item).metrics }}</span>
            </div>

          </div>
        }
      </div>

      <!-- Highlight agency Retraining banner -->
      <div 
        class="mt-16 p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#12121a] via-[#09090d] to-[#040406] border border-white/[0.06] relative overflow-hidden text-start"
        id="corporate-licensing-banner"
      >
        <!-- Grids background decoration overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-neon-pink/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl flex flex-col h-full justify-between gap-5">
          <div>
            <span class="inline-flex items-center px-2.5 py-1 rounded bg-neon-pink/15 text-neon-pink text-[9px] font-mono border border-neon-pink/30 uppercase tracking-widest font-semibold block w-fit mb-4">
              {{ lang.t().agencyRetrainingBadge }}
            </span>
            <h3 class="font-display font-bold text-xl md:text-2xl text-white tracking-wide leading-snug uppercase max-w-2xl">
              {{ lang.t().agencyRetrainingTitle }}
            </h3>
            <p class="text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-3.5 max-w-2xl">
              {{ lang.t().agencyRetrainingDesc }}
            </p>
          </div>
        </div>

      </div>

    </section>
  `
})
export class ServicesSectionComponent {
  lang = inject(LanguageService);

  services = SERVICES;

  getLocalized(service: any) {
    return getLocalizedService(service, this.lang.language());
  }
}
