const canvas = document.getElementById("outputCanvas");
const ctx = canvas.getContext("2d");
const textInput = document.getElementById("textInput");
const downloadButton = document.getElementById("downloadButton");

const sealScriptFontUrl = "./fonts/HOT-TenshoStd-M.otf";
const fontFace = new FontFace("HOT-TenshoStd-M", `url(${sealScriptFontUrl})`);

fontFace.load().then(() => {
  document.fonts.add(fontFace);
  console.log("篆書体フォントがロードされました。");
});

function drawText() {
  const text = textInput.value;
  const canvasWidth = 500;
  const canvasHeight = 200;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.font = "48px HOT-TenshoStd-M";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
}

function downloadImage() {
  const text = textInput.value;
  const link = document.createElement("a");
  link.download = `${text}篆書体.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

textInput.addEventListener("input", drawText);
downloadButton.addEventListener("click", downloadImage);

drawText();