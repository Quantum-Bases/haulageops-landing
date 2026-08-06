"use client";

import Image from "next/image";
import { footerLinkGroups, brandInfo, FooterLinkGroup } from "@/data/navigationData";

interface FooterProps {
  groups?: FooterLinkGroup[];
}

export function Footer({ groups = footerLinkGroups }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080E1A] text-white py-16">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={brandInfo.logoUrl}
                alt={`${brandInfo.name} Logo`}
                width={120}
                height={120}
                className="w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              {brandInfo.description}
            </p>
          </div>

          {/* Link columns */}
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-white/80 mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} {brandInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            {brandInfo.regionNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
