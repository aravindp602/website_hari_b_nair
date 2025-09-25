// src/pages/dashboard.js
import Head from 'next/head';

export default function DashboardPage() {
  // Your dashboard logic for fetching favorites and history goes here
  return (
    <>
      <Head>
        <title>Your Dashboard | Agentic Collective</title>
      </Head>

      <section className="dashboard-hero">
        <div className="container">
            <h1>Welcome Back</h1>
            <p>Here are your favorite agents and recent conversations, ready when you are.</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="container">
            <h2>Favorite Agents</h2>
            <div id="favorite-bots-grid" className="chatbot-grid">
                <div className="placeholder-text">Favorites will be loaded here.</div>
            </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="container">
            <h2>Recent Conversations</h2>
            <div id="recent-conversations-list" className="conversations-list">
                <div className="placeholder-text">Recent chats will be loaded here.</div>
            </div>
        </div>
      </section>
    </>
  )
}