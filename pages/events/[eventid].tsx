import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/ErrorAlert';

export default function EventDetailPage() {
  const router = useRouter();
  console.log(`🔎 | EventDetailPage | router:`, router);

  const eventId: string = router.query.eventid?.toString()!;
  console.log(`🔎 | EventDetailPage | eventid:`, eventId);

  const event = getEventById(eventId);
  console.log(`🔎 | EventDetailPage | event:`, event);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
