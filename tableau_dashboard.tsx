import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cards');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Cards & Claims Analytics</h1>
            <div className="text-sm text-gray-500">Last updated: {currentDate}</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Benefits</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>All Benefits</option>
                <option>HSA</option>
                <option>FSA</option>
                <option>HRA</option>
                <option>Commuter</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Partners</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>All Partners</option>
                <option>Partner A</option>
                <option>Partner B</option>
                <option>Partner C</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Organizations</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>All Organizations</option>
                <option>Organization 1</option>
                <option>Organization 2</option>
                <option>Organization 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('cards')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'cards'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setActiveTab('claims')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'claims'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Claims
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'cards' && (
        <div className="px-6 py-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cards Issued</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Cards Issued</h3>
                <div className="text-2xl font-bold text-gray-900">45,782</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Physical Cards</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">28,456</div>
                <div className="text-sm text-gray-500">62.2% of total</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Virtual Cards</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">17,326</div>
                <div className="text-sm text-gray-500">37.8% of total</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dependent Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Number of Dependent Cards</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">12,543</div>
                <div className="text-sm text-gray-500">27.4% of total cards</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Payment Volume (TPV)</h3>
                <div className="text-2xl font-bold text-gray-900">$12,458,923.45</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Payment Number (TPN)</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">156,782</div>
                <div className="text-sm text-gray-500">Total transactions</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Average Transaction Value (ATV)</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">$79.45</div>
                <div className="text-sm text-gray-500">Per transaction</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Substantiation Transactions</h2>
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">142,356</div>
                <div className="text-sm text-gray-500">90.8% of all transactions</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 rounded p-3 border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Authorized by IIAS</div>
                  <div className="text-lg font-semibold text-gray-900">98,547</div>
                  <div className="text-xs text-gray-500">69.2%</div>
                </div>
                <div className="bg-gray-50 rounded p-3 border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Authorized by Copay Matching</div>
                  <div className="text-lg font-semibold text-gray-900">32,145</div>
                  <div className="text-xs text-gray-500">22.6%</div>
                </div>
                <div className="bg-gray-50 rounded p-3 border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Authorized by MCC (HSA)</div>
                  <div className="text-lg font-semibold text-gray-900">11,664</div>
                  <div className="text-xs text-gray-500">8.2%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'claims' && (
        <div className="px-6 py-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Claims Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Number of Claims</h3>
                <div className="text-2xl font-bold text-gray-900">23,456</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Amount of Claims</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">$3,456,789.23</div>
                <div className="text-sm text-gray-500">Avg: $147.35</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Claims Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Unresolved Claims</h3>
                  <div className="text-3xl font-bold text-orange-600">3,421</div>
                  <div className="text-sm text-gray-500">14.6% of total</div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">New</span>
                    <span className="text-sm font-semibold text-gray-900">1,234</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">In Review</span>
                    <span className="text-sm font-semibold text-gray-900">987</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Information Requested</span>
                    <span className="text-sm font-semibold text-gray-900">876</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Updated</span>
                    <span className="text-sm font-semibold text-gray-900">324</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Resolved Claims</h3>
                  <div className="text-3xl font-bold text-green-600">20,035</div>
                  <div className="text-sm text-gray-500">85.4% of total</div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Approved</span>
                    <span className="text-sm font-semibold text-gray-900">8,234</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Payment Pending</span>
                    <span className="text-sm font-semibold text-gray-900">3,421</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Paid</span>
                    <span className="text-sm font-semibold text-gray-900">7,234</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Denied</span>
                    <span className="text-sm font-semibold text-gray-900">1,146</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top 10 Claim Denial Reasons</h2>
            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Denial Reason</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Count</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">% of Denials</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">1</td><td className="px-6 py-4 text-sm text-gray-900">Ineligible expense</td><td className="px-6 py-4 text-sm text-gray-900 text-right">234</td><td className="px-6 py-4 text-sm text-gray-500 text-right">20.4%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">2</td><td className="px-6 py-4 text-sm text-gray-900">Expense amount does not match receipt</td><td className="px-6 py-4 text-sm text-gray-900 text-right">187</td><td className="px-6 py-4 text-sm text-gray-500 text-right">16.3%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">3</td><td className="px-6 py-4 text-sm text-gray-900">Missing receipt</td><td className="px-6 py-4 text-sm text-gray-900 text-right">156</td><td className="px-6 py-4 text-sm text-gray-500 text-right">13.6%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">4</td><td className="px-6 py-4 text-sm text-gray-900">Duplicate claim</td><td className="px-6 py-4 text-sm text-gray-900 text-right">143</td><td className="px-6 py-4 text-sm text-gray-500 text-right">12.5%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">5</td><td className="px-6 py-4 text-sm text-gray-900">Out of network provider</td><td className="px-6 py-4 text-sm text-gray-900 text-right">98</td><td className="px-6 py-4 text-sm text-gray-500 text-right">8.5%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">6</td><td className="px-6 py-4 text-sm text-gray-900">Plan coverage limit exceeded</td><td className="px-6 py-4 text-sm text-gray-900 text-right">87</td><td className="px-6 py-4 text-sm text-gray-500 text-right">7.6%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">7</td><td className="px-6 py-4 text-sm text-gray-900">Service date outside coverage period</td><td className="px-6 py-4 text-sm text-gray-900 text-right">76</td><td className="px-6 py-4 text-sm text-gray-500 text-right">6.6%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">8</td><td className="px-6 py-4 text-sm text-gray-900">Incorrect claim form</td><td className="px-6 py-4 text-sm text-gray-900 text-right">65</td><td className="px-6 py-4 text-sm text-gray-500 text-right">5.7%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">9</td><td className="px-6 py-4 text-sm text-gray-900">Pre-authorization required</td><td className="px-6 py-4 text-sm text-gray-900 text-right">54</td><td className="px-6 py-4 text-sm text-gray-500 text-right">4.7%</td></tr>
                  <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">10</td><td className="px-6 py-4 text-sm text-gray-900">Other</td><td className="px-6 py-4 text-sm text-gray-900 text-right">46</td><td className="px-6 py-4 text-sm text-gray-500 text-right">4.0%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}