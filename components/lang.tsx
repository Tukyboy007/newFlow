// components/LanguageSwitcher.tsx
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import i18n from 'i18next';
import Flag from 'react-world-flags';

const LanguageSwitcher: FC = () => {
    const router = useRouter();
    const [language, setLanguage] = useState(router.locale || 'en'); // Get initial locale from Next.js router

    useEffect(() => {
        // Sync state with current router locale if page is refreshed
        setLanguage(router.locale || 'en');
    }, [router.locale]); // Run this effect whenever the locale changes

    const changeLanguage = (newLanguage: string) => {
        i18n.changeLanguage(newLanguage).then(() => {
            // Update the language in the state
            setLanguage(newLanguage);
            // Change locale in Next.js
            router.push(router.pathname, router.asPath, { locale: newLanguage });
        }).catch((error) => {
            console.error('Failed to change language:', error);
        });
    };

    return (
        <div className="">
            {language === 'en' ? (
                <button
                    onClick={() => changeLanguage('mn')}
                    className="flex items-center space-x-2 p-2 "
                >
                    <Flag code="GB" alt="English" width={30} height={20} />
                </button>
            ) : (
                <button
                    onClick={() => changeLanguage('en')}
                    className="flex items-center space-x-2 p-2"
                >
                    <Flag code="MN" alt="Mongolian" width={30} height={20} />
                </button>
            )}
        </div>
    );
};

export default LanguageSwitcher;
