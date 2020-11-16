let fileShow = document.getElementById('file-show');
let upload_button = document.getElementById('upload');
let confirm_button = document.getElementsByClassName('add')[1];
let upload_list = document.getElementById('upload_list');
confirm_button.disabled = true;
//let file_set = new Set();

//上传文件
function easyUpload(){
    sendUploadRequest();  
    // var input = document.createElement("input");
    // input.type = "file";
    // input.click();
    // input.onchange = function(){
    //   var file = input.files[0];
    //   var form = new FormData();
    //  form.append("file", file); //第一个参数是后台读取的请求key值
    //  form.append("fileName", file.name);
    //  form.append("other", "666666"); //实际业务的其他请求参数
   // fileShow.value = file.name;
      //console.log(file.size);
     // var xhr = new XMLHttpRequest();
      //var action = "http://localhost:8080/upload.do"; //上传服务的接口地址
      // xhr.open("POST", action);
      // xhr.send(form); //发送表单数据
      // xhr.onreadystatechange = function(){
      //   if(xhr.readyState==4 && xhr.status==200){
      //     var resultObj = JSON.parse(xhr.responseText);
      //     //处理返回的数据......
      //   }
      // }
      confirm_button.disabled = false;
    // }
  };

//删除文件操作
function deleteFile(e) {
  //e.target.innerHTML = "666";
  let box = e.target.parentNode;
 // console.log(box.parentNode);
  box.innerHTML = "";
  box.parentNode.removeChild(box);
};

//开始烧写操作
function startBurn() {
  if(tmp.length == 0){
    alert("烧写队列中没有设备!");
  }
  else {
    //alert(tmp);
    sendBurnRequest();
  }  
  tmp = "";
}

function update_file_box(e) {
  let tag = e.target.parentNode.children[0].innerText;
//    console.log(tag);
  $('#files-show').tagsinput('add', tag);
  if($('#nodes-show').val() != ""){
    $add_firmware_btn[0].disabled = false;
  } else {
    $add_firmware_btn[0].disabled = true;
  }
}


// 确认添加文件
function addNewFile(){
  filename = fileShow.value;
 // sendUploadRequest();
  let new_file_object = document.createElement('div');
  let new_file_name = document.createElement('span');
  let delete_button = document.createElement('button');
  let add_file_button = document.createElement('button');
  //console.log(fileShow.value);
  new_file_name.innerHTML = fileShow.value;
  new_file_object.setAttribute("class", "file");
  delete_button.setAttribute("class", "btn delete");
  delete_button.addEventListener("click", deleteFile);
  add_file_button.setAttribute("class", "btn burn");
  add_file_button.addEventListener("click", update_file_box);
  delete_button.innerHTML = "删除文件";
  add_file_button.innerHTML = "选择文件";
  new_file_object.appendChild(new_file_name);
  new_file_object.appendChild(delete_button);
  new_file_object.appendChild(add_file_button);
  upload_list.appendChild(new_file_object);
  fileShow.value = "";
  confirm_button.disabled = true;
};

upload_button.addEventListener("click", easyUpload);
confirm_button.addEventListener("click", addNewFile);

// confirm_button.on('click', function() {
//   $(this).text("文字改变了");
// });

// $(function(){
//   $("#test").click(function(){
//     $(this).text("666");
//   });
// }); 