import Forgot from '@/components/forgot';
import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('Index');

    return (
        <div>
            <Forgot
                send={t('send')}
                dontHaveAccount={t('donthaveaccount')}
                email={t('email')}
                doyouhaveaccount={t('doyouhaveaccount')}
                resetPassword={t('reset_password')}
            />
        </div>
    );
};

export default page;
