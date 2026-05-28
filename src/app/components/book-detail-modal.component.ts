import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, CartItem } from '../../types';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { CartService } from '../services/cart.service';
import { getLocalizedBook } from '../../data/translations';

@Component({
  selector: 'app-book-detail-modal',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    @if (book) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in" 
        id="book-detail-modal-bg"
        (click)="onBgClick($event)"
      >
        <div 
          class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0d14] border border-white/[0.08] rounded-2xl shadow-2xl p-6 md:p-8 text-start scrollbar-thin scrollbar-thumb-white/10"
          id="book-detail-modal"
        >
          <!-- Absolute close button -->
          <button
            (click)="close()"
            class="absolute top-5 right-5 rlt:right-auto rlt:left-5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] text-gray-400 hover:text-white transition-colors cursor-pointer z-20"
            id="close-modal-btn"
          >
            <app-lucide-icon name="X" [size]="16"></app-lucide-icon>
          </button>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
            
            <!-- Left Visual Book Card Cover Side -->
            <div class="md:col-span-5 flex flex-col items-center">
              
              <div class="w-full aspect-[3/4] rounded-xl bg-gradient-to-br {{ book.coverGradient }} p-6 flex flex-col justify-between border border-white/[0.08] shadow-2xl relative overflow-hidden text-start">
                <!-- Grid overlay -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
                <div class="absolute top-0 right-0 w-36 h-36 bg-neon-pink/10 rounded-full blur-[60px]"></div>
                
                <div class="flex justify-between items-start z-10 w-full">
                  <span class="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-widest bg-white/10 text-white/90 border border-white/10">
                    {{ book.category }}
                  </span>
                </div>

                <div class="z-10 mt-auto">
                  <span class="text-[11px] font-mono text-gray-400 uppercase tracking-widest font-semibold block">{{ localizedBook.author }}</span>
                  <h2 class="font-display font-bold text-xl sm:text-2xl text-white tracking-wide mt-1 leading-snug">
                    {{ localizedBook.title }}
                  </h2>
                  <p class="text-xs text-neon-pink font-mono tracking-wide mt-1.5 glow-text-pink">
                    {{ lang.t().activeEdition }}
                  </p>
                </div>
              </div>

              <!-- Price section below -->
              <div class="w-full mt-6 p-4 rounded-xl bg-[#14141e]/70 border border-white/[0.05] flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-gray-500 font-mono uppercase block">{{ lang.t().standardCost }}</span>
                  <span class="text-xl font-mono font-bold text-white tracking-tight">
                    \${{ book.price.toFixed(2) }}
                  </span>
                </div>

                @if (qty > 0) {
                  <button
                    (click)="addToCart()"
                    class="px-5 py-2.5 rounded-xl bg-neon-pink/15 border border-neon-pink/40 text-neon-pink hover:bg-neon-pink/20 font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <app-lucide-icon name="Plus" [size]="12"></app-lucide-icon>
                    <span>{{ qty }} {{ lang.isRtl() ? 'في السلة' : 'Added' }}</span>
                  </button>
                } @else {
                  <button
                    (click)="addToCart()"
                    class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 font-semibold text-xs transition-opacity cursor-pointer shadow-neon-pink flex items-center gap-1.5"
                  >
                    <app-lucide-icon name="ShoppingCart" [size]="14"></app-lucide-icon>
                    <span>{{ lang.isRtl() ? 'شراء المرجع' : 'Buy Manual' }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Right Information Synopsis & Blueprint features Side -->
            <div class="md:col-span-7 flex flex-col justify-between text-start">
              <div>
                <div class="flex items-center gap-2.5 mb-2.5">
                  <span class="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-widest bg-neon-pink/15 text-neon-pink border border-neon-pink/20">
                    {{ lang.isRtl() ? 'فهرس المراجع التقنية' : 'Tech Reference Index' }}
                  </span>
                  <span class="text-xs text-gray-500 font-mono">
                    {{ lang.isRtl() ? 'سنة النشر' : 'Publish Year' }} {{ book.publishYear }}
                  </span>
                </div>

                <h1 class="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide leading-tight">
                  {{ localizedBook.title }}
                </h1>
                
                <span class="text-xs font-mono text-gray-400 mt-1 block">
                  {{ lang.isRtl() ? 'تأليف المطور' : 'Authored by' }} <span class="text-neon-pink">{{ localizedBook.author }}</span>
                </span>

                <!-- Stats Strip -->
                <div class="flex flex-wrap items-center gap-4 py-4 my-5 border-y border-white/[0.04]">
                  <div>
                    <span class="text-gray-500 block text-[9px] uppercase">{{ lang.t().reviewRatingsKey }}</span>
                    <div class="flex items-center gap-1 mt-0.5">
                      <app-lucide-icon name="Star" className="text-neon-pink fill-neon-pink text-start" [size]="13"></app-lucide-icon>
                      <span class="text-white font-bold">{{ book.rating }}</span>
                      <span class="text-gray-500 text-[10px]">({{ book.reviews }} {{ lang.isRtl() ? 'تقييماً' : 'checks' }})</span>
                    </div>
                  </div>
                  
                  <div class="w-[1px] bg-white/[0.05] self-stretch"></div>
                  
                  <div>
                    <span class="text-gray-500 block text-[9px] uppercase">{{ lang.t().manualSizeKey }}</span>
                    <span class="text-white font-semibold mt-0.5 block">{{ book.pages }} {{ lang.isRtl() ? 'صفحة' : 'pages' }}</span>
                  </div>
                  
                  <div class="w-[1px] bg-white/[0.05] self-stretch"></div>
                  
                  <div>
                    <span class="text-gray-500 block text-[9px] uppercase">{{ lang.t().routingNodeKey }}</span>
                    <span class="text-neon-cyan font-bold mt-0.5 block">0x_SECURE_HASH</span>
                  </div>
                </div>

                <!-- Detailed Synopsis -->
                <div>
                  <span class="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block mb-2">{{ lang.t().technicalSynopsisKey }}</span>
                  <p class="text-sm text-gray-400 font-light leading-relaxed whitespace-pre-line text-start">
                    {{ localizedBook.synopsis }}
                  </p>
                </div>

                <!-- Key Syllabus Blueprints -->
                <div class="mt-6">
                  <span class="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block mb-3">{{ lang.t().keySyllabusKey }}</span>
                  <ul class="space-y-2.5">
                    @for (feat of localizedBook.features; track feat) {
                      <li class="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-relaxed text-start">
                        <app-lucide-icon name="CheckCircle" className="text-neon-pink shrink-0 mt-0.5" [size]="14"></app-lucide-icon>
                        <span>{{ feat }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>

              <!-- Close visual helper -->
              <div class="mt-8 pt-4 border-t border-white/[0.04] text-start">
                <span class="text-[10px] font-mono text-gray-500 block uppercase">{{ lang.t().checksumCertificateKey }}</span>
                <span class="text-[9px] font-mono text-gray-400 font-light break-all block mt-0.5">
                  SHA-256 Checksum: f6b59ac2b36712b7a8d5f30cb00edba9e5cb18a4d79d6b2c4e5f7a83d34bacc8
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    }
  `
})
export class BookDetailModalComponent {
  @Input() book: Book | null = null;
  @Output() closeEvent = new EventEmitter<void>();

  lang = inject(LanguageService);
  cartService = inject(CartService);

  get localizedBook() {
    if (!this.book) return {} as Book;
    return getLocalizedBook(this.book, this.lang.language());
  }

  get qty() {
    if (!this.book) return 0;
    const item = this.cartService.cart().find(i => i.book.id === this.book!.id);
    return item ? item.quantity : 0;
  }

  close() {
    this.closeEvent.emit();
  }

  onBgClick(event: MouseEvent) {
    if ((event.target as HTMLElement).id === 'book-detail-modal-bg') {
      this.close();
    }
  }

  addToCart() {
    if (this.book) {
      this.cartService.addToCart(this.book);
    }
  }
}
