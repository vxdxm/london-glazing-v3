
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Read the src/pages directory to get all pages
const getRoutes = () => {
  const routesDir = toAbsolute('src/pages')
  const baseRoutes = fs.readdirSync(routesDir)
    .filter(file => file.endsWith('.tsx'))
    .map((file) => {
      const name = file.replace(/\.tsx$/, '').toLowerCase()
      return name === 'index' ? '/' : `/${name}`
    })
  
  // Add specialized routes
  const specializedDir = path.join(routesDir, 'specialized')
  let specializedRoutes = []
  if (fs.existsSync(specializedDir)) {
    specializedRoutes = fs.readdirSync(specializedDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => `/specialized/${file.replace(/\.tsx$/, '').toLowerCase()}`)
  }
  
  // Add commercial routes
  const commercialDir = path.join(routesDir, 'commercial')
  let commercialRoutes = []
  if (fs.existsSync(commercialDir)) {
    commercialRoutes = fs.readdirSync(commercialDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => `/commercial/${file.replace(/\.tsx$/, '').toLowerCase()}`)
  }
  
  return [...baseRoutes, ...specializedRoutes, ...commercialRoutes]
}

const routesToPrerender = getRoutes()

;(async () => {
  for (const url of routesToPrerender) {
    const rendered = render(url);
    const { html, head } = rendered;
    
    // Replace the head and body content
    let htmlWithHead = template
      .replace('<title>Secondary Glazing Specialist</title>', head.title)
      .replace('<!-- meta tags -->', head.meta)
      .replace('<!-- link tags -->', head.link)
      .replace('<!-- script tags -->', head.script)
      .replace('<!--app-html-->', html);

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
    fs.writeFileSync(toAbsolute(filePath), htmlWithHead)
    console.log('pre-rendered:', filePath)
  }
})()
