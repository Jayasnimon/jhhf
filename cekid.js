async function cekIdFF(userId) {
  if (!userId) {
    throw new Error("User ID wajib diisi!");
  }

  try {
    const response = await fetch(
      `https://api-cek-id-game-ten.vercel.app/api/check-id-game?type_name=free_fire&userId=${userId}`,
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
    return data;
  } catch (err) {
    console.error("Error:", err);
    return { error: true, message: err.message };
  }
}

// ✅ supaya bisa dipanggil dari HTML
window.cekIdFF = cekIdFF;