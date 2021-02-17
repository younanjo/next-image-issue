const basePath = process.env.BASE_PATH || null;

if (basePath) {
  console.log(`Using ${basePath} as base path.`);
}

module.exports = {
  basePath: basePath || '',
  images: {
    domains: ['localhost'],
    path: `${basePath}/_next/image`,
  },
};
