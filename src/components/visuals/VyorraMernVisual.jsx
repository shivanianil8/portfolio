import React, { useState } from 'react';

export default function VyorraMernVisual() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('getProducts');

  const endpoints = {
    getProducts: {
      method: 'GET',
      route: '/api/products?category=apparel',
      status: '200 OK',
      description: 'Fetches paginated catalog records with Mongoose index optimization.',
      payload: {
        success: true,
        count: 24,
        data: [
          { _id: '66810f92b7', name: 'Minimalist Cotton Overshirt', price: 1499, inStock: true, category: 'apparel' },
          { _id: '66810f94c1', name: 'Raw Canvas Tote', price: 699, inStock: true, category: 'accessories' },
        ],
      },
    },
    postOrder: {
      method: 'POST',
      route: '/api/orders/checkout',
      status: '201 Created',
      description: 'Atomically creates order docket, validates cart stock, and returns confirmation.',
      payload: {
        success: true,
        orderId: 'VY-2026-891',
        totalAmount: 2198,
        status: 'CONFIRMED',
        paymentGateway: 'Razorpay / MERN Integrated',
      },
    },
    authVerify: {
      method: 'GET',
      route: '/api/auth/me',
      status: '200 OK',
      description: 'JWT bearer token verification with Express authorization middleware.',
      payload: {
        authenticated: true,
        userId: 'usr_99182',
        role: 'customer',
        sessionValid: true,
      },
    },
  };

  const activeData = endpoints[selectedEndpoint];

  return (
    <div className="w-full bg-[#FAF7F2] border border-ink/15 rounded-sm p-4 sm:p-6 shadow-fine">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4 text-xxs font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          <span className="font-semibold text-ink uppercase tracking-wider">
            MERN ARCHITECTURE & REST CONTRACTS
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span>LIMENZY TECH (JUN 2026)</span>
          <span className="text-amber-800 font-semibold">MONGODB · REACT · NODE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Architecture Flow Diagram (6 Cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="text-xxs font-mono text-ink-muted">DECOUPLED ARCHITECTURE LAYERS</div>

          {/* Layer 1: Client */}
          <div className="p-3 bg-paper rounded border border-ink/15">
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted pb-1 mb-1 border-b border-ink/10">
              <span className="font-bold text-ink">CLIENT TIER // REACT 18</span>
              <span className="text-emerald-700 font-semibold">SPA / VITE</span>
            </div>
            <p className="text-xs text-ink-soft">
              Component-based catalog, responsive navigation, shopping cart state management, and asynchronous fetch handlers.
            </p>
          </div>

          {/* Connector arrow */}
          <div className="flex items-center justify-center text-ink-muted font-mono text-xxs">
            <span>↓ REST / JSON OVER HTTP (CORS ENABLED) ↑</span>
          </div>

          {/* Layer 2: API Gateway */}
          <div className="p-3 bg-paper rounded border border-ink/15">
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted pb-1 mb-1 border-b border-ink/10">
              <span className="font-bold text-ink">SERVER TIER // NODE.JS & EXPRESS</span>
              <span className="text-blue-700 font-semibold">MVC ROUTING</span>
            </div>
            <p className="text-xs text-ink-soft">
              Modular controllers, JWT auth middleware, request validation schemas, and error boundaries.
            </p>
          </div>

          {/* Connector arrow */}
          <div className="flex items-center justify-center text-ink-muted font-mono text-xxs">
            <span>↓ MONGOOSE ODM / BINARY PROTOCOL ↑</span>
          </div>

          {/* Layer 3: Persistence */}
          <div className="p-3 bg-paper rounded border border-ink/15">
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted pb-1 mb-1 border-b border-ink/10">
              <span className="font-bold text-ink">PERSISTENCE TIER // MONGODB</span>
              <span className="text-emerald-700 font-semibold">NOSQL CLUSTER</span>
            </div>
            <p className="text-xs text-ink-soft">
              Dynamic document collections (Products, Orders, Customers) with indexed queries and validation.
            </p>
          </div>
        </div>

        {/* REST API Inspector (6 Cols) */}
        <div className="lg:col-span-6 bg-paper rounded border border-ink/15 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted pb-2 border-b border-ink/10 mb-3">
              <span className="text-amber-800 font-bold">API CONTRACT INSPECTION</span>
              <span className="text-emerald-700 font-bold">{activeData.status}</span>
            </div>

            {/* Endpoint Selector Tabs */}
            <div className="flex gap-1.5 mb-3">
              <button
                onClick={() => setSelectedEndpoint('getProducts')}
                className={`flex-1 py-1 px-2 text-xxs font-mono rounded border transition-colors ${
                  selectedEndpoint === 'getProducts'
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper-warm text-ink-muted border-ink/15'
                }`}
              >
                GET Products
              </button>
              <button
                onClick={() => setSelectedEndpoint('postOrder')}
                className={`flex-1 py-1 px-2 text-xxs font-mono rounded border transition-colors ${
                  selectedEndpoint === 'postOrder'
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper-warm text-ink-muted border-ink/15'
                }`}
              >
                POST Order
              </button>
              <button
                onClick={() => setSelectedEndpoint('authVerify')}
                className={`flex-1 py-1 px-2 text-xxs font-mono rounded border transition-colors ${
                  selectedEndpoint === 'authVerify'
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper-warm text-ink-muted border-ink/15'
                }`}
              >
                GET Auth
              </button>
            </div>

            {/* Route Bar */}
            <div className="bg-[#141413] text-paper p-2.5 rounded font-mono text-xxs flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">{activeData.method}</span>
                <span className="text-zinc-200">{activeData.route}</span>
              </div>
              <span className="text-amber-400 font-semibold">{activeData.status}</span>
            </div>

            <p className="text-xxs text-ink-muted mb-2 font-mono">{activeData.description}</p>

            {/* JSON Output Payload */}
            <div className="bg-paper-warm p-2.5 rounded border border-ink/10 font-mono text-xxs overflow-x-auto max-h-40 text-ink leading-relaxed">
              <pre>{JSON.stringify(activeData.payload, null, 2)}</pre>
            </div>
          </div>

          <div className="mt-4 pt-2.5 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xxs font-mono text-ink-muted">
            <span>INTERNSHIP VERIFIED REPOSITORIES</span>
            <span className="text-ink font-semibold">FRONTEND & BACKEND AVAILABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
