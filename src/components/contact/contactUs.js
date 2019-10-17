import React from "react"
import Title from "../title"
import styles from "../../css/contact.module.css"

const ContactUs = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form action="" className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="john smith"
              className={styles.formControl}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john.smith@gmail.com"
              className={styles.formControl}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Feedback..."
              rows="10"
              className={styles.formControl}
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
