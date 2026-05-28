import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../types';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    <header class="sticky top-0 z-40 bg-transparent select-none" id="main-navigation">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo Signatures -->
          <button (click)="changeTab('home')" class="flex items-center gap-2 cursor-pointer focus:outline-none" id="brand-logo-trigger">
            <div class="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-neon-pink to-neon-purple p-[1.5px] shadow-neon-pink shadow-neon-pink-hover transition-all duration-300">
              <div class="w-full h-full bg-[#0d0d12] rounded-[10px] flex items-center justify-center">
                <app-lucide-icon name="BookMarked" className="text-neon-pink" [size]="15"></app-lucide-icon>
              </div>
            </div>
            <span class="font-display font-bold text-lg tracking-wider">
              <span class="text-neon-pink glow-text-pink">{{ lang.t().brandName }}</span>
              <span class="text-gray-100 uppercase tracking-widest ps-1 font-light text-sm">{{ lang.t().brandMorphic }}</span>
            </span>
          </button>

          <!-- Desktop Navigation Bar Links -->
          <nav class="hidden md:flex items-center gap-8" id="desktop-links">
            <button 
              (click)="changeTab('home')"
              class="text-xs uppercase font-mono tracking-widest transition-colors cursor-pointer {{ activeTab === 'home' ? 'text-neon-pink font-bold glow-text-pink' : 'text-white hover:text-neon-pink' }}"
            >{{ lang.t().navHome }}</button>
            <button 
              (click)="changeTab('products')"
              class="text-xs uppercase font-mono tracking-widest transition-colors cursor-pointer {{ activeTab === 'products' ? 'text-neon-pink font-bold glow-text-pink' : 'text-white hover:text-neon-pink' }}"
            >{{ lang.t().navProducts }}</button>
            <button 
              (click)="changeTab('services')"
              class="text-xs uppercase font-mono tracking-widest transition-colors cursor-pointer {{ activeTab === 'services' ? 'text-neon-pink font-bold glow-text-pink' : 'text-white hover:text-neon-pink' }}"
            >{{ lang.t().navServices }}</button>
            <button 
              (click)="changeTab('contact')"
              class="text-xs uppercase font-mono tracking-widest transition-colors cursor-pointer {{ activeTab === 'contact' ? 'text-neon-pink font-bold glow-text-pink' : 'text-white hover:text-neon-pink' }}"
            >{{ lang.t().navContact }}</button>
          </nav>

          <!-- System utility logs control triggers -->
          <div class="hidden lg:flex items-center gap-4" id="utility-triggers">
            
            <!-- Language Selection Trigger toggles -->
            <button
              (click)="lang.toggleLanguage()"
              class="px-3.5 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-white hover:text-neon-pink hover:border-white/20 transition-all cursor-pointer flex items-center gap-1.5"
              id="lang-toggle-btn"
            >
              <app-lucide-icon name="Info" [size]="12"></app-lucide-icon>
              <span>{{ lang.language() === 'en' ? 'العربية' : 'EN' }}</span>
            </button>

            <!-- Wallet Connectivity button controls -->
            @if (cartService.walletConnected()) {
              <button
                (click)="cartService.disconnectWallet()"
                class="px-4 py-2 rounded-xl bg-[#101925]/80 border border-neon-cyan/40 text-neon-cyan hover:bg-[#152438]/90 font-mono text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2"
                id="sec-disconnect-wallet-btn"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></div>
                <span>{{ lang.t().walletConnected }}</span>
              </button>
            } @else {
              <button
                (click)="triggerWalletModal()"
                class="px-4 py-2 rounded-xl bg-neon-pink/10 border border-neon-pink/30 hover:bg-neon-pink/15 text-neon-pink font-semibold text-xs tracking-wide shadow-neon-pink-hover transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                id="sec-connect-wallet-btn"
              >
                <app-lucide-icon name="Wallet" [size]="13"></app-lucide-icon>
                <span>{{ lang.t().connectWallet }}</span>
              </button>
            }

            <!-- Compact Shopping Basket Counter -->
            <button
              (click)="triggerCartDrawer()"
              class="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] text-white hover:text-neon-pink transition-all flex items-center justify-center relative cursor-pointer"
              id="open-basket-btn"
            >
              <app-lucide-icon name="ShoppingCart" [size]="16"></app-lucide-icon>
              @if (cartService.totalItems() > 0) {
                <span class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-neon-pink border border-[#07070a] flex items-center justify-center font-mono font-bold text-[10px] text-white animate-scale-up z-10 animate-pulse">
                  {{ cartService.totalItems() }}
                </span>
              }
            </button>

          </div>

          <!-- Tablet / Mobile Utility Buttons & Hamburgers -->
          <div class="flex lg:hidden items-center gap-3">
            
            <!-- Language Select Toggle inside Mobile header -->
            <button
              (click)="lang.toggleLanguage()"
              class="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-mono hover:bg-white/[0.06] text-white cursor-pointer"
            >
              {{ lang.language() === 'en' ? 'العربية' : 'EN' }}
            </button>

            <!-- Checkout Basket for Mobile widths -->
            <button
              (click)="triggerCartDrawer()"
              class="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.06] text-white hover:text-neon-pink transition-colors flex items-center justify-center relative cursor-pointer"
            >
              <app-lucide-icon name="ShoppingCart" [size]="15"></app-lucide-icon>
              @if (cartService.totalItems() > 0) {
                <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-pink border border-[#07070a] flex items-center justify-center font-mono text-[9px] text-white">
                  {{ cartService.totalItems() }}
                </span>
              }
            </button>

            <!-- Responsive Hamburgers menu icon -->
            <button
              (click)="toggleMobileMenu()"
              class="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.06] text-white hover:text-neon-pink flex items-center justify-center cursor-pointer"
              id="mobile-hamburger-btn"
            >
              <app-lucide-icon [name]="mobileMenuOpen() ? 'X' : 'Menu'" [size]="16"></app-lucide-icon>
            </button>

          </div>
        </div>
      </div>

      <!-- Live responsive drop mobile navigation panel drawer -->
      @if (mobileMenuOpen()) {
        <nav class="lg:hidden px-4 pt-2 pb-6 border-t border-white/[0.05] bg-[#09090d] space-y-3.5 text-start animate-fade-in" id="mobile-nav-panel">
          <button 
            (click)="changeTab('home'); toggleMobileMenu()"
            class="block w-full text-start px-2 py-1.5 text-sm font-mono tracking-wider {{ activeTab === 'home' ? 'text-neon-pink font-semibold' : 'text-white' }}"
          >{{ lang.t().navHome }}</button>
          <button 
            (click)="changeTab('products'); toggleMobileMenu()"
            class="block w-full text-start px-2 py-1.5 text-sm font-mono tracking-wider {{ activeTab === 'products' ? 'text-neon-pink font-semibold' : 'text-white' }}"
          >{{ lang.t().navProducts }}</button>
          <button 
            (click)="changeTab('services'); toggleMobileMenu()"
            class="block w-full text-start px-2 py-1.5 text-sm font-mono tracking-wider {{ activeTab === 'services' ? 'text-neon-pink font-semibold' : 'text-white' }}"
          >{{ lang.t().navServices }}</button>
          <button 
            (click)="changeTab('contact'); toggleMobileMenu()"
            class="block w-full text-start px-2 py-1.5 text-sm font-mono tracking-wider {{ activeTab === 'contact' ? 'text-neon-pink font-semibold' : 'text-white' }}"
          >{{ lang.t().navContact }}</button>

          <!-- Mobile wallet connector layout indicators -->
          <div class="pt-4 border-t border-white/[0.05] flex flex-col gap-3">
            @if (cartService.walletConnected()) {
              <button
                (click)="cartService.disconnectWallet()"
                class="w-full py-2.5 rounded-xl bg-neon-cyan/5 border border-neon-cyan/25 text-neon-cyan text-xs font-semibold font-mono tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></div>
                <span>{{ lang.t().walletConnected }}</span>
              </button>
            } @else {
              <button
                (click)="triggerWalletModal(); toggleMobileMenu()"
                class="w-full py-2.5 rounded-xl bg-neon-pink/10 border border-neon-pink/25 text-neon-pink text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <app-lucide-icon name="Wallet" [size]="13"></app-lucide-icon>
                <span>{{ lang.t().connectWallet }}</span>
              </button>
            }
          </div>
        </nav>
      }
    </header>
  `
})
export class HeaderComponent {
  @Input() activeTab: Tab = 'home';
  @Output() tabChangeEvent = new EventEmitter<Tab>();
  @Output() walletModalEvent = new EventEmitter<void>();
  @Output() cartDrawerEvent = new EventEmitter<void>();

  lang = inject(LanguageService);
  cartService = inject(CartService);

  mobileMenuOpen = signal<boolean>(false);

  changeTab(tab: Tab) {
    this.tabChangeEvent.emit(tab);
  }

  triggerWalletModal() {
    this.walletModalEvent.emit();
  }

  triggerCartDrawer() {
    this.cartDrawerEvent.emit();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
