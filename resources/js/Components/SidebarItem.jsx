import React from 'react'
import { Link } from '@inertiajs/react'

export default function SidebarItem({content, href, icon, active, liClassName}) {
  return (
    <li className={`group ${liClassName}  ${active} rounded-xl hover:bg-[#525158] duration-200`}>
        <Link href={href} className={`text-lg flex flex-row gap-1 font-normal p-4 group`}>
            {icon}
            <p className='group group-hover:text-white text-white'>
                {content}
            </p>
        </Link>
    </li>
  )
}
