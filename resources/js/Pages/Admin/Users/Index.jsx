import React from 'react'
import {Head} from '@inertiajs/react'
import Sidebar from '@/Components/Sidebar'

export default function Index() {

    return (
        <Sidebar>
            <Head>
                <title>Users</title>
            </Head>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-700">Users</h1>
            </div>
        </Sidebar>
    )
}
