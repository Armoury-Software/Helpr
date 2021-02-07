import { CookieOptions } from 'express';
import { environment } from './environment';

export const COOKIE_OPTIONS: CookieOptions = {
  maxAge: 12 * 31 * 24 * 60 * 60 * 1000,
  httpOnly: false,
  ...(!environment.dev && { domain: '.armoury.ro', secure: true }),
};
