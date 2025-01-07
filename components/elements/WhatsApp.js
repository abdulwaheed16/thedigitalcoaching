import Link from "next/link";
import React from "react";

const WhatsApp = () => {
  return (
    <div className="whatsapp open">
      <Link href={`https://wa.me/+923120012250`} target="_blank">
        <img src="/assets/img/icons/whatsapp.png" alt="whatsapp" />
      </Link>
      {/* <div className="whatsapp-text">whatsapp</div> */}
    </div>
  );
};

export default WhatsApp;
