restore_storage();
window.addEventListener("keyup", save_on_storage, false);

//データをストレージに保存
function save_on_storage(){
    for (var editor = 1; editor <= editors; editor++){
        localStorage.setItem("editor-" + editor, document.getElementById("editor-" + editor).value);
        localStorage.setItem("editor-" + editor + "-name", document.getElementById("editor-" + editor + "-name").value);
    }
    save_editor_number();
}

// リセット
function reset_storage() {
    localStorage.clear();
    location.reload();
}

function restore_storage() {
    // 最後に選択されてた値を取得して変数にバックアップ
    var _last_selected = localStorage.getItem("last_selected");

    // エディタ数を取得しその回数だけタブを生成
    var storage_editors = localStorage.getItem("editors");
    for (var i = 0; i < storage_editors - 1; i++){
        add_tab();
    }

    // エディターの一覧を元にストレージから復元
    for (var editor = 1; editor <= editors; editor++){
        // document.getElementById("editor-" + editor).value
        document.getElementById("editor-" + editor).value = localStorage.getItem("editor-" + editor);
        document.getElementById("editor-" + editor + "-name").value = localStorage.getItem("editor-" + editor + "-name");
    }

    // 最後に選択されてたタブに移動
    if (_last_selected){
        enable_tab(_last_selected);
    }else{
        enable_tab(1);
    }
}


function save_editor_number() {
    localStorage.setItem("editors", editors);
    localStorage.setItem("last_selected", current_tab);
}
