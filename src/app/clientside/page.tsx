"use client"

import { sessionstatus } from "@/app/utils/session"
import { redirect } from "next/navigation"
import { useEffect ,useLayoutEffect} from "react"

export default function Clientside() {


    // SInce use effect hook runs after rendering the contents of the component first then gives the side effect
    // useEffect(()=>{
    //     const session=sessionstatus;
    //     if(!session){
    //         redirect("/");
    //     }
    // },[]);


    // Instead use useLayoutEffect() hook which runs before rendering the content of the component first

    useLayoutEffect(()=>{
        const session=sessionstatus;
        if(!session){
            redirect("/");
        }
    },[]);
    return (
      <main className=" mx-auto bg-sky-100">
        {/* <UserList /> */}
        <h1 className='text-center font-bold mt-10 text-2xl'>This route is protected by Client side</h1>
      </main>
    )
  }
