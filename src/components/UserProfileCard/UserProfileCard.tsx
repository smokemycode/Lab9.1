// components/UserProfileCard/UserProfileCard.tsx
import React from 'react';
import { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
            {user.name.charAt(0)}
          </div>
        )}

        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          {showEmail && (
            <p className="text-sm text-gray-600">{user.email}</p>
          )}
          {showRole && (
            <p className="text-sm text-blue-600">{user.role}</p>
          )}
        </div>
      </div>

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}

      {children && <div className="mt-3">{children}</div>}
    </div>
  );
};