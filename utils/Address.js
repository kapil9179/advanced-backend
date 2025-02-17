import os from "os";

export const getIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address; // Local Network IP return karega
      }
    }
  }
  return '127.0.0.1';
};
