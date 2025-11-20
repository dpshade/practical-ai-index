# The Practical AI Index

> **Translating AI benchmarks into plain English decisions.**

## Overview

The Practical AI Index is a decision engine that transforms abstract LLM benchmarks into **human-observable behaviors** and **direct competitor comparisons**. Instead of telling you that a model scored 87.3% on MMLU, we tell you what it's actually good for—and who does it better or cheaper.

### The Problem We Solve

Current LLM leaderboards serve researchers with abstract metrics. They fail to answer the builder's critical questions:
- "Which model should I use for my API documentation?"
- "Is this $10/million token model worth it, or should I use the $0.50 alternative?"
- "What am I actually getting for 10x the price?"

### Our Approach

We translate technical data into **Behavioral Profiles** that include:
- **Plain English descriptions** of how models actually behave
- **Competitive positioning** showing closest alternatives and value swaps
- **Stewardship-first recommendations** prioritizing practical utility over raw performance

## Core Principles

1. **Behavior over Benchmarks** - We describe outcomes ("Hallucinates aggressively"), not scores
2. **Relational Context** - Every model is compared to market leaders and budget options
3. **Stewardship First** - If a model costs 10x more for 5% better performance, we call it out
4. **Plain English** - All descriptions understandable by non-technical stakeholders

## Target Users

- **The Bootstrapper**: Needs the cheapest model that won't break the build
- **The Family Steward**: Looking for safe, local-first models that respect privacy
- **The Enterprise Dev**: Needs ammunition to justify model choices to management

## Key Features

### 1. Behavioral Cards

Each model gets a plain-English profile with:
- Personality and tone characteristics
- Coding capabilities and quirks
- Memory and context handling
- **Competitive Landscape** showing:
  - Closest alternatives
  - Models that beat it (and where)
  - Value swaps (cheaper alternatives with similar performance)
  - Unique advantages

### 2. Versus Engine

Head-to-head comparisons for specific tasks:
```
Input: Compare GPT-4o vs Claude 3.5 Sonnet for API Documentation
Output: Winner recommendation with specific reasoning about hallucination
        risk, control, and cost trade-offs
```

### 3. Stewardship Calculator

Cost-benefit analysis for real-world usage:
```
Input: 1M tokens/month for RAG application
Output: Cost comparison across models with accuracy/cost trade-off analysis
```

## Project Status

**Version**: 1.1 (Draft)
**Target Launch**: Q3 2025
**Current Phase**: Project initialization

## Roadmap

### Phase 1: MVP (Manual Curation)
- Hand-curated profiles for top 10 models
- Manual competitive landscape analysis
- Basic web interface with behavioral cards

### Phase 2: Automation
- Automated scraping of benchmark data (HuggingFace, Artificial Analysis)
- Algorithms to identify "Closest Twin" based on benchmark similarity
- Automated value swap recommendations

### Phase 3: Niche Specialization
- "The Shade Protocol" - Custom tests for specific use cases
- Biblical fidelity testing
- Permaweb/Arweave coding standards
- Community-contributed behavioral observations

## Tech Stack

- **Frontend**: Next.js (React framework with SSR/SSG)
- **Backend**: Python FastAPI (benchmark processing)
- **Data Storage**: JSON/Markdown (Git-backed) or Arweave (Permaweb)
- **Data Sources**:
  - Automated scrapers (HuggingFace, Artificial Analysis)
  - Manual behavioral tagging interface

## Success Metrics

1. **"Aha!" Moment**: Users saying "Oh, *that's* why my code was breaking"
2. **Stewardship Impact**: Total dollars saved via "Value Swap" recommendations
3. **Return Rate**: Users returning to check competitive landscape before new projects

## Contributing

This project is currently in the initialization phase. Contribution guidelines will be added as the project develops.

## Mission

To demystify AI capabilities by translating abstract benchmarks into human-observable behaviors and direct competitor comparisons, enabling purposeful and financially wise technology choices.

## License

TBD

---

**Owner**: Dylan Shade
**Contact**: TBD
**Documentation**: See `/docs` for detailed specifications
