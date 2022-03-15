// Code your solution in this file!
const scubersLocation = 42;
const manhattanBlock = 264;
//let farePerFoot = 0.02;

function distanceFromHqInBlocks(pickupLocation) {
    if(pickupLocation > scubersLocation) {
        return pickupLocation - scubersLocation;
    } else {
        return scubersLocation - pickupLocation;
    }
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * manhattanBlock;
}

function distanceTravelledInFeet(start, destination) {
    if(start > destination) {
        return (start-destination)*manhattanBlock;
    } else {
        return (destination-start)*manhattanBlock;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance < 400) {
        return 0;
    } else if(distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if(distance > 2000 && distance < 2500) {
        return 25;
    } else if(distance > 2500) {
        return 'cannot travel that far';
    }
}