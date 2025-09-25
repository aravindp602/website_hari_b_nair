// src/data/bots.js

export const chatbotData = [
  { 
    id: 'social-media-strategy-canvas-7t3', 
    name: 'Social Media Strategist',
    category:'Business',
    icon:'/img/default.svg',
    description:'Crafts engaging posts and growth strategies for various platforms.',
    examples:[], // Examples are not needed for iframe embeds
    
    // CRITICAL: Specify the embed type and the direct URL for the iframe
    embedType: 'iframe',
    embedUrl: 'https://workflow.getmindpal.com/smc-a82lfig4qeeazhoc'
  },
  { 
    id: 'brand-identity-architect', 
    name: 'Brand Identity Architect', 
    category: 'Creativity', 
    icon: '/img/edit-3.svg', 
    description: 'Generates cohesive brand names, logos, and mission statements.', 
    examples: [],

    embedType: 'iframe',
    embedUrl: 'https://chatbot.getmindpal.com/brand-identity-architect'
  },
  { 
    id: 'code-refactor-engine', 
    name: 'Code Refactor Engine', 
    category: 'Technical', 
    icon: '/img/code.svg', 
    description: 'Analyzes and refactors code for optimal performance and readability.', 
    examples: ['"Refactor this Python function for efficiency"', '"Check my JavaScript for common errors"'] 
  },
  { 
    id: 'market-trend-forecaster', 
    name: 'Market Trend Forecaster', 
    category: 'Business', 
    icon: '/img/cpu.svg', 
    description: 'Predicts market shifts by analyzing vast datasets and news.', 
    examples: ['"What are the upcoming trends in renewable energy?"', '"Analyze the sentiment for stock XYZ"'] 
  },
  { 
    id: 'creative-writing-partner', 
    name: 'Creative Writing Partner', 
    category: 'Creativity', 
    icon: '/img/default.svg', 
    description: 'Helps brainstorm plots, characters, and dialogue for stories.', 
    examples: ['"Help me brainstorm a sci-fi plot twist"', '"Write a short poem about the ocean"'] 
  },
  { 
    id: 'automated-content-summarizer', 
    name: 'Automated Content Summarizer', 
    category: 'Productivity', 
    icon: '/img/default.svg', 
    description: 'Distills long articles and reports into concise summaries.', 
    examples: ['"Summarize the following article in 3 key points"', '"Give me the gist of this research paper"'] 
  },
  { 
    id: 'sql-query-generator', 
    name: 'SQL Query Generator', 
    category: 'Technical', 
    icon: '/img/default.svg', 
    description: 'Translates natural language questions into precise SQL queries.', 
    examples: ['"Show me all users from California who signed up last week"', '"Count the number of orders over $50"'] 
  },
  { 
    id: 'personalized-learning-tutor', 
    name: 'Personalized Learning Tutor', 
    category: 'Education', 
    icon: '/img/default.svg', 
    description: 'Creates custom lesson plans and quizzes on any subject.', 
    examples: ['"Explain quantum physics to me like I\'m five"', '"Create a 5-question quiz on World War II"'] 
  },
  { 
    id: 'investment-analysis-bot', 
    name: 'Investment Analysis Bot', 
    category: 'Business', 
    icon: '/img/default.svg', 
    description: 'Provides insights and analysis on stocks and market opportunities.', 
    examples: ['"What are the pros and cons of investing in AAPL?"', '"Compare the P/E ratio of Google and Microsoft"'] 
  },
  { 
    id: 'meeting-assistant', 
    name: 'Meeting Assistant', 
    category: 'Productivity', 
    icon: '/img/default.svg', 
    description: 'Transcribes meetings, identifies action items, and sends summaries.', 
    examples: ['"Summarize our project kickoff meeting"', '"List all action items assigned to John"'] 
  },
];

export const categories = ["Creativity", "Technical", "Business", "Productivity", "Education"];
