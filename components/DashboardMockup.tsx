'use client';

export function DashboardMockupGoals() {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 px-4 py-3 flex items-center justify-between text-sm border-b border-gray-300">
        <div className="flex items-center gap-2">
          <span>📍 Strategy Call</span>
        </div>
        <div className="flex gap-4">
          <span className="text-gray-600">Funnel</span>
          <span className="text-gray-600">Metrics</span>
          <span className="text-gray-600">Contacts</span>
          <span className="text-gray-600">Apps</span>
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold">
          Publish →
        </button>
      </div>
      <div className="flex">
        <div className="w-32 border-r border-gray-300 p-4 bg-gray-50">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold text-black">Pages</span>
            <span className="text-xs text-gray-500">Messages</span>
            <span className="text-xs text-gray-500">Design</span>
          </div>
          <ul className="text-xs space-y-2">
            <li className="text-gray-600">1 Start</li>
            <li className="text-gray-600">2 Range</li>
            <li className="font-semibold text-black">3 Goal</li>
            <li className="text-gray-600">4 Position</li>
            <li className="text-gray-600">5 Budget</li>
            <li className="text-gray-600">6 Opt-in</li>
            <li className="text-blue-500">+ Add page</li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          <div className="bg-gray-900 text-white rounded-lg p-6 max-w-xs">
            <div className="mb-4 text-center text-xs text-gray-400">📅</div>
            <p className="text-xs text-gray-400 mb-4">Question 2 of 3</p>
            <h3 className="text-base font-semibold mb-2">What goals should Marketing meet for your business?</h3>
            <p className="text-xs text-gray-400 mb-4">Choose as many as you want</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Generate appointments</span>
                <div className="w-4 h-4 border border-gray-500 rounded" />
              </div>
              <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                <span className="text-sm">Convert prospects to customers</span>
                <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">✓</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Gain reach</span>
                <div className="w-4 h-4 border border-gray-500 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockupRange() {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 px-4 py-3 flex items-center justify-between text-sm border-b border-gray-300">
        <div className="flex items-center gap-2">
          <span>📍 Range</span>
        </div>
        <div className="flex gap-4">
          <span className="text-gray-600">Funnel</span>
          <span className="text-gray-600">Metrics</span>
          <span className="text-gray-600">Contacts</span>
          <span className="text-gray-600">Apps</span>
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold">
          Publish →
        </button>
      </div>
      <div className="flex">
        <div className="w-32 border-r border-gray-300 p-4 bg-gray-50">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold text-black">Pages</span>
            <span className="text-xs text-gray-500">Messages</span>
            <span className="text-xs text-gray-500">Design</span>
          </div>
          <ul className="text-xs space-y-2">
            <li className="text-gray-600">1 Start</li>
            <li className="font-semibold text-black">2 Range</li>
            <li className="text-gray-600">3 Goal</li>
            <li className="text-gray-600">4 Position</li>
            <li className="text-gray-600">5 Budget</li>
            <li className="text-gray-600">6 Opt-in</li>
            <li className="text-blue-500">+ Add page</li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs">
            <p className="text-xs text-gray-400 mb-4">Question 1 of 3</p>
            <h3 className="text-base font-semibold mb-2">What is your annual budget range for marketing?</h3>
            <p className="text-xs text-gray-400 mb-4">Select one option</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input type="radio" id="range1" name="budget" className="w-4 h-4" />
                <label htmlFor="range1" className="text-sm">Under $50K</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="range2" name="budget" className="w-4 h-4" defaultChecked />
                <label htmlFor="range2" className="text-sm">$50K - $250K</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="range3" name="budget" className="w-4 h-4" />
                <label htmlFor="range3" className="text-sm">Over $250K</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
