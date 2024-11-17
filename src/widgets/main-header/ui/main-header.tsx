import { PATH_KEYS } from '@/shared/config/path-keys';
import Link from 'next/link';
import { ReactNode } from 'react';

export const MainHeader = ({
    logo,
    actions,
}: {
    actions: ReactNode;
    logo: ReactNode;
}) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <div className="container max-w-screen-2xl flex items-center py-1">
                <div className="flex items-center">
                    <Link href={PATH_KEYS.home()}>{logo}</Link>
                </div>
                <div className="justify-end flex-1 flex">{actions}</div>
            </div>
        </header>
    );
};
