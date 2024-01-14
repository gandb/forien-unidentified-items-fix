var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const CONSTANTS = {
  MODULE_NAME: "forien-unidentified-items",
  PATH: `modules/forien-unidentified-items/`,
  DEFAULT_ICON: "unidentified.png"
};
CONSTANTS.PATH = `modules/${CONSTANTS.MODULE_NAME}/`;
const dnd5e = {
  DEFAULT_PROPERTIES: {
    weapon: {
      weight: true,
      quantity: true,
      weaponType: true,
      equipped: true
    },
    equipment: {
      weight: true,
      quantity: true,
      "armor.type": true,
      equipped: true
    },
    consumable: {
      weight: true,
      quantity: true,
      equipped: true,
      consumableType: true
    },
    tool: {
      weight: true,
      quantity: true,
      equipped: true
    },
    loot: {
      weight: true,
      quantity: true,
      equipped: true
    },
    backpack: {
      weight: true,
      quantity: true,
      equipped: true
    }
  },
  DEFAULT_ICONS: {
    weapon: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified.png`,
    equipment: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-armor.png`,
    consumable: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-potion.png`,
    tool: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-tool.png`,
    loot: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-loot.png`,
    background: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    class: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    subclass: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    spell: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-scroll.png`,
    feat: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    backpack: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-knapsack.png`
  }
};
const pf2e = {
  DEFAULT_PROPERTIES: {
    weapon: {
      "bulkCapacity.value": true,
      "quantity.value": true,
      "weaponType.value": true
    },
    melee: {
      "bulkCapacity.value": true,
      "quantity.value": true
    },
    armor: {
      "armorType.value": true,
      "bulkCapacity.value": true,
      "quantity.value": true
    },
    equipment: {
      "bulkCapacity.value": true,
      "quantity.value": true
    },
    consumable: {
      "bulkCapacity.value": true,
      "consumableType.value": true,
      "quantity.value": true,
      "uses.value": true
    },
    treasure: {
      "bulkCapacity.value": true,
      "quantity.value": true
    }
  },
  DEFAULT_ICONS: {
    weapon: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified.png`,
    equipment: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-armor.png`,
    consumable: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-potion.png`,
    tool: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-tool.png`,
    loot: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-loot.png`,
    background: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    class: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    subclass: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    spell: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-scroll.png`,
    feat: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    backpack: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-knapsack.png`
  }
};
const swade = {
  DEFAULT_PROPERTIES: {
    weapon: {
      quantity: true,
      weight: true,
      equippable: true,
      equipped: true,
      minStr: true
    },
    armor: {
      quantity: true,
      weight: true,
      equippable: true,
      equipped: true,
      minStr: true,
      "locations.head": true,
      "locations.torso": true,
      "locations.arms": true,
      "locations.legs": true
    },
    shield: {
      quantity: true,
      weight: true,
      equippable: true,
      equipped: true,
      minStr: true,
      cover: true
    },
    gear: {
      quantity: true,
      weight: true,
      equippable: true,
      equipped: true
    }
  },
  DEFAULT_ICONS: {
    weapon: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified.png`,
    equipment: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-armor.png`,
    consumable: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-potion.png`,
    tool: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-tool.png`,
    loot: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-loot.png`,
    background: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    class: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    subclass: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    spell: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-scroll.png`,
    feat: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    backpack: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-knapsack.png`
  }
};
const sw5e = {
  DEFAULT_PROPERTIES: {
    weapon: {
      weight: true,
      quantity: true,
      weaponType: true,
      equipped: true
    },
    equipment: {
      weight: true,
      quantity: true,
      "armor.type": true,
      equipped: true
    },
    consumable: {
      weight: true,
      quantity: true,
      equipped: true,
      consumableType: true
    },
    tool: {
      weight: true,
      quantity: true,
      equipped: true
    },
    loot: {
      weight: true,
      quantity: true,
      equipped: true
    },
    backpack: {
      weight: true,
      quantity: true,
      equipped: true
    }
  },
  DEFAULT_ICONS: {
    weapon: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified.png`,
    equipment: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-armor.png`,
    consumable: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-potion.png`,
    tool: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-tool.png`,
    loot: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-loot.png`,
    background: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    class: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    subclass: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    spell: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-scroll.png`,
    feat: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    backpack: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-knapsack.png`
  }
};
const wfrp4e = {
  DEFAULT_PROPERTIES: {
    ammunition: {
      "encumbrance.value": true,
      "quantity.value": true,
      "gmdescription.value": true,
      "ammunitionType.value": true
    },
    armour: {
      "encumbrance.value": true,
      "quantity.value": true,
      "gmdescription.value": true,
      "location.value": true,
      "armorType.value": true
    },
    container: {
      "encumbrance.value": true,
      "quantity.value": true,
      "gmdescription.value": true
    },
    money: {
      "encumbrance.value": true,
      "quantity.value": true,
      "gmdescription.value": true
    },
    trapping: {
      "encumbrance.value": true,
      "quantity.value": true,
      "gmdescription.value": true,
      "trappingType.value": true
    },
    weapon: {
      "encumbrance.value": true,
      "quantity.value": true,
      "gmdescription.value": true,
      "twohanded.value": true,
      "ammunitionGroup.value": true,
      "weaponGroup.value": true,
      "reach.value": true
    },
    DEFAULT_ICONS: {
      weapon: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified.png`,
      equipment: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-armor.png`,
      consumable: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-potion.png`,
      tool: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-tool.png`,
      loot: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-loot.png`,
      background: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
      class: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
      subclass: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
      spell: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-scroll.png`,
      feat: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
      backpack: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-knapsack.png`
    }
  }
};
const generic = {
  DEFAULT_PROPERTIES: {},
  DEFAULT_ICONS: {
    weapon: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified.png`,
    equipment: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-armor.png`,
    consumable: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-potion.png`,
    tool: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-tool.png`,
    loot: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-loot.png`,
    background: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    class: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    subclass: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified.png`,
    spell: `/modules/${CONSTANTS.MODULE_NAME}/icons/inv-unidentified-scroll.png`,
    feat: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-book.png`,
    backpack: `/modules/${CONSTANTS.MODULE_NAME}/icons/unidentified-knapsack.png`
  }
};
const SYSTEMS = {
  SUPPORTED_SYSTEMS: {
    // ↓ ADD SYSTEMS HERE ↓
    alienrpg: {
      latest: generic
    },
    dnd4e: {
      latest: generic
    },
    dnd5e: {
      latest: dnd5e
    },
    pf1: {
      latest: generic
    },
    pf2e: {
      latest: pf2e
    },
    ds4: {
      latest: generic
    },
    d35e: {
      latest: generic
    },
    "blade-runner": {
      latest: generic
    },
    sfrpg: {
      latest: generic
    },
    swade: {
      latest: swade
    },
    tormenta20: {
      latest: generic
    },
    wfrp4e: {
      latest: wfrp4e
    },
    splittermond: {
      latest: generic
    },
    "forbidden-lands": {
      latest: generic
    },
    icrpg: {
      latest: generic
    },
    icrpgme: {
      latest: generic
    },
    swse: {
      latest: generic
    },
    sw5e: {
      latest: sw5e
    },
    fallout: {
      latest: generic
    },
    "cyberpunk-red-core": {
      latest: generic
    },
    knave: {
      latest: generic
    },
    t2k4e: {
      latest: generic
    },
    yzecoriolis: {
      latest: generic
    },
    kamigakari: {
      latest: generic
    },
    wwn: {
      latest: generic
    },
    symbaroum: {
      latest: generic
    },
    cyphersystem: {
      latest: generic
    },
    ptu: {
      latest: generic
    },
    dcc: {
      latest: generic
    },
    a5e: {
      latest: generic
    },
    "dark-heresy": {
      latest: generic
    },
    naheulbeuk: {
      latest: generic
    }
    // ↑ ADD SYSTEMS HERE ↑
  },
  DEFAULT_SETTINGS: {
    DEFAULT_ICONS: {},
    DEFAULT_PROPERTIES: {}
  },
  get HAS_SYSTEM_SUPPORT() {
    return !!this.SUPPORTED_SYSTEMS?.[game.system.id.toLowerCase()];
  },
  _currentSystem: false,
  get DATA() {
    if (this._currentSystem)
      return this._currentSystem;
    const system = this.SUPPORTED_SYSTEMS?.[game.system.id.toLowerCase()];
    if (!system)
      return this.DEFAULT_SETTINGS;
    if (system[game.system.version]) {
      this._currentSystem = foundry.utils.mergeObject(this.DEFAULT_SETTINGS, system[game.system.version]);
      return this._currentSystem;
    }
    const versions = Object.keys(system);
    if (versions.length === 1) {
      this._currentSystem = foundry.utils.mergeObject(this.DEFAULT_SETTINGS, system[versions[0]]);
      return this._currentSystem;
    }
    versions.sort((a, b) => {
      return a === "latest" || b === "latest" ? -Infinity : isNewerVersion(b, a) ? -1 : 1;
    });
    const version = versions.find((version2) => {
      return version2 === "latest" || !isNewerVersion(game.system.version, version2);
    });
    this._currentSystem = foundry.utils.mergeObject(this.DEFAULT_SETTINGS, system[version]);
    return this._currentSystem;
  },
  addSystem(data) {
    this.SUPPORTED_SYSTEMS[game.system.id.toLowerCase()] = { latest: data };
  }
};
function log(message) {
  message = `${CONSTANTS.MODULE_NAME} | ${message}`;
  console.log(message.replace("<br>", "\n"));
  return message;
}
__name(log, "log");
function info(info2, notify = false, permanent = false) {
  info2 = `${CONSTANTS.MODULE_NAME} | ${info2}`;
  if (notify)
    ui.notifications?.info(info2, { permanent });
  console.log(info2.replace("<br>", "\n"));
  return info2;
}
__name(info, "info");
function warn(warning, notify = false) {
  warning = `${CONSTANTS.MODULE_NAME} | ${warning}`;
  if (notify)
    ui.notifications?.warn(warning);
  console.warn(warning.replace("<br>", "\n"));
  return warning;
}
__name(warn, "warn");
function error(error2, notify = true) {
  error2 = `${CONSTANTS.MODULE_NAME} | ${error2}`;
  if (notify)
    ui.notifications?.error(error2);
  return new Error(error2.replace("<br>", "\n"));
}
__name(error, "error");
const i18n = /* @__PURE__ */ __name((key) => {
  return game.i18n.localize(key)?.trim();
}, "i18n");
const i18nFormat = /* @__PURE__ */ __name((key, data = {}) => {
  return game.i18n.format(key, data)?.trim();
}, "i18nFormat");
const _ItemProperties = class _ItemProperties extends FormApplication {
  static get defaultOptions() {
    const options = mergeObject(super.defaultOptions, {
      id: "forien-unidentified-items-item-properties",
      template: `/scripts/${CONSTANTS.MODULE_NAME}/templates/settings-item-properties.html`,
      title: i18n(`${CONSTANTS.MODULE_NAME}.Settings.itemProperties.name`),
      submitOnClose: true,
      submitOnChange: false,
      closeOnSubmit: true,
      resizable: true,
      width: 640,
      height: 560,
      tabs: [{ navSelector: ".nav-tabs", contentSelector: ".nav-body" }]
    });
    if (game.system.id === "wfrp4e") {
      options.classes.push("wfrp4e");
    }
    return options;
  }
  getData(options = {}) {
    const data = super.getData();
    data.types = this.getItemTypes(), data.propertySettings = this.getSettings(), data.options = this.options;
    return data;
  }
  activateListeners(html) {
    super.activateListeners(html);
  }
  async _updateObject(event, formData) {
    const data = Object.entries(formData);
    const settings = {};
    data.sort().map((d) => {
      const type = d[0].split(".", 1)[0];
      const property = d[0].replace(`${type}.`, "");
      const value = d[1];
      if (settings[type] === void 0) {
        settings[type] = {};
      }
      settings[type][property] = value;
    });
    return await this.saveSettings(settings);
  }
  getProperties() {
    const types = Object.entries(game.system.model.Item);
    const properties = new Map(types);
    for (const [key, value] of properties) {
      properties.set(key, Object.keys(flattenObject(value)));
    }
    return properties;
  }
  getSettings() {
    const settings = this.loadSettings();
    const types = this.getItemTypes();
    const properties = this.getProperties();
    for (const type of types) {
      const setting = getProperty(settings, type);
      if (!setting) {
        const typeProperties = properties.get(type);
        settings[type] = typeProperties.reduce((a, b) => (a[b] = false, a), {});
      }
    }
    return settings;
  }
  loadSettings() {
    return game.settings.get(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_PROPERTIES);
  }
  async saveSettings(data) {
    if (data?.object) {
      return await game.settings.set(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_PROPERTIES, data.object);
    } else {
      return await game.settings.set(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_PROPERTIES, data);
    }
  }
  getItemTypes() {
    return Object.keys(game.system.model.Item);
  }
  getIcon(icon) {
    return `/scripts/${CONSTANTS.MODULE_NAME}/icons/${icon}`;
  }
};
__name(_ItemProperties, "ItemProperties");
let ItemProperties = _ItemProperties;
function setSetting(key, value) {
  if (value === void 0) {
    throw new Error("setSetting | value must not be undefined!");
  }
  return game.settings.set(CONSTANTS.MODULE_NAME, key, value);
}
__name(setSetting, "setSetting");
function registerSettings() {
  game.settings.registerMenu(CONSTANTS.MODULE_NAME, "resetAllSettings", {
    name: `${CONSTANTS.MODULE_NAME}.Settings.reset.name`,
    hint: `${CONSTANTS.MODULE_NAME}.Settings.reset.hint`,
    icon: "fas fa-coins",
    type: ResetSettingsDialog,
    restricted: true
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "removeLabelButtonsSheetHeader", {
    name: i18n(`${CONSTANTS.MODULE_NAME}.Settings.removeLabelButtonsSheetHeader.name`),
    hint: i18n(`${CONSTANTS.MODULE_NAME}.Settings.removeLabelButtonsSheetHeader.hint`),
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "keepOldIcon", {
    name: `${CONSTANTS.MODULE_NAME}.Settings.keepOldIcon.name`,
    hint: `${CONSTANTS.MODULE_NAME}.Settings.keepOldIcon.hint`,
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "allowNestedItems", {
    name: `${CONSTANTS.MODULE_NAME}.Settings.allowNestedItems.Name`,
    hint: `${CONSTANTS.MODULE_NAME}.Settings.allowNestedItems.Hint`,
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "debug", {
    name: `${CONSTANTS.MODULE_NAME}.Settings.debug.name`,
    hint: `${CONSTANTS.MODULE_NAME}.Settings.debug.hint`,
    scope: "client",
    config: true,
    default: false,
    type: Boolean
  });
  for (let [name, data] of Object.entries(SETTINGS$1.GET_DEFAULT())) {
    game.settings.register(CONSTANTS.MODULE_NAME, name, data);
  }
}
__name(registerSettings, "registerSettings");
async function applyDefaultSettings() {
  const settings = SETTINGS$1.GET_SYSTEM_DEFAULTS();
  for (const [name, data] of Object.entries(settings)) {
    await setSetting(name, data.default);
  }
  await setSetting(SETTINGS$1.SYSTEM_VERSION, SYSTEMS.DATA.VERSION);
}
__name(applyDefaultSettings, "applyDefaultSettings");
const _ResetSettingsDialog = class _ResetSettingsDialog extends FormApplication {
  constructor(...args) {
    super(...args);
    return new Dialog({
      title: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.Dialog.resetsettings.title`),
      content: '<p style="margin-bottom:1rem;">' + game.i18n.localize(`${CONSTANTS.MODULE_NAME}.Dialog.resetsettings.content`) + "</p>",
      buttons: {
        confirm: {
          icon: '<i class="fas fa-check"></i>',
          label: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.Dialog.resetsettings.confirm`),
          callback: async () => {
            const worldSettings = game.settings.storage?.get("world")?.filter((setting) => setting.key.startsWith(`${CONSTANTS.MODULE_NAME}.`));
            for (let setting of worldSettings) {
              console.log(`Reset setting '${setting.key}'`);
              await setting.delete();
            }
            await applyDefaultSettings();
            window.location.reload();
          }
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.Dialog.resetsettings.cancel`)
        }
      },
      default: "cancel"
    });
  }
  async _updateObject(event, formData) {
  }
};
__name(_ResetSettingsDialog, "ResetSettingsDialog");
let ResetSettingsDialog = _ResetSettingsDialog;
function checkSettingsInitialized() {
  if (!game.user?.isGM) {
    return;
  }
  const defaultIcons = game.settings.get(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_ICONS);
  const itemProperties = game.settings.get(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_PROPERTIES);
  if (checkObjEmpty(defaultIcons)) {
    initializeDefaultIcons();
  }
  if (checkObjEmpty(itemProperties)) {
    initializeItemProperties();
  }
}
__name(checkSettingsInitialized, "checkSettingsInitialized");
function checkObjEmpty(obj) {
  const isEmpty = Object.keys(obj).length === 0 && obj.constructor === Object;
  if (isEmpty || obj?.object) {
    return true;
  }
  return false;
}
__name(checkObjEmpty, "checkObjEmpty");
function initializeDefaultIcons() {
  const di = new DefaultIcons({}, {});
  let settings = di.getSettings();
  const icons = duplicate(settings);
  log(JSON.stringify(icons));
  Hooks.call(`${CONSTANTS.MODULE_NAME}:onInitializeDefaultIcons`, icons);
  settings = mergeObject(settings, icons);
  di.saveSettings(settings);
  log(`Initialized default item icons.`);
  info(game.i18n.localize(`${CONSTANTS.MODULE_NAME}.Notifications.defaultIconsInitialized`), true, true);
}
__name(initializeDefaultIcons, "initializeDefaultIcons");
function initializeItemProperties() {
  const ip = new ItemProperties({}, {});
  let settings = ip.getSettings();
  settings = Object.entries(settings);
  settings = settings.map((type) => {
    let entries = Object.entries(type[1]);
    entries = entries.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
    type[1] = Object.fromEntries(entries);
    return type;
  });
  settings = Object.fromEntries(settings);
  settings = mergeObject(settings, API$1.DEFAULT_PROPERTIES);
  const properties = duplicate(settings);
  Hooks.call(`${CONSTANTS.MODULE_NAME}:onInitializeItemProperties`, properties);
  log(JSON.stringify(properties));
  settings = mergeObject(settings, properties);
  ip.saveSettings(settings);
  log(` Initialized default item properties.`);
  info(i18n(`${CONSTANTS.MODULE_NAME}.Notifications.defaultPropertiesInitialized`), true, true);
}
__name(initializeItemProperties, "initializeItemProperties");
const SETTINGS = {
  // Client settings
  // Module Settings
  DEFAULT_ICONS: "defaultIcons",
  // Style settings
  // System Settings
  DEFAULT_PROPERTIES: "itemProperties",
  // Hidden settings
  SYSTEM_FOUND: "systemFound",
  SYSTEM_NOT_FOUND_WARNING_SHOWN: "systemNotFoundWarningShown",
  SYSTEM_VERSION: "systemVersion",
  GET_DEFAULT() {
    return foundry.utils.deepClone(SETTINGS.DEFAULTS());
  },
  GET_SYSTEM_DEFAULTS() {
    return Object.fromEntries(
      Object.entries(SETTINGS.GET_DEFAULT()).filter((entry) => {
        return entry[1].system;
      })
    );
  },
  DEFAULTS: () => ({
    [SETTINGS.DEFAULT_ICONS]: {
      name: `${CONSTANTS.MODULE_NAME}.Settings.defaultIcons.name`,
      hint: `${CONSTANTS.MODULE_NAME}.Settings.defaultIcons.hint`,
      scope: "world",
      config: false,
      system: true,
      type: DefaultIcons,
      default: SYSTEMS.DATA.DEFAULT_ICONS
    },
    [SETTINGS.DEFAULT_PROPERTIES]: {
      name: `${CONSTANTS.MODULE_NAME}.Settings.itemProperties.name`,
      hint: `${CONSTANTS.MODULE_NAME}.Settings.itemProperties.hint`,
      scope: "world",
      config: false,
      system: true,
      type: ItemProperties,
      default: SYSTEMS.DATA.DEFAULT_PROPERTIES
    }
  })
};
const SETTINGS$1 = SETTINGS;
const _DefaultIcons = class _DefaultIcons extends FormApplication {
  static get defaultOptions() {
    const options = mergeObject(super.defaultOptions, {
      id: "forien-unidentified-items-default-icons",
      template: `/scripts/${CONSTANTS.MODULE_NAME}/templates/settings-default-icons.html`,
      title: i18n(`${CONSTANTS.MODULE_NAME}.Settings.defaultIcons.name`),
      submitOnClose: true,
      submitOnChange: false,
      closeOnSubmit: true
    });
    if (game.system.id === "wfrp4e") {
      options.classes.push("wfrp4e");
    }
    return options;
  }
  getData(options = {}) {
    const data = super.getData();
    data.types = this.getItemTypes();
    data.typeSettings = this.getSettings();
    data.options = this.options;
    return data;
  }
  activateListeners(html) {
    super.activateListeners(html);
    html.on("change", "input", (event) => {
      const input = $(event.currentTarget);
      const type = input.attr("name");
      $(`#default-icon-img-${type}`).attr("src", String(input.val()));
    });
    html.on("click", ".file-picker", (event) => {
      Hooks.once("closeFilePicker", () => {
        const button = $(event.currentTarget);
        const target = button.data("target");
        $(`#forien-unidentified-items-default-icons input[name=${target}]`).trigger("change");
      });
    });
  }
  async _updateObject(event, formData) {
    return await this.saveSettings(formData);
  }
  getSettings() {
    const settings = this.loadSettings();
    const types = this.getItemTypes();
    for (const type of types) {
      const setting = getProperty(settings, type);
      if (!setting) {
        settings[type] = this.getIcon(this.guessIcon(type));
      }
    }
    return settings;
  }
  guessIcon(type) {
    const modes = ["inv-unidentified", "unidentified"];
    const types = {
      armor: ["armor", "armour", "equipment", "gear"],
      book: ["Skill", "book", "career", "class", "feat", "skill", "specialization", "spellbook", "talent"],
      emerald: ["ancestry", "crystal", "jewellery"],
      knapsack: ["backpack", "container"],
      loot: ["loot", "treasure"],
      potion: ["consumable"],
      sack: ["artifact", "goods", "trapping"],
      scroll: ["ability", "enchantment", "magic", "prayer", "sorcery", "spell"],
      tool: ["tool"]
    };
    const mode = modes[Math.floor(Math.random() * modes.length)];
    let icon = mode;
    for (const iconType in types) {
      if (types[iconType].includes(type)) {
        icon = `${mode}-${iconType}`;
      }
    }
    return `${icon}.png`;
  }
  loadSettings() {
    return game.settings.get(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_ICONS);
  }
  async saveSettings(data) {
    if (data?.object) {
      return await game.settings.set(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_ICONS, data.object);
    } else {
      return await game.settings.set(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_ICONS, data);
    }
  }
  getItemTypes() {
    return Object.keys(game.system.model.Item);
  }
  getIcon(icon) {
    return `/scripts/${CONSTANTS.MODULE_NAME}/icons/${icon}`;
  }
};
__name(_DefaultIcons, "DefaultIcons");
let DefaultIcons = _DefaultIcons;
const MystifiedFlags = {
  ORIG_DATA: "origData"
};
const _Identification = class _Identification {
  /**
   *
   * @hook 'forien-unidentified-items:onMystifyItem'
   *
   * @param {string} itemUuid
   * @param {Object} options
   * @param {boolean} options.replace - set true to replace provided item with mystified one
   * @param {MystifiedData|undefined} options.mystifiedData - item data object that should become front of mystified item
   * @returns {Promise<void>}
   */
  static async mystify(itemUuid, options = {
    replace: false,
    mystifiedData: void 0
  }) {
    if (!game.user?.isGM) {
      error(`Only a GM can mistify a item`, true);
      return;
    }
    if (!itemUuid) {
      warn(`Cannot mystify a no item`, true);
      return;
    }
    const item = await this._itemFromUuid(itemUuid);
    if (!item) {
      warn(`Cannot mystify a no item from uuid '${itemUuid}'`, true);
      return;
    }
    const origData = duplicate(item);
    let mystifiedData = options.mystifiedData;
    if (mystifiedData === void 0) {
      mystifiedData = this._getMystifiedData(origData);
    }
    Hooks.call(`${CONSTANTS.MODULE_NAME}:onMystifyItem`, item, origData, mystifiedData, options);
    let mystifiedItem;
    if (options.replace) {
      const template = { data: game.system.model.Item[item.type] };
      mystifiedData = mergeObject(template, mystifiedData);
      if (!mystifiedData.flags) {
        mystifiedData.flags = {};
      }
      await item.update(mystifiedData);
      mystifiedItem = item;
    } else {
      if (!mystifiedData.flags) {
        mystifiedData.flags = {};
      }
      mystifiedItem = await Item.create(mystifiedData);
    }
    await mystifiedItem.setFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA, origData);
    return mystifiedItem;
  }
  /**
   *
   * @param {string} itemUuid
   * @returns {Promise<void>}
   */
  static async mystifyReplace(itemUuid) {
    return await this.mystify(itemUuid, { replace: true, mystifiedData: void 0 });
  }
  /**
   *
   * @param {string} itemUuid
   * @returns {Promise<void>}
   */
  static async mystifyAsDialog(itemUuid) {
    if (!itemUuid) {
      warn(`Cannot mystify advanced a no item`, true);
      return;
    }
    const origItem = await this._itemFromUuid(itemUuid);
    if (!origItem) {
      warn(`Cannot  mystify advanced a no item from uuid '${itemUuid}'`, true);
      return;
    }
    const nameItem = origItem.name;
    let itemTmp;
    let replace;
    const dialog = new Dialog(
      {
        title: i18nFormat(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.Title`, { nameItem }),
        content: `<h3>${i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.Header`)}</h3>
					<div class="dropzone">
						<p>${i18nFormat(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.DropZone`, { nameItem })}</p>
						<div class="item" style="display: none">
							<img/>
							<span></span>
						</div>
					</div>`,
        buttons: {
          mystifyAdvanced: {
            icon: '<i class="fas fa-cogs"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.MystifyAdvanced`),
            callback: (html) => {
              const source = $(html).find(".item").data("item");
              this.mystifyAdvancedDialog(itemUuid, source);
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.Cancel`)
          },
          mystifyReplace: {
            icon: '<i class="fas fa-sync-alt"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.MystifyReplace`),
            callback: (html) => {
              itemTmp = $(html).find(".item").data("item");
              replace = true;
            }
          },
          mystify: {
            icon: '<i class="fas fa-eye-slash"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAs.Mystify`),
            callback: (html) => {
              itemTmp = $(html).find(".item").data("item");
            }
          }
        },
        default: "cancel",
        close: () => {
          if (itemTmp) {
            delete itemTmp._id;
            if (replace) {
              this.mystify(itemUuid, { replace: true, mystifiedData: itemTmp });
            } else {
              this.mystify(itemUuid, { replace: false, mystifiedData: itemTmp });
            }
          }
        },
        render: (html) => {
          $(html).on("dragover", false).on("drop", ".dropzone", async (event) => {
            event.preventDefault();
            event.stopPropagation();
            let item;
            const data = JSON.parse(event.originalEvent?.dataTransfer?.getData("text/plain"));
            if (data.type === "Item") {
              if (data.uuid) {
                const witem = await this._uuidToDocument(data.uuid);
                item = duplicate(witem);
              } else if (data) {
                item = data;
              } else {
                const witem = game.items?.get(data.id);
                if (!witem) {
                  return;
                }
                item = duplicate(witem);
              }
              if (item) {
                $(event.currentTarget).find(".item").data("item", item);
                $(event.currentTarget).find(".item").slideUp(200, () => {
                  $(event.currentTarget).find(".item img").attr("src", item.img);
                  $(event.currentTarget).find(".item span").text(item.name);
                  $(event.currentTarget).find(".item").slideDown();
                });
              }
            }
          });
        }
      },
      {
        id: "forien-unidentified-items-mystifyAsDialog",
        width: 440,
        height: "auto"
      }
    );
    await dialog.render(true);
  }
  /**
   *
   * @param {string} itemUuid
   * @param {Item|undefined} source
   * @returns {Promise<void>}
   */
  static async mystifyAdvancedDialog(itemUuid, source = void 0) {
    if (!itemUuid) {
      warn(`Cannot mystify advanced a no item`, true);
      return;
    }
    const origItem = await this._itemFromUuid(itemUuid);
    if (!origItem) {
      warn(`Cannot  mystify advanced a no item from uuid '${itemUuid}'`, true);
      return;
    }
    const nameItem = origItem.name;
    const sourceData = source ? source : duplicate(origItem);
    const meta = this._getMystifiedMeta(sourceData);
    const keepOldIcon = this.keepOriginalImage();
    const selectedImg = keepOldIcon ? sourceData.img : meta.img;
    let properties = this._getTypeProperties(sourceData);
    properties = Object.fromEntries(
      Object.keys(properties).map((property) => {
        return [
          property,
          {
            key: property,
            orig: getProperty(sourceData, `data.${property}`),
            default: getProperty(game.system?.model.Item[sourceData.type], property),
            value: properties[property]
          }
        ];
      })
    );
    const htmlTmp = await renderTemplate(`/scripts/${CONSTANTS.MODULE_NAME}/templates/mystify-advanced.html`, {
      item: sourceData,
      meta,
      properties,
      keepOldIcon,
      selectedImg
    });
    let confirmed = false;
    let replace;
    const dialog = new Dialog(
      {
        title: i18nFormat(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAdvanced.Title`, { nameItem }),
        content: htmlTmp,
        buttons: {
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAdvanced.Cancel`)
          },
          mystifyReplace: {
            icon: '<i class="fas fa-sync-alt"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAdvanced.MystifyReplace`),
            callback: (html) => {
              confirmed = true;
              replace = true;
            }
          },
          mystify: {
            icon: '<i class="fas fa-eye-slash"></i>',
            label: i18n(`${CONSTANTS.MODULE_NAME}.Dialog.MystifyAdvanced.Mystify`),
            callback: (html) => {
              confirmed = true;
            }
          }
        },
        default: "cancel",
        close: (html) => {
          if (!confirmed) {
            return;
          }
          const form = html.find("form")[0];
          const formDataBase = new FormDataExtended(form, {});
          formDataBase.delete("img-keep");
          formDataBase.delete("name-keep");
          const formData = Object.fromEntries(Object.entries(formDataBase.toObject()).filter((e) => e[1] !== false));
          for (const property of Object.keys(formData)) {
            if (property) {
              if (property.startsWith("system.")) {
                if (formData[property]) {
                  delete formData[property];
                }
                setProperty(formData, property, getProperty(sourceData, property));
              } else {
                warn(`Cannot set the property '${property}' maybe is a issue ?`);
              }
            }
          }
          if (replace) {
            this.mystify(itemUuid, { replace: true, mystifiedData: formData });
            this.mystify(itemUuid, { replace: true, mystifiedData: formData });
          } else {
            this.mystify(itemUuid, { replace: false, mystifiedData: formData });
          }
        }
      },
      {
        id: "forien-unidentified-items-mystifyAdvancedDialog"
      }
    );
    await dialog.render(true);
    const jqDialog = $("#forien-unidentified-items-mystifyAdvancedDialog");
    jqDialog.on("change", "input[name=img-keep]", async (event) => {
      const checked = $(event.currentTarget).prop("checked");
      const src = checked ? sourceData.img : meta.img;
      jqDialog.find(".img-preview").attr("src", src);
      jqDialog.find("input[name=img]").val(src);
    });
    jqDialog.on("change", "input[name=name-keep]", async (event) => {
      const checked = $(event.currentTarget).prop("checked");
      const nameChanged = checked ? sourceData.name : meta.name;
      jqDialog.find(".name-preview").text(nameChanged ?? "");
      jqDialog.find("input[name=name]").val(nameChanged ?? "");
    });
  }
  /**
   *
   * @hook 'forien-unidentified-items:onIdentifyItem'
   *
   * @param {Item} item
   * @returns {Promise<Item|undefined>}
   */
  static async identify(item) {
    if (!item) {
      warn(`Cannot identify a no item`, true);
      return;
    }
    const origData = item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
    if (!origData) {
      warn(`Cannot identify a no mistify item`, true);
      return;
    }
    if (origData.permission) {
      try {
        delete origData.permission;
      } catch (e) {
      }
    }
    if (origData.ownership) {
      try {
        delete origData.ownership;
      } catch (e) {
      }
    }
    if (origData.folder) {
      try {
        delete origData.folder;
      } catch (e) {
      }
    }
    const hook = Hooks.call(`${CONSTANTS.MODULE_NAME}:onIdentifyItem`, item, origData);
    if (hook !== false) {
      await item.update(origData, { diff: false });
      await item.unsetFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
      const origDataOrigData = getProperty(origData.flags, `${CONSTANTS.MODULE_NAME}.origData`);
      await item.setFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA, origDataOrigData);
    }
    return item;
  }
  /**
   *
   * @param {Item} item
   * @return {boolean}
   */
  static isMystified(item) {
    if (!item) {
      return false;
    }
    const origData = item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
    return origData !== void 0;
  }
  /**
   *
   * @param {Item} item
   * @return {Object}
   */
  static getOrigData(item) {
    return item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
  }
  /**
   *
   * @param {string} uuid
   * @return {boolean}
   */
  static async isUuidMystified(uuid) {
    if (!uuid) {
      return false;
    }
    const item = await this._itemFromUuid(uuid);
    if (!item) {
      warn(`No item found for uuid '${uuid}'`, true);
      return false;
    }
    const origData = item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
    return origData !== void 0;
  }
  /**
   *
   * @param {MystifiedData} origData
   * @returns {{img: String, name: String, type: String, data: Object}}
   * @private
   */
  static _getMystifiedData(origData) {
    const mystifiedData = this._getMystifiedMeta(origData);
    const itemProperties = this._getDefaultProperties(origData);
    for (const property of itemProperties) {
      if (property) {
        let propertyTmp = void 0;
        if (property.startsWith("system.")) {
          propertyTmp = property;
        } else {
          propertyTmp = "system." + property;
        }
        const valueTmp = getProperty(origData, propertyTmp);
        setProperty(mystifiedData, propertyTmp, valueTmp);
      } else {
        warn(`Cannot set the property '${property}' maybe is a issue ?`);
      }
    }
    if (this.keepOriginalImage()) {
      mystifiedData.img = origData.img;
    }
    return mystifiedData;
  }
  /**
   *
   * @param {Object} origData
   * @returns {Array}
   * @private
   */
  static _getDefaultProperties(origData) {
    let itemProperties = this._getTypeProperties(origData);
    itemProperties = Object.entries(itemProperties).filter((p) => p[1]).map((p) => p[0]);
    return itemProperties;
  }
  /**
   *
   * @param {Object} origData
   * @return {Object}
   * @private
   */
  static _getTypeProperties(origData) {
    const defaultProperties = API$1.DEFAULT_PROPERTIES;
    return defaultProperties[origData.type];
  }
  static keepOriginalImage() {
    return game.settings.get(CONSTANTS.MODULE_NAME, "keepOldIcon");
  }
  /**
   *
   * @param {Object} origData
   * @returns {{img: String, name: String, type: String}}
   * @private
   */
  static _getMystifiedMeta(origData) {
    const iconSettings = API$1.DEFAULT_ICONS;
    const iconType = getProperty(iconSettings, origData.type) || `/scripts/${CONSTANTS.MODULE_NAME}/icons/${CONSTANTS.DEFAULT_ICON}`;
    return {
      name: i18n(`${CONSTANTS.MODULE_NAME}.NewMystified`),
      type: origData.type,
      img: iconType
    };
  }
  /**
   *
   * @param {string} uuid
   * @returns {Promise<Item|undefined>}
   * @private
   */
  static async _itemFromUuid(uuid) {
    return this._uuidToDocument(uuid);
  }
  // /**
  //  *
  //  * @param {string} packId
  //  * @param {string} itemId
  //  * @return {Promise.<Item|undefined>}
  //  * @deprecated do not use this anymore
  //  * @private
  //  */
  // static async _getItemFromPack(packId:string, itemId:string) {
  // 	const pack = <CompendiumCollection<CompendiumCollection.Metadata>>game.packs.get(packId);
  // 	if (pack.documentName !== "Item") {
  // 		return null;
  // 	}
  // 	return await pack.getDocument(itemId).then((ent) => {
  // 		//delete ent?._id;
  // 		//@ts-ignore
  // 		if (ent?._id) {
  // 			//@ts-ignore
  // 			ent._id = "";
  // 		}
  // 		return ent;
  // 	});
  // }
  static async _uuidToDocument(uuid) {
    const parts = uuid.split(".");
    let result = null;
    if (parts[0] === "Compendium") {
      const pack = game["packs"].get(parts[1] + "." + parts[2]);
      if (pack !== void 0) {
        result = await pack.getDocument(parts[3]);
      }
    } else {
      result = await fromUuid(uuid);
    }
    if (result === null) {
      error(`Document Not Found for uuid ${uuid}`);
      result = null;
    }
    return result;
  }
};
__name(_Identification, "Identification");
let Identification = _Identification;
const API = {
  get DEFAULT_PROPERTIES() {
    const settingDefaultProperties = game.settings.get(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_PROPERTIES);
    if (settingDefaultProperties?.object) {
      return settingDefaultProperties.object;
    }
    return settingDefaultProperties;
  },
  /**
   * The attributes used to track dynamic attributes in this system
   *
   * @returns {array}
   */
  get DEFAULT_ICONS() {
    const settingDefaultIcons = game.settings.get(CONSTANTS.MODULE_NAME, SETTINGS$1.DEFAULT_ICONS);
    if (settingDefaultIcons?.object) {
      return settingDefaultIcons.object;
    }
    return settingDefaultIcons;
  },
  /**
   *
   * @hook 'forien-unidentified-items:onMystifyItem'
   *
   * @param {string} itemUuid
   * @param {Object} options
   * @param {boolean} options.replace - set true to replace provided item with mystified one
   * @param {MystifiedData|undefined} options.mystifiedData - item data object that should become front of mystified item
   * @returns {Promise<Item|undefined>}
   */
  async mystify(itemUuid, options = {
    replace: false,
    mystifiedData: void 0
  }) {
    return await Identification.mystify(itemUuid, options);
  },
  /**
   *
   * @param {string} itemUuid
   * @returns {Promise<Item|undefined>}
   */
  async mystifyReplace(itemUuid) {
    return await Identification.mystifyReplace(itemUuid);
  },
  /**
   *
   * @param {string} itemUuid
   * @returns {Promise<void>}
   */
  async mystifyAsDialog(itemUuid) {
    await Identification.mystifyAsDialog(itemUuid);
  },
  /**
   *
   * @param {string} itemUuid
   * @param {object} source
   * @returns {Promise<void>}
   */
  async mystifyAdvancedDialog(itemUuid, source = void 0) {
    await Identification.mystifyAdvancedDialog(itemUuid, source);
  },
  /**
   *
   * @hook 'forien-unidentified-items:onIdentifyItem'
   *
   * @param {Item} item
   * @returns {Promise<Item|undefined>}
   */
  async identify(item) {
    return await Identification.identify(item);
  },
  /**
   *
   * @param {Item} item
   * @return {boolean}
   */
  isMystified(item) {
    return Identification.isMystified(item);
  },
  /**
   *
   * @param {Item} item
   * @return {MystifiedData}
   */
  getOrigData(item) {
    return Identification.getOrigData(item);
  },
  /**
   *
   * @param {string} uuid
   * @return {boolean}
   */
  async isUuidMystified(uuid) {
    return await Identification.isUuidMystified(uuid);
  }
};
const API$1 = API;
function registerDerivedItemSheetClass() {
  for (const k in CONFIG.Item.sheetClasses) {
    for (const l in CONFIG.Item.sheetClasses[k]) {
      const cls = CONFIG.Item.sheetClasses[k][l].cls;
      CONFIG.Item.sheetClasses[k][l].cls = getItemSheetClass(cls, l);
    }
  }
}
__name(registerDerivedItemSheetClass, "registerDerivedItemSheetClass");
function getItemSheetClass(cls, sheet) {
  var _a;
  const ParentClass = cls;
  const ItemClass = (_a = class extends ParentClass {
    constructor(...args) {
      super(...args);
      this.name = sheet.split(".")[1];
    }
    /**
     * Adds `[Mystified]` to the windows title if item is Mystified
     * Adds `[Original]` to the windows title if item is Original
     * @return {string}
     */
    get title() {
      let title = super.title;
      if (!game.user?.isGM) {
        return title;
      }
      if (this.item.isMystified()) {
        title = "[" + i18n(`${CONSTANTS.MODULE_NAME}.Item.Mystified`) + `] ${title}`;
      }
      if (this.item.isAbstract) {
        title = "[" + i18n(`${CONSTANTS.MODULE_NAME}.Item.Original`) + `] ${title}`;
      }
      return title;
    }
    /**
     * @override
     *
     * @hook "forien-unidentified-items:getItemPermissions"
     */
    _getHeaderButtons() {
      const buttons = super._getHeaderButtons();
      const isAbstract = this.item.isAbstract || false;
      const removeLabelButtonsSheetHeader = game.settings.get(CONSTANTS.MODULE_NAME, "removeLabelButtonsSheetHeader");
      let permissions = {
        canIdentify: game.user?.isGM,
        canPeek: game.user?.isGM,
        canMystify: game.user?.isGM
      };
      const hookPermissions = duplicate(permissions);
      Hooks.call(`${CONSTANTS.MODULE_NAME}:getItemPermissions`, this.item, hookPermissions);
      permissions = mergeObject(permissions, hookPermissions);
      const origData = this.item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
      if (origData) {
        if (permissions.canIdentify && !isAbstract) {
          buttons.unshift({
            label: removeLabelButtonsSheetHeader ? "" : `${CONSTANTS.MODULE_NAME}.Identify`,
            class: "forien-unidentified-items-identify-item",
            icon: "fas fa-search",
            onclick: (ev) => {
              API$1.identify(this.item);
            }
          });
        }
        if (permissions.canPeek) {
          buttons.unshift({
            label: removeLabelButtonsSheetHeader ? "" : `${CONSTANTS.MODULE_NAME}.Peek`,
            class: "forien-unidentified-items-peek-original-item",
            icon: "far fa-eye",
            onclick: (ev) => {
              const entity = new CONFIG.Item.documentClass(origData, { editable: false });
              entity.isAbstract = true;
              const sheetTmp = entity.sheet;
              sheetTmp?.render(true);
            }
          });
        }
      } else {
        if (permissions.canMystify && !isAbstract) {
          if (this.item.isOwned) {
            buttons.unshift({
              label: removeLabelButtonsSheetHeader ? "" : `${CONSTANTS.MODULE_NAME}.Mystify`,
              class: "forien-unidentified-items-mystify-item",
              icon: "far fa-eye-slash",
              onclick: (ev) => {
                API$1.mystifyReplace(this.item.uuid);
              }
            });
          } else {
            buttons.unshift({
              label: removeLabelButtonsSheetHeader ? "" : `${CONSTANTS.MODULE_NAME}.Mystify`,
              class: "forien-unidentified-items-mystify-item",
              icon: "far fa-eye-slash",
              onclick: (ev) => {
                API$1.mystify(this.item.uuid);
              }
            });
          }
        }
      }
      return buttons;
    }
    async _updateObject(...args) {
      if (this.item.isAbstract) {
        return this;
      }
      return super._updateObject(...args);
    }
  }, __name(_a, "ItemClass"), _a);
  return ItemClass;
}
__name(getItemSheetClass, "getItemSheetClass");
function registerContextMenuHook() {
  Hooks.on("getItemDirectoryEntryContext", (html, entryOptions) => {
    const getOrigData = /* @__PURE__ */ __name((li) => {
      const id = li[0].dataset.documentId;
      const item = game.items?.get(id);
      return item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
    }, "getOrigData");
    const mystifyCondition = /* @__PURE__ */ __name((li) => {
      if (!game.user?.isGM)
        return false;
      const origData = getOrigData(li);
      const allowNested = game.settings.get(CONSTANTS.MODULE_NAME, "allowNestedItems");
      return !origData || allowNested;
    }, "mystifyCondition");
    const identifyCondition = /* @__PURE__ */ __name((li) => {
      if (!game.user?.isGM)
        return false;
      const origData = getOrigData(li);
      return !!origData;
    }, "identifyCondition");
    const mystifyOptions = [
      {
        name: `${CONSTANTS.MODULE_NAME}.Mystify`,
        icon: '<i class="far fa-eye-slash"></i>',
        condition: mystifyCondition,
        callback: (li) => {
          const id = li[0].dataset.documentId;
          API$1.mystify(`Item.${id}`);
        }
      },
      {
        name: `${CONSTANTS.MODULE_NAME}.MystifyReplace`,
        icon: '<i class="far fa-eye-slash"></i>',
        condition: mystifyCondition,
        callback: (li) => {
          const id = li[0].dataset.documentId;
          API$1.mystifyReplace(`Item.${id}`);
        }
      },
      {
        name: `${CONSTANTS.MODULE_NAME}.MystifyAs`,
        icon: '<i class="far fa-eye-slash"></i>',
        condition: mystifyCondition,
        callback: (li) => {
          const id = li[0].dataset.documentId;
          API$1.mystifyAsDialog(`Item.${id}`);
        }
      },
      {
        name: `${CONSTANTS.MODULE_NAME}.MystifyAdvanced`,
        icon: '<i class="far fa-eye-slash"></i>',
        condition: mystifyCondition,
        callback: (li) => {
          const id = li[0].dataset.documentId;
          API$1.mystifyAdvancedDialog(`Item.${id}`);
        }
      }
    ];
    entryOptions.unshift(...mystifyOptions);
    entryOptions.unshift({
      name: `${CONSTANTS.MODULE_NAME}.Identify`,
      icon: '<i class="fas fa-search"></i>',
      condition: identifyCondition,
      callback: (li) => {
        const id = li[0].dataset.documentId;
        const item = game.items?.get(id);
        API$1.identify(item);
      }
    });
    entryOptions.unshift({
      name: `${CONSTANTS.MODULE_NAME}.Peek`,
      icon: '<i class="far fa-eye"></i>',
      condition: identifyCondition,
      callback: (li) => {
        const id = li[0].dataset.documentId;
        const item = game.items?.get(id);
        const origData = item.getFlag(CONSTANTS.MODULE_NAME, MystifiedFlags.ORIG_DATA);
        origData.isAbstract = true;
        const entity = new CONFIG.Item.documentClass(origData, { editable: false });
        const sheet = entity.sheet;
        sheet?.render(true);
      }
    });
  });
}
__name(registerContextMenuHook, "registerContextMenuHook");
function registerItemClassMethod() {
  CONFIG.Item.documentClass.prototype.isMystified = /* @__PURE__ */ __name(function isMystified() {
    return API$1.isMystified(this);
  }, "isMystified");
  Object.defineProperty(CONFIG.Item.documentClass.prototype, MystifiedFlags.ORIG_DATA, {
    get: /* @__PURE__ */ __name(function origData() {
      return API$1.getOrigData(this);
    }, "origData")
  });
}
__name(registerItemClassMethod, "registerItemClassMethod");
Hooks.once("init", () => {
  registerSettings();
  registerContextMenuHook();
  Hooks.callAll(`${CONSTANTS.MODULE_NAME}:afterInit`);
});
Hooks.once("setup", () => {
  Hooks.callAll(`${CONSTANTS.MODULE_NAME}:afterSetup`);
  setApi(API$1);
});
Hooks.once("ready", () => {
  checkSettingsInitialized();
  registerDerivedItemSheetClass();
  registerItemClassMethod();
  Hooks.callAll(`${CONSTANTS.MODULE_NAME}:afterReady`);
});
function setApi(api) {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  data.api = api;
}
__name(setApi, "setApi");
function getApi() {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  return data.api;
}
__name(getApi, "getApi");
function setSocket(socket) {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  data.socket = socket;
}
__name(setSocket, "setSocket");
function getSocket() {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  return data.socket;
}
__name(getSocket, "getSocket");
export {
  getApi,
  getSocket,
  setApi,
  setSocket
};
//# sourceMappingURL=module.js.map
