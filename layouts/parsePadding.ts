export function parsePadding(value: string | number) {
  const stringValue = String(value);

  const parts = stringValue.split(" ");
  parts.forEach((p) => p.trim());
  parts.filter((p) => p.length > 0);

  switch (parts.length) {
    case 1: {
      parts.push(parts[0], parts[0], parts[0]);
      break;
    }
    case 2: {
      parts.push(parts[0], parts[1]);
      break;
    }
    case 3: {
      parts.push(parts[0]);
      break;
    }
  }

  return parts;
}
