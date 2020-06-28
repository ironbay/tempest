import { css, DefaultTheme } from "styled-components"
import * as CSS from "csstype"

// Groups

export const Margin = [
  "mgn",
  "mgnX",
  "mgnY",
  "mgnTop",
  "mgnLeft",
  "mgnBottom",
  "mgnRight",
] as const

export const Padding = [
  "pad",
  "padX",
  "padY",
  "padTop",
  "padLeft",
  "padBottom",
  "padRight",
] as const

export const Width = ["width", "minWidth", "maxWidth"] as const

export const Height = ["height", "minHeight", "maxHeight"] as const

export const Typography = [
  "fontSize",
  "fontFamily",
  "fontStyle",
  "fontWeight",
  "lineHeight",
  "textAlign",
] as const

export const Colors = ["bg", "fg"] as const

export const Border = [
  "borderColor",
  "borderWidth",
  "borderTopWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderStyle",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "boxShadow",
] as const

export const Background = [
  "background",
  "backgroundImage",
  "backgroundRepeat",
  "backgroundSize",
] as const

export const Flex = [
  "flexGrow",
  "flexBasis",
  "flexDirection",
  "flexWrap",
  "alignContent",
  "alignItems",
  "justifyContent",
  "justifyItems",
  "flex",
  "justifySelf",
  "alignSelf",
] as const

export const Grid = [
  "gridGap",
  "gridRowGap",
  "gridColumnGap",
  "gridColumn",
  "gridRow",
  "gridArea",
  "gridAutoFlow",
  "gridAutoRows",
  "gridAutoColumns",
  "gridTemplateRows",
  "gridTemplateColumns",
  "gridTemplateAreas",
] as const

export const Position = [
  "position",
  "zIndex",
  "top",
  "bottom",
  "left",
  "right",
  "butt",
] as const

export const Spacing = [...Padding, ...Margin]

export const Common = [...Colors, ...Spacing]

export const Layout = ["display", ...Width, ...Height] as const

export const All = [
  ...Layout,
  ...Margin,
  ...Padding,
  ...Typography,
  ...Colors,
  ...Border,
  ...Background,
  ...Flex,
  ...Position,
  ...Grid,
]

type Responsive<T> =
  | T
  | { [key in keyof DefaultTheme["breakpoints"] | "_"]?: T }
type Length = string | number

type SystemProp = typeof All[number]

// type LiteralUnion<T extends U, U = string | number> = T | (U & {})
type LiteralUnion<T> = T

type CSSProps = {
  display:
    | CSS.Globals
    | CSS.DisplayOutside
    | CSS.DisplayInside
    | CSS.DisplayInternal
    | CSS.DisplayLegacy
    | "contents"
    | "list-item"
    | "none"
  alignItems: CSS.Globals | CSS.SelfPosition | "baseline" | "normal" | "stretch"
  width: CSS.WidthProperty<Length>
  minWidth: CSS.MinWidthProperty<Length>
  maxWidth: CSS.MaxWidthProperty<Length>
  height: CSS.MaxHeightProperty<Length>
  minHeight: CSS.MinHeightProperty<Length>
  maxHeight: CSS.MaxHeightProperty<Length>
  fontFamily: CSS.FontFamilyProperty
  fontStyle: CSS.FontStyleProperty
  fontWeight: CSS.FontWeightProperty
  lineHeight: CSS.LineHeightProperty<Length>
  textAlign: CSS.TextAlignProperty
  borderRadius: CSS.BorderRadiusProperty<Length>
  borderColor:
    | CSS.Globals
    | CSS.NamedColor
    | CSS.DeprecatedSystemColor
    | "currentcolor"
  borderWidth: CSS.BorderWidthProperty<Length>
  borderTopWidth: CSS.BorderTopWidthProperty<Length>
  borderLeftWidth: CSS.BorderLeftWidthProperty<Length>
  borderRightWidth: CSS.BorderRightWidthProperty<Length>
  borderBottomWidth: CSS.BorderBottomWidthProperty<Length>
  border: CSS.BorderProperty<Length>
  borderTop: CSS.BorderTopProperty<Length>
  borderRight: CSS.BorderRightProperty<Length>
  borderBottom: CSS.BorderBottomProperty<Length>
  borderLeft: CSS.BorderLeftProperty<Length>
  borderStyle: CSS.Globals | CSS.LineStyle
  borderBottomLeftRadius: CSS.BorderBottomLeftRadiusProperty<Length>
  borderBottomRightRadius: CSS.BorderBottomRightRadiusProperty<Length>
  borderTopLeftRadius: CSS.BorderTopLeftRadiusProperty<Length>
  borderTopRightRadius: CSS.BorderTopRightRadiusProperty<Length>
  boxShadow: CSS.Globals | "none"
  background: CSS.Globals | CSS.FinalBgLayer<Length>
  backgroundImage: CSS.Globals | "none"
  backgroundRepeat: CSS.Globals | CSS.RepeatStyle
  backgroundSize: CSS.Globals | CSS.BgSize<Length>
  flex:
    | CSS.Globals
    | number
    | "auto"
    | "content"
    | "max-content"
    | "min-content"
    | "none"
  flexGrow: CSS.GlobalsNumber
  flexBasis:
    | CSS.Globals
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-auto"
    | "auto"
    | "content"
    | "max-content"
    | "min-content"
  flexDirection: CSS.FlexDirectionProperty
  flexWrap: CSS.FlexWrapProperty
  alignContent:
    | CSS.Globals
    | CSS.ContentDistribution
    | CSS.ContentPosition
    | "baseline"
    | "normal"
  justifyContent:
    | CSS.Globals
    | CSS.ContentDistribution
    | CSS.ContentPosition
    | "left"
    | "normal"
    | "right"
  justifyItems:
    | CSS.Globals
    | CSS.SelfPosition
    | "baseline"
    | "left"
    | "legacy"
    | "normal"
    | "right"
    | "stretch"
  justifySelf:
    | CSS.Globals
    | CSS.SelfPosition
    | "auto"
    | "baseline"
    | "left"
    | "normal"
    | "right"
    | "stretch"
  alignSelf:
    | CSS.Globals
    | CSS.SelfPosition
    | "auto"
    | "baseline"
    | "normal"
    | "stretch"
  position: CSS.PositionProperty
  zIndex: CSS.ZIndexProperty
  top: CSS.TopProperty<Length>
  bottom: CSS.BottomProperty<Length>
  left: CSS.LeftProperty<Length>
  right: CSS.RightProperty<Length>
  gridColumn: CSS.GridColumnProperty
  gridRow: CSS.GridRowProperty
  gridArea: CSS.GridAreaProperty
  gridAutoFlow: CSS.GridAutoFlowProperty
  gridAutoRows: CSS.GridAutoRowsProperty<Length>
  gridAutoColumns: CSS.GridAutoColumnsProperty<Length>
  gridTemplateRows: CSS.GridTemplateRowsProperty<Length>
  gridTemplateColumns: CSS.GridTemplateColumnsProperty<Length>
  gridTemplateAreas: CSS.GridTemplateAreasProperty
}

