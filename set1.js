function savings(grossPay, taxRate, expenses) {
    return Math.floor((grossPay * (1-taxRate)) - expenses)
} 

function materialWaste(totalMaterial, materialUnits, numJobs, jobConsumption) {
    return (totalMaterial-(numJobs*jobConsumption)+materialUnits)                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}

function interest(principal, rate, periods) {
    return Math.floor ((principal*(rate*periods))+principal)
}
