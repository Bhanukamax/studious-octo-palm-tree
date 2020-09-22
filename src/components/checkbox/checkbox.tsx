import classnames from 'classnames';
import React from 'react';
import './checkbox.scss';

type CheckboxStyle = 'checkbox' | 'checkbox-black' | 'expand';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checkboxStyle?: CheckboxStyle;
}

function Checkbox({ checkboxStyle = 'checkbox', ...props }: Props) {
  const classNames = classnames(
    'checkbox__icon',
    `checkbox__icon--${checkboxStyle}`,
    {
      'checkbox_icon--checked': props.checked,
    }
  );

  const inputClassNames = classnames('checkbox');

  return (
    <div className='checkbox__container'>
      <label htmlFor={props.id} className={classNames}></label>
      <input type='checkbox' {...props} className={inputClassNames} />
    </div>
  );
}

export default Checkbox;