const Transformers = {
  // mgn
  mgn: {
    theme: "spacing",
    targets: ["marginLeft", "marginRight", "marginTop", "marginBottom"],
  },
  mgnX: {
    theme: "spacing",
    targets: ["marginLeft", "marginRight"],
  },
  mgnY: {
    theme: "spacing",
    targets: ["marginTop", "marginBottom"],
  },
  mgnTop: {
    theme: "spacing",
    targets: ["marginTop"],
  },
  mgnBottom: {
    theme: "spacing",
    targets: ["marginBottom"],
  },
  mgnLeft: {
    theme: "spacing",
    targets: ["marginLeft"],
  },
  mgnRight: {
    theme: "spacing",
    targets: ["marginRight"],
  },

  gridGap: {
    theme: "spacing",
  },
  gridRowGap: {
    theme: "spacing",
  },
  gridColumnGap: {
    theme: "spacing",
  },

  bg: {
    theme: "colors",
    targets: ["backgroundColor"],
  },

  fg: {
    theme: "colors",
    targets: ["color"],
  },

  borderColor: {
    theme: "colors",
  },

  width: {
    theme: "breakpoints",
  },

  maxWidth: {
    theme: "breakpoints",
  },

  minWidth: {
    theme: "breakpoints",
  },

  // pad
  pad: {
    theme: "spacing",
    targets: ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"],
  },
  padX: {
    theme: "spacing",
    targets: ["paddingLeft", "paddingRight"],
  },
  padY: {
    theme: "spacing",
    targets: ["paddingTop", "paddingBottom"],
  },
  padTop: {
    theme: "spacing",
    targets: ["paddingTop"],
  },
  padBottom: {
    theme: "spacing",
    targets: ["paddingBottom"],
  },
  padLeft: {
    theme: "spacing",
    targets: ["paddingLeft"],
  },
  padRight: {
    theme: "spacing",
    targets: ["paddingRight"],
  },

  // Typography
  fontSize: {
    theme: "fontSize",
  },
  fontWeight: {
    theme: "fontWeight",
  },
} as const

type SystemThemes = {
  [key in keyof typeof Transformers]?: keyof DefaultTheme[typeof Transformers[key]["theme"]]
}

export function themed(input: SystemThemes) {
  return function (props: any) {
    const results = {}
    for (let prop of Object.keys(input)) {
      const value = input[prop]

      const transformer = Transformers[prop] || {}
      const targets = transformer.targets || [prop]
      const theme = props.theme[transformer.theme] || {}

      const style = theme[value]
      targets.reduce((collect, target) => {
        collect[target] = style
        return collect
      }, results)
    }
    return css(results)
  }
}

export function system<T extends readonly SystemProp[]>(system_props: T) {
  return function (props: any) {
    let results = {}

    for (let prop of system_props) {
      const value = props[prop]
      if (!value) continue
      const responsive =
        typeof value === "object"
          ? value
          : {
              _: value,
            }

      const transformer = Transformers[prop] || {}
      const targets = transformer.targets || [prop]
      const theme = props.theme[transformer.theme] || {}

      for (let selector of Object.keys(responsive)) {
        const style = theme[responsive[selector]] || responsive[selector]
        const final = targets.reduce((collect, target) => {
          collect[target] = style
          return collect
        }, {})
        if (selector === "_") {
          results = {
            ...final,
            ...results,
          }
          continue
        }
        results[props.theme.breakpoints[selector]] = final
      }
    }

    return css(results)
  }
}

export type GenerateProps<T extends readonly SystemProp[]> = {
  [key in T[number]]?: Responsive<
    LiteralUnion<
      key extends keyof CSSProps & keyof typeof Transformers
        ? CSSProps[key] | keyof DefaultTheme[typeof Transformers[key]["theme"]]
        : key extends keyof CSSProps
        ? CSSProps[key]
        : key extends keyof typeof Transformers
        ? keyof DefaultTheme[typeof Transformers[key]["theme"]]
        : never
    >
  >
}
