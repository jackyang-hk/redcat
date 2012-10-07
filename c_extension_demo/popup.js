// // Copyright (c) 2012 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.
// getContentFromServer(null);

// function getContentFromServer(e) {
// 	var request = createXMLHTTPRequest();
// 	request.open("get","http://ju.taobao.com",true);
// 	request.onreadystatechange = function () {
		
//                 if (request.readyState == 4) {
//         			// document.body.innerHTML = request.responseText;
//         			var element = document.getElementById("target");
//         			element.innerHTML = request.responseText;
//                 };
//             }
// 	request.send(null);
// }

// function createXMLHTTPRequest () {
//      var xmlhttp;
//             if (window.ActiveXObject) {
//                 xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
//             } else if (window.XMLHttpRequest) {
//                 xmlhttp = new XMLHttpRequest();
//             }
//             return xmlhttp;
// }

// function click(e) {
//   chrome.tabs.executeScript(null,
//       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//   window.close();
// }

// // document.addEventListener('DOMContentLoaded', function () {
// //   var divs = document.querySelectorAll('div');
// //   for (var i = 0; i < divs.length; i++) {
// //     divs[i].addEventListener('click', click);
// //   }
// // });


var req = new XMLHttpRequest();
req.open(
    "GET",
    "http://api.flickr.com/services/rest/?" +
        "method=flickr.photos.search&" +
        "api_key=90485e931f687a9b9c2a66bf58a3861a&" +
        "text=hello%20world&" +
        "safe_search=1&" +  // 1 is "safe"
        "content_type=1&" +  // 1 is "photos only"
        "sort=relevance&" +  // another good one is "interestingness-desc"
        "per_page=20",
    true);
req.onload = showPhotos;
req.send(null);

function showPhotos() {
  var photos = req.responseXML.getElementsByTagName("photo");

  for (var i = 0, photo; photo = photos[i]; i++) {
    var img = document.createElement("image");
    img.src = constructImageURL(photo);
    document.body.appendChild(img);
  }
}

// See: http://www.flickr.com/services/api/misc.urls.html
function constructImageURL(photo) {
  return "http://farm" + photo.getAttribute("farm") +
      ".static.flickr.com/" + photo.getAttribute("server") +
      "/" + photo.getAttribute("id") +
      "_" + photo.getAttribute("secret") +
      "_s.jpg";
}

