const returnFirstTwoDrivers = (driverArray) => {
    return driverArray.slice(0, 2)
}

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return (multipler) => {
        return fare * multipler
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectDriver) {
    return selectDriver(drivers)
}