import { loot } from "./loot/loot";
import { group, shadow } from "./loot/lootDisplay";
import { settings } from "./settings";
import { ConstantColorConstraint } from "Elementa/index";
import { bgColor, selectedColor, gui } from "./constants";

function moveGiftGui() {
  if (settings.getSetting("Settings", "Enabled"))
    gui.open();
}

function shadeScreen() {
  if (gui.isOpen())
    Renderer.drawRect(
      Renderer.color(0, 0, 0, 70),
      0,
      0,
      Renderer.screen.getWidth(),
      Renderer.screen.getHeight()
    );
}

let isSelected = false;

function dragFunc(dx, dy) {
  if (!isSelected) return;

  loot.x += dx;
  loot.y += dy;

  group
    .setX((loot.x).pixels())
    .setY((loot.y).pixels());
}

function clickFunc(mouseX, mouseY) {
  if (
    mouseX >= loot.x && mouseX <= loot.x + group.getWidth() &&
    mouseY >= loot.y && mouseY <= loot.y + group.getHeight()
  ) {
    isSelected = true;
    shadow.setColor(new ConstantColorConstraint(selectedColor));
  }
}

function releaseFunc() {
  isSelected = false;
  shadow.setColor(new ConstantColorConstraint(bgColor));
}

register("renderOverlay", shadeScreen);
register("dragged", dragFunc);
gui.registerClicked(clickFunc);
gui.registerMouseReleased(releaseFunc);

export { moveGiftGui }