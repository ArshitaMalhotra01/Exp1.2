document.addEventListener("DOMContentLoaded", function () {

    const filter = document.getElementById("filter");
    const cards = document.querySelectorAll(".card");

    filter.addEventListener("change", function () {
        const selectedValue = filter.value;

        cards.forEach(function (card) {
            const category = card.getAttribute("data-category");

            if (selectedValue === "all" || selectedValue === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

});
