export interface IMigration {
  up: () => void;
  down: () => void;
}