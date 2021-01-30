window.addEventListener("load", function(){
    enable_tab(1);
}, false);

// 引数に渡されたタブを有効化
function enable_tab(number) {
    if (number == null){
        var number = 1;
    }

    // 選択されてるエディターを取得して表示
    document.getElementById("editor-" + number + "-container").style.display = "block";

    //タブにチェックを入れる
    document.getElementById("tab-" + number).checked = true;

    //色を赤にする
    document.getElementById("tab-label-" + number).classList.add("selected_tab");

    // それ以外のエディターを削除
    for (var current = 1; current <= editors; current++){
        //console.log(`current=${current} editors=${editors} number=${number}`)
        if (current != number) {
            document.getElementById("editor-" + current + "-container").style.display = "none";
            document.getElementById("tab-label-" + current).classList.remove("selected_tab");
        }
    }

    // 設定値を更新
    current_tab = number;

    // エディタサイズを更新
    resize_editor();

    // CodeMirrorを更新
    update_codemirror();
}

function add_tab() {
    // エディター数を更新
    editors++;

    // ボタンを生成
    var tab_buttons = document.getElementById("tab-buttons");
    var new_button  = `<label class="tab_item" for="tab-${editors}" onclick="enable_tab(${editors})" id="tab-label-${editors}"><input id="tab-${editors}" type="radio" name="tab_item">エディター${editors}</label>`;
    tab_buttons.insertAdjacentHTML("beforeend", new_button);

    // エディタを生成
    var tab_editors = document.getElementById("tab-editors");
    var new_editor  = `<div id="editor-${editors}-container"><form><input type="text" id="editor-${editors}-name" class="filename_box" placeholder="ファイル名を入力"><br><textarea class="editor" id="editor-${editors}" placeholder="ここに入力"></textarea></form></div>`;
    tab_editors.insertAdjacentHTML("beforeend", new_editor);

    // 切り替え
    enable_tab(editors);

    //タブ数保存
    save_editor_number();
}
