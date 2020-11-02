/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { lootDetector } from "./features/loot.js";
import { group } from "./features/lootDisplay.js";
import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";


const settings = new SettingsObject(
  "GiftLoot",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", false),
        new Setting.Slider("Scale", 1, 0.5, 1.5, 3),
        new Setting.Slider("X", Renderer.screen.getWidth() / 2, 0, Renderer.screen.getWidth()),
        new Setting.Slider("Y", Renderer.screen.getHeight() / 2, 0, Renderer.screen.getHeight()),
      ]
    }
  ]
);
settings.setCommand("gift");
Setting.register(settings);

register("chat", lootDetector).setCriteria("${rarity}! ${item} gift with ${*}!");

register("renderOverlay", () => {
  if (!settings.getSetting("Settings", "Enabled")) return;

  group.draw();
});

register("tick", () => {
  const x = settings.getSetting("Settings", "X");
  const y = settings.getSetting("Settings", "Y");
  const scale = settings.getSetting("Settings", "Scale");

  group
    .setX(parseInt(x).pixels())
    .setY(parseInt(y).pixels());
})