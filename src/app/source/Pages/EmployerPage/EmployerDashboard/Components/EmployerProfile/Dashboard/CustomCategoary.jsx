import { Tooltip } from '@mui/material';

// Fixed pastel colors
const categoryColors = [
  '#FFE0B2', // light orange
  '#C8E6C9', // light green
  '#BBDEFB', // light blue
  '#F8BBD0', // pink
  '#D1C4E9', // purple
  '#FFCCBC', // coral
  '#DCEDC8', // lime
  '#B2EBF2', // cyan
  '#FFF9C4', // yellow
  '#E1BEE7'  // lavender
];

const renderCategories = (task) => {
  const { category = [] } = task;

  const displayed = category.slice(0, 2);
  const hidden = category.slice(2);

  const renderedChips = displayed.map((cate, index) => (
    <span
      key={index}
      style={{
        backgroundColor: categoryColors[index % categoryColors.length],
        color: "rgb(141 141 141)",
        fontSize: '12px',
        marginRight: 4,
        padding: '2px 6px',
        borderRadius: '8px',
        display: 'inline-block'
      }}
    >
      {cate}
    </span>
  ));

  if (category.length > 2) {
    return (
      <Tooltip title={category.join(', ')} placement='top'>
        <span style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
          {renderedChips}
          <span
            style={{
              backgroundColor: categoryColors[2 % categoryColors.length],
              color:"rgb(141 141 141)",
              fontSize: '12px',
              padding: '2px 6px',
              borderRadius: '8px'
            }}
          >
            +{category.length - 2}
          </span>
        </span>
      </Tooltip>
    );
  }

  return renderedChips;
};

export default renderCategories