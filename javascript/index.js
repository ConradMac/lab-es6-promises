// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction("mashedPotatoes", 1, (step1) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
        getInstruction("mashedPotatoes", 2, (step2) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
            getInstruction("mashedPotatoes", 3, (step3) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
                getInstruction("mashedPotatoes", 4, (step4) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document.querySelector("#mashedPotatoesImg");
                });
            });
        });
    });
});

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 2 - using promises
// ... Your code here

const steakElement = document.getElementById("steak");

obtainInstruction("steak", 0)
    .then((step) => {
        steakElement.innerHTML += `<li>${step}</li>`;
        return obtainInstruction("steak", 1);
    })
    .then((step) => {
        steakElement.innerHTML += `<li>${step}</li>`;
        return obtainInstruction("steak", 2);
    })
    .then((step) => {
        steakElement.innerHTML += `<li>${step}</li>`;
        return obtainInstruction("steak", 3);
    })
    .then((step) => {
        steakElement.innerHTML += `<li>${step}</li>`;
        return obtainInstruction("steak", 4);
    })
    .then((step) => {
        steakElement.innerHTML += `<li>${step}</li>`;
        return obtainInstruction("steak", 5);
    })
    .then((step) => {
        steakElement.innerHTML += `<li>${step}</li>`;
    })
    .catch((error) => console.error(error))
    .finally(() => {
        steakElement.innerHTML += `<li>Steak is ready!</li>`;
    });

// Iteration 3 using async/await
// ...

async function makeBroco() {
    const broccoliElement = document.getElementById("broccoli");
    try {
        for (let i = 0; i < broccoli.length; i++) {
            broccoliElement.innerHTML += `<li>${await obtainInstruction("broccoli", i)}</li>`;
            // broccoliElement.innerHTML += `<li>${await obtainInstruction('brocolli', 5)}</li>`
        }
    } catch (error) {
        console.error(error);
    }
}
makeBroco();

// Bonus 2 - Promise all
// ...

const arrayOfPromises = [
    obtainInstruction("brusselsSprouts", 0),
    obtainInstruction("brusselsSprouts", 1),
    obtainInstruction("brusselsSprouts", 2),
    obtainInstruction("brusselsSprouts", 3),
    obtainInstruction("brusselsSprouts", 4),
];

const brusselsSprountsElement = document.getElementById("brusselsSprouts");
Promise.all(arrayOfPromises)
    .then((data) => {
        console.log(data);
        for (const instruction of data) {
            brusselsSprountsElement.innerHTML += `<li>${instruction}</li>`;
        }
    })
    .catch((error) => console.error(error));
