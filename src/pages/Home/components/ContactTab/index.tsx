import { contactData } from "../../data";

export default function ContactTab() {
  return (
    <>
      <h2>Contact</h2>
      <p>Email: {contactData.email}</p>
      <p>Phone: {contactData.phone}</p>
      <p>LinkedIn: <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">{contactData.linkedin}</a></p>
    </>
  );
}