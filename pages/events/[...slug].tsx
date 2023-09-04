import { useRouter } from 'next/router';
import { DateFilter, getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }

  const filterObj: DateFilter = {
    year: numYear,
    month: numMonth,
  };
  const filteredEvents = getFilteredEvents(filterObj);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found!</p>;
  }

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}
