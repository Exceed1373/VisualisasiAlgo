// Logika Inisialisasi Kontrol Engine Searching
document.addEventListener("DOMContentLoaded", () => {
    console.log("PTIK Searching Engine Active.");
    
    const btnSearch = document.getElementById("btn-search");
    if(btnSearch) {
        btnSearch.addEventListener("click", () => {
            const target = document.getElementById("target-value").value;
            alert("Mencari nilai target: " + target);
            // Tambahkan algoritma linear/binary search visualizer di sini
        });
    }
});

function selectSearchingAlgo(algoName) {
    console.log("Metode pencarian terpilih: " + algoName);
}
