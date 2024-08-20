"use client";

import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import { ComboboxDemo } from "./components/ComboBoxDemo";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


//#region Imports
import { ArmorAllDemo } from "./components/Tables/All/Amor_all";
import { AmmoAllDemo } from "./components/Tables/All/Ammo_all";
import { AshesAllDemo } from "./components/Tables/All/Ashes_all";
import { BossesAllDemo } from "./components/Tables/All/Bosses_all";
import { ClassesAllDemo } from "./components/Tables/All/Classes_all";
import { CreaturesAllDemo } from "./components/Tables/All/Creatures_all";
import { IncatationsAllDemo } from "./components/Tables/All/Incatations_all";
import { ItemsAllDemo } from "./components/Tables/All/Items_all";
import { LocationsAllDemo } from "./components/Tables/All/Locations_all";
import { NPCsAllDemo } from "./components/Tables/All/NPCs_all";
import { ShieldsAllDemo } from "./components/Tables/All/Shields_all";
import { SorceriesAllDemo } from "./components/Tables/All/Sorceries_all";
import { SpiritsAllDemo } from "./components/Tables/All/Spirits_all";
import { TalismansAllDemo } from "./components/Tables/All/Talismans_all";
import { WeaponsAllDemo } from "./components/Tables/All/Weapons_all";

import { AmmoOneDemo } from "./components/Tables/One/Ammo_one";
import { ArmorOneDemo } from "./components/Tables/One/Armor_one";
import { AshesOneDemo } from "./components/Tables/One/Ashes_one";
import { BossesOneDemo } from "./components/Tables/One/Bosses_one";
import { ClassesOneDemo } from "./components/Tables/One/Classes_one";
import { CreaturesOneDemo } from "./components/Tables/One/Creatures_one";
import { IncantationsOneDemo } from "./components/Tables/One/Incatations_one";
import { ItemsOneDemo } from "./components/Tables/One/Items_one";
import { LocationsOneDemo } from "./components/Tables/One/Locations_one";
import { NpcsOneDemo } from "./components/Tables/One/NPCs_one";
import { ShieldsOneDemo } from "./components/Tables/One/Shields_one";
import { SorceriesOneDemo } from "./components/Tables/One/Sorceries_one";
import { SpiritsOneDemo } from "./components/Tables/One/Spirits_one";
import { TalismansOneDemo } from "./components/Tables/One/Talismans_one";
import { WeaponsOneDemo } from "./components/Tables/One/Weapons_one";
//#endregion

import next from "next";
import { Allison } from "next/font/google";
import react from "@heroicons/react";
import { RectangleHorizontal } from "lucide-react";

