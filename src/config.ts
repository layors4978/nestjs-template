import config from 'config';

export const HTTP_HOST = config.get('http.host') as string;
export const HTTP_PORT = config.get('http.port') as number;
