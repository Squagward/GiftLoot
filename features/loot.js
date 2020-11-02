import PVObject from "PersistentData";

const loot = new PVObject("GiftLoot", {
  totalGifts: 0,

  coins: 0,

  alchemyXP: 0,
  combatXP: 0,
  enchantingXP: 0,
  farmingXP: 0,
  fishingXP: 0,
  foragingXP: 0,
  miningXP: 0,

  pots: 0,
  snowMinions: 0,

  luck: 0,
  scav: 0,
  looting: 0,

  snowSuit: 0,

  giftTheFishes: 0,
  snowmen: 0,
  goldenGifts: 0,
  krampusHelm: 0,

  commons: 0,
  rares: 0,
  sweets: 0,
  santas: 0,
});

function lootDetector(rarity, item) {
  loot.totalGifts++;
  item = item.replace(/,/g, "");

  switch (rarity) {

    case "COMMON":
      loot.commons++;

      if (item.includes("coins")) {
        let coins = item.split(" ")[0];
        coins = parseInt(coins);
        loot.coins += coins;
      }
      else if (item.includes("Potion")) loot.pots++;
      else if (item.includes("XP")) {
        let xp = item.split(" ")[0];
        xp = parseInt(xp);

        if (item.includes("Alchemy")) loot.alchemyXP += xp;
        else if (item.includes("Combat")) loot.combatXP += xp;
        else if (item.includes("Enchanting")) loot.enchantingXP += xp;
        else if (item.includes("Farming")) loot.farmingXP += xp;
        else if (item.includes("Fishing")) loot.fishingXP += xp;
        else if (item.includes("Foraging")) loot.foragingXP += xp;
        else if (item.includes("Mining")) loot.miningXP += xp;
      }

      break;

    case "RARE":
      loot.rares++;

      if (item.includes("coins")) {
        let coins = item.split(" ")[0];
        coins = parseInt(coins);
        loot.coins += coins;
      }
      else if (item.includes("Potion")) loot.pots++;
      else if (item.includes("Luck VI")) loot.luck++;
      else if (item.includes("Scavenger IV")) loot.scav++;
      else if (item.includes("Looting IV")) loot.looting++;

      break;

    case "SWEET":
      loot.sweets++;

      if (item.includes("Snow Minion I")) loot.snowMinions++;
      else if (item.includes("Snow Suit")) loot.snowSuit++;

      break;

    case "SANTA TIER":
      loot.santas++;

      if (item.includes("coins")) {
        let coins = item.split(" ")[0];
        coins = parseInt(coins);
        loot.coins += coins;
      }

      else if (item.includes("Gift the Fish")) loot.giftTheFishes++;
      else if (item.includes("Snowman Pet")) loot.snowmen++;
      else if (item.includes("Golden Gift")) loot.goldenGifts++;
      else if (item.includes("Krampus Helmet")) loot.krampusHelm++;

      break;
  }
}

export { loot, lootDetector }