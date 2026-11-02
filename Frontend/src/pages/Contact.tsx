
import { useState, type FormEvent } from "react";
import { sendContactMessage } from "../services/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
       await sendContactMessage({
        name,
        email,
        subject,
        message,
      });

      setStatus("Your message was sent successfully!");

      // Clear the form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-3 text-4xl font-bold">Contact Me</h1>

      <p className="mb-8 text-gray-600">
        Have a question, opportunity, or project in mind?
        Send me a message!
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="What is this regarding?"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Write your message here..."
          />
        </div>

        {status && (
          <p role="status" aria-live="polite">
            {status}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
