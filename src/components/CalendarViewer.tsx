// components/CalendarViewer.tsx
import { useEffect, useState } from 'react';

interface CalendarViewerProps {
  calendarUrl: string;
  height?: string;
  width?: string;
}

const CalendarViewer = ({ 
  calendarUrl, 
  height = '600px', 
  width = '100%' 
}: CalendarViewerProps) => {
  const [iframeUrl, setIframeUrl] = useState('');
  
  useEffect(() => {
    // Add current date parameter to the URL to ensure it shows today
    const today = new Date();
    const formattedDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
    
    // Add date parameter if URL doesn't already have it
    const url = new URL(calendarUrl);
    if (!url.searchParams.has('dates')) {
      url.searchParams.set('dates', formattedDate);
    }
    
    setIframeUrl(url.toString());
  }, [calendarUrl]);

  return (
    <div className="calendar-container">
      {iframeUrl && (
        <iframe
          src={"https://calendar.google.com/calendar/u/0/embed?src=g.swu.ac.th_clnth781upbha7ovo03n38iksk@group.calendar.google.com&ctz=Asia/Bangkok&pli=1"}
          width={width}
          height={height}
          title="Google Calendar"
          className="calendar-iframe"
        />
      )}
      
      <style jsx>{`
        .calendar-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin: 20px 0;
        }
        
        .calendar-iframe {
          border: none;
        }
      `}</style>
    </div>
  );
};

export default CalendarViewer;