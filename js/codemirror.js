//テキストエリアをCodeMirrorにする

window.addEventListener("load",update_codemirror,false);
function update_codemirror(){
    if (codemirror){
        for (var editor = 1; editor <= editors; editor++){
            var textarea = document.getElementById("editor-" + editor);

            // CodeMirrorの設定
            var jsEditor = CodeMirror.fromTextArea(textarea, {
                mode: "javascript",
                lineNumbers: true,
                indentUnit: 4
            });

            jsEditor.save();
        };
    };
}

window.addEventListener("load",load_editor_css,false);
function load_editor_css() {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('type','text/css');

    // CSSを読み込む
    if (codemirror){
        link.setAttribute('href','./codemirror/lib/codemirror.css');
    }else{
        link.setAttribute('href','./css/editor.css');
    }

    head.appendChild(link);
}
