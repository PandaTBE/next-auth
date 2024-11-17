import { ENV } from '../config/env';

export const baseUrl = (
    path: string,
    baseUrl = ENV.NEXT_PUBLIC_BASE_API_URL,
) => {
    return `${baseUrl}${path}`;
};
