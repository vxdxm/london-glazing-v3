
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import App from './App';
import { getPageMeta } from './lib/pageMeta';

export function render(url: string) {
  // Render the app to string
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  // Get head data from Helmet
  const helmet = Helmet.renderStatic();
  
  // Get page-specific metadata
  const pageMeta = getPageMeta(url);
  
  // Return the HTML with helmet data and page metadata
  return {
    html,
    head: {
      title: helmet.title.toString() || `<title>${pageMeta.title}</title>`,
      meta: helmet.meta.toString() || `
        <meta name="description" content="${pageMeta.description}">
        <meta name="keywords" content="${pageMeta.keywords || ''}">
        <meta property="og:title" content="${pageMeta.title}">
        <meta property="og:description" content="${pageMeta.description}">
        <meta property="og:image" content="${pageMeta.ogImage}">
        <meta property="og:url" content="${pageMeta.canonical}">
        <meta property="og:type" content="website">
      `,
      link: helmet.link.toString() || `<link rel="canonical" href="${pageMeta.canonical}">`,
      script: helmet.script.toString() || (pageMeta.schemaMarkup ? 
        `<script type="application/ld+json">${JSON.stringify(pageMeta.schemaMarkup)}</script>` : '')
    }
  };
}
