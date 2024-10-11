var locale_ru_ZH = {
  Flip: "뒤집기",
  Rotate: "회전",
  Draw: "그리기",
  Shape: "도형",
  Icon: "아이콘",
  Text: "텍스트",
  Mask: "마스크",
  // etc...
};

var imageEditor;
var widthInput, heightInput;
var inputButton;
var filterMenu, filterItems;

// function handleImageResize(event) {
//   var width, height;
//   var oldSize = imageEditor.ui._getEditorDimension();

//   var inputWidth = parseInt(widthInput.value, 10),
//     inputHeight = parseInt(heightInput.value, 10);

//   var maxWidth = imageEditor._graphics.cssMaxWidth;
//   var maxHeight = imageEditor._graphics.cssMaxHeight;

//   var canvas = imageEditor._graphics._canvas;
//   var canvasImage = imageEditor._graphics.canvasImage;
//   canvas.discardActiveObject();

//   if (
//     isNaN(inputWidth) ||
//     isNaN(inputHeight) ||
//     inputWidth === 0 ||
//     inputHeight === 0
//   ) {
//     return;
//   }

//   width = inputWidth > maxWidth ? maxWidth : inputWidth;
//   height = inputHeight > maxHeight ? maxHeight : inputHeight;
//   widthInput.value = String(width);
//   heightInput.value = String(height);

//   imageEditor._graphics.setCanvasCssDimension({
//     width: width + "px",
//     height: height + "px",
//     "max-width": width + "px",
//     "max-height": height + "px",
//   });

//   // imageEditor._graphics.setCanvasBackstoreDimension({
//   //   width: oldSize.width,
//   //   height: oldSize.height,
//   // });

//   var scaleWidthMultiplier = width / canvas.width;
//   var scaleHeightMultiplier = height / canvas.height;

//   var objects = canvas.getObjects();
//   for (var i in objects) {
//     objects[i].scaleX = objects[i].scaleX * scaleWidthMultiplier;
//     objects[i].scaleY = objects[i].scaleY * scaleHeightMultiplier;
//     objects[i].left = objects[i].left * scaleWidthMultiplier;
//     objects[i].top = objects[i].top * scaleHeightMultiplier;
//     objects[i].setCoords();
//   }
//   var obj = canvas.backgroundImage;
//   if (obj) {
//     obj.scaleX = obj.scaleX * scaleWidthMultiplier;
//     obj.scaleY = obj.scaleY * scaleHeightMultiplier;
//   }

//   canvas.setWidth(canvas.getWidth() * scaleWidthMultiplier);
//   canvas.setHeight(canvas.getHeight() * scaleHeightMultiplier);
//   imageEditor._graphics._canvas.centerObject(canvasImage);
//   canvas.renderAll();
//   canvas.calcOffset();

//   imageEditor.ui.resizeEditor({
//     imageSize: {
//       oldWidth: oldSize.width,
//       oldHeight: oldSize.height,
//       newWidth: width,
//       newHeight: height,
//     },
//   });

//   console.log(canvas);
// }

// function setResizeButton() {
//   filterMenu = document.querySelector(".tui-image-editor-menu-filter");
//   filterItems = filterMenu.querySelector(".tui-image-editor-submenu-item");

//   var filterList = filterItems.querySelector(
//     ".tui-image-editor-submenu-imageSize"
//   );
//   var sizeInputWrapper = filterList.querySelector(
//     ".tui-image-editor-size-wrapper"
//   );

//   heightInput = sizeInputWrapper.querySelector("#image-height");
//   heightInput.value = "705";

//   widthInput = sizeInputWrapper.querySelector("#image-width");
//   widthInput.value = "1200";

//   inputButton = sizeInputWrapper.querySelector("button");
//   inputButton.addEventListener("click", handleImageResize);
// }

async function createImageEditor() {
  imageEditor = await new tui.m_ImageEditor("#tui-image-editor-container", {
    includeUI: {
      loadImage: {
        path: "https://i.imgur.com/amsI8r5.png",
        name: "Blank",
      },
      locale: locale_ru_ZH,
      theme: whiteTheme,
      initMenu: "text",
      menuBarPosition: "bottom",
    },
    cssMaxWidth: document.documentElement.clientWidth,
    cssMaxHEight: document.documentElement.clientHeight,
    selectionStyle: {
      cornerSize: 50,
      rotatingPointOffset: 100,
    },
  });
}

async function init() {
  createImageEditor();
  // setTimeout(setResizeButton, 100);
  window.addEventListener("resize", function () {
    imageEditor.ui.resizeEditor();
  });
}

init();
