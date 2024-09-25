document.getElementById("history-btn").addEventListener("click", function(){
    document.getElementById("donation-form").classList.add("hidden");
    document.getElementById("history-form").classList.add("hidden");
    document.getElementById("history-form").classList.remove("hidden");
    document.getElementById("donation-button").classList.remove("bg-btn-green");
    document.getElementById("history-btn").classList.add("bg-btn-green");
    document.getElementById("footer").classList.add("hidden");

})

document.getElementById("donation-button").addEventListener("click", function(){
    document.getElementById("history-form").classList.add("hidden");
    document.getElementById("donation-form").classList.add("hidden");
    document.getElementById("donation-form").classList.remove("hidden");
    document.getElementById("history-btn").classList.remove("bg-btn-green");
    document.getElementById("donation-button").classList.add("bg-btn-green");
})
