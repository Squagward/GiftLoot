/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { loot, lootDetector } from "./features/loot.js";
import { window, group, shadow, updateDisplay } from "./features/lootDisplay.js";
import { Setting } from "../SettingsManager/SettingsManager";
import { settings } from "./features/settings.js";
import { ScaledTextConstraint } from "Elementa/index";

Setting.register(settings);

register("chat", lootDetector).setCriteria("${rarity}! ${item} gift with ${*}!"); // only works on ct load right now

register("renderOverlay", () => {
  const scale = settings.getSetting("Settings", "Scale");
  shadow.children.forEach(child => {
    child.setTextScale(new ScaledTextConstraint(scale / 10));
  });

  updateDisplay();
  if (!settings.getSetting("Settings", "Enabled")) return;
  window.draw();
});

const gui = new Gui();
register("command", () => {
  if (settings.getSetting("Settings", "Enabled")) gui.open();
}).setName("movegiftgui");


gui.registerMouseDragged((mouseX, mouseY) => {
  loot.x = mouseX;
  loot.y = mouseY;

  group
    .setX(mouseX.pixels())
    .setY(mouseY.pixels());
});