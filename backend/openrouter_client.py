"""
OpenRouter API Client

This module provides a client for interacting with OpenRouter's API to access
various LLM models for behavioral analysis and testing.
"""

import os
import requests
from typing import Optional, Dict, Any, List
from dotenv import load_dotenv

load_dotenv()


class OpenRouterClient:
    """Client for OpenRouter API interactions."""

    def __init__(
        self,
        api_key: Optional[str] = None,
        api_url: Optional[str] = None,
        app_name: Optional[str] = None,
        app_url: Optional[str] = None,
    ) -> None:
        """
        Initialize OpenRouter client.

        Args:
            api_key: OpenRouter API key (defaults to OPENROUTER_API_KEY env var)
            api_url: OpenRouter API URL (defaults to OPENROUTER_API_URL env var)
            app_name: Application name for tracking (defaults to OPENROUTER_APP_NAME)
            app_url: Application URL for tracking (defaults to OPENROUTER_APP_URL)
        """
        self.api_key = api_key or os.getenv("OPENROUTER_API_KEY")
        self.api_url = api_url or os.getenv(
            "OPENROUTER_API_URL", "https://openrouter.ai/api/v1"
        )
        self.app_name = app_name or os.getenv("OPENROUTER_APP_NAME", "practical-ai-index")
        self.app_url = app_url or os.getenv(
            "OPENROUTER_APP_URL", "https://github.com/dpshade/practical-ai-index"
        )

        if not self.api_key:
            raise ValueError("OpenRouter API key is required")

    def _get_headers(self) -> Dict[str, str]:
        """Get headers for OpenRouter API requests."""
        return {
            "Authorization": f"Bearer {self.api_key}",
            "HTTP-Referer": self.app_url,
            "X-Title": self.app_name,
            "Content-Type": "application/json",
        }

    def chat_completion(
        self,
        model: str,
        messages: List[Dict[str, str]],
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
        **kwargs: Any,
    ) -> Dict[str, Any]:
        """
        Create a chat completion using OpenRouter.

        Args:
            model: Model identifier (e.g., "openai/gpt-4", "anthropic/claude-3.5-sonnet")
            messages: List of message dicts with "role" and "content"
            temperature: Sampling temperature (0.0 to 2.0)
            max_tokens: Maximum tokens to generate
            **kwargs: Additional parameters to pass to the API

        Returns:
            API response dict containing the completion

        Raises:
            requests.HTTPError: If the API request fails
        """
        url = f"{self.api_url}/chat/completions"

        payload: Dict[str, Any] = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
        }

        if max_tokens:
            payload["max_tokens"] = max_tokens

        # Add any additional parameters
        payload.update(kwargs)

        response = requests.post(url, headers=self._get_headers(), json=payload)
        response.raise_for_status()

        return response.json()

    def get_models(self) -> List[Dict[str, Any]]:
        """
        Get list of available models from OpenRouter.

        Returns:
            List of model information dicts

        Raises:
            requests.HTTPError: If the API request fails
        """
        url = f"{self.api_url}/models"
        response = requests.get(url, headers=self._get_headers())
        response.raise_for_status()

        return response.json().get("data", [])

    def test_model(
        self, model: str, prompt: str = "Say 'Hello, World!' in a friendly tone."
    ) -> str:
        """
        Test a model with a simple prompt.

        Args:
            model: Model identifier to test
            prompt: Test prompt (defaults to simple greeting)

        Returns:
            Model's response text

        Raises:
            requests.HTTPError: If the API request fails
        """
        messages = [{"role": "user", "content": prompt}]
        response = self.chat_completion(model, messages, temperature=0.7)

        return response["choices"][0]["message"]["content"]
