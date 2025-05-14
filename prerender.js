// src/entry-server.tsx
import { createStaticHandler } from 'react-router-dom/server';
import App from './App';
import { getPageMeta } from './lib/pageMeta';

export async function render(url: string) {
  const { query } = createStaticHandler(routes);
  const context = await query(new Request(url));
  
  if (context instanceof Response) {
    throw context;
  }
  return context;
}

export function getTitle(url: string) {
  return getPageMeta(url).title;
}

export function getDescription(url: string) {
  return getPageMeta(url).description;
}

export default {
  routes: [
    {
      path: '/',
      element: <App />,
    },
    // Add all your routes here
  ],
  render,
  getTitle,
  getDescription
};
