'use client';
import { useTranslations } from 'next-intl';

const CustomButton = () => {
    const t = useTranslations('Index');

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <button disabled={false} type="submit" onClick={handleClick}>
            Değiştir
        </button>
    );
};

export default CustomButton;
