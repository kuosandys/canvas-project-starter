import esbuildServe from 'esbuild-serve';

esbuildServe(
  {
    entryPoints: ['src/index.ts'],
    bundle: true,
    incremental: true,
    minify: true,
    sourcemap: true,
    logLevel: 'info',
    outfile: 'dist/main.js',
  },
  { root: 'dist' }
);
