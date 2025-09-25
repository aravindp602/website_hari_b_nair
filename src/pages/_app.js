// src/pages/_app.js

import '../styles/style.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

// This is the list of bots that need the special full-screen, no-header/footer layout.
const mindPalBotIds = [
    'social-media-strategy-canvas-7t3',
    // Add other full-screen bot IDs here in the future
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current route is one of our special full-screen chat pages.
  const isFullScreenChatPage = 
    router.pathname.startsWith('/chat/') && 
    mindPalBotIds.includes(router.query.botId);

  // If it's a full-screen chat page, render the component directly
  // without wrapping it in the main Layout.
  if (isFullScreenChatPage) {
    return <Component {...pageProps} />;
  }

  // Otherwise, for all other pages (index, dashboard, custom chat UI),
  // wrap them in the standard Layout with the header and footer.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;