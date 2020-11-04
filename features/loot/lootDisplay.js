import { loot } from "./loot.js";
import { prettyNumber } from "../../utils/prettyNumber.js";
import { settings } from "../settings.js";
import {
  Window, UIText, UIContainer, UIRoundedRectangle,
  ChildBasedMaxSizeConstraint, CenterConstraint,
  SiblingConstraint, ChildBasedSizeConstraint,
  ConstantColorConstraint, AdditiveConstraint,
  ScaledTextConstraint
} from "Elementa/index";

const Color = Java.type("java.awt.Color");

const title = new UIText("§9§lGift§b§lLoot")
  .setX(new CenterConstraint())
  .setY((5).pixels());

const author = new UIText("by Squagward")
  .setX(new CenterConstraint())
  .setY(new SiblingConstraint());

const line1 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line2 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line3 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line4 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line5 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line6 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line7 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line8 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line9 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line10 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line11 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line12 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line13 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line14 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line15 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line16 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line17 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line18 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line19 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line20 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line21 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line22 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line23 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line24 = new UIText("")
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const shadow = new UIRoundedRectangle(5)
  .setX((0).pixels())
  .setY((0).pixels())
  .setWidth(new AdditiveConstraint(new ChildBasedMaxSizeConstraint(), (10).pixels()))
  .setHeight(new AdditiveConstraint(new ChildBasedSizeConstraint(), (10).pixels()))
  .setColor(new ConstantColorConstraint(new Color(0 / 255, 0 / 255, 0 / 255, 100 / 255)));

const group = new UIContainer()
  .setX(loot.x.pixels())
  .setY(loot.y.pixels())
  .setWidth(new ChildBasedSizeConstraint())
  .setHeight(new ChildBasedSizeConstraint())
  .addChild(shadow);

const window = new Window().addChild(group);

function updateDisplay() {
  line1.setText(`§3Alchemy XP: ${prettyNumber(loot.alchemyXP)}`);
  line2.setText(`§3Combat XP: ${prettyNumber(loot.combatXP)}`);
  line3.setText(`§3Enchanting XP: ${prettyNumber(loot.enchantingXP)}`);
  line4.setText(`§3Farming XP: ${prettyNumber(loot.farmingXP)}`);
  line5.setText(`§3Fishing XP: ${prettyNumber(loot.fishingXP)}`);
  line6.setText(`§3Foraging XP: ${prettyNumber(loot.foragingXP)}`);
  line7.setText(`§3Mining XP: ${prettyNumber(loot.miningXP)}`);
  line8.setText(`§9Luck VI: ${prettyNumber(loot.luck)}`);
  line9.setText(`§9Scavenger IV: ${prettyNumber(loot.scav)}`);
  line10.setText(`§9Looting IV: ${prettyNumber(loot.looting)}`);
  line11.setText(`§5Snow Suit Pieces: ${prettyNumber(loot.snowSuit)}`);
  line12.setText(`§cGift the Fish: ${prettyNumber(loot.giftTheFishes)}`);
  line13.setText(`§6Snowman Pets: ${prettyNumber(loot.snowmen)}`);
  line14.setText(`§cGolden Gifts: ${prettyNumber(loot.goldenGifts)}`);
  line15.setText(`§cKrampus Helmets: ${prettyNumber(loot.krampusHelm)}`);
  line16.setText(`§3Potions: ${prettyNumber(loot.pots)}`);
  line17.setText(`§e§lSnow Minions: ${prettyNumber(loot.snowMinions)}`);
  line18.setText(`§e§lTotal Coins: ${prettyNumber(loot.coins)}`);
  line19.setText(`§lCommon Drops: ${prettyNumber(loot.commons)}`);
  line20.setText(`§9§lRare Drops: ${prettyNumber(loot.rares)}`);
  line21.setText(`§e§lSweet Drops: ${prettyNumber(loot.sweets)}`);
  line22.setText(`§c§lSanta Drops: ${prettyNumber(loot.santas)}`);
  line23.setText(`§lTotal Gifts: ${prettyNumber(loot.totalGifts)}`);
  line24.setText(`§l${loot.snowMinions ? prettyNumber(Math.round(loot.totalGifts / loot.snowMinions * 10) / 10) : "0"} Gifts / Snow Minion`);
}

const groups = {
  xp: [
    line1, line2, line3,
    line4, line5, line6,
    line7
  ],
  books: [
    line8, line9, line10
  ],
  snowSuit: [
    line11
  ],
  santas: [
    line12, line13,
    line14, line15
  ],
  potions: [
    line16
  ],
  snowMinions: [
    line17
  ],
  coins: [
    line18
  ],
  rarity: [
    line19, line20,
    line21, line22
  ],
  totalGifts: [
    line23
  ],
  ratio: [
    line24
  ]
}

function showOrHide() {
  shadow.clearChildren();
  shadow.addChildren(title, author);

  if (settings.getSetting("Toggles", "XP"))
    shadow.addChildren(...groups.xp);
  if (settings.getSetting("Toggles", "Books"))
    shadow.addChildren(...groups.books);
  if (settings.getSetting("Toggles", "Snow Suit Pieces"))
    shadow.addChildren(...groups.snowSuit);
  if (settings.getSetting("Toggles", "Santa Gifts"))
    shadow.addChildren(...groups.santas);
  if (settings.getSetting("Toggles", "Potions"))
    shadow.addChildren(...groups.potions);
  if (settings.getSetting("Toggles", "Snow Minions"))
    shadow.addChildren(...groups.snowMinions);
  if (settings.getSetting("Toggles", "Total Coins"))
    shadow.addChildren(...groups.coins);
  if (settings.getSetting("Toggles", "Gift Rarity Count"))
    shadow.addChildren(...groups.rarity);
  if (settings.getSetting("Toggles", "Total Gifts"))
    shadow.addChildren(...groups.totalGifts);
  if (settings.getSetting("Toggles", "Snow Minion Rate"))
    shadow.addChildren(...groups.ratio);
}

register("renderOverlay", () => {
  if (settings.getSetting("Settings", "Enabled"))
    window.draw();
});

register("tick", () => {
  if (!settings.getSetting("Settings", "Enabled")) return;

  showOrHide();
  updateDisplay();

  const scale = settings.getSetting("Settings", "Scale");
  shadow.children.forEach(child => {
    child.setTextScale(new ScaledTextConstraint(scale / 10));
  });
})

export { group, shadow }