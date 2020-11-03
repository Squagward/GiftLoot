/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { loot, lootDetector } from "./features/loot.js";
import { window, group, shadow, updateDisplay } from "./features/lootDisplay.js";
import { Setting } from "../SettingsManager/SettingsManager";
import { settings } from "./features/settings.js";
import { ScaledTextConstraint, ConstantColorConstraint } from "Elementa/index";

const Color = Java.type("java.awt.Color");

Setting.register(settings);

register("chat", lootDetector).setCriteria("${rarity}! ${item} gift with ${*}!");

register("renderOverlay", () => {
  updateDisplay();

  if (!settings.getSetting("Settings", "Enabled")) return;

  const scale = settings.getSetting("Settings", "Scale");
  shadow.children.forEach(child => {
    child.setTextScale(new ScaledTextConstraint(scale / 10));
  });
  window.draw();
});

const gui = new Gui();
register("command", () => {
  if (settings.getSetting("Settings", "Enabled")) gui.open();
}).setName("movegiftgui");

let isSelected = false;

gui.registerMouseDragged((mouseX, mouseY) => {
  if (!isSelected) return;
  loot.x = mouseX - group.getWidth() / 2;
  loot.y = mouseY - group.getHeight() / 2;
  group
    .setX((mouseX - group.getWidth() / 2).pixels())
    .setY((mouseY - group.getHeight() / 2).pixels());
});

gui.registerClicked((mouseX, mouseY) => {
  if (
    mouseX > loot.x && mouseX < loot.x + group.getWidth() &&
    mouseY > loot.y && mouseY < loot.y + group.getHeight()
  ) {
    isSelected = true;
    shadow.setColor(new ConstantColorConstraint(new Color(96 / 255, 242 / 255, 12 / 255, 200 / 255)));
  }
});

gui.registerMouseReleased(() => {
  isSelected = false;
  shadow.setColor(new ConstantColorConstraint(new Color(0 / 255, 0 / 255, 0 / 255, 100 / 255)));
});