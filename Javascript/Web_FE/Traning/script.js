let req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function() {
    if(this.readyState === 4) {
        // console.log(this.response);
        let data = JSON.parse(this.response);
        //문서에 이미지 추가
        for(let i = 0; i < data.length; i++) {
            let div = document.createElement("div");  //div 태그
            div.setAttribute("class", "image");
            //이미지 선택/해제
            div.onclick = () => {
                this.classList.toggle("image-selected");
            }
            //이미지 확대
            div.onmouseover = () => {
                let element = this;
                //1초간 이미지 확대
                this.timerId = setTimeout(() => {
                    element.classList.add("image-magnified");
                }, 1000);
            }
            //이미지 축소
            div.onmouseout = () => {
                clearTimeout(this.timerId);
                this.classList.remove("image-magnified");
            }
            let img = document.createElement("img");  //img 태그
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send();

//사진 전체 선택, 해제
const selectAll = (btn) => {
    let images = document.getElementsByClassName("image");
    for(let i = 0; i < images.length; i++) {
        if(btn.value === "Unselect All") images[i].classList.remove("image-selected");
        else images[i].classList.add("image-selected");
    }

    if(btn.value === "Unselect All") btn.value = "Select All";
    else btn.value = "Unselect All";
}