import { atom } from 'jotai';
import { FaEnvelope } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';

var initalSidebarState = {
    lockIsActive:false,
    isOpen: false,
    subElements:[
        {id: 'subElement_1', name: "Sub One", icon: FaEnvelope,isExpand: false, 
            items: [
                {id:'subElement_1-item_1', name: 'Item One', isAtive: true, page: 'test'}, 
                {id:'subElement_1-item_2', name: 'Item Two', isAtive: true, page: 'pageThree'}, 
                {id:'subElement_1-item_3', name: 'Item Three', isAtive: true, page: 'test'}
            ] 
        },
        {id: 'subElement_2', name: "Sub Two", icon: FaCog,isExpand: false, items: []},
        {id: 'subElement_3', name: "Sub Three", icon: FaEnvelope,isExpand: false, 
            items: [
                {id:'subElement_3-item_1', name: 'Item One', isAtive: true, page: 'test'}, 
                {id:'subElement_3-item_2', name: 'Item Two', isAtive: true, page: 'test'}
            ]
        },
        {id: 'subElement_4', name: "Sub four", icon: FaCog,isExpand: false, items: []},
        {id: 'subElement_5', name: "Sub five", icon: FaEnvelope,isExpand: false, items: []},
        {id: 'subElement_6', name: "Sub six", icon: FaCog,isExpand: false, 
            items: [
                {id:'subElement_6-item_1', name: 'Item One', isAtive: true, page: 'test'}
            ]
        },
        {id: 'subElement_7', name: "Sub seven", icon: FaEnvelope,isExpand: false, items: []},
        {id: 'subElement_8', name: "Sub eight", icon: FaCog,isExpand: false, items: []},
        {id: 'subElement_9', name: "Sub nine", icon: FaEnvelope,isExpand: false, items: []},
        {id: 'subElement_10', name: "Sub ten", icon: FaCog,isExpand: false, items: []},
        {id: 'subElement_11', name: "Sub eleven", icon: FaEnvelope,isExpand: false, items: []},
        {id: 'subElement_12', name: "Sub twelve", icon: FaCog,isExpand: false, items: []},
        {id: 'subElement_13', name: "Sub thirteen", icon: FaEnvelope,isExpand: false, items: []},
        {id: 'subElement_14', name: "Sub fourteen", icon: FaCog,isExpand: false, items: []}

    ]
};
 
export const sidebarAtom = atom(initalSidebarState);




