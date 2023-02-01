function createPart() {
  return Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16);
}

export function createGuid() {
  return (
    createPart() +
    createPart() +
    "-" +
    createPart() +
    "-" +
    createPart() +
    "-" +
    createPart() +
    "-" +
    createPart() +
    createPart() +
    createPart()
  );
}
