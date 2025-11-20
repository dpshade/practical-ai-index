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

## Setup

This project uses **uv** for fast, reliable Python dependency management.

```bash
# Install dependencies
uv pip install

# Run development server
uv run flask run --debug

# Or with production server
uv run gunicorn app:app
```

## Dependencies

See `pyproject.toml` for full dependency list.
