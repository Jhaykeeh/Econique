import React, { useState } from 'react';
import { COLORS, FONTS, RADIUS } from '../shared/theme';
import FormInput from '../shared/FormInput';
import Button from '../shared/Button';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Email is invalid';
    if (!message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div style={{ fontFamily: FONTS.body }}>
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: COLORS.offWhite }}
      >
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Contact Us
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: COLORS.darkGray }}
        >
          Have questions or feedback? We'd love to hear from you.
        </p>
      </section>

      <section className="py-12 px-6 max-w-lg mx-auto">
        {submitted && (
          <div
            className="p-4 mb-6 text-sm text-center rounded"
            style={{ backgroundColor: COLORS.mintLight, color: COLORS.primaryDark }}
          >
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <div
          className="p-8"
          style={{
            backgroundColor: COLORS.white,
            borderRadius: RADIUS.lg,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              error={errors.name}
            />
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              error={errors.email}
            />
            <div className="w-full mb-4">
              <label
                className="block mb-1 text-sm font-medium"
                style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                rows={5}
                className="w-full px-4 py-2.5 text-sm border outline-none transition-colors duration-200 resize-vertical"
                style={{
                  borderColor: errors.message ? COLORS.error : COLORS.mint,
                  borderRadius: RADIUS.md,
                  fontFamily: FONTS.body,
                  backgroundColor: COLORS.white,
                  color: COLORS.black,
                }}
                onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
                onBlur={(e) => (e.target.style.borderColor = errors.message ? COLORS.error : COLORS.mint)}
              />
              {errors.message && (
                <p className="mt-1 text-xs" style={{ color: COLORS.error }}>
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
