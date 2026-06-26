
"use client";

import Image from "next/image";
import profileImg from "../../asset/profile.jpg";

export default function KineticLogo() {
  return (
    <div className="relative flex items-center justify-center group cursor-default">
      {/* Profile Photo Circle */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/40 shadow-2xl">
        <Image
          src={profileImg}
          alt="Balaji"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Yellow Branding Name */}
      <div className="ml-4 flex flex-col leading-none">
        <span className="text-sm font-headline font-bold tracking-[0.2em] text-primary uppercase">
          BALAJI.S
        </span>
        <span className="text-[6px] font-black tracking-[0.4em] text-white/30 uppercase mt-1">
          Creative Engineering
        </span>
      </div>
    </div>
  );
}
