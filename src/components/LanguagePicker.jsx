import { useState } from 'react';
import {getLangFromUrl, getPageName} from '../utils/functions'
import { languages } from '../utils/ui';
import { useEffect } from 'react';

const LanguagePicker = () => {

  const [page, setPage] = useState('');
  const [lang, setLang] = useState('');

  const handleChangeLanguage = () => {
   
    let url;

    if(lang === 'de') {
      url = `en/${page || ''}`
    } else {
      url = `de/${page || ''}`
    }

    window.location.pathname = url;
  } 



  useEffect(() => {
      setPage(getPageName(window.location) )
      setLang(getLangFromUrl(window.location))
  }, [page, lang])
  
  return (
    <div>
      <img  
          src={`/languages/${lang}.png`} 
          alt={`This is the logo for the language: '`}
          width="45px"
          onClick={() => handleChangeLanguage()}
          style={{cursor: 'pointer', margin: '0'}}
      />
    </div>
  )
}

export default LanguagePicker;



