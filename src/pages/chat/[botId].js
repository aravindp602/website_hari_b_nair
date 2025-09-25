// src/pages/chat/[botId].js

import Head from 'next/head';
import { useRouter } from 'next/router';
import { chatbotData } from '../../data/bots';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const getBotData = (botId) => chatbotData.find(bot => bot.id === botId);

export default function ChatPage() {
    const router = useRouter();
    const { botId } = router.query;

    const [bot, setBot] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    // State to manage the onboarding flow: 'form' or 'chat'
    const [chatStage, setChatStage] = useState('form');
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (botId) {
            const data = getBotData(botId);
            setBot(data);
            // If the bot does not have a form, skip straight to the chat stage
            if (data && !data.onboardingForm) {
                setChatStage('chat');
            }
        }
    }, [botId]);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        let initialPrompt = `Hello! Please generate a social media strategy based on the following details:\n\n`;
        bot.onboardingForm.questions.forEach(q => {
            initialPrompt += `- ${q.label}: ${formData[q.id] || 'Not provided'}\n`;
        });

        const newUserMessage = { sender: 'user', text: initialPrompt };
        setMessages([newUserMessage]);
        setChatStage('chat'); // This transitions the UI to the chat view
        
        setIsLoading(true);
        // Simulate API call with the formatted prompt
        await new Promise(resolve => setTimeout(resolve, 1500));
        const botResponse = { sender: 'bot', text: `Great, thank you for the detailed information! Based on your goals, here is a foundational social media strategy to get you started...` };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
    };

    const handleSend = async () => {
        if (!userInput.trim()) return;
        
        const newUserMessage = { sender: 'user', text: userInput };
        const currentMessages = [...messages, newUserMessage];
        setMessages(currentMessages);
        setUserInput('');
        setIsLoading(true);

        // Simulate a follow-up API call
        await new Promise(resolve => setTimeout(resolve, 1200));
        const botFollowUpResponse = { sender: 'bot', text: `That's a great follow-up question. Let's explore that further...` };
        setMessages([...currentMessages, botFollowUpResponse]);
        setIsLoading(false);
    };

    if (!bot) {
        return (
            <div className="full-page-message-wrapper">
                <div className="loading-page">Loading Agent...</div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Chat with {bot.name} | Agentic Collective</title>
            </Head>

            <div className="background-grid"></div>
            <Header />

            <div className="chat-layout-grid">
                <aside id="chat-history-panel" className="chat-history-panel">
                    <div className="history-header"><h3>History</h3><a href="/chat" className="new-chat-btn" title="Start a new chat">+ New Chat</a></div>
                    <div className="history-list"><p className="placeholder-text">Your conversations will appear here.</p></div>
                </aside>

                <main className="chat-main-content">
                    <div id="chat-header-controls" className="chat-header-controls">
                        <h1 id="chat-title" className="chat-title">Chat with {bot.name}</h1>
                    </div>

                    {/* --- CONDITIONAL UI RENDERING --- */}
                    {bot.onboardingForm && chatStage === 'form' ? (
                        <div className="onboarding-container">
                            <h2>{bot.onboardingForm.title}</h2>
                            <p>Please answer the questions below to begin.</p>
                            <form className="onboarding-form" onSubmit={handleFormSubmit}>
                                {bot.onboardingForm.questions.map(q => (
                                    <div key={q.id} className="form-field">
                                        <label htmlFor={q.id}>{q.label}</label>
                                        {q.type === 'text' && <input type="text" id={q.id} name={q.id} placeholder={q.placeholder} onChange={handleFormChange} required />}
                                        {q.type === 'textarea' && <textarea id={q.id} name={q.id} placeholder={q.placeholder} onChange={handleFormChange} rows="3" required></textarea>}
                                        {q.type === 'select' && (
                                            <select id={q.id} name={q.id} onChange={handleFormChange} required>
                                                <option value="">Select an option...</option>
                                                {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                        )}
                                    </div>
                                ))}
                                <button type="submit" className="cta-button">Generate Strategy</button>
                            </form>
                        </div>
                    ) : (
                        <>
                            <div id="chat-window" className="chat-window">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message-wrapper ${msg.sender}-message`}>
                                        <div className="message" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="message-wrapper bot-message">
                                        <div className="message typing-indicator"><span></span><span></span><span></span></div>
                                    </div>
                                )}
                            </div>
                            <div className="chat-input-container">
                                <div className="chat-input-area">
                                    <input 
                                        type="text" 
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Ask a follow-up question..." 
                                    />
                                    <button onClick={handleSend} title="Send Message" aria-label="Send Message" disabled={isLoading}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </main>
            </div>
            
            <Footer />
        </>
    );
}