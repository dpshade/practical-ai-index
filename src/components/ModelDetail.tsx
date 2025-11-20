'use client';

import { ModelProfile } from '@/types/model';

interface ModelDetailProps {
  model: ModelProfile;
  onClose: () => void;
}

export default function ModelDetail({ model, onClose }: ModelDetailProps) {
  return (
    <div className="model-detail">
      <div className="model-detail-header">
        <div>
          <h2>{model.name}</h2>
          <p className="model-meta">
            {model.provider} {model.version && `• ${model.version}`}
          </p>
        </div>
        <button className="close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      <div className="model-detail-content">
        {/* Tagline */}
        <section className="detail-section">
          <p className="model-tagline-large">{model.tagline}</p>
        </section>

        {/* Best For */}
        <section className="detail-section">
          <h3>Best For</h3>
          <div className="tag-list">
            {model.bestFor.map((use, idx) => (
              <span key={idx} className="tag-large">
                {use}
              </span>
            ))}
          </div>
        </section>

        {/* Behavioral Description */}
        <section className="detail-section">
          <h3>How It Actually Behaves</h3>
          <p className="behavioral-text">{model.behavioralDescription}</p>
          <p className="personality-text">
            <strong>Personality:</strong> {model.personality}
          </p>
        </section>

        {/* Strengths & Weaknesses */}
        <section className="detail-section">
          <div className="two-column">
            <div>
              <h3>Strengths</h3>
              <ul className="strength-list">
                {model.strengths.map((strength, idx) => (
                  <li key={idx}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Weaknesses</h3>
              <ul className="weakness-list">
                {model.weaknesses.map((weakness, idx) => (
                  <li key={idx}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="detail-section competitive-section">
          <h3>Competitive Landscape</h3>

          {model.closestTwins.length > 0 && (
            <div className="competitive-block">
              <h4>Closest Twins</h4>
              {model.closestTwins.map((twin, idx) => (
                <div key={idx} className="competitor-card">
                  <strong>{twin.modelName}</strong>
                  <p>{twin.advantage}</p>
                </div>
              ))}
            </div>
          )}

          {model.beatBy.length > 0 && (
            <div className="competitive-block">
              <h4>Models That Beat It</h4>
              {model.beatBy.map((competitor, idx) => (
                <div key={idx} className="competitor-card">
                  <strong>{competitor.modelName}</strong>
                  <p>Better at: {competitor.advantage}</p>
                </div>
              ))}
            </div>
          )}

          {model.valueSwaps.length > 0 && (
            <div className="competitive-block">
              <h4>Value Swaps (Cheaper Alternatives)</h4>
              {model.valueSwaps.map((swap, idx) => (
                <div key={idx} className="competitor-card value-swap">
                  <strong>{swap.modelName}</strong>
                  <p>{swap.advantage}</p>
                </div>
              ))}
            </div>
          )}

          {model.uniqueAdvantages.length > 0 && (
            <div className="competitive-block">
              <h4>Unique Advantages</h4>
              <ul className="unique-advantages-list">
                {model.uniqueAdvantages.map((advantage, idx) => (
                  <li key={idx}>{advantage}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Pricing */}
        <section className="detail-section pricing-section">
          <h3>Pricing & Context</h3>
          <div className="pricing-grid">
            <div className="pricing-item">
              <div className="pricing-value">${model.costPer1MTokens.toFixed(2)}</div>
              <div className="pricing-label">per 1M tokens</div>
            </div>
            <div className="pricing-item">
              <div className="pricing-value">{(model.contextWindow / 1000).toFixed(0)}K</div>
              <div className="pricing-label">context window</div>
            </div>
          </div>
        </section>

        {/* Stewardship Note */}
        {model.stewardshipNote && (
          <section className="detail-section stewardship-section">
            <h3>Stewardship Note</h3>
            <p className="stewardship-text">{model.stewardshipNote}</p>
          </section>
        )}

        {/* Raw Benchmarks */}
        <section className="detail-section benchmarks-section">
          <h3>Raw Benchmarks</h3>
          <div className="benchmarks-list">
            {model.benchmarks.map((benchmark, idx) => (
              <div key={idx} className="benchmark-item">
                <div className="benchmark-header">
                  <strong>{benchmark.name}</strong>
                  <span className="benchmark-score">{benchmark.score.toFixed(1)}%</span>
                </div>
                {benchmark.description && (
                  <p className="benchmark-description">{benchmark.description}</p>
                )}
                <div className="benchmark-bar">
                  <div
                    className="benchmark-fill"
                    style={{ width: `${benchmark.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
