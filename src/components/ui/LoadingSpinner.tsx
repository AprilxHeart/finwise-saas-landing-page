'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  fullScreen = false,
  text = 'กำลังโหลด...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const containerClasses = fullScreen 
    ? 'min-h-screen flex items-center justify-center bg-background dark:bg-gray-900 transition-colors'
    : 'flex items-center justify-center p-4';

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className={`inline-block animate-spin rounded-full border-b-2 border-primary ${sizeClasses[size]} mb-2`}></div>
        {text && (
          <p className="text-foreground-accent text-sm">{text}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;