import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from 'constants';

import en from 'languages/en.json';
import ru from 'languages/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru
  },
  lng: languages.en
});

export default i18n;
