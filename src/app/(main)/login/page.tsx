import { sessionConfig } from '@/entities/session';
import { LoginPage } from '@/pages/login-page';
import { PATH_KEYS } from '@/shared/config/path-keys';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerSession(sessionConfig.NEXT_AUTH_OPTIONS);

    if (session) {
        redirect(PATH_KEYS.home());
    }

    return <LoginPage />;
};

export default Page;
