document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");

  const fontSizeInput = document.getElementById("fontSize");
  const colorInput = document.getElementById("color");
  const backgroundColorInput = document.getElementById("backgroundColor");
  const marginInput = document.getElementById("margin");
  const paddingInput = document.getElementById("padding");
  const borderInput = document.getElementById("border");

  fontSizeInput.addEventListener("input", () => {
    text.style.fontSize = `${fontSizeInput.value}px`;
  });

  colorInput.addEventListener("input", () => {
    text.style.color = colorInput.value;
  });

  backgroundColorInput.addEventListener("input", () => {
    text.style.backgroundColor = backgroundColorInput.value;
  });

  marginInput.addEventListener("input", () => {
    text.style.margin = `${marginInput.value}px`;
  });

  paddingInput.addEventListener("input", () => {
    text.style.padding = `${paddingInput.value}px`;
  });

  borderInput.addEventListener("input", () => {
    text.style.borderWidth = `${borderInput.value}px`;
  });
});
