// components/LanguageSwitcher.tsx
import { FC } from 'react';
import { useRouter } from 'next/router';
import i18n from 'i18next';

const LanguageSwitcher: FC = () => {
    const router = useRouter();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language).then(() => {
            // Change locale in Next.js
            router.push(router.asPath, router.asPath, { locale: language });
        });
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('mn')}>Mongolian</button>
        </div>
    );
};

export default LanguageSwitcher;