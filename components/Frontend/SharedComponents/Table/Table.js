'use client'

import styles from './Table.module.css';
import TableBody from './TableBody/TableBody';
import TableFooter from './TableFooter/TableFooter';
import TableHead from './TableHead/TableHead';
import TableInActive from './TableInActive/TableInActive';
import TableLoading from './TableLoading/TableLoading';
import TableLogic from './TableLogic';

export default function Table({id, TableState, setTableState, tableOptions}) {


    const {isTableDataValid} = TableLogic(tableOptions, setTableState);

    if( (TableState.status == 'active')&& (isTableDataValid(TableState)) ){

        return (
            <div className={`${styles.mainWrapper} `}>
                <div className={`${styles.tableContent} `}>
                    <table className="table table-striped table-bordered p-0 m-0">
                        <thead>
                            <TableHead TableState={TableState} setTableState={setTableState} tableOptions={tableOptions}  tableId={id}  />
                        </thead>
                        <tbody>
                            <TableBody TableState={TableState} tableId={id} />
                        </tbody>
                    </table>
                </div>
                <div className={`${styles.tableFooter} `} >
                    <TableFooter TableState={TableState} setTableState={setTableState} tableOptions={tableOptions}  tableId={id} /> 
                </div>
            </div>
        )
    }
    else if(TableState.status == 'loading'){
        return(
            <TableLoading />
        )
    }
    else{
        return(
            <TableInActive />
        )
    }


}
