import { useState } from 'react';
import {getLangFromUrl, getPageName, changeLanguage} from '../utils/functions'
import { useEffect } from 'react';

const LanguagePicker = () => {

  const [page, setPage] = useState('');
  const [lang, setLang] = useState('');

  


  useEffect(() => {
      setPage(getPageName(window.location) )
      setLang(getLangFromUrl(window.location))
  }, [page, lang])


  return (
    <div>
      <p 
          className='languagePicker__icon'
          onClick={() => changeLanguage(lang, page)}
      >
        {lang === 'de' ? 'en' : 'de'}
      </p>
    </div>
  )
}

export default LanguagePicker;



