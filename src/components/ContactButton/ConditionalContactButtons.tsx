"use client";

import { usePathname } from "next/navigation";
import Call from "./Call";
import Whatsapp from "./WhatsApp";
import { contact } from "@/utils/constent";

export default function ConditionalContactButtons() {
  const pathname = usePathname();

  const isLandingPage = pathname.startsWith("/landingpage");

  return (
    <>
      <Whatsapp whatsAppNumber={contact.phone[1]} />

      <Call callNumber={contact.phone[1]} />
    </>
  );
}
