import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.uzbekmoneytree',
  appName: 'uzbek-money-tree',
  webDir: 'dist',
  server: {
    url: 'https://5215b273-8d16-4e8f-a003-4492b046372a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
