import { useRef } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch("http://localhost:3000/api/feedback", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, feedback })
    })
      .then((d) => d.json())
      .then((d) => console.log(d));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit Feedback 😊</h1>
      <div>
        <label>Email</label>
        <input type={'text'} name="email" ref={emailRef} />
      </div>
      <div>
        <label>Feedback</label>
        <textarea name="feedback" ref={feedbackRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
