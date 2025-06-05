function submitPoll() {
    const options = document.getElementsByName("poll");
    let selected = null;

    for (let option of options) {
        if (option.checked) {
            selected = option.value;
            break;
        }
    }

    const result = document.getElementById("pollResult");

    if (selected) {
        result.textContent = `Thanks for voting! You chose: ${selected}.`;
    } else {
        result.textContent = "Please select an option before voting.";
    }
}