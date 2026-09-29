"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { footerLinkGroups, brandInfo, FooterLinkGroup } from "@/data/navigationData";

interface FooterProps {
  groups?: FooterLinkGroup[];
}

export function Footer({ groups = footerLinkGroups }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <img
                src={brandInfo.iconUrl || "/HaulageOps_Icon_Black.png"}
                alt={`${brandInfo.name} Icon`}
                className="h-6 w-auto object-contain"
              />
              <span className="font-black text-lg tracking-tight text-neutral-900 group-hover:text-[#E8652B] transition-colors">
                {brandInfo.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              {brandInfo.description}
            </p>

            <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8652B] shrink-0 mt-0.5" />
                <span>{brandInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E8652B] shrink-0" />
                <a
                  href={brandInfo.phoneHref}
                  className="hover:text-[#E8652B] transition-colors font-semibold text-neutral-900"
                >
                  {brandInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#E8652B] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
          <p>
            © {currentYear} {brandInfo.name} Pty Ltd. All rights reserved.
          </p>
          <p>
            {brandInfo.regionNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