export default function Home() {
  const [getOneIsChecked, setIsChecked] = React.useState(false);
  const [itemsType, setItemsType] = React.useState("");

  const [armorsItems, setArmorsItems] = React.useState([]);
  const [ammosItems, setAmmosItems] = React.useState([]);
  const [ashesItems, setAshesItems] = React.useState([]);
  const [bossesItems, setBossesItems] = React.useState([]);
  const [classesItems, setClassesItems] = React.useState([]);
  const [creaturesItems, setCreaturesItems] = React.useState([]);
  const [incatationsItems, setIncatationsItems] = React.useState([]);
  const [itemsItems, setItemsItems] = React.useState([]);
  const [locationsItems, setLocationsItems] = React.useState([]);
  const [npcsItems, setNpcsItems] = React.useState([]);
  const [shieldsItems, setShieldsItems] = React.useState([]);
  const [sorceriesItems, setSorceriesItems] = React.useState([]);
  const [spiritsItems, setSpiritsItems] = React.useState([]);
  const [talismansItems, setTalismansItems] = React.useState([]);
  const [weaponsItems, setWeaponsItems] = React.useState([]);

  const [ammoOneItem, setAmmoOneItem] = React.useState({});
  const [armorOneItem, setArmorOneItem] = React.useState({});
  const [ashesOneItem, setAshesOneItem] = React.useState({});
  const [bossesOneItem, setBossesOneItem] = React.useState({});
  const [classesOneItem, setClassesOneItem] = React.useState({});
  const [creaturesOneItem, setCreaturesOneItem] = React.useState({});
  const [incatiationsOneItem, setIncatationsOneItem] = React.useState({});
  const [itemsOneItem, setItemsOneItem] = React.useState({});
  const [locationOneItem, setLocationsOneItem] = React.useState({});
  const [npcsOneItem, setNpcsOneItem] = React.useState({});
  const [shieldsOneItem, setShieldsOneItem] = React.useState({});
  const [sorceriesOneItem, setSorcerieOneItem] = React.useState({});
  const [spiritsOneItem, setSpiritsOneItem] = React.useState({});
  const [talismansOneItem, setTalismansOneItem] = React.useState({});
  const [weaponsOneItem, setWeaponsOneItem] = React.useState({});

  const handleComboBoxChange = (value) => {
    setItemsType(value);
    console.log("Selected item type:", value);
  };

  const handleCheckboxChange = (checked) => {
    console.log("Checkbox state:", checked);
    setIsChecked(checked);
  };

  const baseUrl = "https://eldenring.fanapis.com/api/";
  async function searchButtonClick() { 
    if (getOneIsChecked && itemsType !== null) {
      // GET ONE

      let item = {};

      let idInput = document.getElementById("id_input").value;
      let nameInput = document.getElementById("name_input").value;

      let apiUrl = "";

      if (idInput !== ""){
        //search by id
        apiUrl = `${baseUrl}${itemsType}?id=${idInput}`;
      } else if (nameInput !== ""){
        //search by name
        apiUrl = `${baseUrl}${itemsType}?name=${nameInput}`;
      } else {
        return alert("ID or name fields is required");
      }

      let response = await fetch(apiUrl, {
        method: "GET",
      });

      let response_json = await response.json();
      item = response_json.data[0];

      switch (itemsType) {
        case "ammos": 
          var image = "";
          if (item.image === null || item.image === ""){
            image = "Not found";
          } else {
            image = item.image;
          }

          var attackPower = item.attackPower;
          var formattedAttackPhysical = attackPower.find(x => x.name === "physical");
          var formattedAttackMagic = attackPower.find(x => x.name === "magic");
          var formattedAttackFire = attackPower.find(x => x.name === "fire");
          var formattedAttackLightning = attackPower.find(x => x.name === "lightning");
          var formattedAttackHoly = attackPower.find(x => x.name === "holy");
          var formattedAttackCritical = attackPower.find(x => x.name === "critical");
          
          var itemToUpdate = {
            id: item.id,
            image: image,
            name: item.name,
            description: item.description,
            type: item.type,
            passive: item.passive,
            attackPowerPhysical: formattedAttackPhysical,
            attackPowerMagic: formattedAttackMagic,
            attackPowerFire: formattedAttackFire,
            attackPowerLightning: formattedAttackLightning,
            attackPowerHoly: formattedAttackHoly,
            attackPowerCrititical: formattedAttackCritical,
          }
          setAmmoOneItem(itemToUpdate);
          break;
        case "armors":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var dmgNeg = item.dmgNegation;
          var formattedNegPhy = dmgNeg.find(x => x.name == "Phy");
          var formattedNegStrike = dmgNeg.find(x => x.name === "Strike");
          var formattedNegSlash = dmgNeg.find(x => x.name === "Slash");
          var formattedNegPierce = dmgNeg.find(x => x.name === "Pierce");
          var formattedNegMagic = dmgNeg.find(x => x.name === "Magic");
          var formattedNegFire = dmgNeg.find(x => x.name === "Fire");
          var formattedNegLigt = dmgNeg.find(x => x.name === "Ligt");
          var formattedNegHoly = dmgNeg.find(x => x.name === "Holy");

          var res = item.resistance;
          var formattedResImmunity = res.find(x => x.name === "Immunity");
          var formattedResRobustness = res.find(x => x.name === "Robustness");
          var formattedResFocus = res.find(x => x.name === "Focus");
          var formattedResVitality = res.find(x => x.name === "Vitality");
          var formattedResPoise = res.find(x => x.name === "Poise");

          var itemToUpdate = {
            id: item.id,
            image: image,
            name: item.name,
            description: item.description,
            category: item.category,
            weight: item.weight,
            dmgNegPhy: formattedNegPhy,
            dmgNegStrike: formattedNegStrike,
            dmgNegSlash: formattedNegSlash,
            dmgNegPierce: formattedNegPierce,
            dmgNegMagic: formattedNegMagic,
            dmgNegFire: formattedNegFire,
            dmgNegLigt: formattedNegLigt,
            dmgNegHoly: formattedNegHoly,            
            resImmunity: formattedResImmunity,
            resRobustness: formattedResRobustness,
            resFocus: formattedResFocus,
            resVitality: formattedResVitality,
            resPoise: formattedResPoise,
          };
          setArmorOneItem(itemToUpdate);
          break;
        case "ashes":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var itemToUpdate = {
            image: image,
            name: item.name,
            id: item.id,
            description: item.description,
            skill: item.skill,
            affinity: item.affinity,
          }

          setAshesOneItem(itemToUpdate);
          break;
        case "bosses":
          var image = "";
          if (item.image === "" || item.image === null) {
            image = "Not found";
          } else {
            image = item.image;
          }

          const runeKeywords = ["runes", "Runes"];
          let result = [];
          let currentGroup = [];
          const drops = item.drops;
          drops.forEach(drop => {
            if (runeKeywords.some(keyword => drop.includes(keyword))) {
              if (currentGroup.length > 0) {
                result.push(currentGroup.join(", "));
              }
              currentGroup = [drop];
            } else {
              currentGroup.push(drop);
            }
          });
          if (currentGroup.length > 0) {
            result.push(currentGroup.join(", "));
          }            
          const formattedDrops = result.join(" | ");

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description,
            location: item.location,
            hp: item.healthPoints,
            drops: formattedDrops,
          }

          setBossesOneItem(itemToUpdate);
          break;
        case "classes":
          var image = "";
          if (item.image === "" || item.image === null) {
            image = "Not found";
          } else {
            image = item.image;
          }

          console.log("test", item.stats.level)

          var test = item.stats.level

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description,
            level: test,
            vigor: item.stats.vigor,
            mind: item.stats.mind,
            endurance: item.stats.endurance,
            strength: item.stats.strength,
            dexterity: item.stats.dexterity,
            inteligence: item.stats.inteligence,
            faith: item.stats.faith,
            arcane: item.stats.arcane
          }

          setClassesOneItem(itemToUpdate);
          break;
        case "creatures":
          var image = "";
          if (item.image === null || item.image === ""){
            image = "Not found";
          } else {
            image = item.image;
          }

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description, 
            location: item.location,
            drops: item.drops,
          }

          setCreaturesOneItem(itemToUpdate);
          break;
        case "incantations":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var requirements = item.requires;
          var formattedInteligence = requirements.find(x => x.name === "Intelligence");
          var formattedFaith = requirements.find(x => x.name === "Faith");
          var formattedArcane = requirements.find(x => x.name === "Arcane");

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description,
            cost: item.cost,
            slots: item.slots,
            effects: item.effects,
            intelligence: formattedInteligence,
            faith: formattedFaith,
            arcane: formattedArcane,
          }

          setIncatationsOneItem(itemToUpdate);
          break;
        case "items":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description,
            type: item.type,
            effect: item.effect
          }

          setItemsOneItem(itemToUpdate);
          break;
        case "locations":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var itemToUpdate = {
            id: item.id,
            image: image,
            name: item.name,
            description: item.description,
          }

          setLocationsOneItem(itemToUpdate);
          break;
        case "npcs":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var quote = ""; 
          if (item.quote === null || item.quote === "") {
            quote = "???";
          } else {
            quote = item.quote
          }

          var itemToUpdate = {
            id: item.id,
            name: item.name,
            image: image,
            quote: quote,
            location: item.location,
            role: item.role,
          }

          setNpcsOneItem(itemToUpdate);
          break;
        case "shields":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var formattedScaling = item.scalesWith.map(x => `${x.name}: ${x.scaling}`).join(", ");
          var formattedRequirements = item.requiredAttributes.map(x => `${x.name}: ${x.amount}`).join(", ");
          
          var attack = item.attack;
          var formattedAttackPhy = attack.find(x => x.name === "Phy"); 
          var formattedAttackMag = attack.find(x => x.name === "Mag");
          var formattedAttackFire = attack.find(x => x.name === "Fire");
          var formattedAttackLigt = attack.find(x => x.name === "Ligt");
          var formattedAttackHoly = attack.find(x => x.name === "Holy");
          var formattedAttackCrit = attack.find(x => x.name === "Crit");          

          var defence = item.attack;
          var formattedDefencePhy = defence.find(x => x.name === "Phy");
          var formattedDefenceMag = defence.find(x => x.name === "Mag");
          var formattedDefenceFire = defence.find(x => x.name === "Fire");
          var formattedDefenceLigt = defence.find(x => x.name === "Ligt");
          var formattedDefenceHoly = defence.find(x => x.name === "Holy");
          var formattedDefenceBoost = defence.find(x => x.name === "Boost");

          var itemToUpdate = {
            image: image, 
            id: item.id,
            name: item.name,
            description: item.description,
            category: item.category,
            weight: item.weight,
            scalesWith: formattedScaling,
            requirements: formattedRequirements,
            attackPhy: formattedAttackPhy,
            attackMag: formattedAttackMag,
            attackFire: formattedAttackFire,
            attackLigt: formattedAttackLigt,
            attackHoly: formattedAttackHoly,
            attackCrit: formattedAttackCrit,
            defencePhy: formattedDefencePhy,
            defenceMag: formattedDefenceMag,
            defenceFire: formattedDefenceFire,
            defenceLigt: formattedDefenceLigt,
            defenceHoly: formattedDefenceHoly,
            defenceBoost: formattedDefenceBoost,
          };

          setShieldsOneItem(itemToUpdate);
          break;
        case "sorceries": 
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var requirements = item.requires;
          var formattedRequirementsIntelligence = requirements.find(x => x.name === "Intelligence");
          var formattedRequirementsFaith = requirements.find(x => x.name === "Faith");
          var formattedRequirementsArcane = requirements.find(x => x.name === "Arcane");

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description,
            effects: item.effects,
            cost: item.cost,
            slots: item.slots,
            intelligence: formattedRequirementsIntelligence,
            faith: formattedRequirementsFaith,
            arcane: formattedRequirementsArcane,
          };

          setSorcerieOneItem(itemToUpdate);
          break;
        case "spirits":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var itemToUpdate = {
            image: image,
            name: item.name,
            description: item.description,
            id: item.id,
            fpCost: item.fpCost,
            hpCost: item.hpCost,
            effect: item.effect,
          };

          setSpiritsOneItem(itemToUpdate);
          break;
        case "talismans":
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var itemToUpdate = {
            image: image,
            id: item.id,
            name: item.name,
            description: item.description,
            effect: item.effect,
          };

          setTalismansOneItem(itemToUpdate);
          break;
        case "weapons": 
          var image = "";
          if (item.image === null || item.image === "") {
            image = "Not found";
          } else {
            image = item.image;
          }

          var formattedScaling = item.scalesWith.map(x => `${x.name}: ${x.scaling}`).join(", ");
          var formattedRequirements = item.requiredAttributes.map(x => `${x.name}: ${x.amount}`).join(", ");
          
          var attack = item.attack;
          var formattedAttackPhy = attack.find(x => x.name === "Phy");
          var formattedAttackMag = attack.find(x => x.name === "Mag");
          var formattedAttackFire = attack.find(x => x.name === "Fire");
          var formattedAttackLigt = attack.find(x => x.name === "Ligt");
          var formattedAttackHoly = attack.find(x => x.name === "Holy");
          var formattedAttackCrit = attack.find(x => x.name === "Crit");

          var defence = item.defence;
          var formattedDefencePhy = defence.find(x => x.name === "Phy");
          var formattedDefenceMag = defence.find(x => x.name === "Mag");
          var formattedDefenceFire = defence.find(x => x.name === "Fire");
          var formattedDefenceLigt = defence.find(x => x.name === "Ligt");
          var formattedDefenceHoly = defence.find(x => x.name === "Holy");
          var formattedDefenceBoost = defence.find(x => x.name === "Boost");

          var itemToUpdate = {
            image: image,
            name: item.name,
            id: item.id,
            description: item.description,
            scalesWith: formattedScaling,
            requirements: formattedRequirements,
            weight: item.weight,
            category: item.category,
            attackPhy: formattedAttackPhy,
            attackMag: formattedAttackMag,
            attackFire: formattedAttackFire,
            attackLigt: formattedAttackLigt,
            attackHoly: formattedAttackHoly,
            attackCrit: formattedAttackCrit,
            defencePhy: formattedDefencePhy,
            defenceMag: formattedDefenceMag,
            defenceFire: formattedDefenceFire,
            defenceLigt: formattedDefenceLigt,
            defenceHoly: formattedDefenceHoly,
            defenceBoost: formattedDefenceBoost,
          }

          setWeaponsOneItem(itemToUpdate);
          break;
      }

      console.log(item);
    } else if (!getOneIsChecked && itemsType !== null) {
      // GET ALL

      let allItems = [];

      // Get total
      let apiUrl = `${baseUrl}${itemsType}?limit=1`;
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      let response_json = await response.json();
      let total_count = parseInt(response_json.total, 10);
      let intervals_of_hundred = Math.floor(total_count / 100);
      
      for (let i = 0; i != intervals_of_hundred+1; i++) {
        console.log(i);
        apiUrl = `${baseUrl}${itemsType}?limit=100&page=${i}`;
        response = await fetch(apiUrl, {
          method: "GET",
        });
        response_json = await response.json();
        allItems.push(...response_json.data);
      }

      console.log("api done");
      console.log(itemsType);

      var mappedItems;
      switch (itemsType){
        case "armors":
          mappedItems = allItems.map(item => {
              let maxAmount = Math.max(...item.dmgNegation.map(x => x.amount));
              let maxNames = item.dmgNegation.filter(x => x.amount === maxAmount).map(x => x.name);
              const dmgNegationNames = maxNames.join(", ");

              return {
                  image: item.image,
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  Category: item.category,
                  dmgNegation: dmgNegationNames,
                  weight: item.weight,
              };
          });
          setArmorsItems(mappedItems);
        break;
        case "ammos":
          mappedItems = allItems.map(item => {
            let maxAmount = Math.max(...item.attackPower.map(x => x.amount));
            let maxNames = item.attackPower.filter(x => x.amount === maxAmount).map(x => x.name);
            const attackPower = maxNames.join(", ");

            var passive = "";
            if (item.passive === "-") {
              passive = "None";
            } else {
              passive = item.passive;
            }

            return {
              image: item.image,
              id: item.id,
              name: item.name,
              description: item.description,
              type: item.type,
              attackPower: attackPower,
              passive: passive,
            };
          });
          setAmmosItems(mappedItems);
          break;
        case "ashes":
          mappedItems = allItems.map(item => {
            var image;
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              image: image,
              id: item.id,
              name: item.name, 
              description: item.description,
              affinity: item.affinity,
              skill: item.skill,
            };
          });
          setAshesItems(mappedItems);
          break;
        case "bosses":
          mappedItems = allItems.map(item => {
            const runeKeywords = ["runes", "Runes"];
            let result = [];
            let currentGroup = [];
            const drops = item.drops;
            drops.forEach(drop => {
              if (runeKeywords.some(keyword => drop.includes(keyword))) {
                if (currentGroup.length > 0) {
                  result.push(currentGroup.join(", "));
                }
                currentGroup = [drop];
              } else {
                currentGroup.push(drop);
              }
            });
            if (currentGroup.length > 0) {
              result.push(currentGroup.join(", "));
            }            
            const formattedDrops = result.join(" | ");

            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              image: image,
              id: item.id,
              name: item.name,
              description: item.description,
              location: item.location,
              drops: formattedDrops,
            };
          });
          setBossesItems(mappedItems);
          break;
        case "classes":
          mappedItems = allItems.map(item => {
            var stats = `Level: ${item.stats.level}, Vigor: ${item.stats.vigor}, Mind: ${item.stats.mind}, Endurance: ${item.stats.endurance}, Strength: ${item.stats.strength}, Dexterity: ${item.stats.dexterity}, Inteligence: ${item.stats.inteligence}, Faith: ${item.stats.faith}, Arcance: ${item.stats.arcane}`;
            
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              id: item.id,
              name: item.name,
              image: image,
              description: item.description,
              stats: stats,
            }
          });
          setClassesItems(mappedItems);
          break;
        case "creatures": 
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }
    
            var dropsResult = [];
            if (Array.isArray(item.drops)) {
                var drops = item.drops;
                drops.forEach(drop => {
                    dropsResult.push(drop);
                });
            }
            var formattedDrops = dropsResult.length > 0 ? dropsResult.join(", ") : "";        

            return {
              name: item.name,
              image: image,
              description: item.description,
              id: item.id,
              location: item.location,
              drops: formattedDrops,
            };
          });
          setCreaturesItems(mappedItems);
          break;
        case "incantations":
          mappedItems = allItems.map( item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            var requires = [];
            var requirements = item.requires;
            if (Array.isArray(requirements)) {
              requirements.forEach(req => {
                requires.push(`${req.name}: ${req.amount}`);
              });
            }
            var formattedRequirements = requires.join(", ");

            return {
              id: item.id,
              image: image,
              name: item.name,
              description: item.description,
              effects: item.effects,
              cost: item.cost,
              slots: item.slots,
              requires: formattedRequirements,
            };
          });
          setIncatationsItems(mappedItems);
          break;
        case "items":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              id: item.id,
              name: item.name,
              image: image,
              description: item.description,
              type: item.type,
              effect: item.effect,
            }
          });
          setItemsItems(mappedItems);
          break;
        case "locations":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === ""){
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              id: item.id,
              name: item.name,
              image: image,
              description: item.description,
            };
          });
          setLocationsItems(mappedItems);
          break;
        case "npcs":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === ""){
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              id: item.id,
              name: item.name,
              image: image,
              quote: item.quote,
              location: item.location,
              role: item.role,
            };
          });
          setNpcsItems(mappedItems);
          break;
        case "shields":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === ""){
              image = "Not found";
            } else {
              image = item.image;
            }
            
            var formattedAttack = item.attack.map(x => `${x.name}: ${x.amount}`).join(", ");
            var formattedDefence = item.defence.map(x => `${x.name}: ${x.amount}`).join(", ");
            var formattedScaling = item.scalesWith.map(x => `${x.name}: ${x.scaling}`).join(", ");
            var formattedRequirements = item.requiredAttributes.map(x => `${x.name}: ${x.amount}`).join(", ");

            return {
              id: item.id,
              name: item.name,
              image: image,
              description: item.description,
              attack: formattedAttack,
              defence: formattedDefence,
              scalesWith: formattedScaling,
              requiredAttributes: formattedRequirements,
              category: item.category,
              weight: item.weight,
            };
          });
          setShieldsItems(mappedItems);
          break;
        case "sorceries":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            var formattedRequirements = item.requires.map(x => `${x.name}: ${x.amount}`).join(", ");

            return {
              id: item.id,
              image: image,
              name: item.name,
              description: item.description,
              cost: item.cost,
              slots: item.slots,
              effects: item.effects,
              requires: formattedRequirements,
            }
          });
          setSorceriesItems(mappedItems);
          break;
        case "spirits":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              id: item.id,
              name: item.name,
              description: item.description,
              image: image,
              fpCost: item.fpCost,
              hpCost: item.hpCost,
              effect: item.effect,
            };
          });
          setSpiritsItems(mappedItems);
          break;
        case "talismans":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            return {
              id: item.id,
              name: item.name,
              image: image,
              description: item.description,
              effect: item.effect,
            };
          });
          setTalismansItems(mappedItems);
          break;
        case "weapons":
          mappedItems = allItems.map(item => {
            var image = "";
            if (item.image === null || item.image === "") {
              image = "Not found";
            } else {
              image = item.image;
            }

            var formattedAttack = item.attack.map(x => `${x.name}: ${x.amount}`).join(", ");
            var formattedDefence = item.defence.map(x => `${x.name}: ${x.amount}`).join(", ");
            var formattedScaling = item.scalesWith.map(x => `${x.name}: ${x.scaling}`).join(", ");
            var formattedRequirements = item.requiredAttributes.map(x => `${x.name}: ${x.amount}`).join(", ");

            return {
              id: item.id,
              name: item.name,
              description: item.description,
              image: image,
              attack: formattedAttack,
              defence: formattedDefence,
              scalesWith: formattedScaling,
              requiredAttributes: formattedRequirements,
              category: item.category,
              weight: item.weight,
            };
          });
          setWeaponsItems(mappedItems);
          break;
      }
    }    
  }

  return (
    <main className="min-h-[100dvh] h-[100%] bg-slate-300 dark:bg-slate-950">
      <header className="flex flex-row items-center justify-between bg-slate-600 dark:bg-slate-800 p-4">
        <div>
          <Link href="https://docs.eldenring.fanapis.com/">
            <h1 className="text-slate-300 text-ellipsis text-3xl hover:text-yellow-500 transition-all">
              Elden ring wiki - made with fanmade API &larr;
            </h1>
          </Link>
          <Link href="https://github.com/Wiggleyyyy">
            <h2 className="ml-5 text-slate-300 text-2xl p-1 hover:text-yellow-500 transition-all">
              - David 'Wiggley' Hougesen &larr;
            </h2>
          </Link>
        </div>
        <div className="flex flex-row">
          <Drawer>
            <DrawerTrigger className="mx-5">
              <Label className="dark:hover:bg-slate-900 dark:text-slate-50 text-slate-950 dark:bg-slate-950 bg-slate-700 p-3 rounded-lg text-slate-50">Info</Label>
            </DrawerTrigger>
            <DrawerContent className="bg-slate-600 dark:bg-slate-800">
              <div className="mx-auto w-full max-w-sm p-10 flex flex-col items-center justify-center">
                <Label className="m-5 text-lg dark:text-slate-50">Some content here may vary from current game stats and items, last update to the api was made 2 years ago.</Label>
                <Link href="https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki">
                  <h2 className="ml-5 text-slate-300 dark:text-slate-300 text-2xl p-1 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all">
                    Link to Elden ring wiki from fextralife &larr;
                  </h2>
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
          <ThemeToggle/>
        </div>
      </header>

      <section className="w-[100%] h-[60%] flex flex-col mt-10 items-center justify-evenly">
        <div className="flex flex-col mb-10 bg-slate-400 dark:bg-slate-800 items-center justify-start p-3 rounded-lg">
          <div className="flex flex-row items-center justify-center">
            <Label className="m-2 text-lg dark:text-slate-50">Type:</Label>
            <ComboboxDemo className="m-2" id="type_combo" onChange={handleComboBoxChange} />
          </div>
          <div className="flex flex-row items-center">
            <Label htmlFor="all_or_one" className="m-2 text-lg dark:text-slate-50">
              Get one instead of all?
            </Label>
            <Checkbox
              id="all_or_one"
              className="bg-slate-50"
              checked={getOneIsChecked}
              onCheckedChange={handleCheckboxChange}
            />
          </div>
          {getOneIsChecked && (
            <div>
              <div className="flex flex-row items-center">
                <Label htmlFor="input-field" className="m-2 text-lg dark:text-slate-50">
                  ID:
                </Label>
                <Input
                  placeholder="Enter id of type ..."
                  id="id_input"
                  className="text-slate-950 dark:text-slate-50"
                />
              </div>
              <Label className="w-[100%] flex items-center justify-center text-slate-950 dark:text-slate-50 my-2">
                Or
              </Label>
              <div className="flex flex-row items-center">
                <Label htmlFor="input-field" className="m-2 text-lg dark:text-slate-50">
                  Name:
                </Label>
                <Input
                  placeholder="Enter name of type ..."
                  id="name_input"
                  className="text-slate-950 dark:text-slate-50"
                />
              </div>
            </div>
          )}
          <Button
            variant="outline"
            className="dark:text-slate-50 hover:dark:bg-slate-600 mt-2"
            onClick={searchButtonClick}
          >
            Search
          </Button>
        </div>
        {getOneIsChecked ? (
          <div className="mt-20">
            {itemsType === "ammos" && <AmmoOneDemo item={ammoOneItem} />}
            {itemsType === "armors" && <ArmorOneDemo item={armorOneItem} />}
            {itemsType === "ashes" && <AshesOneDemo item={ashesOneItem} />}
            {itemsType === "bosses" && <BossesOneDemo item={bossesOneItem}/>}
            {itemsType === "classes" && <ClassesOneDemo item={classesOneItem}/>}
            {itemsType === "creatures" && <CreaturesOneDemo item={creaturesOneItem}/>}
            {itemsType === "incantations" && <IncantationsOneDemo item={incatiationsOneItem}/>}
            {itemsType === "items" && <ItemsOneDemo item={itemsOneItem}/>}
            {itemsType === "locations" && <LocationsOneDemo item={locationOneItem}/>}
            {itemsType === "npcs" && <NpcsOneDemo item={npcsOneItem}/>}
            {itemsType === "shields" && <ShieldsOneDemo item={shieldsOneItem}/>}
            {itemsType === "sorceries" && <SorceriesOneDemo item={sorceriesOneItem}/>}
            {itemsType === "spirits" && <SpiritsOneDemo item={spiritsOneItem}/>}
            {itemsType === "talismans" && <TalismansOneDemo item={talismansOneItem}/>}
            {itemsType === "weapons" && <WeaponsOneDemo item={weaponsOneItem}/>}
          </div>
        ) : (
          <div id="" className="bg-slate-400 dark:bg-slate-800 flex flex-col rounded-lg p-2 w-[175vh] justify-center items-center">
            {itemsType === "ammos" && <AmmoAllDemo items={ammosItems} />}
            {itemsType === "armors" && <ArmorAllDemo items={armorsItems} />}
            {itemsType === "ashes" && <AshesAllDemo items={ashesItems} />}
            {itemsType === "bosses" && <BossesAllDemo items={bossesItems} />}
            {itemsType === "classes" && <ClassesAllDemo items={classesItems} />}
            {itemsType === "creatures" && <CreaturesAllDemo items={creaturesItems} />}
            {itemsType === "incantations" && <IncatationsAllDemo items={incatationsItems} />}
            {itemsType === "items" && <ItemsAllDemo items={itemsItems} />}
            {itemsType === "locations" && <LocationsAllDemo items={locationsItems} />}
            {itemsType === "npcs" && <NPCsAllDemo items={npcsItems} />}
            {itemsType === "shields" && <ShieldsAllDemo items={shieldsItems} />}
            {itemsType === "sorceries" && <SorceriesAllDemo items={sorceriesItems} />}
            {itemsType === "spirits" && <SpiritsAllDemo items={spiritsItems} />}
            {itemsType === "talismans" && <TalismansAllDemo items={talismansItems} />}
            {itemsType === "weapons" && <WeaponsAllDemo items={weaponsItems} />}
          </div>
        )}
      </section>
    </main>
  );
}
