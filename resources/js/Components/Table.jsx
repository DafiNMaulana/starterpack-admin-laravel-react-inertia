import React from "react";
import InputSearch from "@/Components/InputSearch";
import { Link } from "@inertiajs/react";
import BtnLinkSm from "@/Components/BtnLinkSm"

export default function Table({children, children2}) {
    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex justify-end gap-4">
                <label htmlFor="search">
                    <InputSearch placeholder="Cari user disini ..." />
                </label>
                <BtnLinkSm href="#" content="Tambah user"/>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    <thead>
                        {children}
                    </thead>
                    <tbody>
                        {children2}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
