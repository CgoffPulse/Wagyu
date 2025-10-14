// Analytics utility for tracking user interactions and page views

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isInitialized = false;
  private trackingId: string | null = null;

  // Initialize analytics (Google Analytics, etc.)
  init(trackingId?: string) {
    if (this.isInitialized) return;
    
    this.trackingId = trackingId || process.env.REACT_APP_GA_TRACKING_ID || null;
    
    if (this.trackingId && typeof window !== 'undefined') {
      // Google Analytics 4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', this.trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      this.isInitialized = true;
      console.log('Analytics initialized');
    }
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.isInitialized) return;

    if (window.gtag) {
      window.gtag('config', this.trackingId, {
        page_path: path,
        page_title: title || document.title,
        page_location: window.location.href,
      });
    }

    console.log('Page view tracked:', { path, title });
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) return;

    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    console.log('Event tracked:', event);
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean = true) {
    this.trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'form',
      label: formName,
    });
  }

  // Track button clicks
  trackButtonClick(buttonName: string, location?: string) {
    this.trackEvent({
      action: 'click',
      category: 'button',
      label: `${buttonName}${location ? ` - ${location}` : ''}`,
    });
  }

  // Track navigation
  trackNavigation(from: string, to: string) {
    this.trackEvent({
      action: 'navigate',
      category: 'navigation',
      label: `${from} -> ${to}`,
    });
  }

  // Track product interactions
  trackProductView(productName: string, category?: string) {
    this.trackEvent({
      action: 'view_item',
      category: 'product',
      label: productName,
    });
  }

  // Track email signups
  trackEmailSignup(source: string) {
    this.trackEvent({
      action: 'sign_up',
      category: 'email',
      label: source,
    });
  }
}

// Create singleton instance
export const analytics = new Analytics();

// React hook for analytics
export function useAnalytics() {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackEvent: analytics.trackEvent.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackNavigation: analytics.trackNavigation.bind(analytics),
    trackProductView: analytics.trackProductView.bind(analytics),
    trackEmailSignup: analytics.trackEmailSignup.bind(analytics),
  };
}

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

