import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={featureEvents} />
    </div>
  );
}
