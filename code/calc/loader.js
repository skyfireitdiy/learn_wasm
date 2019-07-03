var importObject = {
  env: {
    memoryBase: 0,
    tableBase: 0,
    __memory_base: 0,
    __table_base: 0,
    tempDoublePtr: 0,
    DYNAMICTOP_PTR: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
    table: new WebAssembly.Table({
      initial: 2,
      element: "anyfunc"
    }),
    abort: () => {
      throw "abort";
    },
    abortStackOverflow: () => {}
  },
  global: {
    NaN: 0,
    Infinity: 0
  }
};

function loadWebAssembly(path, imp = importObject) {
  return fetch(path)
    .then(response => response.arrayBuffer())
    .then(buf => WebAssembly.instantiate(buf, imp))
    .then(mod => mod.instance.exports);
}
