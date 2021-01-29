var editors=[1,2];

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
    editors.forEach(
        function(current){
            if (current != number){
                document.getElementById("editor-" + current + "-container").style.display = "none";
            }
        }
    );

    // 設定値を更新
    current_tab = number;
    resize_editor();
}
