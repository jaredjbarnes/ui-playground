import React, { useMemo } from "react";
import { isFunction } from "../../../utils/is_function";
import { CreateStyleOptions } from "./create_style";

export interface StatefulStyles<TProps> {
  [key: string]: CreateStyleOptions<TProps>;
}

export function createStatefulStyle<
  TProps = unknown,
  T extends StatefulStyles<TProps> = {}
>(statefulStyles: T) {
  return (activeStates: string[], props?: TProps) => {
    useMemo(() => {
      return activeStates.reduce<React.CSSProperties>((styles, stateName) => {
        const stateStyles = statefulStyles[stateName];

        if (isFunction(stateStyles)) {
          if (props == null) {
            throw new Error(
              "Props cannot be undefined if you are using the props callback."
            );
          }
          return { ...styles, ...stateStyles(props) };
        } else {
          return { ...styles, ...stateStyles };
        }
      }, {});
    }, [props]);
  };
}
