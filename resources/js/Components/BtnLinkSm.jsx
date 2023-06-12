import React from "react";
import { AddSquare } from "iconsax-react";
import { Link } from "@inertiajs/react"

export default function BtnLinkSm({href, icon, content}) {
    return (
        <Link href={href} className="btn btn-sm btn-primary">
            <AddSquare className="w-5 text-white" variant="Bulk" />
            {content}
        </Link>
    );
}
