import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function Index() {
    const t = useTranslations('Index');
    const fethcUser = async (id: string) => {
        const req = await fetch('http://localhost:3000/api/search');
        const data = await req.json();
        console.log(data[id]);
    };
    fethcUser('0');
    return (
        <div>
            <div>
                <Link href="/" locale="en">
                    In English
                </Link>
                <br />
                <br />
                <Link href="/" locale="tr">
                    In Turkish
                </Link>
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
