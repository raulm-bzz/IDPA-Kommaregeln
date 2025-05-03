
document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("http://localhost:5000/api/exercises", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const allExercises = await response.json();
    console.log(allExercises)
    const entry = Object.values(allExercises).filter(
        ex => ex.exerciseType === "entry"
    );
    const short = Object.values(allExercises).filter(
        ex => ex.exerciseType === "short"
    );
    const long = Object.values(allExercises).filter(
        ex => ex.exerciseType === "long"
    );
    console.log(entry);
    console.log(short);
    console.log(long);


    function createButtons(list, containerId) {
        const container = document.getElementById(containerId);
        list.forEach(exercise => {
            const button = document.createElement("div");
            button.classList.add("task-button");
            button.textContent = exercise.name;
            button.addEventListener("click", function() {
                window.location.href = `trainer.html?task=${exercise.id}`;
            });
            container.appendChild(button);
        });
    }

    createButtons(entry, "entry-list");
    createButtons(short, "short-list");
    createButtons(long, "long-list2");
});
