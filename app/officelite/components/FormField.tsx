import { FieldError, UseFormRegister } from 'react-hook-form';

import styles from './FormField.module.css'; 

interface Props {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  required?: boolean;
  options?: string[];
  hideLabel?: boolean;
  borderStyle?: 'all' | 'bottom';
  labelPosition?: 'top' | 'side';
}

export default function FormField({ 
  label, 
  name, 
  type, 
  register, 
  error, 
  required, 
  options, 
  hideLabel = false, 
  borderStyle = 'all',
  labelPosition = 'top' 
}: Props) {
  const id = `field-${name}`;
  const baseInputStyle = borderStyle === 'bottom' ? styles.inputBottom : styles.input;
  const inputClass = `${baseInputStyle} ${error ? styles.inputError : ''}`;

  return (
    <div className={`${styles.formGroup} ${labelPosition === 'side' ? styles.inlineGroup : ''}`}>
      <label htmlFor={id} className={hideLabel ? styles.visuallyHidden : styles.label}>
        {label}
      </label>

      {type === 'select' && options ? (
        <select
          id={id}
          {...register(name)}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputClass} ${styles.select}`}
        >
          {options.map(option => (
            <option
              key={option.toLowerCase()}
              value={option.toLowerCase()}
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          {...register(name)}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      )}

      {error && (
        <p id={`${id}-error`} className={styles.errorMessage} role='alert'>
          {error.message}
        </p>
      )}
    </div>
  );
}