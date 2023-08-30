import Header from '@/components/Header';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { StoreProvider } from '@/stores/store-provider';
import { store } from '@/stores';
import { fethcPokes } from '@/stores/poke-store';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'tr' }];
}

export default async function LocaleLayout({ children, params: { locale } }: any) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    await store.dispatch(fethcPokes('2'));
    const poke = store.getState().poke.pokemons;

    return (
        <html lang={locale}>
            <body>
                <StoreProvider
                    preloadedState={{
                        poke: { poke },
                    }}
                >
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <Header />
                        {children}
                    </NextIntlClientProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
