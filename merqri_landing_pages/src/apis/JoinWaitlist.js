import axios from 'axios';

export const handleJoinWaitList = async (name, email, setMessage, event) => {
  event.preventDefault();
  console.log("clicked");

  try {
    const response = await axios.post('https://api.merqri.com.ng/api/waitlist_create/', {
      name,
      email,
    });

    if (response.status === 201) {
      setMessage('You have successfully joined the waitlist!');
      name=""
      email=""

    } else {
      setMessage('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Error joining the waitlist:', error);
    setMessage('Error joining the waitlist. Please try again later.');
  }
};
