import SignInSide from '@/components/sign-in';
import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('Index');

    return (
        <div>
            <SignInSide
                password={t('password')}
                signIn={t('sign_in')}
                rememberMe={t('remember_me')}
                forgotPassword={t('forgot_password')}
                dontHaveAccount={t('donthaveaccount')}
                email={t('email')}
            />
        </div>
    );
};

export default page;
