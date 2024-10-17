// Mengambil elemen yang diperlukan
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas ke daftar
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    // Membuat elemen li untuk tugas baru
    const li = document.createElement("li");
    li.textContent = taskText;

    // Membuat tombol edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(li));

    // Membuat tombol delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", () => removeTask(li));

    // Menambahkan tombol ke dalam li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Menambahkan li ke dalam ul
    taskList.appendChild(li);

    // Mengosongkan input setelah menambahkan tugas
    taskInput.value = "";
}

// Fungsi untuk mengedit tugas
function editTask(li) {
    const newTask = prompt("Edit tugas:", li.textContent.replace("EditHapus", "").trim());
    if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.textContent = newTask;
    }
}

// Fungsi untuk menghapus tugas
function removeTask(li) {
    taskList.removeChild(li);
}

// Menambahkan event listener untuk tombol "Tambah"
addBtn.addEventListener("click", addTask);

// Menambahkan tugas dengan menekan tombol Enter
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
