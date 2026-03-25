// Copy IP
function copyIP() {
    const ip = "HerobrineSMPa.aternos.me";
    navigator.clipboard.writeText(ip);
    alert("Copied: " + ip);
}

// Cursor glow effect
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});