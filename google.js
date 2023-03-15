plus.click(addingBox);
function addingBox(e){
    var plus=$("#plus");
    var newBox=$(`<div class="box_most_el"></div>`);
    var newMostEl=$(`<div class="most_el" id=""></div>`);
    var newMostImg=$(`<img class="most_img" src="" alt=""></img>`);
    var parMost=$(`<p></p>`);
    let value=e.target.val();
    parMost.textContent="New Box";
    newMostImg.attr("alt","extra_box").attr(`src`,`images/plus_new.png`);
    newMostEl.append(newMostImg);
    newBox.append(newMostEl,parMost);
    newBox.before(plus);
}