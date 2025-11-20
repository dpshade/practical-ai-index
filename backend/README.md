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

The backend uses **OpenRouter free models** by default, providing zero-cost AI access for development and testing.

### Free Models Available

- `deepseek/deepseek-r1:free` (default) - Best for reasoning and coding
- `z-ai/glm-4.5-air:free` - Fast general tasks
- `qwen/qwen-2.5-7b:free` - Multilingual support
- `mistralai/mistral-7b:free` - High-speed inference
- `google/gemma-7b:free` - Lightweight tasks

**No credit card required!** Just sign up at [openrouter.ai](https://openrouter.ai/keys) for a free API key.

### Quick Start

```bash
# 1. Get free API key from https://openrouter.ai/keys

# 2. Test OpenRouter connection
uv run python example_openrouter.py

# 3. Start the Flask API server
uv run flask run --debug

# 4. Test the API
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

### API Endpoints

- `GET /` - Health check
- `POST /api/chat` - Chat with free models
- `GET /api/models/free` - List available free models
- `POST /api/compare` - Compare multiple models
- `GET /api/health` - Detailed health check

### Usage Example

```python
from openrouter_client import OpenRouterClient

client = OpenRouterClient()

# Test a FREE model
response = client.test_model(
    model="deepseek/deepseek-r1:free",
    prompt="Explain AI in simple terms"
)
print(response)
```

See `docs/free-models.md` for complete free model documentation.
See `docs/openrouter-integration.md` for advanced usage.

## Dependencies

See `pyproject.toml` for full dependency list.
