# OpenRouter Integration

OpenRouter serves as the primary LLM backend for The Practical AI Index, providing unified access to multiple AI models through a single API.

## Why OpenRouter?

OpenRouter is ideal for this project because:

1. **Multi-Model Access**: Single API to access models from OpenAI, Anthropic, Google, Meta, and more
2. **Cost Transparency**: Clear pricing for each model with competitive rates
3. **Model Comparison**: Perfect for a project focused on comparing AI capabilities
4. **No Vendor Lock-in**: Easy to test and compare different models without multiple API integrations
5. **Usage Tracking**: Built-in analytics to understand which models are being tested

## Setup

### 1. Get an API Key

1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up or log in
3. Navigate to the API Keys section
4. Create a new API key

### 2. Configure Environment

Copy the backend environment template and add your API key:

```bash
cd backend
cp .env.example .env
```

Edit `.env` and set your OpenRouter API key:

```bash
OPENROUTER_API_KEY=sk-or-v1-...
```

### 3. Test the Connection

```python
from openrouter_client import OpenRouterClient

# Initialize client
client = OpenRouterClient()

# Test with a simple prompt
response = client.test_model(
    model="openai/gpt-3.5-turbo",
    prompt="Say hello!"
)
print(response)
```

## Available Models

OpenRouter provides access to hundreds of models. Key models for our use cases:

### High-Performance Models
- `openai/gpt-4-turbo` - Best for complex reasoning
- `anthropic/claude-3.5-sonnet` - Best for coding tasks
- `google/gemini-pro-1.5` - Best for long context

### Value Models
- `openai/gpt-3.5-turbo` - Excellent price/performance ratio
- `meta-llama/llama-3-70b` - Strong open-source option
- `mistralai/mistral-7b` - Ultra-cheap for simple tasks

### Specialized Models
- `deepseek/deepseek-coder` - Code-focused
- `anthropic/claude-3-opus` - Maximum intelligence

To get a full list of available models:

```python
client = OpenRouterClient()
models = client.get_models()

for model in models:
    print(f"{model['id']}: ${model['pricing']['prompt']}/1M tokens")
```

## Usage Examples

### Basic Chat Completion

```python
from openrouter_client import OpenRouterClient

client = OpenRouterClient()

messages = [
    {"role": "user", "content": "Explain recursion in simple terms"}
]

response = client.chat_completion(
    model="anthropic/claude-3.5-sonnet",
    messages=messages,
    temperature=0.7
)

print(response["choices"][0]["message"]["content"])
```

### Model Comparison

```python
models_to_test = [
    "openai/gpt-4-turbo",
    "anthropic/claude-3.5-sonnet",
    "meta-llama/llama-3-70b"
]

prompt = "Write a Python function to check if a number is prime."
results = {}

for model in models_to_test:
    response = client.test_model(model, prompt)
    results[model] = response

# Compare responses
for model, response in results.items():
    print(f"\n{model}:\n{response}\n")
```

### Behavioral Testing

```python
# Test "personality" differences
personality_test = "You must choose: save a stranger or save your pet. Explain your reasoning."

models = [
    "openai/gpt-4",  # Corporate, cautious
    "meta-llama/llama-3-70b",  # Open, uncensored
    "anthropic/claude-3.5-sonnet"  # Thoughtful, nuanced
]

for model in models:
    print(f"\n=== {model} ===")
    response = client.test_model(model, personality_test)
    print(response)
```

## Cost Management

OpenRouter provides transparent pricing. Monitor your usage:

1. Check your [OpenRouter dashboard](https://openrouter.ai/activity)
2. Set spending limits in your account settings
3. Use cheaper models for testing, expensive models for production

### Typical Costs (as of 2025)

| Task | Model | Cost per 1M tokens (input) | Recommended Use |
|------|-------|---------------------------|-----------------|
| Testing | `gpt-3.5-turbo` | $0.50 | Development, testing |
| Production | `claude-3.5-sonnet` | $3.00 | High-quality responses |
| Analysis | `gpt-4-turbo` | $10.00 | Complex reasoning |
| Bulk tasks | `llama-3-70b` | $0.70 | Cost-sensitive workloads |

## Integration with Practical AI Index

OpenRouter will be used for:

1. **Behavioral Testing**: Running prompts against multiple models to observe differences
2. **Versus Engine**: Real-time model comparisons for specific tasks
3. **Stewardship Calculator**: Testing cheaper alternatives to validate recommendations
4. **Custom Benchmarks**: Running "Shade Protocol" tests (Biblical fidelity, Arweave coding)

## Error Handling

```python
import requests

try:
    response = client.chat_completion(
        model="invalid/model",
        messages=[{"role": "user", "content": "test"}]
    )
except requests.HTTPError as e:
    print(f"API Error: {e.response.status_code}")
    print(f"Details: {e.response.text}")
except ValueError as e:
    print(f"Configuration Error: {e}")
```

## Best Practices

1. **API Key Security**: Never commit `.env` files with real API keys
2. **Rate Limiting**: Be mindful of OpenRouter's rate limits (varies by model)
3. **Model Selection**: Use the cheapest model that meets your requirements
4. **Caching**: Cache responses for repeated prompts to save costs
5. **Monitoring**: Track token usage to avoid unexpected bills

## Resources

- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Model Pricing](https://openrouter.ai/models)
- [API Reference](https://openrouter.ai/docs/api-reference)
- [Usage Dashboard](https://openrouter.ai/activity)
