import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getPageName(url: URL) {
  const [, , name] = url.pathname.split('/');
  return name;
}

export const changeLanguage = (lang: string, page?: string): void => {
   
  let url;

  if(lang === 'de') {
    url = `en/${page || ''}`
  } else {
    url = `de/${page || ''}`
  }

  window.location.pathname = url;
} 
