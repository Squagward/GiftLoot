import { Setting, SettingsObject } from "SettingsManager/SettingsManager";

export const settings = new SettingsObject(
  "GiftLoot",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", false),
        new Setting.Slider("Scale", 1, 0.25, 2.5, 3),
        new Setting.Button("Edit Location", "Click here!", () => {
          ChatLib.command("movegiftgui", true);
        }),
      ]
    },
    {
      name: "Toggles",
      settings: [
        new Setting.Toggle("XP", false),
        new Setting.Toggle("Books", false),
        new Setting.Toggle("Snow Suit Pieces", false),
        new Setting.Toggle("Santa Gifts", false),
        new Setting.Toggle("Potions", false),
        new Setting.Toggle("Snow Minions", false),
        new Setting.Toggle("Total Coins", false),
        new Setting.Toggle("Gift Rarity Count", false),
        new Setting.Toggle("Total Gifts", false),
        new Setting.Toggle("Snow Minion Rate", false),
      ]
    }
  ]
)
  .setCommand("gift")
  .setSize(
    Renderer.screen.getWidth() / 3,
    Renderer.screen.getHeight() * 2 / 3
  );

Setting.register(settings);