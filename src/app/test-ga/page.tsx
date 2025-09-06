'use client'

import { useEffect } from 'react'
import { siteDetails } from '@/data/siteDetails'

export default function GATest() {
  useEffect(() => {
    console.log('Google Analytics ID:', siteDetails.googleAnalyticsId)
    console.log('Environment variable:', process.env.GOOGLE_ANALYTICS_ID)
    
    // Check if gtag is loaded
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('Google Analytics gtag is loaded')
      // Send a test event
      window.gtag('event', 'test_event', {
        event_category: 'testing',
        event_label: 'GA4 setup test'
      })
    } else {
      console.log('Google Analytics gtag is not loaded yet')
    }
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Google Analytics Test Page</h1>
      <div className="bg-gray-100 p-4 rounded">
        <p><strong>Google Analytics ID:</strong> {siteDetails.googleAnalyticsId || 'Not loaded'}</p>
        <p><strong>Site Name:</strong> {siteDetails.siteName}</p>
        <p className="mt-4 text-sm text-gray-600">
          Check browser console for detailed GA4 debugging information.
        </p>
        <button 
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'button_click', {
                event_category: 'testing',
                event_label: 'Manual test button'
              })
              alert('Test event sent to GA4!')
            } else {
              alert('Google Analytics not loaded!')
            }
          }}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Test Event to GA4
        </button>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}
