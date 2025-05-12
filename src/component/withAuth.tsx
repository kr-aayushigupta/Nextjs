"use client";

import { sessionstatus } from "@/app/utils/session";

import { redirect } from "next/navigation";
import { useEffect } from "react";

import React from 'react'

function withAuth(Component:any) {

    
  return (
    function WithAuth(props:any){
        const session=sessionstatus;
        useEffect(()=>{
            if(!session){
                redirect("/");

            }


        },[])
        if(!session){
            return null;
        }
        return <Component {...props}/>
    }
 
  )
}

export default withAuth