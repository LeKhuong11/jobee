import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import vi from './locales/vi.json';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};


i18n
  .use(LanguageDetector) // Tự động detect ngôn ngữ từ browser
  .use(initReactI18next) // Kết nối với React
  .init({
    resources,
    lng: 'vi', // Ngôn ngữ mặc định (có thể đặt 'en' nếu muốn)
    fallbackLng: 'en', // Ngôn ngữ dự phòng
    debug: false, // Đặt true để debug
    
    interpolation: {
      escapeValue: false, // React đã tự động escape HTML
    },
    
    // Cấu hình React
    react: {
      useSuspense: false, // QUAN TRỌNG: Tắt suspense để tránh lỗi context
    },
    
    // Cấu hình Language Detection
    detection: {
      // Thứ tự ưu tiên detect ngôn ngữ
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Lưu ngôn ngữ đã chọn vào localStorage
      caches: ['localStorage'],
      
      // Key để lưu trong localStorage
      lookupLocalStorage: 'i18nextLng',
      
      // Không detect từ subdomain
      lookupFromSubdomainIndex: 0,
    },
  });

export default i18n;