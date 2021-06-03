import {useHistory} from "react-router-dom";
import NewMeetupForm from '../components/meetups/NewMeetupForm';
const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch('https://crash-course-react-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(()=>{
      history.replace('/');
    });
  }

  return (
    <section>
      <h3>New Meetup</h3>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
};
export default NewMeetupPage;
