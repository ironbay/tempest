import typescript from "rollup-plugin-typescript2"
import pkg from "./package.json"

export default {
  input: "src/components/index.tsx",
  output: [
    {
      banner: "#!/usr/bin/env node",
      file: pkg.main,
      format: "cjs",
    },
    // {
    //     file: pkg.browser,
    //     format: 'iife',
    //     name: 'Riptide'
    // }
  ],
  external: [
    "fs",
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
  ],
}
