const Color = Java.type("java.awt.Color");

const bgColor = new Color(0, 0, 0, 0.4);

const selectedColor = new Color(1, 1, 1, 0.4);

const lines = {
  len: 24
};

const gui = new Gui();

export { bgColor, selectedColor, lines, gui }