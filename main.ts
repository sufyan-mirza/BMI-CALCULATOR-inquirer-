// BMI CALCULATOR (INQUIRER)

import inquirer from "inquirer";
const question=[
    {type:'number',
    name:'weight',
    message:'ENTER THE WEIGHT:'

    },
    {
        type:'number',
        name:'height',
        message:'ENTER THE HEIGHT'
    }
];

function bmi (weight:number,height:number){
    return weight/height*height
}

async function main() {
    const {weight,height}=await inquirer.prompt(question)
    console.log(`bmi: ${bmi(weight,height).toFixed()}`)
    
}
main();