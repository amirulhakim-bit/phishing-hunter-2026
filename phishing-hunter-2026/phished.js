const steps = [
    "Verifying credentials...",
    "Loading account...",
    "Checking repositories...",
    "Retrieving profile data...",
    "Login successful"
];

function startSimulation(){

    let i = 0;

    const interval = setInterval(() => {

        status.innerText = steps[i];
        progress.style.width =
            ((i + 1) / steps.length) * 100 + "%";

        i++;

        if(i >= steps.length){

            clearInterval(interval);

            setTimeout(() => {

                document.getElementById("main-site")
                    .style.display = "none";

                document.getElementById("awareness-screen")
                    .style.display = "flex";

            }, 2000);

        }

    }, 1000);
}