"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  href: string;
  active?: boolean;
  label: string;
  icon: any;
  onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
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
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          ` group
            flex
            gap-x-3 
            rounded-md
            p-3
            text-sm
            leading-6
            font-semibold
            text-gray-600
            hover:text-black
            hover:bg-gray-300
            `,
          active && "bg-gray-200 text-sky-700"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
