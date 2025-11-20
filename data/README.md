# Data Storage

This directory contains model profiles and benchmark data.

## Structure

### `/models`
Model behavioral profiles in JSON/Markdown format. Each model has:
- Behavioral description
- Coding capabilities
- Memory characteristics
- Competitive landscape
- Pricing information

Example structure:
```
/models
  /gpt-4o
    profile.json
    behavioral-notes.md
  /claude-3-5-sonnet
    profile.json
    behavioral-notes.md
```

### `/benchmarks`
Raw benchmark data from various sources:
- HuggingFace leaderboard exports
- Artificial Analysis data
- Custom test results

## Data Format

Model profiles follow this schema:
```json
{
  "id": "gpt-4o",
  "name": "GPT-4o",
  "provider": "OpenAI",
  "nickname": "Jack of All Trades",
  "behavioral_traits": {
    "personality": "Excessively polite, corporate tone",
    "coding_style": "Capable but sometimes lazy",
    "memory": "Perfect fidelity over long conversations"
  },
  "competitive_landscape": {
    "closest_twin": "claude-3-opus",
    "beaten_by": ["claude-3-5-sonnet"],
    "value_swap": "deepseek-v3",
    "unique_edge": "Best-in-class multi-modal reliability"
  },
  "benchmarks": {
    "mmlu": 87.3,
    "humaneval": 92.0,
    "gsm8k": 95.1
  },
  "pricing": {
    "input_per_mtok": 2.50,
    "output_per_mtok": 10.00
  }
}
```
