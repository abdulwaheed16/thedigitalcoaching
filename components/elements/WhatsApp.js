import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const WhatsApp = () => {
  return (
    <div className="whatsapp open">
      <Link href={`https://wa.me/${siteConfig?.phone}`} target="_blank">
        <img src="/assets/img/icons/whatsapp.png" alt="whatsapp" />
      </Link>
      {/* <div className="whatsapp-text">whatsapp</div> */}
    </div>
  );
};

export default WhatsApp;
