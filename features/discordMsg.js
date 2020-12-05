export function discordMsg() {
  new Message(
    new TextComponent("\n" + ChatLib.getCenteredText("Click here to join the discord!") + "\n")
      .setClick("open_url", "https://discord.gg/ZWQs6gUWsk")
  ).chat();
}