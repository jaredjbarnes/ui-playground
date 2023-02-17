import React, { useMemo } from "react";
import { isFunction } from "../../../utils/is_function";

export type CreateStyleOptions<TProps> =
  | React.CSSProperties
  | ((props: TProps) => React.CSSProperties);

export function createStyle<TProps>(options: CreateStyleOptions<TProps>) {
  if (isFunction(options)) {
    return (props: TProps) => {
      return useMemo(() => ({ ...options(props) }), [props]);
    } ;
  } else {
    return (_props: TProps) => {
      return useMemo(() => ({ ...options }), []);
    };
  }
}