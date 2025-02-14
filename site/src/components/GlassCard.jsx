import React from 'react';
import './GlassCard.css';

const GlassCard = ({ title, content }) => {
  return (
    <div className="glass-card">
      <h3 className="neon-text">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default GlassCard;
