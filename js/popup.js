// はやおについて
/*
function about_hayao(){
    var layer = document.getElementById("about-hayao-layer");
    var popup = document.getElementById("about-hayao-popup")

    layer.style.display = "block";
    popup.style.display = "block";
}
*/

class Popup{
    constructor(id){
        //id: ポップアップにするHTML

        // idで指定されたHTMLを取得
        this.popup = document.getElementById(id);
        //this.popup.classList+=["popup"]

        // popupの上にレイヤーを作成
        this.popup.insertAdjacentHTML("beforebegin", `<span class="layer" id="${id}-layer"></span>`);
        this.layer = document.getElementById(id + "-layer");
        
        // idで指定されたHTMLに全体を覆う
        var _container = document.createElement("span");
        _container.classList.add("popup-container");
        _container.innerHTML = this.popup.innerHTML;
        this.popup.innerHTML = null;
        this.popup.appendChild(_container);

        //閉じるボタンを作成
        _container.insertAdjacentHTML("beforeend", `<p style="text-align: center;"><input type="button" value="閉じる" class="close_button"></p>`);
        this.close_button = this.popup.getElementsByClassName("close_button")[0];
        this.close_button.addEventListener("click", () => this.close(this),false);
        //console.log(this.close);
    }

    open(self=this){
        //console.log(this.layer);
        self.layer.style.display = "block";
        self.popup.style.display = "block";
    }

    close(self=this){
        self.layer.style.display = "none";
        self.popup.style.display = "none";
    }
}

//about_hayao = new Popup("about_hayao");
//usage = new Popup("usage");
//reset_confirm = new Popup("reset");
window.addEventListener("load", generate_popup,false);
function generate_popup() {
    popup_list = Array.from(document.getElementsByClassName("popup"));
    popup_list.forEach(function(_popup){
        var _create_popup_js_code=`${_popup.dataset.funcname} = new Popup("${_popup.id}");`
        eval(_create_popup_js_code);
        //console.log(_create_popup_js_code);

    });
}

/*
window.addEventListener("load",function(){
    save.open();
});
*/


// URLにポップアップが指定されていたら自動で開く
// 参考: https://gray-code.com/javascript/get-parameter-of-url/
window.addEventListener("load", function(){
    // URLを取得
    var url = new URL(window.location.href);
    var params = url.searchParams;

    // ?popup= で指定されている値を取得
    var popup_name = params.get("popup");
    var funcname = `${popup_name}.open`;

    // ?popupが空なら終了
    if (! popup_list){
        return;
    }

    // ?popup= で指定されているポップアップが存在していたら開く
    if(typeof [funcname] != undefined && typeof [funcname] == "object" ){
        eval(`${funcname}()`);
    }

    //閉じるボタンを押されたときにパラメータを消す
    /*
    Array.from(document.getElementsByClassName("close_button")).forEach(function(button){
        button.addEventListener("click",function(){
            // GETを削除する処理（あとで書く）
        })
    })
    */
});
