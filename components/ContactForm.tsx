"use client";

import { FormEvent, useState } from "react";
import { business } from "../lib/site";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Online form delivery is not connected during local review. Please call ${business.phone} or email ${business.email}.`);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Name</span><input autoComplete="name" name="name" placeholder="Name" required type="text" /></label>
      <label><span>Telephone</span><input autoComplete="tel" name="telephone" placeholder="Tel" required type="tel" /></label>
      <label><span>Email</span><input autoComplete="email" name="email" placeholder="Email" required type="email" /></label>
      <label><span>Message</span><textarea name="message" placeholder="Message" required rows={5} /></label>
      <div aria-hidden="true" className="form-honeypot"><label htmlFor="website">Website</label><input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" /></div>
      <label className="checkbox-label"><input name="not-sales" type="checkbox" /><span>Select For Not Sales</span></label>
      <button className="form-button" type="submit">Send</button>
      <p aria-live="polite" className="form-status" role="status">{message}</p>
    </form>
  );
}
