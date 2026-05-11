"use client";

import { logoes, navButtons, navItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function index() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary/90 pt-3 rounded-b-[20px] border-b border-primary z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative h-[60px] w-[60px] ml-1 border-2 rounded-full">
          {logoes.map((log, i) => (
            <Image
              key={i}
              src={log.image}
              alt={log.alt}
              fill
              className="object-cover"
              loading="eager"
            />
          ))}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((navitem, i) => (
            <Link key={i} href={navitem.href}>
              {navitem.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3 mr-10">
          {navButtons.map((btn) => (
            <Link key={btn.name} href={btn.href}>
              <Button className={btn.className}>{btn.name}</Button>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </nav>
  );
}