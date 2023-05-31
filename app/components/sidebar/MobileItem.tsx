"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  active?: boolean;
  label: string;
  icon: any;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  active,
  label,
  icon: Icon,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(
        ` group
            flex
            gap-x-3 
            rounded-md
            w-full
            justify-center
            p-4
            text-sm
            leading-6
            font-semibold
            text-gray-600
            hover:text-black
            hover:bg-gray-100
            `,
        active && "bg-gray-200 text-sky-700"
      )}
    >
      <Icon className="h-6 w-6 shrink-0" />
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default MobileItem;
