import styles from "./MeetupDetails.module.css";

const MeetupDetails = props => {
  const { id, title, image, address, description } = props;
  return (
    <>
      <div className={styles.meetupCont}>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </div>
    </>
  );
};
MeetupDetails.defaultProps = {
  title: "A Second Meetup",
  image:
    "https://images.unsplash.com/photo-1556905200-279565513a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  address: "10 some st, 12345 city country",
  description: "This is the second Meetup!",
};
export default MeetupDetails;
