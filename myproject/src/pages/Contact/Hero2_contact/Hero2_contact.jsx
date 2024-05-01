import React from 'react'
import './Hero2_contact.scss'
function Hero2_contact() {
  return (
    <>
    <section class="hero2_contact">
        <div class="text_contact">
          <div class="text1_contact">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div>
          <form action="">
            <div class="form">
              <input
                class="form_input"
                type="text"
                id="name"
                placeholder="Name"
              />
              <input
                class="form_input"
                type="email"
                id="name"
                placeholder="Email Address"
              />
              <input
                class="form_input"
                type="text"
                id="name"
                placeholder="Phone Number"
              />
              <div>
                <textarea
                  class="textarea"
                  name=""
                  id=""
                  cols="58"
                  rows="7"
                  placeholder="Message"
                ></textarea>
              </div>

              <div class="btn_div">
                <button class="contact_btn">Send</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <hr />
    </>
  )
}

export default Hero2_contact