'use client';
import React from 'react';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const t = useTranslations('Index');
    const pathname = usePathname();

    const removeLanguageCode = (url: any) => {
        return url.startsWith('/tr/') ? url.slice(3) : '/';
    };

    const englishHref = removeLanguageCode(pathname);
    const turkishHref = `${pathname}`;
    return (
        <div>
            <div>
                <Link href={englishHref} locale="en">
                    In English
                </Link>
                <br />
                <Link href={turkishHref} locale="tr">
                    In Turkish
                </Link>
            </div>
        </div>
    );
};

export default Header;
