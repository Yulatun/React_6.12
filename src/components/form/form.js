import React, { useState } from 'react';
import Input from '../input/input';
import TextArea from '../textarea/textarea';
import HelperText from '../helperText/helperText';
import Button from '../button/button';
import DisplayCounter from '../displayCounter/displayCounter';
import {
  notEmptyValidator,
  notEmptyDateValidator,
  firstCapitalLetterValidator,
  letterOfAlphabetValidator,
  webSiteValidator,
  charactersCounter,
  telephoneValidator,
} from './validators';
import './form.css';

const Form = (props)=> {
  const [fieldsState, setFieldsState] = useState({
    name: '',
    lastName: '',
    site: '',
    about: '',
    stack: '',
    project: '',
    date: '',
    tel: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    site: '',
    about: '',
    stack: '',
    project: '',
    date: '',
    tel: '',
  });

  const validation = {
    name: [
      notEmptyValidator,
      firstCapitalLetterValidator,
      letterOfAlphabetValidator,
    ],
    lastName: [
      notEmptyValidator,
      firstCapitalLetterValidator,
      letterOfAlphabetValidator,
    ],
    date: [notEmptyDateValidator],
    site: [notEmptyValidator, webSiteValidator],
    about: [notEmptyValidator, charactersCounter],
    stack: [notEmptyValidator, charactersCounter],
    project: [notEmptyValidator, charactersCounter],
    tel: [notEmptyValidator, telephoneValidator],
  };
  const maxNumberOfCharactersInTextArea = 600;
  const handleValidation = (fieldName, validators, newValue) => {
    let error = errors;
    let validationResult = '';
    for (let i = 0; i < validators.length; i++) {
      const v = validators[i];
      validationResult = v(newValue);
      if (validationResult) {
        break;
      }
    }
    let updateErrors = { ...error };
    errors[fieldName] = validationResult;
    setErrors(updateErrors);
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    const allFieldsName = Object.keys(validation);
    allFieldsName.forEach((name) =>
      handleValidation(name, validation[name], fieldsState[name].trim())
    );
    if (Object.values(errors).every((e) => !e)) {
      props.onChangePage(fieldsState);
    }
  };

  const handleChange = (fieldName, validators, e) => {
    let fields = fieldsState;
    let newValue = e.target.value;
    fields[fieldName] = newValue;
    let fieldsUpdate = { ...fields };
    const newValueCutSpace = newValue.trim();
    setFieldsState(fieldsUpdate);
    handleValidation(fieldName, validators, newValueCutSpace);
  };

  const allReset = () => {
    setFieldsState({});
    setErrors({});
  };

  return (
    <form id='userData' className='form-field'>
      <Input
        title='Имя'
        placeholder='Имя'
        htmlFor='name'
        className='input-form'
        value={fieldsState.name}
        onChange={(e) => handleChange('name', validation.name, e)}
      />
      <HelperText value={errors.name} />

      <Input
        type='text'
        title='Фамилия'
        placeholder='Фамилия'
        htmlFor='lastName'
        className='input-form'
        value={fieldsState.lastName}
        onChange={(e) => handleChange('lastName', validation.lastName, e)}
      />
      <HelperText value={errors.lastName} />

      <Input
        title='Дата Рождения'
        htmlFor='name'
        type='date'
        className='input-form'
        onChange={(e) => handleChange('date', validation.date, e)}
        value={fieldsState.date}
      />
      <HelperText value={errors.date} />

      <Input
        title='Телефон'
        placeholder='+370'
        htmlFor='phone'
        type='tel'
        className='input-form'
        onChange={(e) => handleChange('tel', validation.tel, e)}
        value={fieldsState.tel}
      ></Input>
      <HelperText value={errors.tel} />

      <Input
        title='Сайт'
        placeholder='https://'
        htmlFor='site'
        className='input-form'
        onChange={(e) => handleChange('site', validation.site, e)}
        value={fieldsState.site}
      />
      <HelperText value={errors.site} />

      <TextArea
        rows='7'
        title='О себе'
        placeholder='О себе'
        htmlFor='About'
        maxLength={maxNumberOfCharactersInTextArea}
        className='textarea-form'
        onChange={(e) => handleChange('about', validation.about, e)}
        value={fieldsState.about}
      />

      <div className='textarea-text-helpers-box'>
        {errors.about ? (
          <HelperText value={errors.about} />
        ) : (
          <DisplayCounter
            className='box-display-letters-counter'
            restNumber={
              maxNumberOfCharactersInTextArea -
              (fieldsState.about.trim() || '').length
            }
            allNumber={maxNumberOfCharactersInTextArea}
            text={'Осталось символов:'}
          />
        )}
      </div>
      <TextArea
        rows='7'
        title='Стек технологий'
        placeholder='Стек технологий'
        htmlFor='stack'
        maxLength={maxNumberOfCharactersInTextArea}
        className='textarea-form'
        onChange={(e) => handleChange('stack', validation.stack, e)}
        value={fieldsState.stack}
      />
      <div className='textarea-text-helpers-box'>
        {errors.stack ? (
          <HelperText value={errors.stack} />
        ) : (
          <DisplayCounter
            className='box-display-letters-counter'
            restNumber={
              maxNumberOfCharactersInTextArea -
              (fieldsState.stack.trim() || '').length
            }
            allNumber={maxNumberOfCharactersInTextArea}
            text={'Осталось символов:'}
          />
        )}
      </div>

      <TextArea
        rows='7'
        title='Описание последнего проекта'
        placeholder='Описание последнего проекта'
        htmlFor='project'
        maxLength={maxNumberOfCharactersInTextArea}
        className='textarea-form'
        onChange={(e) => handleChange('project', fieldsState.project, e)}
        value={fieldsState.project}
      />
      <div className='textarea-text-helpers-box'>
        {errors.project ? (
          <HelperText value={errors.project} />
        ) : (
          <DisplayCounter
            className='box-display-letters-counter'
            restNumber={
              maxNumberOfCharactersInTextArea -
              (fieldsState.project.trim() || '').length
            }
            allNumber={maxNumberOfCharactersInTextArea}
            text={'Осталось символов:'}
          />
        )}
      </div>

      <div className='btn-block'>
        <Button
          className='reset'
          text='Отмена'
          type='reset'
          onClick={() => allReset}
        />
        <Button
          className='save'
          text='Сохранить'
          type='submit'
          onClick={contactSubmit}
        />
      </div>
    </form>
  );
}

export default Form;
