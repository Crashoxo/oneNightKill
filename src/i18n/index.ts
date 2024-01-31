import { createI18n } from 'vue-i18n';
import { useCookies } from '@vueuse/integrations/useCookies';

const i18nInstance = createI18n({
    legacy: false, // - Must be set to 'false', to use Composition API
    globalInjection: true, // - Refer a global scope Composer instance of i18n
    locale: 'zh-cn', // 默認簡中
    fallbackLocale: 'zh-en', // 前面語言找不到就用此語言:英文
});

// 載入語系檔
async function loadLocaleMessages(lang: string): Promise<void> {
    const { locale, setLocaleMessage } = i18nInstance.global;
    // load locale messages
    
    const messages = await import(
        /* webpackChunkName: "locale-[lang]" */ 
        `../assets/locales/${lang}.ts`
    );

    // console.log("messages", messages.default);

    // set locale and locale message
    // 載入對應的語系檔
    setLocaleMessage(lang, messages.default);
    
    // 設定當前語系
    locale.value = lang;
}

/**
 * 設定語系檔
 * @param { String } lang 語系
 * @param { Boolean } isDefault 是否為預設語系，預設否
*/
export const seti18nLang = (lang: string): Promise<void> => {
    const cookies = useCookies(['cookie']);
    const { locale, messages } = i18nInstance.global;

    // 如果語系檔已經載入過，就不用再載入
    if (messages[lang]) {
        locale.value = lang;
        // https://www.youtube.com/watch?v=CTChl_DYTz0
        return Promise.resolve();
    }

    cookies.set('lang', lang);
    return loadLocaleMessages(lang);
};

export default i18nInstance;
