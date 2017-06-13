import * as Actions from '../Action/Index';

let staticdata = [
    {
        id:"#11111111",
        name:"Alexander Leichter",
        sender_name:"Alexander Leichter",
        email:'alexander@getbryid.com',
        type:"Business Customer"
    },
    {
        id:"#22222222",
        name:"Sebestian Mach",
        sender_name:"Sebestian Mach",
        email:'Sebestian@getbryid.com',
        type:"Business Customer"
    },
    {
        id:"#33333333",
        name:"Petra Dobrocha",
        sender_name:"Petra Dobrocha",
        email:'Petran@getbryid.com',
        type:"Business Customer"
    },
    {
        id:"#44444444",
        name:"Christoph Krofitsch",
        sender_name:"Christoph Krofitsch",
        email:'Christoph@getbryid.com',
        type:"Business Customer"
    },
    {
        id:"#55555555",
        name:"Michael Innerhofer",
        sender_name:"Michael Innerhofer",
        email:'Michael@getbryid.com',
        type:"Business Customer"
    }
]


export function fetch_all_custumers(){

    return function (dispatch) {

        dispatch({
            type: "ALL_USERS",
            payload: {
                Customers: staticdata
            }
        })
    }

}

export default Actions;