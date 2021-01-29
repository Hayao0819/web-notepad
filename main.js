function clicktest() {
    console.log("クリックされたよ");
}

// エディタの高さを設定
window.addEventListener("resize", resize_editor, false);
window.addEventListener("load", resize_editor, false);
function resize_editor(){
    var header = document.getElementById("header");
    var editor = document.getElementById("editor");

    // ヘッダーの高さ
    var header_height = header.clientHeight;

    // ウィンドウの高さ
    var window_height = window.innerHeight;

    // 追加の余白 (ウィンドウの高さの10%)
    var additional_height = window_height * 0.1;
    var editor_height = window_height - header_height - additional_height;

    // 高さを設定
    editor.style.height = editor_height + "px";

    return 0;
}


// 読み込み時にエディターにフォーカス
window.onload = function() {
    document.getElementById("editor").focus();
};
