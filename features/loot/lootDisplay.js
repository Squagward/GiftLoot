import { loot } from "./loot";
import { prettyNumber } from "../../utils/prettyNumber";
import { settings } from "../settings";
import {
  Window, UIText, UIContainer, UIRoundedRectangle,
  ChildBasedMaxSizeConstraint, CenterConstraint,
  SiblingConstraint, ChildBasedSizeConstraint,
  ConstantColorConstraint, AdditiveConstraint,
  ScaledTextConstraint
} from "Elementa/index";
import { bgColor, lines } from "../constants";

const title = new UIText("§9§lGift§b§lLoot")
  .setX(new CenterConstraint())
  .setY((5).pixels());

const author = new UIText("by Squagward")
  .setX(new CenterConstraint())
  .setY(new SiblingConstraint());

const newLines = [];
for (let i = 0; i < lines.len; i++) {
  newLines[i] = new UIText("")
    .setX((5).pixels())
    .setY(new SiblingConstraint());
}

const shadow = new UIRoundedRectangle(5)
  .setX((0).pixels())
  .setY((0).pixels())
  .setWidth(new AdditiveConstraint(new ChildBasedMaxSizeConstraint(), (10).pixels()))
  .setHeight(new AdditiveConstraint(new ChildBasedSizeConstraint(), (10).pixels()))
  .setColor(new ConstantColorConstraint(bgColor));

const group = new UIContainer()
  .setX(loot.x.pixels())
  .setY(loot.y.pixels())
  .setWidth(new ChildBasedSizeConstraint())
  .setHeight(new ChildBasedSizeConstraint())
  .addChild(shadow);

const window = new Window().addChild(group);

function updateDisplay() {
  newLines[0].setText(`§3Alchemy XP: ${prettyNumber(loot.alchemyXP)}`);
  newLines[1].setText(`§3Combat XP: ${prettyNumber(loot.combatXP)}`);
  newLines[2].setText(`§3Enchanting XP: ${prettyNumber(loot.enchantingXP)}`);
  newLines[3].setText(`§3Farming XP: ${prettyNumber(loot.farmingXP)}`);
  newLines[4].setText(`§3Fishing XP: ${prettyNumber(loot.fishingXP)}`);
  newLines[5].setText(`§3Foraging XP: ${prettyNumber(loot.foragingXP)}`);
  newLines[6].setText(`§3Mining XP: ${prettyNumber(loot.miningXP)}`);
  newLines[7].setText(`§9Luck VI: ${prettyNumber(loot.luck)}`);
  newLines[8].setText(`§9Scavenger IV: ${prettyNumber(loot.scav)}`);
  newLines[9].setText(`§9Looting IV: ${prettyNumber(loot.looting)}`);
  newLines[10].setText(`§5Snow Suit Pieces: ${prettyNumber(loot.snowSuit)}`);
  newLines[11].setText(`§cGift the Fish: ${prettyNumber(loot.giftTheFishes)}`);
  newLines[12].setText(`§6Snowman Pets: ${prettyNumber(loot.snowmen)}`);
  newLines[13].setText(`§cGolden Gifts: ${prettyNumber(loot.goldenGifts)}`);
  newLines[14].setText(`§cKrampus Helmets: ${prettyNumber(loot.krampusHelm)}`);
  newLines[15].setText(`§3Potions: ${prettyNumber(loot.pots)}`);
  newLines[16].setText(`§e§lSnow Minions: ${prettyNumber(loot.snowMinions)}`);
  newLines[17].setText(`§e§lTotal Coins: ${prettyNumber(loot.coins)}`);
  newLines[18].setText(`§lCommon Drops: ${prettyNumber(loot.commons)}`);
  newLines[19].setText(`§9§lRare Drops: ${prettyNumber(loot.rares)}`);
  newLines[20].setText(`§e§lSweet Drops: ${prettyNumber(loot.sweets)}`);
  newLines[21].setText(`§c§lSanta Drops: ${prettyNumber(loot.santas)}`);
  newLines[22].setText(`§lTotal Gifts: ${prettyNumber(loot.totalGifts)}`);
  newLines[23].setText(`§l${loot.snowMinions ? prettyNumber(Math.round(loot.totalGifts / loot.snowMinions * 10) / 10) : "0"} Gifts / Snow Minion`);
}

const groups = {
  xp: [
    newLines[0], newLines[1], newLines[2],
    newLines[3], newLines[4], newLines[5],
    newLines[6]
  ],
  books: [
    newLines[7], newLines[8], newLines[9]
  ],
  snowSuit: newLines[10],
  santas: [
    newLines[11], newLines[12],
    newLines[13], newLines[14]
  ],
  potions: newLines[15],
  snowMinions: newLines[16],
  coins: newLines[17],
  rarity: [
    newLines[18], newLines[19],
    newLines[20], newLines[21]
  ],
  totalGifts: newLines[22],
  ratio: newLines[23]
}

function showOrHide() {
  shadow.clearChildren();
  shadow.addChildren(title, author);

  if (settings.getSetting("Toggles", "XP"))
    shadow.addChildren(...groups.xp);
  if (settings.getSetting("Toggles", "Books"))
    shadow.addChildren(...groups.books);
  if (settings.getSetting("Toggles", "Snow Suit Pieces"))
    shadow.addChildren(groups.snowSuit);
  if (settings.getSetting("Toggles", "Santa Gifts"))
    shadow.addChildren(...groups.santas);
  if (settings.getSetting("Toggles", "Potions"))
    shadow.addChildren(groups.potions);
  if (settings.getSetting("Toggles", "Snow Minions"))
    shadow.addChildren(groups.snowMinions);
  if (settings.getSetting("Toggles", "Total Coins"))
    shadow.addChildren(groups.coins);
  if (settings.getSetting("Toggles", "Gift Rarity Count"))
    shadow.addChildren(...groups.rarity);
  if (settings.getSetting("Toggles", "Total Gifts"))
    shadow.addChildren(groups.totalGifts);
  if (settings.getSetting("Toggles", "Snow Minion Rate"))
    shadow.addChildren(groups.ratio);
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

export { shadow, group }