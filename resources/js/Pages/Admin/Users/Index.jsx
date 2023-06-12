import React from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import Table from "@/Components/Table";

export default function Index() {
    return (
        <Sidebar>
            <Head>
                <title>Users</title>
            </Head>
            <Table>
                <tr>
                    <th className="text-center">Nama</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Role</th>
                    <th className="text-center">Aksi</th>
                </tr>
                <tr>
                    <td className="text-center">Admin</td>
                    <td className="text-center">Admin@kw.com</td>
                    <td className="text-center">Jluu</td>
                    <td className="text-center flex gap-3 justify-center items-center">
                        <button className="btn btn-sm btn-warning">Edit</button>
                        <button className="btn btn-sm btn-error">Hapus</button>
                    </td>
                </tr>
            </Table>
        </Sidebar>
    );
}
