import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function searchHandler(year: string, month: string) {
    console.log(`🔎 | Index | searchHandler`);

    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
