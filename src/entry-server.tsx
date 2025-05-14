
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import App from './App';

export function render(url: string) {
  // Render the app to string
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  // Get head data from Helmet
  const helmet = Helmet.renderStatic();
  
  // Return the HTML with helmet data
  return {
    html,
    head: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString()
    }
  };
}
