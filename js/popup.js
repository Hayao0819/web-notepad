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
        //console.log(this.popup.innerHTML);

        //閉じるボタンを作成
        this.popup.insertAdjacentHTML("beforeend", `<input type="button" value="閉じる">`);
        this.popup.addEventListener("click", () => this.close(this),false);
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

