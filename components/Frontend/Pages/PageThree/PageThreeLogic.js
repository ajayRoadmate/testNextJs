
import { useEffect } from "react";
import ApiModule from "../../SharedModules/ApiModule"
import TableModule from "../../SharedModules/TableModule";
import { useAtom } from "jotai";
import {TableStateAtom} from "./PageThreeAtoms";
import DialogueModule from "../../SharedModules/DialogueModule";

export default function PageThreeLogic(){

    const [TableState, setTableState] = useAtom(TableStateAtom);

    var columnList = [
        {type:'text', name:'id'},
        {type:'text', name:'shop_id'},
        {type:'text', name:'order_id'},
        {type: 'actions', name: 'actions', 
            actions:[
                {method: viewMethod, name:'Test Action'}
            ]
        }
    ];

    var baseUrl = 'https://demo.roadmateapp.com/api/v2/';

    var tableOptions = { 
        endPoint: baseUrl+'testEndpoint3',
        columnList: columnList,
        filterInfo: {
            filterIsActive: true,
            filterColumn: '',
            filterState:''
        },
        rowsCount: 10
    }

    function viewMethod(){
        console.log("hello view method");
    }

    return { TableState, setTableState, tableOptions}

}


