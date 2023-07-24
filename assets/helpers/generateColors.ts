const NUM_ROWS: number = 5;
const NUM_COLUMNS: number = 5;
const INITIAL_COLOR: string = 'bg-mid-gray';

const generateColors = (): ColorsState => {
  const colors: ColorsState = {};
  for (let i = 1; i <= NUM_ROWS; i++) {
    colors[i] = Array(NUM_COLUMNS).fill(INITIAL_COLOR);
  }
  return colors;
};

export default generateColors