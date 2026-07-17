import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="language-switcher"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'pl' ? 'Switch to English' : 'Zmień na Polski'}
    >
      <span className="flag">
        {language === 'pl' ? '🇬🇧' : '🇵🇱'}
      </span>
    </motion.button>
  );
}
