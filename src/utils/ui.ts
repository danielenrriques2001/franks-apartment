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
        linkButton: "https://www.airbnb.de/rooms/267951?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-07-30&check_out=2023-08-04&federated_search_id=ef7ac761-8ee3-437d-ba0e-02b9eaada7c8&source_impression_id=p3_1683204831_lmxtMCzJF6dLWSdK"
      },
      'description': descriptionContent['de'],
      'footer': footerContent['de']
    },
    en: {
      'nav.kontakt': 'Contact',
      'hero': {
        title: `Your <span>Home</span> in our Kiez!`,
        button: 'Check Availability',
        linkButton: "https://www.airbnb.de/rooms/267951?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-07-30&check_out=2023-08-04&federated_search_id=ef7ac761-8ee3-437d-ba0e-02b9eaada7c8&source_impression_id=p3_1683204831_lmxtMCzJF6dLWSdK"
      },
      'description': descriptionContent['en'],
      'footer': footerContent['en']
    },
  } as const;