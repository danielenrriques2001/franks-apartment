import {descriptionContent, footerContent, heroContent} from '../data/data'


export const languages = {
    de: {name: 'Deutsch', symbol: 'de'},
    en: {name: 'English', symbol: 'en'},
    
  };
  
  export const defaultLang = 'de';
  
  export const ui = {
    de: {
      'nav.home': 'Home',
      'nav.apartment': 'Apartment',
      'nav.prenzlauerBerg': 'Prenzlauer Berg',
      'nav.kontakt': 'Kontakt',
      'hero': heroContent['de'],
      'description': descriptionContent['de'],
      'footer': footerContent['de'],
      
    },
    en: {
      'nav.kontakt': 'Contact',
      'hero':  heroContent['en'],
      'description': descriptionContent['en'],
      'footer': footerContent['en']
    },
  } as const;