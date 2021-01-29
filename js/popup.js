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
        this.popup.classList+=["popup"]

        // popupの上にレイヤーを作成
        this.popup.insertAdjacentHTML("beforebegin", `<span class="layer" id="${id}-layer"></span>`);
        this.layer = document.getElementById(id + "-layer");
    }

    open(){
        this.layer.style.display = "block";
        this.popup.style.display = "block";
    }

    close(){
        this.layer.style.display = "none";
        this.popup.style.display = "none";
    }
}

about_hayao = new Popup("about-hayao");
usage = new Popup("usage");
reset_confirm = new Popup("reset");
