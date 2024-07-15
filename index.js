// Code your solution in this file!
function distanceFromHqInBlocks(x){
    return Math.abs(x-42);
}

function distanceFromHqInFeet(x){
    return 264*distanceFromHqInBlocks(x);
}

function distanceTravelledInFeet(x,y){
    return Math.abs(x-y)*264;

}

function calculatesFarePrice(x,y){
    if (distanceTravelledInFeet(x,y) <= 400){
        return 0;}
    else if (distanceTravelledInFeet(x,y) <= 2000){
        return .02*(distanceTravelledInFeet(x,y)-400);}
    else if (distanceTravelledInFeet(x,y) <= 2500){
        return 25;}
    else{
        return "cannot travel that far";}
    }
