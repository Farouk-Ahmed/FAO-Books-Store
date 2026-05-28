import { Component, EventEmitter, Output, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../types';
import { BOOKS } from '../../data/books';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { CartService } from '../services/cart.service';
import { getLocalizedBook } from '../../data/translations';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="catalog-section">
      
      <!-- Catalog Introductions / Headers -->
      <div class="mb-12 text-center max-w-2xl mx-auto">
        <span class="text-neon-pink font-mono text-xs uppercase block tracking-[0.2em] md:tracking-[0.3em] font-bold select-none">
          {{ lang.t().catalogPre }}
        </span>
        <h2 class="font-display font-medium text-3xl sm:text-4xl text-white mt-3 select-none">
          <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-neon-pink pr-1">{{ lang.t().catalogTitleBold }}</span>
          <span class="font-light text-gray-500 uppercase tracking-widest">{{ lang.t().catalogTitleLight }}</span>
        </h2>
        <p class="text-sm text-gray-400 font-light mt-3 leading-relaxed">
          {{ lang.t().catalogDesc }}
        </p>
      </div>

      <!-- Filters Toolbar (Search box and Sorting rules) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-white/[0.05] mb-10 text-start" id="catalog-filters-toolbar">
        
        <!-- Search bar with inline SVG indicator -->
        <div class="lg:col-span-5 relative">
          <app-lucide-icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" [size]="15"></app-lucide-icon>
          <input 
            type="text"
            [placeholder]="lang.t().searchPlaceholder"
            (input)="onSearchInput($event)"
            [value]="searchQuery()"
            class="w-full pl-11 pr-4 py-3 bg-[#11111a] border border-white/[0.06] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink/40 font-light transition-colors"
            id="catalog-search-input"
          />
        </div>

        <!-- Categories Pill selector -->
        <div class="lg:col-span-5 flex flex-wrap items-center gap-2">
          @for (cat of categories; track cat.id) {
            <button
              (click)="activeCategory.set(cat.id)"
              class="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs uppercase font-semibold font-mono border tracking-widest transition-all cursor-pointer {{ activeCategory() === cat.id ? 'bg-neon-pink/15 border-neon-pink/40 text-neon-pink shadow-neon-pink/10' : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:border-white/20' }}"
            >
              {{ cat.label }}
            </button>
          }
        </div>

        <!-- Sorting trigger -->
        <div class="lg:col-span-2 relative min-w-[170px] flex items-center gap-2">
          <span class="text-[10px] font-mono text-gray-500 uppercase font-semibold select-none">{{ lang.t().sortLabel }}</span>
          <select 
            (change)="onSortChange($event)"
            class="flex-1 bg-[#11111a] border border-white/[0.06] text-xs text-gray-300 py-2.5 px-3 rounded-lg focus:outline-none focus:border-neon-pink/30 cursor-pointer text-start font-mono"
            id="catalog-sort-select"
          >
            <option value="popular">{{ lang.t().sortPopular }}</option>
            <option value="low-to-high">{{ lang.t().sortLowHigh }}</option>
            <option value="high-to-low">{{ lang.t().sortHighLow }}</option>
          </select>
        </div>

      </div>

      <!-- MAIN CATALOG GRID LAYOUT -->
      @if (filteredBooks().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start" id="catalog-grid-layout">
          @for (book of filteredBooks(); track book.id) {
            <div 
              class="p-5 rounded-2xl bg-[#0e0e15] border border-white/[0.05] hover:border-white/[0.12] transition-colors flex flex-col justify-between group relative"
              [id]="'book-card-' + book.id"
            >
              @if (book.isBestSeller) {
                <!-- Bestseller indicator ribbon -->
                <span class="absolute top-4 right-4 rlt:right-auto rlt:left-4 px-2 py-0.5 rounded text-[8px] tracking-wider uppercase bg-neon-pink/15 border border-neon-pink/30 text-neon-pink font-bold font-mono">
                  Best Seller
                </span>
              }

              <!-- Book Vector Mockup -->
              <div 
                (click)="onBookClick.emit(book)"
                class="w-full aspect-[4/3] rounded-xl bg-gradient-to-br {{ book.coverGradient }} p-5 flex flex-col justify-between border border-white/5 relative overflow-hidden cursor-pointer shrink-0 transition-transform group-hover:scale-[1.01]"
              >
                <!-- Grid decorative background -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none"></div>
                <div class="absolute top-0 right-0 w-24 h-24 bg-neon-pink/10 rounded-full blur-[40px] pointer-events-none"></div>

                <div class="flex justify-between items-start z-10">
                  <span class="px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-mono bg-white/10 text-white/90 border border-white/10">
                    {{ book.category }}
                  </span>
                </div>

                <div class="z-10 mt-auto">
                  <span class="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-semibold block">{{ getLocalized(book).author }}</span>
                  <h3 class="font-display font-bold text-lg text-white tracking-wide mt-0.5 group-hover:text-neon-pink transition-colors leading-snug line-clamp-2">
                    {{ getLocalized(book).title }}
                  </h3>
                  <span class="text-[9px] font-mono text-neon-pink text-start mt-1 block tracking-widest glow-text-pink">SECURE_REF // V1.0.4</span>
                </div>
              </div>

              <!-- Metadata content info summary -->
              <div class="mt-5 flex-1 flex flex-col justify-between text-start">
                <div>
                  <div class="flex items-center gap-1">
                    @for (star of [1,2,3,4,5]; track star) {
                      <app-lucide-icon 
                        name="Star" 
                        className="{{ star <= Math.floor(book.rating) ? 'text-neon-pink fill-neon-pink' : 'text-gray-600' }}" 
                        [size]="10"
                      ></app-lucide-icon>
                    }
                    <span class="text-[10px] text-gray-400 font-mono font-bold ml-1.5">{{ book.rating }}</span>
                    <span class="text-[9px] text-gray-600 font-mono">({{ book.reviews }})</span>
                  </div>

                  <p class="text-xs text-gray-400 leading-relaxed font-light mt-3 py-1 line-clamp-2">
                    {{ getLocalized(book).subtitle }}
                  </p>

                  <!-- Tags pills inside cards -->
                  <div class="flex flex-wrap gap-1.5 mt-4">
                    @for (tag of book.tags; track tag) {
                      <span class="px-2 py-0.5 rounded bg-white/[0.01] border border-white/[0.04] text-[9px] font-mono text-gray-500">
                        #{{ tag }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Footer Cart controls -->
                <div class="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <div>
                    <span class="text-[8px] text-gray-500 font-mono uppercase block select-none">USD COST</span>
                    <span class="text-sm font-mono font-bold text-white tracking-tight">\${{ book.price }}</span>
                  </div>

                  @if (isInCart(book.id)) {
                    <button
                      (click)="cartService.addToCart(book)"
                      class="px-4 py-2 rounded-xl bg-neon-pink/15 border border-neon-pink/35 text-neon-pink hover:bg-neon-pink/25 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <app-lucide-icon name="Plus" [size]="10"></app-lucide-icon>
                      <span>{{ getCartQty(book.id) }} {{ lang.t().inCart }}</span>
                    </button>
                  } @else {
                    <button
                      (click)="cartService.addToCart(book)"
                      class="px-4 py-2 rounded-xl bg-[#11111a] border border-white/[0.06] hover:border-neon-pink/45 hover:text-neon-pink text-gray-300 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <app-lucide-icon name="ShoppingCart" [size]="12"></app-lucide-icon>
                      <span>{{ lang.t().buyManual }}</span>
                    </button>
                  }
                </div>
              </div>

            </div>
          }
        </div>
      } @else {
        <!-- Fallback state if criteria filters returns zero length -->
        <div class="py-24 text-center border border-dashed border-white/[0.05] rounded-3xl" id="no-products-fallback">
          <app-lucide-icon name="Info" className="text-gray-600 mx-auto mb-4" [size]="32"></app-lucide-icon>
          <h3 class="font-display font-semibold text-lg text-white lowercase tracking-wide">{{ lang.t().noManualsFound }}</h3>
          <p class="text-xs text-gray-500 mt-1 max-w-sm mx-auto leading-relaxed">{{ lang.t().noManualsSub }}</p>
          <button
            (click)="resetFilters()"
            class="mt-6 px-5 py-2 rounded-xl bg-neon-pink/10 border border-neon-pink/25 hover:bg-neon-pink/15 text-xs font-mono font-semibold text-neon-pink cursor-pointer"
          >
            {{ lang.t().resetFilters }}
          </button>
        </div>
      }

    </section>
  `
})
export class ProductSectionComponent {
  @Output() onBookClick = new EventEmitter<Book>();

  lang = inject(LanguageService);
  cartService = inject(CartService);

  readonly Math = Math;

  // Search state variables
  searchQuery = signal<string>('');
  activeCategory = signal<string>('all');
  sortBy = signal<string>('popular');

  // Categories mapping lists
  get categories() {
    return [
      { id: 'all', label: this.lang.isRtl() ? 'الكل' : 'All Manuals' },
      { id: 'frontend', label: this.lang.isRtl() ? 'واجهات' : 'Frontend' },
      { id: 'backend', label: this.lang.isRtl() ? 'خوادم' : 'Backend' },
      { id: 'systems', label: this.lang.isRtl() ? 'أنظمة' : 'Systems' },
      { id: 'ai', label: this.lang.isRtl() ? 'ذكاء' : 'AI' },
      { id: 'architecture', label: this.lang.isRtl() ? 'معماريات' : 'Architecture' }
    ];
  }

  // Reactive computed books inventory lists
  filteredBooks = computed(() => {
    let list = [...BOOKS];

    // Filter by category
    const category = this.activeCategory();
    if (category !== 'all') {
      list = list.filter(b => b.category === category);
    }

    // Filter by search text criteria
    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      list = list.filter(b => {
        const localized = getLocalizedBook(b, this.lang.language());
        return (
          localized.title.toLowerCase().includes(query) ||
          localized.subtitle.toLowerCase().includes(query) ||
          localized.author.toLowerCase().includes(query) ||
          localized.tags.some(t => t.toLowerCase().includes(query))
        );
      });
    }

    // Sorting conditions
    const sort = this.sortBy();
    if (sort === 'low-to-high') {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-to-low') {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === 'popular') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  });

  getLocalized(book: Book) {
    return getLocalizedBook(book, this.lang.language());
  }

  isInCart(bookId: string): boolean {
    return this.cartService.cart().some(item => item.book.id === bookId);
  }

  getCartQty(bookId: string): number {
    const item = this.cartService.cart().find(item => item.book.id === bookId);
    return item ? item.quantity : 0;
  }

  resetFilters() {
    this.searchQuery.set('');
    this.activeCategory.set('all');
  }

  onSearchInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  onSortChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.sortBy.set(val);
  }
}
