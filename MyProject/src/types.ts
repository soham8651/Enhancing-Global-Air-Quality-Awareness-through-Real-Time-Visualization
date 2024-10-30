export interface User {
    id: string;
    name: string;
    points: number;
    level: number;
    badges: Badge[];
    activities: Activity[];
    joinedDate: Date;
    streak: number;
    avatar: string;
  }
  
  export interface Badge {
    id: string;
    name: string;
    icon: string;
    description: string;
    dateEarned: Date;
  }
  
  export interface Activity {
    id: string;
    title: string;
    description: string;
    points: number;
    difficulty: 'easy' | 'medium' | 'hard';
    category: 'transport' | 'energy' | 'waste' | 'water';
    completedDate?: Date;
    proofRequired: boolean;
    proofUrl?: string;
  }
  
  export interface AQIData {
    value: number;
    category: string;
    location: string;
    timestamp: Date;
  }