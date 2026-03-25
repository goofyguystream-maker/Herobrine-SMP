// Copy IP button
function copyIP() {
  const ip = "HerobrineSMPa.aternos.me:60548";
  navigator.clipboard.writeText(ip);
  alert("Copied: " + ip);
}

// Cursor glow effect
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// 🔴 LIVE PLAYER COUNT
async function fetchPlayerCount() {
  try {
    const res = await fetch("https://api.mcsrvstat.us/2/HerobrineSMPa.aternos.me:60548");
    const data = await res.json();

    if (data.online) {
      document.getElementById("playerCount").innerText =
        data.players.online + " / " + data.players.max;
    } else {
      document.getElementById("playerCount").innerText = "Offline";
    }
  } catch (err) {
    document.getElementById("playerCount").innerText = "Error";
  }
}

// Run once
fetchPlayerCount();

// Refresh every 10 seconds
setInterval(fetchPlayerCount, 10000);
