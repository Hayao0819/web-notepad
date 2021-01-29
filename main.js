// 変数の設定
var current_tab = 1;

// エディタの高さを設定
window.addEventListener("resize", resize_editor, false);
window.addEventListener("load", resize_editor, false);
function resize_editor(){
    // 要素の取得
    var header = document.getElementById("header");
    var editor = document.getElementById("editor-" + current_tab);

    //==============高さ==============\\
    // ヘッダーの高さ
    var header_height = header.clientHeight;
    // ウィンドウの高さ
    var window_height = window.innerHeight;
    // 追加の余白の高さ (ウィンドウの高さの10%)
    var additional_height = window_height * 0.1;
    // 高さを計算して確定
    var editor_height = window_height - header_height - additional_height;
    // 高さを設定
    editor.style.height = editor_height + "px";


    //==============横幅==============\\
    // ウィンドウの横幅
    var window_width = window.innerWidth;
    // 高さを計算して確定（ウィンドウの横幅の90%）
    var editor_width = window_width * 0.9
    // 横幅を設定（ウィンドウの横幅の90%）
    editor.style.width = editor_width + "px";


    return 0;
}


// 読み込み時にエディターにフォーカス
window.onload = function() {
    document.getElementById("editor-" + current_tab).focus();
};


// クリックテスト
function clicktest() {
    console.log("クリックされたよ");
}


// 内容を保存
// 参考: https://kakkoyakakko2.hatenablog.com/entry/2019/08/14/190000
function save_to_txt() {
    // 内容を取得
    var text = document.getElementById("editor-" + current_tab).value;

    //ファイル名を取得
    var name = document.getElementById("editor-" + current_tab + "-name").value;

    // 内容が空なら終了
    if (!text){
        return;
    }

    // ファイル名が空ならデフォルト値を仕様
    if (!name){
        name = "notitle.txt"
    }

    //文字列をblobに変換
    var blob = new Blob([text], {type: "text/plane"});

    //ダウンロード用のaタグを生成
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
}