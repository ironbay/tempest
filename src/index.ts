const resolveConfig = require("tailwindcss/lib/util/resolveConfig").default
const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub.js")
import fs from "fs"
import { generate_code } from "./code"
import props from "./props"

const input = process.argv[2]
const output = process.argv[3]

const parsed = eval(fs.readFileSync(input).toString())

const config = resolveConfig([parsed, defaultConfig])
const code = generate_code(props, config)
fs.writeFileSync(output, code)
