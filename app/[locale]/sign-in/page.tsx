import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('Index');

    return <div> {t('sign_in')} </div>;
};

export default page;
