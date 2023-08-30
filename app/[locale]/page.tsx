import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { store } from '@/stores';
import { fethcPokes } from '@/stores/poke-store';

export default function Index() {
    const t = useTranslations('Index');

    store.dispatch(fethcPokes('2'));
    return (
        <div>
            <div>
                <h1>{`${store.getState().poke.pokemons.name}`} </h1>
                <br />
                <br />
                <Link href="/sign-in">{t('sign_in')} </Link>
                <br />
                <br />
                <Link href="/sign-up">{t('sign_up')} </Link>
                <br />
                <br />
            </div>
            <div>
                <p>{t('title')}</p>
            </div>
        </div>
    );
}
