// src/components/MindPalChatbot.js

import Script from 'next/script';

export default function MindPalChatbot({ chatbotId, embedMode = 'bubble' }) {
  if (!chatbotId) {
    return null;
  }

  // UPDATED: The configuration now changes based on the embedMode prop.
  const configScript = embedMode === 'inline' 
    ? `
        window.mindpalConfig = {
          chatbotId: "${chatbotId}",
          embed: {
            mode: "inline",
            containerId: "mindpal-container"
          }
        };
      `
    : `
        window.mindpalConfig = {
          chatbotId: "${chatbotId}",
          behavior: {
            showInitialMessageBubbleWhenMinimized: true,
            minimizedByDefault: true
          }
        };
      `;

  return (
    <>
      <Script id={`mindpal-setup-${chatbotId}`} strategy="afterInteractive">
        {configScript}
      </Script>
      
      <Script
        id={`mindpal-run-${chatbotId}`}
        src="https://chatbot.getmindpal.com/embed.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}