import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";

const DetailedMeetup = ({ meetup }) => {
  const router = useRouter();
  return <MeetupDetails id={router.query.meetupId} />;
};

export default DetailedMeetup;
