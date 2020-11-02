/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { loot, lootDetector } from "./features/loot.js";
import { group, window } from "./features/lootDisplay.js";
import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";

const settings = new SettingsObject(
  "GiftLoot",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", false),
        new Setting.Slider("Scale", 1, 0.5, 1.5, 3),
        new Setting.Button("Edit Location", "Click here!", () => {
          ChatLib.command("movegiftgui", true);
        })
      ]
    }
  ]
);
settings.setCommand("gift");
Setting.register(settings);

register("chat", lootDetector).setCriteria("${rarity}! ${item} gift with ${*}!"); // only works on ct load right now

register("renderOverlay", () => {
  //const scale = settings.getSetting("Settings", "Scale");

  if (!settings.getSetting("Settings", "Enabled")) return;
  window.draw();

  // TODO
  // add scale somehow
});

const gui = new Gui();
register("command", () => {
  if (!settings.getSetting("Settings", "Enabled")) return;
  gui.open()
}).setName("movegiftgui");


gui.registerMouseDragged((mouseX, mouseY) => {
  loot.x = mouseX;
  loot.y = mouseY;

  group
    .setX(mouseX.pixels())
    .setY(mouseY.pixels());
});