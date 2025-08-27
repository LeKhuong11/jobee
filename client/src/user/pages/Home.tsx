import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'Bạn' })}</p>
      
      <nav>
        <a href="/">{t('navigation.home')}</a>
        <a href="/about">{t('navigation.about')}</a>
        <a href="/contact">{t('navigation.contact')}</a>
      </nav>
      
      <div>
        <button onClick={() => changeLanguage('en')}>
          English
        </button>
        <button onClick={() => changeLanguage('vi')}>
          Tiếng Việt
        </button>
      </div>
      
      <div>
        <button>{t('buttons.save')}</button>
        <button>{t('buttons.cancel')}</button>
      </div>
    </div>
  );
};

export default Home;