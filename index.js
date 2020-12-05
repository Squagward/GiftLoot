/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { moveGiftGui } from "./features/gui";
import { discordMsg } from "./features/discordMsg";

register("command", moveGiftGui).setName("movegiftgui");
register("command", discordMsg).setName("giftdc");