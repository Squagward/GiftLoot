import { loot } from "../features/loot.js";
import { prettyNumber } from "../utils/prettyNumber.js";
import {
  Window, UIText, UIContainer, UIRoundedRectangle,
  ChildBasedMaxSizeConstraint,
  SiblingConstraint, ChildBasedSizeConstraint,
  ConstantColorConstraint, AdditiveConstraint
} from "Elementa/index";

const Color = Java.type("java.awt.Color");

const line1 = new UIText(`§3Alchemy XP: ${prettyNumber(loot.alchemyXP)}`)
  .setX((5).pixels())
  .setY((5).pixels());

const line2 = new UIText(`§3Combat XP: ${prettyNumber(loot.combatXP)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line3 = new UIText(`§3Enchanting XP: ${prettyNumber(loot.enchantingXP)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line4 = new UIText(`§3Farming XP: ${prettyNumber(loot.farmingXP)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line5 = new UIText(`§3Foraging XP: ${prettyNumber(loot.foragingXP)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line6 = new UIText(`§3Mining XP: ${prettyNumber(loot.miningXP)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line7 = new UIText(`§9Luck VI: ${prettyNumber(loot.luck)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line8 = new UIText(`§9Scavenger IV: ${prettyNumber(loot.scav)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line9 = new UIText(`§9Looting IV: ${prettyNumber(loot.looting)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line10 = new UIText(`§5Snow Suit Pieces: ${prettyNumber(loot.snowSuit)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line11 = new UIText(`§cGift the Fish: ${prettyNumber(loot.giftTheFishes)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line12 = new UIText(`§6Snowman Pets: ${prettyNumber(loot.snowmen)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line13 = new UIText(`§cGolden Gifts: ${prettyNumber(loot.goldenGifts)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line14 = new UIText(`§cKrampus Helmets: ${prettyNumber(loot.krampusHelm)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line15 = new UIText(`§3Potions: ${prettyNumber(loot.pots)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line16 = new UIText(`§e§lSnow Minions: ${prettyNumber(loot.snowMinions)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line17 = new UIText(`§e§lTotal Coins: ${prettyNumber(loot.coins)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line18 = new UIText(`§lCommon Drops: ${prettyNumber(loot.commons)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line19 = new UIText(`§9§lRare Drops: ${prettyNumber(loot.rares)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line20 = new UIText(`§e§lSweet Drops: ${prettyNumber(loot.sweets)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line21 = new UIText(`§c§lSanta Drops: ${prettyNumber(loot.santas)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line22 = new UIText(`§lTotal Gifts: ${prettyNumber(loot.totalGifts)}`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const line23 = new UIText(`§l${prettyNumber(Math.round(loot.totalGifts / loot.snowMinions * 10) / 10)} Gifts / Snow Minion`)
  .setX((5).pixels())
  .setY(new SiblingConstraint());

const shadow = new UIRoundedRectangle(5)
  .setX((0).pixels())
  .setY((0).pixels())
  .setWidth(new AdditiveConstraint(new ChildBasedMaxSizeConstraint(), (10).pixels()))
  .setHeight(new AdditiveConstraint(new ChildBasedSizeConstraint(), (10).pixels()))
  .setColor(new ConstantColorConstraint(new Color(0, 0, 0, .35)))
  .addChildren(
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
    line7,
    line8,
    line9,
    line10,
    line11,
    line12,
    line13,
    line14,
    line15,
    line16,
    line17,
    line18,
    line19,
    line20,
    line21,
    line22,
    line23
  );

const group = new UIContainer()
  .setX(loot.x.pixels())
  .setY(loot.y.pixels())
  .setWidth(new ChildBasedSizeConstraint())
  .setHeight(new ChildBasedSizeConstraint())
  .addChild(shadow);

const window = new Window().addChild(group);

function updateDisplay() {
  line1.setText(`§3Alchemy XP: ${prettyNumber(loot.alchemyXP)}`);
  line2.setText(`§3Enchanting XP: ${prettyNumber(loot.enchantingXP)}`);
  line3.setText(`§3Farming XP: ${prettyNumber(loot.farmingXP)}`);
  line4.setText(`§3Foraging XP: ${prettyNumber(loot.foragingXP)}`);
  line5.setText(`§3Mining XP: ${prettyNumber(loot.miningXP)}`);
  line6.setText(`§9Luck VI: ${prettyNumber(loot.luck)}`);
  line7.setText(`§9Scavenger IV: ${prettyNumber(loot.scav)}`);
  line8.setText(`§9Looting IV: ${prettyNumber(loot.looting)}`);
  line9.setText(`§5Snow Suit Pieces: ${prettyNumber(loot.snowSuit)}`);
  line10.setText(`§cGift the Fish: ${prettyNumber(loot.giftTheFishes)}`);
  line11.setText(`§6Snowman Pets: ${prettyNumber(loot.snowmen)}`);
  line13.setText(`§cGolden Gifts: ${prettyNumber(loot.goldenGifts)}`);
  line14.setText(`§cKrampus Helmets: ${prettyNumber(loot.krampusHelm)}`);
  line15.setText(`§3Potions: ${prettyNumber(loot.pots)}`);
  line16.setText(`§e§lSnow Minions: ${prettyNumber(loot.snowMinions)}`);
  line17.setText(`§e§lTotal Coins: ${prettyNumber(loot.coins)}`);
  line18.setText(`§lCommon Drops: ${prettyNumber(loot.commons)}`);
  line19.setText(`§9§lRare Drops: ${prettyNumber(loot.rares)}`);
  line20.setText(`§e§lSweet Drops: ${prettyNumber(loot.sweets)}`);
  line21.setText(`§c§lSanta Drops: ${prettyNumber(loot.santas)}`);
  line22.setText(`§lTotal Gifts: ${prettyNumber(loot.totalGifts)}`);
  line23.setText(`§l${prettyNumber(Math.round(loot.totalGifts / loot.snowMinions * 10) / 10)} Gifts / Snow Minion`);
}

export { window, group, shadow, updateDisplay }