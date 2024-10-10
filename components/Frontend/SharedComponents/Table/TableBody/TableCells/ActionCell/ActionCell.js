import Link from "next/link"
import { FaEllipsisV } from "react-icons/fa";

import styles from './ActionCell.module.css';
import ActionCellLogic from "./ActionCellLogic";

export default function ActionCell({actionState, id}) {


  const {isActionsActive, toggleActionSelect} = ActionCellLogic();

  return (
        <td >
          <div className={`${styles.mainWrapper}`}>
            
            {

              (isActionsActive)? 

                <div className={`${styles.actionsContainer} `}>
                  <div className={`${styles.close} border`}  onClick={toggleActionSelect} >close</div>
                  {
                    actionState.value.map((item,index)=>{
                      return( 
                        <div key={id+'_'+index}  className={`${styles.actionItem} `} onClick={item.method} >{item.name}</div> 
                      )
                    })
                  }
                </div>
            
              :
                <FaEllipsisV className={`${styles.icon}`} onClick={toggleActionSelect} />
              
            }
          </div>
        </td> 
  )
}


