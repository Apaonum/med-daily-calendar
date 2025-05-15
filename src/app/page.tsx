'use client';

import Head from 'next/head';
import CalendarViewer from '@/components/CalendarViewer';

export default function Home() {
  const calendarUrl = "https://calendar.google.com/calendar/u/0/embed?src=g.swu.ac.th_clnth781upbha7ovo03n38iksk@group.calendar.google.com&ctz=Asia/Bangkok&pli=1";

  return (
    <div className="container">
      <Head>
        <title>Undergraduate Schedule</title>
        <meta name="description" content="View your daily calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Undergraduate Schedule
        </h1>
        
        <div className="calendar-wrapper">
          <CalendarViewer calendarUrl={calendarUrl} height="700px" />
        </div>
      </main>

      {/* <footer className="footer">
        <p>Calendar updates daily</p>
      </footer> */}

      <style jsx>{`
        .container {
          padding: 0 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .calendar-wrapper {
          width: 100%;
        }

        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
