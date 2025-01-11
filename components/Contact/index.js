import Link from "next/link";
import React from "react";
import StudentContactForm from "./Form";

const ContactPage = () => {
  return (
    <div>
      <section className="contact-area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info-wrap">
                <h2 className="title">Keep In Touch With Us</h2>
                <p>
                  Neque convallis cras semper auctor. Libero id faucibus
                  getnvallis.id faucibus nisl tincidunt egetnvallis.
                </p>
                <ul className="list-wrap contact-info-list">
                  <li>
                    <div className="icon">
                      <i className="flaticon-pin-1" />
                    </div>
                    <div className="content">
                      <p>
                        68 Street Holakt Street world <br /> 10002 New York
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="content">
                      <Link href="tel:0123456789">+123 555 69090</Link>
                      <Link href="tel:0123456789">+123 555 69090</Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-email" />
                    </div>
                    <div className="content">
                      <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                      <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <StudentContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* contact-area-end */}
      {/* contact-map */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactPage;
