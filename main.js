'use strict';

$(function(){
  // 削除処理
  $("#sakujo").on("click", function(){
    localStorage.clear();
    showList();
  });

  // 保存処理
  $("#tuika").on("click", function(){
    console.log("追加");
    localStorage.setItem(localStorage.length.toString(), $(".task_value").val());
    $(".task_value").val("");
    showList();
  });

  $("#seiretu").on("click", function(){
    console.log("整列");
    localStorage.setItem(localStorage.length.toString(), $(".task_value").val());
    $(".task_value").val("");
    showList();
  });

  showList();
});

function showList() {
  $(".task_list").html("");
  for (let i = 0; i < localStorage.length; i++) {
  $(".task_list").append("<li class='list-group-item'><button class='btn btn-danger mr-2' onclick='deleteItem("+ localStorage.key(i) +")'></button>" + localStorage.getItem(localStorage.key(i)) + "</li>");
  console.log(i);
  }
  console.log("整列");
}

function deleteItem(i) {
  console.log("１さくじょ");
  localStorage.removeItem(i);
  showList();
}
