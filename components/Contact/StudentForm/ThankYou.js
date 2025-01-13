import React from "react";
import Link from "next/link";
import Image from "next/image";

const ThankYou = () => {
  return (
    <div className="container thank-you-container">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6 text-center">
          <Image
            src="/public/assets/img/thanks-img.svg"
            alt="Success"
            width={100}
            height={100}
            className="mb-4"
          />
          <h1>Thank You!</h1>
          <p>Your message has been sent successfully.</p>
          <p>We will get back to you soon.</p>
          <Link href="/">
            <button className="btn btn-primary">Go to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
