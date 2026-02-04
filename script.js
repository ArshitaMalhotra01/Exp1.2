const svg = document.getElementById("svgCanvas");
const countText = document.getElementById("count");

let circles = [];

svg.addEventListener("click", function (event) {
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", "#2f80ff");

    svg.appendChild(circle);
    circles.push(circle);
    updateCount();
});

function undo() {
    if (circles.length > 0) {
        const last = circles.pop();
        svg.removeChild(last);
        updateCount();
    }
}

function updateCount() {
    countText.textContent = circles.length;
}
