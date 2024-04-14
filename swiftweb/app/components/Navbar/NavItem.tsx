import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  color: string;
  title: string;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ color, title, href = '#' }) => {
  const isActive = typeof window !== 'undefined' && window.location.pathname === href;

  const className = `  py-2 ${color}  text-sm sm:text-md font-bold  ${isActive ? 'active' : ''}`;
  
  return (
    <Link href={href} passHref className={className}>
        {title}
    </Link>
  );
};

export default NavItem;