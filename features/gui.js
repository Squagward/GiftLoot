import { loot } from "./loot/loot.js";
import { group, shadow } from "./loot/lootDisplay.js";
import { settings } from "./settings.js";
import { ConstantColorConstraint } from "Elementa/index";

const Color = Java.type("java.awt.Color");
const gui = new Gui();

function moveGiftGui() {
  if (settings.getSetting("Settings", "Enabled")) gui.open();
}

let isSelected = false;

function dragFunc(mouseX, mouseY) {
  if (!isSelected) return;
  loot.x = mouseX - group.getWidth() / 2;
  loot.y = mouseY - group.getHeight() / 2;
  group
    .setX((mouseX - group.getWidth() / 2).pixels())
    .setY((mouseY - group.getHeight() / 2).pixels());
}

function clickFunc(mouseX, mouseY) {
  if (
    mouseX > loot.x && mouseX < loot.x + group.getWidth() &&
    mouseY > loot.y && mouseY < loot.y + group.getHeight()
  ) {
    isSelected = true;
    shadow.setColor(new ConstantColorConstraint(new Color(96 / 255, 242 / 255, 12 / 255, 200 / 255)));
  }
}

function releaseFunc() {
  isSelected = false;
  shadow.setColor(new ConstantColorConstraint(new Color(0 / 255, 0 / 255, 0 / 255, 100 / 255)));
}

export { gui, moveGiftGui, dragFunc, clickFunc, releaseFunc }