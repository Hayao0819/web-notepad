var editors=2;

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

    // それ以外のエディターを削除
    for (var current = 1; current < editors; current++){
        if (current != number) {
            document.getElementById("editor-" + current + "-container").style.display = "none";
        }
    }

    // 設定値を更新
    current_tab = number;
    resize_editor();
}

function add_tab() {
    // エディター数を更新
    editors++;

    // ボタンを生成
    var tab_buttons = document.getElementById("tab-buttons");
    var new_button  = `<label class="tab_item" for="tab-${editors}" onclick="enable_tab(${editors})"><input id="tab-${editors}" type="radio" name="tab_item">エディター${editors}</label>`;
    tab_buttons.insertAdjacentHTML("beforeend", new_button);

    // エディタを生成
    var tab_editors = document.getElementById("tab-editors");
    var new_editor  = `<div id="editor-${editors}-container"><form><input type="text" id="editor-${editors}-name"><br><textarea class="editor" id="editor-${editors}" placeholder="ここに入力"></textarea></form></div>`;
    tab_editors.insertAdjacentHTML("beforeend", new_editor);
}
