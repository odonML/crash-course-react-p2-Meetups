import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [meetupsList, setMeetupsList] = useState([]);

  useEffect(() => {
    fetch("https://crash-course-react-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setMeetupsList(meetups);
      });
  }, []);

  return (
    <section>
      <h1>all meetups page</h1>
      <MeetupList meetups={meetupsList} />
    </section>
  );
};
export default AllMeetupsPage;
