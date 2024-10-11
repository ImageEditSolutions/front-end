var idContainer = document.getElementById("id");

function init() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  var span = document.createElement("span");
  span.innerHTML = id;
  idContainer.appendChild(span);
}

init();
