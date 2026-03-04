function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("toggleBtn");

  sidebar.classList.toggle("collapsed");

  // ボタンの表示を切り替え
  if (sidebar.classList.contains("collapsed")) {
    btn.textContent = "▲"; // 開く
  } else {
    btn.textContent = "▼"; // 閉じる
  }
}
