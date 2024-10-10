import { useState } from "react";


export default function ActionCellLogic(){

    const [isActionsActive, setIsActionsActive] = useState(false);



    function toggleActionSelect(pageIndex){

        setIsActionsActive((currentState)=>{
            return !currentState;
        })
    }

    
    return {isActionsActive, toggleActionSelect}


}


