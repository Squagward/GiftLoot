import { Setting, SettingsObject } from "SettingsManager/SettingsManager";

export const settings = new SettingsObject(
  "GiftLoot",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", false),
        new Setting.Slider("Scale", 1, 0.5, 1.5, 3),
        new Setting.Button("Edit Location", "Click here!", () => {
          ChatLib.command("movegiftgui", true);
        }),
      ]
    }
  ]
).setCommand("gift");