import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default class Form extends Component {
  render() {
    return (
      <form
        name="cosmic-contact"
        action="./success"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="cosmic-contact" />
        <p hidden>
          <label>
            Do not this: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="text" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" rows={4} columns={50} />
          </label>
        </p>
        <p>
          <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
          <button type="submit" value="send message">
            Send
          </button>
        </p>
      </form>
    )
  }
}
