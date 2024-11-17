import { sessionConfig } from '@/entities/session';
import { UserAvatar } from '@/entities/user';
import { ThemeToggleButton } from '@/features/theme-toggle-button';
import { UserAuthActionButton } from '@/features/user-auth-action-button';
import { Logo } from '@/shared/ui/logo';
import { MainHeader } from '@/widgets/main-header';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

const MainLayout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession(sessionConfig.NEXT_AUTH_OPTIONS);

    return (
        <div className="min-h-screen flex flex-col">
            <MainHeader
                actions={
                    <div className="flex items-center gap-2">
                        <ThemeToggleButton />
                        {session && (
                            <UserAvatar
                                secondName={session?.user.second_name}
                                firstName={session?.user.first_name}
                                lastName={session?.user.last_name}
                            />
                        )}
                        <UserAuthActionButton
                            sessionStatus={
                                session ? 'authenticated' : 'unauthenticated'
                            }
                        />
                    </div>
                }
                logo={<Logo />}
            />
            <main className="flex-1">
                <div className="container pt-3 max-w-screen-2xl">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
