import React, {useState} from "react";
import Navbar from "@/Components/Navbar";
import SidebarItem from "@/Components/SidebarItem";
import {
    Element,
    Blur,
    Flag2,
    GlobalEdit,
    Keyboard,
    SecurityUser,
    UserMinus,
    Book,
} from "iconsax-react";

export default function Sidebar({ children }) {
    const sidebarItems = [
        {
            content: "Dashboard",
            href: "/admin",
            icon: (
                <Element
                    variant="Bulk"
                    className="text-white duration-100 w-6"
                />
            ),
            active:
                location.pathname === "/dashboard" ? "bg-[#525158] hover:" : "",
        },
        {
            content: "Anime",
            href: "/admin/anime-manager",
            icon: (
                <Blur variant="Bulk" className="text-white duration-100 w-6" />
            ),
            active: location.pathname === "/anime" ? "bg-[#525158] hover:" : "",
        },
        {
            content: "Genre",
            href: "/admin/genre-manager",
            icon: (
                <Flag2 variant="Bulk" className="text-white duration-100 w-6" />
            ),
            active:
                location.pathname === "/genre-manager"
                    ? "bg-[#525158] hover:"
                    : "",
        },
        {
            content: "Link Manager",
            href: "/admin/link-manager",
            icon: (
                <GlobalEdit
                    variant="Bulk"
                    className="text-white duration-100 w-6"
                />
            ),
            active:
                location.pathname === "/link-manager"
                    ? "bg-[#525158] hover:"
                    : "",
        },
        {
            content: "Status Anime",
            href: "/admin/status-manager",
            icon: (
                <Keyboard
                    variant="Bulk"
                    className="text-white duration-100 w-6"
                />
            ),
            active:
                location.pathname === "/status-manager"
                    ? "bg-[#525158] hover:"
                    : "",
        },
        {
            content: "Blog",
            href: "/admin/blog",
            icon: (
                <Book variant="Bulk" className="text-white duration-100 w-6" />
            ),
            liClassName:
                "after:w-full after:border-b after:border-[#363636] after:translate-y-7",
            active: location.pathname === "/blog" ? "bg-[#525158] hover:" : "",
        },
        {
            content: "Profile",
            href: "/admin/profile",
            icon: (
                <SecurityUser
                    variant="Bulk"
                    className="text-white duration-100 w-6"
                />
            ),
            liClassName: 'mt-7',
            active:
                location.pathname === "/profile" ? "bg-[#525158] hover:" : "",
        },
        {
            content: "User Manager",
            href: "/admin/users",
            icon: (
                <UserMinus
                    variant="Bulk"
                    className="text-white duration-100 w-6"
                />
            ),
            active: location.pathname === "/users" ? "bg-[#525158] hover:" : "",
        },
    ];

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className="flex flex-1">
            <div className="sticky top-0 left-0 h-[100vh]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={`menu p-4 w-[274px] h-full text-neutral bg-primary flex-col gap-1 duration-300 ${sidebarOpen ? '-ml-80' : '-ml-0'}`}>
                    {/* Sidebar content here */}
                    <li className="after:w-full after:border-b after:mb-3 after:mt-1 after:border-[#363636]">
                        <img
                            src="/icon/navbar-icon.svg"
                            alt="kawasan wibu"
                            className="-translate-x-3.5"
                        />
                    </li>

                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            href={item.href}
                            icon={item.icon}
                            content={item.content}
                            liClassName={item.liClassName}
                            active={item.active}
                        />
                    ))}
                </ul>
            </div>

            <div className="flex-1 p-0">
                <Navbar onClick={(e) => sidebarToggle(e)} />
                {/* Page content here */}
                <div className="pt-4 px-5">
                    {children}
                </div>
            </div>
        </div>
    );
}
