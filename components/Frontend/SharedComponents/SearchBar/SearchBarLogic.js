import { useState } from "react";
import ApiModule from "../../SharedModules/ApiModule";
import DialogueModule from "../../SharedModules/DialogueModule";
import TableModule from "../../SharedModules/TableModule";


export default function SearchBarLogic(endpoint,onSuccess){

    const {sendPostRequest} = ApiModule();
    const [SpinnerState,setSpinnerState] = useState({isActive:false});
    const {openDialogue} = DialogueModule();
    const {getTableState} = TableModule();

    function search(event){

        const form = event.target.closest('form'); 

        if (form.checkValidity()) {

            event.preventDefault();

            const formData = new FormData(form); 
            const formEntries = Object.fromEntries(formData.entries()); 
            
            var endPoint = 'http://192.168.0.141/office/RM-API/public/api/'+endpoint;
            var requestBody = {};

            showSpinner();
    
            sendPostRequest(endPoint,requestBody)
            .then(testEndpoint_onSuccess)
            .catch(testEndpoint_onFailure);

            
        } else {

            event.stopPropagation(); 
        }

    }

    function testEndpoint_onSuccess(response){

        hideSpinner();
        onSuccess(response);
    }

    function testEndpoint_onFailure(message){

        var newDialogue = {title:"Data fetch Error", description: message};

        hideSpinner();
        openDialogue(newDialogue);
    }

    function showSpinner(){

        setSpinnerState((currentState)=>{
            return {...currentState, isActive: true}
        });
    }

    function hideSpinner(){

        setSpinnerState((currentState)=>{
            return {...currentState, isActive: false}
        });
    }
    
    return {search, SpinnerState}


}


