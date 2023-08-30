'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';

const page = () => {
    const t = useTranslations('Index');

    const pokeName = useSelector((state: any) => state.poke.poke.name);
    return (
        <div>
            <h5>{pokeName}</h5>
            <br />
            {t('sign_up')}
        </div>
    );
};

export default page;
