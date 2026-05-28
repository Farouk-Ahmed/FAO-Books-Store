import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideIconComponent],
  template: `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="contact-us-section">
      
      <!-- Section Headers -->
      <div class="mb-16 text-center max-w-2xl mx-auto">
        <span class="text-neon-pink font-mono text-xs uppercase block tracking-[0.2em] md:tracking-[0.3em] font-bold select-none">
          {{ lang.t().contactPre }}
        </span>
        <h2 class="font-display font-medium text-3xl sm:text-4xl text-white mt-3 select-none">
          <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-neon-pink pr-1">{{ lang.t().contactTitleBold }}</span>
          <span class="font-light text-gray-400 uppercase tracking-widest">{{ lang.t().contactTitleLight }}</span>
        </h2>
        <p class="text-sm text-gray-400 font-light mt-3 leading-relaxed">
          {{ lang.t().contactDesc }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-start">
        
        <!-- LEFT PANEL: Terminal Comm Panel -->
        <div class="lg:col-span-5 space-y-6" id="contact-terminals-panel">
          
          <div class="px-5 py-4 rounded-xl bg-[#09090e] border border-white/[0.04]">
            <span class="text-[10px] font-mono text-gray-500 uppercase block select-none mb-3">
              ✦ {{ lang.t().contactTerminal }}
            </span>
            
            <div class="space-y-4">
              <!-- Grid line 1: Email -->
              <div>
                <span class="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">{{ lang.t().contactEmailLabel }}</span>
                <span class="text-xs text-white font-mono mt-1 block hover:text-neon-pink transition-colors cursor-pointer select-all">
                  partner-node&#64;neonmorphic.io
                </span>
              </div>

              <!-- Grid line 2: Physical HQ -->
              <div>
                <span class="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">{{ lang.t().contactAddressLabel }}</span>
                <p class="text-xs text-gray-300 font-light leading-relaxed mt-1 whitespace-pre-line">
                  {{ lang.t().contactAddressValue }}
                </p>
              </div>

              <!-- Grid line 3: Hours -->
              <div>
                <span class="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">{{ lang.t().contactHoursLabel }}</span>
                <p class="text-xs text-gray-400 font-mono leading-relaxed mt-1 whitespace-pre-line">
                  {{ lang.t().contactHoursValue }}
                </p>
              </div>
            </div>
          </div>

          <!-- Sandbox draft active application banner info -->
          <div class="p-5 rounded-xl bg-gradient-to-br from-[#12121a] to-transparent border border-white/[0.05] relative overflow-hidden">
            <app-lucide-icon name="Sparkles" className="absolute -top-3 -right-3 text-neon-pink/10" [size]="90"></app-lucide-icon>
            
            <span class="px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-mono bg-neon-pink/10 text-neon-pink border border-neon-pink/20 font-bold block w-fit mb-3 select-none">
              {{ lang.t().authorApplicationTitle }}
            </span>
            <p class="text-xs text-gray-400 leading-relaxed font-light">
              {{ lang.t().authorApplicationDesc }}
            </p>
          </div>

        </div>

        <!-- RIGHT PANEL: Transmitter Transmission Form -->
        <div class="lg:col-span-7" id="contact-transmitter-form">
          <form (submit)="handleSubmit($event)" class="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0d0d14]/80 border border-white/[0.05]">
            
            <!-- Grid Row 1: Name & Coordinate email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 block font-semibold">
                  {{ lang.t().fieldIdLabel }}
                </label>
                <input 
                  type="text"
                  required
                  name="name"
                  [(ngModel)]="formData.name"
                  [placeholder]="lang.t().fieldNamePlaceholder"
                  class="w-full px-4 py-3 bg-[#11111a] border border-white/[0.06] focus:border-neon-pink/30 rounded-xl text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label class="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 block font-semibold">
                  {{ lang.t().fieldCoordsLabel }}
                </label>
                <input 
                  type="email"
                  required
                  name="email"
                  [(ngModel)]="formData.email"
                  [placeholder]="lang.t().fieldCoordsPlaceholder"
                  class="w-full px-4 py-3 bg-[#11111a] border border-white/[0.06] focus:border-neon-pink/30 rounded-xl text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <!-- Grid Row 2: Subject Dropdowns -->
            <div>
              <label class="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 block font-semibold">
                {{ lang.t().fieldSubjectLabel }}
              </label>
              <select 
                name="subject"
                [(ngModel)]="formData.subject"
                class="w-full px-4 py-3 bg-[#11111a] border border-white/[0.06] focus:border-neon-pink/30 rounded-xl text-xs text-gray-300 focus:outline-none transition-colors"
              >
                <option value="licensing">{{ lang.isRtl() ? 'رخص وتدريب المؤسسات' : 'Corporate Team Licensing' }}</option>
                <option value="author">{{ lang.isRtl() ? 'تقديم مسودات التأليف' : 'Author Draft Proposal' }}</option>
                <option value="delivery">{{ lang.isRtl() ? 'تتبع طلبات التسليم الورقي' : 'Printed Book Log' }}</option>
                <option value="other">{{ lang.isRtl() ? 'طلبات اتصالات عامة أخرى' : 'Other General Inquires' }}</option>
              </select>
            </div>

            <!-- Grid Row 3: Message -->
            <div>
              <label class="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 block font-semibold">
                {{ lang.t().fieldMessageLabel }}
              </label>
              <textarea 
                required
                rows="4"
                name="message"
                [(ngModel)]="formData.message"
                [placeholder]="lang.t().fieldMessagePlaceholder"
                class="w-full px-4 py-3 bg-[#11111a] border border-white/[0.06] focus:border-neon-pink/30 rounded-xl text-xs text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Transmit trigger button -->
            <div class="pt-2">
              <button
                type="submit"
                [disabled]="isSubmitting()"
                class="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-neon-pink shadow-neon-pink-hover flex items-center justify-center gap-1.5"
                id="submit-contact-btn"
              >
                @if (isSubmitting()) {
                  <app-lucide-icon name="Cpu" className="animate-spin text-white" [size]="13"></app-lucide-icon>
                  <span>{{ lang.t().btnSyncing }}</span>
                } @else {
                  <app-lucide-icon name="Send" [size]="12"></app-lucide-icon>
                  <span>{{ lang.t().btnTransmit }}</span>
                }
              </button>
            </div>

          </form>
        </div>

      </div>

      <!-- SUCCESS ENCRYPTED OVERLAY MODAL -->
      @if (showSuccessModal()) {
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" id="contact-success-overlay">
          <div class="absolute inset-0" (click)="dismissSuccess()"></div>

          <div 
            class="relative w-full max-w-sm bg-[#0d0d12] border border-neon-pink/30 rounded-2xl shadow-neon-pink/10 shadow-2xl p-6 text-center animate-scale-up z-10"
            id="success-transmission-box"
          >
            <div class="w-12 h-12 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mx-auto mb-5">
              <app-lucide-icon name="CheckCircle" className="text-neon-pink" [size]="20"></app-lucide-icon>
            </div>

            <h3 class="font-display font-medium text-lg text-white uppercase tracking-wider select-none">
              {{ lang.t().successTitle }}
            </h3>
            
            <p class="text-xs text-gray-400 font-light mt-3 leading-relaxed">
              {{ lang.t().successDesc }}
            </p>

            <button
              (click)="dismissSuccess()"
              class="mt-6 w-full py-2.5 rounded-xl bg-transparent border-2 border-neon-pink text-white text-xs font-semibold uppercase hover:bg-neon-pink/10 shadow-neon-pink duration-300 transition-all cursor-pointer"
              id="close-success-box-btn"
            >
              {{ lang.t().successBtnClose }}
            </button>
          </div>
        </div>
      }

    </section>
  `
})
export class ContactSectionComponent {
  lang = inject(LanguageService);

  formData = {
    name: '',
    email: '',
    subject: 'licensing',
    message: ''
  };

  isSubmitting = signal<boolean>(false);
  showSuccessModal = signal<boolean>(false);

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);

    // Simulate node syncing delay
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.showSuccessModal.set(true);
      // Reset variables
      this.formData = {
        name: '',
        email: '',
        subject: 'licensing',
        message: ''
      };
    }, 1500);
  }

  dismissSuccess() {
    this.showSuccessModal.set(false);
  }
}
