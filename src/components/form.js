import React, { Component } from 'react'

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
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="cosmic-contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
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
          <button type="submit" value="send message">
            Send
          </button>
        </p>
      </form>
    )
  }
}
