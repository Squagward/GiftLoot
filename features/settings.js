import { Setting, SettingsObject } from "SettingsManager/SettingsManager";

export const settings = new SettingsObject(
  "GiftLoot",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", false),
        new Setting.Slider("Scale", 1, 0, 5, 3),
        new Setting.Button("Edit Location", "Click here!", () => {
          ChatLib.command("movegiftgui", true);
        }),
        new Setting.Button("Discord", "Click here!", () => {
          ChatLib.command("giftdc", true);
          Client.setCurrentChatMessage("");
        })
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
  .setSize(200, 170);

Setting.register(settings);