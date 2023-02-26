export function throwIfAuto(value?: string) {
  if (value === "auto") {
    throw new Error(
      "Cannot use auto as the height, it produces undefined behavior."
    );
  }
}

export function checkAllValuesForAuto(...values) {
  values.forEach((v) => throwIfAuto(v));
}
