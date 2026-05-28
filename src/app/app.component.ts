import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab, Book } from '../types';
import { BOOKS } from '../data/books';
import { LanguageService } from './services/language.service';
import { CartService } from './services/cart.service';

// Subcomponents imports
import { LucideIconComponent } from './components/lucide-icon.component';
import { HeaderComponent } from './components/header.component';
import { HomeHeroComponent } from './components/home-hero.component';
import { ProductSectionComponent } from './components/product-section.component';
import { ServicesSectionComponent } from './components/services-section.component';
import { ContactSectionComponent } from './components/contact-section.component';
import { BookDetailModalComponent } from './components/book-detail-modal.component';
import { CartDrawerComponent } from './components/cart-drawer.component';
import { WalletModalComponent } from './components/wallet-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    LucideIconComponent, 
    HeaderComponent, 
    HomeHeroComponent, 
    ProductSectionComponent, 
    ServicesSectionComponent, 
    ContactSectionComponent,
    BookDetailModalComponent,
    CartDrawerComponent,
    WalletModalComponent
  ],
  template: `
    <div class="min-h-screen bg-[#07070a] text-gray-100 flex flex-col justify-between selection:bg-neon-pink selection:text-white" [dir]="lang.isRtl() ? 'rtl' : 'ltr'" [class.font-arabic]="lang.isRtl()">
      
      <!-- Sticky Navigation Header component -->
      <app-header 
        [activeTab]="activeTab()" 
        (tabChangeEvent)="setActiveTab($event)"
        (walletModalEvent)="openWalletModal()"
        (cartDrawerEvent)="openCartDrawer()"
      ></app-header>

      <!-- Main Contents Renderers based on active console tab -->
      <main class="flex-1">
        
        <!-- Tab 1: Home View Console Layout -->
        @if (activeTab() === 'home') {
          <div class="animate-fade-in" id="view-layer-home">
            <app-home-hero
              [featuredBook]="featuredBook"
              (onExploreClick)="setActiveTab('products')"
              (onSubmitDraftClick)="setActiveTab('contact')"
              (onBookClick)="setSelectedBook($event)"
            ></app-home-hero>
            <app-product-section (onBookClick)="setSelectedBook($event)"></app-product-section>
            <app-services-section></app-services-section>
            <app-contact-section></app-contact-section>
          </div>
        }

        <!-- Tab 2: Catalog Books View -->
        @if (activeTab() === 'products') {
          <div class="animate-fade-in" id="view-layer-products">
            <app-product-section (onBookClick)="setSelectedBook($event)"></app-product-section>
          </div>
        }

        <!-- Tab 3: Detailed Services View -->
        @if (activeTab() === 'services') {
          <div class="animate-fade-in" id="view-layer-services">
            <app-services-section></app-services-section>
          </div>
        }

        <!-- Tab 4: Connected Terminals / Contact -->
        @if (activeTab() === 'contact') {
          <div class="animate-fade-in" id="view-layer-contact">
            <app-contact-section></app-contact-section>
          </div>
        }

      </main>

      <!-- Grid Footer with Cyber Decors -->
      <footer class="bg-[#040406] border-t border-white/[0.05] py-12 md:py-16 text-start relative select-none" id="main-footer">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
            
            <!-- Column 1: Intro info -->
            <div class="md:col-span-5 space-y-4">
              <div class="flex items-center gap-2" id="footer-brand">
                <div class="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple p-[1.5px] shadow-neon-pink">
                  <div class="w-full h-full bg-[#0d0d12] rounded-md flex items-center justify-center">
                    <app-lucide-icon name="BookMarked" className="text-neon-pink" [size]="14"></app-lucide-icon>
                  </div>
                </div>
                <span class="font-display font-bold text-base tracking-wider">
                  <span class="text-neon-pink glow-text-pink">{{ lang.t().brandName }}</span>
                  <span class="text-gray-100 uppercase tracking-widest ps-1 font-light text-sm">{{ lang.t().brandMorphic }}</span>
                </span>
              </div>
              
              <p class="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
                {{ lang.isRtl() 
                  ? 'سوق للمؤلفين التقنيين والمهندسين الذين يقرأون لهم. كل كتاب يأتي ببيئة تشغيل أكواد حيّة داخل المتصفح.' 
                  : 'A marketplace for technical authors and the engineers who read them. Every book comes with a live code sandbox in the browser.'}}
              </p>
              
              <span class="text-[10px] font-mono text-gray-600 block pt-1">
                {{ lang.isRtl() ? '© ٢٠٢٦ FAO Books. جميع الحقوق محفوظة.' : '© 2026 FAO Books. All rights reserved.' }}
              </span>
            </div>

            <!-- Column 2: Gateway items -->
            <div class="md:col-span-3 space-y-4">
              <h4 class="text-[11px] uppercase tracking-widest font-mono text-white font-semibold">
                {{ lang.isRtl() ? 'عقد وهياكل الوصول' : 'Gateway Nodes' }}
              </h4>
              <ul class="space-y-2.5 text-xs text-gray-500 font-mono">
                <li>
                  <button (click)="setActiveTab('home')" class="hover:text-neon-pink transition-colors cursor-pointer text-start">
                    {{ lang.isRtl() ? 'بوابة التحكم الرئيسية' : 'Home Console' }}
                  </button>
                </li>
                <li>
                  <button (click)="setActiveTab('products')" class="hover:text-neon-pink transition-colors cursor-pointer text-start">
                    {{ lang.isRtl() ? 'فهرس المراجع والكتب' : 'Products Inventory' }}
                  </button>
                </li>
                <li>
                  <button (click)="setActiveTab('services')" class="hover:text-neon-pink transition-colors cursor-pointer text-start">
                    {{ lang.isRtl() ? 'خدمات تدريب المطورين' : 'Services Retraining' }}
                  </button>
                </li>
                <li>
                  <button (click)="setActiveTab('contact')" class="hover:text-neon-pink transition-colors cursor-pointer text-start">
                    {{ lang.isRtl() ? 'نموذج للتواصل الآمن' : 'Secure Contact Form' }}
                  </button>
                </li>
              </ul>
            </div>

            <!-- Column 3: Network indicators -->
            <div class="md:col-span-4 space-y-4">
              <h4 class="text-[11px] uppercase tracking-widest font-mono text-white font-semibold flex items-center gap-1.5">
                <app-lucide-icon name="Sparkles" className="text-neon-pink" [size]="11"></app-lucide-icon>
                <span>{{ lang.isRtl() ? 'شبكة التوزيع الرقمي لـ Web3' : 'Web3 Digital Release Network' }}</span>
              </h4>
              
              <p class="text-xs text-gray-500 leading-relaxed font-light">
                {{ lang.isRtl() 
                  ? 'اربط MetaMask أو Coinbase لتبقى مشترياتك مرتبطة بمحفظتك، واطلب إثبات ملكية موقّعاً وقتما تشاء.' 
                  : 'Connect MetaMask or Coinbase to keep your purchases tied to your wallet, and claim a signed proof of ownership when you want it.' }}
              </p>
              
              <div class="pt-2">
                <span class="inline-flex items-center px-2.5 py-1 rounded bg-[#0b0b10] text-[#06b6d4] text-[9px] font-mono border border-white/[0.04]">
                  {{ lang.isRtl() ? 'حالة عقدة الشبكة: ● متصل وآمن' : 'Ledger Node Status: ○ ONLINE & SECURE' }}
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <!-- Floating Drawer Overlays and Dialogs -->
      <app-wallet-modal 
        [isOpen]="walletModalOpen()" 
        (closeEvent)="closeWalletModal()"
      ></app-wallet-modal>

      <app-cart-drawer 
        [isOpen]="cartDrawerOpen()" 
        (closeEvent)="closeCartDrawer()"
        (connectWalletEvent)="openWalletModal()"
      ></app-cart-drawer>

      <app-book-detail-modal 
        [book]="selectedBook()" 
        (closeEvent)="closeSelectedBook()"
      ></app-book-detail-modal>

    </div>
  `
})
export class AppComponent {
  lang = inject(LanguageService);
  cartService = inject(CartService);

  activeTab = signal<Tab>('home');
  walletModalOpen = signal<boolean>(false);
  cartDrawerOpen = signal<boolean>(false);
  selectedBook = signal<Book | null>(null);

  // Set alex design book 'system-design' as our primary landing feature
  get featuredBook(): Book {
    return BOOKS.find(b => b.id === 'system-design') || BOOKS[0];
  }

  setActiveTab(tab: Tab) {
    this.activeTab.set(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openWalletModal() {
    this.walletModalOpen.set(true);
  }

  closeWalletModal() {
    this.walletModalOpen.set(false);
  }

  openCartDrawer() {
    this.cartDrawerOpen.set(true);
  }

  closeCartDrawer() {
    this.cartDrawerOpen.set(false);
  }

  setSelectedBook(book: Book | null) {
    this.selectedBook.set(book);
  }

  closeSelectedBook() {
    this.selectedBook.set(null);
  }
}
