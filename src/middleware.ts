import { redirect } from "next/dist/server/api-utils";
import { sessionstatus } from "./app/utils/session";
import { NextResponse,NextRequest } from "next/server";


const protectedRoute=["/middlewareside"];

import React from 'react'

function middleware(req:any) {
  

    if(!sessionstatus && protectedRoute.includes(req.nextUrl.pathname)){
        const absoluteurl=new URL("/",req.nextUrl.origin);
        return NextResponse.redirect(absoluteurl.toString());
    }
}

export default middleware