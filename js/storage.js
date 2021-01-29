restore_storage();
window.addEventListener("keyup", save_on_storage, false);

//データをストレージに保存
function save_on_storage(){
    for (var editor = 1; editor <= editors; editor++){
        localStorage.setItem("editor-" + editor, document.getElementById("editor-" + editor).value);
    }
    save_editor_number();
}

// リセット
function reset_storage() {
    localStorage.clear();
    location.reload();
}

function restore_storage() {
    // ストレージを元にエディターを生成
    /*
    Object.keys(localStorage).forEach(function(key){
        if (key.match("^editor-.*")){
            console.log(key)
            add_tab();
        }
    });
    */

    var storage_editors = localStorage.getItem("editors");
    for (var i = 0; i < storage_editors - 1; i++){
        add_tab();
    }

    // エディターの一覧を元にストレージから復元
    for (var editor = 1; editor <= editors; editor++){
        // document.getElementById("editor-" + editor).value
        document.getElementById("editor-" + editor).value = localStorage.getItem("editor-" + editor);
    }
}


function save_editor_number() {
    localStorage.setItem("editors", editors);
}
