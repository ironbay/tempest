import Dynamic from "@ironbay/dynamic"
import * as Prettier from "prettier"
import { elements } from "./intrinsic"

export type PropDescription = {
  theme: string
  class: string
  category: string
  options?: string[]
  name?: string
}

export function generate_code(props: PropDescription[], config: any) {
  const buffer = []

  buffer.push(`import React from "react"`)
  buffer.push("")

  buffer.push(
    `type TailwindVariant_responsive = ${Object.keys(config.theme.screens)
      .concat(["default"])
      .map((item) => `"${item}"`)
      .join(" | ")}`
  )

  const variants = Object.values(config.variants)
    .flatMap((item) => item as string[])
    .filter((item) => item !== "responsive")
    .filter((value, index, self) => self.indexOf(value) === index)

  for (let variant of variants) {
    const parsed = get_variant(variant)
    buffer.push(`type TailwindVariant_${parsed} = "${parsed}" | "default"`)
  }
  buffer.push(``)

  buffer.push(`export const TailwindVariantMapping = {`)
  for (let variant of [...Object.keys(config.theme.screens), ...variants]) {
    buffer.push(`  ${get_variant(variant)}: "${variant}",`)
  }
  buffer.push(`}`)
  buffer.push(``)

  // Prop Types
  for (let description of props) {
    const options = get_options(description.options, description.theme, config)
      .map((item) =>
        item === "default" || item === "" ? "boolean" : `"${item}"`
      )
      .join(" | ")
    let prop = description.name || description.theme
    buffer.push(`type Tailwind_${prop} = ${options}`)
  }
  buffer.push(``)

  // Props
  buffer.push(`export type TailwindProps = {`)
  for (let description of props) {
    const prop = description.name || description.theme
    const type = `Tailwind_${prop}`
    const variants = (config.variants[description.theme] || [])
      .map((v: string) => "TailwindVariant_" + get_variant(v))
      .join(" | ")
    buffer.push(`  ${prop}?: ${type}`)
    if (variants) buffer.push(`  | {[key in ${variants}]?: ${type}}`)
  }
  buffer.push(`}`)
  buffer.push(``)

  // Mapping
  buffer.push(`export const TailwindMapping = {`)
  for (let description of props) {
    const prop = description.name || description.theme
    buffer.push(`  "${prop}": {`)
    const options = get_options(description.options, description.theme, config)
    for (let option of options) {
      option = option === "default" || option === "" ? "true" : option
      const className = [description.class, option !== "true" && option]
        .filter((item) => item)
        .join("-")
      buffer.push(`    "${option}": "${className}",`)
    }
    buffer.push(`  },`)
  }
  buffer.push(`}`)
  buffer.push(``)

  buffer.push(`function component<`)
  buffer.push(`  E extends keyof JSX.IntrinsicElements,`)
  buffer.push(`  P extends JSX.IntrinsicElements[E]`)
  buffer.push(`>(el: E) {`)
  buffer.push(`  return (props: P & TailwindProps) => {`)
  buffer.push(`    return React.createElement(el, runtime(props))`)
  buffer.push(`  }`)
  buffer.push(`}`)
  buffer.push(
    `function runtime(props: TailwindProps & { [key: string]: any }) {`
  )
  buffer.push(`  const classes = []`)
  buffer.push(`  if (props.className) classes.push(props.className)`)
  buffer.push(`  const rest = {}`)
  buffer.push(`  for (let prop of Object.keys(props)) {`)
  buffer.push(`    const value = props[prop]`)
  buffer.push(`    const mapping = TailwindMapping[prop]`)
  buffer.push(`    if (!mapping) {`)
  buffer.push(`      rest[prop] = value`)
  buffer.push(`      continue`)
  buffer.push(`    }`)
  buffer.push(`    if (typeof value === "object") {`)
  buffer.push(`      for (let variant of Object.keys(value)) {`)
  buffer.push(`        const base_class = mapping[value[variant]]`)
  buffer.push(`        classes.push(`)
  buffer.push(
    `          (variant === "default" ? [base_class] : [TailwindVariantMapping[variant], base_class]).join(`
  )
  buffer.push(`            ":"`)
  buffer.push(`          )`)
  buffer.push(`        )`)
  buffer.push(`      }`)
  buffer.push(`      continue`)
  buffer.push(`    }`)
  buffer.push(`    classes.push(mapping[value])`)
  buffer.push(`  }`)
  buffer.push(`  return { ...rest, className: classes.join(" ") }`)
  buffer.push(`}`)

  for (let element of elements) {
    const name = element.charAt(0).toUpperCase() + element.slice(1)
    buffer.push(`export const ${name} = component("${element}")`)
  }

  return Prettier.format(buffer.join("\n"), { parser: "typescript" })
}

function get_variant(variant: string) {
  const [first, ...rest] = variant.split("-")
  return [
    first,
    ...rest.map((item) => item.charAt(0).toUpperCase() + item.slice(1)),
  ].join("")
}

function get_options(
  options: string[] | undefined,
  theme: string,
  config: any
) {
  if (options) return options
  return Dynamic.flatten(config.theme[theme]).map((item) =>
    item.path.filter((item) => item !== "default").join("-")
  )
}
