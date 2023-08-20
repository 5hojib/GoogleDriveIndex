let len = window.drive_names.length;
let html = "";
for (var i = 0; i < len; i++) {
html += `<a href="/`+i+`:/" style="color: ${UI.folder_text_color};"class="list-group-item list-group-item-action">`+window.drive_names[i]+`</a>`;}
$('#n_drives').html(len);
$('#list').html(html);