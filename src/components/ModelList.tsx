'use client';

import { ModelProfile } from '@/types/model';

interface ModelListProps {
  models: ModelProfile[];
  selectedModelId?: string;
  onSelectModel: (modelId: string) => void;
}

export default function ModelList({ models, selectedModelId, onSelectModel }: ModelListProps) {
  return (
    <div className="model-list">
      <div className="model-list-header">
        <h1>The Practical AI Index</h1>
        <p className="subtitle">
          {models.length} models tested • Plain English insights • Real-world guidance
        </p>
      </div>

      <div className="model-results">
        {models.map((model) => (
          <button
            key={model.id}
            className={`model-card ${selectedModelId === model.id ? 'selected' : ''}`}
            onClick={() => onSelectModel(model.id)}
          >
            <div className="model-card-header">
              <div className="model-title">
                <h3>{model.name}</h3>
                <span className="model-provider">{model.provider}</span>
              </div>
              <div className="model-cost">
                ${model.costPer1MTokens.toFixed(2)}/M tokens
              </div>
            </div>

            <p className="model-tagline">{model.tagline}</p>

            <div className="model-tags">
              {model.bestFor.slice(0, 3).map((use, idx) => (
                <span key={idx} className="tag">
                  {use}
                </span>
              ))}
              {model.bestFor.length > 3 && (
                <span className="tag-more">+{model.bestFor.length - 3} more</span>
              )}
            </div>

            <div className="model-quick-stats">
              <span className="stat">
                <span className="stat-label">Context:</span> {(model.contextWindow / 1000).toFixed(0)}K
              </span>
              <span className="stat">
                <span className="stat-label">Benchmarks:</span> {model.benchmarks.length}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
