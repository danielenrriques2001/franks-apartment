import {descriptionContent, footerContent} from '../data/data'


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
      'hero': {
        title: `Dein <span>Zuhause</span> in unserem Kiez!`,
        subtitle: null,
        button: 'Verfügbarkeit prüfen',
      },
      'description': descriptionContent['de'],
      'footer': footerContent['de']
    },
    en: {
      'nav.kontakt': 'Contact',
      'hero': {
        title: `Your <span>Home</span> in our Kiez!`,
        button: 'Check Availability',
      },
      'description': descriptionContent['en'],
      'footer': footerContent['en']
    },
  } as const;