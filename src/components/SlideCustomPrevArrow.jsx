import { createElement} from 'react';

export function SlideCustomPrevArrow(props) {
  const { onClick } = props;

  return createElement(
    'button', 
    { className: 'slick-prev pull-left',
      type:'button'
     },
    <img src='images/Arrow5.png' onClick={onClick} />
  );
}
