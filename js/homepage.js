document.getElementById("noakhali-donate").addEventListener("click", function(event){
    event.preventDefault();
    const balance = getValueFromElement("avail-balance");
    const donationAmount = getValueFromInput("noakhali-amount");
    const totalCurrentAmount = getValueFromElement("current-amount-donated-noakhali");

    // console.log(donationAmount, totalCurrentAmount);
    if(isNaN(donationAmount) || (donationAmount <= 0)){
        alert("Donation failed");
        return;
    }
    else{
        const newAvailBalance = balance - donationAmount;
        document.getElementById("avail-balance").innerText = newAvailBalance;
    
        const totalAmountDonated = donationAmount + totalCurrentAmount;
        document.getElementById("current-amount-donated-noakhali").innerText = totalAmountDonated;
        alert("Donation successful");

        const currentDate = new Date();
        const stringDate = currentDate.toString();
        const historyForm = document.getElementById("history-form");
        const divAppend = document.createElement("div");
        div.classList.add("rounded-xl", "border-1", "p-8");
        div.innerHTML = `
            <h3 class="mb-4">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
            <p>Date: ${stringDate}</p>
        `;
        historyForm.appendChild(divAppend);
    }


})

document.getElementById("feni-donate").addEventListener("click", function(){
    const balance = getValueFromElement("avail-balance");
    const donationAmount = getValueFromInput("feni-amount");
    const totalCurrentAmount = getValueFromElement("current-amount-donated-feni");

    if(isNaN(donationAmount) || (donationAmount <= 0)){
        alert("Donation failed");
        return;
    }
    else{
        const newAvailBalance = balance - donationAmount;
        document.getElementById("avail-balance").innerText = newAvailBalance;
    
        const totalAmountDonated = donationAmount + totalCurrentAmount;
        document.getElementById("current-amount-donated-feni").innerText = totalAmountDonated;
        alert("Donation successful");
    }

    // console.log(balance, donationAmount, totalCurrentAmount);

})

document.getElementById("quota-donate").addEventListener("click", function(){
    const balance = getValueFromElement("avail-balance");
    const donationAmount = getValueFromInput("quota-amount");
    const totalCurrentAmount = getValueFromElement("current-amount-donated-quota");

    if(isNaN(donationAmount) || (donationAmount <= 0)){
        alert("Donation failed");
        return;
    }
    else{
        const newAvailBalance = balance - donationAmount;
        document.getElementById("avail-balance").innerText = newAvailBalance;
    
        const totalAmountDonated = donationAmount + totalCurrentAmount;
        document.getElementById("current-amount-donated-quota").innerText = totalAmountDonated;
        alert("Donation successful");
    }


})