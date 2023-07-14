import { EventObject } from '../../dummy-data';
import EventItem from './EventItem';

export default function EventList(props: { items: EventObject[] }) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
