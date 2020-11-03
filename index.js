/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { Setting } from "SettingsManager/SettingsManager";
import { settings } from "./features/settings.js";
import { lootDetector } from "./features/loot/loot.js";
import { window, shadow, updateDisplay } from "./features/loot/lootDisplay.js";
import { ScaledTextConstraint } from "Elementa/index";
import { gui, dragFunc, clickFunc, releaseFunc, moveGiftGui } from "./features/gui.js";

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

gui.registerMouseDragged(dragFunc);
gui.registerClicked(clickFunc);
gui.registerMouseReleased(releaseFunc);
register("command", moveGiftGui).setName("movegiftgui");