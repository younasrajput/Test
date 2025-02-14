import React from 'react';
import '../assets/styles/theme.css';

const GlassCard = ({ title, content }) => {
  return (
    <div className="glass-card neon-border">
      <h3 className="neon-text">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default GlassCard;
