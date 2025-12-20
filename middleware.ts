import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './core/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Always run i18n middleware - even with one locale, it's needed for routing
  // With localePrefix: 'never', the middleware handles internal rewriting
  return intlMiddleware(request);
}

export const config = {
  // More restrictive matcher - only match actual page routes
  // Excludes: api, _next, _vercel, static files, and common bot endpoints
  matcher: ['/((?!api|_next|_vercel|monitoring|healthcheck|.*\\..*).*)']
};
