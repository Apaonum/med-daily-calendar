// components/CalendarViewer.tsx
import { useEffect, useState } from "react";

interface CalendarViewerProps {
  calendarUrl: string;
  height?: string;
  width?: string;
}

const CalendarViewer = ({
  calendarUrl,
  height = "600px",
  width = "100%",
}: CalendarViewerProps) => {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    if (calendarUrl) {
      setIframeUrl(calendarUrl);
    } else {
      console.error("Invalid calendar URL");
    }
  }, [calendarUrl]);

  return (
    <div className="calendar-container">
      {iframeUrl && (
        <iframe
          src={iframeUrl}
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
