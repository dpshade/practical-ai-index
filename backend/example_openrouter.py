"""
Example usage of OpenRouter client for The Practical AI Index.

This script demonstrates how to use OpenRouter to test and compare models.
"""

from openrouter_client import OpenRouterClient


def example_basic_chat() -> None:
    """Basic chat completion example."""
    print("=== Basic Chat Completion ===\n")

    client = OpenRouterClient()

    response = client.chat_completion(
        model="openai/gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": "Explain what a LLM is in one sentence."}
        ],
        temperature=0.7,
    )

    print(f"Response: {response['choices'][0]['message']['content']}\n")


def example_model_comparison() -> None:
    """Compare multiple models on the same task."""
    print("=== Model Comparison ===\n")

    client = OpenRouterClient()

    models = [
        "openai/gpt-3.5-turbo",
        "anthropic/claude-3.5-sonnet",
        "meta-llama/llama-3-70b-instruct",
    ]

    prompt = "Write a haiku about artificial intelligence."

    for model in models:
        print(f"Model: {model}")
        try:
            response = client.test_model(model, prompt)
            print(f"Response: {response}\n")
        except Exception as e:
            print(f"Error: {e}\n")


def example_behavioral_test() -> None:
    """Test behavioral differences between models."""
    print("=== Behavioral Testing ===\n")

    client = OpenRouterClient()

    # Test prompt designed to reveal personality differences
    test_prompt = """You're helping someone choose between two options:
    A) A $10/month model with 95% accuracy
    B) A $100/month model with 98% accuracy

    Give your honest recommendation."""

    models = [
        "openai/gpt-4-turbo",  # Enterprise-focused
        "meta-llama/llama-3-70b-instruct",  # Open-source
    ]

    for model in models:
        print(f"\n--- {model} ---")
        try:
            response = client.test_model(model, test_prompt)
            print(response)
        except Exception as e:
            print(f"Error: {e}")


def example_list_models() -> None:
    """List available models and their pricing."""
    print("=== Available Models (Sample) ===\n")

    client = OpenRouterClient()

    try:
        models = client.get_models()

        # Show first 10 models as example
        for model in models[:10]:
            model_id = model.get("id", "Unknown")
            pricing = model.get("pricing", {})
            prompt_price = pricing.get("prompt", "N/A")

            print(f"{model_id}")
            print(f"  Input: ${prompt_price}/1M tokens")
            print()

    except Exception as e:
        print(f"Error fetching models: {e}")


def main() -> None:
    """Run all examples."""
    print("\n" + "=" * 60)
    print("OpenRouter Client Examples")
    print("=" * 60 + "\n")

    try:
        # Uncomment the examples you want to run

        # example_basic_chat()
        # example_model_comparison()
        # example_behavioral_test()
        example_list_models()

    except ValueError as e:
        print(f"\n❌ Configuration Error: {e}")
        print("\nMake sure you have:")
        print("1. Created a .env file in the backend directory")
        print("2. Added your OPENROUTER_API_KEY to the .env file")
        print("\nSee docs/openrouter-integration.md for setup instructions.")
    except Exception as e:
        print(f"\n❌ Unexpected Error: {e}")


if __name__ == "__main__":
    main()
