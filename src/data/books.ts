import { Book } from '../types';

export const BOOKS: Book[] = [
  {
    id: 'system-design',
    title: 'System Design Interview & Blueprints',
    subtitle: 'Mastering distributed databases, global scaling, and microservices architecture',
    author: 'Alexandre Carter',
    price: 39.99,
    rating: 4.9,
    reviews: 184,
    pages: 420,
    tags: ['Microservices', 'Scaling', 'Caching', 'gRPC'],
    category: 'architecture',
    publishYear: 2026,
    coverGradient: 'from-slate-950 via-slate-900 to-indigo-950',
    iconName: 'Network',
    isBestSeller: true,
    synopsis: 'Written for engineers who keep getting asked to design systems they have never built. The chapters walk through architectures behind apps you actually use — what was scrapped, what survived, and why.',
    features: [
      'Scaling patterns that survive past 10M daily users',
      'When SQL beats NoSQL, and the rare times NewSQL is worth it',
      'Caching, rate limits, and CDN tradeoffs you hit in production',
      'Worked sample answers for design rounds at FAANG-tier interviews'
    ]
  },
  {
    id: 'rust-systems',
    title: 'The Rust Systems Handbook',
    subtitle: 'High-performance computing, safe concurrency, and secure low-level engineering',
    author: 'Elena Rostova',
    price: 45.00,
    rating: 4.8,
    reviews: 142,
    pages: 385,
    tags: ['Rust', 'Compiler', 'Concurrency', 'WebAssembly'],
    category: 'systems',
    publishYear: 2025,
    coverGradient: 'from-slate-950 via-slate-900 to-orange-950',
    iconName: 'Cpu',
    isBestSeller: false,
    synopsis: 'Rust without the borrow-checker drama. Memory management without a GC, threads that do not lock up, and shipping the same code to the browser through WebAssembly.',
    features: [
      'The borrow checker, finally explained the way a friend would',
      'Multi-threading patterns that do not end in a 3am page',
      'Custom allocators and zero-cost abstractions, with the assembly to prove it',
      'The same Rust code running in the browser via WebAssembly'
    ]
  },
  {
    id: 'typescript-react',
    title: 'Mastering TypeScript & React 19',
    subtitle: 'Modern UI patterns, server components, and rigorous type-safe architecture',
    author: 'Dan Abramovitch',
    price: 34.50,
    rating: 4.9,
    reviews: 219,
    pages: 512,
    tags: ['React 19', 'TypeScript 5', 'State Engine', 'Vite'],
    category: 'frontend',
    publishYear: 2026,
    coverGradient: 'from-slate-950 via-slate-900 to-cyan-950',
    iconName: 'Code2',
    isBestSeller: true,
    synopsis: 'React 19 the way teams actually ship it in 2026. Server components, strict TypeScript, and Vite configs you would recognise from a real codebase.',
    features: [
      'Generics that read like a sentence, not a puzzle',
      'Concurrent rendering, transitions, and where Suspense breaks down',
      'State management without reaching for a third library',
      'Vite caching and hydration bugs, debugged for you in advance'
    ]
  },
  {
    id: 'generative-ai',
    title: 'Foundations of Generative AI & LLMs',
    subtitle: 'From Transformer architectures to autonomous agentic engineering pipelines',
    author: 'Dr. Hiroshi Tanaka',
    price: 49.99,
    rating: 4.7,
    reviews: 95,
    pages: 460,
    tags: ['LLMs', 'PyTorch', 'Transformers', 'Agentic AI'],
    category: 'ai',
    publishYear: 2026,
    coverGradient: 'from-slate-950 via-slate-900 to-purple-950',
    iconName: 'BrainCircuit',
    isBestSeller: true,
    synopsis: 'From a multi-head attention module in raw PyTorch to a working agent loop. The math is there when you need it, the code is there when you do not.',
    features: [
      'Attention and transformer math, with the matrices fully written out',
      'Write your own tokenizer in PyTorch, line by line',
      'Agents that talk to APIs, calculators, and your own tools',
      'RAG and embeddings, from indexing to the parts that break in production'
    ]
  },
  {
    id: 'go-microservices',
    title: 'Go Web Microservices at Scale',
    subtitle: 'Containerized API gateways, extreme routing, gRPC, and Kubernetes pipelines',
    author: 'Sarah Jenkins',
    price: 29.99,
    rating: 4.8,
    reviews: 112,
    pages: 350,
    tags: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
    category: 'backend',
    publishYear: 2025,
    coverGradient: 'from-slate-950 via-slate-900 to-emerald-950',
    iconName: 'Terminal',
    isBestSeller: false,
    synopsis: 'Go is what your cloud is written in. The book covers fast APIs, gRPC between services, containers that do not bloat, and Kubernetes pipelines that survive a Friday deploy.',
    features: [
      'Servers built on goroutines and channels, without the foot-guns',
      'gRPC and HTTP/2 over protobuf, with realistic latency numbers',
      'Dockerfiles, health checks, and secrets that pass a real audit',
      'Kubernetes deployments that auto-scale and self-heal'
    ]
  },
  {
    id: 'advanced-fullstack',
    title: 'The Advanced Full-Stack Cookbook',
    subtitle: 'Next-generation stacks, relational modeling, real-time WebSockets, and DevOps',
    author: 'Marcus Vance',
    price: 37.99,
    rating: 4.6,
    reviews: 156,
    pages: 490,
    tags: ['Nextjs', 'Prisma', 'PostgreSQL', 'WebSockets'],
    category: 'architecture',
    publishYear: 2026,
    coverGradient: 'from-slate-950 via-slate-900 to-pink-950',
    iconName: 'Layers',
    isBestSeller: false,
    synopsis: 'Recipes for the messy parts: migrating a live database without downtime, syncing multiplayer state over sockets, and keeping auth tight when the team grows.',
    features: [
      'SQL relationships, triggers, and indexes through Prisma',
      'Two-way sync over WebSockets, with reconnection that works',
      'JWT sessions, password hashing, and rotation that does not lock users out',
      'CI/CD pipelines on GitHub Actions you can copy verbatim'
    ]
  }
];
