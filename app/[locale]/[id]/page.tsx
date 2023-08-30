import React from 'react';
import { useTranslations } from 'next-intl';

function IdPage({ params }: any) {
    const t = useTranslations('Index');
    console.log(params);
    return (
        <div>
            IdPage: {params.id}. {t('page')}
        </div>
    );
}

export default IdPage;
