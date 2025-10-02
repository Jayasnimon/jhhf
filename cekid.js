async function cekId(userId, zoneId) {
  if (!userId || !gameID) {
    throw new Error("Parameter Tidak Valid!");
    console.log("Tidak Valid");
  }

   try {
    const response = await fetch(
      `https://api-cek-id-game-ten.vercel.app/api/check-id-game?type_name=${gameId}&userId=${userId}`,
      {
        method: "GET",
        headers: {
          "User-Agent": "cekid-client"
        }
      }
    );

    if (!response.ok) {
      throw new Error("Gagal mengambil data, status: " + response.status);
    }

    const data = await response.json();
    return data; // kembalikan data JSON
  } catch (err) {
    console.error("Error:", err);
    return { error: true, message: err.message };
  }
}

window.cekId = cekId;