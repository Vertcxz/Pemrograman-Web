<?php
// Segitiga Sama Sisi
$n = 5; // Jumlah baris untuk segitiga

for ($i = 1; $i <= $n; $i++) {
    // Mencetak spasi
    for ($j = 1; $j <= $n - $i; $j++) {
        echo "&nbsp;&nbsp;";
    }
    
    // Mencetak bintang
    for ($k = 1; $k <= 2 * $i - 1; $k++) {
        echo "*";
    }
    
    echo "<br>";
}

// Menambahkan jarak antara segitiga
echo "<br><br>"; // Menambahkan dua baris kosong

// Segitiga Sama Sisi Terbalik
for ($i = $n; $i >= 1; $i--) {
    // Mencetak spasi
    for ($j = 1; $j <= $n - $i; $j++) {
        echo "&nbsp;&nbsp;";
    }
    
    // Mencetak bintang
    for ($k = 1; $k <= 2 * $i - 1; $k++) {
        echo "*";
    }
    
    echo "<br>";
}
?>