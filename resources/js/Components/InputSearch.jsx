import React from "react";
import { SearchNormal1 } from "iconsax-react";

export default function InputSearch({className, placeholder}) {
    return (
        <div htmlFor="search" className={`input-group input-group-sm  ${className}`}>
            <button className="btn btn-sm bg-base-100 hover:bg-base-100 border-none rounded-r-none">
                <SearchNormal1
                    variant="Linear"
                    className="text-[#C7C3C3] w-4"
                />
            </button>
            <input
                type="text"
                placeholder={placeholder}
                className="input input-sm rounded-r-lg placeholder:font-normal outline-none border-none focus:ring-0 focus:ring-offset-0 focus:outline-none w-[350px]"
            />
        </div>
    );
}
