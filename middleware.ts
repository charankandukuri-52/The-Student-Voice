import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Performance monitoring
const MONITORING_ENABLED = process.env.NEXT_PUBLIC_MONITORING_ENABLED === 'true';
const CACHE_REVALIDATION_TIME = 3600; // 1 hour in seconds

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add timing header
  const requestStartTime = Date.now();
  response.headers.set('Server-Timing', `request;dur=${Date.now() - requestStartTime}`);

  // Cache control for static assets
  if (request.nextUrl.pathname.match(/\.(js|css|svg|png|jpg|jpeg|gif|ico)$/)) {
    response.headers.set(
      'Cache-Control',
      `public, max-age=${CACHE_REVALIDATION_TIME}, stale-while-revalidate`
    );
  }

  // Add security headers
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Performance monitoring
  if (MONITORING_ENABLED) {
    const performanceData = {
      url: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      responseTime: Date.now() - requestStartTime,
    };

    // In a real application, send this data to your monitoring service
    console.log('Performance data:', performanceData);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 