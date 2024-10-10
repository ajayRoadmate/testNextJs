
import { motion } from 'framer-motion';
import styles from './Item.module.css';
import ItemLogic from './ItemLogic';

export default function Item({itemState}) {

    const {goTo, sidebarState, sidebarSubElementState,isItemActive} = ItemLogic(itemState);

    return (
    <div className={ isItemActive? `${styles.itemActive}` : `${styles.item}`} onClick={goTo} >
        <div className={`${styles.leftSection} `} >
            
        </div>
        <motion.div 
            animate={{opacity:((sidebarState.isOpen || sidebarState.lockIsActive) & sidebarSubElementState.isExpand)? 1 : 0}}
            className={`${styles.rightSection} `} 
            transition={{duration: 0.3}}
            initial={false}
        >
            {itemState.name}
        </motion.div>
    </div>
    );
}