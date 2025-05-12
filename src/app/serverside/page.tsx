// server component
import { sessionstatus } from "@/app/utils/session"
import { redirect } from "next/navigation"

import React from 'react'

function serverside() {
    const session=sessionstatus;
    if(!session){
        redirect("/");
    }
    return (
        <div>
            <h3 className="text-center font-bold text-2xl mt-8">This is server component - route protected in server component</h3>
        </div>
    )


}

export default serverside;