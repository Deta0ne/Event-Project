import SignInSide from '@/components/sign-in';
import React from 'react';
import { useTranslations } from 'next-intl';
import SignUp from '@/components/sign-up';

const page = () => {
    const t = useTranslations('Index');

    return (
        <div>
            <SignUp
                message={t('alertMessage')}
                username={t('username')}
                password={t('password')}
                signIn={t('sign_in')}
                signUp={t('sign_up')}
                rememberMe={t('remember_me')}
                forgotPassword={t('forgot_password')}
                dontHaveAccount={t('donthaveaccount')}
                email={t('email')}
                doyouhaveaccount={t('doyouhaveaccount')}
            />
        </div>
    );
};

export default page;
