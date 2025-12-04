interface EmptyStateProps {
  message: string;
  className?: string;
}

export function EmptyState({ message, className }: EmptyStateProps) {
  return (
    <div className={`flex items-center justify-center py-12 ${className || ''}`}>
      <p className="text-secondary-500">{message}</p>
    </div>
  );
}

