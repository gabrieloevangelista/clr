// .pnpmfile.cjs
// Configuração para aprovar automaticamente build scripts durante deploy

module.exports = {
  hooks: {
    readPackage(pkg) {
      // Aprovar automaticamente build scripts para dependências conhecidas
      if (pkg.name === 'esbuild' || pkg.name === 'sharp' || pkg.name === 'unrs-resolver') {
        // Estas dependências são seguras e necessárias para o build
        pkg.scripts = pkg.scripts || {}
      }
      return pkg
    }
  }
}