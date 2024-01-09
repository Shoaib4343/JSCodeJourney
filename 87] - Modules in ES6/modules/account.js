export let account_number = 43423232;
let account_type = "Saving";

export default function(){
    console.log("this is default function of Account");
}

export function deposited(){
    console.log("Amount is deposit...");
}


export function withdraw(){
    console.log("Amount is withdraw...");
}