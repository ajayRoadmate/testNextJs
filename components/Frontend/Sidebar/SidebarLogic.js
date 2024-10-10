import { useEffect, useState } from "react";

import { sidebarAtom } from "./SidebarAtom";
import { useAtom } from 'jotai';
import { atom } from 'jotai';


export default function SidebarLogic(){


    const [sidebarState,setSidebarState] = useAtom(sidebarAtom);


    useEffect(()=>{ 

        var sidebarWrapperDiv = document.getElementById('sidebar_wrapper');
        
        sidebarWrapperDiv.addEventListener('mouseenter',openSidebar);
        sidebarWrapperDiv.addEventListener('mouseleave', closeSidebar);

    },[]);

    function openSidebar(){

        setSidebarState((sidebarState)=>{ return {...sidebarState, isOpen: true}});
    }

    function closeSidebar(){

        setSidebarState((sidebarState)=>{ return {...sidebarState, isOpen: false}});
    }


    function toggleState(){

        setSidebarState((sidebarState)=>{ return {...sidebarState, isOpen: !sidebarState.isOpen}});
    }

    function toggleSidebarLock(){

        setSidebarState((sidebarState)=>{ return {...sidebarState, lockIsActive: !sidebarState.lockIsActive}});
    }


    return {toggleState, sidebarState, toggleSidebarLock};


}


