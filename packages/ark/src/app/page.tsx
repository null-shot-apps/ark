'use client';

import { useState } from 'react';

export default function TwitterGrowthApp() {
  const [tweetIdea, setTweetIdea] = useState('');
  const [generatedTweets, setGeneratedTweets] = useState<string[]>([]);
  const [analytics, setAnalytics] = useState({
    totalViews: 0,
    engagement: 0,
    followers: 0
  });
  const [activeTab, setActiveTab] = useState<'generate' | 'schedule' | 'analytics'>('generate');

  const viralTopics = [
    '🔥 Trending Tech',
    '💡 Life Hacks',
    '🚀 Startup Tips',
    '💰 Money Advice',
    '🎯 Productivity',
    '🧠 Psychology',
    '📈 Growth Hacks',
    '⚡ Hot Takes'
  ];

  const generateViralTweets = () => {
    if (!tweetIdea.trim()) return;
    
    const templates = [
      `🧵 Thread: ${tweetIdea}\n\n1/ Here's what nobody tells you...`,
      `Hot take: ${tweetIdea}\n\nLet me explain why this changes everything 👇`,
      `I spent 5 years learning ${tweetIdea}.\n\nHere are the 7 lessons that actually matter:`,
      `${tweetIdea}\n\nThis is the playbook that got me to 100K followers:`,
      `Everyone talks about ${tweetIdea}.\n\nBut here's what actually works in 2024:`,
      `The ${tweetIdea} framework:\n\n✅ Step 1:\n✅ Step 2:\n✅ Step 3:\n\nSave this.`
    ];

    const newTweets = templates.slice(0, 3);
    setGeneratedTweets(newTweets);
    
    // Simulate analytics boost
    setAnalytics(prev => ({
      totalViews: prev.totalViews + Math.floor(Math.random() * 5000) + 2000,
      engagement: prev.engagement + Math.floor(Math.random() * 500) + 100,
      followers: prev.followers + Math.floor(Math.random() * 50) + 10
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">𝕏</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ViewBoost
                </h1>
                <p className="text-xs text-gray-500">Generate Viral Content</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{analytics.totalViews.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Total Views</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex gap-2 border-b border-gray-200">
          {(['generate', 'schedule', 'analytics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'generate' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Input */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Create Viral Content</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What do you want to tweet about?
                    </label>
                    <textarea
                      value={tweetIdea}
                      onChange={(e) => setTweetIdea(e.target.value)}
                      placeholder="e.g., AI tools, productivity tips, startup advice..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={4}
                    />
                  </div>

                  <button
                    onClick={generateViralTweets}
                    disabled={!tweetIdea.trim()}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ✨ Generate Viral Tweets
                  </button>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-bold mb-4 text-gray-800">🔥 Trending Topics</h3>
                <div className="grid grid-cols-2 gap-2">
                  {viralTopics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setTweetIdea(topic.split(' ').slice(1).join(' '))}
                      className="px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Generated Tweets */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Generated Tweets</h2>
                
                {generatedTweets.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p>Your viral tweets will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {generatedTweets.map((tweet, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                        <p className="text-gray-800 whitespace-pre-wrap mb-3">{tweet}</p>
                        <div className="flex gap-2">
                          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            📤 Post Now
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                            📋 Copy
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">📅 Schedule Posts</h2>
            <div className="text-center py-12 text-gray-400">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg">Schedule your tweets for optimal posting times</p>
              <p className="text-sm mt-2">Coming soon: Auto-schedule at peak engagement hours</p>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-sm opacity-90 mb-2">Total Views</div>
                <div className="text-4xl font-bold">{analytics.totalViews.toLocaleString()}</div>
                <div className="text-sm opacity-75 mt-2">+{Math.floor(analytics.totalViews * 0.23)} this week</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-sm opacity-90 mb-2">Engagement</div>
                <div className="text-4xl font-bold">{analytics.engagement.toLocaleString()}</div>
                <div className="text-sm opacity-75 mt-2">Likes, retweets, replies</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-sm opacity-90 mb-2">New Followers</div>
                <div className="text-4xl font-bold">+{analytics.followers}</div>
                <div className="text-sm opacity-75 mt-2">From viral content</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">📊 Growth Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">Best Posting Time</div>
                    <div className="text-sm text-gray-600">9 AM - 11 AM EST</div>
                  </div>
                  <div className="text-3xl">⏰</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">Top Performing Content</div>
                    <div className="text-sm text-gray-600">Threads & How-to guides</div>
                  </div>
                  <div className="text-3xl">🔥</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">Engagement Rate</div>
                    <div className="text-sm text-gray-600">4.2% (Above average!)</div>
                  </div>
                  <div className="text-3xl">📈</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

