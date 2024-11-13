import en from "./locales/en";
import ar from "./locales/ar";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en,
    ar,
  },
}));
