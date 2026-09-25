"use client";

import Link from "next/link";
import { footerLinkGroups, brandInfo, FooterLinkGroup } from "@/data/navigationData";

interface FooterProps {
  groups?: FooterLinkGroup[];
}

export function Footer({ groups = footerLinkGroups }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F2EE] text-[#202020] border-t border-[#E6DED8] py-16">
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
              <span className="font-bold text-lg tracking-tight text-[#202020] group-hover:text-[#D86D3C] transition-colors">
                {brandInfo.name}
              </span>
            </Link>
            <p className="text-sm text-[#6B6560] leading-relaxed">
              {brandInfo.description}
            </p>
          </div>

          {/* Link columns */}
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6560] hover:text-[#D86D3C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E6DED8] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6B6560]">
          <p>
            © {currentYear} {brandInfo.name}. All rights reserved.
          </p>
          <p>
            {brandInfo.regionNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}

