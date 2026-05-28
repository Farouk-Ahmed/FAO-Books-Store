import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Language, TranslationSchema } from '../../data/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');

  readonly language = this.currentLanguage.asReadonly();

  readonly t = computed<TranslationSchema>(() => TRANSLATIONS[this.currentLanguage()]);
  
  readonly isRtl = computed<boolean>(() => this.currentLanguage() === 'ar');

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    // Dynamic html dir management
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLanguage() === 'en' ? 'ar' : 'en');
  }

  constructor() {
    // Initial sync
    this.setLanguage('en');
  }
}
