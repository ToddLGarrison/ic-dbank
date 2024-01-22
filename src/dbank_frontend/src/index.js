import { dbank } from "../../declarations/dbank_backend"

window.addEventListener("load", async function() {
    const currentAmount = await dbank.checkBalance();
    this.document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("output-amount").value);

    button.setAttribute("disabled", true);

    await dbank.topUp(inputAmount)

    const currentAmount = await dbank.checkBalance();
    this.document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100

    button.removeAttribute("disabled");
})