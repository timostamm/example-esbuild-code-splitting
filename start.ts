import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['src/page-a-entry.ts', 'src/page-b-entry.ts'],
  outdir: 'www',
  splitting: true,
  bundle: true,
  format: 'esm',
})

let { host, port } = await ctx.serve({
  servedir: 'www',
})

console.log(`http://${host}:${port}`)
