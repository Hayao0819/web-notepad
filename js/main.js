// 変数の設定
var current_tab = 1;
var editors=1;
var codemirror = false;
//var codemirror = true;

// エディタの高さを設定
window.addEventListener("resize", resize_editor, false);
window.addEventListener("load", resize_editor, false);
function resize_editor(){
    // 要素の取得
    var header = document.getElementById("header");
    var editor = document.getElementById("editor-" + current_tab);
    var tabbar = document.getElementById("tab-buttons");

    // エディタに設定されているpaddingの値を取得
    //参考: https://javascript.programmer-reference.com/js-width-parseint/
    //参考: https://gray-code.com/javascript/get-css-applied-to-html-element/
    var editor_padding = parseInt(getComputedStyle(editor).getPropertyValue("padding"));


    //==============高さ==============\\
    // ヘッダーの高さ
    var header_height = header.clientHeight;
    // タブバーの高さ
    var tabbar_height = tabbar.clientHeight;
    // ウィンドウの高さ
    var window_height = window.innerHeight;
    // 追加の余白の高さ (ウィンドウの高さの10%)
    var additional_height = window_height * 0.1;
    // 高さを計算して確定
    var editor_height = window_height - header_height - tabbar_height - additional_height - editor_padding * 2;
    // 高さを設定
    editor.style.height = editor_height + "px";


    //==============横幅==============\\
    // ウィンドウの横幅
    var window_width = window.innerWidth;
    // 高さを計算して確定（ウィンドウの横幅の90%）
    var editor_width = window_width * 0.9 - editor_padding * 2;
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


// 開くダイアログ
function upload_file() {
    // フォームを作成
    var form = document.createElement("form");
    form.method = "POST";

    // ファイル選択ダイアログを生成
    var file_select = document.createElement("input");
    file_select.type = "file";
    file_select.id = "file_select";

    // フォームの中に選択ダイアログを入れる
    form.innerHTML = file_select;

    //ファイル選択ダイアログを実行
    file_select.click();

    // ファイルが選択されたときに関数を実行
    file_select.addEventListener("change", function() {
        //選択されたファイルをselected_files配列に代入
        selected_files = file_select.files;

        // 何も選択されていなかったら終了
        if ( selected_files.length == 0){
            return;
        };

        // readerを作成
        var reader = new FileReader();
        
        // テキストとして読み込み
        reader.readAsText(selected_files[0]);

        // ファイル名を取得
        var filename = selected_files[0].name;

        // 読み込まされたときに関数を実行
        reader.onload = function() {
            // 内容をエディターに反映
            document.getElementById("editor-" + current_tab).value = reader.result;

            // ファイル名をエディターに反映
            document.getElementById(`editor-${current_tab}-name`).value = filename;
        }
    }, false);
}

// 選択されてるエディタを空にする
function delete_editor(){
    document.getElementById("editor-" + current_tab).value = null;
}
