import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
