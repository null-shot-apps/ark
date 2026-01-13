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
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const viralTopics = [
    '🔥 Trending Tech',
    '💡 Life Hacks',
    '🚀 Startup Tips',
    '💰 Money Advice',
    '🎯 Productivity',
    '🧠 Psychology',
    '📈 Growth Hacks',
    '⚡ Hot Takes',
    '🤖 AI Tools',
    '💪 Fitness',
    '📚 Book Summaries',
    '🎨 Design Tips'
  ];

  const viralHooks = [
    "This is the [topic] playbook that got me to 100K followers:",
    "I spent 5 years learning [topic]. Here are the 7 lessons that actually matter:",
    "Everyone talks about [topic]. But here's what actually works in 2024:",
    "Hot take: [topic] - Let me explain why this changes everything 👇",
    "🧵 Thread: [topic] - Here's what nobody tells you...",
    "The [topic] framework that 10x'd my results:",
    "I made every mistake with [topic]. Here's what I learned:",
    "Stop doing [topic] wrong. Here's the right way:",
    "The brutal truth about [topic] nobody wants to hear:",
    "[topic] is broken. Here's how to fix it:"
  ];

  const generateViralTweets = () => {
    if (!tweetIdea.trim()) return;
    
    const templates = [
      `🧵 THREAD: ${tweetIdea}\n\n1/ Here's what nobody tells you...\n\n2/ Most people get this wrong because they focus on [common mistake]\n\n3/ Instead, do this:\n• [Strategy 1]\n• [Strategy 2]\n• [Strategy 3]\n\n4/ The results? 10x growth in 90 days.\n\nRetweet to save this.`,
      
      `Hot take: ${tweetIdea}\n\nLet me explain why this changes everything 👇\n\nThe old way:\n❌ Slow\n❌ Expensive\n❌ Complicated\n\nThe new way:\n✅ Fast\n✅ Free\n✅ Simple\n\nHere's the exact framework:`,
      
      `I spent 5 years learning ${tweetIdea}.\n\nHere are the 7 lessons that actually matter:\n\n1. Start before you're ready\n2. Consistency beats perfection\n3. Learn in public\n4. Build an audience first\n5. Focus on one thing\n6. Ship fast, iterate faster\n7. Help others win\n\nSave this.`,
      
      `${tweetIdea} - This is the playbook that got me to 100K followers:\n\nStep 1: Post daily (no excuses)\nStep 2: Study viral content\nStep 3: Engage with bigger accounts\nStep 4: Share valuable insights\nStep 5: Be authentic\n\nRepeat for 6 months.\n\nResults guaranteed.`,
      
      `Everyone talks about ${tweetIdea}.\n\nBut here's what actually works in 2024:\n\n🎯 Focus on value, not vanity metrics\n🎯 Build in public\n🎯 Engage before you post\n🎯 Use proven frameworks\n🎯 Be consistent\n\nDo this for 90 days and watch what happens.`,
      
      `The ${tweetIdea} framework:\n\n✅ Step 1: Research what's working\n✅ Step 2: Create your unique angle\n✅ Step 3: Post at optimal times\n✅ Step 4: Engage with your audience\n✅ Step 5: Analyze and optimize\n\nRinse and repeat.\n\nSave this for later.`,

      `Stop doing ${tweetIdea} wrong.\n\nHere's the right way:\n\n❌ Don't: Post randomly\n✅ Do: Have a content strategy\n\n❌ Don't: Ignore engagement\n✅ Do: Reply to every comment\n\n❌ Don't: Copy others\n✅ Do: Find your unique voice\n\nSimple but powerful.`,

      `The brutal truth about ${tweetIdea}:\n\nMost people fail because they:\n• Quit too early\n• Don't provide value\n• Copy instead of create\n• Ignore their audience\n\nWant to win? Do the opposite.\n\nIt's that simple.`,

      `I analyzed 1000+ viral tweets about ${tweetIdea}.\n\nHere's the pattern:\n\n📌 Hook in first 5 words\n📌 Promise a transformation\n📌 Use bullet points\n📌 End with a CTA\n\nCopy this formula.\n\nThank me later.`,

      `${tweetIdea} in 2024:\n\nWhat worked before:\n• [Old method 1]\n• [Old method 2]\n\nWhat works now:\n• [New method 1]\n• [New method 2]\n\nAdapt or get left behind.`
    ];

    // Randomly select 4 templates
    const shuffled = templates.sort(() => 0.5 - Math.random());
    const newTweets = shuffled.slice(0, 4);
    setGeneratedTweets(newTweets);
    
    // Simulate analytics boost
    setAnalytics(prev => ({
      totalViews: prev.totalViews + Math.floor(Math.random() * 8000) + 3000,
      engagement: prev.engagement + Math.floor(Math.random() * 800) + 200,
      followers: prev.followers + Math.floor(Math.random() * 100) + 25
    }));
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } catch (e) {
        console.error('Fallback copy failed:', e);
      }
      document.body.removeChild(textArea);
    }
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
                  ViewBoost Pro
                </h1>
                <p className="text-xs text-gray-500">Generate Thousands of Views</p>
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
                <h2 className="text-xl font-bold mb-4 text-gray-800">🚀 Create Viral Content</h2>
                
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

              {/* Viral Hooks */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-bold mb-3 text-gray-800">💡 Proven Viral Hooks</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {viralHooks.map((hook, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-sm text-gray-700 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setTweetIdea(hook.replace('[topic]', tweetIdea || 'your topic'))}
                    >
                      {hook}
                    </div>
                  ))}
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
                <h2 className="text-xl font-bold mb-4 text-gray-800">📝 Generated Tweets</h2>
                
                {generatedTweets.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="text-lg font-medium">Your viral tweets will appear here</p>
                    <p className="text-sm mt-2">Enter a topic and click generate</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {generatedTweets.map((tweet, idx) => (
                      <div key={idx} className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors bg-gradient-to-br from-white to-blue-50">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">𝕏</span>
                          </div>
                          <p className="text-gray-800 whitespace-pre-wrap flex-1 text-sm leading-relaxed">{tweet}</p>
                        </div>
                        <div className="flex gap-2 pt-3 border-t border-gray-200">
                          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                            📤 Post Now
                          </button>
                          <button 
                            onClick={() => copyToClipboard(tweet, idx)}
                            className={`px-4 py-2 border-2 rounded-lg transition-all text-sm font-medium ${
                              copiedIndex === idx
                                ? 'border-green-600 bg-green-50 text-green-600'
                                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                            }`}
                          >
                            {copiedIndex === idx ? '✅ Copied!' : '📋 Copy'}
                          </button>
                        </div>
                        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                          <span>💬 Est. {Math.floor(Math.random() * 500) + 100} replies</span>
                          <span>🔄 Est. {Math.floor(Math.random() * 1000) + 500} retweets</span>
                          <span>👁️ Est. {(Math.floor(Math.random() * 50) + 10)}K views</span>
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
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-blue-900">⏰ Best Times to Post</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9 AM, 12 PM, 5 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends:</span>
                    <span className="font-semibold">10 AM, 2 PM EST</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-purple-900">📊 Posting Frequency</h3>
                <div className="space-y-2 text-sm text-purple-800">
                  <div>✅ Minimum: 3-5 tweets per day</div>
                  <div>✅ Optimal: 7-10 tweets per day</div>
                  <div>✅ Include: 2-3 threads per week</div>
                </div>
              </div>
            </div>
            <div className="text-center py-12 text-gray-400">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-medium">Auto-Scheduler Coming Soon</p>
              <p className="text-sm mt-2">Schedule tweets at peak engagement times automatically</p>
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

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">Viral Potential</div>
                    <div className="text-sm text-gray-600">High - Keep posting consistently</div>
                  </div>
                  <div className="text-3xl">⚡</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">💡 Pro Tips for Maximum Views</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="font-semibold text-blue-900 mb-2">1. Hook in First 5 Words</div>
                  <div className="text-sm text-blue-800">Grab attention immediately with powerful opening</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="font-semibold text-purple-900 mb-2">2. Use Bullet Points</div>
                  <div className="text-sm text-purple-800">Makes content scannable and shareable</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                  <div className="font-semibold text-pink-900 mb-2">3. End with CTA</div>
                  <div className="text-sm text-pink-800">&quot;Save this&quot;, &quot;Retweet&quot;, &quot;Follow for more&quot;</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="font-semibold text-green-900 mb-2">4. Post Consistently</div>
                  <div className="text-sm text-green-800">3-5 tweets daily for maximum reach</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}






