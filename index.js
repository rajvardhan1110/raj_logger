// Text modifiers
const mod = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m"
};

// Foreground colors
const col = {
  black: "\x1b[30m", red: "\x1b[31m", green: "\x1b[32m", yellow: "\x1b[33m",
  blue: "\x1b[34m", magenta: "\x1b[35m", cyan: "\x1b[36m", white: "\x1b[37m",
  gray: "\x1b[90m", brightRed: "\x1b[91m", brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m", brightBlue: "\x1b[94m", brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m", brightWhite: "\x1b[97m"
};

// Background colors
const bg = {
  black: "\x1b[40m", red: "\x1b[41m", green: "\x1b[42m", yellow: "\x1b[43m",
  blue: "\x1b[44m", magenta: "\x1b[45m", cyan: "\x1b[46m", white: "\x1b[47m",
  brightBlack: "\x1b[100m", brightRed: "\x1b[101m", brightGreen: "\x1b[102m",
  brightYellow: "\x1b[103m", brightBlue: "\x1b[104m", brightMagenta: "\x1b[105m",
  brightCyan: "\x1b[106m", brightWhite: "\x1b[107m"
};

// Logger types
const types = {
  info:  { emoji: "ℹ️",  style: [col.blue] },
  dbg:   { emoji: "🐞",  style: [col.cyan, mod.dim] },
  warn:  { emoji: "⚠️",  style: [col.yellow] },
  fatal: { emoji: "💀",  style: [mod.bold, col.red] },
  succ:  { emoji: "✅",  style: [col.green] },
  err:   { emoji: "❌",  style: [col.red] },
  load:  { emoji: "⏳",  style: [mod.dim, col.magenta] },
  done:  { emoji: "🎯",  style: [mod.bold, col.green] },
  upd:   { emoji: "🔄",  style: [col.cyan] },
  event: { emoji: "🎉",  style: [col.magenta] },
  net:   { emoji: "🌐",  style: [col.blue] },
  sec:   { emoji: "🔒",  style: [col.yellow, col.magenta] }
};

// Timestamp helper
function getTimestamp() {
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} `
       + `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

// Pretty print for objects
function prettyPrint(data, style) {
  if (typeof data === "object" && data !== null) {
    return JSON.stringify(data, null, 2)
      .split("\n")
      .map(line => style + line + mod.reset)
      .join("\n");
  }
  return style + data + mod.reset;
}

// Box formatter
function boxify(text) {
  const cleanText = text.replace(/\x1b\[[0-9;]*m/g, ""); // strip ANSI colors
  const width = cleanText.length + 2;
  const top = "┌" + "─".repeat(width) + "┐";
  const middle = "│ " + text + " │";
  const bottom = "└" + "─".repeat(width) + "┘";
  return `${top}\n${middle}\n${bottom}`;
}

// Logger factory
function createLogger(typeKey) {
  return (message, options = {}) => {
    const type = types[typeKey];
    const style = type.style.join("");
    const ts = `${mod.dim}[${getTimestamp()}]${mod.reset}`;
    const tag = `${col.gray}[raj-log]${mod.reset}`;
    const icon = type.emoji;

    if (typeof message === "object" && message !== null) {
      const msg = prettyPrint(message, style);
      console.log(`${ts} ${icon} ${tag}\n${options.box ? boxify(msg) : msg}`);
    } else {
      const styledMsg = `${style}${message}${mod.reset}`;
      console.log(`${ts} ${icon} ${tag}\n${options.box ? boxify(styledMsg) : styledMsg}`);
    }
  };
}

// Register global loggers
Object.keys(types).forEach(type => {
  global[type] = createLogger(type);
});

module.exports = { mod, col, bg, types };
