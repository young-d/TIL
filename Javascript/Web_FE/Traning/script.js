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
            div.onclick = () => {
                div.classList.toggle("image-selected");
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