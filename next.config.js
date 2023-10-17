/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts',
  // },
    images: {
      loader: 'imgix',
      path: '',
    },
  
}

module.exports = nextConfig
