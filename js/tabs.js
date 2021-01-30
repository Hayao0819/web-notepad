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

    // 設定値を更新
    current_tab = number;

    // エディタを更新
    update_editors();

    // エディタサイズを更新
    resize_editor();

    // ストレージの値を更新
    save_editor_number();
}

// タブを追加
function add_tab() {
    // エディター数を更新
    editors++;

    // ボタンを生成
    var tab_buttons = document.getElementById("tab-buttons");
    var new_button  = `
    <label class="tab_item" for="tab-${editors}" onclick="enable_tab(${editors})" id="tab-label-${editors}">
        <input id="tab-${editors}" type="radio" name="tab_item">エディター${editors}
    </label>
    `;
    tab_buttons.insertAdjacentHTML("beforeend", new_button);

    // エディタを生成
    var tab_editors = document.getElementById("tab-editors");
    var new_editor  = `
    <div id="editor-${editors}-container">
        <form>
            <span class="settings">
                <input type="text" id="editor-${editors}-name" class="filename_box" placeholder="ファイル名を入力">
                <select name="encoding" class="encoding" id="editor-${editors}-encoding"></select>
            </span>
            <span class="editors">
                <textarea class="editor" id="editor-${editors}" placeholder="ここに入力"></textarea>
            <span class="editors">
        </form>
    </div>`;
    tab_editors.insertAdjacentHTML("beforeend", new_editor);

    // 切り替え
    enable_tab(editors);

    //タブ数保存
    save_editor_number();

    // エディタを更新
    update_editors();
}

// エディタを再描写
function update_editors() {
    // 選択されていないエディターを削除
    for (var i = 1; i <= editors; i++){
        //console.log(`current=${current} editors=${editors} number=${number}`)
        if (i != current_tab) {
            document.getElementById("editor-" + i + "-container").style.display = "none";
            document.getElementById("tab-label-" + i).classList.remove("selected_tab");
        }
    }
}
