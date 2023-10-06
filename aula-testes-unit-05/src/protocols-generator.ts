import { v4 as uuidv4 } from 'uuid';

export function generateProtocolForPacient(firstName: string, lastName: string, priority: boolean) {
  return {
    priority,
    date: new Date(),
    pacient: `${firstName} ${lastName}`,
    protocol: uuidv4(),
  }
}