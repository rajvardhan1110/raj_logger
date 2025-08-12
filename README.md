# raj-logger

A colorful Node.js logger with emojis, timestamps, pretty-printed JSON, and optional boxed output for enhanced terminal readability.

---

## ✨ Features

- 🎨 **Colorful console logs** with different styles per log level  
- 😄 **Emojis** for quick visual recognition of log types  
- ⏱ **ISO-like timestamps** on each log line  
- 📜 **Pretty print** for objects and arrays with indentation  
- 📦 **Optional boxed output** around JSON or text for emphasis  
- 🌐 **Global functions available everywhere** (`info()`, `err()`, `succ()`, `dbg()`, etc.)  
- ⚡ **Zero dependencies** — pure Node.js, no external packages  

---

## 📦 Installation

npm install raj-logger



---

## 🚀 Usage

Require **once** to enable global log functions:

require("raj-logger");



### Available functions:

| Function   | Description                 | Emoji | Color            |
|------------|-----------------------------|-------|------------------|
| `info()`   | Informational messages       | ℹ️     | Blue             |
| `dbg()`    | Debugging details            | 🐞     | Cyan (dimmed)    |
| `warn()`   | Warnings                     | ⚠️     | Yellow           |
| `fatal()`  | Fatal errors                 | 💀     | Bold Red         |
| `succ()`   | Success messages             | ✅     | Green            |
| `err()`    | Error messages               | ❌     | Red              |
| `load()`   | Loading indicators           | ⏳     | Magenta (dimmed) |
| `done()`   | Completed tasks              | 🎯     | Bold Green       |
| `upd()`    | Updates / Refreshes          | 🔄     | Cyan             |
| `event()`  | Special events               | 🎉     | Magenta          |
| `net()`    | Network-related logs         | 🌐     | Blue             |
| `sec()`    | Security alerts              | 🔒     | Yellow/Magenta   |

---

## 💡 Examples

### Basic logging
info("Starting server...");
succ("Server started successfully");
warn("Memory usage high");
err("Failed to connect to database");
dbg({ user: "raj", status: "active" });



---

### Logging with boxed output
dbg({ user: "raj", status: "active" }, { box: true });
err("Critical failure!", { box: true });



---

### Logging arrays or complex objects
dbg(["apple", "banana", "cherry"], { box: true });
info({ server: "localhost", port: 3000, ssl: false });



---

### Using in a real app
require("raj-logger");

succ("Application started");
warn("Deprecated API usage detected");
err("Unhandled exception");
load("Loading data from API...");
done("Data loaded successfully");



---

## ⚙️ How it Works

- Adds a **timestamp** and tag `[raj-log]` to each message  
- Each log type has a **unique emoji** and **color style**  
- If the message is an **object or array**, it is **pretty-printed** with indentation  
- Optionally wraps the output in a neat **ASCII box**  
- Registers **global functions** so you can call them anywhere without imports  

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  

---

## 📜 License

MIT © Rajvardhan  

---

## 👨‍💻 Contact

Created by **Rajvardhan** – [GitHub](https://github.com/rajvardhan1110)
  

---

**Enjoy colorful, fun logging in your Node.js apps! 🎉**