import React, { useState, useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import InputSearch from "@/Components/InputSearch";
import { LogoutCurve, SecurityUser, Menu, SearchNormal1, ArrowDown2 } from "iconsax-react";

export default function Navbar({onClick}) {
    return (
        <div className="navbar bg-white px-5 m-0">
            <div className="navbar-start">
                <button className="btn bg-transparent hover:bg-transparent border-0" onClick={onClick}>
                    <Menu variant="Bulk" className="text-[#5E5E5E] w-6" />
                </button>

                <span className="w-1 h-4 border-l-2 border-base-100 mr-4"></span>

                <InputSearch placeholder="Cari anime kesayangan kamu disini ..." />

            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-bottom dropdown-end flex">
                    <div className="flex items-center mx-2 text-[#5E5E5E] font-medium">
                        <p>Hi, Kimberli maulana</p>
                    </div>
                    <label
                        tabIndex={0}
                        className=" bg-transparent hover:bg-transparent flex gap-2 items-center m-1 cursor-pointer group"
                    >
                        <div className="avatar online">
                            <div className="w-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                            <ArrowDown2 className="w-6 text-primary" variant="Bulk" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-neutral text-white rounded-box w-52 flex flex-col gap-1"
                    >
                        <li>
                            <Link className="group">
                                <SecurityUser
                                    variant="Bulk"
                                    className="text-white group-hover:text-[#a3a1ac] duration-100 w-6"
                                />
                                <span className="inline text-white group-hover:text-[#a3a1ac] duration-100">
                                    Profile
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="group" onClick={(e) => logout(e)}>
                                <LogoutCurve
                                    variant="Bulk"
                                    className="text-white group-hover:text-[#a3a1ac] duration-100 w-5"
                                />
                                <span className="inline text-white group-hover:text-white">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
