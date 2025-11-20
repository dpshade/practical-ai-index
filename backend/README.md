# Backend API

Python Flask backend for processing benchmark data and serving model information.

## Structure

- `/api` - Flask route handlers (blueprints)
  - Model comparison endpoints
  - Stewardship calculator endpoints
  - Data refresh endpoints
- `/processors` - Benchmark data processing logic
  - CSV/JSON parsers
  - Behavioral translation algorithms
  - Competitive analysis algorithms
- `/scrapers` - Data source scrapers
  - HuggingFace scraper
  - Artificial Analysis scraper
  - Custom benchmark scrapers
- `openrouter_client.py` - OpenRouter API client for LLM access
- `example_openrouter.py` - Example usage of OpenRouter client

## Setup

This project uses **uv** for fast, reliable Python dependency management.

```bash
# Install dependencies
uv pip install

# Configure environment variables
cp .env.example .env
# Edit .env and add your OPENROUTER_API_KEY

# Run development server
uv run flask run --debug

# Or with production server
uv run gunicorn app:app
```

## OpenRouter Integration

The backend uses OpenRouter as the primary LLM provider for behavioral testing and model comparisons.

### Quick Start

```bash
# Test OpenRouter connection
uv run python example_openrouter.py
```

### Usage Example

```python
from openrouter_client import OpenRouterClient

client = OpenRouterClient()

# Test a model
response = client.test_model(
    model="openai/gpt-3.5-turbo",
    prompt="Say hello!"
)
print(response)
```

See `docs/openrouter-integration.md` for detailed documentation.

## Dependencies

See `pyproject.toml` for full dependency list.
